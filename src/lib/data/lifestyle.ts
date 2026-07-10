import type { LifestyleType } from "../types";

export interface LifestyleModifier {
  id: LifestyleType;
  name: "Competitive" | "Harmonious";
  clause: string;
  strengths: string[];
  weaknesses: string[];
  communicationAdd: string;
  leadershipAdd: string;
  friendshipAdd: string;
  relationshipAdd: string;
  parentingAdd: string;
  conflictAdd: string;
  workAdd: string;
  growthAdd: string;
  suggestion: string;
  motivationAdd: string;
  environmentAdd: string;
  teamRoleAdd: string;
  careerBoost: string[];
  dailyHabit: string;
  hueShift: number;
  saturationShift: number;
  lightnessShift: number;
  spiritAdjective: string;
  environmentModifier: string;
}

export const LIFESTYLE: Record<LifestyleType, LifestyleModifier> = {
  C: {
    id: "C",
    name: "Competitive",
    clause:
      "A Competitive drive sharpens everything into a target worth chasing — you measure yourself against a bar and quietly push to clear it.",
    strengths: ["Highly goal-driven", "Thrives under pressure to perform", "Relentless about self-improvement"],
    weaknesses: ["Can turn cooperation into comparison", "Struggles to switch off achievement mode", "Sometimes prioritizes winning over wellbeing"],
    communicationAdd: "Your communication carries an edge of momentum — you often frame ideas in terms of results, benchmarks, or a bar to clear.",
    leadershipAdd: "As a leader you set an ambitious bar and expect people to rise to meet it, treating high standards as a form of respect.",
    friendshipAdd: "In friendship you show up as a genuine hype-person who also isn't afraid to challenge someone to level up.",
    relationshipAdd: "In relationships you channel ambition into shared goals, wanting a partner who has their own fire and can push back on yours.",
    parentingAdd: "As a parent you instill drive and resilience, encouraging your kid to set goals and genuinely earn their wins.",
    conflictAdd: "In conflict you can treat disagreement like a contest to win, and you grow when you remember connection outranks the scoreboard.",
    workAdd: "At work you gravitate toward visible metrics and benchmarks, finding steady routine dull unless it's clearly moving a number.",
    growthAdd: "Growth means learning that rest and slower seasons aren't losses — recovery is what makes the next push possible.",
    suggestion: "Schedule one deliberate rest day this week with zero metrics attached, and let it count as progress too.",
    motivationAdd: "Competition against others or your own past best keeps you consistently, visibly motivated.",
    environmentAdd: "You do best somewhere achievement is visible and rewarded, with clear benchmarks to chase.",
    teamRoleAdd: "the driver who keeps the team's ambition and pace honest",
    careerBoost: ["Competitive sales / business development", "Professional or elite athletics", "High-stakes finance or trading"],
    dailyHabit: "Track progress against a personal goal or metric every day",
    hueShift: 6,
    saturationShift: 18,
    lightnessShift: -6,
    spiritAdjective: "Relentless",
    environmentModifier: "an arena-like space charged with the energy of an imminent challenge",
  },
  H: {
    id: "H",
    name: "Harmonious",
    clause:
      "A Harmonious orientation keeps you tuned to the wellbeing of the whole group — you quietly prioritize balance over the next win.",
    strengths: ["Naturally supportive of others", "Skilled at maintaining group balance", "Sustains effort without burning out"],
    weaknesses: ["Can avoid healthy competition entirely", "Sometimes prioritizes peace over necessary friction", "May undersell your own contributions"],
    communicationAdd: "Your communication carries a steadying tone — you often check how a decision will land with everyone before pushing it forward.",
    leadershipAdd: "As a leader you build trust through fairness and calm consistency, treating a sustainable pace as more valuable than a sprint.",
    friendshipAdd: "In friendship you show up as the steady, dependable presence who makes sure everyone in the group actually feels included.",
    relationshipAdd: "In relationships you prioritize mutual comfort and emotional safety, wanting a partner who values balance as much as you do.",
    parentingAdd: "As a parent you build a calm, low-pressure home, encouraging your kid's wellbeing over external markers of success.",
    conflictAdd: "In conflict you seek a resolution that leaves the relationship intact, and you grow when you let healthy tension surface at all.",
    workAdd: "At work you gravitate toward sustainable, collaborative pacing, wary of environments that pit people against each other.",
    growthAdd: "Growth means learning that some conflict, pursued honestly, actually protects harmony better than avoiding it does.",
    suggestion: "Name one piece of credit you've been deflecting lately and let yourself actually claim it.",
    motivationAdd: "A sense of balance, fairness, and genuine wellbeing — yours and others' — keeps you consistently, quietly motivated.",
    environmentAdd: "You do best somewhere collaboration is valued over rivalry and the pace respects everyone's wellbeing.",
    teamRoleAdd: "the stabilizer who keeps the team's culture healthy and sustainable",
    careerBoost: ["Community and wellbeing-focused roles", "Collaborative nonprofit or mission-driven work", "Mediation and human-centered facilitation"],
    dailyHabit: "Check in on your own and others' wellbeing before pushing for more output",
    hueShift: -6,
    saturationShift: -12,
    lightnessShift: 6,
    spiritAdjective: "Serene",
    environmentModifier: "a calm, softly lit space that feels unhurried and genuinely welcoming",
  },
};
