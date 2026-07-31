import {
  Compass, Sparkles, Award, EyeOff, MessageCircle, Heart, Users, Baby,
  Crown, Briefcase, Hammer, Scale, Puzzle, Palette, GraduationCap,
  Flame, Swords, TrendingUp, Target, Ban, Star, ListChecks, Building2, Quote as QuoteIcon, Compass as MottoIcon,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import type { DictKey } from "@/lib/i18n/dictionary";
import type { PersonalityProfile } from "@/lib/types";

export interface ProfileSection {
  id: string;
  titleKey: DictKey;
  icon: LucideIcon;
  content: string | string[];
  variant?: "badges" | "list";
}

export function buildProfileSections(profile: PersonalityProfile): ProfileSection[] {
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
