"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LikertScale } from "@/components/quiz/likert-scale";
import { useT } from "@/lib/i18n/use-translations";
import { useLocale } from "@/components/locale-provider";
import type { DictKey } from "@/lib/i18n/dictionary";
import type { LikertValue, Question } from "@/lib/types";

const CATEGORY_LABEL_KEY: Record<Question["category"], DictKey> = {
  mbti: "quiz.category.mbti",
  mindset: "quiz.category.mindset",
  lifestyle: "quiz.category.lifestyle",
};

interface QuestionCardProps {
  question: Question;
  index: number;
  total: number;
  value: LikertValue | undefined;
  onAnswer: (value: LikertValue) => void;
}

export function QuestionCard({ question, index, total, value, onAnswer }: QuestionCardProps) {
  const t = useT();
  const { locale } = useLocale();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0, pointerEvents: "auto" }}
        exit={{ opacity: 0, x: -24, pointerEvents: "none" }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      >
        <Card className="border-border/60 shadow-lg">
          <CardContent className="flex flex-col gap-8 p-6 sm:p-10">
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="font-normal">
                {t(CATEGORY_LABEL_KEY[question.category])}
              </Badge>
              <span className="font-mono text-xs text-muted-foreground">
                {index + 1} / {total}
              </span>
            </div>
            <h2 className="text-balance font-heading text-xl font-medium leading-snug sm:text-2xl">
              {locale === "my" ? question.textMy : question.text}
            </h2>
            <LikertScale value={value} onChange={onAnswer} />
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
