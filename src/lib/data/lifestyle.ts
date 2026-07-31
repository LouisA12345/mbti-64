import type { Bilingual, LifestyleType } from "../types";

export interface LifestyleModifier {
  id: LifestyleType;
  name: Bilingual<string>;
  clause: Bilingual<string>;
  strengths: Bilingual<string[]>;
  weaknesses: Bilingual<string[]>;
  communicationAdd: Bilingual<string>;
  leadershipAdd: Bilingual<string>;
  friendshipAdd: Bilingual<string>;
  relationshipAdd: Bilingual<string>;
  parentingAdd: Bilingual<string>;
  conflictAdd: Bilingual<string>;
  workAdd: Bilingual<string>;
  growthAdd: Bilingual<string>;
  suggestion: Bilingual<string>;
  motivationAdd: Bilingual<string>;
  environmentAdd: Bilingual<string>;
  /** A noun phrase; English composes as "You're also {teamRoleAdd}.", Burmese as "သင်သည် {teamRoleAdd} လည်း ဖြစ်သည်။" */
  teamRoleAdd: Bilingual<string>;
  careerBoost: Bilingual<string[]>;
  dailyHabit: Bilingual<string>;
  hueShift: number;
  saturationShift: number;
  lightnessShift: number;
  /** Only used to build the (never rendered) illustrationPrompt — English only is fine. */
  spiritAdjective: string;
  environmentModifier: string;
}

export const LIFESTYLE: Record<LifestyleType, LifestyleModifier> = {
  C: {
    id: "C",
    name: { en: "Competitive", my: "ယှဉ်ပြိုင်လိုစိတ်ရှိ" },
    clause: {
      en: "A Competitive drive sharpens everything into a target worth chasing — you measure yourself against a bar and quietly push to clear it.",
      my: "ယှဉ်ပြိုင်လိုစိတ်သည် အရာအားလုံးကို လိုက်ရှာရန်ထိုက်တန်သော ပန်းတိုင်တစ်ခုအဖြစ် ထက်မြက်စေသည် — ကိုယ့်ကိုယ်ကို စံနှုန်းတစ်ခုနှင့် နှိုင်းယှဉ်ပြီး တိတ်တဆိတ် ကျော်လွှားရန် တွန်းအားပေးသည်။",
    },
    strengths: {
      en: ["Highly goal-driven", "Thrives under pressure to perform", "Relentless about self-improvement"],
      my: ["ပန်းတိုင်ဦးတည်မှု အလွန်ပြင်းထန်သည်", "ဖိအားအောက်တွင် ပိုမိုထူးချွန်တတ်သည်", "ကိုယ်တိုင်ကိုယ်ကျ တိုးတက်ရေးအတွက် မလွှဲမရှောင်သာ ကြိုးစားသည်"],
    },
    weaknesses: {
      en: ["Can turn cooperation into comparison", "Struggles to switch off achievement mode", "Sometimes prioritizes winning over wellbeing"],
      my: ["ပူးပေါင်းဆောင်ရွက်မှုကို နှိုင်းယှဉ်မှုအဖြစ် ပြောင်းလဲစေတတ်သည်", "အောင်မြင်မှုစနစ်ကို ပိတ်ရန် ခက်ခဲသည်", "တစ်ခါတစ်ရံ ကျန်းမာရေးထက် အနိုင်ရရေးကို ဦးစားပေးတတ်သည်"],
    },
    communicationAdd: {
      en: "Your communication carries an edge of momentum — you often frame ideas in terms of results, benchmarks, or a bar to clear.",
      my: "သင့်ဆက်သွယ်ပြောဆိုမှုသည် တွန်းအားတစ်ခု ပါဝင်နေတတ်သည် — ရလဒ်များ၊ စံသတ်မှတ်ချက်များ သို့မဟုတ် ကျော်လွှားရမည့်အဆင့်များနှင့် ချိတ်ဆက်ပြီး အတွေးအခေါ်များကို ဖော်ပြလေ့ရှိသည်။",
    },
    leadershipAdd: {
      en: "As a leader you set an ambitious bar and expect people to rise to meet it, treating high standards as a form of respect.",
      my: "ခေါင်းဆောင်တစ်ဦးအနေနှင့် ရည်မှန်းချက်ကြီးသော စံသတ်မှတ်ချက်ကို သတ်မှတ်ပြီး လူများကို ၎င်းအထိ တက်လှမ်းလာရန် မျှော်လင့်သည်၊ မြင့်မားသောစံနှုန်းများကို လေးစားမှု၏ ပုံစံတစ်ခုအဖြစ် ရှုမြင်သည်။",
    },
    friendshipAdd: {
      en: "In friendship you show up as a genuine hype-person who also isn't afraid to challenge someone to level up.",
      my: "မိတ်ဆွေဖွဲ့ခြင်းတွင် တစ်ဦးတစ်ယောက်ကို အဆင့်မြှင့်ဖို့ စိန်ခေါ်ရန် မကြောက်တတ်သော စစ်မှန်သည့် အားပေးသူတစ်ဦးအဖြစ် တွေ့ရသည်။",
    },
    relationshipAdd: {
      en: "In relationships you channel ambition into shared goals, wanting a partner who has their own fire and can push back on yours.",
      my: "ဆက်ဆံရေးတွင် ရည်မှန်းချက်ကို ဘုံပန်းတိုင်များဆီ ဦးတည်စေပြီး ကိုယ်ပိုင်စိတ်အားထက်သန်မှုရှိပြီး သင့်ကို ပြန်တွန်းအားပေးနိုင်သည့် အဖော်တစ်ဦးကို လိုချင်သည်။",
    },
    parentingAdd: {
      en: "As a parent you instill drive and resilience, encouraging your kid to set goals and genuinely earn their wins.",
      my: "မိဘတစ်ဦးအနေနှင့် တွန်းအားနှင့် ခံနိုင်ရည်ကို မွေးမြူပေးပြီး ကလေးအား ပန်းတိုင်သတ်မှတ်ကာ ကိုယ်ပိုင်ကြိုးစားမှုဖြင့် အောင်မြင်မှုရရှိစေရန် အားပေးသည်။",
    },
    conflictAdd: {
      en: "In conflict you can treat disagreement like a contest to win, and you grow when you remember connection outranks the scoreboard.",
      my: "အငြင်းပွားမှုတွင် သဘောကွဲလွဲမှုကို အနိုင်ယူရမည့် ပြိုင်ပွဲတစ်ခုအလား ရှုမြင်တတ်ပြီး၊ ဆက်ဆံရေးက ရမှတ်ဇယားထက် ပိုအရေးကြီးကြောင်း သတိရသောအခါ တိုးတက်လာသည်။",
    },
    workAdd: {
      en: "At work you gravitate toward visible metrics and benchmarks, finding steady routine dull unless it's clearly moving a number.",
      my: "အလုပ်တွင် မြင်သာသော စံနှုန်းများနှင့် စံသတ်မှတ်ချက်များဆီ ဦးတည်တတ်ပြီး ကိန်းဂဏန်းတစ်ခုကို ရှင်းလင်းစွာ ရွှေ့မလျှင် တည်ငြိမ်သောအလေ့အထသည် ငြီးငွေ့ဖွယ်ဖြစ်သည်ဟု ခံစားရသည်။",
    },
    growthAdd: {
      en: "Growth means learning that rest and slower seasons aren't losses — recovery is what makes the next push possible.",
      my: "တိုးတက်မှုဆိုသည်မှာ အနားယူခြင်းနှင့် နှေးကွေးသောကာလများသည် ဆုံးရှုံးမှုမဟုတ်ကြောင်း သင်ယူခြင်းဖြစ်သည် — ပြန်လည်နာလန်ထူမှုက နောက်ထပ်တွန်းအားကို ဖြစ်နိုင်စေသည်။",
    },
    suggestion: {
      en: "Schedule one deliberate rest day this week with zero metrics attached, and let it count as progress too.",
      my: "ဒီအပတ်အတွင်း စံနှုန်းလုံးဝမပါဘဲ အနားယူရက်တစ်ရက်ကို တမင်တကာ စီစဉ်ပြီး ၎င်းကိုလည်း တိုးတက်မှုအဖြစ် သတ်မှတ်ပါ။",
    },
    motivationAdd: {
      en: "Competition against others or your own past best keeps you consistently, visibly motivated.",
      my: "အခြားသူများ သို့မဟုတ် ကိုယ်ပိုင်အတိတ်ကမှတ်တမ်းနှင့် ယှဉ်ပြိုင်ခြင်းသည် သင့်ကို တသမတ်တည်း၊ မြင်သာစွာ လှုံ့ဆော်ပေးသည်။",
    },
    environmentAdd: {
      en: "You do best somewhere achievement is visible and rewarded, with clear benchmarks to chase.",
      my: "အောင်မြင်မှုကို မြင်သာစွာ ချီးမြှင့်ပြီး ရှင်းလင်းသောစံသတ်မှတ်ချက်များ လိုက်ရှာနိုင်သည့်နေရာတွင် အကောင်းဆုံးလုပ်ဆောင်နိုင်သည်။",
    },
    teamRoleAdd: {
      en: "the driver who keeps the team's ambition and pace honest",
      my: "အဖွဲ့ရဲ့ ရည်မှန်းချက်နှင့် လုပ်ဆောင်နှုန်းကို ရိုးသားမှန်ကန်စွာ ထိန်းပေးသူ",
    },
    careerBoost: {
      en: ["Competitive sales / business development", "Professional or elite athletics", "High-stakes finance or trading"],
      my: ["ယှဉ်ပြိုင်မှုမြင့်သော အရောင်းလုပ်ငန်း / စီးပွားရေးဖွံ့ဖြိုးတိုးတက်မှု", "ပရော်ဖက်ရှင်နယ် သို့မဟုတ် အထက်တန်းအားကစား", "အန္တရာယ်များသော ဘဏ္ဍာရေး သို့မဟုတ် ရောင်းဝယ်ဖောက်ကားမှု"],
    },
    dailyHabit: {
      en: "Track progress against a personal goal or metric every day",
      my: "နေ့စဉ် ကိုယ်ပိုင်ပန်းတိုင် သို့မဟုတ် စံနှုန်းတစ်ခုနှင့် တိုးတက်မှုကို ခြေရာခံပါ",
    },
    hueShift: 6,
    saturationShift: 18,
    lightnessShift: -6,
    spiritAdjective: "Relentless",
    environmentModifier: "an arena-like space charged with the energy of an imminent challenge",
  },
  H: {
    id: "H",
    name: { en: "Harmonious", my: "ညီညွတ်လိုစိတ်ရှိ" },
    clause: {
      en: "A Harmonious orientation keeps you tuned to the wellbeing of the whole group — you quietly prioritize balance over the next win.",
      my: "ညီညွတ်လိုသော စိတ်နေသဘောထားသည် အဖွဲ့တစ်ခုလုံး၏ ကျန်းမာရေးကို အာရုံစိုက်စေသည် — နောက်ထပ်အောင်ပွဲထက် ဟန်ချက်ညီမှုကို တိတ်တဆိတ် ဦးစားပေးသည်။",
    },
    strengths: {
      en: ["Naturally supportive of others", "Skilled at maintaining group balance", "Sustains effort without burning out"],
      my: ["သဘာဝအလျောက် သူတစ်ပါးကို ကူညီထောက်ပံ့တတ်သည်", "အဖွဲ့ဟန်ချက်ညီမှု ထိန်းသိမ်းရာတွင် ကျွမ်းကျင်သည်", "ပင်ပန်းနွမ်းနယ်မှုမရှိဘဲ ကြိုးပမ်းအားထုတ်နိုင်သည်"],
    },
    weaknesses: {
      en: ["Can avoid healthy competition entirely", "Sometimes prioritizes peace over necessary friction", "May undersell your own contributions"],
      my: ["ကျန်းမာသော ယှဉ်ပြိုင်မှုကိုပင် လုံးဝရှောင်ရှားတတ်သည်", "တစ်ခါတစ်ရံ လိုအပ်သော ပဋိပက္ခထက် ငြိမ်းချမ်းမှုကို ဦးစားပေးတတ်သည်", "ကိုယ့်ပါဝင်ဆောင်ရွက်မှုများကို လျှော့တွက်တတ်သည်"],
    },
    communicationAdd: {
      en: "Your communication carries a steadying tone — you often check how a decision will land with everyone before pushing it forward.",
      my: "သင့်ဆက်သွယ်ပြောဆိုမှုသည် တည်ငြိမ်စေသော အသံသံဓိဋ္ဌာန်ရှိပြီး၊ ဆုံးဖြတ်ချက်တစ်ခုကို မတွန်းအားမီ လူတိုင်းက မည်သို့ခံစားမည်ကို အမြဲစစ်ဆေးလေ့ရှိသည်။",
    },
    leadershipAdd: {
      en: "As a leader you build trust through fairness and calm consistency, treating a sustainable pace as more valuable than a sprint.",
      my: "ခေါင်းဆောင်တစ်ဦးအနေနှင့် မျှတမှုနှင့် တည်ငြိမ်သော တသမတ်တည်းဖြစ်မှုမှတစ်ဆင့် ယုံကြည်မှုတည်ဆောက်ပြီး၊ အလျင်အမြန်ပြေးခြင်းထက် ရေရှည်တည်တံ့သော နှုန်းကို ပိုတန်ဖိုးထားသည်။",
    },
    friendshipAdd: {
      en: "In friendship you show up as the steady, dependable presence who makes sure everyone in the group actually feels included.",
      my: "မိတ်ဆွေဖွဲ့ခြင်းတွင် အဖွဲ့ထဲရှိလူတိုင်း ပါဝင်ပါသည်ဟု အမှန်တကယ် ခံစားရအောင် သေချာစေသော တည်ငြိမ်၍ ယုံကြည်စိတ်ချရသူအဖြစ် တွေ့ရသည်။",
    },
    relationshipAdd: {
      en: "In relationships you prioritize mutual comfort and emotional safety, wanting a partner who values balance as much as you do.",
      my: "ဆက်ဆံရေးတွင် အပြန်အလှန်သက်တောင့်သက်သာမှုနှင့် စိတ်ခံစားမှုလုံခြုံရေးကို ဦးစားပေးပြီး၊ ဟန်ချက်ညီမှုကို သင့်လိုပင် တန်ဖိုးထားသော အဖော်တစ်ဦးကို လိုချင်သည်။",
    },
    parentingAdd: {
      en: "As a parent you build a calm, low-pressure home, encouraging your kid's wellbeing over external markers of success.",
      my: "မိဘတစ်ဦးအနေနှင့် တည်ငြိမ်၍ ဖိအားနည်းသော အိမ်ထောင်ကို တည်ဆောက်ပြီး၊ ပြင်ပအောင်မြင်မှုအမှတ်အသားများထက် ကလေး၏ကျန်းမာရေးကို ဦးစားပေးအားပေးသည်။",
    },
    conflictAdd: {
      en: "In conflict you seek a resolution that leaves the relationship intact, and you grow when you let healthy tension surface at all.",
      my: "အငြင်းပွားမှုတွင် ဆက်ဆံရေးကို မထိခိုက်စေသည့် ဖြေရှင်းချက်ကို ရှာဖွေပြီး၊ ကျန်းမာသော တင်းမာမှုကို ပေါ်ထွက်ခွင့်ပြုသည့်အခါ တိုးတက်လာသည်။",
    },
    workAdd: {
      en: "At work you gravitate toward sustainable, collaborative pacing, wary of environments that pit people against each other.",
      my: "အလုပ်တွင် လူများကို အချင်းချင်းယှဉ်ပြိုင်စေသော ပတ်ဝန်းကျင်များကို သတိထားပြီး ရေရှည်တည်တံ့၍ ပူးပေါင်းဆောင်ရွက်သော နှုန်းဆီ ဦးတည်တတ်သည်။",
    },
    growthAdd: {
      en: "Growth means learning that some conflict, pursued honestly, actually protects harmony better than avoiding it does.",
      my: "တိုးတက်မှုဆိုသည်မှာ ရိုးသားစွာ ရင်ဆိုင်ဖြေရှင်းသော ပဋိပက္ခအချို့သည် ရှောင်ရှားခြင်းထက် သဟဇာတမှုကို ပိုကောင်းစွာ ကာကွယ်ပေးကြောင်း သင်ယူခြင်းဖြစ်သည်။",
    },
    suggestion: {
      en: "Name one piece of credit you've been deflecting lately and let yourself actually claim it.",
      my: "မကြာသေးမီက သင်ရှောင်ခဲ့သော ချီးမွမ်းချက်တစ်ခုကို ဖော်ထုတ်ပြီး ကိုယ်တိုင်လက်ခံရယူခွင့်ပြုပါ။",
    },
    motivationAdd: {
      en: "A sense of balance, fairness, and genuine wellbeing — yours and others' — keeps you consistently, quietly motivated.",
      my: "ဟန်ချက်ညီမှု၊ မျှတမှုနှင့် ကိုယ်နှင့်သူတစ်ပါး၏ စစ်မှန်သောကျန်းမာရေးဆိုင်ရာ ခံစားချက်တို့သည် သင့်ကို တသမတ်တည်း၊ တိတ်တဆိတ် လှုံ့ဆော်ပေးသည်။",
    },
    environmentAdd: {
      en: "You do best somewhere collaboration is valued over rivalry and the pace respects everyone's wellbeing.",
      my: "ပြိုင်ဆိုင်မှုထက် ပူးပေါင်းဆောင်ရွက်မှုကို တန်ဖိုးထားပြီး လူတိုင်း၏ ကျန်းမာရေးကို လေးစားသော နှုန်းရှိသည့်နေရာတွင် အကောင်းဆုံးလုပ်ဆောင်နိုင်သည်။",
    },
    teamRoleAdd: {
      en: "the stabilizer who keeps the team's culture healthy and sustainable",
      my: "အဖွဲ့ရဲ့ ယဉ်ကျေးမှုကို ကျန်းမာပြီး ရေရှည်တည်တံ့အောင် ထိန်းပေးသူ",
    },
    careerBoost: {
      en: ["Community and wellbeing-focused roles", "Collaborative nonprofit or mission-driven work", "Mediation and human-centered facilitation"],
      my: ["အသိုင်းအဝိုင်းနှင့် ကျန်းမာရေးအာရုံစိုက်သည့် အလုပ်များ", "ပူးပေါင်းဆောင်ရွက်ရသော အကျိုးအမြတ်မယူသည့် သို့မဟုတ် ရည်ရွယ်ချက်ဦးတည်သည့် လုပ်ငန်းများ", "ဖျန်ဖြေရေးနှင့် လူကိုဗဟိုပြုသော ဆောင်ရွက်မှု"],
    },
    dailyHabit: {
      en: "Check in on your own and others' wellbeing before pushing for more output",
      my: "ရလဒ်ပိုမိုတွန်းအားမပေးမီ ကိုယ်နှင့်သူတစ်ပါးတို့၏ ကျန်းမာရေးကို ဦးစွာစစ်ဆေးပါ",
    },
    hueShift: -6,
    saturationShift: -12,
    lightnessShift: 6,
    spiritAdjective: "Serene",
    environmentModifier: "a calm, softly lit space that feels unhurried and genuinely welcoming",
  },
};
