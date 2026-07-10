"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { getSessionQuestions } from "@/lib/data/questions";
import { scoreAnswers } from "@/lib/scoring";
import {
  addResultToHistory,
  clearSession,
  loadSession,
  resolveStoredQuestions,
  saveSession,
  type QuizSessionState,
} from "@/lib/storage";
import type { Answer, LikertValue, Question, ScoringResult } from "@/lib/types";

interface UseQuizSessionReturn {
  questions: Question[];
  currentIndex: number;
  currentQuestion: Question | undefined;
  answersById: Map<string, LikertValue>;
  answeredCount: number;
  totalCount: number;
  progressPercent: number;
  isFirst: boolean;
  isLast: boolean;
  isReady: boolean;
  answerCurrent: (value: LikertValue) => void;
  goNext: () => void;
  goPrev: () => void;
  goToIndex: (index: number) => void;
  submit: () => ScoringResult | null;
  restart: () => void;
}

export function useQuizSession(): UseQuizSessionReturn {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Session order is randomized and progress lives in localStorage, so the first render must stay
  // a neutral loading state on both server and client and only hydrate real data post-mount —
  // otherwise the shuffled question order would mismatch between SSR and client hydration.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const stored = loadSession();
    if (stored && stored.questionIds.length > 0) {
      const resolved = resolveStoredQuestions(stored, getSessionQuestions());
      if (resolved.length === stored.questionIds.length) {
        setQuestions(resolved);
        setAnswers(stored.answers);
        setCurrentIndex(Math.min(stored.currentIndex, Math.max(resolved.length - 1, 0)));
        setIsReady(true);
        return;
      }
    }
    setQuestions(getSessionQuestions());
    setAnswers([]);
    setCurrentIndex(0);
    setIsReady(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (!isReady || questions.length === 0) return;
    const state: QuizSessionState = {
      questionIds: questions.map((q) => q.id),
      answers,
      currentIndex,
      updatedAt: Date.now(),
    };
    saveSession(state);
  }, [questions, answers, currentIndex, isReady]);

  const answersById = useMemo(() => {
    return new Map(answers.map((a) => [a.questionId, a.value]));
  }, [answers]);

  const currentQuestion = questions[currentIndex];

  const answerCurrent = useCallback(
    (value: LikertValue) => {
      if (!currentQuestion) return;
      setAnswers((prev) => {
        const next = prev.filter((a) => a.questionId !== currentQuestion.id);
        next.push({ questionId: currentQuestion.id, value });
        return next;
      });
    },
    [currentQuestion],
  );

  const goNext = useCallback(() => {
    setCurrentIndex((i) => Math.min(i + 1, questions.length - 1));
  }, [questions.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => Math.max(i - 1, 0));
  }, []);

  const goToIndex = useCallback(
    (index: number) => {
      setCurrentIndex(Math.min(Math.max(index, 0), Math.max(questions.length - 1, 0)));
    },
    [questions.length],
  );

  const submit = useCallback((): ScoringResult | null => {
    if (questions.length === 0) return null;
    const result = scoreAnswers(questions, answers);
    addResultToHistory({ code: result.code, scores: result.scores, completedAt: Date.now() });
    clearSession();
    return result;
  }, [questions, answers]);

  const restart = useCallback(() => {
    clearSession();
    setQuestions(getSessionQuestions());
    setAnswers([]);
    setCurrentIndex(0);
  }, []);

  const answeredCount = answersById.size;
  const totalCount = questions.length;
  const progressPercent = totalCount === 0 ? 0 : Math.round((answeredCount / totalCount) * 100);

  return {
    questions,
    currentIndex,
    currentQuestion,
    answersById,
    answeredCount,
    totalCount,
    progressPercent,
    isFirst: currentIndex === 0,
    isLast: currentIndex === questions.length - 1,
    isReady,
    answerCurrent,
    goNext,
    goPrev,
    goToIndex,
    submit,
    restart,
  };
}
