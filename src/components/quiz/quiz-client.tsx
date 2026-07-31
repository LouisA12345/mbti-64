"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Loader2, RotateCcw, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { SiteHeader } from "@/components/site-header";
import { QuestionCard } from "@/components/quiz/question-card";
import { useQuizSession } from "@/hooks/use-quiz-session";
import { encodeScoresToQuery } from "@/lib/scoring";
import { getOrCreateOwnerId } from "@/lib/storage";
import { useT } from "@/lib/i18n/use-translations";

const AUTO_ADVANCE_DELAY_MS = 220;

export function QuizClient() {
  const router = useRouter();
  const t = useT();
  const {
    questions,
    currentIndex,
    currentQuestion,
    answersById,
    answeredCount,
    totalCount,
    progressPercent,
    isFirst,
    isLast,
    isReady,
    answerCurrent,
    goNext,
    goPrev,
    goToIndex,
    submit,
    restart,
  } = useQuizSession();

  // Tracks a pending auto-advance so re-answering or navigating manually can cancel it —
  // without this guard, an uncancelled timer plus a manual Next click double-advances
  // and silently skips a question.
  const advanceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Guards against a repeat click on "See My Result" before navigation completes (very easy
  // to trigger on a real network, where there's a visible beat between click and page change,
  // unlike instant local dev) — without this, each click re-submits and adds another separately
  // timestamped entry to history for what the user experiences as one completion.
  const hasFinishedRef = useRef(false);
  const [isFinishing, setIsFinishing] = useState(false);

  const cancelAutoAdvance = useCallback(() => {
    if (advanceTimeout.current) {
      clearTimeout(advanceTimeout.current);
      advanceTimeout.current = null;
    }
  }, []);

  useEffect(() => cancelAutoAdvance, [cancelAutoAdvance]);

  function handleAnswer(value: 1 | 2 | 3 | 4 | 5) {
    if (!currentQuestion) return;
    answerCurrent(value);
    cancelAutoAdvance();
    if (isLast) return;
    advanceTimeout.current = setTimeout(() => {
      advanceTimeout.current = null;
      goNext();
    }, AUTO_ADVANCE_DELAY_MS);
  }

  function handleNext() {
    cancelAutoAdvance();
    goNext();
  }

  function handlePrev() {
    cancelAutoAdvance();
    goPrev();
  }

  function handleJumpTo(index: number) {
    cancelAutoAdvance();
    goToIndex(index);
  }

  function handleFinish() {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    setIsFinishing(true);
    cancelAutoAdvance();
    const result = submit();
    if (!result) {
      hasFinishedRef.current = false;
      setIsFinishing(false);
      return;
    }
    const query = encodeScoresToQuery(result.scores);
    // Read directly from the URL (no useSearchParams hook) so this stays a plain client
    // event handler with no Suspense-boundary requirement for an otherwise static page.
    const forOwnerId = new URLSearchParams(window.location.search).get("for");
    if (forOwnerId) query.set("for", forOwnerId);

    // Best-effort log of every completed result for the admin dashboard. Fire-and-forget:
    // never blocks navigation, and a failure here has no effect on the visitor's own result.
    const ownerId = getOrCreateOwnerId();
    if (ownerId) {
      fetch("/api/results/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ownerId, code: result.code, scores: result.scores }),
      }).catch(() => {});
    }

    router.push(`/results/${result.code}?${query.toString()}`);
  }

  function handleRestart() {
    if (window.confirm(t("quiz.startOverConfirm"))) {
      cancelAutoAdvance();
      restart();
    }
  }

  if (!isReady || !currentQuestion) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex flex-1 items-center justify-center">
          <Loader2 className="size-6 animate-spin text-muted-foreground" />
        </main>
      </div>
    );
  }

  const currentValue = answersById.get(currentQuestion.id);
  const allAnswered = answeredCount === totalCount;
  const firstUnansweredIndex = allAnswered ? -1 : questions.findIndex((q) => !answersById.has(q.id));

  return (
    <div className="flex min-h-screen flex-col bg-grid-fade">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-6 px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Save className="size-3.5" /> {t("quiz.autosaved")}
            </span>
            <div className="flex items-center gap-3">
              <span>{t("quiz.answeredCount", { answered: answeredCount, total: totalCount, percent: progressPercent })}</span>
              <button
                type="button"
                onClick={handleRestart}
                className="flex items-center gap-1 text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
              >
                <RotateCcw className="size-3" />
                {t("quiz.startOver")}
              </button>
            </div>
          </div>
          <Progress value={progressPercent} className="h-2" />
        </div>

        <QuestionCard
          question={currentQuestion}
          index={currentIndex}
          total={totalCount}
          value={currentValue}
          onAnswer={handleAnswer}
        />

        {isLast && !allAnswered && (
          <div className="flex flex-col items-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-center text-sm text-amber-600 dark:text-amber-400">
            <span>{t("quiz.unanswered", { count: totalCount - answeredCount, s: totalCount - answeredCount === 1 ? "" : "s" })}</span>
            {firstUnansweredIndex >= 0 && (
              <Button size="sm" variant="outline" onClick={() => handleJumpTo(firstUnansweredIndex)}>
                {t("quiz.goToQuestion", { number: firstUnansweredIndex + 1 })}
              </Button>
            )}
          </div>
        )}

        <div className="flex items-center justify-between gap-3">
          <Button variant="ghost" onClick={handlePrev} disabled={isFirst}>
            <ArrowLeft className="size-4" />
            {t("quiz.back")}
          </Button>

          {isLast ? (
            <Button
              onClick={handleFinish}
              disabled={!allAnswered || isFinishing}
              size="lg"
              className="bg-gradient-brand text-white hover:opacity-90"
            >
              {isFinishing ? <Loader2 className="size-4 animate-spin" /> : null}
              {isFinishing ? t("quiz.preparing") : t("quiz.seeResult")}
              {!isFinishing && <ArrowRight className="size-4" />}
            </Button>
          ) : (
            <Button variant="outline" onClick={handleNext} disabled={currentValue === undefined}>
              {t("quiz.next")}
              <ArrowRight className="size-4" />
            </Button>
          )}
        </div>
      </main>
    </div>
  );
}
