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
import type { PersonalityProfile } from "@/lib/types";

interface Section {
  title: string;
  icon: LucideIcon;
  content: string | string[];
  variant?: "badges" | "list";
}

function buildSections(profile: PersonalityProfile): Section[] {
  return [
    { title: "Overview", icon: Compass, content: profile.description },
    { title: "Core Motivation", icon: Sparkles, content: profile.coreMotivation },
    { title: "Biggest Strengths", icon: Award, content: profile.strengths },
    { title: "Blind Spots", icon: EyeOff, content: profile.weaknesses },
    { title: "Communication", icon: MessageCircle, content: profile.communicationStyle },
    { title: "Relationships", icon: Heart, content: profile.relationshipStyle },
    { title: "Friendships", icon: Users, content: profile.friendshipStyle },
    { title: "Parenting", icon: Baby, content: profile.parentingStyle },
    { title: "Leadership", icon: Crown, content: profile.leadershipStyle },
    { title: "Career", icon: Briefcase, content: profile.idealTeamRole },
    { title: "Work Style", icon: Hammer, content: profile.workStyle },
    { title: "Decision Making", icon: Scale, content: profile.decisionStyle },
    { title: "Problem Solving", icon: Puzzle, content: profile.problemSolving },
    { title: "Creativity", icon: Palette, content: profile.creativity },
    { title: "Learning Style", icon: GraduationCap, content: profile.learningStyle },
    { title: "Stress Response", icon: Flame, content: profile.stressResponse },
    { title: "Conflict Style", icon: Swords, content: profile.conflictStyle },
    { title: "Personal Growth", icon: TrendingUp, content: profile.growthAdvice },
    { title: "Suggestions For You", icon: Lightbulb, content: profile.suggestions, variant: "list" },
    { title: "Ideal Careers", icon: Target, content: profile.careerPaths },
    { title: "Careers to Avoid", icon: Ban, content: profile.careersToAvoid },
    { title: "Famous Characters", icon: Star, content: profile.famousExamples },
    { title: "Daily Habits", icon: ListChecks, content: profile.dailyHabits },
    { title: "Favorite Work Environment", icon: Building2, content: profile.bestEnvironment },
    { title: "Life Motto", icon: MottoIcon, content: profile.lifeMotto },
    { title: "Quote", icon: QuoteIcon, content: `"${profile.quote}"` },
  ];
}

export function ProfileSections({ profile }: { profile: PersonalityProfile }) {
  const sections = buildSections(profile);

  return (
    <Accordion multiple defaultValue={["Overview", "Core Motivation"]} className="w-full">
      {sections.map(({ title, icon: Icon, content, variant = "badges" }) => (
        <AccordionItem key={title} value={title}>
          <AccordionTrigger className="font-heading text-base">
            <span className="flex items-center gap-2.5">
              <Icon className="size-4 text-brand" />
              {title}
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
