import type { Bilingual, MindsetType } from "../types";

export interface MindsetModifier {
  id: MindsetType;
  name: Bilingual<string>;
  clause: Bilingual<string>;
  strengths: Bilingual<string[]>;
  weaknesses: Bilingual<string[]>;
  communicationAdd: Bilingual<string>;
  decisionAdd: Bilingual<string>;
  workAdd: Bilingual<string>;
  stressAdd: Bilingual<string>;
  growthAdd: Bilingual<string>;
  suggestion: Bilingual<string>;
  learningAdd: Bilingual<string>;
  motivationAdd: Bilingual<string>;
  problemAdd: Bilingual<string>;
  creativityAdd: Bilingual<string>;
  careerBoost: Bilingual<string[]>;
  dailyHabit: Bilingual<string>;
  hueShift: number;
  saturationShift: number;
  lightnessShift: number;
  /** Only used to build the (never rendered) illustrationPrompt — English only is fine. */
  spiritAdjective: string;
  poseModifier: string;
}

export const MINDSET: Record<MindsetType, MindsetModifier> = {
  O: {
    id: "O",
    name: { en: "Open", my: "ပွင့်လင်း" },
    clause: {
      en: "Being Open keeps you scanning the horizon for what's next — you treat novelty and experimentation as fuel rather than a risk to be managed.",
      my: "ပွင့်လင်းသော mindset က သင့်ကို နောက်ထပ်ဘာဖြစ်လာမလဲဆိုတာကို အမြဲစူးစမ်းနေစေပါတယ် — အသစ်အဆန်းနှင့် စမ်းသပ်မှုများကို ထိန်းချုပ်ရမည့်အန္တရာယ်တစ်ခုအဖြစ်မဟုတ်ဘဲ လှုံ့ဆော်အားတစ်ခုအဖြစ် ရှုမြင်ပါတယ်။",
    },
    strengths: {
      en: ["Embraces novelty and change", "Comfortable experimenting", "Quick to adapt to new information"],
      my: ["အသစ်အဆန်းနှင့် ပြောင်းလဲမှုကို လက်ခံသည်", "စမ်းသပ်ရသည်ကို သက်တောင့်သက်သာရှိသည်", "အချက်အလက်အသစ်များကို လျင်မြန်စွာ လိုက်လျောညီထွေဖြစ်နိုင်သည်"],
    },
    weaknesses: {
      en: ["Can abandon plans too quickly for the next idea", "Struggles with repetitive routine", "Sometimes underestimates proven methods"],
      my: ["နောက်အကြံဉာဏ်အတွက် အစီအစဉ်ကို လျင်မြန်လွန်းစွာ စွန့်ပစ်တတ်သည်", "ထပ်တလဲလဲ လုပ်ဆောင်ရသော အလေ့အထများကို ခက်ခဲစွာ ရင်ဆိုင်ရသည်", "သက်သေပြပြီးသား နည်းလမ်းများကို တစ်ခါတစ်ရံ လျှော့တွက်မိသည်"],
    },
    communicationAdd: {
      en: "You pepper conversation with new ideas and 'what if' questions, energized by exploring an unfinished thought together.",
      my: "စကားဝိုင်းထဲသို့ အတွေးအခေါ်အသစ်များနှင့် 'ဒါဆို ဘယ်လိုဖြစ်မလဲ' ဆိုသော မေးခွန်းများကို ထည့်သွင်းလေ့ရှိပြီး၊ မပြီးသေးသော အတွေးတစ်ခုကို အတူတကွ စူးစမ်းရသည့်အခါ စိတ်အားတက်ကြွသည်။",
    },
    decisionAdd: {
      en: "You stay open to new information right up to the deadline, willing to reverse course if a better option appears.",
      my: "သတ်မှတ်ရက်အထိ အချက်အလက်အသစ်များကို ဖွင့်လှစ်စွာ လက်ခံထားပြီး ပိုကောင်းသောရွေးချယ်စရာပေါ်လာလျှင် လမ်းကြောင်းပြောင်းရန် အသင့်ရှိသည်။",
    },
    workAdd: {
      en: "You prefer projects with room to experiment, and you quietly resist being locked into one fixed method too early.",
      my: "စမ်းသပ်ခွင့်ရှိသော ပရောဂျက်များကို ပိုနှစ်သက်ပြီး၊ တစ်ခုတည်းသောနည်းလမ်းတွင် စောစီးစွာ ပိတ်မိနေရသည်ကို တိတ်တဆိတ် ဆန့်ကျင်တတ်သည်။",
    },
    stressAdd: {
      en: "Under stress you chase an escape hatch of new options rather than sitting with the current problem.",
      my: "စိတ်ဖိစီးမှုအောက်တွင် လက်ရှိပြဿနာနှင့်အတူ ရပ်တည်မည့်အစား ရွေးချယ်စရာအသစ်များ ထွက်ပေါက်ကို လိုက်ရှာတတ်သည်။",
    },
    growthAdd: {
      en: "Growth comes from finishing what novelty starts — commitment gives your curiosity somewhere to land.",
      my: "တိုးတက်မှုသည် အသစ်အဆန်းစတင်ခဲ့သည့်အရာကို ပြီးမြောက်အောင်လုပ်ခြင်းမှ လာသည် — ကတိကဝတ်က သင့်သိလိုစိတ်ကို ဆိုက်ရောက်ရာနေရာတစ်ခု ပေးသည်။",
    },
    suggestion: {
      en: "Pick one thing you started for the novelty and see it through to the end before you let yourself start the next one.",
      my: "အသစ်အဆန်းအတွက် စတင်ခဲ့သည့်အရာတစ်ခုကို ရွေးချယ်ပြီး နောက်တစ်ခုမစတင်မီ အဆုံးထိ လုပ်ဆောင်ကြည့်ပါ။",
    },
    learningAdd: {
      en: "You learn best by exploring tangents and connecting a subject to unfamiliar ideas rather than following a fixed curriculum.",
      my: "ပုံသေသင်ရိုးညွှန်းတမ်းကို လိုက်နာမည့်အစား ဘက်ပတ်လမ်းကြောင်းများကို စူးစမ်းပြီး ဘာသာရပ်တစ်ခုကို ရင်းနှီးမှုမရှိသေးသော အတွေးအခေါ်များနှင့် ချိတ်ဆက်ခြင်းဖြင့် အကောင်းဆုံးသင်ယူနိုင်သည်။",
    },
    motivationAdd: {
      en: "New possibilities and the freedom to explore them keep you genuinely motivated.",
      my: "ဖြစ်နိုင်ခြေအသစ်များနှင့် ၎င်းတို့ကို စူးစမ်းနိုင်သော လွတ်လပ်မှုသည် သင့်ကို စစ်မှန်စွာ လှုံ့ဆော်ပေးသည်။",
    },
    problemAdd: {
      en: "You enjoy reframing the problem itself before accepting the obvious solution.",
      my: "ထင်ရှားသောဖြေရှင်းချက်ကို လက်မခံမီ ပြဿနာကိုယ်တိုင်ကို ပြန်လည်ပုံဖော်ရသည်ကို နှစ်သက်သည်။",
    },
    creativityAdd: {
      en: "It shows up as constant experimentation — you try the unconventional option just to see what happens.",
      my: "ဆက်တိုက်စမ်းသပ်မှုအဖြစ် ပေါ်လွင်သည် — ဘာဖြစ်လာမလဲကြည့်ရန်အတွက် ထုံးစံမဟုတ်သော ရွေးချယ်မှုကို စမ်းကြည့်တတ်သည်။",
    },
    careerBoost: {
      en: ["Innovation / R&D roles", "Creative strategy", "Early-stage venture work"],
      my: ["တီထွင်ဆန်းသစ်မှု / သုတေသနလုပ်ငန်းများ", "ဖန်တီးမှုဗျူဟာ", "အစပျိုး လုပ်ငန်းသစ်များ"],
    },
    dailyHabit: {
      en: "Deliberately try one new approach or experience each day, however small",
      my: "သေးငယ်သည့်တိုင် နေ့စဉ် နည်းလမ်းအသစ် သို့မဟုတ် အတွေ့အကြုံအသစ်တစ်ခုကို တမင်တကာ စမ်းကြည့်ပါ",
    },
    hueShift: 10,
    saturationShift: 16,
    lightnessShift: 4,
    spiritAdjective: "Wandering",
    poseModifier: "caught mid-stride, gaze fixed on something just out of frame",
  },
  A: {
    id: "A",
    name: { en: "Anchored", my: "တည်ငြိမ်" },
    clause: {
      en: "Being Anchored keeps you rooted in what's proven — you favor the steady discipline of a method that already works over the appeal of something new.",
      my: "တည်ငြိမ်သော mindset က သင့်ကို သက်သေပြပြီးသားအရာများတွင် အမြစ်တွယ်နေစေသည် — အသစ်တစ်ခု၏ဆွဲဆောင်မှုထက် အလုပ်ဖြစ်နေပြီးသား နည်းလမ်း၏ တည်ငြိမ်သောစည်းကမ်းကို ပိုနှစ်သက်သည်။",
    },
    strengths: {
      en: ["Highly consistent and dependable", "Builds deep expertise through repetition", "Resistant to distraction from proven goals"],
      my: ["အလွန်တသမတ်တည်းရှိပြီး ယုံကြည်စိတ်ချရသည်", "ထပ်ခါထပ်ခါလုပ်ဆောင်ခြင်းဖြင့် နက်နဲသောကျွမ်းကျင်မှု တည်ဆောက်သည်", "သက်သေပြပြီးသား ပန်းတိုင်များမှ အာရုံပျံ့လွင့်ခြင်းကို ခံနိုင်ရည်ရှိသည်"],
    },
    weaknesses: {
      en: ["Can be slow to adopt better new methods", "Uncomfortable with sudden disruption", "Sometimes dismisses untested ideas too quickly"],
      my: ["ပိုကောင်းသော နည်းလမ်းသစ်များကို လက်ခံရန် နှေးကွေးနိုင်သည်", "ရုတ်တရက်ပျက်ခြင်းများကို မသက်မသာဖြစ်တတ်သည်", "စမ်းသပ်ခြင်းမရှိသေးသော အတွေးအခေါ်များကို တစ်ခါတစ်ရံ လျင်မြန်လွန်းစွာ ပယ်ချတတ်သည်"],
    },
    communicationAdd: {
      en: "You communicate in grounded, concrete terms, preferring a clear plan over an open-ended brainstorm.",
      my: "ဖွင့်ထားသော အတွေးအခေါ်ဖလှယ်ပွဲထက် ရှင်းလင်းသောအစီအစဉ်ကို ပိုနှစ်သက်ပြီး၊ အခြေအမြစ်ရှိ၍ တိကျသောစကားလုံးများဖြင့် ဆက်သွယ်ပြောဆိုသည်။",
    },
    decisionAdd: {
      en: "You decide by leaning on what has reliably worked before, and you rarely reopen a decision without a compelling reason.",
      my: "အရင်ကယုံကြည်စိတ်ချစွာ အလုပ်ဖြစ်ခဲ့သည့်အရာကို မှီခို၍ ဆုံးဖြတ်ပြီး၊ လုံလောက်သောအကြောင်းရင်းမရှိဘဲ ဆုံးဖြတ်ချက်ကို ရှားရှားပါးပါးသာ ပြန်ဖွင့်တတ်သည်။",
    },
    workAdd: {
      en: "You prefer a defined process and steady cadence, building mastery by repeating and refining rather than reinventing.",
      my: "ပြန်လည်တီထွင်ခြင်းထက် ထပ်ခါထပ်ခါ ပြုလုပ်ပြီး ပြန်ညှိခြင်းဖြင့် ကျွမ်းကျင်မှုတည်ဆောက်ကာ သတ်မှတ်ထားသောလုပ်ငန်းစဉ်နှင့် တည်ငြိမ်သောနှုန်းကို ပိုနှစ်သက်သည်။",
    },
    stressAdd: {
      en: "Under stress you retreat further into familiar routines, finding stability in structure that already makes sense.",
      my: "စိတ်ဖိစီးမှုအောက်တွင် ရင်းနှီးသောအလေ့အထများထဲ ပိုမိုနက်နက်ရှိုင်းရှိုင်း ဆုတ်ခွာသွားပြီး အဓိပ္ပာယ်ရှိနေပြီးသား ဖွဲ့စည်းပုံတွင် တည်ငြိမ်မှုကို ရှာဖွေတတ်သည်။",
    },
    growthAdd: {
      en: "Growth comes from letting a proven method flex occasionally — not every new approach is a threat to what already works.",
      my: "တိုးတက်မှုသည် သက်သေပြပြီးသား နည်းလမ်းကို တစ်ခါတစ်ရံ ပြောင်းလွယ်ပြင်လွယ်ဖြစ်စေခြင်းမှ လာသည် — နည်းလမ်းအသစ်တိုင်းသည် အလုပ်ဖြစ်နေပြီးသားအရာကို ခြိမ်းခြောက်နေသည်မဟုတ်ပါ။",
    },
    suggestion: {
      en: "Try one small, genuinely untested approach this week on something low-stakes, purely to see what you'd learn.",
      my: "ဒီအပတ်အတွင်း အန္တရာယ်နည်းသောအရာတစ်ခုတွင် စမ်းသပ်ခြင်းမရှိသေးသော နည်းလမ်းသေးငယ်တစ်ခုကို သင်ယူစရာရှာဖွေဖို့ စမ်းကြည့်ပါ။",
    },
    learningAdd: {
      en: "You learn best through structured repetition and mastery of fundamentals before moving on.",
      my: "ရှေ့ဆက်မတိုးမီ စနစ်တကျ ထပ်ခါထပ်ခါ လေ့ကျင့်ပြီး အခြေခံများကို ကျွမ်းကျင်အောင်လုပ်ခြင်းဖြင့် အကောင်းဆုံးသင်ယူနိုင်သည်။",
    },
    motivationAdd: {
      en: "Stability, mastery, and the satisfaction of steady, visible progress keep you genuinely motivated.",
      my: "တည်ငြိမ်မှု၊ ကျွမ်းကျင်မှုနှင့် တည်ငြိမ်ပြီး မြင်သာသော တိုးတက်မှု၏ ကျေနပ်မှုတို့သည် သင့်ကို စစ်မှန်စွာ လှုံ့ဆော်ပေးသည်။",
    },
    problemAdd: {
      en: "You solve by applying a dependable method with discipline rather than reinventing the approach each time.",
      my: "အကြိမ်တိုင်း နည်းလမ်းအသစ်ပြန်တီးမည့်အစား ယုံကြည်စိတ်ချရသော နည်းလမ်းကို စည်းကမ်းရှိစွာ အသုံးပြု၍ ဖြေရှင်းသည်။",
    },
    creativityAdd: {
      en: "It shows up as refinement — you perfect a craft or process until it quietly outperforms anything new.",
      my: "ပြန်လည်ပြင်ဆင်မှုအဖြစ် ပေါ်လွင်သည် — အတတ်ပညာတစ်ခု သို့မဟုတ် လုပ်ငန်းစဉ်တစ်ခုကို အသစ်တိုင်းထက် တိတ်တဆိတ် ပိုမိုကောင်းမွန်လာသည်အထိ ပြီးပြည့်စုံအောင် ပြုလုပ်သည်။",
    },
    careerBoost: {
      en: ["Operations and process roles", "Institutional / traditional career tracks", "Quality and standards management"],
      my: ["လည်ပတ်ရေးနှင့် လုပ်ငန်းစဉ်ဆိုင်ရာ အလုပ်များ", "အဖွဲ့အစည်းဆိုင်ရာ / ရိုးရာအလုပ်အကိုင်လမ်းကြောင်းများ", "အရည်အသွေးနှင့် စံနှုန်းစီမံခန့်ခွဲမှု"],
    },
    dailyHabit: {
      en: "Follow a consistent daily routine that reinforces your long-term goals",
      my: "ရေရှည်ပန်းတိုင်များကို အားဖြည့်ပေးမည့် တသမတ်တည်း နေ့စဉ်အလေ့အထကို လိုက်နာပါ",
    },
    hueShift: -10,
    saturationShift: -14,
    lightnessShift: -4,
    spiritAdjective: "Steadfast",
    poseModifier: "planted firmly, weight settled, entirely at ease standing still",
  },
};
