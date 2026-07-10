import {
  MBTI_TYPES,
  MINDSET_TYPES,
  LIFESTYLE_TYPES,
  type PersonalityCode,
  type PersonalityProfile,
} from "../types";
import { hslToHex } from "../color";
import { MBTI_BASE } from "./mbti-base";
import { MINDSET } from "./mindset";
import { LIFESTYLE } from "./lifestyle";
import { FLAVOR } from "./flavor";
import { getRarity } from "./rarity";

const SPIRIT_ADJECTIVE: Record<string, string> = {
  OC: "Relentless",
  OH: "Wandering",
  AC: "Disciplined",
  AH: "Steadfast",
};

function buildTagline(baseNickname: string, mindsetName: string, lifestyleName: string): string {
  return `You're ${mindsetName.toLowerCase()}-minded and ${lifestyleName.toLowerCase()} at heart — a distinct take on ${baseNickname.replace(/^The /, "the ")}.`;
}

function composeProfile(code: PersonalityCode): PersonalityProfile {
  const [mbtiId, mindsetId, lifestyleId] = code.split("-") as [
    keyof typeof MBTI_BASE,
    keyof typeof MINDSET,
    keyof typeof LIFESTYLE,
  ];

  const base = MBTI_BASE[mbtiId];
  const mindset = MINDSET[mindsetId];
  const lifestyle = LIFESTYLE[lifestyleId];
  const flavor = FLAVOR[code];

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
    title: flavor.title,
    tagline: buildTagline(base.nickname, mindset.name, lifestyle.name),
    description: `${base.summary} ${mindset.clause} ${lifestyle.clause}`,
    coreMotivation: `${base.coreMotivation} ${mindset.motivationAdd} ${lifestyle.motivationAdd}`,
    strengths: [...base.strengths.slice(0, 4), ...mindset.strengths.slice(0, 2), ...lifestyle.strengths.slice(0, 2)],
    weaknesses: [...base.weaknesses.slice(0, 4), ...mindset.weaknesses.slice(0, 2), ...lifestyle.weaknesses.slice(0, 2)],
    leadershipStyle: `${base.leadershipStyle} ${lifestyle.leadershipAdd}`,
    communicationStyle: `${base.communicationStyle} ${mindset.communicationAdd} ${lifestyle.communicationAdd}`,
    decisionStyle: `${base.decisionStyle} ${mindset.decisionAdd}`,
    workStyle: `${base.workStyle} ${mindset.workAdd} ${lifestyle.workAdd}`,
    friendshipStyle: `${base.friendshipStyle} ${lifestyle.friendshipAdd}`,
    relationshipStyle: `${base.relationshipStyle} ${lifestyle.relationshipAdd}`,
    parentingStyle: `${base.parentingStyle} ${lifestyle.parentingAdd}`,
    problemSolving: `${base.problemSolving} ${mindset.problemAdd}`,
    creativity: `${base.creativity} ${mindset.creativityAdd}`,
    conflictStyle: `${base.conflictStyle} ${lifestyle.conflictAdd}`,
    careerPaths: [...base.careerPaths.slice(0, 6), ...mindset.careerBoost.slice(0, 1), ...lifestyle.careerBoost.slice(0, 1)],
    careersToAvoid: base.careersToAvoid,
    stressResponse: `${base.stressResponse} ${mindset.stressAdd}`,
    growthAdvice: `${base.growthAdvice} ${mindset.growthAdd} ${lifestyle.growthAdd}`,
    suggestions: [...base.suggestions.slice(0, 3), mindset.suggestion, lifestyle.suggestion],
    motivation: `${base.motivation} ${mindset.motivationAdd} ${lifestyle.motivationAdd}`,
    learningStyle: `${base.learningStyle} ${mindset.learningAdd}`,
    bestEnvironment: `${base.bestEnvironment} ${lifestyle.environmentAdd}`,
    idealTeamRole: `${base.idealTeamRole} You're also ${lifestyle.teamRoleAdd}.`,
    famousExamples: base.famousExamples,
    dailyHabits: [...base.dailyHabits.slice(0, 3), mindset.dailyHabit, lifestyle.dailyHabit],
    lifeMotto: flavor.lifeMotto,
    quote: flavor.quote,
    colorPalette,
    rarity: getRarity(code),
    spiritAnimal: `${SPIRIT_ADJECTIVE[`${mindset.id}${lifestyle.id}`]} ${base.spiritAnimal}`,
    illustrationPrompt: `A modern flat-vector portrait of a ${mindset.spiritAdjective.toLowerCase()} ${base.nickname.replace(/^The /, "").toLowerCase()}, ${mindset.poseModifier}, wearing ${base.clothingDescriptor}, set in ${lifestyle.environmentModifier}. Consistent flat-vector art direction, palette anchored on ${colorPalette.primary}.`,
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

export const PERSONALITY_PROFILES: Record<PersonalityCode, PersonalityProfile> = Object.fromEntries(
  ALL_PERSONALITY_CODES.map((code) => [code, composeProfile(code)]),
) as Record<PersonalityCode, PersonalityProfile>;

export function getProfile(code: PersonalityCode): PersonalityProfile {
  return PERSONALITY_PROFILES[code];
}

export function getAllProfiles(): PersonalityProfile[] {
  return ALL_PERSONALITY_CODES.map((code) => PERSONALITY_PROFILES[code]);
}
