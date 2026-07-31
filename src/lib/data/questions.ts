import type { Question } from "../types";

// 48 MBTI questions (12 per axis, balanced 6/6 per pole)
const MBTI_QUESTIONS: Question[] = [
  // Extraversion vs Introversion
  { id: "ei-e-1", axis: "EI", pole: "E", category: "mbti", text: "I feel energized after spending time in a large group of people.", textMy: "လူအများနှင့် အချိန်ဖြုန်းပြီးနောက် ပိုမိုအားအင်ပြည့်ဝသည်ဟု ခံစားရသည်။" },
  { id: "ei-e-2", axis: "EI", pole: "E", category: "mbti", text: "I tend to think out loud, working through ideas by talking about them.", textMy: "အတွေးများကို အသံထွက်ပြောဆိုပြီး လုပ်ဆောင်လေ့ရှိသည်။" },
  { id: "ei-e-3", axis: "EI", pole: "E", category: "mbti", text: "I find it easy to start a conversation with someone I've just met.", textMy: "အသစ်တွေ့ဆုံရသူတစ်ဦးနှင့် စကားစတင်ပြောရန် လွယ်ကူသည်။" },
  { id: "ei-e-4", axis: "EI", pole: "E", category: "mbti", text: "I'd rather spend a Friday night at a lively gathering than a quiet night in.", textMy: "သောကြာညကို အိမ်တွင် တိတ်ဆိတ်စွာနေထိုင်ရသည်ထက် ပျော်ရွှင်ဖွယ် စည်းဝေးပွဲတွင် ဖြတ်သန်းလိုသည်။" },
  { id: "ei-e-5", axis: "EI", pole: "E", category: "mbti", text: "I often seek out new social situations rather than avoiding them.", textMy: "လူမှုရေးအခြေအနေအသစ်များကို ရှောင်ရှားမည့်အစား ရှာဖွေလေ့ရှိသည်။" },
  { id: "ei-e-6", axis: "EI", pole: "E", category: "mbti", text: "I look forward to meeting new people at social events.", textMy: "လူမှုရေးပွဲများတွင် လူအသစ်များနှင့် တွေ့ဆုံရန် စိတ်လှုပ်ရှားသည်။" },
  { id: "ei-i-1", axis: "EI", pole: "I", category: "mbti", text: "I need quiet, alone time to recharge after a busy social day.", textMy: "လူမှုရေးလှုပ်ရှားမှုများပြီးနောက် အားပြန်ဖြည့်ရန် တိတ်ဆိတ်သော တစ်ကိုယ်ရေအချိန် လိုအပ်သည်။" },
  { id: "ei-i-2", axis: "EI", pole: "I", category: "mbti", text: "I prefer to think through my ideas fully before sharing them out loud.", textMy: "အတွေးများကို အသံထွက်မမျှဝေမီ အပြည့်အဝ စဉ်းစားလိုသည်။" },
  { id: "ei-i-3", axis: "EI", pole: "I", category: "mbti", text: "Large parties drain my energy faster than they excite me.", textMy: "ပွဲကြီးများသည် ကျွန်ုပ်ကို စိတ်လှုပ်ရှားစေသည်ထက် အားအင်ကုန်ခမ်းစေသည်က ပိုများသည်။" },
  { id: "ei-i-4", axis: "EI", pole: "I", category: "mbti", text: "I feel most like myself when I have time alone with my own thoughts.", textMy: "ကိုယ်ပိုင်အတွေးများနှင့်အတူ တစ်ကိုယ်ရေရှိချိန်တွင် ကိုယ့်ကိုယ်ကိုယ် အနှစ်သာရဆုံးဟု ခံစားရသည်။" },
  { id: "ei-i-5", axis: "EI", pole: "I", category: "mbti", text: "I'd rather have a few close friends than a wide circle of acquaintances.", textMy: "ကျယ်ပြန့်သော အသိအကျွမ်းများထက် ရင်းနှီးသောမိတ်ဆွေအနည်းငယ်ကို ပိုနှစ်သက်သည်။" },
  { id: "ei-i-6", axis: "EI", pole: "I", category: "mbti", text: "I do my best thinking when I'm by myself, away from other people.", textMy: "အခြားသူများနှင့် ခွာ၍ တစ်ကိုယ်တည်းရှိချိန်တွင် အကောင်းဆုံးတွေးခေါ်နိုင်သည်။" },

  // Sensing vs Intuition
  { id: "sn-s-1", axis: "SN", pole: "S", category: "mbti", text: "I trust concrete facts and direct experience more than abstract theories.", textMy: "စိတ္တဇသီအိုရီများထက် တိကျသောအချက်အလက်များနှင့် တိုက်ရိုက်အတွေ့အကြုံကို ပိုယုံကြည်သည်။" },
  { id: "sn-s-2", axis: "SN", pole: "S", category: "mbti", text: "I pay close attention to details that others tend to overlook.", textMy: "အခြားသူများ လွတ်တတ်သည့် အသေးစိတ်အချက်များကို သေချာဂရုစိုက်လေ့ရှိသည်။" },
  { id: "sn-s-3", axis: "SN", pole: "S", category: "mbti", text: "I prefer step-by-step instructions over figuring things out on my own.", textMy: "ကိုယ်တိုင်ရှာဖွေရှင်းရှင်းလုပ်ရသည်ထက် အဆင့်ဆင့်လမ်းညွှန်ချက်များကို ပိုနှစ်သက်သည်။" },
  { id: "sn-s-4", axis: "SN", pole: "S", category: "mbti", text: "I focus on what is real and practical rather than what could be.", textMy: "ဖြစ်နိုင်ချေရှိသည့်အရာထက် လက်ရှိအမှန်တကယ်နှင့် လက်တွေ့ကျသည့်အရာကို အာရုံစိုက်သည်။" },
  { id: "sn-s-5", axis: "SN", pole: "S", category: "mbti", text: "I remember events in vivid, specific detail rather than general impressions.", textMy: "ယေဘုယျခံစားချက်များထက် အဖြစ်အပျက်များကို ပီပြင်တိကျစွာ မှတ်မိတတ်သည်။" },
  { id: "sn-s-6", axis: "SN", pole: "S", category: "mbti", text: "I focus on the details in front of me rather than their big-picture implications.", textMy: "ရှေ့ရှုမြင်ကွင်းအကျယ်ချုပ်ထက် မျက်မှောက်ရှိအသေးစိတ်အချက်များကို အာရုံစိုက်သည်။" },
  { id: "sn-n-1", axis: "SN", pole: "N", category: "mbti", text: "I often find myself imagining future possibilities rather than focusing on the present.", textMy: "ပစ္စုပ္ပန်ကာလကို အာရုံစိုက်မည့်အစား အနာဂတ်ဖြစ်နိုင်ခြေများကို စိတ်ကူးယဉ်တတ်သည်။" },
  { id: "sn-n-2", axis: "SN", pole: "N", category: "mbti", text: "I enjoy exploring abstract theories and ideas for their own sake.", textMy: "စိတ္တဇသီအိုရီများနှင့် အတွေးအခေါ်များကို ၎င်းတို့အတွက်ပင် စူးစမ်းလေ့လာရသည်ကို နှစ်သက်သည်။" },
  { id: "sn-n-3", axis: "SN", pole: "N", category: "mbti", text: "I notice underlying patterns and connections that aren't immediately obvious.", textMy: "ချက်ချင်းမမြင်နိုင်သော အခြေခံပုံစံများနှင့် ဆက်စပ်မှုများကို သတိပြုမိတတ်သည်။" },
  { id: "sn-n-4", axis: "SN", pole: "N", category: "mbti", text: "I'm more interested in what something could become than what it currently is.", textMy: "လက်ရှိအခြေအနေထက် အနာဂတ်တွင် ဘာဖြစ်လာနိုင်သလဲဆိုသည်ကို ပိုစိတ်ဝင်စားသည်။" },
  { id: "sn-n-5", axis: "SN", pole: "N", category: "mbti", text: "I trust my hunches even when I can't fully explain the reasoning behind them.", textMy: "အကြောင်းရင်းကို အပြည့်အဝရှင်းပြမရသည့်တိုင် ကိုယ့်ခံစားချက်ကို ယုံကြည်သည်။" },
  { id: "sn-n-6", axis: "SN", pole: "N", category: "mbti", text: "I enjoy connecting ideas from completely different fields to form a new perspective.", textMy: "လုံးဝကွဲပြားသော နယ်ပယ်များမှ အတွေးအခေါ်များကို ချိတ်ဆက်ပြီး ရှုထောင့်သစ်ဖန်တီးရသည်ကို နှစ်သက်သည်။" },

  // Thinking vs Feeling
  { id: "tf-t-1", axis: "TF", pole: "T", category: "mbti", text: "I make decisions based on logic and objective analysis rather than personal feelings.", textMy: "ကိုယ်ပိုင်ခံစားချက်များထက် ယုတ္တိနှင့် ဓမ္မဓိဋ္ဌာန်ကျသော ဆန်းစစ်မှုအပေါ် အခြေခံ၍ ဆုံးဖြတ်ချက်ချသည်။" },
  { id: "tf-t-2", axis: "TF", pole: "T", category: "mbti", text: "I value honesty over tact, even if the truth is uncomfortable.", textMy: "အမှန်တရားက စိတ်မသက်မသာဖြစ်စေသည့်တိုင် လိမ္မာပါးနပ်မှုထက် ရိုးသားမှုကို တန်ဖိုးထားသည်။" },
  { id: "tf-t-3", axis: "TF", pole: "T", category: "mbti", text: "I find it easy to give critical feedback without getting emotionally caught up in it.", textMy: "စိတ်ခံစားမှုတွင် မငြိတွယ်ဘဲ ဝေဖန်ချက်များ ပေးရန် လွယ်ကူသည်။" },
  { id: "tf-t-4", axis: "TF", pole: "T", category: "mbti", text: "When resolving disputes, I focus on what's fair according to consistent principles.", textMy: "အငြင်းပွားမှုများ ဖြေရှင်းရာတွင် တသမတ်တည်းသော စည်းမျဉ်းများနှင့်အညီ မျှတမှုကို အာရုံစိုက်သည်။" },
  { id: "tf-t-5", axis: "TF", pole: "T", category: "mbti", text: "I evaluate ideas on their own merit, regardless of who proposed them.", textMy: "မည်သူတင်ပြသည်ဆိုသည်ကို မထောက်ဘဲ အတွေးအခေါ်၏ ကိုယ်ပိုင်တန်ဖိုးအရ အကဲဖြတ်သည်။" },
  { id: "tf-t-6", axis: "TF", pole: "T", category: "mbti", text: "I stay objective even when a decision affects someone I care about.", textMy: "ဆုံးဖြတ်ချက်တစ်ခုသည် ချစ်ခင်ရသူတစ်ဦးကို ထိခိုက်စေသည့်တိုင် ဓမ္မဓိဋ္ဌာန်ကျစွာ ဆက်နေတတ်သည်။" },
  { id: "tf-f-1", axis: "TF", pole: "F", category: "mbti", text: "I consider how a decision will affect people's feelings before I make it.", textMy: "ဆုံးဖြတ်ချက်မချမီ ၎င်းသည် သူတစ်ပါးများ၏ ခံစားချက်ကို မည်သို့ထိခိုက်မည်ကို ဦးစွာစဉ်းစားသည်။" },
  { id: "tf-f-2", axis: "TF", pole: "F", category: "mbti", text: "I find it natural to empathize with someone else's point of view, even if I disagree.", textMy: "သဘောမတူသည့်တိုင် အခြားသူ၏ ရှုထောင့်ကို နားလည်စာနာရန် ဗီဇအလိုလျောက်ဖြစ်သည်။" },
  { id: "tf-f-3", axis: "TF", pole: "F", category: "mbti", text: "Maintaining harmony in a relationship matters more to me than being right.", textMy: "မှန်ကန်ခြင်းထက် ဆက်ဆံရေးတွင် သဟဇာတဖြစ်မှုကို ပိုအရေးထားသည်။" },
  { id: "tf-f-4", axis: "TF", pole: "F", category: "mbti", text: "I tend to make decisions based on my personal values rather than pure logic.", textMy: "စစ်မှန်သော ယုတ္တိထက် ကိုယ်ပိုင်တန်ဖိုးထားမှုများအပေါ် အခြေခံ၍ ဆုံးဖြတ်ချက်ချလေ့ရှိသည်။" },
  { id: "tf-f-5", axis: "TF", pole: "F", category: "mbti", text: "I notice and respond to others' emotional states, even when they're unspoken.", textMy: "မပြောပြသည့်တိုင် သူတစ်ပါးတို့၏ စိတ်ခံစားမှုအခြေအနေများကို သတိပြုမိပြီး တုံ့ပြန်တတ်သည်။" },
  { id: "tf-f-6", axis: "TF", pole: "F", category: "mbti", text: "I'd rather smooth over a disagreement than let it hurt someone's feelings.", textMy: "အငြင်းပွားမှုက တစ်စုံတစ်ဦး၏ခံစားချက်ကို နာကျင်စေမည့်အစား ပြေပြစ်အောင်ဖြေရှင်းလိုသည်။" },

  // Judging vs Perceiving
  { id: "jp-j-1", axis: "JP", pole: "J", category: "mbti", text: "I like to have things decided and settled rather than left open-ended.", textMy: "အရာများကို ဖွင့်ထားသည့်အတိုင်း ချန်ထားမည့်အစား ဆုံးဖြတ်ပြီး ပြီးပြတ်စေလိုသည်။" },
  { id: "jp-j-2", axis: "JP", pole: "J", category: "mbti", text: "I prefer to plan things out in advance rather than improvise.", textMy: "ရုတ်တရက်လုပ်ဆောင်ခြင်းထက် ကြိုတင်စီစဉ်ထားလိုသည်။" },
  { id: "jp-j-3", axis: "JP", pole: "J", category: "mbti", text: "I feel satisfaction from checking items off a structured to-do list.", textMy: "စနစ်တကျစီစဉ်ထားသော လုပ်စရာစာရင်းမှ အချက်များကို ပြီးဆုံးအမှတ်ခြစ်ရသည်ကို ကျေနပ်အားရမိသည်။" },
  { id: "jp-j-4", axis: "JP", pole: "J", category: "mbti", text: "I like my environment to be organized and predictable.", textMy: "ပတ်ဝန်းကျင်သည် စနစ်တကျရှိပြီး ကြိုတင်မှန်းဆနိုင်သည်ကို နှစ်သက်သည်။" },
  { id: "jp-j-5", axis: "JP", pole: "J", category: "mbti", text: "I tend to finish tasks well before the deadline.", textMy: "သတ်မှတ်ရက်မတိုင်မီ အလုပ်များကို ပြီးမြောက်အောင် လုပ်လေ့ရှိသည်။" },
  { id: "jp-j-6", axis: "JP", pole: "J", category: "mbti", text: "I feel uneasy when a task is left open-ended with no clear deadline.", textMy: "တာဝန်တစ်ခုတွင် ရှင်းလင်းသောသတ်မှတ်ရက် မရှိဘဲ ဖွင့်ထားလျှင် စိတ်မကောင်းဖြစ်တတ်သည်။" },
  { id: "jp-p-1", axis: "JP", pole: "P", category: "mbti", text: "I prefer to keep my options open rather than commit to a rigid plan.", textMy: "တင်းကျပ်သောအစီအစဉ်တစ်ခုကို ဂတိပေးမည့်အစား ရွေးချယ်စရာများ ဖွင့်ထားလိုသည်။" },
  { id: "jp-p-2", axis: "JP", pole: "P", category: "mbti", text: "I work best under the pressure of a last-minute deadline.", textMy: "နောက်ဆုံးမိနစ် ဖိအားအောက်တွင် အကောင်းဆုံးလုပ်ဆောင်နိုင်သည်။" },
  { id: "jp-p-3", axis: "JP", pole: "P", category: "mbti", text: "I enjoy improvising and adapting on the fly rather than following a fixed schedule.", textMy: "ပုံသေအချိန်ဇယားလိုက်နာသည်ထက် ရုတ်တရက်ပြောင်းလဲလိုက်လျောညီထွေဖြစ်ရသည်ကို နှစ်သက်သည်။" },
  { id: "jp-p-4", axis: "JP", pole: "P", category: "mbti", text: "I find strict routines stifling rather than comforting.", textMy: "တင်းကျပ်သောအလေ့အထများသည် စိတ်သက်သာစေမည့်အစား လှုပ်ရှားမှုအားနေစေသည်ဟု ခံစားရသည်။" },
  { id: "jp-p-5", axis: "JP", pole: "P", category: "mbti", text: "I'm comfortable leaving a decision unresolved until the very last moment.", textMy: "ဆုံးဖြတ်ချက်တစ်ခုကို နောက်ဆုံးအခိုက်အတန့်အထိ မဆုံးဖြတ်ဘဲ ချန်ထားရသည်ကို စိတ်သက်တောင့်သက်သာရှိသည်။" },
  { id: "jp-p-6", axis: "JP", pole: "P", category: "mbti", text: "I'd rather stay flexible and see how a situation unfolds than lock in a plan early.", textMy: "အစီအစဉ်ကို စောစီးစွာ သတ်မှတ်ထားမည့်အစား လိုက်လျောညီထွေရှိစွာနေပြီး အခြေအနေမည်သို့ဖြစ်ပေါ်လာမည်ကို စောင့်ကြည့်လိုသည်။" },
];

// 12 Mindset questions: Open vs Anchored (balanced 6/6 per pole)
const MINDSET_QUESTIONS: Question[] = [
  { id: "oa-o-1", axis: "OA", pole: "O", category: "mindset", text: "I actively seek out new experiences, even when the outcome is uncertain.", textMy: "ရလဒ်မသေချာသည့်တိုင် အတွေ့အကြုံအသစ်များကို တက်ကြွစွာ ရှာဖွေသည်။" },
  { id: "oa-o-2", axis: "OA", pole: "O", category: "mindset", text: "I get bored quickly when my daily routine stays exactly the same.", textMy: "နေ့စဉ်အလေ့အထ အတိအကျတူညီနေလျှင် လျင်မြန်စွာ ငြီးငွေ့တတ်သည်။" },
  { id: "oa-o-4", axis: "OA", pole: "O", category: "mindset", text: "I'm quick to change my opinion when presented with a compelling new argument.", textMy: "စွဲမက်ဖွယ်ကောင်းသော အငြင်းအခုံအသစ်ကို တွေ့ရလျှင် ကိုယ့်ထင်မြင်ချက်ကို လျင်မြန်စွာ ပြောင်းလဲတတ်သည်။" },
  { id: "oa-o-10", axis: "OA", pole: "O", category: "mindset", text: "I adapt easily when plans change at the last minute.", textMy: "နောက်ဆုံးမိနစ်တွင် အစီအစဉ်ပြောင်းလဲသွားလျှင် လွယ်ကူစွာ လိုက်လျောညီထွေဖြစ်တတ်သည်။" },
  { id: "oa-o-12", axis: "OA", pole: "O", category: "mindset", text: "I feel most alive when I'm learning something completely new.", textMy: "လုံးဝအသစ်တစ်ခုခုကို သင်ယူနေချိန်တွင် အသက်ရှင်လှုပ်ရှားနေသည်ဟု အထင်ရှားဆုံးခံစားရသည်။" },
  { id: "oa-o-16", axis: "OA", pole: "O", category: "mindset", text: "I enjoy experimenting with new methods even if the old one isn't broken.", textMy: "နည်းလမ်းဟောင်းက ပျက်စီးမနေသေးသည့်တိုင် နည်းလမ်းသစ်များ စမ်းသပ်ရသည်ကို နှစ်သက်သည်။" },
  { id: "oa-a-1", axis: "OA", pole: "A", category: "mindset", text: "I prefer sticking to a routine that I know works well.", textMy: "ကောင်းမွန်စွာအလုပ်ဖြစ်ကြောင်း သိရှိထားသည့် အလေ့အထတစ်ခုကို စွဲကိုင်ထားလိုသည်။" },
  { id: "oa-a-2", axis: "OA", pole: "A", category: "mindset", text: "I feel unsettled when plans change suddenly without warning.", textMy: "အစီအစဉ်များ သတိပေးချက်မရှိဘဲ ရုတ်တရက်ပြောင်းလဲလျှင် စိတ်မငြိမ်ဖြစ်တတ်သည်။" },
  { id: "oa-a-3", axis: "OA", pole: "A", category: "mindset", text: "I trust a method that has worked before over an untested new one.", textMy: "စမ်းသပ်ခြင်းမရှိသေးသော နည်းလမ်းသစ်ထက် အရင်ကအောင်မြင်ခဲ့သည့် နည်းလမ်းကို ပိုယုံကြည်သည်။" },
  { id: "oa-a-5", axis: "OA", pole: "A", category: "mindset", text: "I value tradition and established ways of doing things.", textMy: "ရိုးရာအစဉ်အလာနှင့် တည်ရှိပြီးသား လုပ်ဆောင်ပုံများကို တန်ဖိုးထားသည်။" },
  { id: "oa-a-9", axis: "OA", pole: "A", category: "mindset", text: "I prefer detailed, well-tested plans over loose, improvised ones.", textMy: "လွတ်လပ်စွာ ရုတ်တရက်ဖန်တီးထားသော အစီအစဉ်များထက် အသေးစိတ်၊ စမ်းသပ်ပြီးသား အစီအစဉ်များကို ပိုနှစ်သက်သည်။" },
  { id: "oa-a-15", axis: "OA", pole: "A", category: "mindset", text: "Sudden, unplanned changes tend to stress me out.", textMy: "ရုတ်တရက် စီစဉ်မထားသော ပြောင်းလဲမှုများသည် စိတ်ဖိစီးမှုဖြစ်စေတတ်သည်။" },
];

// 12 Lifestyle questions: Competitive vs Harmonious (balanced 6/6 per pole)
const LIFESTYLE_QUESTIONS: Question[] = [
  { id: "ch-c-1", axis: "CH", pole: "C", category: "lifestyle", text: "I feel most motivated when I'm working toward a clear, measurable goal.", textMy: "ရှင်းလင်းပြီး တိုင်းတာနိုင်သော ပန်းတိုင်တစ်ခုဆီ လုပ်ဆောင်နေချိန်တွင် စိတ်အားထက်သန်မှု အများဆုံးရှိသည်။" },
  { id: "ch-c-2", axis: "CH", pole: "C", category: "lifestyle", text: "I enjoy competitive situations, whether in games, sports, or work.", textMy: "ကစားနည်း၊ အားကစား သို့မဟုတ် အလုပ်တွင်ဖြစ်စေ ယှဉ်ပြိုင်မှုအခြေအနေများကို နှစ်သက်သည်။" },
  { id: "ch-c-5", axis: "CH", pole: "C", category: "lifestyle", text: "I set ambitious targets for myself and feel driven to hit them.", textMy: "ကိုယ့်အတွက် ရည်မှန်းချက်ကြီးများ သတ်မှတ်ပြီး ၎င်းတို့ကို ရောက်အောင်လှုပ်ရှားလိုစိတ်ရှိသည်။" },
  { id: "ch-c-9", axis: "CH", pole: "C", category: "lifestyle", text: "I'd rather be the best at something than simply good enough.", textMy: "အလွယ်တကူလုံလောက်သည်ဟု ခံစားရမည့်အစား တစ်ခုခုတွင် အကောင်းဆုံးဖြစ်လိုသည်။" },
  { id: "ch-c-11", axis: "CH", pole: "C", category: "lifestyle", text: "I actively seek out challenges that push my limits.", textMy: "ကိုယ့်စွမ်းရည်ကန့်သတ်ချက်ကို တွန်းအားပေးမည့် စိန်ခေါ်မှုများကို တက်ကြွစွာ ရှာဖွေသည်။" },
  { id: "ch-c-14", axis: "CH", pole: "C", category: "lifestyle", text: "I enjoy rankings, leaderboards, and other ways of measuring who's ahead.", textMy: "အဆင့်သတ်မှတ်ချက်၊ ထိပ်တန်းဇယားနှင့် မည်သူဦးဆောင်နေသည်ကို တိုင်းတာသည့် အခြားနည်းလမ်းများကို နှစ်သက်သည်။" },
  { id: "ch-h-1", axis: "CH", pole: "H", category: "lifestyle", text: "I feel most fulfilled when everyone in a group succeeds together, not just me.", textMy: "ကျွန်ုပ်တစ်ဦးတည်းမက အုပ်စုအားလုံး အတူတကွအောင်မြင်ချိန်တွင် အပြည့်ဆုံးစိတ်ကျေနပ်မှုရှိသည်။" },
  { id: "ch-h-3", axis: "CH", pole: "H", category: "lifestyle", text: "I value emotional balance and calm over the rush of chasing a big win.", textMy: "အောင်ပွဲကြီးတစ်ခုကို လိုက်ရှာသည့် အလောသုံးကြိမ်ထက် စိတ်ခံစားမှုဟန်ချက်ညီမှုနှင့် တည်ငြိမ်မှုကို တန်ဖိုးထားသည်။" },
  { id: "ch-h-4", axis: "CH", pole: "H", category: "lifestyle", text: "I'd rather collaborate toward a shared outcome than compete for individual credit.", textMy: "တစ်ဦးတည်းချီးမြှင့်မှုအတွက် ယှဉ်ပြိုင်မည့်အစား ဘုံရလဒ်တစ်ခုဆီ ပူးပေါင်းဆောင်ရွက်လိုသည်။" },
  { id: "ch-h-9", axis: "CH", pole: "H", category: "lifestyle", text: "I avoid situations that pit people against each other unnecessarily.", textMy: "လူများကို မလိုအပ်ဘဲ အချင်းချင်း ယှဉ်ပြိုင်စေသော အခြေအနေများကို ရှောင်ရှားသည်။" },
  { id: "ch-h-11", axis: "CH", pole: "H", category: "lifestyle", text: "I prefer a steady, sustainable pace over an intense sprint toward a goal.", textMy: "ပန်းတိုင်ဆီ ပြင်းထန်စွာ ပြေးလွှားသည်ထက် တည်ငြိမ်၍ ရေရှည်တည်တံ့သော နှုန်းကို ပိုနှစ်သက်သည်။" },
  { id: "ch-h-15", axis: "CH", pole: "H", category: "lifestyle", text: "I actively protect time for rest, even when there's more I could be achieving.", textMy: "ပိုမိုအောင်မြင်နိုင်သည့်တိုင် နားနေချိန်ကို တက်ကြွစွာ ကာကွယ်ထားသည်။" },
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
