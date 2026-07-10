import { AXES, AXIS_POLES, type Answer, type Axis, type DimensionScores, type Question, type ScoringResult, type PersonalityCode } from "./types";

/**
 * Converts a 1-5 Likert value into a signed contribution in [-2, 2],
 * where +2 is "Strongly Agree" support for the question's pole.
 */
function likertContribution(value: number): number {
  return value - 3;
}

export function scoreAnswers(questions: Question[], answers: Answer[]): ScoringResult {
  const answerMap = new Map(answers.map((a) => [a.questionId, a.value]));
  const questionsByAxis = new Map<Axis, Question[]>();

  for (const axis of AXES) questionsByAxis.set(axis, []);
  for (const q of questions) questionsByAxis.get(q.axis)?.push(q);

  const scores = {} as DimensionScores;

  for (const axis of AXES) {
    const axisQuestions = questionsByAxis.get(axis) ?? [];
    const [positivePole] = AXIS_POLES[axis];

    let raw = 0;
    let maxRaw = 0;
    for (const q of axisQuestions) {
      const value = answerMap.get(q.id);
      if (value === undefined) continue;
      const contribution = likertContribution(value);
      raw += q.pole === positivePole ? contribution : -contribution;
      maxRaw += 2;
    }

    const percentage = maxRaw === 0 ? 50 : Math.round(50 + (raw / maxRaw) * 50);
    scores[axis] = Math.min(100, Math.max(0, percentage));
  }

  const mbti = `${scores.EI >= 50 ? "E" : "I"}${scores.SN >= 50 ? "S" : "N"}${scores.TF >= 50 ? "T" : "F"}${scores.JP >= 50 ? "J" : "P"}` as ScoringResult["mbti"];
  const mindset = scores.OA >= 50 ? "O" : "A";
  const lifestyle = scores.CH >= 50 ? "C" : "H";
  const code = `${mbti}-${mindset}-${lifestyle}` as PersonalityCode;

  return { scores, mbti, mindset, lifestyle, code };
}

const QUERY_KEYS: Record<Axis, string> = { EI: "e", SN: "s", TF: "t", JP: "j", OA: "o", CH: "c" };

export function encodeScoresToQuery(scores: DimensionScores): URLSearchParams {
  const params = new URLSearchParams();
  for (const axis of AXES) params.set(QUERY_KEYS[axis], String(scores[axis]));
  return params;
}

export function decodeScoresFromQuery(searchParams: URLSearchParams | Record<string, string | string[] | undefined>): DimensionScores | null {
  const get = (key: string): string | undefined =>
    searchParams instanceof URLSearchParams ? (searchParams.get(key) ?? undefined) : (searchParams[key] as string | undefined);

  const scores = {} as DimensionScores;
  for (const axis of AXES) {
    const raw = get(QUERY_KEYS[axis]);
    if (raw === undefined) return null;
    const parsed = Number(raw);
    if (Number.isNaN(parsed)) return null;
    scores[axis] = Math.min(100, Math.max(0, Math.round(parsed)));
  }
  return scores;
}

/** Representative (non-personal) dimension scores for a code, used on archetype pages visited without a live result. */
export function defaultScoresForCode(code: PersonalityCode): DimensionScores {
  const [mbti, mindset, lifestyle] = code.split("-");
  const letters = `${mbti}${mindset}${lifestyle}`;
  const scores = {} as DimensionScores;
  for (const axis of AXES) {
    const [positivePole] = AXIS_POLES[axis];
    scores[axis] = letters.includes(positivePole) ? 72 : 28;
  }
  return scores;
}

export function isComplete(questions: Question[], answers: Answer[]): boolean {
  const answered = new Set(answers.map((a) => a.questionId));
  return questions.every((q) => answered.has(q.id));
}

export function completionPercentage(questions: Question[], answers: Answer[]): number {
  if (questions.length === 0) return 0;
  const answered = new Set(answers.map((a) => a.questionId));
  const count = questions.filter((q) => answered.has(q.id)).length;
  return Math.round((count / questions.length) * 100);
}
