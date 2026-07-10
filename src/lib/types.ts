// Core domain types for the MBTI-64 personality system.
// 16 MBTI types x 2 Mindset types (O/A) x 2 Lifestyle types (C/H) = 64 personalities.

export const MBTI_TYPES = [
  "INTJ", "INTP", "ENTJ", "ENTP",
  "INFJ", "INFP", "ENFJ", "ENFP",
  "ISTJ", "ISFJ", "ESTJ", "ESFJ",
  "ISTP", "ISFP", "ESTP", "ESFP",
] as const;
export type MBTIType = (typeof MBTI_TYPES)[number];

export const MINDSET_TYPES = ["O", "A"] as const;
export type MindsetType = (typeof MINDSET_TYPES)[number]; // O = Open, A = Anchored

export const LIFESTYLE_TYPES = ["C", "H"] as const;
export type LifestyleType = (typeof LIFESTYLE_TYPES)[number]; // C = Competitive, H = Harmonious

export type PersonalityCode = `${MBTIType}-${MindsetType}-${LifestyleType}`;

// The six bipolar axes measured by the assessment.
export type Axis = "EI" | "SN" | "TF" | "JP" | "OA" | "CH";

export const AXES: Axis[] = ["EI", "SN", "TF", "JP", "OA", "CH"];

export type Pole = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P" | "O" | "A" | "C" | "H";

export const AXIS_POLES: Record<Axis, [Pole, Pole]> = {
  EI: ["E", "I"],
  SN: ["S", "N"],
  TF: ["T", "F"],
  JP: ["J", "P"],
  OA: ["O", "A"],
  CH: ["C", "H"],
};

export const AXIS_LABELS: Record<Axis, { positive: string; negative: string; name: string }> = {
  EI: { positive: "Extraversion", negative: "Introversion", name: "Energy" },
  SN: { positive: "Sensing", negative: "Intuition", name: "Perception" },
  TF: { positive: "Thinking", negative: "Feeling", name: "Judgment" },
  JP: { positive: "Judging", negative: "Perceiving", name: "Structure" },
  OA: { positive: "Open", negative: "Anchored", name: "Mindset" },
  CH: { positive: "Competitive", negative: "Harmonious", name: "Lifestyle" },
};

export type QuestionCategory = "mbti" | "mindset" | "lifestyle";

export interface Question {
  id: string;
  axis: Axis;
  pole: Pole; // the pole that "Strongly Agree" supports
  text: string;
  category: QuestionCategory;
}

export type LikertValue = 1 | 2 | 3 | 4 | 5;

export const LIKERT_LABELS: Record<LikertValue, string> = {
  1: "Strongly Disagree",
  2: "Disagree",
  3: "Neutral",
  4: "Agree",
  5: "Strongly Agree",
};

export interface Answer {
  questionId: string;
  value: LikertValue;
}

// Percentage (0-100) leaning toward the *first* pole listed in AXIS_POLES for that axis.
export interface DimensionScores {
  EI: number; // % Extraversion
  SN: number; // % Sensing
  TF: number; // % Thinking
  JP: number; // % Judging
  OA: number; // % Open
  CH: number; // % Competitive
}

export interface ScoringResult {
  scores: DimensionScores;
  mbti: MBTIType;
  mindset: MindsetType;
  lifestyle: LifestyleType;
  code: PersonalityCode;
}

export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

export interface RarityInfo {
  percent: number;
  rank: number;
  totalTypes: number;
  label: "Ultra Rare" | "Rare" | "Uncommon" | "Common" | "Very Common";
}

export interface PersonalityProfile {
  code: PersonalityCode;
  mbti: MBTIType;
  mindset: MindsetType;
  lifestyle: LifestyleType;
  title: string;
  tagline: string;
  description: string;
  coreMotivation: string;
  strengths: string[];
  weaknesses: string[];
  leadershipStyle: string;
  communicationStyle: string;
  decisionStyle: string;
  workStyle: string;
  friendshipStyle: string;
  relationshipStyle: string;
  parentingStyle: string;
  problemSolving: string;
  creativity: string;
  conflictStyle: string;
  careerPaths: string[];
  careersToAvoid: string[];
  stressResponse: string;
  growthAdvice: string;
  suggestions: string[];
  motivation: string;
  learningStyle: string;
  bestEnvironment: string;
  idealTeamRole: string;
  famousExamples: string[];
  dailyHabits: string[];
  lifeMotto: string;
  quote: string;
  colorPalette: ColorPalette;
  rarity: RarityInfo;
  spiritAnimal: string;
  illustrationPrompt: string;
  image: string;
}
