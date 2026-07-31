import type { Bilingual, MBTIType } from "../types";

export interface MBTIBaseProfile {
  id: MBTIType;
  nickname: Bilingual<string>;
  summary: Bilingual<string>;
  coreMotivation: Bilingual<string>;
  strengths: Bilingual<string[]>;
  weaknesses: Bilingual<string[]>;
  leadershipStyle: Bilingual<string>;
  communicationStyle: Bilingual<string>;
  decisionStyle: Bilingual<string>;
  workStyle: Bilingual<string>;
  friendshipStyle: Bilingual<string>;
  relationshipStyle: Bilingual<string>;
  parentingStyle: Bilingual<string>;
  problemSolving: Bilingual<string>;
  creativity: Bilingual<string>;
  conflictStyle: Bilingual<string>;
  careerPaths: Bilingual<string[]>;
  careersToAvoid: Bilingual<string[]>;
  stressResponse: Bilingual<string>;
  growthAdvice: Bilingual<string>;
  suggestions: Bilingual<string[]>;
  motivation: Bilingual<string>;
  learningStyle: Bilingual<string>;
  bestEnvironment: Bilingual<string>;
  idealTeamRole: Bilingual<string>;
  famousExamples: Bilingual<string[]>;
  dailyHabits: Bilingual<string[]>;
  baseHue: number;
  spiritAnimal: Bilingual<string>;
  /** Only used to build the (never rendered) illustrationPrompt — English only is fine. */
  poseDescriptor: string;
  clothingDescriptor: string;
  environmentDescriptor: string;
}

export const MBTI_BASE: Record<MBTIType, MBTIBaseProfile> = {
  INTJ: {
    id: "INTJ",
    nickname: { en: "The Strategist", my: "မဟာဗျူဟာရှင်" },
    summary: {
      en: "You're a long-range systems thinker. You see the architecture behind the moment and quietly engineer a path toward it.",
      my: "သင်သည် ရေရှည်ရှုထောင့်ဖြင့် စနစ်များကို တွေးခေါ်တတ်သူဖြစ်သည်။ လက်ရှိအခြေအနေ၏ နောက်ကွယ်ရှိ ဖွဲ့စည်းပုံကို မြင်တွေ့ပြီး ၎င်းဆီရောက်ရန် လမ်းကြောင်းကို တိတ်တဆိတ် အင်ဂျင်နီယာလုပ်သည်။",
    },
    coreMotivation: {
      en: "You want to turn a private, coherent vision of how things should work into reality, without needing applause along the way.",
      my: "သင်သည် လက်ခုပ်တီးအားပေးမှုမလိုဘဲ အရာများ မည်သို့အလုပ်လုပ်သင့်ကြောင်း ကိုယ်ပိုင်ရှင်းလင်းသော အမြင်ကို လက်တွေ့ဖြစ်လာစေလိုသည်။",
    },
    strengths: {
      en: ["Strategic foresight", "Independent thinking", "Relentless focus", "High standards", "Sees hidden patterns", "Calm under pressure"],
      my: ["မဟာဗျူဟာမြောက် ကြိုတင်မြင်နိုင်စွမ်း", "လွတ်လပ်သော တွေးခေါ်မှု", "မလှုံ့ဆွခံ အာရုံစိုက်မှု", "မြင့်မားသော စံနှုန်းများ", "ဖုံးကွယ်နေသော ပုံစံများကို မြင်တွေ့နိုင်ခြင်း", "ဖိအားအောက်တွင် တည်ငြိမ်ခြင်း"],
    },
    weaknesses: {
      en: ["Can seem distant", "Impatient with inefficiency", "Overly critical of others' logic", "Reluctant to explain reasoning", "Avoids vulnerability", "Underestimates emotional context"],
      my: ["ဝေးကွာနေသည်ဟု ထင်ရနိုင်သည်", "အကျိုးမရှိသောအရာများကို သည်းမခံနိုင်", "သူတစ်ပါး၏ ယုတ္တိကို လွန်ကဲစွာ ဝေဖန်တတ်", "အကြောင်းရင်းရှင်းပြရန် ဖင့်နွှဲတတ်", "အားနည်းချက်ပြရန် ရှောင်တတ်", "စိတ်ခံစားမှုအခြေအနေကို လျှော့တွက်တတ်"],
    },
    leadershipStyle: {
      en: "You lead by architecture, not charisma — setting a precise long-term direction and trusting competent people to execute within it.",
      my: "သင်သည် ဆွဲဆောင်မှုအားဖြင့်မဟုတ်ဘဲ ဖွဲ့စည်းပုံအားဖြင့် ဦးဆောင်သည် — တိကျသော ရေရှည်ဦးတည်ချက်ကို သတ်မှတ်ပြီး စွမ်းရည်ရှိသူများကို ယုံကြည်စွာ အကောင်အထည်ဖော်ခိုင်းသည်။",
    },
    communicationStyle: {
      en: "You're direct, economical, and idea-dense; you prefer substance over small talk and expect the same precision in return.",
      my: "သင်သည် တိုက်ရိုက်၊ ချွေတာပြီး အတွေးအခေါ်ကြွယ်ဝသည်၊ ပေါ့ပေါ့ပါးပါးစကားထက် အနှစ်သာရကို ပိုနှစ်သက်ပြီး တူညီသောတိကျမှုကို ပြန်လည်မျှော်လင့်သည်။",
    },
    decisionStyle: {
      en: "You build a mental model, test it against evidence, and commit once the logic holds — you rarely revisit a decision without new data.",
      my: "သင်သည် စိတ်ပုံစံတစ်ခုတည်ဆောက်ပြီး သက်သေအထောက်အထားနှင့် စစ်ဆေးကာ ယုတ္တိမှန်ကန်လျှင် ဆုံးဖြတ်ချက်ချသည် — အချက်အလက်အသစ်မရှိဘဲ ဆုံးဖြတ်ချက်ကို ရှားရှားပါးပါးသာ ပြန်ဆန်းစစ်သည်။",
    },
    workStyle: {
      en: "You work in long, uninterrupted stretches toward a self-defined endgame, restructuring systems rather than patching symptoms.",
      my: "သင်သည် ကိုယ်တိုင်သတ်မှတ်ထားသော ပန်းတိုင်တစ်ခုဆီ အနှောင့်အယှက်မရှိဘဲ ကြာရှည်စွာ အလုပ်လုပ်ပြီး လက္ခဏာများကိုသာ ပြုပြင်မည့်အစား စနစ်များကို ပြန်လည်ဖွဲ့စည်းသည်။",
    },
    friendshipStyle: {
      en: "You keep a small circle of people who can go deep on ideas; you show loyalty through reliability, not frequent contact.",
      my: "သင်သည် အတွေးအခေါ်များကို နက်နဲစွာ ဆွေးနွေးနိုင်သူ အနည်းငယ်ကိုသာ ရင်းနှီးထားသည်၊ မကြာခဏ ဆက်သွယ်ခြင်းထက် ယုံကြည်စိတ်ချရမှုဖြင့် သစ္စာရှိမှုကို ပြသသည်။",
    },
    relationshipStyle: {
      en: "You seek a partner who respects your independence and can debate ideas honestly; you show love through problem-solving and long-term planning.",
      my: "သင်သည် သင့်လွတ်လပ်မှုကို လေးစားပြီး အတွေးအခေါ်များကို ရိုးသားစွာ ဆွေးနွေးနိုင်သော အဖော်တစ်ဦးကို ရှာဖွေသည်၊ ပြဿနာဖြေရှင်းခြင်းနှင့် ရေရှည်စီစဉ်ခြင်းဖြင့် ချစ်ခြင်းကို ပြသသည်။",
    },
    parentingStyle: {
      en: "You encourage competence and independent thought early, treating your kids as capable minds worth reasoning with rather than managing.",
      my: "သင်သည် စွမ်းရည်နှင့် လွတ်လပ်သောတွေးခေါ်မှုကို စောစီးစွာ အားပေးပြီး ကလေးများကို စီမံခန့်ခွဲရမည့်သူများအဖြစ်မဟုတ်ဘဲ ယုတ္တိနှင့် ဆွေးနွေးထိုက်သော စွမ်းရည်ရှိသည့် စိတ်ဓာတ်ရှင်များအဖြစ် ဆက်ဆံသည်။",
    },
    problemSolving: {
      en: "You step back to map the whole system before touching a single variable, then redesign rather than patch.",
      my: "သင်သည် တစ်ခုတည်းသော ပြောင်းလဲနိုင်သည့်အချက်ကို မထိတွေ့မီ စနစ်တစ်ခုလုံးကို ရှေးဦးစွာ မြေပုံဆွဲကြည့်ပြီး ပြုပြင်မည့်အစား ပြန်လည်ဒီဇိုင်းဆွဲသည်။",
    },
    creativity: {
      en: "It shows up as elegant architecture — you invent frameworks, models, and systems that make chaos legible.",
      my: "၎င်းသည် လှပသောဖွဲ့စည်းပုံအဖြစ် ပေါ်လွင်သည် — ရှုပ်ထွေးမှုကို နားလည်လွယ်အောင် framework၊ ပုံစံနှင့် စနစ်များ တီထွင်သည်။",
    },
    conflictStyle: {
      en: "You withdraw to think before engaging, then return with a precise, logical case that can feel cold if you don't acknowledge emotion first.",
      my: "သင်သည် ပါဝင်မီ ဆုတ်ခွာပြီးတွေးသည်၊ ထို့နောက် ခံစားချက်ကို ဦးစွာအသိအမှတ်မပြုပါက အေးစက်နေသည်ဟု ခံစားရနိုင်သော တိကျသည့်ယုတ္တိရှိသော ကိစ္စတစ်ခုနှင့် ပြန်လာသည်။",
    },
    careerPaths: {
      en: ["Systems architect", "Strategic consultant", "Research scientist", "Investment analyst", "Policy strategist", "Product architect"],
      my: ["စနစ်ဗိသုကာ", "မဟာဗျူဟာအတိုင်ပင်ခံ", "သုတေသနသိပ္ပံပညာရှင်", "ရင်းနှီးမြှုပ်နှံမှုခွဲခြမ်းစိတ်ဖြာသူ", "မူဝါဒမဟာဗျူဟာရှင်", "ထုတ်ကုန်ဗိသုကာ"],
    },
    careersToAvoid: {
      en: ["High-supervision retail roles", "Rigid bureaucratic administration", "Unstructured improv performance", "Constant small-talk sales floors"],
      my: ["ကြပ်မတ်မှုများသော အရောင်းလုပ်ငန်း", "တင်းကျပ်သော ရုံးဗျူရိုကရေစီအုပ်ချုပ်မှု", "ဖွဲ့စည်းပုံမရှိသော ရုတ်တရက်ဖျော်ဖြေမှု", "အမြဲပေါ့ပေါ့ပါးပါးစကားပြောနေရသော အရောင်းနေရာများ"],
    },
    stressResponse: {
      en: "You withdraw further inward, over-analyze worst-case scenarios, and can become uncharacteristically sharp or dismissive.",
      my: "သင်သည် ပိုမိုနက်နက်ရှိုင်းရှိုင်း စိတ်တွင်းသို့ ရုတ်သိမ်းသွားပြီး အဆိုးဆုံးအခြေအနေများကို လွန်ကဲစွာ ခွဲခြမ်းစိတ်ဖြာကာ ပုံမှန်မဟုတ်အောင် ထက်မြက်သွားခြင်း သို့မဟုတ် လျစ်လျူရှုတတ်သည်။",
    },
    growthAdvice: {
      en: "Practice naming your emotions out loud before defaulting to logic — connection often matters more to others than being right.",
      my: "ယုတ္တိသို့ မသွားမီ ကိုယ့်ခံစားချက်ကို အသံထွက်ခေါ်ဆိုရန် လေ့ကျင့်ပါ — မှန်ကန်ခြင်းထက် ဆက်သွယ်မှုသည် သူတစ်ပါးတို့အတွက် ပိုအရေးကြီးလေ့ရှိသည်။",
    },
    suggestions: {
      en: [
        "Say the plan out loud to one trusted person before you execute it — you'll catch the gap you couldn't see from inside your own head.",
        "Block one hour this week for a conversation with no agenda — relationships built purely on utility quietly erode.",
        "Pick a decision you've been endlessly refining and ship it today, imperfect — momentum will teach you more than another round of analysis.",
      ],
      my: [
        "အစီအစဉ်ကို အကောင်အထည်မဖော်မီ ယုံကြည်ရသူတစ်ဦးအား အသံထွက်ပြောပြပါ — ကိုယ့်ဦးနှောက်ထဲမှ မမြင်နိုင်ခဲ့သော ကွက်လပ်ကို တွေ့ရလိမ့်မည်။",
        "ဒီအပတ်အတွင်း အစီအစဉ်မရှိသော စကားဝိုင်းအတွက် တစ်နာရီ ချန်ထားပါ — အသုံးဝင်မှုအပေါ်သာ အခြေခံသော ဆက်ဆံရေးများသည် တိတ်တဆိတ် ယိုယွင်းသွားတတ်သည်။",
        "အဆုံးမရှိပြင်ဆင်နေသော ဆုံးဖြတ်ချက်တစ်ခုကို ရွေးပြီး ယနေ့ မပြီးပြည့်စုံသည့်တိုင် ထုတ်ပြန်လိုက်ပါ — အရှိန်က နောက်ထပ်ခွဲခြမ်းစိတ်ဖြာမှုတစ်ခုထက် ပိုသင်ပေးလိမ့်မည်။",
      ],
    },
    motivation: {
      en: "You're driven by mastery and the quiet satisfaction of a system finally working exactly as designed.",
      my: "သင်သည် ကျွမ်းကျင်မှုနှင့် စနစ်တစ်ခု ဒီဇိုင်းအတိုင်း အတိအကျ အလုပ်ဖြစ်လာသည့် တိတ်ဆိတ်သောကျေနပ်မှုဖြင့် လှုံ့ဆော်ခံရသည်။",
    },
    learningStyle: {
      en: "You learn by building mental models first, then testing them against real cases; you get bored with rote repetition.",
      my: "သင်သည် ဦးစွာ စိတ်ပုံစံများ တည်ဆောက်ပြီး လက်တွေ့ကိစ္စများနှင့် စစ်ဆေးခြင်းဖြင့် သင်ယူသည်၊ အလွတ်ကျက်ခြင်းကို ငြီးငွေ့တတ်သည်။",
    },
    bestEnvironment: {
      en: "You do best in a quiet, autonomous environment with a clear mandate, minimal meetings, and room to think in long arcs.",
      my: "သင်သည် ရှင်းလင်းသောတာဝန်၊ အစည်းအဝေးအနည်းငယ်သာရှိပြီး ရေရှည်တွေးခေါ်ရန် နေရာလွတ်ရှိသော တိတ်ဆိတ်၍ လွတ်လပ်သောပတ်ဝန်းကျင်တွင် အကောင်းဆုံးလုပ်ဆောင်နိုင်သည်။",
    },
    idealTeamRole: {
      en: "You're the architect who designs the strategy others execute against.",
      my: "သင်သည် သူများ အကောင်အထည်ဖော်မည့် မဟာဗျူဟာကို ဒီဇိုင်းဆွဲပေးသော ဗိသုကာဖြစ်သည်",
    },
    famousExamples: {
      en: ["A quiet founder rebuilding an industry from first principles", "A chess grandmaster who plans a dozen moves ahead", "A systems-minded science-fiction author"],
      my: ["လုပ်ငန်းတစ်ခုလုံးကို အခြေခံမူများမှ ပြန်လည်တည်ဆောက်နေသော တိတ်ဆိတ်သည့်ထူထောင်သူ", "ရွှေ့ချက်ဆယ့်နှစ်ချက် ကြိုတင်စီစဉ်ထားသော စစ်တုရင်းဂရင်းမာစတာ", "စနစ်ဆန်စွာ တွေးခေါ်တတ်သော သိပ္ပံစိတ်ကူးယဉ်စာရေးဆရာ"],
    },
    dailyHabits: {
      en: ["Block a daily deep-work window with no interruptions", "Review your long-term goals weekly", "Read widely outside your field for new mental models"],
      my: ["နေ့စဉ် အနှောင့်အယှက်မရှိသော နက်နဲသောအလုပ်ချိန် ချန်ထားပါ", "ရေရှည်ပန်းတိုင်များကို အပတ်စဉ် ပြန်လည်သုံးသပ်ပါ", "စိတ်ပုံစံအသစ်များအတွက် ကိုယ့်နယ်ပယ်ပြင်ပ ကျယ်ကျယ်ဖတ်ပါ"],
    },
    baseHue: 248,
    spiritAnimal: { en: "Owl", my: "ဇီးကွက်" },
    poseDescriptor: "standing with arms crossed before a floating hologram of interconnected diagrams",
    clothingDescriptor: "a tailored charcoal turtleneck with a minimalist geometric pin",
    environmentDescriptor: "a minimalist study lined with star charts and a single glowing strategy board",
  },
  INTP: {
    id: "INTP",
    nickname: { en: "The Theorist", my: "သီအိုရီရှင်" },
    summary: {
      en: "You're a restless analyst. You take ideas apart to see how they really work, chasing internal consistency more than consensus.",
      my: "သင်သည် ငြိမ်ဝပ်မှုမရှိသော ခွဲခြမ်းစိတ်ဖြာသူဖြစ်သည်။ အများသဘောတူညီမှုထက် ကိုယ်တွင်းစည်းလုံးမှုကို ရှာဖွေပြီး အတွေးအခေါ်များ အမှန်တကယ်မည်သို့အလုပ်လုပ်သည်ကို ကြည့်ရန် ဖြိုခွဲကြည့်သည်။",
    },
    coreMotivation: {
      en: "You want to fully understand a concept from first principles — the joy is in the puzzle, not in being seen solving it.",
      my: "သင်သည် အယူအဆတစ်ခုကို အခြေခံမူများမှ အပြည့်အဝ နားလည်လိုသည် — ပျော်ရွှင်မှုသည် ပဟေဠိတွင်ရှိပြီး ဖြေရှင်းနေသည်ကို မြင်ခံရခြင်းတွင် မဟုတ်ပါ။",
    },
    strengths: {
      en: ["Deep analytical rigor", "Original thinking", "Comfortable with ambiguity", "Intellectual honesty", "Sharp pattern recognition", "Unbiased by convention"],
      my: ["နက်နဲသော ခွဲခြမ်းစိတ်ဖြာမှု", "မူလတွေးခေါ်မှု", "မရေရာမှုနှင့် သက်တောင့်သက်သာရှိခြင်း", "ဉာဏ်ပညာရိုးသားမှု", "ထက်မြက်သော ပုံစံမှတ်မိမှု", "ဓလေ့ထုံးစံအပေါ် အယူသီးမှုကင်းခြင်း"],
    },
    weaknesses: {
      en: ["Loses momentum after the idea is solved", "Neglects logistics and deadlines", "Struggles to explain reasoning simply", "Avoids emotionally charged conversations", "Can seem absent-minded", "Overthinks simple decisions"],
      my: ["အတွေးဖြေရှင်းပြီးနောက် စွမ်းအားကုန်ခန်းတတ်", "ထောက်ပံ့ရေးနှင့် သတ်မှတ်ရက်များကို လျစ်လျူရှုတတ်", "အကြောင်းရင်းကို ရိုးရှင်းစွာ ရှင်းပြရန် ခက်ခဲ", "စိတ်ခံစားမှုပါသော စကားဝိုင်းများကို ရှောင်တတ်", "စိတ်ပျံ့လွင့်နေသည်ဟု ထင်ရနိုင်", "ရိုးရှင်းသောဆုံးဖြတ်ချက်များကို လွန်ကဲစွာစဉ်းစားတတ်"],
    },
    leadershipStyle: {
      en: "You lead through ideas rather than authority, most comfortable as the intellectual center of a team rather than its manager.",
      my: "သင်သည် အာဏာအားဖြင့်မဟုတ်ဘဲ အတွေးအခေါ်များအားဖြင့် ဦးဆောင်သည်၊ အုပ်ချုပ်သူထက် အဖွဲ့၏ ဉာဏ်ပညာဗဟိုအဖြစ် ပိုသက်တောင့်သက်သာရှိသည်။",
    },
    communicationStyle: {
      en: "You're precise but meandering, following tangents where the logic leads; you dislike being rushed to a conclusion before it's earned.",
      my: "သင်သည် တိကျသော်လည်း ကွေ့ကောက်တတ်ပြီး ယုတ္တိရောက်ရာသို့ လိုက်ပါတတ်သည်၊ မထိုက်တန်မီ ကောက်ချက်ချရန် အလျင်စလိုလုပ်ခံရခြင်းကို မကြိုက်ပါ။",
    },
    decisionStyle: {
      en: "You build competing models simultaneously and keep refining until one is provably more consistent than the others.",
      my: "သင်သည် ယှဉ်ပြိုင်နေသော ပုံစံများကို တစ်ပြိုင်နက်တည်း တည်ဆောက်ပြီး တစ်ခုက အခြားများထက် သက်သေပြနိုင်လောက်အောင် စည်းလုံးသည်အထိ ပြင်ဆင်နေသည်။",
    },
    workStyle: {
      en: "You thrive on open-ended problems with few constraints; you lose interest fast once a problem becomes routine execution.",
      my: "သင်သည် ကန့်သတ်ချက်နည်းသော ဖွင့်ထားသည့်ပြဿနာများတွင် ပိုကောင်းစွာလုပ်ဆောင်နိုင်သည်၊ ပြဿနာသည် ပုံမှန်အလုပ်ဖြစ်လာသည်နှင့် စိတ်ဝင်စားမှု လျင်မြန်စွာ ကုန်ခန်းသည်။",
    },
    friendshipStyle: {
      en: "You bond over ideas rather than shared activities; you forget to check in but show up fully when it matters.",
      my: "သင်သည် အတူတကွလုပ်ဆောင်မှုထက် အတွေးအခေါ်များဖြင့် ချစ်ကြည်ရင်းနှီးသည်၊ စစ်ဆေးရန် မေ့တတ်သော်လည်း အရေးကြီးသောအခါ အပြည့်အဝ ရောက်ရှိလာသည်။",
    },
    relationshipStyle: {
      en: "You need intellectual respect as much as affection; you show love by taking your partner's problems seriously enough to actually solve them.",
      my: "သင်သည် ချစ်ခြင်းကဲ့သို့ပင် ဉာဏ်ပညာလေးစားမှုကို လိုအပ်သည်၊ အဖော်၏ပြဿနာများကို အမှန်တကယ် ဖြေရှင်းလောက်အောင် လေးနက်စွာ ကိုင်တွယ်ခြင်းဖြင့် ချစ်ခြင်းကို ပြသသည်။",
    },
    parentingStyle: {
      en: "You treat your kid's questions with genuine curiosity, encouraging independent reasoning over obedience.",
      my: "သင်သည် ကလေး၏မေးခွန်းများကို စစ်မှန်သော စိတ်ဝင်စားမှုဖြင့် ဆက်ဆံပြီး နာခံမှုထက် လွတ်လပ်သောယုတ္တိတွေးခေါ်မှုကို အားပေးသည်။",
    },
    problemSolving: {
      en: "You enjoy the abstraction itself, often generating three unconventional solutions before settling on the most elegant one.",
      my: "သင်သည် စိတ္တဇဖြစ်စဉ်ကိုယ်တိုင်ကို နှစ်သက်ပြီး အလှဆုံးဖြေရှင်းချက်ကို မရွေးမီ ထုံးစံမဟုတ်သော ဖြေရှင်းချက်သုံးခုကို ဖန်တီးလေ့ရှိသည်။",
    },
    creativity: {
      en: "It shows up as theoretical invention — you build new frameworks, thought experiments, and systems no one asked for but everyone later needs.",
      my: "၎င်းသည် သီအိုရီဆန်သော တီထွင်မှုအဖြစ် ပေါ်လွင်သည် — မည်သူမျှ မတောင်းဆိုသော်လည်း နောက်ပိုင်း လူတိုင်းလိုအပ်လာမည့် framework၊ တွေးခေါ်စမ်းသပ်မှုနှင့် စနစ်အသစ်များကို တည်ဆောက်သည်။",
    },
    conflictStyle: {
      en: "You avoid conflict rooted in emotion but will argue a logical point indefinitely if it's technically incorrect.",
      my: "သင်သည် စိတ်ခံစားမှုမှ ဖြစ်ပေါ်သော ပဋိပက္ခကို ရှောင်ရှားသော်လည်း နည်းပညာအရ မှားယွင်းနေလျှင် ယုတ္တိအချက်တစ်ခုကို အကန့်အသတ်မရှိ ငြင်းခုံနိုင်သည်။",
    },
    careerPaths: {
      en: ["Research scientist", "Software architect", "Data scientist", "Philosopher / academic", "Systems analyst", "Inventor"],
      my: ["သုတေသနသိပ္ပံပညာရှင်", "ဆော့ဖ်ဝဲဗိသုကာ", "ဒေတာသိပ္ပံပညာရှင်", "အတွေးအခေါ်ပညာရှင် / ပညာရေးလုပ်သား", "စနစ်ခွဲခြမ်းစိတ်ဖြာသူ", "တီထွင်ရှင်"],
    },
    careersToAvoid: {
      en: ["Rigid clerical work", "High-pressure live customer service", "Scripted sales roles", "Highly regulated compliance checklists"],
      my: ["တင်းကျပ်သော ရုံးအလုပ်", "ဖိအားမြင့်သော ဖောက်သည်ဝန်ဆောင်မှု", "စာရေးထားသောပြောစရာများနှင့် အရောင်းအလုပ်", "စည်းမျဉ်းများစွာလိုက်နာရသော checklist အလုပ်"],
    },
    stressResponse: {
      en: "You retreat into isolated overanalysis, sometimes freezing entirely under the weight of too many open possibilities.",
      my: "သင်သည် သီးခြားစွာ လွန်ကဲသောခွဲခြမ်းစိတ်ဖြာမှုထဲ ဆုတ်ခွာသွားပြီး ဖြစ်နိုင်ခြေအများကြီးအောက်တွင် တစ်ခါတစ်ရံ လုံးဝရပ်တန့်သွားတတ်သည်။",
    },
    growthAdvice: {
      en: "Set yourself artificial deadlines and finish more of what you start — a good-enough idea shipped beats a perfect one left in a drawer.",
      my: "ကိုယ်ပိုင်သတ်မှတ်ရက်များ ချမှတ်ပြီး စတင်ခဲ့သည်များကို ပိုပြီးပြီးမြောက်အောင်လုပ်ပါ — ထုတ်ပြန်ထားသော လုံလောက်သည့်အတွေးသည် ဒရော်ဝါထဲထားသော ပြီးပြည့်စုံအတွေးထက် ပိုကောင်းသည်။",
    },
    suggestions: {
      en: [
        "Pick your oldest unfinished project and give it a hard deadline this week — even a rough version beats another year of refinement.",
        "Explain your current idea to someone outside your field in three sentences — if you can't, you don't understand it as well as you think.",
        "Schedule the boring logistics (invoices, forms, replies) for a fixed 20-minute slot instead of letting them pile up unattended.",
      ],
      my: [
        "အဟောင်းဆုံး မပြီးမြောက်သေးသော ပရောဂျက်ကို ရွေးပြီး ဒီအပတ်တွင် တင်းကျပ်သောရက်သတ်မှတ်ပါ — ကြမ်းတမ်းသည့်ဗားရှင်းပင် နောက်တစ်နှစ်ပြင်ဆင်မှုထက် ပိုကောင်းသည်။",
        "လက်ရှိအတွေးကို နယ်ပယ်ပြင်ပလူတစ်ဦးအား စာကြောင်းသုံးကြောင်းဖြင့် ရှင်းပြပါ — မရှင်းပြနိုင်လျှင် ထင်သလောက် နားမလည်သေးပါ။",
        "ငြီးငွေ့ဖွယ် ထောက်ပံ့ရေးကိစ္စများ (ငွေတောင်းခံလွှာများ၊ ပုံစံများ၊ ပြန်စာများ) ကို စုပုံမနေစေဘဲ ၂၀ မိနစ်သတ်မှတ်ချိန်ဖြင့် စီစဉ်ပါ။",
      ],
    },
    motivation: {
      en: "You're driven by curiosity and the private thrill of a concept finally clicking into place.",
      my: "သင်သည် စူးစမ်းလိုစိတ်နှင့် အယူအဆတစ်ခု နောက်ဆုံးတွင် ကိုက်ညီသွားသည့် ကိုယ်ပိုင်ရင်ခုန်မှုဖြင့် လှုံ့ဆော်ခံရသည်။",
    },
    learningStyle: {
      en: "You learn by pulling a subject apart and rebuilding it conceptually, resisting textbook order in favor of your own logic.",
      my: "သင်သည် ဘာသာရပ်တစ်ခုကို ဖြိုခွဲပြီး အယူအဆအရ ပြန်လည်တည်ဆောက်ခြင်းဖြင့် သင်ယူသည်၊ ကျမ်းစာအစီအစဉ်ကို ဆန့်ကျင်ပြီး ကိုယ်ပိုင်ယုတ္တိကို ပိုနှစ်သက်သည်။",
    },
    bestEnvironment: {
      en: "You do best in a flexible, low-supervision setting with intellectual peers and few rigid deadlines.",
      my: "သင်သည် ဉာဏ်ပညာရှိသူများနှင့်အတူ တင်းကျပ်သောရက်သတ်မှတ်ချက်နည်းပြီး ကြပ်မတ်မှုနည်းသော လိုက်လျောညီထွေရှိသည့်ပတ်ဝန်းကျင်တွင် အကောင်းဆုံးလုပ်ဆောင်နိုင်သည်။",
    },
    idealTeamRole: {
      en: "You're the idea generator who stress-tests assumptions no one else thought to question.",
      my: "သင်သည် မည်သူမျှ မေးခွန်းထုတ်ရန် မတွေးမိသော ယူဆချက်များကို စမ်းသပ်စစ်ဆေးပေးသော အတွေးအခေါ်ထုတ်လုပ်သူဖြစ်သည်",
    },
    famousExamples: {
      en: ["A theoretical physicist chasing an elegant unifying idea", "An eccentric inventor sketching designs no one else understands yet", "A puzzle-obsessed detective archetype"],
      my: ["လှပသော စည်းလုံးညီညွတ်သည့်အတွေးကို လိုက်ရှာနေသော သီအိုရီရူပဗေဒပညာရှင်", "မည်သူမျှ မနားလည်သေးသော ဒီဇိုင်းများကို ဆွဲနေသော ထူးဆန်းသော တီထွင်ရှင်", "ပဟေဠိကြိုက်တတ်သော စုံထောက်ပုံစံ"],
    },
    dailyHabits: {
      en: ["Keep a running notebook of half-formed ideas", "Read across unrelated fields for cross-pollination", "Protect unstructured thinking time"],
      my: ["တစ်ဝက်တစ်ပျက်အတွေးများအတွက် မှတ်စုစာအုပ် ထိန်းသိမ်းထားပါ", "မဆက်စပ်သော နယ်ပယ်များကို ဖတ်ရှုပါ", "ဖွဲ့စည်းပုံမရှိသော တွေးခေါ်ချိန်ကို ကာကွယ်ထားပါ"],
    },
    baseHue: 206,
    spiritAnimal: { en: "Fox", my: "မြေခွေး" },
    poseDescriptor: "leaning back mid-thought with a hand on their chin, sketches floating mid-air around them",
    clothingDescriptor: "a rumpled linen shirt with sleeves pushed up and mismatched socks",
    environmentDescriptor: "a cluttered study with chalkboard walls covered in half-erased equations",
  },
  ENTJ: {
    id: "ENTJ",
    nickname: { en: "The Commander", my: "စစ်ဗိုလ်ချုပ်" },
    summary: {
      en: "You're a decisive builder of momentum. You turn ambiguity into a plan and a plan into results, fast.",
      my: "သင်သည် ဆုံးဖြတ်ချက်ချတတ်သော အရှိန်တည်ဆောက်သူဖြစ်သည်။ မရေရာမှုကို အစီအစဉ်အဖြစ်၊ အစီအစဉ်ကို ရလဒ်အဖြစ် လျင်မြန်စွာ ပြောင်းလဲနိုင်သည်။",
    },
    coreMotivation: {
      en: "You want to lead a group of capable people toward a goal that matters, and to prove the plan works.",
      my: "သင်သည် စွမ်းရည်ရှိသူများကို အရေးကြီးသောပန်းတိုင်တစ်ခုဆီ ဦးဆောင်လိုပြီး အစီအစဉ်အလုပ်ဖြစ်ကြောင်း သက်သေပြလိုသည်။",
    },
    strengths: {
      en: ["Natural strategic leadership", "Decisive under pressure", "Efficient execution", "Confident communication", "Long-term vision", "Motivates others to perform"],
      my: ["သဘာဝဆန်သော မဟာဗျူဟာဦးဆောင်မှု", "ဖိအားအောက်တွင် ဆုံးဖြတ်ချက်ချနိုင်ခြင်း", "ထိရောက်သော အကောင်အထည်ဖော်မှု", "ယုံကြည်မှုရှိသော ဆက်သွယ်ပြောဆိုမှု", "ရေရှည်အမြင်", "သူတစ်ပါးကို ကောင်းစွာလုပ်ဆောင်ရန် လှုံ့ဆော်နိုင်ခြင်း"],
    },
    weaknesses: {
      en: ["Can steamroll quieter voices", "Impatient with slow processes", "Underweights feelings in decisions", "Overcommits to ambitious timelines", "Struggles to say 'I don't know'", "Can seem domineering"],
      my: ["တိတ်ဆိတ်သောအသံများကို ဖိနှိပ်တတ်", "နှေးကွေးသောလုပ်ငန်းစဉ်များကို သည်းမခံနိုင်", "ဆုံးဖြတ်ချက်များတွင် ခံစားချက်ကို လျစ်လျူရှုတတ်", "ရည်မှန်းချက်ကြီးသောအချိန်ဇယားများတွင် အလွန်အကျွံကတိပေးတတ်", "'မသိပါ' ဟုပြောရန် ခက်ခဲ", "လွှမ်းမိုးလိုသည်ဟု ထင်ရနိုင်"],
    },
    leadershipStyle: {
      en: "You take charge naturally, setting an ambitious direction and holding everyone — including yourself — accountable to it.",
      my: "သင်သည် သဘာဝအလျောက် တာဝန်ယူပြီး ရည်မှန်းချက်ကြီးသောဦးတည်ချက်ကို သတ်မှတ်ကာ ကိုယ်တိုင်အပါအဝင် လူတိုင်းကို တာဝန်ခံစေသည်။",
    },
    communicationStyle: {
      en: "You're confident, direct, and persuasive; you lead with conclusions and expect the same efficiency back.",
      my: "သင်သည် ယုံကြည်မှုရှိ၊ တိုက်ရိုက်ပြီး ဆွဲဆောင်နိုင်သည်၊ ကောက်ချက်ဖြင့် ဦးဆောင်ပြီး တူညီသောထိရောက်မှုကို ပြန်လည်မျှော်လင့်သည်။",
    },
    decisionStyle: {
      en: "You decide quickly from available data, treat indecision as the bigger risk, and adjust course visibly if new facts arrive.",
      my: "သင်သည် ရရှိထားသောအချက်အလက်များမှ လျင်မြန်စွာ ဆုံးဖြတ်ပြီး ဆုံးဖြတ်ချက်မချခြင်းကို ပိုကြီးမားသောအန္တရာယ်အဖြစ် ရှုမြင်ကာ အချက်အလက်အသစ်ရလျှင် လမ်းကြောင်းကို မြင်သာစွာ ချိန်ညှိသည်။",
    },
    workStyle: {
      en: "You organize chaos into a plan almost instantly and drive a team toward milestones with visible urgency.",
      my: "သင်သည် ရှုပ်ထွေးမှုကို အစီအစဉ်အဖြစ် ချက်ချင်းလိုလို စီစဉ်ပြီး အဖွဲ့ကို မြင်သာသောအရေးပေါ်မှုဖြင့် မှတ်တိုင်များဆီ တွန်းအားပေးသည်။",
    },
    friendshipStyle: {
      en: "You're loyal and generous with advice; your friendships often form around shared ambition or mutual respect for competence.",
      my: "သင်သည် သစ္စာရှိပြီး အကြံပေးရာတွင် ရက်ရောသည်၊ မိတ်ဆွေဖွဲ့ခြင်းသည် ဘုံရည်မှန်းချက် သို့မဟုတ် စွမ်းရည်အပေါ် အပြန်အလှန်လေးစားမှုကို အခြေခံလေ့ရှိသည်။",
    },
    relationshipStyle: {
      en: "You want a partner who can challenge you intellectually and won't be steamrolled; you show love by actively building a shared future.",
      my: "သင်သည် ဉာဏ်ပညာအရ စိန်ခေါ်နိုင်ပြီး ဖိနှိပ်ခံလွယ်သူမဟုတ်သည့် အဖော်တစ်ဦးကို လိုချင်သည်၊ ဘုံအနာဂတ်ကို တက်ကြွစွာတည်ဆောက်ခြင်းဖြင့် ချစ်ခြင်းကို ပြသသည်။",
    },
    parentingStyle: {
      en: "You push your kids toward competence and self-reliance, sometimes needing to consciously soften expectations with warmth.",
      my: "သင်သည် ကလေးများကို စွမ်းရည်နှင့် မိမိကိုယ်ကိုအားကိုးမှုဆီ တွန်းအားပေးသည်၊ တစ်ခါတစ်ရံ မျှော်လင့်ချက်များကို နွေးထွေးမှုဖြင့် တမင်တကာ ပျော့ပျောင်းအောင်လုပ်ရန် လိုအပ်သည်။",
    },
    problemSolving: {
      en: "You diagnose the bottleneck fast and mobilize people and resources to remove it, valuing speed over perfect analysis.",
      my: "သင်သည် အဟန့်အတားကို လျင်မြန်စွာရှာဖွေပြီး ၎င်းကိုဖယ်ရှားရန် လူများနှင့်အရင်းအမြစ်များကို စုစည်းသည်၊ ပြီးပြည့်စုံသောခွဲခြမ်းစိတ်ဖြာမှုထက် အမြန်နှုန်းကို တန်ဖိုးထားသည်။",
    },
    creativity: {
      en: "It's channeled into ambitious execution — you turn bold ideas into scalable plans rather than pure abstraction.",
      my: "၎င်းကို ရည်မှန်းချက်ကြီးသောအကောင်အထည်ဖော်မှုဆီ ဦးတည်ထားသည် — ရဲရင့်သောအတွေးများကို စိတ္တဇအဖြစ်မဟုတ်ဘဲ ချဲ့ထွင်နိုင်သောအစီအစဉ်များအဖြစ် ပြောင်းလဲသည်။",
    },
    conflictStyle: {
      en: "You confront issues head-on and expect the same directness back; you can escalate quickly if met with avoidance.",
      my: "သင်သည် ပြဿနာများကို တိုက်ရိုက်ရင်ဆိုင်ပြီး တူညီသောတိုက်ရိုက်မှုကို ပြန်လည်မျှော်လင့်သည်၊ ရှောင်ရှားမှုနှင့်ကြုံလျှင် လျင်မြန်စွာ တိုးမြင့်နိုင်သည်။",
    },
    careerPaths: {
      en: ["Executive leadership", "Entrepreneur", "Management consultant", "Trial attorney", "Investment banker", "Operations director"],
      my: ["အုပ်ချုပ်ရေးဦးဆောင်မှု", "စီးပွားရေးလုပ်ငန်းရှင်", "စီမံခန့်ခွဲမှုအတိုင်ပင်ခံ", "တရားရုံးရှေ့နေ", "ရင်းနှီးမြှုပ်နှံမှုဘဏ်ပညာရှင်", "လည်ပတ်ရေးဒါရိုက်တာ"],
    },
    careersToAvoid: {
      en: ["Highly repetitive back-office work", "Roles with no authority to change process", "Purely solitary research with no application", "Slow-moving bureaucratic institutions"],
      my: ["ထပ်တလဲလဲရုံးလုပ်ငန်း", "လုပ်ငန်းစဉ်ပြောင်းလဲပိုင်ခွင့်မရှိသောရာထူးများ", "အသုံးချမှုမရှိသော တစ်ဦးတည်းသုတေသန", "နှေးကွေးသောဗျူရိုကရေစီအဖွဲ့အစည်းများ"],
    },
    stressResponse: {
      en: "You double down on control, micromanaging details you'd normally delegate, and can become uncharacteristically blunt.",
      my: "သင်သည် ထိန်းချုပ်မှုကို ပိုတင်းကျပ်စေပြီး ပုံမှန်လွှဲအပ်လေ့ရှိသောအသေးစိတ်ကိစ္စများကို ကိုယ်တိုင်ထိန်းချုပ်ကာ ပုံမှန်မဟုတ်အောင် ရိုက်ချက်ကြမ်းလာနိုင်သည်။",
    },
    growthAdvice: {
      en: "Slow down before big decisions and invite dissent — the fastest plan isn't always the one that survives contact with reality.",
      my: "ကြီးမားသောဆုံးဖြတ်ချက်များမီ နှေးကွေးပြီး ကန့်ကွက်ချက်ကို ဖိတ်ခေါ်ပါ — အမြန်ဆုံးအစီအစဉ်သည် လက်တွေ့ကမ္ဘာနှင့် ထိတွေ့ပြီးမှ အမြဲရှင်သန်သည်မဟုတ်ပါ။",
    },
    suggestions: {
      en: [
        "Before your next big call, ask one person to argue the opposite case for five minutes — you'll make a better decision than deciding alone.",
        "Pick one meeting this week where you say less and ask more — quieter voices on your team are sitting on ideas you haven't heard yet.",
        "Name one commitment you've overextended on and renegotiate it now, before it becomes a deadline crisis.",
      ],
      my: [
        "နောက်ထပ်ကြီးမားသောဆုံးဖြတ်ချက်မတိုင်မီ တစ်စုံတစ်ဦးအား ဆန့်ကျင်ဘက်ကိစ္စကို ငါးမိနစ် ငြင်းခုံခိုင်းပါ — တစ်ဦးတည်းဆုံးဖြတ်ခြင်းထက် ပိုကောင်းသောဆုံးဖြတ်ချက် ရလိမ့်မည်။",
        "ဒီအပတ်တွင် နည်းနည်းပြောပြီး များများမေးမည့် အစည်းအဝေးတစ်ခုကို ရွေးပါ — အဖွဲ့ထဲရှိ တိတ်ဆိတ်သောအသံများသည် မကြားရသေးသော အတွေးများ ကိုင်ဆွဲထားသည်။",
        "အလွန်အကျွံ ကတိပေးထားသည့်ကိစ္စတစ်ခုကို ဖော်ထုတ်ပြီး သတ်မှတ်ရက်အကျပ်အတည်း မဖြစ်မီ ယခုပင် ပြန်လည်ညှိနှိုင်းပါ။",
      ],
    },
    motivation: {
      en: "You're driven by achievement, competence, and visible progress toward an ambitious goal.",
      my: "သင်သည် အောင်မြင်မှု၊ စွမ်းရည်နှင့် ရည်မှန်းချက်ကြီးဆီ မြင်သာသောတိုးတက်မှုဖြင့် လှုံ့ဆော်ခံရသည်။",
    },
    learningStyle: {
      en: "You learn fastest through applied challenge and competition, not passive instruction.",
      my: "သင်သည် ပုံသေသင်ကြားမှုထက် လက်တွေ့စိန်ခေါ်မှုနှင့် ယှဉ်ပြိုင်မှုမှတစ်ဆင့် အမြန်ဆုံးသင်ယူသည်။",
    },
    bestEnvironment: {
      en: "You do best in a fast-moving environment with real stakes, clear metrics, and authority to act on decisions.",
      my: "သင်သည် စစ်မှန်သောအန္တရာယ်၊ ရှင်းလင်းသောစံနှုန်းနှင့် ဆုံးဖြတ်ချက်များအတွက် လုပ်ပိုင်ခွင့်ရှိသော အလျင်မြန်သောပတ်ဝန်းကျင်တွင် အကောင်းဆုံးလုပ်ဆောင်နိုင်သည်။",
    },
    idealTeamRole: {
      en: "You're the commander who sets the direction and rallies the team to hit it.",
      my: "သင်သည် ဦးတည်ချက်ကို သတ်မှတ်ပြီး အဖွဲ့ကို ၎င်းဆီရောက်အောင် စုစည်းပေးသော စစ်ဗိုလ်ချုပ်ဖြစ်သည်",
    },
    famousExamples: {
      en: ["A founder who scales a company from garage to global", "A general known for bold, decisive campaigns", "A courtroom attorney who dominates the room"],
      my: ["ကားဂိုဒေါင်မှ ကမ္ဘာလုံးဆိုင်ရာအထိ ကုမ္ပဏီကို ချဲ့ထွင်သော ထူထောင်သူ", "ရဲရင့်ဆုံးဖြတ်ချက်ချသောစစ်ဆင်ရေးများဖြင့် နာမည်ကြီးသောစစ်သူကြီး", "ခန်းမကို လွှမ်းမိုးနိုင်သော တရားရုံးရှေ့နေ"],
    },
    dailyHabits: {
      en: ["Review your goals and metrics every morning", "Front-load the hardest task of your day", "Actively seek feedback from trusted challengers"],
      my: ["နံနက်တိုင်း ပန်းတိုင်နှင့် စံနှုန်းများကို ပြန်လည်သုံးသပ်ပါ", "အခက်ခဲဆုံးအလုပ်ကို ဦးစွာလုပ်ပါ", "ယုံကြည်ရသူများထံမှ တက်ကြွစွာ တုံ့ပြန်ချက်ရယူပါ"],
    },
    baseHue: 8,
    spiritAnimal: { en: "Lion", my: "ခြင်္သေ့" },
    poseDescriptor: "standing at the head of a table, one hand planted, mid-command",
    clothingDescriptor: "a sharply tailored blazer with a bold accent tie",
    environmentDescriptor: "a glass-walled boardroom overlooking a glittering city skyline",
  },
  ENTP: {
    id: "ENTP",
    nickname: { en: "The Innovator", my: "တီထွင်ဆန်းသစ်သူ" },
    summary: {
      en: "You're a quick-witted idea machine. You spot the unconventional angle everyone else missed and enjoy debating it into shape.",
      my: "သင်သည် လျင်မြန်သောဉာဏ်ရည်ရှိသော အတွေးအခေါ်စက်ရုံဖြစ်သည်။ သူများလက်လွတ်ခဲ့သော ထုံးစံမဟုတ်သည့်ရှုထောင့်ကို ရှာတွေ့ပြီး ငြင်းခုံခြင်းဖြင့် ပုံဖော်ရသည်ကို နှစ်သက်သည်။",
    },
    coreMotivation: {
      en: "You want to explore every interesting possibility before the world tells you to pick just one.",
      my: "သင်သည် တစ်ခုတည်းသာရွေးရန် ကမ္ဘာကမပြောခင် စိတ်ဝင်စားဖွယ်ဖြစ်နိုင်ခြေအားလုံးကို စူးစမ်းလိုသည်။",
    },
    strengths: {
      en: ["Rapid ideation", "Persuasive debate skills", "Comfortable challenging norms", "Quick pattern recognition", "Energizing to be around", "Adaptable under change"],
      my: ["လျင်မြန်သော အတွေးဖန်တီးမှု", "ဆွဲဆောင်နိုင်သော ငြင်းခုံမှုစွမ်းရည်", "ဓလေ့ထုံးစံကို စိန်ခေါ်ရသည်ကို သက်တောင့်သက်သာရှိခြင်း", "လျင်မြန်သော ပုံစံမှတ်မိမှု", "အနီးတွင်ရှိလျှင် စွမ်းအားတက်ကြွစေခြင်း", "ပြောင်းလဲမှုအောက်တွင် လိုက်လျောညီထွေဖြစ်နိုင်ခြင်း"],
    },
    weaknesses: {
      en: ["Struggles to finish what you start", "Argues for sport, sometimes at others' expense", "Underestimates routine work", "Get bored once novelty fades", "Can be inconsistent", "Overlooks emotional undertones"],
      my: ["စတင်ခဲ့သည်များကို ပြီးမြောက်အောင်လုပ်ရန် ခက်ခဲ", "ကစားနည်းအလား ငြင်းခုံတတ်ပြီး တစ်ခါတစ်ရံ သူတစ်ပါးကုန်ကျစရိတ်ဖြင့်", "ပုံမှန်အလုပ်ကို လျှော့တွက်တတ်", "အသစ်တွေ့ဆုံခြင်း ကုန်ဆုံးသွားပါက ငြီးငွေ့တတ်", "မတသမတ်တည်းဖြစ်နိုင်", "စိတ်ခံစားမှုအရိပ်အယောင်များကို လွတ်တတ်"],
    },
    leadershipStyle: {
      en: "You lead by inspiring exploration, rallying people around a bold new idea more than a rigid plan.",
      my: "သင်သည် တင်းကျပ်သောအစီအစဉ်ထက် ရဲရင့်သောအတွေးအခေါ်အသစ်ဖြင့် လူများကိုစုစည်းကာ စူးစမ်းလိုစိတ်ကို လှုံ့ဆော်ခြင်းဖြင့် ဦးဆောင်သည်။",
    },
    communicationStyle: {
      en: "You're fast, witty, and exploratory; you enjoy playing devil's advocate to pressure-test an idea, sometimes for fun as much as truth.",
      my: "သင်သည် လျင်မြန်၊ ဉာဏ်သန်ပြီး စူးစမ်းလိုသည်၊ အတွေးအခေါ်တစ်ခုကို စမ်းသပ်ရန် ဆန့်ကျင်ဘက်ကိုယ်စားပြုကစားရသည်ကို နှစ်သက်ပြီး တစ်ခါတစ်ရံ အမှန်တရားလိုပင် ပျော်စရာအတွက်ပါ ဖြစ်သည်။",
    },
    decisionStyle: {
      en: "You keep your options open as long as possible, decide only when forced, then pivot quickly if a better path appears.",
      my: "သင်သည် ဖြစ်နိုင်သမျှကြာအောင် ရွေးချယ်စရာများကို ဖွင့်ထားပြီး မလွှဲမရှောင်သာမှသာ ဆုံးဖြတ်ကာ ပိုကောင်းသောလမ်းပေါ်လာလျှင် လျင်မြန်စွာ ပြောင်းလဲသည်။",
    },
    workStyle: {
      en: "You excel in the messy, early-stage phase of a project and lose steam once it becomes maintenance.",
      my: "သင်သည် ပရောဂျက်၏ ရှုပ်ထွေးသော အစပိုင်းအဆင့်တွင် ထူးချွန်ပြီး ထိန်းသိမ်းရေးအဆင့်ဖြစ်လာလျှင် စွမ်းအားကုန်ခန်းသည်။",
    },
    friendshipStyle: {
      en: "You're the friend with the most interesting stories and wildest ideas; you show care through stimulating conversation and spontaneous plans.",
      my: "သင်သည် အစွဲဆွဲဆုံးဇာတ်လမ်းများနှင့် အရိုင်းဆုံးအတွေးများရှိသော မိတ်ဆွေဖြစ်သည်၊ စိတ်ဝင်စားဖွယ်စကားဝိုင်းနှင့် ရုတ်တရက်အစီအစဉ်များဖြင့် ဂရုစိုက်မှုကို ပြသသည်။",
    },
    relationshipStyle: {
      en: "You want a partner who can keep up intellectually and tolerate spontaneity; you show love through novelty and shared adventure.",
      my: "သင်သည် ဉာဏ်ပညာအရ လိုက်ဖက်ပြီး ရုတ်တရက်ဖြစ်ရပ်များကို ခံနိုင်ရည်ရှိသော အဖော်တစ်ဦးကို လိုချင်သည်၊ အသစ်အဆန်းနှင့် ဘုံစွန့်စားမှုများဖြင့် ချစ်ခြင်းကို ပြသသည်။",
    },
    parentingStyle: {
      en: "You fill your kid's world with ideas and questions, better at inspiring curiosity than enforcing routine.",
      my: "သင်သည် ကလေး၏ ကမ္ဘာကို အတွေးအခေါ်နှင့် မေးခွန်းများဖြင့် ပြည့်နှက်စေပြီး ပုံမှန်စည်းကမ်းချမှတ်ခြင်းထက် စူးစမ်းလိုစိတ်ကို လှုံ့ဆော်ရာတွင် ပိုကျွမ်းကျင်သည်။",
    },
    problemSolving: {
      en: "You generate a wide net of unconventional options fast, then debate them aloud to find the strongest one.",
      my: "သင်သည် ထုံးစံမဟုတ်သောရွေးချယ်စရာများစွာကို လျင်မြန်စွာ ဖန်တီးပြီး အားအကောင်းဆုံးကိုရှာရန် အသံထွက်ငြင်းခုံသည်။",
    },
    creativity: {
      en: "It's constant and improvisational — you see connections between unrelated domains that others miss entirely.",
      my: "၎င်းသည် စဉ်ဆက်မပြတ်ရှိပြီး ရုတ်တရက်ဖြစ်သည် — သူများလုံးဝလွတ်သွားသော မဆက်စပ်သည့်နယ်ပယ်များကြား ဆက်စပ်မှုများကို မြင်တွေ့သည်။",
    },
    conflictStyle: {
      en: "You engage readily, sometimes escalating into debate for its own sake; you can defuse tension with humor just as fast.",
      my: "သင်သည် အဆင်သင့်ပါဝင်ပြီး တစ်ခါတစ်ရံ ငြင်းခုံမှုအတွက်ပင် တိုးမြင့်သွားနိုင်သည်၊ ဟာသဖြင့် တင်းမာမှုကို လျင်မြန်စွာ ပျောက်ကွယ်စေနိုင်သည်။",
    },
    careerPaths: {
      en: ["Entrepreneur", "Innovation consultant", "Trial lawyer", "Product strategist", "Journalist", "Startup founder"],
      my: ["စီးပွားရေးလုပ်ငန်းရှင်", "တီထွင်ဆန်းသစ်မှုအတိုင်ပင်ခံ", "တရားရုံးရှေ့နေ", "ထုတ်ကုန်မဟာဗျူဟာရှင်", "သတင်းထောက်", "startup ထူထောင်သူ"],
    },
    careersToAvoid: {
      en: ["Highly repetitive data entry", "Rigid compliance auditing", "Long-term solo maintenance work", "Strictly hierarchical bureaucracies"],
      my: ["ထပ်တလဲလဲ ဒေတာထည့်သွင်းမှု", "တင်းကျပ်သော လိုက်နာမှုစစ်ဆေးရေး", "ရေရှည်တစ်ဦးတည်းထိန်းသိမ်းမှုအလုပ်", "တင်းကျပ်သော အဆင့်ဆင့်ဗျူရိုကရေစီ"],
    },
    stressResponse: {
      en: "You scatter across too many new ideas at once, avoiding the original problem entirely.",
      my: "သင်သည် အတွေးအသစ်များစွာဆီ ပျံ့လွင့်သွားပြီး မူလပြဿနာကို လုံးဝရှောင်ရှားသည်။",
    },
    growthAdvice: {
      en: "Pick fewer ideas and finish them — your best insight is worthless if it never ships.",
      my: "အတွေးနည်းနည်းကိုသာ ရွေးပြီး ပြီးအောင်လုပ်ပါ — ထုတ်ပြန်ခြင်းမရှိလျှင် အကောင်းဆုံးထိုးထွင်းအမြင်ပင် တန်ဖိုးမရှိပါ။",
    },
    suggestions: {
      en: [
        "Choose one open idea to finish this week and put every other new one on a 'later' list instead of chasing it now.",
        "Before your next debate, ask yourself if you're arguing to find the truth or just to win — then say which one out loud.",
        "Set a recurring reminder to check in on a routine commitment you've been quietly neglecting.",
      ],
      my: [
        "ဒီအပတ်ပြီးအောင်လုပ်ရန် ဖွင့်ထားသောအတွေးတစ်ခုကို ရွေးပြီး အခြားအသစ်များကို 'နောက်မှ' စာရင်းတွင်ထားပါ။",
        "နောက်ထပ်ငြင်းခုံမှုမတိုင်မီ အမှန်တရားရှာဖွေရန်လား သို့မဟုတ် အနိုင်ရရန်လားဆိုတာ ကိုယ့်ကိုယ်ကို မေးပြီး အသံထွက်ပြောပါ။",
        "တိတ်တဆိတ် လျစ်လျူရှုနေသော ပုံမှန်ကတိတစ်ခုကို ပြန်စစ်ဆေးရန် ထပ်ခါထပ်ခါ သတိပေးချက်တစ်ခု သတ်မှတ်ပါ။",
      ],
    },
    motivation: {
      en: "You're driven by novelty, intellectual sparring, and the thrill of an unexplored possibility.",
      my: "သင်သည် အသစ်အဆန်း၊ ဉာဏ်ပညာဆွေးနွေးမှုနှင့် မစူးစမ်းရသေးသောဖြစ်နိုင်ခြေ၏ ရင်ခုန်မှုဖြင့် လှုံ့ဆော်ခံရသည်။",
    },
    learningStyle: {
      en: "You learn through debate and exploration, jumping between sources until a picture assembles itself.",
      my: "သင်သည် ငြင်းခုံမှုနှင့် စူးစမ်းမှုမှတစ်ဆင့် ပုံရိပ်တစ်ခု ဖွဲ့စည်းလာသည်အထိ ရင်းမြစ်များကြား ခုန်ကူးလျက် သင်ယူသည်။",
    },
    bestEnvironment: {
      en: "You do best in a dynamic, idea-rich environment that rewards fast thinking and tolerates a non-linear process.",
      my: "သင်သည် လျင်မြန်သောတွေးခေါ်မှုကို ဆုချီးမြှင့်ပြီး တစ်ဆင့်ချင်းမဟုတ်သောလုပ်ငန်းစဉ်ကို ခွင့်ပြုသော အားတက်ကြွသည့်အတွေးအခေါ်ကြွယ်ဝသောပတ်ဝန်းကျင်တွင် အကောင်းဆုံးလုပ်ဆောင်နိုင်သည်။",
    },
    idealTeamRole: {
      en: "You're the idea catalyst who reframes the problem and multiplies the options on the table.",
      my: "သင်သည် ပြဿနာကို ပြန်လည်ပုံဖော်ပြီး ရွေးချယ်စရာများကို တိုးပွားစေသော အတွေးအခေါ်လှုံ့ဆော်သူဖြစ်သည်",
    },
    famousExamples: {
      en: ["A serial entrepreneur chasing the next disruptive idea", "A late-night talk show host riffing in real time", "A debate champion who argues both sides for sport"],
      my: ["နောက်ထပ်ဖျက်သိမ်းအတွေးကို လိုက်ရှာနေသော ထပ်ခါထပ်ခါလုပ်ငန်းရှင်", "အချိန်နှင့်တပြေးညီ ဟာသပြောနေသော ညပိုင်းစကားဝိုင်းအစီအစဉ်ကြီးမှူး", "ဘက်နှစ်ဘက်လုံးကို ကစားနည်းအလား ငြင်းခုံနိုင်သော ငြင်းခုံမှုချန်ပီယံ"],
    },
    dailyHabits: {
      en: ["Capture new ideas the instant they strike", "Seek out one new perspective daily", "Time-box exploration before forcing a decision"],
      my: ["အတွေးအသစ်ပေါ်လာချက်ချင်း မှတ်သားပါ", "နေ့စဉ် ရှုထောင့်အသစ်တစ်ခုရှာဖွေပါ", "ဆုံးဖြတ်ချက်မချမီ စူးစမ်းချိန်ကို ကန့်သတ်ထားပါ"],
    },
    baseHue: 286,
    spiritAnimal: { en: "Raven", my: "ကျီးအမဲ" },
    poseDescriptor: "mid-gesture, animatedly explaining an idea with both hands in the air",
    clothingDescriptor: "an asymmetric jacket with unexpected color-blocking",
    environmentDescriptor: "a whiteboard-covered loft strung with string lights and half-finished prototypes",
  },
  INFJ: {
    id: "INFJ",
    nickname: { en: "The Confidant", my: "ယုံကြည်ရသူ" },
    summary: {
      en: "You're a quietly perceptive idealist. You read between the lines of people and situations, working steadily toward a meaningful future.",
      my: "သင်သည် တိတ်ဆိတ်စွာ ထိုးထွင်းသိမြင်တတ်သော စိတ်ကူးယဉ်သူဖြစ်သည်။ လူများနှင့် အခြေအနေများ၏ စာကြောင်းကြားထဲကို ဖတ်တတ်ပြီး အဓိပ္ပာယ်ရှိသောအနာဂတ်ဆီ တည်ငြိမ်စွာ လုပ်ဆောင်သည်။",
    },
    coreMotivation: {
      en: "You want to make a genuine, lasting difference in the lives of people you care about, guided by a clear inner sense of purpose.",
      my: "သင်သည် ရှင်းလင်းသော အတွင်းစိတ်ရည်ရွယ်ချက်ဖြင့် လမ်းညွှန်ခံကာ ဂရုစိုက်ရသူများ၏ဘဝတွင် စစ်မှန်၍ ရေရှည်တည်တံ့သော အပြောင်းအလဲကို ဖြစ်စေလိုသည်။",
    },
    strengths: {
      en: ["Deep empathy", "Strong intuition about people", "Principled conviction", "Long-term vision", "Thoughtful communication", "Quiet determination"],
      my: ["နက်နဲသော စာနာမှု", "လူများအပေါ် ခိုင်မာသော အလိုလိုသိမြင်မှု", "မူဝါဒရှိသော ယုံကြည်ချက်", "ရေရှည်အမြင်", "စဉ်းစားထားသော ဆက်သွယ်ပြောဆိုမှု", "တိတ်ဆိတ်သော စိတ်ဆန္ဒခိုင်မာမှု"],
    },
    weaknesses: {
      en: ["Prone to burnout from overextending", "Struggles to set boundaries", "Perfectionistic about your purpose", "Avoids conflict past the point of health", "Overanalyzes others' intentions", "Hard to truly know"],
      my: ["အလွန်အကျွံလုပ်ဆောင်ခြင်းကြောင့် စွမ်းအားကုန်ခန်းလွယ်", "နယ်နိမိတ်သတ်မှတ်ရန် ခက်ခဲ", "ရည်ရွယ်ချက်နှင့်ပတ်သက်၍ ပြီးပြည့်စုံမှုလိုလား", "ကျန်းမာသောအတိုင်းအတာထက် ကျော်၍ ပဋိပက္ခကို ရှောင်ရှား", "သူတစ်ပါးရည်ရွယ်ချက်ကို လွန်ကဲစွာ ခွဲခြမ်းစိတ်ဖြာ", "အမှန်တကယ်နားလည်ရန် ခက်ခဲ"],
    },
    leadershipStyle: {
      en: "You lead by quiet conviction, inspiring trust through consistency and a clear sense of why the work matters.",
      my: "သင်သည် တိတ်ဆိတ်သောယုံကြည်ချက်ဖြင့် ဦးဆောင်ပြီး တသမတ်တည်းဖြစ်မှုနှင့် အလုပ်၏ အရေးပါမှုကို ရှင်းလင်းစွာနားလည်ခြင်းဖြင့် ယုံကြည်မှုကို လှုံ့ဆော်သည်။",
    },
    communicationStyle: {
      en: "You're thoughtful and layered, often choosing your words carefully to land gently but land precisely.",
      my: "သင်သည် စဉ်းစားထားပြီး အလွှာများစွာရှိသည်၊ နူးညံ့ပြီး တိကျစွာ ရောက်ရှိစေရန် စကားလုံးများကို ဂရုတစိုက်ရွေးချယ်လေ့ရှိသည်။",
    },
    decisionStyle: {
      en: "You weigh a decision against your personal values and long-term impact on people, arriving at conclusions that feel more intuited than calculated.",
      my: "သင်သည် ဆုံးဖြတ်ချက်ကို ကိုယ်ပိုင်တန်ဖိုးထားမှုများနှင့် လူများအပေါ် ရေရှည်သက်ရောက်မှုနှင့် နှိုင်းယှဉ်ပြီး တွက်ချက်ခြင်းထက် အလိုလိုသိမြင်ခြင်းသဖွယ် ကောက်ချက်ချသည်။",
    },
    workStyle: {
      en: "You prefer meaningful, autonomous work with room to reflect, delivering quiet, sustained effort rather than bursts.",
      my: "သင်သည် ဆင်ခြင်ရန်နေရာလွတ်ရှိသော အဓိပ္ပာယ်ရှိ၍ လွတ်လပ်သောအလုပ်ကို ပိုနှစ်သက်ပြီး ရုတ်တရက်အားထုတ်မှုထက် တိတ်ဆိတ်ပြီး ဆက်လက်တည်တံ့သောကြိုးပမ်းမှုကို ပေးသည်။",
    },
    friendshipStyle: {
      en: "You form few but deep friendships, remembering small details and showing up fully when someone needs support.",
      my: "သင်သည် နည်းသော်လည်း နက်နဲသော မိတ်ဆွေဖွဲ့ခြင်းများ ရှိပြီး သေးငယ်သောအသေးစိတ်များကို မှတ်မိကာ တစ်စုံတစ်ဦးလိုအပ်သည့်အခါ အပြည့်အဝ ရောက်ရှိလာသည်။",
    },
    relationshipStyle: {
      en: "You seek emotional depth and authenticity above all; you give generously but need a partner who checks in on your needs too.",
      my: "သင်သည် အရာအားလုံးထက် စိတ်ခံစားမှုနက်ရှိုင်းမှုနှင့် စစ်မှန်မှုကို ရှာဖွေသည်၊ ရက်ရောစွာပေးသော်လည်း သင့်လိုအပ်ချက်များကိုပါ ဂရုစိုက်မည့် အဖော်တစ်ဦးကို လိုအပ်သည်။",
    },
    parentingStyle: {
      en: "You nurture your kid's inner world carefully, attuned to unspoken feelings and quietly protective of their individuality.",
      my: "သင်သည် ကလေး၏ အတွင်းစိတ်ကမ္ဘာကို ဂရုတစိုက် မွေးမြူပြီး မပြောပြသော ခံစားချက်များကို သိမြင်ကာ ၎င်းတို့၏ ကိုယ်ပိုင်လက္ခဏာကို တိတ်ဆိတ်စွာ ကာကွယ်သည်။",
    },
    problemSolving: {
      en: "You look for the human pattern behind the problem, often solving it by understanding the people involved first.",
      my: "သင်သည် ပြဿနာနောက်ကွယ်ရှိ လူသားပုံစံကို ရှာဖွေပြီး ပါဝင်ပတ်သက်သူများကို ဦးစွာနားလည်ခြင်းဖြင့် ဖြေရှင်းလေ့ရှိသည်။",
    },
    creativity: {
      en: "It's expressed through symbolism and meaning — writing, design, or ideas that carry an emotional or moral undercurrent.",
      my: "၎င်းကို သင်္ကေတနှင့် အဓိပ္ပာယ်ဖြင့် ဖော်ပြသည် — စိတ်ခံစားမှု သို့မဟုတ် ကိုယ်ကျင့်တရားဆိုင်ရာ လှိုင်းလုံးတစ်ခု သယ်ဆောင်သည့် ရေးသားခြင်း၊ ဒီဇိုင်း သို့မဟုတ် အတွေးများ။",
    },
    conflictStyle: {
      en: "You avoid confrontation until a value is crossed, then respond with a quiet, firm resolve that surprises people.",
      my: "သင်သည် တန်ဖိုးထားမှုတစ်ခု ကျူးလွန်ခံရသည်အထိ ရင်ဆိုင်မှုကို ရှောင်ရှားပြီး ထို့နောက် လူများအံ့ဩစေသော တိတ်ဆိတ်ပြီး ခိုင်မာသောစိတ်ဆန္ဒဖြင့် တုံ့ပြန်သည်။",
    },
    careerPaths: {
      en: ["Counselor / therapist", "Writer", "Nonprofit strategist", "UX researcher", "Physician", "Human rights advocate"],
      my: ["အကြံပေးပညာရှင် / စိတ်ကုသသူ", "စာရေးဆရာ", "အကျိုးအမြတ်မယူသောအဖွဲ့မဟာဗျူဟာရှင်", "UX သုတေသီ", "ဆရာဝန်", "လူ့အခွင့်အရေးအားပေးလှုံ့ဆော်သူ"],
    },
    careersToAvoid: {
      en: ["High-conflict sales floors", "Purely transactional customer service", "Ruthlessly competitive trading floors", "Roles requiring constant self-promotion"],
      my: ["ပဋိပက္ခများသော အရောင်းနေရာများ", "ငွေကြေးလွှဲပြောင်းမှုသက်သက် ဖောက်သည်ဝန်ဆောင်မှု", "ရက်စက်စွာ ယှဉ်ပြိုင်ရသော ရောင်းဝယ်ဖောက်ကားရေးနေရာများ", "အမြဲကိုယ့်ကိုယ်ကို ကြော်ငြာနေရသောရာထူးများ"],
    },
    stressResponse: {
      en: "You withdraw completely, become uncharacteristically cynical, and can burn out silently before anyone notices.",
      my: "သင်သည် လုံးဝဆုတ်ခွာသွားပြီး ပုံမှန်မဟုတ်အောင် ယုံကြည်မှုကင်းမဲ့လာကာ မည်သူမျှမသတိထားမီ တိတ်ဆိတ်စွာ စွမ်းအားကုန်ခန်းသွားနိုင်သည်။",
    },
    growthAdvice: {
      en: "Say no earlier and more often — your impact depends on sustainability, not self-sacrifice.",
      my: "ပိုမိုစောစီးစွာနှင့် မကြာခဏ ငြင်းပယ်ပါ — သင့်သက်ရောက်မှုသည် ကိုယ်ကိုယ်ကိုစွန့်လွှတ်မှုထက် ရေရှည်တည်တံ့မှုအပေါ် မူတည်သည်။",
    },
    suggestions: {
      en: [
        "Turn down one request this week before you're at capacity, instead of after — practice the 'no' while it's still easy.",
        "Tell one person, plainly, what you actually need from them — you default to reading minds and being read; try asking instead.",
        "Block 30 minutes of pure recovery time before you feel depleted, not after — treat it like a real appointment.",
      ],
      my: [
        "ဒီအပတ်တွင် အားနည်းချိန်မတိုင်မီ တောင်းဆိုချက်တစ်ခုကို ငြင်းပယ်ပါ — လွယ်ကူချိန်တွင် 'မဟုတ်ပါ' ဟုပြောရန် လေ့ကျင့်ပါ။",
        "သင်လိုအပ်သည်ကို တစ်စုံတစ်ဦးအား ရှင်းရှင်းလင်းလင်း ပြောပြပါ — စိတ်ကူးဖတ်ခြင်းအစား တောင်းဆိုကြည့်ပါ။",
        "စွမ်းအားကုန်ခန်းမီ ၃၀ မိနစ် နားနေချိန်ကို ချန်ထားပါ — အခြားချိန်းဆိုမှုတစ်ခုကဲ့သို့ပင် ဆက်ဆံပါ။",
      ],
    },
    motivation: {
      en: "You're driven by purpose and the sense that your work is quietly changing something for the better.",
      my: "သင်သည် ရည်ရွယ်ချက်နှင့် သင့်အလုပ်သည် တစ်ခုခုကို ပိုကောင်းအောင် တိတ်ဆိတ်စွာ ပြောင်းလဲနေသည်ဟူသော ခံစားချက်ဖြင့် လှုံ့ဆော်ခံရသည်။",
    },
    learningStyle: {
      en: "You learn best through meaning-making — connecting new ideas to values and human stories, not isolated facts.",
      my: "သင်သည် တစ်ဦးတည်းသီးခြားအချက်များထက် အတွေးအခေါ်အသစ်များကို တန်ဖိုးထားမှုနှင့် လူ့ဇာတ်လမ်းများနှင့် ချိတ်ဆက်ခြင်းဖြင့် အကောင်းဆုံးသင်ယူသည်။",
    },
    bestEnvironment: {
      en: "You do best in a calm, purpose-driven environment with autonomy and genuine human connection, free of office politics.",
      my: "သင်သည် ရုံးနိုင်ငံရေးကင်းပြီး လွတ်လပ်မှုနှင့် စစ်မှန်သောလူ့ဆက်ဆံရေးရှိသော တည်ငြိမ်၍ ရည်ရွယ်ချက်ဦးတည်သောပတ်ဝန်းကျင်တွင် အကောင်းဆုံးလုပ်ဆောင်နိုင်သည်။",
    },
    idealTeamRole: {
      en: "You're the quiet visionary who keeps the team anchored to why the work matters.",
      my: "သင်သည် အလုပ်ဘာကြောင့်အရေးကြီးသည်ကို အဖွဲ့အား ဆက်လက်သတိရစေသော တိတ်ဆိတ်သည့်ရူပါရုံပိုင်ရှင်ဖြစ်သည်",
    },
    famousExamples: {
      en: ["A behind-the-scenes advocate who quietly changes policy", "A novelist whose stories carry a moral core", "A mentor who sees potential in people before they see it themselves"],
      my: ["မူဝါဒကို တိတ်ဆိတ်စွာ ပြောင်းလဲပေးသော နောက်ကွယ်မှ ထောက်ခံသူ", "ကိုယ်ကျင့်တရားအနှစ်သာရ ပါဝင်သော ဇာတ်လမ်းများရေးသားသည့် ဝတ္ထုရေးဆရာ", "လူများကိုယ်တိုင်မတွေ့မီ အလားအလာကို မြင်တွေ့တတ်သော လမ်းညွှန်"],
    },
    dailyHabits: {
      en: ["Journal to process the day's emotional undercurrents", "Protect solitary reflection time", "Check in personally with people you care about"],
      my: ["နေ့စဉ်စိတ်ခံစားမှုများကို ဒိုင်ယာရီရေးပါ", "တစ်ဦးတည်းဆင်ခြင်ချိန်ကို ကာကွယ်ထားပါ", "ဂရုစိုက်ရသူများကို ကိုယ်တိုင်စစ်ဆေးပါ"],
    },
    baseHue: 172,
    spiritAnimal: { en: "Deer", my: "သမင်" },
    poseDescriptor: "standing at a window in soft contemplation, one hand resting on the glass",
    clothingDescriptor: "a flowing muted-teal coat with a delicate silver pendant",
    environmentDescriptor: "a quiet candlelit study filled with books and a single blooming plant",
  },
  INFP: {
    id: "INFP",
    nickname: { en: "The Dreamer", my: "အိပ်မက်ရှင်" },
    summary: {
      en: "You're a highly imaginative idealist guided by a rich inner value system, always searching for authenticity in a noisy world.",
      my: "သင်သည် ကြွယ်ဝသော အတွင်းတန်ဖိုးထားမှုစနစ်ဖြင့် လမ်းညွှန်ခံရသော စိတ်ကူးအလွန်ကြွယ်ဝသည့်စိတ်ကူးယဉ်သူဖြစ်ပြီး ဆူညံသောကမ္ဘာတွင် စစ်မှန်မှုကို အမြဲရှာဖွေသည်။",
    },
    coreMotivation: {
      en: "You want to live in a way that stays true to your inner values, and to help the world become a little more humane along the way.",
      my: "သင်သည် ကိုယ်ပိုင်အတွင်းတန်ဖိုးထားမှုများနှင့် ကိုက်ညီစွာ နေထိုင်လိုပြီး ကမ္ဘာကို အနည်းငယ် ပိုသနားစိတ်ရှိအောင် ကူညီလိုသည်။",
    },
    strengths: {
      en: ["Deep authenticity", "Rich imagination", "Strong personal values", "Empathetic listening", "Creative problem framing", "Quiet resilience"],
      my: ["နက်ရှိုင်းသော စစ်မှန်မှု", "ကြွယ်ဝသော စိတ်ကူး", "ခိုင်မာသော ကိုယ်ပိုင်တန်ဖိုးထားမှုများ", "စာနာစွာ နားထောင်ခြင်း", "ဖန်တီးနိုင်သော ပြဿနာပုံဖော်မှု", "တိတ်ဆိတ်သော ခံနိုင်ရည်"],
    },
    weaknesses: {
      en: ["Prone to idealizing people or plans", "Struggles with harsh criticism", "Avoids necessary confrontation", "Can be disorganized with logistics", "Overthinks decisions", "Retreats when overwhelmed"],
      my: ["လူများ သို့မဟုတ် အစီအစဉ်များကို စိတ်ကူးယဉ်စွာ မြင်တတ်", "ပြင်းထန်သောဝေဖန်ချက်ကို ခံနိုင်ရန်ခက်ခဲ", "လိုအပ်သောရင်ဆိုင်မှုကို ရှောင်ရှား", "ထောက်ပံ့ရေးကိစ္စများတွင် စနစ်မကျနိုင်", "ဆုံးဖြတ်ချက်များကို လွန်ကဲစွာစဉ်းစား", "လွှမ်းမိုးခံရသည့်အခါ ဆုတ်ခွာ"],
    },
    leadershipStyle: {
      en: "You lead by quiet example and conviction rather than authority, most persuasive when speaking from genuine belief.",
      my: "သင်သည် အာဏာအားဖြင့်မဟုတ်ဘဲ တိတ်ဆိတ်သောပုံစံနှင့် ယုံကြည်ချက်ဖြင့် ဦးဆောင်ပြီး စစ်မှန်သောယုံကြည်မှုမှ ပြောသည့်အခါ အဆွဲဆောင်ဆုံးဖြစ်သည်။",
    },
    communicationStyle: {
      en: "You're warm, reflective, and metaphor-rich; you often need time alone to find the right words before speaking.",
      my: "သင်သည် နွေးထွေး၊ ဆင်ခြင်တတ်ပြီး ခိုင်းနှိုင်းချက်ကြွယ်ဝသည်၊ ပြောရမည့်စကားလုံးမှန်ကို ရှာဖွေရန် တစ်ဦးတည်းအချိန်ယူတတ်သည်။",
    },
    decisionStyle: {
      en: "You check every option against your internal moral compass, sometimes agonizing until a choice finally feels right.",
      my: "သင်သည် ရွေးချယ်စရာတိုင်းကို ကိုယ်ပိုင်ကိုယ်ကျင့်တရားသံလိုက်အိမ်မြှားနှင့် စစ်ဆေးပြီး တစ်ခါတစ်ရံ ရွေးချယ်မှုတစ်ခု မှန်ကန်သည်ဟု ခံစားရသည်အထိ ပင်ပန်းစွာစဉ်းစားသည်။",
    },
    workStyle: {
      en: "You need meaning attached to the task at hand; you produce your best work in bursts of inspired, private focus.",
      my: "သင်သည် လက်ရှိလုပ်ငန်းတွင် အဓိပ္ပာယ်ရှိရန် လိုအပ်သည်၊ လှုံ့ဆော်မှုရရှိသော တစ်ဦးတည်းအာရုံစူးစိုက်မှုအတွင်း အကောင်းဆုံးအလုပ်ကို ထုတ်လုပ်သည်။",
    },
    friendshipStyle: {
      en: "You're a devoted, low-maintenance friend who listens deeply and remembers what actually matters to people.",
      my: "သင်သည် နက်နဲစွာနားထောင်ပြီး လူများအတွက် အမှန်တကယ်အရေးကြီးသည်များကို မှတ်မိသော ရိုးသားပြီး ပြုစုလွယ်သော မိတ်ဆွေဖြစ်သည်။",
    },
    relationshipStyle: {
      en: "You crave emotional authenticity and a partner who honors your inner world; you love deeply but need space to process feelings.",
      my: "သင်သည် စိတ်ခံစားမှုစစ်မှန်မှုနှင့် သင့်အတွင်းစိတ်ကမ္ဘာကို လေးစားသောအဖော်တစ်ဦးကို တောင့်တသည်၊ နက်ရှိုင်းစွာချစ်သော်လည်း ခံစားချက်များကို စီမံရန် နေရာလွတ်လိုအပ်သည်။",
    },
    parentingStyle: {
      en: "You nurture individuality and creativity in your kids, gentle by default but quietly firm about core values.",
      my: "သင်သည် ကလေးများ၏ ကိုယ်ပိုင်လက္ခဏာနှင့် ဖန်တီးနိုင်စွမ်းကို မွေးမြူပြီး ပုံမှန်အားဖြင့် နူးညံ့သော်လည်း အဓိကတန်ဖိုးထားမှုများတွင် တိတ်ဆိတ်စွာ ခိုင်မာသည်။",
    },
    problemSolving: {
      en: "You reframe the problem around what it means for the people involved before considering the mechanics.",
      my: "သင်သည် နည်းလမ်းများကို မစဉ်းစားမီ ပါဝင်ပတ်သက်သူများအတွက် ဘာကိုဆိုလိုသည်ဆိုတာအား ဗဟိုပြု၍ ပြဿနာကို ပြန်လည်ပုံဖော်သည်။",
    },
    creativity: {
      en: "It's a defining trait — expressed through writing, art, or any outlet that turns inner feeling into something shareable.",
      my: "၎င်းသည် အဓိကလက္ခဏာတစ်ခုဖြစ်သည် — အတွင်းစိတ်ခံစားမှုကို မျှဝေနိုင်သည့်အရာအဖြစ်ပြောင်းလဲပေးသော ရေးသားခြင်း၊ အနုပညာ သို့မဟုတ် အခြားလမ်းကြောင်းများဖြင့် ဖော်ပြသည်။",
    },
    conflictStyle: {
      en: "You avoid conflict instinctively, absorbing tension internally until it either fades or erupts unexpectedly.",
      my: "သင်သည် ပဋိပက္ခကို ဗီဇအလိုလျောက် ရှောင်ရှားပြီး တင်းမာမှုကို အတွင်းစိတ်တွင် စုပ်ယူထားကာ ပျောက်ကွယ်သွားခြင်း သို့မဟုတ် မမျှော်လင့်ဘဲ ပေါက်ကွဲသွားသည်အထိ ထားရှိသည်။",
    },
    careerPaths: {
      en: ["Writer", "Illustrator / designer", "Counselor", "Nonprofit worker", "Musician", "UX / content strategist"],
      my: ["စာရေးဆရာ", "ပန်းချီဆရာ / ဒီဇိုင်နာ", "အကြံပေးပညာရှင်", "အကျိုးအမြတ်မယူသောအဖွဲ့ဝန်ထမ်း", "ဂီတပညာရှင်", "UX / content မဟာဗျူဟာရှင်"],
    },
    careersToAvoid: {
      en: ["High-pressure sales", "Rigid corporate compliance", "Confrontational negotiation roles", "Highly regimented factory-line work"],
      my: ["ဖိအားများသော အရောင်းလုပ်ငန်း", "တင်းကျပ်သော ကော်ပိုရိတ်လိုက်နာမှု", "ရင်ဆိုင်ဆွေးနွေးရသော ညှိနှိုင်းရေးရာထူးများ", "စည်းကမ်းတင်းကျပ်သော စက်ရုံလိုင်းအလုပ်"],
    },
    stressResponse: {
      en: "You withdraw inward, ruminate on worst-case interpretations, and can lose motivation entirely.",
      my: "သင်သည် အတွင်းစိတ်သို့ ဆုတ်ခွာပြီး အဆိုးဆုံးအနက်ဖွင့်ဆိုချက်များကို ပြန်လည်တွေးတောကာ လှုံ့ဆော်မှုကို လုံးဝဆုံးရှုံးနိုင်သည်။",
    },
    growthAdvice: {
      en: "Practice voicing disagreement earlier and smaller — unspoken resentment does more damage than a timely honest conversation.",
      my: "သဘောကွဲလွဲမှုကို စောစီးစွာနှင့် သေးငယ်စွာ ပြောရန် လေ့ကျင့်ပါ — မပြောသောစိတ်ဆိုးမှုသည် အချိန်တန်ရိုးသားသောစကားဝိုင်းထက် ပိုပျက်စီးစေသည်။",
    },
    suggestions: {
      en: [
        "Say the small disagreement out loud today instead of letting it compound into a big one later.",
        "Set a 15-minute timer for logistics you've been avoiding — a little structure protects the creative time you actually value.",
        "Share one unfinished piece of work with someone you trust before it feels 'ready' — perfectionism is costing you an audience.",
      ],
      my: [
        "သေးငယ်သော သဘောကွဲလွဲမှုကို နောက်ကြီးမားလာအောင်မထားဘဲ ယနေ့ အသံထွက်ပြောပါ။",
        "ရှောင်နေသော ထောက်ပံ့ရေးကိစ္စများအတွက် ၁၅ မိနစ် အချိန်သတ်မှတ်ပါ — အနည်းငယ်စနစ်ကျမှုသည် သင်တန်ဖိုးထားသောဖန်တီးမှုအချိန်ကို ကာကွယ်ပေးသည်။",
        "'အဆင်သင့်' မဖြစ်မီ မပြီးသေးသောအလုပ်တစ်ခုကို ယုံကြည်ရသူတစ်ဦးအား မျှဝေပါ — ပြီးပြည့်စုံလိုမှုက ပရိသတ်ကို ဆုံးရှုံးစေနေသည်။",
      ],
    },
    motivation: {
      en: "You're driven by authenticity and the pursuit of a life that reflects your values.",
      my: "သင်သည် စစ်မှန်မှုနှင့် ကိုယ်ပိုင်တန်ဖိုးထားမှုများကို ထင်ဟပ်သောဘဝကို လိုက်ရှာခြင်းဖြင့် လှုံ့ဆော်ခံရသည်။",
    },
    learningStyle: {
      en: "You learn best when a subject connects to a personal passion or value; you disengage from purely rote material.",
      my: "သင်သည် ဘာသာရပ်တစ်ခုသည် ကိုယ်ပိုင်စိတ်အားထက်သန်မှု သို့မဟုတ် တန်ဖိုးထားမှုနှင့် ဆက်စပ်သည့်အခါ အကောင်းဆုံးသင်ယူသည်။",
    },
    bestEnvironment: {
      en: "You do best in a flexible, low-conflict environment that values individuality and gives room for creative expression.",
      my: "သင်သည် ကိုယ်ပိုင်လက္ခဏာကို တန်ဖိုးထားပြီး ဖန်တီးမှုဖော်ပြရန် နေရာပေးသော ပဋိပက္ခနည်းသည့် လိုက်လျောညီထွေရှိသောပတ်ဝန်းကျင်တွင် အကောင်းဆုံးလုပ်ဆောင်နိုင်သည်။",
    },
    idealTeamRole: {
      en: "You're the values-keeper who ensures the team's work stays meaningful and humane.",
      my: "သင်သည် အဖွဲ့၏အလုပ်ကို အဓိပ္ပာယ်ရှိပြီး သနားစိတ်ရှိစွာ ဆက်လက်ရှိစေသော တန်ဖိုးထားမှုထိန်းသိမ်းသူဖြစ်သည်",
    },
    famousExamples: {
      en: ["A quiet novelist whose work outlives them", "An advocate who champions the overlooked", "A songwriter turning private feeling into shared catharsis"],
      my: ["ကိုယ်တိုင်ထက် ရေရှည်တည်တံ့မည့်လက်ရာရှိသော တိတ်ဆိတ်သည့်ဝတ္ထုရေးဆရာ", "လျစ်လျူရှုခံရသူများကို ထောက်ခံသူ", "ကိုယ်ပိုင်ခံစားချက်ကို မျှဝေနိုင်သည့်အရာအဖြစ် ပြောင်းလဲသော သီချင်းစပ်ဆရာ"],
    },
    dailyHabits: {
      en: ["Keep a personal journal or sketchbook", "Spend daily time in solitude to recharge", "Revisit your core values when making big choices"],
      my: ["ကိုယ်ပိုင်ဒိုင်ယာရီ သို့မဟုတ် ပုံကြမ်းစာအုပ် ထိန်းသိမ်းထားပါ", "အားပြန်ဖြည့်ရန် နေ့စဉ် တစ်ဦးတည်းအချိန်ယူပါ", "ကြီးမားသောရွေးချယ်မှုများတွင် အဓိကတန်ဖိုးထားမှုများကို ပြန်လည်သုံးသပ်ပါ"],
    },
    baseHue: 152,
    spiritAnimal: { en: "Fawn", my: "သမင်ငယ်" },
    poseDescriptor: "sitting cross-legged in tall grass, sketchbook open, gazing at the horizon",
    clothingDescriptor: "a soft oversized cardigan over a hand-embroidered top",
    environmentDescriptor: "a sunlit meadow at the edge of a quiet forest",
  },
  ENFJ: {
    id: "ENFJ",
    nickname: { en: "The Catalyst", my: "လှုံ့ဆော်သူ" },
    summary: {
      en: "You're a warm, charismatic mobilizer. You sense what a group needs and inspire them to become their better selves.",
      my: "သင်သည် နွေးထွေးပြီး ဆွဲဆောင်နိုင်သော စုစည်းသူဖြစ်သည်။ အဖွဲ့လိုအပ်သည်ကို သိမြင်ပြီး ပိုကောင်းသောကိုယ်ကိုယ်တိုင်ဖြစ်လာအောင် လှုံ့ဆော်ပေးသည်။",
    },
    coreMotivation: {
      en: "You want to help others grow and to unite people around something bigger than themselves.",
      my: "သင်သည် သူတစ်ပါးတို့ကို ကြီးထွားစေရန်ကူညီပြီး ကိုယ်တိုင်ထက် ပိုကြီးမားသောအရာတစ်ခုပတ်လည် လူများကို စည်းလုံးစေလိုသည်။",
    },
    strengths: {
      en: ["Inspiring communication", "Genuine empathy", "Natural mobilizer of people", "Strong sense of purpose", "Quick to build trust", "Organized follow-through"],
      my: ["လှုံ့ဆော်နိုင်သော ဆက်သွယ်ပြောဆိုမှု", "စစ်မှန်သော စာနာမှု", "သဘာဝဆန်သော လူစုစည်းနိုင်စွမ်း", "ခိုင်မာသော ရည်ရွယ်ချက်ခံစားချက်", "ယုံကြည်မှု လျင်မြန်စွာတည်ဆောက်နိုင်", "စနစ်တကျ ဆက်လက်လုပ်ဆောင်နိုင်"],
    },
    weaknesses: {
      en: ["Overextends helping others", "Struggles to prioritize your own needs", "Sensitive to criticism", "Can be overly idealistic about people", "Avoids necessary hard truths", "Takes on too much responsibility"],
      my: ["သူတစ်ပါးကူညီရာတွင် အလွန်အကျွံလုပ်ဆောင်", "ကိုယ်ပိုင်လိုအပ်ချက်ကို ဦးစားပေးရန်ခက်ခဲ", "ဝေဖန်ချက်ကို ထိခိုက်လွယ်", "လူများနှင့်ပတ်သက်၍ အလွန်အကျွံ စိတ်ကူးယဉ်တတ်", "လိုအပ်သောခက်ခဲသည့်အမှန်တရားများကို ရှောင်ရှား", "တာဝန်များကို အလွန်အကျွံယူ"],
    },
    leadershipStyle: {
      en: "You lead by galvanizing people around a shared purpose, genuinely investing in each person's growth along the way.",
      my: "သင်သည် ဘုံရည်ရွယ်ချက်ပတ်လည် လူများကို လှုံ့ဆော်စုစည်းပြီး လူတစ်ဦးစီ၏ ကြီးထွားမှုတွင် စစ်မှန်စွာ ရင်းနှီးမြှုပ်နှံသည်။",
    },
    communicationStyle: {
      en: "You're warm, articulate, and persuasive; you read a room instinctively and adjust your tone to bring people together.",
      my: "သင်သည် နွေးထွေး၊ ရှင်းလင်းစွာဖော်ပြနိုင်ပြီး ဆွဲဆောင်နိုင်သည်၊ အခန်းတစ်ခုကို ဗီဇအလိုလျောက်ဖတ်ကာ လူများစည်းလုံးအောင် အသံသံဓိဋ္ဌာန်ကို ချိန်ညှိသည်။",
    },
    decisionStyle: {
      en: "You weigh the impact on people heavily, seeking a decision that moves the group forward without leaving anyone behind.",
      my: "သင်သည် လူများအပေါ်သက်ရောက်မှုကို လေးနက်စွာဆင်ခြင်ပြီး မည်သူမျှမကျန်ရစ်ဘဲ အဖွဲ့ကို ရှေ့သို့တွန်းအားပေးမည့် ဆုံးဖြတ်ချက်ကို ရှာဖွေသည်။",
    },
    workStyle: {
      en: "You're energized by collaboration, naturally organizing people around a shared goal and keeping momentum visible.",
      my: "သင်သည် ပူးပေါင်းဆောင်ရွက်မှုဖြင့် စွမ်းအားရရှိပြီး ဘုံပန်းတိုင်ပတ်လည် လူများကို သဘာဝအလျောက်စီစဉ်ကာ အရှိန်ကို မြင်သာစွာ ထိန်းသိမ်းသည်။",
    },
    friendshipStyle: {
      en: "You're the connector who remembers everyone's story and actively works to keep the group close.",
      my: "သင်သည် လူတိုင်း၏ဇာတ်လမ်းကို မှတ်မိပြီး အဖွဲ့ကို နီးနီးကပ်ကပ်ထားရန် တက်ကြွစွာ လုပ်ဆောင်သော ချိတ်ဆက်သူဖြစ်သည်။",
    },
    relationshipStyle: {
      en: "You're deeply invested and affirming; you need a partner who reciprocates emotional effort rather than just receiving it.",
      my: "သင်သည် နက်ရှိုင်းစွာ ရင်းနှီးမြှုပ်နှံပြီး အားပေးတတ်သည်၊ လက်ခံရုံသာမက စိတ်ခံစားမှုကြိုးပမ်းအားကို ပြန်လည်ပေးဆပ်မည့် အဖော်တစ်ဦးကို လိုအပ်သည်။",
    },
    parentingStyle: {
      en: "You're actively invested in your kid's growth, encouraging and structured, sometimes needing to let them struggle productively.",
      my: "သင်သည် ကလေး၏ကြီးထွားမှုတွင် တက်ကြွစွာ ရင်းနှီးမြှုပ်နှံပြီး အားပေးတတ်ပြီး စနစ်ကျသော်လည်း တစ်ခါတစ်ရံ အကျိုးရှိစွာ ရုန်းကန်ခွင့်ပြုရန် လိုအပ်သည်။",
    },
    problemSolving: {
      en: "You solve by aligning people first, believing most problems dissolve once a team is truly on the same page.",
      my: "သင်သည် လူများကို ဦးစွာညှိနှိုင်းပေးခြင်းဖြင့် ဖြေရှင်းသည်၊ အဖွဲ့တစ်ခုလုံး အမှန်တကယ်သဘောတူညီလျှင် ပြဿနာအများစု ပျောက်ကွယ်သွားလိမ့်မည်ဟု ယုံကြည်သည်။",
    },
    creativity: {
      en: "It's expressed through bringing people and ideas together — orchestrating collaborative, purpose-driven projects.",
      my: "၎င်းကို လူများနှင့် အတွေးအခေါ်များ ပေါင်းစပ်ခြင်းဖြင့် ဖော်ပြသည် — ပူးပေါင်းဆောင်ရွက်ရသော ရည်ရွယ်ချက်ဦးတည်သည့် ပရောဂျက်များကို စီမံခန့်ခွဲသည်။",
    },
    conflictStyle: {
      en: "You seek resolution quickly and personally, sometimes over-accommodating to restore harmony faster than an issue is truly resolved.",
      my: "သင်သည် ဖြေရှင်းချက်ကို လျင်မြန်စွာနှင့် ကိုယ်ရေးကိုယ်တာအားဖြင့် ရှာဖွေပြီး တစ်ခါတစ်ရံ ပြဿနာအမှန်တကယ်ဖြေရှင်းမီ သဟဇာတပြန်ဖြစ်စေရန် အလွန်အကျွံလိုက်လျောသည်။",
    },
    careerPaths: {
      en: ["Teacher / educator", "Nonprofit director", "Public speaker", "HR / talent development", "Coach", "Community organizer"],
      my: ["ဆရာ / ပညာရေးလုပ်သား", "အကျိုးအမြတ်မယူသောအဖွဲ့ဒါရိုက်တာ", "အများပြည်သူရှေ့ ဟောပြောသူ", "HR / စွမ်းရည်ဖွံ့ဖြိုးရေး", "နည်းပြ", "အသိုင်းအဝိုင်းစုစည်းသူ"],
    },
    careersToAvoid: {
      en: ["Isolated solo research", "Highly transactional back-office work", "Cutthroat zero-sum competition", "Roles requiring constant harsh criticism of others"],
      my: ["သီးခြားတစ်ဦးတည်းသုတေသန", "ငွေကြေးလွှဲပြောင်းမှုသက်သက် ရုံးလုပ်ငန်း", "ရက်စက်သော အနိုင်အရှုံးယှဉ်ပြိုင်မှု", "သူတစ်ပါးကို အမြဲပြင်းထန်စွာဝေဖန်နေရသောရာထူးများ"],
    },
    stressResponse: {
      en: "You overextend further to fix everyone else's problems, neglecting your own needs until you burn out.",
      my: "သင်သည် သူတစ်ပါးတို့၏ ပြဿနာများကို ဖြေရှင်းရန် ပိုမိုအလွန်အကျွံလုပ်ဆောင်ပြီး စွမ်းအားကုန်ခန်းသည်အထိ ကိုယ်ပိုင်လိုအပ်ချက်များကို လျစ်လျူရှုသည်။",
    },
    growthAdvice: {
      en: "Protect time for your own needs before they become urgent — you can't pour from an empty cup.",
      my: "အရေးပေါ်မဖြစ်မီ ကိုယ်ပိုင်လိုအပ်ချက်များအတွက် အချိန်ကို ကာကွယ်ထားပါ — ဗန်းအလွတ်မှ မသွန်းနိုင်ပါ။",
    },
    suggestions: {
      en: [
        "Ask for help with one thing today instead of quietly absorbing it yourself — let someone reciprocate the care you give.",
        "Deliver one piece of honest, hard feedback you've been softening or delaying — clarity serves people better than comfort.",
        "Block time for yourself on the calendar before the week fills up, and treat it as non-negotiable as anyone else's meeting.",
      ],
      my: [
        "ယနေ့ တစ်ခုခုအတွက် အကူအညီတောင်းပါ — ကိုယ့်ကိုယ်ကို ဂရုစိုက်ခွင့်ပေးပါ။",
        "ပျော့ပျောင်းအောင်ထားသော သို့မဟုတ် ဆွဲဆန့်ထားသော ရိုးသားပြီးခက်ခဲသောတုံ့ပြန်ချက်တစ်ခုကို ပေးပါ — ရှင်းလင်းမှုသည် သက်တောင့်သက်သာထက် လူများအတွက် ပိုအကျိုးရှိသည်။",
        "အပတ်မပြည့်မီ ကိုယ်ပိုင်အချိန်ကို ပြက္ခဒိန်ပေါ်တွင် ချန်ထားပြီး အခြားအစည်းအဝေးများကဲ့သို့ ညှိနှိုင်း၍မရအောင် ဆက်ဆံပါ။",
      ],
    },
    motivation: {
      en: "You're driven by connection and the visible growth of people you've invested in.",
      my: "သင်သည် ဆက်သွယ်မှုနှင့် ရင်းနှီးမြှုပ်နှံခဲ့သောသူများ၏ မြင်သာသောကြီးထွားမှုဖြင့် လှုံ့ဆော်ခံရသည်။",
    },
    learningStyle: {
      en: "You learn well through discussion and teaching others, solidifying ideas by explaining them aloud.",
      my: "သင်သည် ဆွေးနွေးမှုနှင့် သူတစ်ပါးသင်ကြားပေးခြင်းမှတစ်ဆင့် ကောင်းစွာသင်ယူပြီး အသံထွက်ရှင်းပြခြင်းဖြင့် အတွေးများကို ခိုင်မာစေသည်။",
    },
    bestEnvironment: {
      en: "You do best in a people-centered environment with a clear mission and room to mentor and mobilize others.",
      my: "သင်သည် ရှင်းလင်းသောရည်ရွယ်ချက်ရှိပြီး သူများကိုလမ်းညွှန်ရန်နှင့် စုစည်းရန် နေရာပေးသော လူဗဟိုပြုပတ်ဝန်းကျင်တွင် အကောင်းဆုံးလုပ်ဆောင်နိုင်သည်။",
    },
    idealTeamRole: {
      en: "You're the unifier who keeps morale high and aligns the team around a shared purpose.",
      my: "သင်သည် စိတ်အားထက်သန်မှုမြင့်မားစေပြီး အဖွဲ့ကို ဘုံရည်ရွယ်ချက်ပတ်လည် ညှိနှိုင်းပေးသော စည်းလုံးအောင်ဆောင်ရွက်သူဖြစ်သည်",
    },
    famousExamples: {
      en: ["A charismatic teacher who changes a classroom's trajectory", "A community organizer who turns a cause into a movement", "A motivational speaker who leaves a room changed"],
      my: ["အတန်းတစ်ခု၏ခရီးလမ်းကို ပြောင်းလဲပေးသော ဆွဲဆောင်နိုင်သောဆရာ", "ရည်ရွယ်ချက်ကို လှုပ်ရှားမှုတစ်ခုအဖြစ် ပြောင်းလဲပေးသော အသိုင်းအဝိုင်းစုစည်းသူ", "အခန်းတစ်ခန်းကို ပြောင်းလဲသွားစေသော လှုံ့ဆော်ဟောပြောသူ"],
    },
    dailyHabits: {
      en: ["Check in personally with teammates or friends", "Reflect on group dynamics after key interactions", "Set aside deliberate time to recharge alone"],
      my: ["အဖွဲ့သားများ သို့မဟုတ် မိတ်ဆွေများကို ကိုယ်တိုင်စစ်ဆေးပါ", "အရေးကြီးဆက်ဆံမှုများပြီးနောက် အဖွဲ့လုပ်ဆောင်ပုံကို ပြန်လည်ဆင်ခြင်ပါ", "တစ်ဦးတည်း အားပြန်ဖြည့်ရန် အချိန်ချန်ထားပါ"],
    },
    baseHue: 338,
    spiritAnimal: { en: "Swan", my: "ဆင်း" },
    poseDescriptor: "standing before a crowd mid-speech, arms open in an inviting gesture",
    clothingDescriptor: "a warm-toned blazer with a bright statement scarf",
    environmentDescriptor: "a sunlit community hall filled with an engaged, gathered crowd",
  },
  ENFP: {
    id: "ENFP",
    nickname: { en: "The Spark", my: "မီးပွား" },
    summary: {
      en: "You're an enthusiastic connector of people and ideas who lights up a room and chases possibility with contagious energy.",
      my: "သင်သည် အခန်းတစ်ခုကို တောက်ပစေပြီး ကူးစက်တတ်သောစွမ်းအင်ဖြင့် ဖြစ်နိုင်ခြေကို လိုက်ရှာသော လူများနှင့်အတွေးများကို စိတ်အားထက်သန်စွာ ချိတ်ဆက်ပေးသူဖြစ်သည်။",
    },
    coreMotivation: {
      en: "You want to live an authentic, expansive life full of meaningful connections and new possibilities.",
      my: "သင်သည် အဓိပ္ပာယ်ရှိသော ဆက်သွယ်မှုများနှင့် ဖြစ်နိုင်ခြေအသစ်များပြည့်နှက်သော စစ်မှန်၍ ကျယ်ပြန့်သောဘဝကို နေထိုင်လိုသည်။",
    },
    strengths: {
      en: ["Contagious enthusiasm", "Strong interpersonal warmth", "Creative connection-making", "Adaptable and quick-thinking", "Genuine curiosity about people", "Resilient optimism"],
      my: ["ကူးစက်တတ်သော စိတ်အားထက်သန်မှု", "ခိုင်မာသော လူအချင်းချင်းနွေးထွေးမှု", "ဖန်တီးနိုင်သော ဆက်စပ်မှုဖန်တီးခြင်း", "လိုက်လျောညီထွေရှိပြီး လျင်မြန်စွာတွေးခေါ်နိုင်ခြင်း", "လူများအပေါ် စစ်မှန်သောစိတ်ဝင်စားမှု", "ခံနိုင်ရည်ရှိသော အကောင်းမြင်စိတ်"],
    },
    weaknesses: {
      en: ["Struggles with follow-through", "Overcommits to too many ideas", "Avoids tedious detail work", "Can be scattered under pressure", "Seeks external validation", "Restless with routine"],
      my: ["ဆက်လက်လုပ်ဆောင်ရန် ခက်ခဲ", "အတွေးအများကြီးကို အလွန်အကျွံကတိပေး", "ငြီးငွေ့ဖွယ်အသေးစိတ်အလုပ်ကို ရှောင်", "ဖိအားအောက်တွင် ပျံ့လွင့်တတ်", "ပြင်ပအသိအမှတ်ပြုမှုကို ရှာဖွေ", "ပုံမှန်လုပ်ငန်းစဉ်နှင့် မငြိမ်သက်"],
    },
    leadershipStyle: {
      en: "You lead by enthusiasm and inclusion, drawing people in with energy and genuine belief in their potential.",
      my: "သင်သည် စိတ်အားထက်သန်မှုနှင့် ပါဝင်မှုဖြင့် ဦးဆောင်ပြီး စွမ်းအင်နှင့် သူတို့၏ စွမ်းရည်ကို စစ်မှန်စွာယုံကြည်ခြင်းဖြင့် လူများကို ဆွဲဆောင်သည်။",
    },
    communicationStyle: {
      en: "You're expressive, warm, and fast-moving; you're naturally curious about others and quick to find common ground.",
      my: "သင်သည် ဖော်ပြနိုင်စွမ်းရှိ၊ နွေးထွေးပြီး လျင်မြန်သည်၊ သူတစ်ပါးအပေါ် သဘာဝအလျောက် စိတ်ဝင်စားပြီး ဘုံအချက်ကို လျင်မြန်စွာရှာတွေ့သည်။",
    },
    decisionStyle: {
      en: "You follow both gut feeling and possibility, often keeping options open until the last responsible moment.",
      my: "သင်သည် အသည်းအသန်ခံစားချက်နှင့် ဖြစ်နိုင်ခြေနှစ်မျိုးလုံးကို လိုက်နာပြီး နောက်ဆုံးတာဝန်ယူရမည့်အချိန်အထိ ရွေးချယ်စရာများကို ဖွင့်ထားလေ့ရှိသည်။",
    },
    workStyle: {
      en: "You thrive on variety and people-facing work, losing steam quickly on repetitive solo tasks.",
      my: "သင်သည် အမျိုးမျိုးရှိမှုနှင့် လူဆိုင်ရာအလုပ်တွင် တိုးတက်ပြီး ထပ်တလဲလဲတစ်ဦးတည်းအလုပ်များတွင် လျင်မြန်စွာစိတ်ပျက်တတ်သည်။",
    },
    friendshipStyle: {
      en: "You're the friend who turns strangers into a group and remembers the emotional thread of everyone's story.",
      my: "သင်သည် လူမသိကျွမ်းများကို အုပ်စုအဖြစ်ပြောင်းလဲပေးပြီး လူတိုင်း၏ဇာတ်လမ်း၏ စိတ်ခံစားမှုချည်ကြိုးကို မှတ်မိသော မိတ်ဆွေဖြစ်သည်။",
    },
    relationshipStyle: {
      en: "You're passionate and affirming, seeking a partner who matches your emotional openness and tolerates your need for novelty.",
      my: "သင်သည် စိတ်အားထက်သန်ပြီး အားပေးတတ်သည်၊ သင့်စိတ်ခံစားမှုပွင့်လင်းမှုနှင့် ကိုက်ညီပြီး သင့်အသစ်အဆန်းလိုအပ်ချက်ကို ခံနိုင်ရည်ရှိသော အဖော်တစ်ဦးကို ရှာဖွေသည်။",
    },
    parentingStyle: {
      en: "You fill your kid's life with encouragement and possibility, more inspiring than strict about structure.",
      my: "သင်သည် ကလေး၏ဘဝကို အားပေးမှုနှင့် ဖြစ်နိုင်ခြေများဖြင့် ပြည့်နှက်စေပြီး စည်းကမ်းတင်းကျပ်မှုထက် လှုံ့ဆော်မှုကို ပိုအလေးထားသည်။",
    },
    problemSolving: {
      en: "You brainstorm broadly and involve others, finding the most human and creative path through a problem.",
      my: "သင်သည် ကျယ်ကျယ်ပြန့်ပြန့် အတွေးများစုစည်းပြီး သူတစ်ပါးများကို ပါဝင်စေကာ ပြဿနာတစ်ခုအတွက် အလူသားဆန်ဆုံးနှင့် ဖန်တီးနိုင်ဆုံးလမ်းကြောင်းကို ရှာဖွေသည်။",
    },
    creativity: {
      en: "It's constant and social — your ideas multiply fastest in conversation with other people.",
      my: "၎င်းသည် စဉ်ဆက်မပြတ်ရှိပြီး လူမှုဆန်သည် — သင့်အတွေးများသည် သူတစ်ပါးနှင့် စကားဝိုင်းတွင် အမြန်ဆုံးတိုးပွားသည်။",
    },
    conflictStyle: {
      en: "You want quick, warm resolution and can take conflict personally; you'd rather talk it out immediately than let it simmer.",
      my: "သင်သည် လျင်မြန်၊ နွေးထွေးသောဖြေရှင်းချက်ကို လိုချင်ပြီး ပဋိပက္ခကို ကိုယ်ရေးကိုယ်တာယူတတ်သည်၊ ပူလောင်နေအောင်မထားဘဲ ချက်ချင်းဆွေးနွေးလိုသည်။",
    },
    careerPaths: {
      en: ["Marketing / brand strategist", "Journalist", "Actor / performer", "Startup founder", "Career coach", "Event producer"],
      my: ["စျေးကွက်ရှာဖွေရေး / အမှတ်တံဆိပ်မဟာဗျူဟာရှင်", "သတင်းထောက်", "သရုပ်ဆောင် / ဖျော်ဖြေသူ", "startup ထူထောင်သူ", "အသက်မွေးဝမ်းကြောင်းလမ်းညွှန်", "ပွဲစီစဉ်သူ"],
    },
    careersToAvoid: {
      en: ["Rigid data-entry work", "Highly repetitive assembly-line roles", "Isolated long-term solo research", "Strict rule-bound compliance roles"],
      my: ["တင်းကျပ်သော ဒေတာထည့်သွင်းမှုအလုပ်", "ထပ်တလဲလဲစုစည်းလိုင်းအလုပ်", "သီးခြားရေရှည်တစ်ဦးတည်းသုတေသန", "စည်းမျဉ်းတင်းကျပ်သော လိုက်နာမှုရာထူးများ"],
    },
    stressResponse: {
      en: "You scatter energy across too many escape routes, avoiding the core issue with distraction or over-talking.",
      my: "သင်သည် ထွက်ပေါက်များစွာဆီ စွမ်းအင်ကို ပျံ့လွင့်စေပြီး အာရုံပြောင်းခြင်း သို့မဟုတ် အလွန်အကျွံပြောခြင်းဖြင့် အဓိကပြဿနာကို ရှောင်ရှားသည်။",
    },
    growthAdvice: {
      en: "Finish one thing before starting the next exciting idea — momentum compounds more than variety does.",
      my: "နောက်ထပ်စိတ်လှုပ်ရှားစရာအတွေးမစတင်မီ တစ်ခုကိုပြီးအောင်လုပ်ပါ — အရှိန်သည် အမျိုးမျိုးရှိမှုထက် ပိုတိုးပွားစေသည်။",
    },
    suggestions: {
      en: [
        "Close out one open project today before you let yourself start the next exciting thing.",
        "Sit with a decision for 24 hours before committing — your gut is good, but a beat of patience will save you a reversal later.",
        "Write down tomorrow's top task tonight, so tomorrow's enthusiasm has a clear place to land instead of scattering.",
      ],
      my: [
        "နောက်ထပ်စိတ်လှုပ်ရှားစရာအရာမစမီ ဖွင့်ထားသောပရောဂျက်တစ်ခုကို ယနေ့ပြီးအောင်လုပ်ပါ။",
        "ကတိမပေးမီ ဆုံးဖြတ်ချက်တစ်ခုနှင့်အတူ ၂၄ နာရီနေကြည့်ပါ — သင့်အသည်းအသန်ခံစားချက်ကောင်းသော်လည်း သည်းခံမှုတစ်ခုက နောက်ပိုင်းပြန်ပြောင်းရမှုကို ကာကွယ်ပေးလိမ့်မည်။",
        "မနက်ဖြန်၏ အဓိကအလုပ်ကို ယနေ့ညစာရင်းရေးထားပါ။",
      ],
    },
    motivation: {
      en: "You're driven by possibility, connection, and the feeling of being fully, authentically alive.",
      my: "သင်သည် ဖြစ်နိုင်ခြေ၊ ဆက်သွယ်မှုနှင့် အပြည့်အဝ၊ စစ်မှန်စွာအသက်ရှင်နေသည့် ခံစားချက်ဖြင့် လှုံ့ဆော်ခံရသည်။",
    },
    learningStyle: {
      en: "You learn through conversation, story, and hands-on exploration rather than solitary study.",
      my: "သင်သည် တစ်ဦးတည်းလေ့လာမှုထက် စကားဝိုင်း၊ ဇာတ်လမ်းနှင့် လက်တွေ့စူးစမ်းမှုဖြင့် သင်ယူသည်။",
    },
    bestEnvironment: {
      en: "You do best in a dynamic, people-rich environment that rewards creativity and doesn't punish a nonlinear process.",
      my: "သင်သည် ဖန်တီးနိုင်စွမ်းကို ဆုချီးမြှင့်ပြီး တစ်ဆင့်ချင်းမဟုတ်သောလုပ်ငန်းစဉ်ကို ပြစ်ဒဏ်မပေးသည့် အားတက်ကြွသော လူများကြွယ်ဝသည့်ပတ်ဝန်းကျင်တွင် အကောင်းဆုံးလုပ်ဆောင်နိုင်သည်။",
    },
    idealTeamRole: {
      en: "You're the energizer who turns a stalled room into a brainstorm and rallies people around new ideas.",
      my: "သင်သည် ရပ်တန့်နေသောအခန်းကို အတွေးအစုအဖွဲ့အဖြစ် ပြောင်းလဲပေးပြီး အတွေးအခေါ်အသစ်များပတ်လည် လူများကို စုစည်းပေးသော စွမ်းအင်ဖြန့်သူဖြစ်သည်",
    },
    famousExamples: {
      en: ["A viral content creator with boundless curiosity", "A traveling performer who connects instantly with any crowd", "An idealistic campaign organizer rallying volunteers"],
      my: ["အကန့်အသတ်မရှိစိတ်ဝင်စားမှုရှိသော ဗိုင်းရပ်ဆန်ကွန်တင့်ဖန်တီးသူ", "မည်သည့်လူအုပ်နှင့်မဆို ချက်ချင်းချိတ်ဆက်နိုင်သော ခရီးသွားဖျော်ဖြေသူ", "ကူညီပါဝင်သူများကို စုစည်းပေးသော စိတ်ကူးယဉ်ကမ်ပိန်းစီစဉ်သူ"],
    },
    dailyHabits: {
      en: ["Start the day with a burst of social or creative energy", "Keep a running list of new ideas to chase later", "Check in with several friends throughout the day"],
      my: ["လူမှုရေး သို့မဟုတ် ဖန်တီးနိုင်စွမ်းစွမ်းအင်ဖြင့် နေ့ကိုစတင်ပါ", "နောက်မှလိုက်ရှာရန် အတွေးအသစ်စာရင်းထားပါ", "တစ်နေ့တာလုံး မိတ်ဆွေများနှင့် ဆက်သွယ်ပါ"],
    },
    baseHue: 118,
    spiritAnimal: { en: "Hummingbird", my: "ငှက်ငယ်လေး" },
    poseDescriptor: "mid-laugh, arms flung wide as if just landing from a leap",
    clothingDescriptor: "a bright color-blocked jacket with playful mismatched patterns",
    environmentDescriptor: "a festival-lit street bursting with color and music",
  },
  ISTJ: {
    id: "ISTJ",
    nickname: { en: "The Anchor", my: "ဆူးထောင်" },
    summary: {
      en: "You're a meticulous, dependable steward of order who quietly keeps the world running exactly as promised.",
      my: "သင်သည် ကမ္ဘာကို ကတိပေးထားသည့်အတိုင်း တိတ်ဆိတ်စွာ ဆက်လက်လည်ပတ်စေသော စေ့စပ်သေချာပြီး ယုံကြည်စိတ်ချရသော စည်းကမ်းထိန်းသိမ်းသူဖြစ်သည်။",
    },
    coreMotivation: {
      en: "You want to be genuinely reliable — to do what you said you'd do, correctly and on time, every time.",
      my: "သင်သည် အမှန်တကယ် ယုံကြည်စိတ်ချရလိုသည် — ပြောခဲ့သည့်အတိုင်း အချိန်တိုင်း မှန်ကန်စွာနှင့် အချိန်မှန်လုပ်ဆောင်လိုသည်။",
    },
    strengths: {
      en: ["Unshakeable reliability", "Strong attention to detail", "Disciplined follow-through", "Sound practical judgment", "Loyal and consistent", "Calm, steady presence"],
      my: ["မတုန်လှုပ်နိုင်သော ယုံကြည်စိတ်ချရမှု", "အသေးစိတ်အချက်များကို ခိုင်မာစွာ ဂရုစိုက်ခြင်း", "စည်းကမ်းရှိသော ဆက်လက်လုပ်ဆောင်မှု", "လက်တွေ့ကျသော ဆင်ခြင်တုံတရား", "သစ္စာရှိပြီး တသမတ်တည်းရှိခြင်း", "တည်ငြိမ်ပြီး တည်ငြိမ်သောရှိနေမှု"],
    },
    weaknesses: {
      en: ["Resistant to sudden change", "Can be overly rigid", "Slow to express feelings", "Undervalues abstract ideas", "Overly critical of shortcuts", "Struggles to delegate"],
      my: ["ရုတ်တရက်ပြောင်းလဲမှုကို ဆန့်ကျင်", "အလွန်တင်းမာနိုင်", "ခံစားချက်ဖော်ပြရန် နှေးကွေး", "စိတ္တဇအတွေးများကို လျှော့တွက်", "ဖြတ်လမ်းများကို လွန်ကဲစွာဝေဖန်", "လွှဲအပ်ရန် ခက်ခဲ"],
    },
    leadershipStyle: {
      en: "You lead by consistent example, setting clear expectations and following through on every commitment personally.",
      my: "သင်သည် တသမတ်တည်းသောပုံသက်ရောက်ဖြင့် ဦးဆောင်ပြီး ရှင်းလင်းသောမျှော်လင့်ချက်များသတ်မှတ်ကာ ကတိတိုင်းကို ကိုယ်တိုင်ဆောင်ရွက်သည်။",
    },
    communicationStyle: {
      en: "You're clear, factual, and understated; you say exactly what you mean and expect the same precision from others.",
      my: "သင်သည် ရှင်းလင်း၊ အချက်အလက်အခြေခံပြီး လျှော့တွက်ပြောဆိုသည်၊ ဆိုလိုသည့်အတိုင်း တိတိကျကျပြောပြီး သူတစ်ပါးထံမှလည်း တူညီသောတိကျမှုကို မျှော်လင့်သည်။",
    },
    decisionStyle: {
      en: "You rely on proven methods and concrete facts, rarely swayed by speculation or unproven trends.",
      my: "သင်သည် သက်သေပြပြီးသားနည်းလမ်းများနှင့် တိကျသောအချက်အလက်များကို အားကိုးပြီး ခန့်မှန်းချက် သို့မဟုတ် သက်သေမပြသေးသောလမ်းကြောင်းများဖြင့် ရှားရှားပါးပါးသာ လွှမ်းမိုးခံရသည်။",
    },
    workStyle: {
      en: "You're methodical and thorough, working through a checklist with quiet discipline until it's genuinely done.",
      my: "သင်သည် စနစ်တကျနှင့် သေချာစွာ လုပ်ဆောင်ပြီး တိတ်ဆိတ်သောစည်းကမ်းဖြင့် checklist ကို အမှန်တကယ်ပြီးအောင် လုပ်ဆောင်သည်။",
    },
    friendshipStyle: {
      en: "You're a dependable friend for the long haul, showing up consistently rather than dramatically.",
      my: "သင်သည် ရေရှည်အတွက် ယုံကြည်စိတ်ချရသောမိတ်ဆွေဖြစ်ပြီး ပြင်းထန်စွာမဟုတ်ဘဲ တသမတ်တည်း ရောက်ရှိလာသည်။",
    },
    relationshipStyle: {
      en: "You show love through consistent action and follow-through rather than grand gestures; you value stability above all.",
      my: "သင်သည် ကြီးမားသောလှုပ်ရှားမှုများထက် တသမတ်တည်းလုပ်ဆောင်မှုနှင့် ဆက်လက်ဆောင်ရွက်မှုဖြင့် ချစ်ခြင်းကို ပြသသည်၊ တည်ငြိမ်မှုကို အရာအားလုံးထက် တန်ဖိုးထားသည်။",
    },
    parentingStyle: {
      en: "You provide structure, routine, and clear expectations, teaching responsibility through consistent example.",
      my: "သင်သည် ဖွဲ့စည်းပုံ၊ ပုံမှန်လုပ်ဆောင်မှုနှင့် ရှင်းလင်းသောမျှော်လင့်ချက်များကို ပေးပြီး တသမတ်တည်းသောပုံသက်ရောက်ဖြင့် တာဝန်ယူမှုကို သင်ကြားသည်။",
    },
    problemSolving: {
      en: "You apply proven, methodical processes, trusting what has reliably worked before over untested theories.",
      my: "သင်သည် သက်သေပြပြီးသား၊ စနစ်ကျသောလုပ်ငန်းစဉ်များကို အသုံးပြုပြီး စမ်းသပ်ခြင်းမရှိသေးသော သီအိုရီများထက် အရင်ကယုံကြည်စိတ်ချစွာအလုပ်ဖြစ်ခဲ့သည့်အရာကို ယုံကြည်သည်။",
    },
    creativity: {
      en: "It's practical and applied — you improve a process or refine a system rather than invent from scratch.",
      my: "၎င်းသည် လက်တွေ့ကျပြီး အသုံးချနိုင်သည် — အစအဆုံးတီထွင်မည့်အစား လုပ်ငန်းစဉ်တစ်ခုကို တိုးတက်စေခြင်း သို့မဟုတ် စနစ်တစ်ခုကို ပြန်ညှိခြင်းဖြင့် ဖော်ပြသည်။",
    },
    conflictStyle: {
      en: "You prefer to address issues directly and factually, uncomfortable with emotional escalation on either side.",
      my: "သင်သည် ပြဿနာများကို တိုက်ရိုက်နှင့် အချက်အလက်ဖြင့် ကိုင်တွယ်လိုပြီး ဘက်နှစ်ဘက်လုံးမှ စိတ်ခံစားမှုတိုးမြင့်လာခြင်းကို မသက်မသာဖြစ်သည်။",
    },
    careerPaths: {
      en: ["Auditor / accountant", "Operations manager", "Civil engineer", "Logistics coordinator", "Judge / legal administrator", "Quality assurance lead"],
      my: ["စာရင်းစစ် / စာရင်းကိုင်", "လည်ပတ်ရေးမန်နေဂျာ", "အင်ဂျင်နီယာ", "ထောက်ပံ့ပို့ဆောင်ရေးညှိနှိုင်းသူ", "တရားသူကြီး / ဥပဒေအုပ်ချုပ်ရေးမှူး", "အရည်အသွေးထိန်းသိမ်းရေးခေါင်းဆောင်"],
    },
    careersToAvoid: {
      en: ["Highly improvisational creative roles", "Fast-pivoting early-stage startups", "Ambiguous, unstructured consulting", "Roles with constantly shifting rules"],
      my: ["ရုတ်တရက်ဖန်တီးရသော အနုပညာအလုပ်များ", "အလျင်အမြန်ပြောင်းလဲနေသော အစပျိုးလုပ်ငန်းသစ်များ", "မရေရာ၊ စနစ်မကျသော အတိုင်ပင်ခံအလုပ်", "စည်းမျဉ်းအမြဲပြောင်းလဲနေသောရာထူးများ"],
    },
    stressResponse: {
      en: "You become rigid and overly focused on control, doubling down on rules even when they no longer fit.",
      my: "သင်သည် တင်းမာလာပြီး ထိန်းချုပ်မှုကို အလွန်အကျွံအာရုံစိုက်ကာ မကိုက်ညီတော့သော်လည်း စည်းမျဉ်းများကို ပိုတင်းကျပ်စေသည်။",
    },
    growthAdvice: {
      en: "Practice tolerating a little more ambiguity — not every plan needs to be finalized before it starts.",
      my: "အနည်းငယ်ပိုမိုမရေရာမှုကို သည်းခံရန် လေ့ကျင့်ပါ — အစီအစဉ်တိုင်း စတင်မီ အပြီးသတ်ရန် မလိုပါ။",
    },
    suggestions: {
      en: [
        "Let one plan this week stay 80% finished instead of 100% — notice that it still works.",
        "Ask someone how they're really doing, and sit with the answer, even if it's not tidy or fixable.",
        "Hand off one task you'd normally keep for yourself and let it be done differently than you'd do it.",
      ],
      my: [
        "ဒီအပတ်တွင် အစီအစဉ်တစ်ခုကို ၁၀၀% အစား ၈၀% ပြီးအောင်သာလုပ်ကြည့်ပါ — အလုပ်ဖြစ်နေဆဲကို သတိပြုပါ။",
        "တစ်စုံတစ်ဦးအား သူတို့တကယ်ဘယ်လိုနေထိုင်နေသလဲမေးပြီး အဖြေနှင့်အတူ နေကြည့်ပါ။",
        "ပုံမှန်ကိုယ်တိုင်ထားလေ့ရှိသောအလုပ်တစ်ခုကို လွှဲအပ်ပြီး သင့်နည်းနှင့်မတူဘဲ ပြီးမြောက်ခွင့်ပြုပါ။",
      ],
    },
    motivation: {
      en: "You're driven by duty, competence, and the quiet pride of a job done thoroughly and correctly.",
      my: "သင်သည် တာဝန်၊ စွမ်းရည်နှင့် သေချာစွာနှင့်မှန်ကန်စွာ ပြီးမြောက်သောအလုပ်၏ တိတ်ဆိတ်သောဂုဏ်ယူမှုဖြင့် လှုံ့ဆော်ခံရသည်။",
    },
    learningStyle: {
      en: "You learn best through structured, sequential material with clear application to real tasks.",
      my: "သင်သည် လက်တွေ့လုပ်ငန်းများနှင့် ရှင်းလင်းစွာ အသုံးချနိုင်သော စနစ်ကျ၊ အစဉ်လိုက်အကြောင်းအရာများဖြင့် အကောင်းဆုံးသင်ယူသည်။",
    },
    bestEnvironment: {
      en: "You do best in a stable, well-organized environment with clear expectations and respect for process.",
      my: "သင်သည် ရှင်းလင်းသောမျှော်လင့်ချက်များနှင့် လုပ်ငန်းစဉ်ကို လေးစားသော တည်ငြိမ်၍ စနစ်တကျရှိသောပတ်ဝန်းကျင်တွင် အကောင်းဆုံးလုပ်ဆောင်နိုင်သည်။",
    },
    idealTeamRole: {
      en: "You're the steady executor who makes sure nothing falls through the cracks.",
      my: "သင်သည် မည်သည့်အရာမျှ ချွတ်ချော်မသွားစေရန် သေချာစေသော တည်ငြိမ်သောလုပ်ဆောင်သူဖြစ်သည်",
    },
    famousExamples: {
      en: ["A veteran administrator who keeps an institution running for decades", "A meticulous auditor who catches what everyone else missed", "A dependable community pillar everyone relies on"],
      my: ["ဆယ်စုနှစ်များစွာ အဖွဲ့အစည်းတစ်ခုကို ဆက်လက်လည်ပတ်စေသော အတွေ့အကြုံရင့်အုပ်ချုပ်သူ", "သူများလွတ်သွားသည်များကို ဖမ်းဆီးနိုင်သော စေ့စပ်သေချာသောစာရင်းစစ်", "လူတိုင်းအားကိုးသော ယုံကြည်စိတ်ချရသည့် အသိုင်းအဝိုင်းတိုင်"],
    },
    dailyHabits: {
      en: ["Keep a detailed daily checklist", "Review your commitments each evening", "Maintain a consistent routine and sleep schedule"],
      my: ["အသေးစိတ် နေ့စဉ်လုပ်စရာစာရင်း ထိန်းသိမ်းထားပါ", "ညနေတိုင်း ကတိများကို ပြန်လည်သုံးသပ်ပါ", "တသမတ်တည်း နေ့စဉ်လုပ်ဆောင်မှုနှင့် အိပ်ချိန်ဇယားကို ထိန်းသိမ်းပါ"],
    },
    baseHue: 216,
    spiritAnimal: { en: "Elephant", my: "ဆင်" },
    poseDescriptor: "standing at attention beside a neatly organized desk, ledger in hand",
    clothingDescriptor: "a crisp, pressed navy uniform with polished details",
    environmentDescriptor: "an orderly archive room with perfectly aligned shelves",
  },
  ISFJ: {
    id: "ISFJ",
    nickname: { en: "The Caretaker", my: "ပြုစုစောင့်ရှောက်သူ" },
    summary: {
      en: "You're a quietly devoted protector who notices what people need before they ask and works steadily to provide it.",
      my: "သင်သည် လူများတောင်းဆိုမီ လိုအပ်ချက်ကို သတိပြုမိပြီး ၎င်းကိုပေးရန် တည်ငြိမ်စွာ လုပ်ဆောင်သော တိတ်ဆိတ်စွာရုန်းကန်တတ်သည့် အစောင့်အရှောက်ဖြစ်သည်။",
    },
    coreMotivation: {
      en: "You want to take care of the people and traditions you value, often without needing recognition for it.",
      my: "သင်သည် အသိအမှတ်ပြုခံရရန် မလိုအပ်ဘဲ တန်ဖိုးထားရသောလူများနှင့် ရိုးရာအစဉ်အလာများကို ဂရုစိုက်လိုသည်။",
    },
    strengths: {
      en: ["Attentive to others' needs", "Deeply loyal", "Reliable and thorough", "Strong practical memory", "Humble competence", "Calm, steady support"],
      my: ["သူတစ်ပါးလိုအပ်ချက်ကို ဂရုစိုက်ခြင်း", "နက်ရှိုင်းစွာ သစ္စာရှိခြင်း", "ယုံကြည်စိတ်ချရပြီး သေချာခြင်း", "ခိုင်မာသော လက်တွေ့မှတ်ဉာဏ်", "နှိမ့်ချသော စွမ်းရည်", "တည်ငြိမ်သော ထောက်ပံ့မှု"],
    },
    weaknesses: {
      en: ["Struggles to ask for help", "Avoids conflict even when necessary", "Undervalues your own needs", "Resistant to sudden change", "Overcommits out of duty", "Takes criticism personally"],
      my: ["အကူအညီတောင်းရန် ခက်ခဲ", "လိုအပ်သည့်တိုင် ပဋိပက္ခကို ရှောင်ရှား", "ကိုယ်ပိုင်လိုအပ်ချက်ကို လျှော့တွက်", "ရုတ်တရက်ပြောင်းလဲမှုကို ဆန့်ကျင်", "တာဝန်ကြောင့် အလွန်အကျွံကတိပေး", "ဝေဖန်ချက်ကို ကိုယ်ရေးကိုယ်တာယူ"],
    },
    leadershipStyle: {
      en: "You lead through quiet service, earning trust by consistently showing up for the people you lead.",
      my: "သင်သည် တိတ်ဆိတ်သောဝန်ဆောင်မှုဖြင့် ဦးဆောင်ပြီး ဦးဆောင်ရသူများအတွက် တသမတ်တည်း ရောက်ရှိလာခြင်းဖြင့် ယုံကြည်မှုကို ရရှိသည်။",
    },
    communicationStyle: {
      en: "You're gentle and considerate, and specific; you listen more than you speak and remember small details others miss.",
      my: "သင်သည် နူးညံ့၊ ထောက်ထားပြီး တိကျသည်၊ ပြောသည်ထက် ပိုနားထောင်ပြီး သူများလွတ်သွားသည့် သေးငယ်သောအသေးစိတ်များကို မှတ်မိသည်။",
    },
    decisionStyle: {
      en: "You weigh decisions against how they'll affect the people involved, favoring proven, careful choices.",
      my: "သင်သည် ဆုံးဖြတ်ချက်များကို ပါဝင်ပတ်သက်သူများအပေါ် မည်သို့သက်ရောက်မည်ကို ဆင်ခြင်ပြီး သက်သေပြပြီး ဂရုတစိုက်ရွေးချယ်မှုများကို ပိုနှစ်သက်သည်။",
    },
    workStyle: {
      en: "You're steady and detail-oriented, quietly handling the unglamorous work that keeps everything functioning.",
      my: "သင်သည် တည်ငြိမ်ပြီး အသေးစိတ်ကို ဂရုစိုက်သည်၊ အရာအားလုံးကို ဆက်လက်လည်ပတ်စေသည့် ဆွဲဆောင်မှုမရှိသောအလုပ်များကို တိတ်ဆိတ်စွာ ကိုင်တွယ်သည်။",
    },
    friendshipStyle: {
      en: "You're the friend who remembers birthdays and shows up with exactly what's needed, without being asked.",
      my: "သင်သည် မွေးနေ့များကို မှတ်မိပြီး မတောင်းဆိုဘဲ လိုအပ်သည့်အရာအတိအကျနှင့် ရောက်ရှိလာသော မိတ်ဆွေဖြစ်သည်။",
    },
    relationshipStyle: {
      en: "You're devoted and attentive, expressing love through consistent small acts of care rather than words.",
      my: "သင်သည် ရုန်းကန်ကာ ဂရုစိုက်သည်၊ စကားလုံးများထက် တသမတ်တည်း သေးငယ်သောဂရုစိုက်မှုလုပ်ရပ်များဖြင့် ချစ်ခြင်းကို ဖော်ပြသည်။",
    },
    parentingStyle: {
      en: "You're nurturing and protective, building a warm, stable home with clear, gentle structure.",
      my: "သင်သည် မွေးမြူပြီး ကာကွယ်တတ်သည်၊ ရှင်းလင်း၍ နူးညံ့သောဖွဲ့စည်းပုံဖြင့် နွေးထွေးတည်ငြိမ်သောအိမ်ကို တည်ဆောက်သည်။",
    },
    problemSolving: {
      en: "You draw on past experience and practical precedent, preferring tested solutions to risky experiments.",
      my: "သင်သည် အတိတ်အတွေ့အကြုံနှင့် လက်တွေ့ရှေးဦးစွာအလေ့အထများကို အားကိုးပြီး အန္တရာယ်ရှိသောစမ်းသပ်မှုများထက် စစ်ဆေးပြီးသားဖြေရှင်းချက်များကို ပိုနှစ်သက်သည်။",
    },
    creativity: {
      en: "It's expressed through thoughtful craft — making something useful and beautiful for someone specific.",
      my: "၎င်းကို စဉ်းစားထားသောလက်မှုပညာဖြင့် ဖော်ပြသည် — တစ်ဦးတစ်ယောက်အတွက် အသုံးဝင်ပြီး လှပသည့်အရာတစ်ခု ပြုလုပ်ခြင်း။",
    },
    conflictStyle: {
      en: "You avoid confrontation as long as possible, absorbing tension quietly until it must be addressed.",
      my: "သင်သည် ဖြစ်နိုင်သမျှကြာအောင် ရင်ဆိုင်မှုကို ရှောင်ရှားပြီး ကိုင်တွယ်ရန်လိုအပ်သည်အထိ တင်းမာမှုကို တိတ်ဆိတ်စွာ စုပ်ယူထားသည်။",
    },
    careerPaths: {
      en: ["Nurse / healthcare provider", "Elementary teacher", "Social worker", "HR coordinator", "Librarian", "Office / operations manager"],
      my: ["သူနာပြု / ကျန်းမာရေးဝန်ဆောင်မှုပေးသူ", "မူလတန်းဆရာ", "လူမှုဝန်ထမ်း", "HR ညှိနှိုင်းသူ", "စာကြည့်တိုက်မှူး", "ရုံး / လည်ပတ်ရေးမန်နေဂျာ"],
    },
    careersToAvoid: {
      en: ["High-conflict negotiation roles", "Aggressive competitive sales", "Roles requiring constant public criticism of others", "Chaotic, ever-changing startups"],
      my: ["ပဋိပက္ခများသော ညှိနှိုင်းရေးရာထူးများ", "ပြင်းထန်သော ယှဉ်ပြိုင်အရောင်းလုပ်ငန်း", "သူတစ်ပါးကို အများသူငှာ အမြဲဝေဖန်နေရသောရာထူးများ", "အမြဲပြောင်းလဲနေသော startup များ"],
    },
    stressResponse: {
      en: "You suppress your own needs further, becoming quietly overwhelmed and self-critical.",
      my: "သင်သည် ကိုယ်ပိုင်လိုအပ်ချက်များကို ပိုမိုဖိနှိပ်ထားပြီး တိတ်ဆိတ်စွာ လွှမ်းမိုးခံရကာ ကိုယ့်ကိုယ်ကို ဝေဖန်လာသည်။",
    },
    growthAdvice: {
      en: "Voice your own needs before resentment builds — the people who rely on you want to reciprocate the care.",
      my: "စိတ်ဆိုးမှုမတည်ဆောက်မီ ကိုယ်ပိုင်လိုအပ်ချက်ကို ပြောပါ — သင့်ကိုအားကိုးသူများသည် ဂရုစိုက်မှုကို ပြန်ပေးလိုကြသည်။",
    },
    suggestions: {
      en: [
        "Ask for one specific thing you need today instead of hoping someone notices — most people genuinely want to help if you tell them how.",
        "Say no to one request that would stretch you too thin, and let the discomfort of disappointing someone pass without fixing it.",
        "Try one new, untested approach on a small task this week — notice that change doesn't have to be a threat.",
      ],
      my: [
        "တစ်စုံတစ်ဦးသတိပြုမိလိမ့်မည်ဟု မျှော်လင့်မည့်အစား ယနေ့လိုအပ်သောအရာတစ်ခုကို တိတိကျကျတောင်းဆိုပါ။",
        "သင့်ကိုအလွန်ဖိစီးစေမည့် တောင်းဆိုမှုတစ်ခုကို ငြင်းပယ်ပြီး ပြင်ဆင်မနေဘဲ စိတ်မကောင်းမှုကို ဖြတ်သန်းခွင့်ပြုပါ။",
        "ဒီအပတ်တွင် သေးငယ်သောအလုပ်တစ်ခုတွင် စမ်းသပ်ခြင်းမရှိသေးသော နည်းလမ်းသစ်တစ်ခုကို စမ်းကြည့်ပါ။",
      ],
    },
    motivation: {
      en: "You're driven by duty, loyalty, and the satisfaction of genuinely helping people you care about.",
      my: "သင်သည် တာဝန်၊ သစ္စာရှိမှုနှင့် ဂရုစိုက်ရသူများကို အမှန်တကယ်ကူညီရသည့် ကျေနပ်မှုဖြင့် လှုံ့ဆော်ခံရသည်။",
    },
    learningStyle: {
      en: "You learn best through concrete, hands-on practice tied to real people and situations.",
      my: "သင်သည် လက်တွေ့လူများနှင့် အခြေအနေများနှင့် ဆက်စပ်သော တိကျသော လက်တွေ့လေ့ကျင့်မှုဖြင့် အကောင်းဆုံးသင်ယူသည်။",
    },
    bestEnvironment: {
      en: "You do best in a warm, stable environment with clear roles and genuine appreciation for quiet contributions.",
      my: "သင်သည် ရှင်းလင်းသောအခန်းကဏ္ဍများနှင့် တိတ်ဆိတ်သောပါဝင်မှုအတွက် စစ်မှန်သောတန်ဖိုးထားမှုရှိသော နွေးထွေး၍တည်ငြိမ်သောပတ်ဝန်းကျင်တွင် အကောင်းဆုံးလုပ်ဆောင်နိုင်သည်။",
    },
    idealTeamRole: {
      en: "You're the steady supporter who keeps the team's day-to-day needs quietly handled.",
      my: "သင်သည် အဖွဲ့၏နေ့စဉ်လိုအပ်ချက်များကို တိတ်ဆိတ်စွာ ကိုင်တွယ်ပေးသော တည်ငြိမ်သောထောက်ခံသူဖြစ်သည်",
    },
    famousExamples: {
      en: ["A beloved family doctor who remembers every patient's story", "A dedicated teacher who shapes a generation quietly", "A behind-the-scenes caretaker who holds a community together"],
      my: ["လူနာတိုင်း၏ဇာတ်လမ်းကို မှတ်မိသော ချစ်ခင်ရသောမိသားစုဆရာဝန်", "လူတစ်ဆက်ကို တိတ်ဆိတ်စွာပုံဖော်ပေးသော ရုန်းကန်တတ်သောဆရာ", "အသိုင်းအဝိုင်းကို ပေါင်းစည်းထားသော နောက်ကွယ်မှ ပြုစုစောင့်ရှောက်သူ"],
    },
    dailyHabits: {
      en: ["Check in on people close to you daily", "Keep a tidy, comforting personal space", "Plan ahead to avoid last-minute stress"],
      my: ["ရင်းနှီးသူများကို နေ့စဉ်စစ်ဆေးပါ", "သန့်ရှင်းသက်သောင့်သက်သာဖြစ်သော ကိုယ်ပိုင်နေရာ ထိန်းသိမ်းထားပါ", "နောက်ဆုံးမိနစ်ဖိစီးမှုမဖြစ်စေရန် ကြိုတင်စီစဉ်ပါ"],
    },
    baseHue: 38,
    spiritAnimal: { en: "Dove", my: "ချိုးငှက်" },
    poseDescriptor: "kneeling to offer a warm blanket, eyes soft with quiet attention",
    clothingDescriptor: "a soft knit cardigan over a simple, well-cared-for dress",
    environmentDescriptor: "a cozy kitchen filled with warm light and homemade preserves",
  },
  ESTJ: {
    id: "ESTJ",
    nickname: { en: "The Organizer", my: "စီစဉ်သူ" },
    summary: {
      en: "You're a no-nonsense executor who turns plans into visible order and expects the same discipline from everyone around you.",
      my: "သင်သည် အစီအစဉ်များကို မြင်သာသောစနစ်ဖြစ်အောင်ပြောင်းလဲပေးပြီး ပတ်ဝန်းကျင်ရှိလူတိုင်းထံမှ တူညီသောစည်းကမ်းကို မျှော်လင့်သော ရိုးရိုးရှင်းရှင်းအကောင်အထည်ဖော်သူဖြစ်သည်။",
    },
    coreMotivation: {
      en: "You want to keep things running efficiently and correctly, and to be the dependable person others can count on to make that happen.",
      my: "သင်သည် အရာများကို ထိရောက်စွာနှင့် မှန်ကန်စွာ ဆက်လက်လည်ပတ်စေလိုပြီး ၎င်းကိုဖြစ်စေနိုင်သည့် ယုံကြည်စိတ်ချရသောသူဖြစ်လိုသည်။",
    },
    strengths: {
      en: ["Decisive execution", "Strong organizational skill", "Clear expectations", "Dependable follow-through", "Confident under pressure", "Practical problem-solving"],
      my: ["ဆုံးဖြတ်ချက်ရှိသော အကောင်အထည်ဖော်မှု", "ခိုင်မာသော စီမံခန့်ခွဲမှုစွမ်းရည်", "ရှင်းလင်းသော မျှော်လင့်ချက်များ", "ယုံကြည်စိတ်ချရသော ဆက်လက်လုပ်ဆောင်မှု", "ဖိအားအောက်တွင် ယုံကြည်မှုရှိခြင်း", "လက်တွေ့ကျသော ပြဿနာဖြေရှင်းမှု"],
    },
    weaknesses: {
      en: ["Can be inflexible", "Impatient with inefficiency", "Undervalues emotional nuance", "Overly blunt feedback", "Resistant to unproven ideas", "Struggles to delegate control"],
      my: ["လိုက်လျောညီထွေမရှိနိုင်", "အကျိုးမရှိသောအရာများကို သည်းမခံနိုင်", "စိတ်ခံစားမှုအသေးစိတ်ကို လျှော့တွက်", "အလွန်ရိုက်ချက်ကြမ်းသော တုံ့ပြန်ချက်", "သက်သေမပြသေးသောအတွေးများကို ဆန့်ကျင်", "ထိန်းချုပ်မှုလွှဲအပ်ရန် ခက်ခဲ"],
    },
    leadershipStyle: {
      en: "You lead with clear structure and accountability, setting expectations early and enforcing them consistently.",
      my: "သင်သည် ရှင်းလင်းသောဖွဲ့စည်းပုံနှင့် တာဝန်ခံမှုဖြင့် ဦးဆောင်ပြီး မျှော်လင့်ချက်များကို စောစီးစွာသတ်မှတ်ကာ တသမတ်တည်းအတည်ပြုသည်။",
    },
    communicationStyle: {
      en: "You're direct, efficient, and matter-of-fact; you value clarity over diplomacy but are rarely dishonest about where things stand.",
      my: "သင်သည် တိုက်ရိုက်၊ ထိရောက်ပြီး အချက်အလက်ခြေခံသည်၊ သံတမန်ရေးလမ်းစဉ်ထက် ရှင်းလင်းမှုကို တန်ဖိုးထားသော်လည်း အခြေအနေကို ရိုးရိုးမဟုတ်ဘဲ ရှားရှားပါးပါးသာပြောသည်။",
    },
    decisionStyle: {
      en: "You move quickly from established facts and precedent, trusting proven processes over speculative theory.",
      my: "သင်သည် တည်ထောင်ပြီးသားအချက်အလက်နှင့် ရှေးဦးစွာအလေ့အထများမှ လျင်မြန်စွာ ရွေ့လျားပြီး ခန့်မှန်းသီအိုရီများထက် သက်သေပြပြီးသားလုပ်ငန်းစဉ်များကို ယုံကြည်သည်။",
    },
    workStyle: {
      en: "You organize teams and tasks methodically, driving toward measurable results on a clear timeline.",
      my: "သင်သည် အဖွဲ့များနှင့် လုပ်ငန်းများကို စနစ်တကျစီစဉ်ပြီး ရှင်းလင်းသောအချိန်ဇယားပေါ်တွင် တိုင်းတာနိုင်သောရလဒ်များဆီ တွန်းအားပေးသည်။",
    },
    friendshipStyle: {
      en: "You're a dependable, plan-making friend who shows loyalty through consistent, practical support.",
      my: "သင်သည် ယုံကြည်စိတ်ချရပြီး အစီအစဉ်ဆွဲတတ်သော မိတ်ဆွေဖြစ်ပြီး တသမတ်တည်း လက်တွေ့ကျသောထောက်ပံ့မှုဖြင့် သစ္စာရှိမှုကို ပြသသည်။",
    },
    relationshipStyle: {
      en: "You're committed and structured, expressing love through provision and reliable follow-through on shared goals.",
      my: "သင်သည် ကတိကျပြီး စနစ်ကျသည်၊ ဘုံပန်းတိုင်များအတွက် ထောက်ပံ့မှုနှင့် ယုံကြည်စိတ်ချရသောဆက်လက်လုပ်ဆောင်မှုဖြင့် ချစ်ခြင်းကို ဖော်ပြသည်။",
    },
    parentingStyle: {
      en: "You provide firm structure and clear expectations, actively teaching discipline and responsibility.",
      my: "သင်သည် ခိုင်မာသောဖွဲ့စည်းပုံနှင့် ရှင်းလင်းသောမျှော်လင့်ချက်များကို ပေးပြီး စည်းကမ်းနှင့် တာဝန်ယူမှုကို တက်ကြွစွာသင်ကြားသည်။",
    },
    problemSolving: {
      en: "You assess the situation quickly against known best practice and assign clear ownership to fix it.",
      my: "သင်သည် အခြေအနေကို လူသိများသောအကောင်းဆုံးအလေ့အထနှင့် လျင်မြန်စွာအကဲဖြတ်ပြီး ပြင်ရန် ရှင်းလင်းသောပိုင်ဆိုင်မှုကို သတ်မှတ်သည်။",
    },
    creativity: {
      en: "It's applied and pragmatic — you improve processes and systems for measurable, tangible results.",
      my: "၎င်းသည် အသုံးချနိုင်ပြီး လက်တွေ့ကျသည် — တိုင်းတာနိုင်၍ လက်တွေ့ရလဒ်များအတွက် လုပ်ငန်းစဉ်နှင့်စနစ်များကို တိုးတက်စေသည်။",
    },
    conflictStyle: {
      en: "You address issues head-on and quickly, preferring a resolved disagreement over a lingering, unspoken one.",
      my: "သင်သည် ပြဿနာများကို တိုက်ရိုက်နှင့် လျင်မြန်စွာ ကိုင်တွယ်ပြီး ဆက်လက်ကျန်ရှိနေသော မပြောသေးသည့်သဘောကွဲလွဲမှုထက် ဖြေရှင်းပြီးသားကို ပိုနှစ်သက်သည်။",
    },
    careerPaths: {
      en: ["Operations executive", "Project manager", "Military or law enforcement officer", "School administrator", "Financial manager", "Business owner"],
      my: ["လည်ပတ်ရေးအမှုဆောင်", "ပရောဂျက်မန်နေဂျာ", "စစ်တပ် သို့မဟုတ် ဥပဒေအာဏာပိုင်အရာရှိ", "ကျောင်းအုပ်ချုပ်ရေးမှူး", "ဘဏ္ဍာရေးမန်နေဂျာ", "စီးပွားရေးလုပ်ငန်းရှင်"],
    },
    careersToAvoid: {
      en: ["Highly abstract theoretical research", "Unstructured freelance creative work", "Roles with no clear metrics of success", "Constantly shifting, ambiguous startups"],
      my: ["အလွန်စိတ္တဇဆန်သော သီအိုရီသုတေသန", "စနစ်မကျသော freelance အနုပညာအလုပ်", "အောင်မြင်မှုစံနှုန်းရှင်းလင်းစွာမရှိသောရာထူးများ", "အမြဲပြောင်းလဲနေသော မရေရာသည့် startup များ"],
    },
    stressResponse: {
      en: "You tighten control further, becoming rigid and overly critical of anything that deviates from plan.",
      my: "သင်သည် ထိန်းချုပ်မှုကို ပိုတင်းကျပ်စေပြီး တင်းမာလာကာ အစီအစဉ်မှသွေဖည်သည့်မည်သည့်အရာကိုမဆို အလွန်ဝေဖန်တတ်လာသည်။",
    },
    growthAdvice: {
      en: "Pause to ask what people need emotionally before issuing the next directive — efficiency isn't the only currency that matters.",
      my: "နောက်ထပ်ညွှန်ကြားချက်မထုတ်မီ လူများ စိတ်ခံစားမှုအရ ဘာလိုအပ်သလဲမေးပါ — ထိရောက်မှုသာ အရေးကြီးသောအချက်မဟုတ်ပါ။",
    },
    suggestions: {
      en: [
        "Before your next directive, ask one person how they're feeling about the plan, not just whether they've finished it.",
        "Let a small task get done in someone else's way today, even if it's not how you'd do it.",
        "Sit with one unproven idea for a week before dismissing it — test it small instead of ruling it out on instinct.",
      ],
      my: [
        "နောက်ထပ်ညွှန်ကြားချက်မထုတ်မီ တစ်စုံတစ်ဦးအား အစီအစဉ်အကြောင်း ဘယ်လိုခံစားရသလဲမေးပါ။",
        "ယနေ့ သေးငယ်သောအလုပ်တစ်ခုကို သူတစ်ပါး၏နည်းလမ်းဖြင့် ပြီးမြောက်ခွင့်ပြုပါ။",
        "သက်သေမပြသေးသောအတွေးတစ်ခုကို ပယ်ချမီ တစ်ပတ်နေကြည့်ပါ — အသည်းအသန်ခံစားချက်ဖြင့် ပယ်ချမည့်အစား သေးငယ်စွာစမ်းသပ်ကြည့်ပါ။",
      ],
    },
    motivation: {
      en: "You're driven by order, achievement, and visible, measurable progress.",
      my: "သင်သည် စနစ်တကျရှိမှု၊ အောင်မြင်မှုနှင့် မြင်သာ၍တိုင်းတာနိုင်သောတိုးတက်မှုဖြင့် လှုံ့ဆော်ခံရသည်။",
    },
    learningStyle: {
      en: "You learn best through structured, practical application with clear right answers.",
      my: "သင်သည် ရှင်းလင်းသောမှန်ကန်သောအဖြေများနှင့် စနစ်ကျ၍ လက်တွေ့အသုံးချမှုဖြင့် အကောင်းဆုံးသင်ယူသည်။",
    },
    bestEnvironment: {
      en: "You do best in a results-oriented environment with clear hierarchy, defined roles, and measurable goals.",
      my: "သင်သည် ရှင်းလင်းသောအဆင့်ဆင့်၊ သတ်မှတ်ထားသောအခန်းကဏ္ဍနှင့် တိုင်းတာနိုင်သောပန်းတိုင်များရှိသော ရလဒ်ဦးတည်သောပတ်ဝန်းကျင်တွင် အကောင်းဆုံးလုပ်ဆောင်နိုင်သည်။",
    },
    idealTeamRole: {
      en: "You're the organizer who turns a scattered plan into an executable timeline.",
      my: "သင်သည် ပျံ့လွင့်နေသောအစီအစဉ်ကို အကောင်အထည်ဖော်နိုင်သောအချိန်ဇယားအဖြစ် ပြောင်းလဲပေးသော စီစဉ်သူဖြစ်သည်",
    },
    famousExamples: {
      en: ["A results-driven plant manager who never misses a deadline", "A no-nonsense principal who runs a tight, effective school", "A logistics chief who keeps a massive operation on schedule"],
      my: ["သတ်မှတ်ရက်ကို တစ်ကြိမ်မျှ မလွတ်စေသော ရလဒ်ဦးတည်သောစက်ရုံမန်နေဂျာ", "ကျပ်တည်း၍ ထိရောက်သောကျောင်းကို စီမံသော ရိုးရှင်းသောကျောင်းအုပ်ကြီး", "အကြီးမားဆုံးလုပ်ငန်းကို အချိန်ဇယားအတိုင်း ဆောင်ရွက်စေသော ထောက်ပံ့ရေးအကြီးအကဲ"],
    },
    dailyHabits: {
      en: ["Start each day with a prioritized task list", "Review team progress against clear metrics", "Keep a highly organized calendar and workspace"],
      my: ["ဦးစားပေးလုပ်စရာစာရင်းနှင့် နေ့စဉ်စတင်ပါ", "ရှင်းလင်းသောစံနှုန်းများနှင့် အဖွဲ့တိုးတက်မှုကို ပြန်လည်သုံးသပ်ပါ", "စနစ်တကျရှိသော ပြက္ခဒိန်နှင့် လုပ်ငန်းနေရာကို ထိန်းသိမ်းထားပါ"],
    },
    baseHue: 202,
    spiritAnimal: { en: "Ox", my: "နွား" },
    poseDescriptor: "standing beside a whiteboard timeline, pointing decisively at the next milestone",
    clothingDescriptor: "a structured suit with a crisp, no-nonsense silhouette",
    environmentDescriptor: "a busy operations floor with clear signage and organized workstations",
  },
  ESFJ: {
    id: "ESFJ",
    nickname: { en: "The Host", my: "ဧည့်ခံသူ" },
    summary: {
      en: "You're a warm, socially attuned coordinator who keeps a community connected and makes sure everyone feels included.",
      my: "သင်သည် အသိုင်းအဝိုင်းကို ဆက်စပ်စေပြီး လူတိုင်းပါဝင်ပါသည်ဟု ခံစားရအောင် သေချာစေသော နွေးထွေး၍ လူမှုရေးအရ သတိရှိသော ညှိနှိုင်းသူဖြစ်သည်။",
    },
    coreMotivation: {
      en: "You want to build and maintain harmony within a group, ensuring everyone feels valued and cared for.",
      my: "သင်သည် အုပ်စုတစ်ခုအတွင်း သဟဇာတဖြစ်မှုကို တည်ဆောက်ထိန်းသိမ်းလိုပြီး လူတိုင်း တန်ဖိုးထားခံရပြီး ဂရုစိုက်ခံရသည်ဟု ခံစားရစေလိုသည်။",
    },
    strengths: {
      en: ["Strong social awareness", "Genuine warmth", "Reliable organizer of people", "Practical helpfulness", "Loyal and dependable", "Strong sense of tradition"],
      my: ["ခိုင်မာသော လူမှုရေးသတိပညာ", "စစ်မှန်သော နွေးထွေးမှု", "ယုံကြည်စိတ်ချရသော လူစုစည်းသူ", "လက်တွေ့ကျသော အထောက်အကူပြုမှု", "သစ္စာရှိပြီး ယုံကြည်စိတ်ချရခြင်း", "ခိုင်မာသော ရိုးရာအစဉ်အလာခံစားချက်"],
    },
    weaknesses: {
      en: ["Overly sensitive to disapproval", "Struggles with unstructured ambiguity", "Avoids necessary conflict", "Seeks external validation", "Can be overly conventional", "Overextends for others"],
      my: ["ကန့်ကွက်ခံရမှုကို အလွန်ထိခိုက်လွယ်", "စနစ်မကျသောမရေရာမှုကို ရင်ဆိုင်ရန်ခက်ခဲ", "လိုအပ်သောပဋိပက္ခကို ရှောင်ရှား", "ပြင်ပအသိအမှတ်ပြုမှုကို ရှာဖွေ", "အလွန်ဓလေ့ထုံးစံလိုက်နာနိုင်", "သူတစ်ပါးအတွက် အလွန်အကျွံလုပ်ဆောင်"],
    },
    leadershipStyle: {
      en: "You lead by building consensus and morale, keeping the group cohesive through active, personal attention.",
      my: "သင်သည် သဘောတူညီမှုနှင့် စိတ်အားထက်သန်မှုကို တည်ဆောက်ပြီး တက်ကြွသော ကိုယ်ရေးကိုယ်တာဂရုစိုက်မှုဖြင့် အုပ်စုကို စည်းလုံးအောင်ထားသည်။",
    },
    communicationStyle: {
      en: "You're warm, sociable, and practical; you're naturally attuned to group dynamics and quick to smooth over tension.",
      my: "သင်သည် နွေးထွေး၊ လူမှုဆန်ပြီး လက်တွေ့ကျသည်၊ အုပ်စုလုပ်ဆောင်ပုံကို သဘာဝအလျောက်သိမြင်ပြီး တင်းမာမှုကို လျင်မြန်စွာ ပြေပြစ်စေသည်။",
    },
    decisionStyle: {
      en: "You weigh decisions heavily on tradition, social harmony, and how they'll be received by the people involved.",
      my: "သင်သည် ဆုံးဖြတ်ချက်များကို ရိုးရာအစဉ်အလာ၊ လူမှုရေးသဟဇာတမှုနှင့် ပါဝင်ပတ်သက်သူများ မည်သို့လက်ခံမည်ကို လေးနက်စွာ ဆင်ခြင်သည်။",
    },
    workStyle: {
      en: "You're organized and people-centered, keeping a team's morale and logistics running smoothly in parallel.",
      my: "သင်သည် စနစ်ကျပြီး လူဗဟိုပြုသည်၊ အဖွဲ့၏စိတ်အားထက်သန်မှုနှင့် ထောက်ပံ့ရေးကို တစ်ပြိုင်နက် ချောမွေ့စွာဆက်လက်လည်ပတ်စေသည်။",
    },
    friendshipStyle: {
      en: "You're the connector who plans the gathering and makes sure no one is left out.",
      my: "သင်သည် စည်းဝေးပွဲကို စီစဉ်ပြီး မည်သူမျှ ချန်ထားခံရသည်မရှိစေရန် သေချာစေသော ချိတ်ဆက်သူဖြစ်သည်။",
    },
    relationshipStyle: {
      en: "You're devoted and expressive, investing heavily in shared routines, traditions, and visible acts of care.",
      my: "သင်သည် ရုန်းကန်ပြီး ဖော်ပြနိုင်စွမ်းရှိသည်၊ ဘုံနေ့စဉ်လုပ်ဆောင်မှု၊ ရိုးရာအစဉ်အလာနှင့် မြင်သာသောဂရုစိုက်မှုလုပ်ရပ်များတွင် လေးနက်စွာ ရင်းနှီးမြှုပ်နှံသည်။",
    },
    parentingStyle: {
      en: "You're warm and structured, big on tradition, routine, and making sure your kid feels supported and included.",
      my: "သင်သည် နွေးထွေးပြီး စနစ်ကျသည်၊ ရိုးရာအစဉ်အလာနှင့် ပုံမှန်လုပ်ဆောင်မှုကို ပိုအလေးထားပြီး ကလေးထောက်ပံ့ပါဝင်ပါသည်ဟု ခံစားရစေရန် သေချာစေသည်။",
    },
    problemSolving: {
      en: "You solve by consulting the group and drawing on tried-and-true practical precedent.",
      my: "သင်သည် အုပ်စုနှင့်တိုင်ပင်ပြီး စမ်းသပ်ပြီးသားလက်တွေ့ရှေးဦးစွာအလေ့အထများကို အားကိုးခြင်းဖြင့် ဖြေရှင်းသည်။",
    },
    creativity: {
      en: "It's expressed through hosting and organizing — creating warm, memorable shared experiences.",
      my: "၎င်းကို ဧည့်ခံခြင်းနှင့် စီစဉ်ခြင်းဖြင့် ဖော်ပြသည် — နွေးထွေး၍ အမှတ်ရဖွယ်ဘုံအတွေ့အကြုံများ ဖန်တီးခြင်း။",
    },
    conflictStyle: {
      en: "You're uncomfortable with open conflict, working hard to restore harmony quickly, sometimes before the issue is fully resolved.",
      my: "သင်သည် ပွင့်လင်းသောပဋိပက္ခကို မသက်မသာဖြစ်ပြီး ပြဿနာအပြည့်အဝမဖြေရှင်းမီပင် သဟဇာတပြန်ဖြစ်စေရန် လျင်မြန်စွာ ကြိုးပမ်းသည်။",
    },
    careerPaths: {
      en: ["Event coordinator", "HR manager", "Teacher", "Healthcare administrator", "Public relations specialist", "Community program director"],
      my: ["ပွဲစီစဉ်ညှိနှိုင်းသူ", "HR မန်နေဂျာ", "ဆရာ", "ကျန်းမာရေးအုပ်ချုပ်ရေးမှူး", "ပြည်သူ့ဆက်ဆံရေးကျွမ်းကျင်သူ", "အသိုင်းအဝိုင်းအစီအစဉ်ဒါရိုက်တာ"],
    },
    careersToAvoid: {
      en: ["Highly isolated solo research", "Roles requiring constant harsh criticism", "Ambiguous roles without clear social structure", "Cutthroat individually-ranked competition"],
      my: ["အလွန်သီးခြားတစ်ဦးတည်းသုတေသန", "အမြဲပြင်းထန်စွာဝေဖန်နေရသောရာထူးများ", "ရှင်းလင်းသောလူမှုဖွဲ့စည်းပုံမရှိသောမရေရာသည့်ရာထူးများ", "ရက်စက်စွာတစ်ဦးချင်းအဆင့်သတ်မှတ်ယှဉ်ပြိုင်မှု"],
    },
    stressResponse: {
      en: "You overextend to please everyone, becoming anxious about disapproval and losing sight of your own needs.",
      my: "သင်သည် လူတိုင်းကိုကျေနပ်စေရန် အလွန်အကျွံလုပ်ဆောင်ပြီး ကန့်ကွက်ခံရမှုအတွက် စိုးရိမ်လာကာ ကိုယ်ပိုင်လိုအပ်ချက်များကို မမြင်တော့ပါ။",
    },
    growthAdvice: {
      en: "Not every disagreement threatens the relationship — practice sitting with tension instead of rushing to smooth it over.",
      my: "သဘောကွဲလွဲမှုတိုင်း ဆက်ဆံရေးကို ခြိမ်းခြောက်သည်မဟုတ်ပါ — အလျင်စလိုပြေပြစ်အောင်မလုပ်ဘဲ တင်းမာမှုနှင့်အတူ နေကြည့်ရန် လေ့ကျင့်ပါ။",
    },
    suggestions: {
      en: [
        "Let one small disagreement stay unresolved for a day instead of rushing to fix it — notice the relationship survives.",
        "Say what you actually want for once, instead of what you think the group wants — your preference counts too.",
        "Decline one invitation or favor you don't have room for, and skip the extended apology.",
      ],
      my: [
        "သေးငယ်သောသဘောကွဲလွဲမှုတစ်ခုကို အလျင်စလိုမပြေမလည်ဘဲ တစ်ရက်ချန်ထားကြည့်ပါ — ဆက်ဆံရေးက ဆက်ရှင်သန်နေသည်ကို သတိပြုမိပါလိမ့်မည်။",
        "အုပ်စုလိုချင်သည်ဟု ထင်ရာအစား သင်တကယ်လိုချင်သည်ကို တစ်ကြိမ်လောက်ပြောပါ။",
        "နေရာမလုံလောက်သော ဖိတ်ခေါ်မှု သို့မဟုတ် အလုပ်တစ်ခုကို ငြင်းပယ်ပြီး ရှည်လျားသောတောင်းပန်မှုကို ကျော်သွားပါ။",
      ],
    },
    motivation: {
      en: "You're driven by belonging, appreciation, and the visible wellbeing of the people around you.",
      my: "သင်သည် ပါဝင်မှု၊ တန်ဖိုးထားမှုနှင့် ပတ်ဝန်းကျင်ရှိလူများ၏ မြင်သာသောကျန်းမာရေးဖြင့် လှုံ့ဆော်ခံရသည်။",
    },
    learningStyle: {
      en: "You learn best through group interaction and practical, socially relevant application.",
      my: "သင်သည် အုပ်စုအပြန်အလှန်ဆက်ဆံမှုနှင့် လက်တွေ့၊ လူမှုရေးဆိုင်ရာအသုံးချမှုဖြင့် အကောင်းဆုံးသင်ယူသည်။",
    },
    bestEnvironment: {
      en: "You do best in a warm, people-centered environment with clear traditions and visible appreciation.",
      my: "သင်သည် ရှင်းလင်းသောရိုးရာအစဉ်အလာနှင့် မြင်သာသောတန်ဖိုးထားမှုရှိသော နွေးထွေး၍ လူဗဟိုပြုပတ်ဝန်းကျင်တွင် အကောင်းဆုံးလုပ်ဆောင်နိုင်သည်။",
    },
    idealTeamRole: {
      en: "You're the host who keeps morale high and the group genuinely connected.",
      my: "သင်သည် စိတ်အားထက်သန်မှုမြင့်မားစေပြီး အုပ်စုကို စစ်မှန်စွာဆက်စပ်စေသော ဧည့်ခံသူဖြစ်သည်",
    },
    famousExamples: {
      en: ["A beloved community organizer who never misses a birthday", "A warm-hearted school administrator everyone trusts", "A PR lead who makes every stakeholder feel heard"],
      my: ["မွေးနေ့တစ်ခုမျှ မလွတ်စေသော ချစ်ခင်ရသောအသိုင်းအဝိုင်းစုစည်းသူ", "လူတိုင်းယုံကြည်သော နွေးထွေးသည့်ကျောင်းအုပ်ချုပ်ရေးမှူး", "အကျိုးဆက်ခံသူတိုင်း အသံကြားရသည်ဟုခံစားရစေသော PR ခေါင်းဆောင်"],
    },
    dailyHabits: {
      en: ["Reach out to check on friends or family daily", "Plan ahead for group gatherings and traditions", "Keep a tidy, welcoming personal space"],
      my: ["မိတ်ဆွေ သို့မဟုတ် မိသားစုကို နေ့စဉ်ဆက်သွယ်စစ်ဆေးပါ", "အုပ်စုစည်းဝေးပွဲနှင့် ရိုးရာအစဉ်အလာများအတွက် ကြိုတင်စီစဉ်ပါ", "သန့်ရှင်းကြိုဆိုဖွယ်ကောင်းသော ကိုယ်ပိုင်နေရာထိန်းသိမ်းထားပါ"],
    },
    baseHue: 24,
    spiritAnimal: { en: "Golden Retriever", my: "ခွေးမွေးမြူရေးမျိုးနွယ်" },
    poseDescriptor: "mid-welcome, arms open at a doorway strung with warm fairy lights",
    clothingDescriptor: "a cheerful patterned sweater with a coordinated scarf",
    environmentDescriptor: "a warmly lit dining room set for a gathering of friends",
  },
  ISTP: {
    id: "ISTP",
    nickname: { en: "The Mechanic", my: "စက်ပြင်ဆရာ" },
    summary: {
      en: "You're a calm, hands-on problem-solver who understands the world by taking it apart and figuring out exactly how it works.",
      my: "သင်သည် ကမ္ဘာကို ဖြိုခွဲကာ အတိအကျမည်သို့အလုပ်လုပ်သည်ကို ရှာဖွေခြင်းဖြင့် နားလည်သော တည်ငြိမ်ပြီး လက်တွေ့ပြဿနာဖြေရှင်းသူဖြစ်သည်။",
    },
    coreMotivation: {
      en: "You want to master how things actually work through direct, hands-on experience, and to stay free to act on that understanding.",
      my: "သင်သည် တိုက်ရိုက်လက်တွေ့အတွေ့အကြုံဖြင့် အရာများ အမှန်တကယ်မည်သို့အလုပ်လုပ်သည်ကို ကျွမ်းကျင်လိုပြီး ထိုနားလည်မှုအပေါ် အခြေခံလှုပ်ရှားရန် လွတ်လပ်နေလိုသည်။",
    },
    strengths: {
      en: ["Practical problem-solving", "Calm under pressure", "Independent and self-sufficient", "Sharp situational awareness", "Efficient troubleshooting", "Adaptable in a crisis"],
      my: ["လက်တွေ့ကျသော ပြဿနာဖြေရှင်းမှု", "ဖိအားအောက်တွင် တည်ငြိမ်ခြင်း", "လွတ်လပ်ပြီး မိမိကိုယ်ကိုအားကိုးနိုင်ခြင်း", "ထက်မြက်သော အခြေအနေသတိပညာ", "ထိရောက်သော ပြဿနာဖြေရှင်းမှု", "အရေးပေါ်အခြေအနေတွင် လိုက်လျောညီထွေဖြစ်နိုင်ခြင်း"],
    },
    weaknesses: {
      en: ["Struggles to express feelings", "Avoids long-term commitment", "Can seem detached", "Resists rigid structure", "Loses interest once mastered", "Reluctant to plan far ahead"],
      my: ["ခံစားချက်ဖော်ပြရန် ခက်ခဲ", "ရေရှည်ကတိကို ရှောင်ရှား", "ခွာဝေးနေသည်ဟု ထင်ရနိုင်", "တင်းကျပ်သောဖွဲ့စည်းပုံကို ဆန့်ကျင်", "ကျွမ်းကျင်သွားပါက စိတ်ဝင်စားမှု ကုန်ခန်း", "ဝေးလံစွာ ကြိုတင်စီစဉ်ရန် ဖင့်နွှဲ"],
    },
    leadershipStyle: {
      en: "You lead by quiet competence, stepping up in a crisis and stepping back once things stabilize.",
      my: "သင်သည် တိတ်ဆိတ်သောစွမ်းရည်ဖြင့် ဦးဆောင်ပြီး အရေးပေါ်အခြေအနေတွင် ရှေ့တိုးကာ တည်ငြိမ်သွားပါက နောက်ဆုတ်သည်။",
    },
    communicationStyle: {
      en: "You're terse and practical; you prefer showing over telling and rarely volunteer feelings unprompted.",
      my: "သင်သည် တိုတောင်းပြီး လက်တွေ့ကျသည်၊ ပြောရသည်ထက် ပြသရသည်ကို ပိုနှစ်သက်ပြီး တောင်းဆိုခြင်းမရှိဘဲ ခံစားချက်များကို ရှားရှားပါးပါးသာ ဖော်ပြသည်။",
    },
    decisionStyle: {
      en: "You trust direct observation over theory, deciding fast based on what's actually in front of you.",
      my: "သင်သည် သီအိုရီထက် တိုက်ရိုက်စောင့်ကြည့်လေ့လာမှုကို ယုံကြည်ပြီး မျက်မှောက်ရှိအရာအပေါ်မူတည်၍ လျင်မြန်စွာဆုံးဖြတ်သည်။",
    },
    workStyle: {
      en: "You're hands-on and self-directed, most effective when given a real problem and left alone to solve it.",
      my: "သင်သည် လက်တွေ့ကျပြီး ကိုယ်တိုင်ဦးဆောင်သည်၊ စစ်မှန်သောပြဿနာတစ်ခုပေးပြီး တစ်ဦးတည်းဖြေရှင်းခွင့်ပြုလျှင် အထိရောက်ဆုံးဖြစ်သည်။",
    },
    friendshipStyle: {
      en: "You're a low-key, undemanding friend who shows loyalty through action, especially in a real crisis.",
      my: "သင်သည် တောင်းဆိုမှုနည်းသော အေးဆေးသောမိတ်ဆွေဖြစ်ပြီး အထူးသဖြင့် စစ်မှန်သောအရေးပေါ်အခြေအနေတွင် လုပ်ဆောင်မှုဖြင့် သစ္စာရှိမှုကို ပြသသည်။",
    },
    relationshipStyle: {
      en: "You need independence and space within a relationship; you show love through quiet acts of competence and presence.",
      my: "သင်သည် ဆက်ဆံရေးအတွင်း လွတ်လပ်မှုနှင့် နေရာလွတ်ကို လိုအပ်သည်၊ တိတ်ဆိတ်သောစွမ်းရည်လုပ်ရပ်များနှင့် ရှိနေမှုဖြင့် ချစ်ခြင်းကို ဖော်ပြသည်။",
    },
    parentingStyle: {
      en: "You teach through hands-on doing, giving your kid real independence and trusting them to learn by trying.",
      my: "သင်သည် လက်တွေ့လုပ်ဆောင်ခြင်းဖြင့် သင်ကြားပြီး ကလေးအား စစ်မှန်သောလွတ်လပ်မှုပေးကာ စမ်းသပ်ခြင်းဖြင့် သင်ယူနိုင်သည်ဟု ယုံကြည်သည်။",
    },
    problemSolving: {
      en: "You dive straight into the mechanics, testing and adjusting in real time rather than theorizing first.",
      my: "သင်သည် သီအိုရီဦးစွာမလုပ်ဘဲ စက်ပိုင်းဆိုင်ရာအလုပ်ထဲ တိုက်ရိုက်ဝင်ရောက်ပြီး အချိန်နှင့်တပြေးညီ စမ်းသပ်ချိန်ညှိသည်။",
    },
    creativity: {
      en: "It's expressed through building and tinkering — you turn raw materials or systems into something that works better.",
      my: "၎င်းကို တည်ဆောက်ခြင်းနှင့် ပြင်ဆင်ခြင်းဖြင့် ဖော်ပြသည် — ကုန်ကြမ်းများ သို့မဟုတ် စနစ်များကို ပိုကောင်းစွာအလုပ်လုပ်သည့်အရာအဖြစ် ပြောင်းလဲသည်။",
    },
    conflictStyle: {
      en: "You avoid unnecessary conflict and disengage from drama, but act decisively if a real line is crossed.",
      my: "သင်သည် မလိုအပ်သောပဋိပက္ခကို ရှောင်ရှားပြီး အခင်းအကျင်းများမှ ခွာသွားသည်၊ သို့သော် စစ်မှန်သောလိုင်းတစ်ခုကျူးလွန်ခံရလျှင် ဆုံးဖြတ်ချက်ရှိစွာ လုပ်ဆောင်သည်။",
    },
    careerPaths: {
      en: ["Engineer", "Pilot", "Paramedic / first responder", "Mechanic / technician", "Software developer", "Field specialist"],
      my: ["အင်ဂျင်နီယာ", "လေယာဉ်မှူး", "အရေးပေါ်ကျန်းမာရေးဝန်ထမ်း", "စက်ပြင်ဆရာ / နည်းပညာရှင်", "ဆော့ဖ်ဝဲရေးသားသူ", "field ကျွမ်းကျင်သူ"],
    },
    careersToAvoid: {
      en: ["Highly bureaucratic desk roles", "Constant public speaking positions", "Roles demanding extensive emotional processing", "Rigid, meeting-heavy corporate environments"],
      my: ["ဗျူရိုကရေစီများသော ရုံးအလုပ်များ", "အမြဲအများသူငှာဟောပြောနေရသောရာထူးများ", "စိတ်ခံစားမှုကို များစွာကိုင်တွယ်ရသောရာထူးများ", "အစည်းအဝေးများသော တင်းကျပ်သည့် ကော်ပိုရိတ်ပတ်ဝန်းကျင်"],
    },
    stressResponse: {
      en: "You withdraw and shut down emotionally, sometimes acting out impulsively to relieve built-up tension.",
      my: "သင်သည် စိတ်ခံစားမှုအရ ဆုတ်ခွာပြီး ပိတ်လိုက်သည်၊ တစ်ခါတစ်ရံ စုပုံနေသောတင်းမာမှုကို ချေဖျက်ရန် ရုတ်တရက်လုပ်ဆောင်တတ်သည်။",
    },
    growthAdvice: {
      en: "Naming a feeling out loud isn't weakness — practice it before it turns into distance.",
      my: "ခံစားချက်ကို အသံထွက်ခေါ်ဆိုခြင်းသည် အားနည်းချက်မဟုတ်ပါ — အကွာအဝေးဖြစ်မလာမီ လေ့ကျင့်ပါ။",
    },
    suggestions: {
      en: [
        "Name one feeling out loud to someone today, plainly, before it turns into distance instead.",
        "Commit to one thing beyond the next few weeks — a plan, a person, a project — and let it stay uncomfortable without bailing.",
        "Ask for help on a problem you could solve alone, just to practice letting someone else in.",
      ],
      my: [
        "အကွာအဝေးဖြစ်မလာမီ ယနေ့ တစ်စုံတစ်ဦးအား ခံစားချက်တစ်ခုကို ရှင်းရှင်းလင်းလင်းပြောပါ။",
        "လာမည့်ရက်သတ္တပတ်များကျော်ပြီး တစ်ခုခု — အစီအစဉ်၊ လူတစ်ဦး၊ ပရောဂျက်တစ်ခု — ကို ကတိပေးပြီး မလွှဲမရှောင်သာသည့်တိုင် ဆက်ရှိနေပါ။",
        "တစ်ဦးတည်းဖြေရှင်းနိုင်သော ပြဿနာတစ်ခုတွင် အခြားသူဝင်ခွင့်ပြုရန် အကူအညီတောင်းကြည့်ပါ။",
      ],
    },
    motivation: {
      en: "You're driven by mastery, autonomy, and the satisfaction of solving a real, tangible problem.",
      my: "သင်သည် ကျွမ်းကျင်မှု၊ လွတ်လပ်မှုနှင့် စစ်မှန်သောလက်တွေ့ပြဿနာတစ်ခုဖြေရှင်းရသည့် ကျေနပ်မှုဖြင့် လှုံ့ဆော်ခံရသည်။",
    },
    learningStyle: {
      en: "You learn fastest by doing — hands-on trial and error over lectures or theory.",
      my: "သင်သည် ဟောပြောချက် သို့မဟုတ် သီအိုရီထက် လုပ်ဆောင်ခြင်း — လက်တွေ့စမ်းသပ်မှုဖြင့် အမြန်ဆုံးသင်ယူသည်။",
    },
    bestEnvironment: {
      en: "You do best in a flexible, low-supervision environment with real problems to solve and freedom to act.",
      my: "သင်သည် ဖြေရှင်းရန်စစ်မှန်သောပြဿနာများနှင့် လုပ်ဆောင်ရန်လွတ်လပ်မှုရှိသော ကြပ်မတ်မှုနည်းသည့် လိုက်လျောညီထွေရှိသောပတ်ဝန်းကျင်တွင် အကောင်းဆုံးလုပ်ဆောင်နိုင်သည်။",
    },
    idealTeamRole: {
      en: "You're the troubleshooter who fixes what's actually broken, fast.",
      my: "သင်သည် အမှန်တကယ်ပျက်စီးနေသောအရာကို လျင်မြန်စွာပြင်ပေးသော ပြဿနာဖြေရှင်းသူဖြစ်သည်",
    },
    famousExamples: {
      en: ["A field engineer who solves the impossible with what's on hand", "A stunt pilot known for split-second precision", "A quiet expert who fixes what everyone else gave up on"],
      my: ["လက်ရှိရှိသောအရာဖြင့် မဖြစ်နိုင်သည်ကို ဖြေရှင်းနိုင်သော field အင်ဂျင်နီယာ", "စက္ကန့်ပိုင်းတိကျမှုဖြင့်နာမည်ကြီးသော stunt လေယာဉ်မှူး", "သူများစွန့်ခဲ့သည်များကို ပြင်ပေးသော တိတ်ဆိတ်သည့်ကျွမ်းကျင်သူ"],
    },
    dailyHabits: {
      en: ["Spend time working with your hands on a real project", "Keep tools and gear meticulously maintained", "Carve out solitary time to decompress"],
      my: ["စစ်မှန်သောပရောဂျက်တစ်ခုတွင် လက်တွေ့လုပ်ဆောင်ချိန်ယူပါ", "ကိရိယာများကို စေ့စပ်သေချာစွာ ထိန်းသိမ်းထားပါ", "စိတ်ဖြေလျှော့ရန် တစ်ဦးတည်းအချိန်ယူပါ"],
    },
    baseHue: 12,
    spiritAnimal: { en: "Wolf", my: "ဝံပုလွေ" },
    poseDescriptor: "crouched beside an open engine panel, tool in hand, mid-repair",
    clothingDescriptor: "a worn utility jacket with rolled sleeves and practical gear",
    environmentDescriptor: "a sunlit garage workshop lined with tools and half-built machines",
  },
  ISFP: {
    id: "ISFP",
    nickname: { en: "The Artisan", my: "လက်မှုပညာရှင်" },
    summary: {
      en: "You're a gentle, sensory-driven creator who lives by quiet aesthetic instinct and a strong private sense of right and wrong.",
      my: "သင်သည် တိတ်ဆိတ်သောအလှအပအသိစိတ်နှင့် ခိုင်မာသောကိုယ်ပိုင်မှန်/မှားခံစားချက်ဖြင့် နေထိုင်သော နူးညံ့ပြီး ခံစားမှုအခြေခံသည့် ဖန်တီးသူဖြစ်သည်။",
    },
    coreMotivation: {
      en: "You want to live authentically in the present moment, expressing your inner world through beauty and quiet action.",
      my: "သင်သည် လက်ရှိအခိုက်အတန့်တွင် စစ်မှန်စွာနေထိုင်လိုပြီး သင့်အတွင်းစိတ်ကမ္ဘာကို လှပမှုနှင့် တိတ်ဆိတ်သောလုပ်ဆောင်မှုဖြင့် ဖော်ပြလိုသည်။",
    },
    strengths: {
      en: ["Genuine aesthetic sensitivity", "Quiet authenticity", "Adaptable and easygoing", "Deep personal values", "Attuned to sensory detail", "Gentle empathy"],
      my: ["စစ်မှန်သော အလှအပအာရုံခံနိုင်စွမ်း", "တိတ်ဆိတ်သော စစ်မှန်မှု", "လိုက်လျောညီထွေရှိပြီး အေးဆေးခြင်း", "နက်ရှိုင်းသော ကိုယ်ပိုင်တန်ဖိုးထားမှုများ", "ခံစားမှုအသေးစိတ်ကို သိမြင်ခြင်း", "နူးညံ့သော စာနာမှု"],
    },
    weaknesses: {
      en: ["Avoids conflict at personal cost", "Struggles with long-term planning", "Underestimates your own talent", "Sensitive to criticism", "Reluctant to lead", "Can withdraw when overwhelmed"],
      my: ["ကိုယ်ပိုင်ကုန်ကျစရိတ်ဖြင့် ပဋိပက္ခကို ရှောင်ရှား", "ရေရှည်စီစဉ်မှုတွင် ခက်ခဲ", "ကိုယ်ပိုင်အရည်အချင်းကို လျှော့တွက်", "ဝေဖန်ချက်ကို ထိခိုက်လွယ်", "ဦးဆောင်ရန် ဖင့်နွှဲ", "လွှမ်းမိုးခံရသည့်အခါ ဆုတ်ခွာ"],
    },
    leadershipStyle: {
      en: "You lead by quiet example and craftsmanship, more comfortable modeling your values than issuing directives.",
      my: "သင်သည် တိတ်ဆိတ်သောပုံသက်ရောက်နှင့် လက်မှုပညာဖြင့် ဦးဆောင်ပြီး ညွှန်ကြားချက်ထုတ်ခြင်းထက် ကိုယ်ပိုင်တန်ဖိုးထားမှုကို ပြသခြင်းက ပိုသက်တောင့်သက်သာရှိသည်။",
    },
    communicationStyle: {
      en: "You're soft-spoken and observant, often expressing more through action or art than words.",
      my: "သင်သည် နူးညံ့စွာပြောဆိုပြီး လေ့လာသတိပြုတတ်သည်၊ စကားလုံးများထက် လုပ်ဆောင်မှု သို့မဟုတ် အနုပညာဖြင့် ပိုဖော်ပြလေ့ရှိသည်။",
    },
    decisionStyle: {
      en: "You follow a strong internal sense of what feels right, resisting decisions that violate your values even under pressure.",
      my: "သင်သည် မှန်ကန်သည်ဟုခံစားရသော ခိုင်မာသောကိုယ်တွင်းသိစိတ်ကို လိုက်နာပြီး ဖိအားအောက်တွင်ပင် တန်ဖိုးထားမှုကို ချိုးဖောက်သောဆုံးဖြတ်ချက်များကို ဆန့်ကျင်သည်။",
    },
    workStyle: {
      en: "You prefer hands-on, sensory work with freedom to adapt, delivering quality over speed.",
      my: "သင်သည် လိုက်လျောညီထွေရှိရန်လွတ်လပ်မှုရှိသော လက်တွေ့ခံစားမှုအလုပ်ကို ပိုနှစ်သက်ပြီး အမြန်နှုန်းထက် အရည်အသွေးကို ပေးသည်။",
    },
    friendshipStyle: {
      en: "You're a gentle, accepting friend who shows up without judgment and enjoys quiet shared activities.",
      my: "သင်သည် စီရင်ဆုံးဖြတ်ခြင်းမရှိဘဲ ရောက်ရှိလာပြီး တိတ်ဆိတ်သောဘုံလုပ်ဆောင်မှုများကို နှစ်သက်သော နူးညံ့၍ လက်ခံတတ်သောမိတ်ဆွေဖြစ်သည်။",
    },
    relationshipStyle: {
      en: "You're tender and present-focused, expressing love through small, genuine gestures rather than declarations.",
      my: "သင်သည် နူးညံ့ပြီး လက်ရှိကို အာရုံစိုက်သည်၊ ကြေညာချက်များထက် သေးငယ်၍ စစ်မှန်သောအမူအရာများဖြင့် ချစ်ခြင်းကို ဖော်ပြသည်။",
    },
    parentingStyle: {
      en: "You're gentle and accepting, encouraging your kid's individuality without heavy-handed structure.",
      my: "သင်သည် နူးညံ့ပြီး လက်ခံတတ်သည်၊ တင်းကျပ်သောဖွဲ့စည်းပုံမရှိဘဲ ကလေး၏ကိုယ်ပိုင်လက္ခဏာကို အားပေးသည်။",
    },
    problemSolving: {
      en: "You feel out the right approach through direct, sensory engagement rather than abstract planning.",
      my: "သင်သည် စိတ္တဇစီစဉ်မှုထက် တိုက်ရိုက်ခံစားမှုပါဝင်ခြင်းဖြင့် မှန်ကန်သောနည်းလမ်းကို ခံစားရှာဖွေသည်။",
    },
    creativity: {
      en: "It's central to who you are — expressed through visual art, music, movement, or craft.",
      my: "၎င်းသည် သင်ဘယ်သူဖြစ်သည်ဆိုသည့် အဓိကအချက်ဖြစ်သည် — အနုပညာ၊ ဂီတ၊ လှုပ်ရှားမှု သို့မဟုတ် လက်မှုပညာဖြင့် ဖော်ပြသည်။",
    },
    conflictStyle: {
      en: "You avoid confrontation strongly, preferring to quietly withdraw rather than argue a point.",
      my: "သင်သည် ရင်ဆိုင်မှုကို ပြင်းထန်စွာရှောင်ရှားပြီး ငြင်းခုံမည့်အစား တိတ်ဆိတ်စွာ ဆုတ်ခွာလိုသည်။",
    },
    careerPaths: {
      en: ["Visual artist / designer", "Musician", "Photographer", "Veterinarian", "Chef", "Occupational therapist"],
      my: ["ပန်းချီဆရာ / ဒီဇိုင်နာ", "ဂီတပညာရှင်", "ဓာတ်ပုံဆရာ", "တိရစ္ဆာန်ဆရာဝန်", "စားဖိုမှူး", "အလုပ်အကိုင်ကုသရေးပညာရှင်"],
    },
    careersToAvoid: {
      en: ["High-conflict management roles", "Rigid, hierarchical corporate ladders", "Aggressive competitive sales", "Roles requiring constant public confrontation"],
      my: ["ပဋိပက္ခများသော စီမံခန့်ခွဲရေးရာထူးများ", "တင်းကျပ်သော အဆင့်ဆင့်ကော်ပိုရိတ်လမ်းကြောင်း", "ပြင်းထန်သော ယှဉ်ပြိုင်အရောင်းလုပ်ငန်း", "အများသူငှာရင်ဆိုင်ရသောရာထူးများ"],
    },
    stressResponse: {
      en: "You withdraw into private space, absorbing stress quietly and sometimes neglecting practical needs.",
      my: "သင်သည် ကိုယ်ပိုင်နေရာသို့ ဆုတ်ခွာပြီး စိတ်ဖိစီးမှုကို တိတ်ဆိတ်စွာစုပ်ယူကာ တစ်ခါတစ်ရံ လက်တွေ့လိုအပ်ချက်များကို လျစ်လျူရှုတတ်သည်။",
    },
    growthAdvice: {
      en: "Your work deserves an audience — practice sharing it before it feels perfectly ready.",
      my: "သင့်လက်ရာသည် ပရိသတ်ထိုက်တန်သည် — အပြီးအစီးမဖြစ်မီ မျှဝေရန် လေ့ကျင့်ပါ။",
    },
    suggestions: {
      en: [
        "Share one piece of work today before it feels ready — let someone else see it before you've perfected it into hiding.",
        "Say the disagreement out loud instead of quietly withdrawing from it — the relationship can hold more than you think.",
        "Write down one concrete goal for next month, even loosely — a little structure protects the freedom you actually want.",
      ],
      my: [
        "အဆင်သင့်မဖြစ်မီ ယနေ့ လက်ရာတစ်ခုကို မျှဝေပါ — ဖျောက်ထားမီ သူများမြင်ခွင့်ပြုပါ။",
        "တိတ်ဆိတ်စွာဆုတ်ခွာမည့်အစား သဘောကွဲလွဲမှုကို အသံထွက်ပြောပါ — ဆက်ဆံရေးသည် ထင်သည်ထက် ပိုခံနိုင်ရည်ရှိသည်။",
        "လာမည့်လအတွက် တိကျသောပန်းတိုင်တစ်ခုကို ရေးထားပါ — အနည်းငယ်စနစ်ကျမှုသည် သင်တကယ်လိုချင်သော လွတ်လပ်မှုကို ကာကွယ်ပေးသည်။",
      ],
    },
    motivation: {
      en: "You're driven by authenticity, beauty, and staying true to your inner values.",
      my: "သင်သည် စစ်မှန်မှု၊ လှပမှုနှင့် ကိုယ်ပိုင်အတွင်းတန်ဖိုးထားမှုများနှင့်အညီ နေထိုင်ခြင်းဖြင့် လှုံ့ဆော်ခံရသည်။",
    },
    learningStyle: {
      en: "You learn best through direct sensory and hands-on experience rather than abstract theory.",
      my: "သင်သည် စိတ္တဇသီအိုရီထက် တိုက်ရိုက်ခံစားမှုနှင့် လက်တွေ့အတွေ့အကြုံဖြင့် အကောင်းဆုံးသင်ယူသည်။",
    },
    bestEnvironment: {
      en: "You do best in a calm, flexible environment that values individuality and creative freedom over rigid structure.",
      my: "သင်သည် တင်းကျပ်သောဖွဲ့စည်းပုံထက် ကိုယ်ပိုင်လက္ခဏာနှင့် ဖန်တီးမှုလွတ်လပ်မှုကို တန်ဖိုးထားသော တည်ငြိမ်၍ လိုက်လျောညီထွေရှိသောပတ်ဝန်းကျင်တွင် အကောင်းဆုံးလုပ်ဆောင်နိုင်သည်။",
    },
    idealTeamRole: {
      en: "You're the craftsperson who quietly elevates the quality and authenticity of the team's work.",
      my: "သင်သည် အဖွဲ့၏အလုပ်၏ အရည်အသွေးနှင့် စစ်မှန်မှုကို တိတ်ဆိတ်စွာ မြှင့်တင်ပေးသော လက်မှုပညာရှင်ဖြစ်သည်",
    },
    famousExamples: {
      en: ["A reclusive artist whose work resonates long after they're gone", "A gentle wildlife photographer capturing quiet, honest moments", "A chef who turns simple ingredients into something soulful"],
      my: ["ကွယ်လွန်ပြီးနောက် ကြာရှည်ခံနေဦးမည့်လက်ရာရှိသော လူဝေးသောအနုပညာရှင်", "တိတ်ဆိတ်၍ ရိုးသားသောအခိုက်အတန့်များကို ရိုက်ကူးတတ်သော နူးညံ့သောသားရဲတိရစ္ဆာန်ဓာတ်ပုံဆရာ", "ရိုးရှင်းသောပါဝင်ပစ္စည်းများကို စိတ်ဓာတ်ရှိသောအရာအဖြစ် ပြောင်းလဲနိုင်သော စားဖိုမှူး"],
    },
    dailyHabits: {
      en: ["Spend time daily on a hands-on creative practice", "Notice and savor small sensory details", "Protect quiet, unstructured personal time"],
      my: ["နေ့စဉ် လက်တွေ့ဖန်တီးမှုအလေ့အကျင့်အတွက် အချိန်ယူပါ", "သေးငယ်သောခံစားမှုအသေးစိတ်များကို သတိပြုမြည်းစမ်းပါ", "တိတ်ဆိတ်၍ ဖွဲ့စည်းပုံမရှိသောကိုယ်ပိုင်အချိန်ကို ကာကွယ်ထားပါ"],
    },
    baseHue: 328,
    spiritAnimal: { en: "Butterfly", my: "လိပ်ပြာ" },
    poseDescriptor: "kneeling beside a canvas, brush mid-stroke, sunlight catching the paint",
    clothingDescriptor: "a paint-flecked linen apron over soft, earth-toned layers",
    environmentDescriptor: "a plant-filled studio with an open window and drifting curtains",
  },
  ESTP: {
    id: "ESTP",
    nickname: { en: "The Daredevil", my: "ရဲရင့်သူ" },
    summary: {
      en: "You're a bold, energetic doer who reads a live situation instantly and acts before the moment passes.",
      my: "သင်သည် လက်ရှိအခြေအနေကို ချက်ချင်းဖတ်တတ်ပြီး အခိုက်အတန့်မကုန်ဆုံးမီ လုပ်ဆောင်တတ်သော ရဲရင့်၍ စွမ်းအင်ပြည့်ဝသောလုပ်ဆောင်သူဖြစ်သည်။",
    },
    coreMotivation: {
      en: "You want to fully engage with life as it happens, seeking real experience over theory and momentum over hesitation.",
      my: "သင်သည် ဘဝဖြစ်ပျက်နေသည့်အတိုင်း အပြည့်အဝပါဝင်လိုပြီး သီအိုရီထက် စစ်မှန်သောအတွေ့အကြုံနှင့် တွေးတောနှေးကွေးမှုထက် အရှိန်ကို ရှာဖွေသည်။",
    },
    strengths: {
      en: ["Quick situational thinking", "Bold under pressure", "Persuasive and charming", "Highly adaptable", "Action-oriented", "Resilient after setbacks"],
      my: ["လျင်မြန်သော အခြေအနေတွေးခေါ်မှု", "ဖိအားအောက်တွင် ရဲရင့်ခြင်း", "ဆွဲဆောင်နိုင်ပြီး နှစ်သက်ဖွယ်ကောင်း", "အလွန်လိုက်လျောညီထွေရှိ", "လုပ်ဆောင်မှုဦးတည်", "ဆုတ်ယုတ်မှုပြီးနောက် ခံနိုင်ရည်ရှိ"],
    },
    weaknesses: {
      en: ["Acts before fully thinking ahead", "Grows restless with routine", "Underestimates long-term risk", "Avoids deep emotional processing", "Can be blunt", "Struggles with sustained follow-through"],
      my: ["အပြည့်အဝမတွေးမီ လုပ်ဆောင်", "ပုံမှန်လုပ်ငန်းစဉ်ဖြင့် မငြိမ်သက်", "ရေရှည်အန္တရာယ်ကို လျှော့တွက်", "နက်ရှိုင်းသောစိတ်ခံစားမှုကိုင်တွယ်မှုကို ရှောင်", "ရိုက်ချက်ကြမ်းနိုင်", "ဆက်လက်ဆောင်ရွက်မှုတွင် ခက်ခဲ"],
    },
    leadershipStyle: {
      en: "You lead by bold, visible action, jumping into the fray and rallying others through momentum rather than talk.",
      my: "သင်သည် ရဲရင့်၍ မြင်သာသောလုပ်ဆောင်မှုဖြင့် ဦးဆောင်ပြီး ရင်ဆိုင်မှုထဲသို့ ခုန်ဝင်ကာ စကားထက် အရှိန်ဖြင့် သူတစ်ပါးများကို စုစည်းသည်။",
    },
    communicationStyle: {
      en: "You're direct, energetic, and persuasive; you think out loud in real time and read a room's energy instantly.",
      my: "သင်သည် တိုက်ရိုက်၊ စွမ်းအင်ပြည့်ဝပြီး ဆွဲဆောင်နိုင်သည်၊ အချိန်နှင့်တပြေးညီ အသံထွက်တွေးပြီး အခန်း၏စွမ်းအင်ကို ချက်ချင်းဖတ်တတ်သည်။",
    },
    decisionStyle: {
      en: "You trust instinct and immediate facts, deciding fast and adjusting on the fly rather than planning extensively.",
      my: "သင်သည် အသည်းအသန်ခံစားချက်နှင့် ချက်ချင်းအချက်အလက်များကို ယုံကြည်ပြီး ကျယ်ပြန့်စွာစီစဉ်မည့်အစား လျင်မြန်စွာဆုံးဖြတ်ကာ ချိန်ညှိသည်။",
    },
    workStyle: {
      en: "You thrive under real-time pressure, most effective solving live problems rather than long-range planning.",
      my: "သင်သည် အချိန်နှင့်တပြေးညီဖိအားအောက်တွင် တိုးတက်ပြီး ရေရှည်စီစဉ်မှုထက် လက်ရှိပြဿနာများဖြေရှင်းရာတွင် အထိရောက်ဆုံးဖြစ်သည်။",
    },
    friendshipStyle: {
      en: "You're the friend who turns an ordinary day into an adventure and rallies the group to actually go do it.",
      my: "သင်သည် ပုံမှန်နေ့ကို စွန့်စားခန်းအဖြစ်ပြောင်းလဲပေးပြီး အုပ်စုကို အမှန်တကယ်သွားလုပ်ရန် စုစည်းပေးသော မိတ်ဆွေဖြစ်သည်။",
    },
    relationshipStyle: {
      en: "You're passionate and present, showing love through shared experience and spontaneous energy.",
      my: "သင်သည် စိတ်အားထက်သန်ပြီး ရှိနေသည်၊ ဘုံအတွေ့အကြုံနှင့် ရုတ်တရက်စွမ်းအင်ဖြင့် ချစ်ခြင်းကို ဖော်ပြသည်။",
    },
    parentingStyle: {
      en: "You're hands-on and adventurous, teaching resilience by letting your kid experience the world directly.",
      my: "သင်သည် လက်တွေ့ကျပြီး စွန့်စားလိုသည်၊ ကလေးအား ကမ္ဘာကို တိုက်ရိုက်ကြုံတွေ့ခွင့်ပေးခြင်းဖြင့် ခံနိုင်ရည်ကို သင်ကြားသည်။",
    },
    problemSolving: {
      en: "You jump in and adapt in real time, trusting quick iteration over up-front analysis.",
      my: "သင်သည် ဝင်ရောက်လုပ်ဆောင်ပြီး အချိန်နှင့်တပြေးညီ ချိန်ညှိသည်၊ ကြိုတင်ခွဲခြမ်းစိတ်ဖြာမှုထက် လျင်မြန်သောထပ်ခါထပ်ခါလုပ်ဆောင်မှုကို ယုံကြည်သည်။",
    },
    creativity: {
      en: "It's expressed through improvisation — you think on your feet in ways that surprise everyone, including yourself.",
      my: "၎င်းကို ရုတ်တရက်လုပ်ဆောင်ခြင်းဖြင့် ဖော်ပြသည် — ကိုယ်တိုင်အပါအဝင် လူတိုင်းအံ့ဩစေသည့်နည်းလမ်းများဖြင့် ချက်ချင်းတွေးတတ်သည်။",
    },
    conflictStyle: {
      en: "You confront issues immediately and directly, preferring a blunt resolution over lingering tension.",
      my: "သင်သည် ပြဿနာများကို ချက်ချင်းနှင့် တိုက်ရိုက်ရင်ဆိုင်ပြီး ကျန်ရှိနေသောတင်းမာမှုထက် ရိုက်ချက်ကြမ်းသောဖြေရှင်းချက်ကို ပိုနှစ်သက်သည်။",
    },
    careerPaths: {
      en: ["Entrepreneur", "Sales executive", "Paramedic", "Professional athlete", "Stockbroker", "Field operations manager"],
      my: ["စီးပွားရေးလုပ်ငန်းရှင်", "အရောင်းအမှုဆောင်", "အရေးပေါ်ကျန်းမာရေးဝန်ထမ်း", "ပရော်ဖက်ရှင်နယ်အားကစားသမား", "စတော့ရှယ်ယာအရောင်းသမား", "field လည်ပတ်ရေးမန်နေဂျာ"],
    },
    careersToAvoid: {
      en: ["Highly repetitive desk work", "Long-term abstract research", "Rigid bureaucratic administration", "Roles with no real-time feedback"],
      my: ["ထပ်တလဲလဲရုံးအလုပ်", "ရေရှည်စိတ္တဇသုတေသန", "တင်းကျပ်သော ဗျူရိုကရေစီအုပ်ချုပ်မှု", "အချိန်နှင့်တပြေးညီတုံ့ပြန်ချက်မရသောရာထူးများ"],
    },
    stressResponse: {
      en: "You seek distraction through impulsive action, sometimes taking on unnecessary risk to avoid sitting with the problem.",
      my: "သင်သည် ရုတ်တရက်လုပ်ဆောင်မှုဖြင့် အာရုံပြောင်းလိုပြီး ပြဿနာနှင့်အတူမနေလိုသောကြောင့် တစ်ခါတစ်ရံ မလိုအပ်သောအန္တရာယ်ကို ယူတတ်သည်။",
    },
    growthAdvice: {
      en: "Pause before the leap — a beat of planning multiplies the payoff of your instinct.",
      my: "မခုန်ချမီ ခဏရပ်ပါ — အနည်းငယ်စီစဉ်မှုက သင့်အသည်းအသန်ခံစားချက်၏ အကျိုးအမြတ်ကို တိုးပွားစေသည်။",
    },
    suggestions: {
      en: [
        "Sleep on your next big decision for one night before you act on it — your instinct will still be there in the morning.",
        "Sit with an uncomfortable feeling for ten minutes today instead of moving past it with action.",
        "Finish the task you already started before chasing the next adrenaline hit.",
      ],
      my: [
        "နောက်ထပ်ကြီးမားသောဆုံးဖြတ်ချက်ကို လုပ်ဆောင်မီ တစ်ညနေကြည့်ပါ — သင့်အသည်းအသန်ခံစားချက်သည် မနက်ဖြန်တွင်လည်း ရှိနေမည်။",
        "လုပ်ဆောင်မှုဖြင့် ကျော်သွားမည့်အစား ယနေ့ မသက်မသာဖြစ်ဖွယ်ခံစားချက်တစ်ခုနှင့်အတူ ဆယ်မိနစ်နေကြည့်ပါ။",
        "နောက်ထပ် adrenaline ရှာမီ စတင်ခဲ့သောအလုပ်ကို ပြီးအောင်လုပ်ပါ။",
      ],
    },
    motivation: {
      en: "You're driven by excitement, real-world impact, and the rush of decisive action.",
      my: "သင်သည် စိတ်လှုပ်ရှားမှု၊ လက်တွေ့ကမ္ဘာသက်ရောက်မှုနှင့် ဆုံးဖြတ်ချက်ရှိသောလုပ်ဆောင်မှု၏ ရင်ခုန်မှုဖြင့် လှုံ့ဆော်ခံရသည်။",
    },
    learningStyle: {
      en: "You learn fastest through direct, hands-on experience and real stakes, not lectures.",
      my: "သင်သည် ဟောပြောချက်များထက် တိုက်ရိုက်လက်တွေ့အတွေ့အကြုံနှင့် စစ်မှန်သောအန္တရာယ်ဖြင့် အမြန်ဆုံးသင်ယူသည်။",
    },
    bestEnvironment: {
      en: "You do best in a dynamic, fast-paced environment with real-time feedback and freedom to act.",
      my: "သင်သည် အချိန်နှင့်တပြေးညီတုံ့ပြန်ချက်နှင့် လုပ်ဆောင်ရန်လွတ်လပ်မှုရှိသော အားတက်ကြွ၍ လျင်မြန်သောပတ်ဝန်းကျင်တွင် အကောင်းဆုံးလုပ်ဆောင်နိုင်သည်။",
    },
    idealTeamRole: {
      en: "You're the doer who turns a stalled plan into immediate, visible action.",
      my: "သင်သည် ရပ်တန့်နေသောအစီအစဉ်ကို ချက်ချင်း၊ မြင်သာသောလုပ်ဆောင်မှုအဖြစ် ပြောင်းလဲပေးသော လုပ်ဆောင်သူဖြစ်သည်",
    },
    famousExamples: {
      en: ["A fearless stunt performer who thrives on live risk", "A fast-talking dealmaker who closes on instinct", "A first responder who stays calm at the center of chaos"],
      my: ["စစ်မှန်သောအန္တရာယ်ဖြင့် တိုးတက်သော ကြောက်ရွံ့မှုကင်းသည့် stunt ဖျော်ဖြေသူ", "အသည်းအသန်ခံစားချက်ဖြင့် ပိတ်နိုင်သော လျင်မြန်စွာစကားပြောသည့် စီးပွားရေးသဘောတူညီမှုပြုလုပ်သူ", "ရှုပ်ထွေးမှုဗဟိုတွင် တည်ငြိမ်နေသော အရေးပေါ်တုံ့ပြန်သူ"],
    },
    dailyHabits: {
      en: ["Seek out physical activity or movement daily", "Take on at least one spontaneous challenge", "Debrief quickly after action rather than dwelling"],
      my: ["နေ့စဉ် ကိုယ်ကာယလှုပ်ရှားမှုရှာဖွေပါ", "အနည်းဆုံး ရုတ်တရက်စိန်ခေါ်မှုတစ်ခုကို လက်ခံပါ", "စဉ်းစားနေမည့်အစား လုပ်ဆောင်ပြီးနောက် လျင်မြန်စွာ ပြန်လည်သုံးသပ်ပါ"],
    },
    baseHue: 2,
    spiritAnimal: { en: "Falcon", my: "လင်းယုန်" },
    poseDescriptor: "mid-leap off a ledge, grinning, one arm outstretched toward the next handhold",
    clothingDescriptor: "a weathered leather jacket over a fitted athletic base layer",
    environmentDescriptor: "a sun-blasted urban rooftop with the city sprawling below",
  },
  ESFP: {
    id: "ESFP",
    nickname: { en: "The Performer", my: "ဖျော်ဖြေသူ" },
    summary: {
      en: "You're a vivacious, warm-hearted entertainer who turns the present moment into something worth remembering.",
      my: "သင်သည် လက်ရှိအခိုက်အတန့်ကို မှတ်သားထိုက်သည့်အရာအဖြစ်ပြောင်းလဲပေးသော အသက်ရှင်တက်ကြွပြီး နွေးထွေးသောစိတ်ရှိသည့် ဖျော်ဖြေသူဖြစ်သည်။",
    },
    coreMotivation: {
      en: "You want to fully experience and share joy with the people around you, living vividly in the present.",
      my: "သင်သည် ပတ်ဝန်းကျင်ရှိလူများနှင့် ပျော်ရွှင်မှုကို အပြည့်အဝ ခံစားပြီး မျှဝေလိုသည်၊ လက်ရှိတွင် တောက်ပစွာနေထိုင်သည်။",
    },
    strengths: {
      en: ["Infectious warmth", "Quick social adaptability", "Genuine present-moment focus", "Natural performer", "Resilient optimism", "Practical people sense"],
      my: ["ကူးစက်တတ်သော နွေးထွေးမှု", "လျင်မြန်သော လူမှုရေးလိုက်လျောညီထွေဖြစ်နိုင်စွမ်း", "စစ်မှန်သော လက်ရှိအာရုံစူးစိုက်မှု", "သဘာဝဆန်သော ဖျော်ဖြေသူ", "ခံနိုင်ရည်ရှိသော အကောင်းမြင်စိတ်", "လက်တွေ့ကျသော လူသိပညာ"],
    },
    weaknesses: {
      en: ["Avoids long-term planning", "Struggles with sustained focus on tedious tasks", "Sensitive to criticism", "Impulsive with decisions", "Avoids uncomfortable truths", "Overcommits socially"],
      my: ["ရေရှည်စီစဉ်မှုကို ရှောင်", "ငြီးငွေ့ဖွယ်အလုပ်များတွင် ဆက်လက်အာရုံစိုက်ရန် ခက်ခဲ", "ဝေဖန်ချက်ကို ထိခိုက်လွယ်", "ဆုံးဖြတ်ချက်များတွင် ရုတ်တရက်ဆုံးဖြတ်", "မသက်မသာဖြစ်ဖွယ်အမှန်တရားများကို ရှောင်", "လူမှုရေးအရ အလွန်အကျွံကတိပေး"],
    },
    leadershipStyle: {
      en: "You lead by visible enthusiasm and inclusion, energizing a group through genuine warmth and presence.",
      my: "သင်သည် မြင်သာသောစိတ်အားထက်သန်မှုနှင့် ပါဝင်မှုဖြင့် ဦးဆောင်ပြီး စစ်မှန်သောနွေးထွေးမှုနှင့် ရှိနေမှုဖြင့် အုပ်စုကို စွမ်းအားတက်ကြွစေသည်။",
    },
    communicationStyle: {
      en: "You're vivid, expressive, and socially attuned; you read emotional undercurrents fast and respond with warmth.",
      my: "သင်သည် တောက်ပ၊ ဖော်ပြနိုင်စွမ်းရှိပြီး လူမှုရေးအရ သတိရှိသည်၊ စိတ်ခံစားမှုလှိုင်းများကို လျင်မြန်စွာဖတ်ပြီး နွေးထွေးစွာတုံ့ပြန်သည်။",
    },
    decisionStyle: {
      en: "You follow what feels alive and right in the moment, trusting practical instinct over abstract planning.",
      my: "သင်သည် အချိန်အခိုက်အတန့်တွင် အသက်ရှင်ပြီးမှန်ကန်သည်ဟုခံစားရသည့်အရာကို လိုက်နာပြီး စိတ္တဇစီစဉ်မှုထက် လက်တွေ့အသည်းအသန်ခံစားချက်ကို ယုံကြည်သည်။",
    },
    workStyle: {
      en: "You're energized by people and variety, most effective in dynamic, socially engaging environments.",
      my: "သင်သည် လူများနှင့် အမျိုးမျိုးရှိမှုဖြင့် စွမ်းအားရရှိပြီး အားတက်ကြွသော လူမှုရေးပါဝင်မှုရှိသည့်ပတ်ဝန်းကျင်တွင် အထိရောက်ဆုံးဖြစ်သည်။",
    },
    friendshipStyle: {
      en: "You're the friend who makes every gathering more fun and genuinely delights in others' happiness.",
      my: "သင်သည် စည်းဝေးပွဲတိုင်းကို ပိုပျော်ရွှင်စေပြီး သူတစ်ပါးတို့၏ပျော်ရွှင်မှုကို စစ်မှန်စွာ ပျော်ရွှင်တတ်သော မိတ်ဆွေဖြစ်သည်။",
    },
    relationshipStyle: {
      en: "You're warm and expressive, showing love through shared experiences, affection, and full presence.",
      my: "သင်သည် နွေးထွေးပြီး ဖော်ပြနိုင်စွမ်းရှိသည်၊ ဘုံအတွေ့အကြုံများ၊ ချစ်ခင်မှုနှင့် အပြည့်အဝရှိနေခြင်းဖြင့် ချစ်ခြင်းကို ဖော်ပြသည်။",
    },
    parentingStyle: {
      en: "You're playful and affectionate, teaching through shared joy and hands-on, present-moment engagement.",
      my: "သင်သည် ကစားချင်စိတ်ရှိပြီး ချစ်ခင်တတ်သည်၊ ဘုံပျော်ရွှင်မှုနှင့် လက်တွေ့လက်ရှိပါဝင်မှုဖြင့် သင်ကြားသည်။",
    },
    problemSolving: {
      en: "You solve practically and socially, rallying people and improvising a solution in real time.",
      my: "သင်သည် လက်တွေ့ကျပြီး လူမှုရေးအရ ဖြေရှင်းသည်၊ လူများကို စုစည်းပြီး အချိန်နှင့်တပြေးညီ ဖြေရှင်းချက်ရုတ်တရက်ဖန်တီးသည်။",
    },
    creativity: {
      en: "It's expressed through performance and presentation — you turn an idea into something vivid and shareable.",
      my: "၎င်းကို ဖျော်ဖြေမှုနှင့် တင်ပြမှုဖြင့် ဖော်ပြသည် — အတွေးတစ်ခုကို တောက်ပ၍ မျှဝေနိုင်သောအရာအဖြစ် ပြောင်းလဲသည်။",
    },
    conflictStyle: {
      en: "You prefer quick, warm resolution and can be hurt by criticism, but you rarely hold a grudge for long.",
      my: "သင်သည် လျင်မြန်၊ နွေးထွေးသောဖြေရှင်းချက်ကို ပိုနှစ်သက်ပြီး ဝေဖန်ချက်ဖြင့် ထိခိုက်နိုင်သော်လည်း ကြာရှည်စိတ်ဆိုးနေခြင်း ရှားရှားပါးပါးသာဖြစ်သည်။",
    },
    careerPaths: {
      en: ["Performer / entertainer", "Event planner", "Sales representative", "Tour guide", "Fitness instructor", "Hospitality manager"],
      my: ["သရုပ်ဆောင် / ဖျော်ဖြေသူ", "ပွဲစီစဉ်သူ", "အရောင်းကိုယ်စားလှယ်", "ခရီးလမ်းညွှန်", "ကိုယ်လက်ကြံ့ခိုင်ရေးနည်းပြ", "ဧည့်ဝတ်ကျေပွန်ရေးမန်နေဂျာ"],
    },
    careersToAvoid: {
      en: ["Highly isolated solo research", "Rigid back-office data work", "Roles requiring long-term abstract planning with no people contact", "Highly regimented, low-variety jobs"],
      my: ["အလွန်သီးခြားတစ်ဦးတည်းသုတေသန", "တင်းကျပ်သော ရုံးဒေတာအလုပ်", "လူဆက်ဆံရေးမပါဘဲ ရေရှည်စိတ္တဇစီစဉ်မှုလိုအပ်သောရာထူးများ", "အလွန်စည်းကမ်းတင်းကျပ်ပြီး အမျိုးအစားနည်းသောအလုပ်များ"],
    },
    stressResponse: {
      en: "You seek distraction and social reassurance, avoiding the underlying issue until it can't be ignored.",
      my: "သင်သည် အာရုံပြောင်းမှုနှင့် လူမှုရေးအားပေးမှုကို ရှာဖွေပြီး လျစ်လျူမရှုနိုင်တော့သည်အထိ အခြေခံပြဿနာကို ရှောင်ရှားသည်။",
    },
    growthAdvice: {
      en: "Build in quiet time to plan ahead — a little structure protects the spontaneity you value most.",
      my: "ကြိုတင်စီစဉ်ရန် တိတ်ဆိတ်သောအချိန်ကို ထည့်သွင်းပါ — အနည်းငယ်စနစ်ကျမှုသည် သင်အလေးထားဆုံး ရုတ်တရက်ဖြစ်ရပ်များကို ကာကွယ်ပေးသည်။",
    },
    suggestions: {
      en: [
        "Block 20 minutes this week to plan the next month, even loosely — a little structure protects the spontaneity you enjoy.",
        "Sit with one piece of hard feedback for a full day before responding to it.",
        "Say no to one social commitment this week to protect the energy you need for the ones that matter most.",
      ],
      my: [
        "ဒီအပတ်တွင် နောက်လအတွက် စီစဉ်ရန် ၂၀ မိနစ် ချန်ထားပါ။",
        "ခက်ခဲသောတုံ့ပြန်ချက်တစ်ခုကို တုံ့ပြန်မီ တစ်ရက်လုံးနေကြည့်ပါ။",
        "အရေးကြီးဆုံးအရာများအတွက် စွမ်းအင်ကို ကာကွယ်ရန် ဒီအပတ် လူမှုရေးကတိတစ်ခုကို ငြင်းပယ်ပါ။",
      ],
    },
    motivation: {
      en: "You're driven by joy, connection, and the pleasure of a vividly lived present moment.",
      my: "သင်သည် ပျော်ရွှင်မှု၊ ဆက်သွယ်မှုနှင့် တောက်ပစွာနေထိုင်သောလက်ရှိအခိုက်အတန့်၏ ပျော်ရွှင်မှုဖြင့် လှုံ့ဆော်ခံရသည်။",
    },
    learningStyle: {
      en: "You learn best through hands-on, social, and experiential settings rather than solitary study.",
      my: "သင်သည် တစ်ဦးတည်းလေ့လာမှုထက် လက်တွေ့၊ လူမှုရေးနှင့် အတွေ့အကြုံရှိသောနေရာများဖြင့် အကောင်းဆုံးသင်ယူသည်။",
    },
    bestEnvironment: {
      en: "You do best in a lively, people-centered environment with variety, movement, and genuine appreciation.",
      my: "သင်သည် အမျိုးမျိုးရှိမှု၊ လှုပ်ရှားမှုနှင့် စစ်မှန်သောတန်ဖိုးထားမှုရှိသော အသက်ရှင်တက်ကြွ၍ လူဗဟိုပြုပတ်ဝန်းကျင်တွင် အကောင်းဆုံးလုပ်ဆောင်နိုင်သည်။",
    },
    idealTeamRole: {
      en: "You're the morale-lifter who keeps energy and engagement high through the team's daily grind.",
      my: "သင်သည် အဖွဲ့၏နေ့စဉ်အလုပ်တွင် စွမ်းအင်နှင့်ပါဝင်မှုကို မြင့်မားစွာထားသော စိတ်အားထက်သန်မှုမြှင့်တင်သူဖြစ်သည်",
    },
    famousExamples: {
      en: ["A beloved entertainer who lights up every room they enter", "A charismatic tour guide who makes every stop memorable", "A hospitality host who anticipates joy before it's asked for"],
      my: ["ဝင်ရောက်ရာအခန်းတိုင်းကို တောက်ပစေသော ချစ်ခင်ရသောဖျော်ဖြေသူ", "မှတ်တိုင်တိုင်းကို အမှတ်ရဖွယ်ဖြစ်စေသော ဆွဲဆောင်နိုင်သောခရီးလမ်းညွှန်", "မတောင်းဆိုမီ ပျော်ရွှင်မှုကို ကြိုတင်မျှော်လင့်တတ်သော ဧည့်ဝတ်ကျေပွန်ရေးဧည့်ခံသူ"],
    },
    dailyHabits: {
      en: ["Seek out social connection every day", "Notice and savor small present-moment pleasures", "Stay physically active and engaged"],
      my: ["နေ့တိုင်း လူမှုရေးဆက်သွယ်မှုရှာဖွေပါ", "သေးငယ်သောလက်ရှိပျော်ရွှင်မှုများကို သတိပြုမြည်းစမ်းပါ", "ကိုယ်ကာယလှုပ်ရှားနေပါ"],
    },
    baseHue: 46,
    spiritAnimal: { en: "Peacock", my: "ဒေါင်း" },
    poseDescriptor: "mid-spin under stage lights, arms out, caught in a burst of pure joy",
    clothingDescriptor: "a vibrant sequined jacket that catches the light with every move",
    environmentDescriptor: "a lively stage lit with warm spotlights and a cheering crowd",
  },
};
