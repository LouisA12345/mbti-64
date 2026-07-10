import {
  MBTI_TYPES,
  MINDSET_TYPES,
  LIFESTYLE_TYPES,
  type MBTIType,
  type MindsetType,
  type LifestyleType,
  type PersonalityCode,
  type RarityInfo,
} from "../types";

/** Commonly-cited approximate population shares for the 16 base MBTI types (sums to ~100%). */
const MBTI_POPULATION_PERCENT: Record<MBTIType, number> = {
  ISFJ: 13.8,
  ESFJ: 12.3,
  ISTJ: 11.6,
  ISFP: 8.8,
  ESTJ: 8.7,
  ESFP: 8.5,
  ENFP: 8.1,
  ISTP: 5.4,
  INFP: 4.4,
  ESTP: 4.3,
  INTP: 3.3,
  ENTP: 3.2,
  ENFJ: 2.5,
  INTJ: 2.1,
  ENTJ: 1.8,
  INFJ: 1.5,
};

// Within each base type, how its population splits across the Mindset and Lifestyle axes.
// Anchored/Harmonious skew more common, reflecting that stability-seeking and
// balance-seeking are more prevalent than novelty-seeking and hyper-competitiveness.
const MINDSET_SPLIT: Record<MindsetType, number> = { O: 0.42, A: 0.58 };
const LIFESTYLE_SPLIT: Record<LifestyleType, number> = { C: 0.35, H: 0.65 };

function labelForRank(rank: number, total: number): RarityInfo["label"] {
  const ratio = rank / total;
  if (ratio <= 0.125) return "Ultra Rare";
  if (ratio <= 0.375) return "Rare";
  if (ratio <= 0.625) return "Uncommon";
  if (ratio <= 0.875) return "Common";
  return "Very Common";
}

function computeRarityTable(): Record<PersonalityCode, RarityInfo> {
  const rawPercents: Array<{ code: PersonalityCode; percent: number }> = [];

  for (const mbti of MBTI_TYPES) {
    for (const mindset of MINDSET_TYPES) {
      for (const lifestyle of LIFESTYLE_TYPES) {
        const code = `${mbti}-${mindset}-${lifestyle}` as PersonalityCode;
        const percent = MBTI_POPULATION_PERCENT[mbti] * MINDSET_SPLIT[mindset] * LIFESTYLE_SPLIT[lifestyle];
        rawPercents.push({ code, percent });
      }
    }
  }

  const totalTypes = rawPercents.length;
  const sortedAscending = [...rawPercents].sort((a, b) => a.percent - b.percent);
  const rankByCode = new Map<PersonalityCode, number>();
  sortedAscending.forEach((entry, i) => rankByCode.set(entry.code, i + 1));

  const table = {} as Record<PersonalityCode, RarityInfo>;
  for (const { code, percent } of rawPercents) {
    const rank = rankByCode.get(code)!;
    table[code] = {
      percent: Math.round(percent * 100) / 100,
      rank,
      totalTypes,
      label: labelForRank(rank, totalTypes),
    };
  }
  return table;
}

export const RARITY_TABLE: Record<PersonalityCode, RarityInfo> = computeRarityTable();

export function getRarity(code: PersonalityCode): RarityInfo {
  return RARITY_TABLE[code];
}
