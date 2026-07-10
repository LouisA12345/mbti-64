import type { Answer, DimensionScores, Question } from "./types";

const SESSION_KEY = "mbti64.quiz.session.v1";
const HISTORY_KEY = "mbti64.quiz.history.v1";
const OWNER_ID_KEY = "mbti64.owner.id.v1";
const MAX_HISTORY = 25;

export interface QuizSessionState {
  questionIds: string[];
  answers: Answer[];
  currentIndex: number;
  updatedAt: number;
}

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function saveSession(state: QuizSessionState): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(state));
  } catch {
    // localStorage may be unavailable (private mode, quota); autosave is best-effort.
  }
}

export function loadSession(): QuizSessionState | null {
  if (!isBrowser()) return null;
  try {
    const raw = window.localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as QuizSessionState;
  } catch {
    return null;
  }
}

export function clearSession(): void {
  if (!isBrowser()) return;
  window.localStorage.removeItem(SESSION_KEY);
}

/** Rehydrates the stored question order against the live question bank, dropping any that no longer exist. */
export function resolveStoredQuestions(state: QuizSessionState, bank: Question[]): Question[] {
  const byId = new Map(bank.map((q) => [q.id, q]));
  return state.questionIds.map((id) => byId.get(id)).filter((q): q is Question => Boolean(q));
}

export interface StoredResult {
  code: string;
  scores: DimensionScores;
  completedAt: number;
}

/** Prepends a completed result to the local history, capped at MAX_HISTORY, newest first. */
export function addResultToHistory(result: StoredResult): void {
  if (!isBrowser()) return;
  try {
    const history = loadHistory();
    const next = [result, ...history].slice(0, MAX_HISTORY);
    window.localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
  } catch {
    // best-effort
  }
}

export function loadHistory(): StoredResult[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as StoredResult[]) : [];
  } catch {
    return [];
  }
}

export function removeFromHistory(completedAt: number): void {
  if (!isBrowser()) return;
  try {
    const next = loadHistory().filter((r) => r.completedAt !== completedAt);
    window.localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
  } catch {
    // best-effort
  }
}

export function clearHistory(): void {
  if (!isBrowser()) return;
  window.localStorage.removeItem(HISTORY_KEY);
}

/**
 * A stable per-browser id used to give friends an invite link (`/quiz?for=<id>`) so their
 * completed results can be attributed back to this device's History page. Created once and
 * persisted locally — there's no account system, so this id is the only thing tying a shared
 * submission back to "you".
 */
export function getOrCreateOwnerId(): string {
  if (!isBrowser()) return "";
  try {
    const existing = window.localStorage.getItem(OWNER_ID_KEY);
    if (existing) return existing;
    const id = crypto.randomUUID();
    window.localStorage.setItem(OWNER_ID_KEY, id);
    return id;
  } catch {
    return "";
  }
}
