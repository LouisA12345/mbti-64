import type { Question } from "../types";

// 48 MBTI questions (12 per axis, balanced 6/6 per pole)
const MBTI_QUESTIONS: Question[] = [
  // Extraversion vs Introversion
  { id: "ei-e-1", axis: "EI", pole: "E", category: "mbti", text: "I feel energized after spending time in a large group of people." },
  { id: "ei-e-2", axis: "EI", pole: "E", category: "mbti", text: "I tend to think out loud, working through ideas by talking about them." },
  { id: "ei-e-3", axis: "EI", pole: "E", category: "mbti", text: "I find it easy to start a conversation with someone I've just met." },
  { id: "ei-e-4", axis: "EI", pole: "E", category: "mbti", text: "I'd rather spend a Friday night at a lively gathering than a quiet night in." },
  { id: "ei-e-5", axis: "EI", pole: "E", category: "mbti", text: "I often seek out new social situations rather than avoiding them." },
  { id: "ei-e-6", axis: "EI", pole: "E", category: "mbti", text: "I look forward to meeting new people at social events." },
  { id: "ei-i-1", axis: "EI", pole: "I", category: "mbti", text: "I need quiet, alone time to recharge after a busy social day." },
  { id: "ei-i-2", axis: "EI", pole: "I", category: "mbti", text: "I prefer to think through my ideas fully before sharing them out loud." },
  { id: "ei-i-3", axis: "EI", pole: "I", category: "mbti", text: "Large parties drain my energy faster than they excite me." },
  { id: "ei-i-4", axis: "EI", pole: "I", category: "mbti", text: "I feel most like myself when I have time alone with my own thoughts." },
  { id: "ei-i-5", axis: "EI", pole: "I", category: "mbti", text: "I'd rather have a few close friends than a wide circle of acquaintances." },
  { id: "ei-i-6", axis: "EI", pole: "I", category: "mbti", text: "I do my best thinking when I'm by myself, away from other people." },

  // Sensing vs Intuition
  { id: "sn-s-1", axis: "SN", pole: "S", category: "mbti", text: "I trust concrete facts and direct experience more than abstract theories." },
  { id: "sn-s-2", axis: "SN", pole: "S", category: "mbti", text: "I pay close attention to details that others tend to overlook." },
  { id: "sn-s-3", axis: "SN", pole: "S", category: "mbti", text: "I prefer step-by-step instructions over figuring things out on my own." },
  { id: "sn-s-4", axis: "SN", pole: "S", category: "mbti", text: "I focus on what is real and practical rather than what could be." },
  { id: "sn-s-5", axis: "SN", pole: "S", category: "mbti", text: "I remember events in vivid, specific detail rather than general impressions." },
  { id: "sn-s-6", axis: "SN", pole: "S", category: "mbti", text: "I focus on the details in front of me rather than their big-picture implications." },
  { id: "sn-n-1", axis: "SN", pole: "N", category: "mbti", text: "I often find myself imagining future possibilities rather than focusing on the present." },
  { id: "sn-n-2", axis: "SN", pole: "N", category: "mbti", text: "I enjoy exploring abstract theories and ideas for their own sake." },
  { id: "sn-n-3", axis: "SN", pole: "N", category: "mbti", text: "I notice underlying patterns and connections that aren't immediately obvious." },
  { id: "sn-n-4", axis: "SN", pole: "N", category: "mbti", text: "I'm more interested in what something could become than what it currently is." },
  { id: "sn-n-5", axis: "SN", pole: "N", category: "mbti", text: "I trust my hunches even when I can't fully explain the reasoning behind them." },
  { id: "sn-n-6", axis: "SN", pole: "N", category: "mbti", text: "I enjoy connecting ideas from completely different fields to form a new perspective." },

  // Thinking vs Feeling
  { id: "tf-t-1", axis: "TF", pole: "T", category: "mbti", text: "I make decisions based on logic and objective analysis rather than personal feelings." },
  { id: "tf-t-2", axis: "TF", pole: "T", category: "mbti", text: "I value honesty over tact, even if the truth is uncomfortable." },
  { id: "tf-t-3", axis: "TF", pole: "T", category: "mbti", text: "I find it easy to give critical feedback without getting emotionally caught up in it." },
  { id: "tf-t-4", axis: "TF", pole: "T", category: "mbti", text: "When resolving disputes, I focus on what's fair according to consistent principles." },
  { id: "tf-t-5", axis: "TF", pole: "T", category: "mbti", text: "I evaluate ideas on their own merit, regardless of who proposed them." },
  { id: "tf-t-6", axis: "TF", pole: "T", category: "mbti", text: "I stay objective even when a decision affects someone I care about." },
  { id: "tf-f-1", axis: "TF", pole: "F", category: "mbti", text: "I consider how a decision will affect people's feelings before I make it." },
  { id: "tf-f-2", axis: "TF", pole: "F", category: "mbti", text: "I find it natural to empathize with someone else's point of view, even if I disagree." },
  { id: "tf-f-3", axis: "TF", pole: "F", category: "mbti", text: "Maintaining harmony in a relationship matters more to me than being right." },
  { id: "tf-f-4", axis: "TF", pole: "F", category: "mbti", text: "I tend to make decisions based on my personal values rather than pure logic." },
  { id: "tf-f-5", axis: "TF", pole: "F", category: "mbti", text: "I notice and respond to others' emotional states, even when they're unspoken." },
  { id: "tf-f-6", axis: "TF", pole: "F", category: "mbti", text: "I'd rather smooth over a disagreement than let it hurt someone's feelings." },

  // Judging vs Perceiving
  { id: "jp-j-1", axis: "JP", pole: "J", category: "mbti", text: "I like to have things decided and settled rather than left open-ended." },
  { id: "jp-j-2", axis: "JP", pole: "J", category: "mbti", text: "I prefer to plan things out in advance rather than improvise." },
  { id: "jp-j-3", axis: "JP", pole: "J", category: "mbti", text: "I feel satisfaction from checking items off a structured to-do list." },
  { id: "jp-j-4", axis: "JP", pole: "J", category: "mbti", text: "I like my environment to be organized and predictable." },
  { id: "jp-j-5", axis: "JP", pole: "J", category: "mbti", text: "I tend to finish tasks well before the deadline." },
  { id: "jp-j-6", axis: "JP", pole: "J", category: "mbti", text: "I feel uneasy when a task is left open-ended with no clear deadline." },
  { id: "jp-p-1", axis: "JP", pole: "P", category: "mbti", text: "I prefer to keep my options open rather than commit to a rigid plan." },
  { id: "jp-p-2", axis: "JP", pole: "P", category: "mbti", text: "I work best under the pressure of a last-minute deadline." },
  { id: "jp-p-3", axis: "JP", pole: "P", category: "mbti", text: "I enjoy improvising and adapting on the fly rather than following a fixed schedule." },
  { id: "jp-p-4", axis: "JP", pole: "P", category: "mbti", text: "I find strict routines stifling rather than comforting." },
  { id: "jp-p-5", axis: "JP", pole: "P", category: "mbti", text: "I'm comfortable leaving a decision unresolved until the very last moment." },
  { id: "jp-p-6", axis: "JP", pole: "P", category: "mbti", text: "I'd rather stay flexible and see how a situation unfolds than lock in a plan early." },
];

// 12 Mindset questions: Open vs Anchored (balanced 6/6 per pole)
const MINDSET_QUESTIONS: Question[] = [
  { id: "oa-o-1", axis: "OA", pole: "O", category: "mindset", text: "I actively seek out new experiences, even when the outcome is uncertain." },
  { id: "oa-o-2", axis: "OA", pole: "O", category: "mindset", text: "I get bored quickly when my daily routine stays exactly the same." },
  { id: "oa-o-4", axis: "OA", pole: "O", category: "mindset", text: "I'm quick to change my opinion when presented with a compelling new argument." },
  { id: "oa-o-10", axis: "OA", pole: "O", category: "mindset", text: "I adapt easily when plans change at the last minute." },
  { id: "oa-o-12", axis: "OA", pole: "O", category: "mindset", text: "I feel most alive when I'm learning something completely new." },
  { id: "oa-o-16", axis: "OA", pole: "O", category: "mindset", text: "I enjoy experimenting with new methods even if the old one isn't broken." },
  { id: "oa-a-1", axis: "OA", pole: "A", category: "mindset", text: "I prefer sticking to a routine that I know works well." },
  { id: "oa-a-2", axis: "OA", pole: "A", category: "mindset", text: "I feel unsettled when plans change suddenly without warning." },
  { id: "oa-a-3", axis: "OA", pole: "A", category: "mindset", text: "I trust a method that has worked before over an untested new one." },
  { id: "oa-a-5", axis: "OA", pole: "A", category: "mindset", text: "I value tradition and established ways of doing things." },
  { id: "oa-a-9", axis: "OA", pole: "A", category: "mindset", text: "I prefer detailed, well-tested plans over loose, improvised ones." },
  { id: "oa-a-15", axis: "OA", pole: "A", category: "mindset", text: "Sudden, unplanned changes tend to stress me out." },
];

// 12 Lifestyle questions: Competitive vs Harmonious (balanced 6/6 per pole)
const LIFESTYLE_QUESTIONS: Question[] = [
  { id: "ch-c-1", axis: "CH", pole: "C", category: "lifestyle", text: "I feel most motivated when I'm working toward a clear, measurable goal." },
  { id: "ch-c-2", axis: "CH", pole: "C", category: "lifestyle", text: "I enjoy competitive situations, whether in games, sports, or work." },
  { id: "ch-c-5", axis: "CH", pole: "C", category: "lifestyle", text: "I set ambitious targets for myself and feel driven to hit them." },
  { id: "ch-c-9", axis: "CH", pole: "C", category: "lifestyle", text: "I'd rather be the best at something than simply good enough." },
  { id: "ch-c-11", axis: "CH", pole: "C", category: "lifestyle", text: "I actively seek out challenges that push my limits." },
  { id: "ch-c-14", axis: "CH", pole: "C", category: "lifestyle", text: "I enjoy rankings, leaderboards, and other ways of measuring who's ahead." },
  { id: "ch-h-1", axis: "CH", pole: "H", category: "lifestyle", text: "I feel most fulfilled when everyone in a group succeeds together, not just me." },
  { id: "ch-h-3", axis: "CH", pole: "H", category: "lifestyle", text: "I value emotional balance and calm over the rush of chasing a big win." },
  { id: "ch-h-4", axis: "CH", pole: "H", category: "lifestyle", text: "I'd rather collaborate toward a shared outcome than compete for individual credit." },
  { id: "ch-h-9", axis: "CH", pole: "H", category: "lifestyle", text: "I avoid situations that pit people against each other unnecessarily." },
  { id: "ch-h-11", axis: "CH", pole: "H", category: "lifestyle", text: "I prefer a steady, sustainable pace over an intense sprint toward a goal." },
  { id: "ch-h-15", axis: "CH", pole: "H", category: "lifestyle", text: "I actively protect time for rest, even when there's more I could be achieving." },
];

export const ALL_QUESTIONS: Question[] = [...MBTI_QUESTIONS, ...MINDSET_QUESTIONS, ...LIFESTYLE_QUESTIONS];

/** Fisher-Yates shuffle. Pure function — does not mutate the input array. */
export function shuffleQuestions<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function getSessionQuestions(): Question[] {
  return shuffleQuestions(ALL_QUESTIONS);
}
