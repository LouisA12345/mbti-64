import type { Axis, RarityInfo } from "../types";
import type { Locale } from "./locale";

type Entry = Record<Locale, string>;

export const dictionary = {
  // Nav / header / footer
  "nav.types": { en: "All 64 Types", my: "အမျိုးအစား ၆၄ မျိုးလုံး" },
  "nav.quiz": { en: "Take the Test", my: "စစ်ဆေးမှု စတင်ရန်" },
  "nav.history": { en: "History", my: "မှတ်တမ်း" },
  "nav.menu": { en: "Menu", my: "မီနူး" },
  "nav.openMenu": { en: "Open menu", my: "မီနူးဖွင့်ရန်" },
  "nav.logIn": { en: "Log In", my: "လော့ဂ်အင်" },
  "nav.logOut": { en: "Log Out", my: "ထွက်ရန်" },
  "nav.signUp": { en: "Sign Up", my: "အကောင့်ဖွင့်ရန်" },
  "nav.testNow": { en: "Test Now", my: "ယခုပင် စစ်ဆေးရန်" },
  "nav.toggleLanguage": { en: "Switch to Burmese", my: "အင်္ဂလိပ်သို့ ပြောင်းရန်" },
  "footer.credit": {
    en: "MBTI-64 is an original 64-type personality framework, built by Louis as a personal hobby project.",
    my: "MBTI-64 သည် Louis မှ ပုဂ္ဂိုလ်ရေးဝါသနာအဖြစ် တီထွင်ဖန်တီးထားသော မူရင်း ပင်ကိုယ်စရိုက် အမျိုးအစား ၆၄ မျိုး framework တစ်ခုဖြစ်ပါသည်။",
  },

  // Auth forms
  "auth.loginTitle": { en: "Log In", my: "လော့ဂ်အင်ဝင်ရန်" },
  "auth.signupTitle": { en: "Create Your Account", my: "အကောင့်အသစ်ဖွင့်ရန်" },
  "auth.usernamePlaceholder": { en: "Username", my: "အသုံးပြုသူအမည်" },
  "auth.passwordPlaceholder": { en: "Password", my: "စကားဝှက်" },
  "auth.passwordMinPlaceholder": { en: "Password (min. 8 characters)", my: "စကားဝှက် (အနည်းဆုံး စာလုံး ၈ လုံး)" },
  "auth.confirmPasswordPlaceholder": { en: "Confirm password", my: "စကားဝှက်ကို ထပ်မံရိုက်ထည့်ပါ" },
  "auth.loggingIn": { en: "Checking…", my: "စစ်ဆေးနေသည်…" },
  "auth.creatingAccount": { en: "Creating account…", my: "အကောင့်ဖွင့်နေသည်…" },
  "auth.submitLogin": { en: "Log In", my: "လော့ဂ်အင်ဝင်ရန်" },
  "auth.submitSignup": { en: "Sign Up", my: "အကောင့်ဖွင့်ရန်" },
  "auth.noAccount": { en: "Don't have an account?", my: "အကောင့်မရှိသေးဘူးလား။" },
  "auth.signUpLink": { en: "Sign up", my: "အကောင့်ဖွင့်ရန်" },
  "auth.haveAccount": { en: "Already have an account?", my: "အကောင့်ရှိပြီးသားလား။" },
  "auth.logInLink": { en: "Log in", my: "လော့ဂ်အင်ဝင်ရန်" },
  "auth.somethingWrong": { en: "Something went wrong.", my: "တစ်ခုခု မှားယွင်းသွားပါသည်။" },
  "auth.somethingWrongRetry": { en: "Something went wrong. Please try again.", my: "တစ်ခုခု မှားယွင်းသွားပါသည်။ ထပ်မံကြိုးစားကြည့်ပါ။" },
  "auth.passwordsDontMatch": { en: "Passwords don't match.", my: "စကားဝှက်များ မတူညီပါ။" },
  "auth.loginRequiredNotice": {
    en: "Log in (or create a free account) to take the assessment and save your result.",
    my: "စစ်ဆေးမှု ပြုလုပ်ပြီး သင့်ရလဒ်ကို သိမ်းဆည်းရန် လော့ဂ်အင်ဝင်ပါ (သို့) အခမဲ့ အကောင့်တစ်ခု ဖွင့်ပါ။",
  },

  // Landing page
  "home.badge": { en: "Not your standard 16-type test", my: "ပုံမှန် ၁၆ မျိုးစစ်ဆေးမှု မဟုတ်ပါ" },
  "home.heroTitle1": { en: "Discover your full", my: "သင့်ရဲ့ ပင်ကိုယ်စရိုက်" },
  "home.heroTitle2": { en: "personality code", my: "ကုဒ်အပြည့်အစုံကို ရှာဖွေလိုက်ပါ" },
  "home.heroDescription": {
    en: "MBTI-64 combines your core personality type with how you engage with change and how you pursue your goals — 16 MBTI types × 2 Mindsets × 2 Lifestyles — for 64 distinct, richly-drawn personalities.",
    my: "MBTI-64 သည် သင့်ရဲ့ အဓိက ပင်ကိုယ်စရိုက်ကို၊ ပြောင်းလဲမှုများကို သင်ဘယ်လိုတုံ့ပြန်သလဲ၊ ပန်းတိုင်များကို ဘယ်လိုလိုက်စားသလဲဆိုတာနဲ့ ပေါင်းစပ်ထားပါတယ် — MBTI အမျိုးအစား ၁၆ မျိုး × Mindset ၂ မျိုး × နေထိုင်မှုပုံစံ ၂ မျိုး — ခွဲခြားထားတဲ့ ပင်ကိုယ်စရိုက် ၆၄ မျိုးအတွက်ပါ။",
  },
  "home.startAssessment": { en: "Start the Assessment", my: "စစ်ဆေးမှု စတင်ရန်" },
  "home.browseTypes": { en: "Browse All 64 Types", my: "အမျိုးအစား ၆၄ မျိုးလုံး ကြည့်ရှုရန်" },
  "home.stat.types": { en: "Personality Types", my: "ပင်ကိုယ်စရိုက် အမျိုးအစားများ" },
  "home.stat.questions": { en: "Assessment Questions", my: "မေးခွန်းအရေအတွက်" },
  "home.stat.dimensions": { en: "Scored Dimensions", my: "တိုင်းတာသည့် အတိုင်းအတာများ" },
  "home.stat.completion": { en: "Avg. Completion", my: "ပျမ်းမျှ ကြာချိန်" },

  "home.formula.heading": { en: "The Formula", my: "တွက်ချက်ပုံ" },
  "home.formula.description": {
    en: "Three independent dimensions combine into a single, unmistakably specific personality code.",
    my: "လွတ်လပ်သော အတိုင်းအတာသုံးခုကို ပေါင်းစပ်ပြီး ထူးခြားတိကျသော ပင်ကိုယ်စရိုက်ကုဒ် တစ်ခုအဖြစ် ရရှိပါသည်။",
  },
  "home.formula.mbti.eyebrow": { en: "16 Types", my: "၁၆ မျိုး" },
  "home.formula.mbti.title": { en: "MBTI", my: "MBTI" },
  "home.formula.mbti.description": { en: "Your core cognitive wiring across four classic axes.", my: "ဂန္ထဝင် ဝိသေသလက္ခဏာလေးခုအလိုက် သင့်ရဲ့ အခြေခံ တွေးခေါ်ပုံစံ။" },
  "home.formula.mindset.eyebrow": { en: "2 Types", my: "၂ မျိုး" },
  "home.formula.mindset.title": { en: "Mindset", my: "Mindset" },
  "home.formula.mindset.description": { en: "How you relate to novelty, change, and the unknown.", my: "အသစ်အဆန်းများ၊ ပြောင်းလဲမှုများနှင့် မသိမမြင်ဖူးသေးသည်များကို သင်ဘယ်လိုရင်ဆိုင်သလဲ။" },
  "home.formula.lifestyle.eyebrow": { en: "2 Types", my: "၂ မျိုး" },
  "home.formula.lifestyle.title": { en: "Lifestyle", my: "နေထိုင်မှုပုံစံ" },
  "home.formula.lifestyle.description": { en: "How you pursue goals and relate to the people around you.", my: "ပန်းတိုင်များကို သင်ဘယ်လိုလိုက်စားပြီး ပတ်ဝန်းကျင်ရှိ လူများနှင့် ဘယ်လိုဆက်ဆံသလဲ။" },

  "home.axis.E": { en: "Extraversion", my: "အပြင်ဘက်စိတ်" },
  "home.axis.I": { en: "Introversion", my: "အတွင်းစိတ်" },
  "home.axis.S": { en: "Sensing", my: "ခံစားချက်" },
  "home.axis.N": { en: "Intuition", my: "အလိုလိုသိမြင်ခြင်း" },
  "home.axis.T": { en: "Thinking", my: "တွေးခေါ်ခြင်း" },
  "home.axis.F": { en: "Feeling", my: "ခံစားခြင်း" },
  "home.axis.J": { en: "Judging", my: "ဆုံးဖြတ်ခြင်း" },
  "home.axis.P": { en: "Perceiving", my: "လိုက်လျောညီထွေဖြစ်ခြင်း" },
  "home.mindset.open.name": { en: "Open", my: "ပွင့်လင်း" },
  "home.mindset.open.traits": { en: "Curious · Explorative · Adaptable", my: "သိချင်စိတ်ရှိ · စူးစမ်းတတ် · လိုက်လျောညီထွေဖြစ်" },
  "home.mindset.anchored.name": { en: "Anchored", my: "တည်ငြိမ်" },
  "home.mindset.anchored.traits": { en: "Stable · Structured · Consistent", my: "တည်ငြိမ် · စနစ်တကျရှိ · တသမတ်တည်း" },
  "home.lifestyle.competitive.name": { en: "Competitive", my: "ယှဉ်ပြိုင်လိုစိတ်ရှိ" },
  "home.lifestyle.competitive.traits": { en: "Ambitious · Driven · Bold", my: "ရည်မှန်းချက်ကြီး · အားထုတ်တတ် · ရဲရင့်" },
  "home.lifestyle.harmonious.name": { en: "Harmonious", my: "ညီညွတ်လိုစိတ်ရှိ" },
  "home.lifestyle.harmonious.traits": { en: "Balanced · Supportive · Calm", my: "ဟန်ချက်ညီ · ကူညီထောက်ပံ့တတ် · တည်ငြိမ်" },

  "home.howItWorks.heading": { en: "How It Works", my: "အလုပ်လုပ်ပုံ" },
  "home.howItWorks.description": { en: "Three steps between you and your full personality code.", my: "သင့်ပင်ကိုယ်စရိုက်ကုဒ်အပြည့်အစုံ ရရှိရန် အဆင့်သုံးဆင့်သာ ရှိပါသည်။" },
  "home.step1.title": { en: "Answer honestly", my: "ရိုးရိုးသားသား ဖြေဆိုပါ" },
  "home.step1.description": {
    en: "72 quick 5-point questions, shuffled every session, covering MBTI, Mindset, and Lifestyle.",
    my: "MBTI၊ Mindset နှင့် နေထိုင်မှုပုံစံကို ဖုံးအုပ်သော အမှတ် ၅ ခုတိုင်းတာသည့် မေးခွန်း ၇၂ ခု၊ တစ်ကြိမ်စီတွင် အစီအစဉ်ပြောင်းပေးပါသည်။",
  },
  "home.step2.title": { en: "We score six dimensions", my: "အတိုင်းအတာ ခြောက်ခု တွက်ချက်ပေးပါသည်" },
  "home.step2.description": {
    en: "Each axis is scored independently, then combined into your final three-part code.",
    my: "အတိုင်းအတာတစ်ခုစီကို သီးခြားစီတွက်ချက်ပြီး နောက်ဆုံးတွင် သုံးပိုင်းပါ ကုဒ်တစ်ခုအဖြစ် ပေါင်းစပ်ပေးပါသည်။",
  },
  "home.step3.title": { en: "Get your full profile", my: "သင့်ပရိုဖိုင်အပြည့်အစုံ ရယူလိုက်ပါ" },
  "home.step3.description": {
    en: "A rich, shareable breakdown of your strengths, career fit, relationships, and more.",
    my: "သင့်ရဲ့ အားသာချက်များ၊ အလုပ်အကိုင်သင့်တော်မှု၊ ဆက်ဆံရေးနှင့် အခြားအကြောင်းအရာများကို အသေးစိတ် မျှဝေနိုင်ပါသည်။",
  },

  "home.preview.heading": { en: "A Glimpse of the 64", my: "၆၄ မျိုးကို အကျဉ်းချုပ်ကြည့်ရှုခြင်း" },
  "home.preview.description": { en: "Every type gets its own name, palette, and full profile.", my: "အမျိုးအစားတိုင်းတွင် ကိုယ်ပိုင်အမည်၊ အရောင်စပ်ဆက်မှုနှင့် ပရိုဖိုင်အပြည့်အစုံ ရှိပါသည်။" },
  "home.seeAll": { en: "See All 64 Types", my: "အားလုံး ၆၄ မျိုးကို ကြည့်ရှုရန်" },

  "home.cta.heading": { en: "Ready to find your personality type?", my: "သင့်ပင်ကိုယ်စရိုက် အမျိုးအစားကို ရှာဖွေဖို့ အသင့်ရှိပါပြီလား။" },
  "home.cta.description": { en: "About seven minutes. Free to join. Your progress autosaves as you go.", my: "မိနစ် ၇ မိနစ်ခန့်သာ ကြာပါမည်။ အခမဲ့ ပါဝင်နိုင်ပါသည်။ သင့်တိုးတက်မှုကို အလိုအလျောက် သိမ်းဆည်းပေးပါသည်။" },

  // Types page
  "types.heading": { en: "All 64 Personality Types", my: "ပင်ကိုယ်စရိုက် အမျိုးအစား ၆၄ မျိုးလုံး" },
  "types.description": {
    en: "16 MBTI types × Open/Anchored mindset × Competitive/Harmonious lifestyle. Browse the full archetype library, or take the assessment to find exactly where you land.",
    my: "MBTI အမျိုးအစား ၁၆ မျိုး × ပွင့်လင်း/တည်ငြိမ် mindset × ယှဉ်ပြိုင်/ညီညွတ်လိုစိတ် နေထိုင်မှုပုံစံ။ အမျိုးအစားစာကြည့်တိုက်အပြည့်အစုံကို ကြည့်ရှုပါ၊ သို့မဟုတ် သင်ဘယ်နေရာမှာရှိသလဲသိရန် စစ်ဆေးမှု ပြုလုပ်ပါ။",
  },
  "types.searchPlaceholder": { en: "Search by code or title…", my: "ကုဒ် သို့မဟုတ် အမည်ဖြင့် ရှာဖွေပါ…" },
  "types.filter.allMindsets": { en: "All Mindsets", my: "Mindset အားလုံး" },
  "types.filter.open": { en: "Open", my: "ပွင့်လင်း" },
  "types.filter.anchored": { en: "Anchored", my: "တည်ငြိမ်" },
  "types.filter.allLifestyles": { en: "All Lifestyles", my: "နေထိုင်မှုပုံစံ အားလုံး" },
  "types.filter.competitive": { en: "Competitive", my: "ယှဉ်ပြိုင်လိုစိတ်ရှိ" },
  "types.filter.harmonious": { en: "Harmonious", my: "ညီညွတ်လိုစိတ်ရှိ" },
  "types.showingCount": { en: "Showing {shown} of {total} personalities", my: "ပင်ကိုယ်စရိုက် {total} အနက် {shown} ကို ပြသနေသည်" },

  // Quiz
  "quiz.autosaved": { en: "Autosaved", my: "အလိုအလျောက် သိမ်းဆည်းပြီး" },
  "quiz.answeredCount": { en: "{answered} / {total} answered · {percent}%", my: "{answered} / {total} ဖြေပြီး · {percent}%" },
  "quiz.startOver": { en: "Start Over", my: "အစကနေ ပြန်စမည်" },
  "quiz.startOverConfirm": { en: "Start over? This clears your current progress.", my: "အစကနေ ပြန်စမလား။ ယခုတိုးတက်မှုအားလုံး ပျက်သွားပါမည်။" },
  "quiz.unanswered": { en: "You still have {count} unanswered question{s}.", my: "မဖြေရသေးသော မေးခွန်း {count} ခု ကျန်နေပါသေးသည်။" },
  "quiz.goToQuestion": { en: "Go to Question {number}", my: "မေးခွန်း {number} သို့ သွားရန်" },
  "quiz.back": { en: "Back", my: "နောက်သို့" },
  "quiz.next": { en: "Next", my: "ရှေ့သို့" },
  "quiz.preparing": { en: "Preparing…", my: "ပြင်ဆင်နေသည်…" },
  "quiz.seeResult": { en: "See My Result", my: "ရလဒ်ကို ကြည့်ရန်" },
  "quiz.category.mbti": { en: "Core Personality", my: "အဓိက ပင်ကိုယ်စရိုက်" },
  "quiz.category.mindset": { en: "Mindset", my: "Mindset" },
  "quiz.category.lifestyle": { en: "Lifestyle", my: "နေထိုင်မှုပုံစံ" },
  "quiz.likert.1": { en: "Strongly Disagree", my: "လုံးဝ သဘောမတူပါ" },
  "quiz.likert.2": { en: "Disagree", my: "သဘောမတူပါ" },
  "quiz.likert.3": { en: "Neutral", my: "ကြားနေ" },
  "quiz.likert.4": { en: "Agree", my: "သဘောတူသည်" },
  "quiz.likert.5": { en: "Strongly Agree", my: "လုံးဝ သဘောတူသည်" },

  // Results page
  "results.yourResult": { en: "Your Result", my: "သင့်ရလဒ်" },
  "results.archetype": { en: "Archetype", my: "နမူနာအမျိုးအစား" },
  "results.viewingArchetype1": { en: "You're viewing the", my: "သင်ကြည့်ရှုနေသည်မှာ" },
  "results.viewingArchetype2": { en: "archetype overview with representative scores.", my: "အမျိုးအစား ခြုံငုံသုံးသပ်ချက်ဖြစ်ပြီး ကိုယ်စားပြု အမှတ်များကို အသုံးပြုထားပါသည်။" },
  "results.takeAssessment": { en: "Take the assessment", my: "စစ်ဆေးမှု ပြုလုပ်ရန်" },
  "results.toGetPersonal": { en: "to get your personal result.", my: "ဖြင့် သင့်ကိုယ်ပိုင်ရလဒ်ကို ရယူပါ။" },
  "results.rarityStat1": { en: "Approximately", my: "ခန့်မှန်းခြေအားဖြင့်" },
  "results.rarityStat2": { en: "of people share this exact type — ranked", my: "သောလူများသည် ဤအမျိုးအစားတိုက်ရိုက်တူညီပြီး — အမျိုးအစားစုစုပေါင်း" },
  "results.rarityStat3": { en: "rarest of all", my: "အနက်" },
  "results.rarityStat4": { en: "types.", my: "အနက်ဆုံးအဆင့် ရရှိထားသည်။" },
  "results.dimensionRadar": { en: "Dimension Radar", my: "အတိုင်းအတာ Radar ဇယား" },
  "results.score": { en: "Score", my: "အမှတ်" },
  "rarity.ultraRare": { en: "Ultra Rare", my: "အလွန်ရှားပါး" },
  "rarity.rare": { en: "Rare", my: "ရှားပါး" },
  "rarity.uncommon": { en: "Uncommon", my: "မကြာခဏမတွေ့ရ" },
  "rarity.common": { en: "Common", my: "အများအားဖြင့်တွေ့ရ" },
  "rarity.veryCommon": { en: "Very Common", my: "အလွန်တွေ့ရများ" },
  "results.fullPicture": { en: "The Full Picture", my: "အပြည့်အစုံ အချက်အလက်" },
  "results.compareCurious": { en: "Curious how you compare, or want to see a different type?", my: "သင်ဘယ်လိုကွာခြားသလဲ သိချင်ပါသလား၊ သို့မဟုတ် အခြားအမျိုးအစားတစ်ခု ကြည့်ချင်ပါသလား။" },
  "results.retakeAssessment": { en: "Retake the Assessment", my: "စစ်ဆေးမှုကို ထပ်မံပြုလုပ်ရန်" },
  "results.exploreAll": { en: "Explore All 64 Types", my: "အမျိုးအစား ၆၄ မျိုးလုံး လေ့လာရန်" },
  "results.viewHistory": { en: "View History", my: "မှတ်တမ်း ကြည့်ရှုရန်" },

  "results.copyLink": { en: "Copy Link", my: "လင့်ခ်ကို ကူးယူရန်" },
  "results.copied": { en: "Copied", my: "ကူးယူပြီး" },
  "results.copiedToast": { en: "Link copied to clipboard", my: "လင့်ခ်ကို ကူးယူပြီးပါပြီ" },
  "results.copyFailedToast": { en: "Couldn't copy the link — copy it from the address bar instead.", my: "လင့်ခ်ကို ကူးယူ၍မရပါ — address bar မှ ကူးယူပါ။" },
  "results.share": { en: "Share", my: "မျှဝေရန်" },
  "results.downloadPdf": { en: "Download PDF", my: "PDF ဒေါင်းလုတ်ရယူရန်" },
  "results.pdfPreparing": { en: "Preparing…", my: "ပြင်ဆင်နေသည်…" },
  "results.pdfFailedToast": { en: "PDF export failed. Please try again.", my: "PDF ထုတ်ယူမှု မအောင်မြင်ပါ။ ထပ်မံကြိုးစားကြည့်ပါ။" },

  "results.sharedPromptQuestion": {
    en: "You got here through a friend's invite link. Add your result to their History?",
    my: "သူငယ်ချင်းရဲ့ ဖိတ်ခေါ်လင့်ခ်မှတစ်ဆင့် ရောက်ရှိလာခြင်းဖြစ်ပါသည်။ သင့်ရလဒ်ကို သူတို့ရဲ့ မှတ်တမ်းထဲ ထည့်သွင်းလိုက်မလား။",
  },
  "results.yourNamePlaceholder": { en: "Your name", my: "သင့်အမည်" },
  "results.addToHistory": { en: "Add to Their History", my: "သူတို့မှတ်တမ်းထဲ ထည့်ရန်" },
  "results.addedToHistory1": { en: "Added!", my: "ထည့်သွင်းပြီးပါပြီ!" },
  "results.addedToHistory2": { en: "will see this result in their History.", my: "သည် ဤရလဒ်ကို သူ့ရဲ့ မှတ်တမ်းတွင် တွေ့မြင်ရပါမည်။" },
  "results.sharedPromptError": { en: "Something went wrong — please try again.", my: "တစ်ခုခု မှားယွင်းသွားပါသည် — ထပ်မံကြိုးစားကြည့်ပါ။" },

  // ProfileSections titles
  "section.overview": { en: "Overview", my: "ခြုံငုံသုံးသပ်ချက်" },
  "section.coreMotivation": { en: "Core Motivation", my: "အဓိက လှုံ့ဆော်မှု" },
  "section.strengths": { en: "Biggest Strengths", my: "အားအကောင်းဆုံး အချက်များ" },
  "section.weaknesses": { en: "Blind Spots", my: "မမြင်တတ်သော အချက်များ" },
  "section.communication": { en: "Communication", my: "ဆက်သွယ်ပြောဆိုမှု" },
  "section.relationships": { en: "Relationships", my: "ဆက်ဆံရေး" },
  "section.friendships": { en: "Friendships", my: "မိတ်ဆွေဖွဲ့ခြင်း" },
  "section.parenting": { en: "Parenting", my: "မိဘအဖြစ် ကလေးထိန်းသိမ်းမှု" },
  "section.leadership": { en: "Leadership", my: "ခေါင်းဆောင်မှု" },
  "section.career": { en: "Career", my: "အလုပ်အကိုင်" },
  "section.workStyle": { en: "Work Style", my: "အလုပ်လုပ်ပုံစံ" },
  "section.decisionMaking": { en: "Decision Making", my: "ဆုံးဖြတ်ချက်ချမှတ်ခြင်း" },
  "section.problemSolving": { en: "Problem Solving", my: "ပြဿနာဖြေရှင်းမှု" },
  "section.creativity": { en: "Creativity", my: "ဖန်တီးနိုင်စွမ်း" },
  "section.learningStyle": { en: "Learning Style", my: "သင်ယူမှုပုံစံ" },
  "section.stressResponse": { en: "Stress Response", my: "စိတ်ဖိစီးမှုကို တုံ့ပြန်ပုံ" },
  "section.conflictStyle": { en: "Conflict Style", my: "အငြင်းပွားမှု ကိုင်တွယ်ပုံ" },
  "section.personalGrowth": { en: "Personal Growth", my: "ကိုယ်ပိုင်တိုးတက်မှု" },
  "section.suggestions": { en: "Suggestions For You", my: "သင့်အတွက် အကြံပြုချက်များ" },
  "section.idealCareers": { en: "Ideal Careers", my: "သင့်တော်သော အလုပ်အကိုင်များ" },
  "section.careersToAvoid": { en: "Careers to Avoid", my: "ရှောင်ရှားသင့်သော အလုပ်အကိုင်များ" },
  "section.famousCharacters": { en: "Famous Characters", my: "နာမည်ကြီး ဇာတ်ကောင်များ" },
  "section.dailyHabits": { en: "Daily Habits", my: "နေ့စဉ်အလေ့အထများ" },
  "section.bestEnvironment": { en: "Favorite Work Environment", my: "အကြိုက်ဆုံး အလုပ်ခွင်ပတ်ဝန်းကျင်" },
  "section.lifeMotto": { en: "Life Motto", my: "ဘဝဆိုင်ရာ ဆောင်ပုဒ်" },
  "section.quote": { en: "Quote", my: "ကိုးကားချက်" },

  // History page
  "history.heading": { en: "Your Result History", my: "သင့်ရလဒ် မှတ်တမ်း" },
  "history.description": {
    en: "Saved locally on this device — every assessment you complete is added here automatically.",
    my: "ဤစက်ပစ္စည်းတွင် ဒေသတွင်းသိမ်းဆည်းထားသည် — သင်ပြီးမြောက်သော စစ်ဆေးမှုတိုင်းကို ဤနေရာတွင် အလိုအလျောက် ထည့်သွင်းပေးပါသည်။",
  },
  "history.inviteHeading": { en: "Invite friends into your history", my: "သူငယ်ချင်းများကို သင့်မှတ်တမ်းထဲ ဖိတ်ခေါ်ပါ" },
  "history.inviteDescription": {
    en: "Share this link — when a friend completes the assessment, they can choose to add their result here.",
    my: "ဤလင့်ခ်ကို မျှဝေပါ — သူငယ်ချင်းတစ်ဦး စစ်ဆေးမှုပြီးမြောက်သွားလျှင် သူတို့ရဲ့ ရလဒ်ကို ဤနေရာတွင် ထည့်သွင်းရန် ရွေးချယ်နိုင်ပါသည်။",
  },
  "history.copy": { en: "Copy", my: "ကူးယူရန်" },
  "history.copied": { en: "Copied", my: "ကူးယူပြီး" },
  "history.emptyTitle": { en: "No results yet", my: "ရလဒ်များ မရှိသေးပါ" },
  "history.emptyDescription": {
    en: "Your own results, and any a friend adds via your invite link, will show up here.",
    my: "သင့်ရလဒ်များနှင့် သူငယ်ချင်းများ သင့်ဖိတ်ခေါ်လင့်ခ်မှတစ်ဆင့် ထည့်သွင်းသော ရလဒ်များ ဤနေရာတွင် ပေါ်လာပါမည်။",
  },
  "history.takeAssessment": { en: "Take the Assessment", my: "စစ်ဆေးမှု ပြုလုပ်ရန်" },
  "history.savedCount": { en: "{count} saved result{s}, most recent first", my: "သိမ်းဆည်းထားသော ရလဒ် {count} ခု၊ နောက်ဆုံးရလဒ်ကို အရင်ပြထားသည်" },
  "history.clearMine": { en: "Clear My Results", my: "ကျွန်ုပ်၏ ရလဒ်များ ရှင်းလင်းရန်" },
  "history.clearConfirm": {
    en: "Clear your own saved results? This won't remove results friends added to your history.",
    my: "သင့်ရလဒ်များကို ရှင်းလင်းမလား။ သူငယ်ချင်းများ ထည့်သွင်းထားသော ရလဒ်များကို မဖျက်ပါ။",
  },
  "history.takeItAgain": { en: "Take It Again", my: "ထပ်မံ ဖြေဆိုရန်" },
  "history.you": { en: "You", my: "သင်" },

  // Profile page
  "profile.description": {
    en: "Results saved here follow your account across any device you log in on — separate from the local, this-device-only history.",
    my: "ဤနေရာတွင် သိမ်းဆည်းထားသော ရလဒ်များသည် သင်လော့ဂ်အင်ဝင်သော စက်ပစ္စည်းမည်သည့်နေရာတွင်မဆို သင့်အကောင့်နှင့်အတူ ပါလာပါသည် — ဤစက်ပစ္စည်းတွင်သာရှိသော ဒေသတွင်းမှတ်တမ်းနှင့် သီးခြားစီဖြစ်ပါသည်။",
  },
  "profile.localHistory": { en: "Local History", my: "ဒေသတွင်း မှတ်တမ်း" },
  "profile.emptyTitle": { en: "No results on your account yet", my: "သင့်အကောင့်တွင် ရလဒ်များ မရှိသေးပါ" },
  "profile.emptyDescription": { en: "Take the assessment while logged in and it'll show up here.", my: "လော့ဂ်အင်ဝင်ထားစဉ် စစ်ဆေးမှုပြုလုပ်ပါက ဤနေရာတွင် ပေါ်လာပါမည်။" },
  "profile.clearConfirm": {
    en: "Clear all of your saved results? This can't be undone.",
    my: "သင့်ရလဒ်များအားလုံးကို ရှင်းလင်းမလား။ ဤလုပ်ဆောင်ချက်ကို နောက်ပြန်ရုတ်သိမ်း၍မရပါ။",
  },
} satisfies Record<string, Entry>;

export type DictKey = keyof typeof dictionary;

export const RARITY_LABEL_KEYS: Record<RarityInfo["label"], DictKey> = {
  "Ultra Rare": "rarity.ultraRare",
  Rare: "rarity.rare",
  Uncommon: "rarity.uncommon",
  Common: "rarity.common",
  "Very Common": "rarity.veryCommon",
};

export const AXIS_LABEL_KEYS: Record<Axis, { positive: DictKey; negative: DictKey }> = {
  EI: { positive: "home.axis.E", negative: "home.axis.I" },
  SN: { positive: "home.axis.S", negative: "home.axis.N" },
  TF: { positive: "home.axis.T", negative: "home.axis.F" },
  JP: { positive: "home.axis.J", negative: "home.axis.P" },
  OA: { positive: "home.mindset.open.name", negative: "home.mindset.anchored.name" },
  CH: { positive: "home.lifestyle.competitive.name", negative: "home.lifestyle.harmonious.name" },
};

export function translate(key: DictKey, locale: Locale, vars?: Record<string, string | number>): string {
  let text = dictionary[key][locale];
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      text = text.replaceAll(`{${k}}`, String(v));
    }
  }
  return text;
}
