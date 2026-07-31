"use client";

import {
  Compass, Sparkles, Award, EyeOff, MessageCircle, Heart, Users, Baby,
  Crown, Briefcase, Hammer, Scale, Puzzle, Palette, GraduationCap,
  Flame, Swords, TrendingUp, Target, Ban, Star, ListChecks, Building2, Quote as QuoteIcon, Compass as MottoIcon,
  Lightbulb, CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useT } from "@/lib/i18n/use-translations";
import type { DictKey } from "@/lib/i18n/dictionary";
import type { PersonalityProfile } from "@/lib/types";

interface Section {
  id: string;
  titleKey: DictKey;
  icon: LucideIcon;
  content: string | string[];
  variant?: "badges" | "list";
}

function buildSections(profile: PersonalityProfile): Section[] {
  return [
    { id: "overview", titleKey: "section.overview", icon: Compass, content: profile.description },
    { id: "coreMotivation", titleKey: "section.coreMotivation", icon: Sparkles, content: profile.coreMotivation },
    { id: "strengths", titleKey: "section.strengths", icon: Award, content: profile.strengths },
    { id: "weaknesses", titleKey: "section.weaknesses", icon: EyeOff, content: profile.weaknesses },
    { id: "communication", titleKey: "section.communication", icon: MessageCircle, content: profile.communicationStyle },
    { id: "relationships", titleKey: "section.relationships", icon: Heart, content: profile.relationshipStyle },
    { id: "friendships", titleKey: "section.friendships", icon: Users, content: profile.friendshipStyle },
    { id: "parenting", titleKey: "section.parenting", icon: Baby, content: profile.parentingStyle },
    { id: "leadership", titleKey: "section.leadership", icon: Crown, content: profile.leadershipStyle },
    { id: "career", titleKey: "section.career", icon: Briefcase, content: profile.idealTeamRole },
    { id: "workStyle", titleKey: "section.workStyle", icon: Hammer, content: profile.workStyle },
    { id: "decisionMaking", titleKey: "section.decisionMaking", icon: Scale, content: profile.decisionStyle },
    { id: "problemSolving", titleKey: "section.problemSolving", icon: Puzzle, content: profile.problemSolving },
    { id: "creativity", titleKey: "section.creativity", icon: Palette, content: profile.creativity },
    { id: "learningStyle", titleKey: "section.learningStyle", icon: GraduationCap, content: profile.learningStyle },
    { id: "stressResponse", titleKey: "section.stressResponse", icon: Flame, content: profile.stressResponse },
    { id: "conflictStyle", titleKey: "section.conflictStyle", icon: Swords, content: profile.conflictStyle },
    { id: "personalGrowth", titleKey: "section.personalGrowth", icon: TrendingUp, content: profile.growthAdvice },
    { id: "suggestions", titleKey: "section.suggestions", icon: Lightbulb, content: profile.suggestions, variant: "list" },
    { id: "idealCareers", titleKey: "section.idealCareers", icon: Target, content: profile.careerPaths },
    { id: "careersToAvoid", titleKey: "section.careersToAvoid", icon: Ban, content: profile.careersToAvoid },
    { id: "famousCharacters", titleKey: "section.famousCharacters", icon: Star, content: profile.famousExamples },
    { id: "dailyHabits", titleKey: "section.dailyHabits", icon: ListChecks, content: profile.dailyHabits },
    { id: "bestEnvironment", titleKey: "section.bestEnvironment", icon: Building2, content: profile.bestEnvironment },
    { id: "lifeMotto", titleKey: "section.lifeMotto", icon: MottoIcon, content: profile.lifeMotto },
    { id: "quote", titleKey: "section.quote", icon: QuoteIcon, content: `"${profile.quote}"` },
  ];
}

export function ProfileSections({ profile }: { profile: PersonalityProfile }) {
  const t = useT();
  const sections = buildSections(profile);

  return (
    <Accordion multiple defaultValue={["overview", "coreMotivation"]} className="w-full">
      {sections.map(({ id, titleKey, icon: Icon, content, variant = "badges" }) => (
        <AccordionItem key={id} value={id}>
          <AccordionTrigger className="font-heading text-base">
            <span className="flex items-center gap-2.5">
              <Icon className="size-4 text-brand" />
              {t(titleKey)}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            {Array.isArray(content) ? (
              variant === "list" ? (
                <ul className="flex flex-col gap-3">
                  {content.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {content.map((item) => (
                    <Badge key={item} variant="secondary" className="px-3 py-1.5 text-sm font-normal">
                      {item}
                    </Badge>
                  ))}
                </div>
              )
            ) : (
              <p className="text-muted-foreground leading-relaxed">{content}</p>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
