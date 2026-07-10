import type { MindsetType } from "../types";

export interface MindsetModifier {
  id: MindsetType;
  name: "Open" | "Anchored";
  clause: string;
  strengths: string[];
  weaknesses: string[];
  communicationAdd: string;
  decisionAdd: string;
  workAdd: string;
  stressAdd: string;
  growthAdd: string;
  suggestion: string;
  learningAdd: string;
  motivationAdd: string;
  problemAdd: string;
  creativityAdd: string;
  careerBoost: string[];
  dailyHabit: string;
  hueShift: number;
  saturationShift: number;
  lightnessShift: number;
  spiritAdjective: string;
  poseModifier: string;
}

export const MINDSET: Record<MindsetType, MindsetModifier> = {
  O: {
    id: "O",
    name: "Open",
    clause:
      "Being Open keeps you scanning the horizon for what's next — you treat novelty and experimentation as fuel rather than a risk to be managed.",
    strengths: ["Embraces novelty and change", "Comfortable experimenting", "Quick to adapt to new information"],
    weaknesses: ["Can abandon plans too quickly for the next idea", "Struggles with repetitive routine", "Sometimes underestimates proven methods"],
    communicationAdd: "You pepper conversation with new ideas and 'what if' questions, energized by exploring an unfinished thought together.",
    decisionAdd: "You stay open to new information right up to the deadline, willing to reverse course if a better option appears.",
    workAdd: "You prefer projects with room to experiment, and you quietly resist being locked into one fixed method too early.",
    stressAdd: "Under stress you chase an escape hatch of new options rather than sitting with the current problem.",
    growthAdd: "Growth comes from finishing what novelty starts — commitment gives your curiosity somewhere to land.",
    suggestion: "Pick one thing you started for the novelty and see it through to the end before you let yourself start the next one.",
    learningAdd: "You learn best by exploring tangents and connecting a subject to unfamiliar ideas rather than following a fixed curriculum.",
    motivationAdd: "New possibilities and the freedom to explore them keep you genuinely motivated.",
    problemAdd: "You enjoy reframing the problem itself before accepting the obvious solution.",
    creativityAdd: "It shows up as constant experimentation — you try the unconventional option just to see what happens.",
    careerBoost: ["Innovation / R&D roles", "Creative strategy", "Early-stage venture work"],
    dailyHabit: "Deliberately try one new approach or experience each day, however small",
    hueShift: 10,
    saturationShift: 16,
    lightnessShift: 4,
    spiritAdjective: "Wandering",
    poseModifier: "caught mid-stride, gaze fixed on something just out of frame",
  },
  A: {
    id: "A",
    name: "Anchored",
    clause:
      "Being Anchored keeps you rooted in what's proven — you favor the steady discipline of a method that already works over the appeal of something new.",
    strengths: ["Highly consistent and dependable", "Builds deep expertise through repetition", "Resistant to distraction from proven goals"],
    weaknesses: ["Can be slow to adopt better new methods", "Uncomfortable with sudden disruption", "Sometimes dismisses untested ideas too quickly"],
    communicationAdd: "You communicate in grounded, concrete terms, preferring a clear plan over an open-ended brainstorm.",
    decisionAdd: "You decide by leaning on what has reliably worked before, and you rarely reopen a decision without a compelling reason.",
    workAdd: "You prefer a defined process and steady cadence, building mastery by repeating and refining rather than reinventing.",
    stressAdd: "Under stress you retreat further into familiar routines, finding stability in structure that already makes sense.",
    growthAdd: "Growth comes from letting a proven method flex occasionally — not every new approach is a threat to what already works.",
    suggestion: "Try one small, genuinely untested approach this week on something low-stakes, purely to see what you'd learn.",
    learningAdd: "You learn best through structured repetition and mastery of fundamentals before moving on.",
    motivationAdd: "Stability, mastery, and the satisfaction of steady, visible progress keep you genuinely motivated.",
    problemAdd: "You solve by applying a dependable method with discipline rather than reinventing the approach each time.",
    creativityAdd: "It shows up as refinement — you perfect a craft or process until it quietly outperforms anything new.",
    careerBoost: ["Operations and process roles", "Institutional / traditional career tracks", "Quality and standards management"],
    dailyHabit: "Follow a consistent daily routine that reinforces your long-term goals",
    hueShift: -10,
    saturationShift: -14,
    lightnessShift: -4,
    spiritAdjective: "Steadfast",
    poseModifier: "planted firmly, weight settled, entirely at ease standing still",
  },
};
