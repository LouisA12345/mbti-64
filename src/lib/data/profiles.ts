import {
  MBTI_TYPES,
  MINDSET_TYPES,
  LIFESTYLE_TYPES,
  type Bilingual,
  type PersonalityCode,
  type PersonalityProfile,
} from "../types";
import type { Locale } from "../i18n/locale";
import { hslToHex } from "../color";
import { MBTI_BASE } from "./mbti-base";
import { MINDSET } from "./mindset";
import { LIFESTYLE } from "./lifestyle";
import { FLAVOR } from "./flavor";
import { getRarity } from "./rarity";

const SPIRIT_ADJECTIVE: Record<string, Bilingual<string>> = {
  OC: { en: "Relentless", my: "မလှုံ့ဆွ" },
  OH: { en: "Wandering", my: "လှည့်လည်" },
  AC: { en: "Disciplined", my: "စည်းကမ်းရှိ" },
  AH: { en: "Steadfast", my: "တည်ငြိမ်" },
};

function pick<T>(bilingual: Bilingual<T>, locale: Locale): T {
  return bilingual[locale];
}

function buildTagline(baseNickname: string, mindsetName: string, lifestyleName: string, locale: Locale): string {
  if (locale === "my") {
    return `${mindsetName} mindset ရှိပြီး ${lifestyleName}သော — ${baseNickname}ရဲ့ ထူးခြားတဲ့ပုံစံတစ်ခု ဖြစ်ပါတယ်။`;
  }
  return `You're ${mindsetName.toLowerCase()}-minded and ${lifestyleName.toLowerCase()} at heart — a distinct take on ${baseNickname.replace(/^The /, "the ")}.`;
}

function buildTeamRole(baseRole: string, teamRoleAdd: string, locale: Locale): string {
  if (locale === "my") {
    return `${baseRole}။ သင်သည် ${teamRoleAdd} လည်း ဖြစ်သည်။`;
  }
  return `${baseRole} You're also ${teamRoleAdd}.`;
}

function composeProfile(code: PersonalityCode, locale: Locale): PersonalityProfile {
  const [mbtiId, mindsetId, lifestyleId] = code.split("-") as [
    keyof typeof MBTI_BASE,
    keyof typeof MINDSET,
    keyof typeof LIFESTYLE,
  ];

  const base = MBTI_BASE[mbtiId];
  const mindset = MINDSET[mindsetId];
  const lifestyle = LIFESTYLE[lifestyleId];
  const flavor = FLAVOR[code];
  const p = <T>(b: Bilingual<T>) => pick(b, locale);

  const hue = base.baseHue + mindset.hueShift + lifestyle.hueShift;
  const saturation = 58 + mindset.saturationShift + lifestyle.saturationShift;
  const lightness = 52 + mindset.lightnessShift + lifestyle.lightnessShift;

  const colorPalette = {
    primary: hslToHex(hue, saturation, lightness),
    secondary: hslToHex(hue + 24, saturation - 10, lightness + 12),
    accent: hslToHex(hue - 30, Math.min(saturation + 20, 90), lightness - 8),
    background: hslToHex(hue, Math.max(saturation - 40, 12), lightness + 36),
  };

  return {
    code,
    mbti: base.id,
    mindset: mindset.id,
    lifestyle: lifestyle.id,
    title: p(flavor.title),
    tagline: buildTagline(p(base.nickname), p(mindset.name), p(lifestyle.name), locale),
    description: `${p(base.summary)} ${p(mindset.clause)} ${p(lifestyle.clause)}`,
    coreMotivation: `${p(base.coreMotivation)} ${p(mindset.motivationAdd)} ${p(lifestyle.motivationAdd)}`,
    strengths: [...p(base.strengths).slice(0, 4), ...p(mindset.strengths).slice(0, 2), ...p(lifestyle.strengths).slice(0, 2)],
    weaknesses: [...p(base.weaknesses).slice(0, 4), ...p(mindset.weaknesses).slice(0, 2), ...p(lifestyle.weaknesses).slice(0, 2)],
    leadershipStyle: `${p(base.leadershipStyle)} ${p(lifestyle.leadershipAdd)}`,
    communicationStyle: `${p(base.communicationStyle)} ${p(mindset.communicationAdd)} ${p(lifestyle.communicationAdd)}`,
    decisionStyle: `${p(base.decisionStyle)} ${p(mindset.decisionAdd)}`,
    workStyle: `${p(base.workStyle)} ${p(mindset.workAdd)} ${p(lifestyle.workAdd)}`,
    friendshipStyle: `${p(base.friendshipStyle)} ${p(lifestyle.friendshipAdd)}`,
    relationshipStyle: `${p(base.relationshipStyle)} ${p(lifestyle.relationshipAdd)}`,
    parentingStyle: `${p(base.parentingStyle)} ${p(lifestyle.parentingAdd)}`,
    problemSolving: `${p(base.problemSolving)} ${p(mindset.problemAdd)}`,
    creativity: `${p(base.creativity)} ${p(mindset.creativityAdd)}`,
    conflictStyle: `${p(base.conflictStyle)} ${p(lifestyle.conflictAdd)}`,
    careerPaths: [...p(base.careerPaths).slice(0, 6), ...p(mindset.careerBoost).slice(0, 1), ...p(lifestyle.careerBoost).slice(0, 1)],
    careersToAvoid: p(base.careersToAvoid),
    stressResponse: `${p(base.stressResponse)} ${p(mindset.stressAdd)}`,
    growthAdvice: `${p(base.growthAdvice)} ${p(mindset.growthAdd)} ${p(lifestyle.growthAdd)}`,
    suggestions: [...p(base.suggestions).slice(0, 3), p(mindset.suggestion), p(lifestyle.suggestion)],
    motivation: `${p(base.motivation)} ${p(mindset.motivationAdd)} ${p(lifestyle.motivationAdd)}`,
    learningStyle: `${p(base.learningStyle)} ${p(mindset.learningAdd)}`,
    bestEnvironment: `${p(base.bestEnvironment)} ${p(lifestyle.environmentAdd)}`,
    idealTeamRole: buildTeamRole(p(base.idealTeamRole), p(lifestyle.teamRoleAdd), locale),
    famousExamples: p(base.famousExamples),
    dailyHabits: [...p(base.dailyHabits).slice(0, 3), p(mindset.dailyHabit), p(lifestyle.dailyHabit)],
    lifeMotto: p(flavor.lifeMotto),
    quote: p(flavor.quote),
    colorPalette,
    rarity: getRarity(code),
    spiritAnimal: `${p(SPIRIT_ADJECTIVE[`${mindset.id}${lifestyle.id}`])} ${p(base.spiritAnimal)}`,
    illustrationPrompt: `A modern flat-vector portrait of a ${mindset.spiritAdjective.toLowerCase()} ${base.nickname.en.replace(/^The /, "").toLowerCase()}, ${mindset.poseModifier}, wearing ${base.clothingDescriptor}, set in ${lifestyle.environmentModifier}. Consistent flat-vector art direction, palette anchored on ${colorPalette.primary}.`,
    image: `/images/personalities/${code.toLowerCase()}.png`,
  };
}

function allCodes(): PersonalityCode[] {
  const codes: PersonalityCode[] = [];
  for (const mbti of MBTI_TYPES) {
    for (const mindset of MINDSET_TYPES) {
      for (const lifestyle of LIFESTYLE_TYPES) {
        codes.push(`${mbti}-${mindset}-${lifestyle}` as PersonalityCode);
      }
    }
  }
  return codes;
}

export const ALL_PERSONALITY_CODES: PersonalityCode[] = allCodes();

const PROFILES_BY_LOCALE: Record<Locale, Record<PersonalityCode, PersonalityProfile>> = {
  en: Object.fromEntries(ALL_PERSONALITY_CODES.map((code) => [code, composeProfile(code, "en")])) as Record<
    PersonalityCode,
    PersonalityProfile
  >,
  my: Object.fromEntries(ALL_PERSONALITY_CODES.map((code) => [code, composeProfile(code, "my")])) as Record<
    PersonalityCode,
    PersonalityProfile
  >,
};

export function getProfile(code: PersonalityCode, locale: Locale = "en"): PersonalityProfile {
  return PROFILES_BY_LOCALE[locale][code];
}

export function getAllProfiles(locale: Locale = "en"): PersonalityProfile[] {
  return ALL_PERSONALITY_CODES.map((code) => PROFILES_BY_LOCALE[locale][code]);
}
