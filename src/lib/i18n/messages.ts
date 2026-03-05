import type { AppLocale } from "@/lib/i18n/locales";

export interface Messages {
  navbar: {
    science: string;
    howItWorks: string;
    features: string;
    pricing: string;
    faq: string;
    login: string;
    whatsapp: string;
    menu: string;
    closeMenu: string;
    selectLanguage: string;
  };
  footer: {
    ctaTitle: string;
    ctaSubtitle: string;
    meetSophie: string;
    product: string;
    company: string;
    legal: string;
    about: string;
    privacy: string;
    terms: string;
    support: string;
    allRightsReserved: string;
  };
  era: {
    subtitle: string;
    line1: string;
    line2: string;
    meetButton: string;
    languageTitle: string;
    learnAnyLanguage: string;
    seeMore: string;
    seeLess: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    startTalking: string;
    steps: Array<{ step: string; title: string; description: string }>;
  };
  features: {
    title: string;
    cards: Array<{ title: string; description: string }>;
    correctionBefore: string;
    correctionAfter: string;
  };
  faq: {
    title: string;
    subtitle: string;
    stillHaveQuestions: string;
    stillHaveQuestionsBody: string;
    getInTouch: string;
    items: Array<{ question: string; answer: string }>;
  };
  loginPage: {
    backToHome: string;
    copyrightSuffix: string;
    dailyProgress: string;
    todayGoal: string;
    progressLanguageLevel: string;
    progressMinutes: string;
    testimonial: string;
    testimonialAuthor: string;
  };
  loginForm: {
    readyTitle: string;
    readySubtitle: string;
    email: string;
    emailPlaceholder: string;
    password: string;
    forgotPassword: string;
    signIn: string;
    orContinueWith: string;
    noAccount: string;
    signUpForBeta: string;
  };
  aboutPage: {
    badge: string;
    titlePrefix: string;
    subtitle: string;
    sectionBeginning: string;
    sectionApproach: string;
    sectionFounders: string;
    sectionForYou: string;
    beginningP1: string;
    beginningP2: string;
    approachP1: string;
    approachP2: string;
    foundersP1: string;
    forYouP1: string;
    closingBanner: string;
  };
  methodologyPage: {
    badge: string;
    titlePrefix: string;
    titleGradient: string;
    subtitle: string;
    quote: string;
    quoteAuthor: string;
    principles: Array<{ title: string; description: string }>;
  };
  supportPage: {
    badge: string;
    title: string;
    subtitle: string;
    contactUs: string;
    emailSupport: string;
    emailSupportDesc: string;
    accountHelp: string;
    accountHelpDesc: string;
    responseTime: string;
    faqTitle: string;
    faqs: Array<{ q: string; a: string }>;
    privacyPolicy: string;
    termsOfService: string;
  };
  notFoundPage: {
    title: string;
    description: string;
    backToHome: string;
  };
  privacyPage: {
    badge: string;
    title: string;
    lastUpdated: string;
    infoCollectTitle: string;
    infoCollectIntro: string;
    infoItems: Array<{ label: string; desc: string }>;
    useDataTitle: string;
    useDataIntro: string;
    voiceDataLabel: string;
    voiceDataBeforeFirstNot: string;
    voiceDataAfterFirstNot: string;
    voiceDataAfterSecondNot: string;
    dataSecurityTitle: string;
    dataSecurityBody: string;
    rightsTitle: string;
    rightsBeforeEmail: string;
    rightsAfterEmail: string;
    retentionTitle: string;
    retentionBody: string;
    thirdPartyTitle: string;
    thirdPartyBody: string;
    childrenTitle: string;
    childrenBody: string;
    changesTitle: string;
    changesBody: string;
    contactTitle: string;
    contactBeforeEmail: string;
    contactAfterEmail: string;
  };
  termsPage: {
    badge: string;
    title: string;
    lastUpdatedPrefix: string;
    acceptanceTitle: string;
    acceptanceBody: string;
    usageTitle: string;
    permittedTitle: string;
    permittedBody: string;
    prohibitedTitle: string;
    prohibitedBody: string;
    subscriptionsTitle: string;
    subscriptionsBody: string;
    refundLabel: string;
    refundBody: string;
    ipTitle: string;
    ipBody: string;
    terminationTitle: string;
    terminationBody: string;
  };
  hero: {
    newDialectsAdded: string;
    dontJust: string;
    intro: string;
    hearSophie: string;
    conversation: string;
    naturalCorrection: string;
    accentAccuracy: string;
  };
  problemSolution: {
    titlePrefix: string;
    titleStrike: string;
    titleSuffix: string;
    traditionalMethod: string;
    traditionalSubtitle: string;
    traditionalBullets: string[];
    speakingWithSophie: string;
    immersionInstantCorrection: string;
    solutionBullets: string[];
    resultLabel: string;
    resultValue: string;
  };
  pricing: {
    titlePrefix: string;
    titleSuffix: string;
    cheaperThanTutor: string;
    freeTierName: string;
    freeTierSubtitle: string;
    freePriceSuffix: string;
    freeFeatures: string[];
    premiumTierName: string;
    premiumBadge: string;
    premiumTierSubtitle: string;
    premiumRegularPriceSuffix: string;
    premiumLaunchPrice: string;
    premiumFeatures: string[];
    proTierName: string;
    proTierSubtitle: string;
    bestValue: string;
    proMonth: string;
    proBilledEvery: string;
    proCycle6: string;
    proCycle12: string;
    proCycle18: string;
    proCycle24: string;
    proTab6: string;
    proTab12: string;
    proTab18: string;
    proTab24: string;
    saveVsMonthly: string;
    proFeatures: string[];
    joinWaitlist: string;
    startFreeTrial: string;
  };
  testimonials: {
    title: string;
    items: Array<{ quote: string; author: string; role: string }>;
  };
  comparisonTable: {
    title: string;
    subtitle: string;
    columns: { feature: string; sophie: string; apps: string; tutor: string };
    rows: Array<{ name: string; sophie: string; apps: string; tutor: string }>;
    footer: string;
  };
  productTour: {
    title: string;
    subtitle: string;
    tabs: Array<{ id: "speak" | "correct" | "track"; label: string; desc: string }>;
    speakQuote: string;
    suggestionLabel: string;
    correctionLine: string;
    correctionHint: string;
    fluencyMetrics: string;
    metrics: Array<{ label: string; value: number; color: string }>;
  };
  personalizationEngine: {
    title: string;
    subtitle: string;
    graphTitle: string;
    graphUpdated: string;
    graphRealtime: string;
    stats: Array<{ label: string; helper: string }>;
    steps: Array<{ title: string; desc: string }>;
  };
  socialProof: {
    title: string;
  };
  cookieBanner: {
    title: string;
    description: string;
    accept: string;
    decline: string;
  };
  blogPage: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    readArticle: string;
    loadMoreArticles: string;
    posts: Array<{
      slug: string;
      title: string;
      excerpt: string;
      category: string;
      date: string;
      readTime: string;
    }>;
  };
  blogPostPage: {
    backToLog: string;
    category: string;
    date: string;
    readTime: string;
    titleLine1: string;
    titleLine2: string;
    authorName: string;
    authorRole: string;
    lead: string;
    sectionCognitiveTitle: string;
    sectionCognitiveP1: string;
    sectionCognitiveP2: string;
    approachTitle: string;
    approachBody: string;
    sectionNeuroTitle: string;
    sectionNeuroP1: string;
    sectionNeuroP2: string;
    quote: string;
    sectionBreakingTitle: string;
    sectionBreakingP1: string;
    breakingList: string[];
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
  articlePlayer: {
    listenToArticle: string;
    audioVersion: string;
    duration: string;
  };
  signupModal: {
    title: string;
    description: string;
    emailLabel: string;
    emailPlaceholder: string;
    learnLabel: string;
    languagePlaceholder: string;
    levelLabel: string;
    levelPlaceholder: string;
    levelBeginner: string;
    levelIntermediate: string;
    levelAdvanced: string;
    goalLabel: string;
    goalPlaceholder: string;
    goalTravel: string;
    goalWork: string;
    goalExams: string;
    goalFamilyDating: string;
    goalMigration: string;
    joining: string;
    joinWaitlist: string;
    successTitle: string;
    successDescription: string;
    close: string;
  };
  demoModal: {
    dialogTitle: string;
    liveSimulation: string;
    listening: string;
    speakClearly: string;
    analyzing: string;
    userInputSample: string;
    correctionLabel: string;
    correctionSentence: string;
    correctionHeading: string;
    correctionBody: string;
    tryAnother: string;
    tryLiveDemo: string;
  };
}

const en: Messages = {
  "navbar": {
    "science": "Science",
    "howItWorks": "How it works",
    "features": "Features",
    "pricing": "Pricing",
    "faq": "FAQ",
    "login": "Log in",
    "whatsapp": "WhatsApp",
    "menu": "Menu",
    "closeMenu": "Close menu",
    "selectLanguage": "Select language"
  },
  "footer": {
    "ctaTitle": "Just ask sophie",
    "ctaSubtitle": "Join thousands of learners who have stopped memorizing and started speaking.",
    "meetSophie": "Meet and greet Sophie",
    "product": "Product",
    "company": "Company",
    "legal": "Legal",
    "about": "About",
    "privacy": "Privacy Policy",
    "terms": "Terms of Service",
    "support": "Support",
    "allRightsReserved": "All rights reserved."
  },
  "era": {
    "subtitle": "Your language personal assistant.",
    "line1": "Any Language. Anytime. Anywhere",
    "line2": "Speak with Sophie for Fast & Efficient Fluency",
    "meetButton": "Meet Sophie",
    "languageTitle": "Sophie can assist you in 50+ languages",
    "learnAnyLanguage": "Learn any language in any language, no English required!",
    "seeMore": "See more",
    "seeLess": "See less"
  },
  "howItWorks": {
    "title": "The Fluency Loop",
    "subtitle": "From frozen to fluent in three cognitive steps.",
    "startTalking": "Start Talking",
    "steps": [
      {
        "step": "Step 01",
        "title": "Context Injection",
        "description": "Travel, work, dating, or arguing with your landlord. Sophie adapts the simulation to your actual life, not a textbook."
      },
      {
        "step": "Step 02",
        "title": "Active Simulation",
        "description": "No multiple choice. No tapping words. Just talk. Sophie responds at your level, pushing you slightly every time (i+1)."
      },
      {
        "step": "Step 03",
        "title": "Neural Rewriting",
        "description": "Get instant corrections on pronunciation and style. Sophie rewrites your neural pathways before bad habits set in."
      }
    ]
  },
  "features": {
    "title": "Everything you need to sound like a native.",
    "cards": [
      {
        "title": "Scenario Engine",
        "description": "Practice real life: Asking for directions in Madrid, ordering tapas, or negotiating a taxi in Bogotá."
      },
      {
        "title": "Don't know how to say it? Just ask Sophie.",
        "description": "Don't get stuck anymore. If you need to find a word or phrase while you are verbalizing, just ask Sophie."
      },
      {
        "title": "SMART",
        "description": "If you don't know how to say something, don't hesitate just ask Sophie."
      },
      {
        "title": "Seamless conversation",
        "description": "Enjoy having seamless conversations with instant feedback."
      },
      {
        "title": "Tutor Mode",
        "description": "Ask \"Why did you use the subjunctive there?\" in English anytime."
      }
    ],
    "correctionBefore": "Estoy embarazado.",
    "correctionAfter": "Tengo vergüenza."
  },
  "faq": {
    "title": "Frequently Asked Questions",
    "subtitle": "Everything you need to know about mastering {language} with your AI tutor.",
    "stillHaveQuestions": "Still have questions?",
    "stillHaveQuestionsBody": "Our team is here to help you get the most out of your learning journey.",
    "getInTouch": "Get in Touch",
    "items": [
      {
        "question": "Does Sophie teach different {language} dialects?",
        "answer": "Yes! You can toggle between different regional accents and dialects of {language} in your settings. Sophie adapts her vocabulary, common expressions, and pronunciation to match the specific region you're focusing on."
      },
      {
        "question": "I'm a complete beginner. Is this too hard?",
        "answer": "Not at all. Sophie is designed to adapt to your specific level. If a conversation is too complex, you can simply ask her to slow down, use simpler words, or even provide instant translations to help you follow along."
      },
      {
        "question": "How does Sophie help with complex grammar?",
        "answer": "Sophie uses a \"context-first\" approach. Instead of drills, she places you in real-world scenarios that naturally require complex {language} grammar. If you make a mistake, she provides gentle, constructive feedback in real-time."
      },
      {
        "question": "Which platforms is Sophie available on?",
        "answer": "Sophie is currently available as a web application and a mobile app for both iOS and Android. Your progress, custom vocabulary lists, and conversation history are synced across all your devices."
      },
      {
        "question": "Can I practice specific conversation topics?",
        "answer": "Definitely. You can choose from dozens of preset scenarios—like ordering at a cafe, a business meeting, or a first date—or create your own custom topics. Sophie can handle almost any conversation you want to have."
      },
      {
        "question": "How many languages can Sophie speak?",
        "answer": "Sophie currently supports 20 major world languages, and we're adding more every month. Each language is backed by native-level AI models to ensure the most accurate and natural learning experience possible."
      }
    ]
  },
  "loginPage": {
    "backToHome": "Back to Home",
    "copyrightSuffix": "Sophie AI Inc.",
    "dailyProgress": "Daily Progress",
    "todayGoal": "Today's Goal",
    "progressLanguageLevel": "Spanish • Advanced",
    "progressMinutes": "15 / 20 mins",
    "testimonial": "Sophie pushed me to speak from Day 1. Its Incredibly seamingless, natural & effective.",
    "testimonialAuthor": "Alex Chen"
  },
  "loginForm": {
    "readyTitle": "Ready to meet Sophie?",
    "readySubtitle": "Speak now, enter your details below.",
    "email": "Email",
    "emailPlaceholder": "sophie@example.com",
    "password": "Password",
    "forgotPassword": "Forgot password?",
    "signIn": "Sign In",
    "orContinueWith": "Or continue with",
    "noAccount": "Don't have an account?",
    "signUpForBeta": "Sign up for Beta"
  },
  "aboutPage": {
    "badge": "Our Story",
    "titlePrefix": "About",
    "subtitle": "A native speaker in your pocket",
    "sectionBeginning": "The Beginning",
    "sectionApproach": "Our Approach",
    "sectionFounders": "Our Founders",
    "sectionForYou": "For You",
    "beginningP1": "SpeakWithSophie.ai was born from one simple idea: real fluency comes from real conversation, not memorization. Traditional language learning tools often trap learners in lists of words and isolated grammar drills — but we knew there had to be a better way.",
    "beginningP2": "At Sophie.ai, we believe the fastest path to confidence in another language is daily speaking practice with intelligent feedback that feels natural and human-like. Sophie isn't just an AI — she's a speaking partner that listens, adapts, and helps you practice real-world conversations from day one.",
    "approachP1": "Our approach is built around immersive dialogue, instant correction, and personalized learning paths. Instead of repeating lists of vocabulary, you talk, respond, and grow your skills through meaningful interaction.",
    "approachP2": "Over time, Sophie.ai remembers your progress, understands your unique patterns, and tailors practice sessions to help you improve faster.",
    "foundersP1": "We Luis Alberto Olguin Reyes and Ernesto Olguin Roman shape this platform with the belief that anyone should be able to speak confidently in a new language — without fear, without judgment, and without boring drills. We built Sophie.ai to empower learners everywhere to speak boldly, speak often, and speak naturally.",
    "forYouP1": "Whether you're preparing for travel, work, study, or just want real conversational fluency, Sophie.ai is here to practice with you — anytime, anywhere.",
    "closingBanner": "Welcome to Sophie.ai — a native speaker in your pocket."
  },
  "methodologyPage": {
    "badge": "The Sophie Method",
    "titlePrefix": "The science of",
    "titleGradient": "acquisition.",
    "subtitle": "We didn't invent language learning. We just stripped away the gamification to focus on how the brain actually rewires itself.",
    "quote": "\"Language is not a genetic gift, it is a social organism. It lives only when spoken.\"",
    "quoteAuthor": "Sophie Research Team",
    "principles": [
      {
        "title": "Active Production (i+1)",
        "description": "Passive listening doesn't build fluency. Our engine forces you to construct sentences slightly above your current level, triggering rapid adaptation in the brain's language centers."
      },
      {
        "title": "Contextual Spaced Repetition",
        "description": "We don't just repeat words. We repeat *patterns* within new contexts. If you struggle with the Spanish subjunctive, Sophie will weave it into a debate about politics, then a date scenario."
      },
      {
        "title": "The Affective Filter",
        "description": "Fear blocks learning. By simulating a safe, judgment-free environment with AI, we lower your cortisol levels, allowing your brain to take risks and retain information 3x faster."
      },
      {
        "title": "Immediate Feedback Loop",
        "description": "Neuroplasticity requires instant error correction. Sophie intervenes the moment a mistake happens, rewriting the neural pathway before the bad habit (fossilization) sets in."
      }
    ]
  },
  "supportPage": {
    "badge": "Support",
    "title": "How Can We Help?",
    "subtitle": "We're here to help you get the most out of your language learning journey with Sophie.",
    "contactUs": "Contact Us",
    "emailSupport": "Email Support",
    "emailSupportDesc": "For general inquiries, bug reports, and feature requests.",
    "accountHelp": "Account Help",
    "accountHelpDesc": "Issues with login, subscription, or account settings.",
    "responseTime": "We typically respond within 24 hours. For urgent issues, please include \"URGENT\" in your email subject line.",
    "faqTitle": "Frequently Asked Questions",
    "faqs": [
      {
        "q": "How do I start a conversation with Sophie?",
        "a": "Open the app, go to the Talk tab, select the language you want to learn, and hold the microphone button to start speaking. Sophie will respond in real-time."
      },
      {
        "q": "Which languages does Sophie support?",
        "a": "Sophie currently supports English, Spanish, French, German, Japanese, Chinese (Mandarin), and Hindi — with more languages coming soon."
      },
      {
        "q": "Is my voice data stored?",
        "a": "Your voice is processed in real-time to provide feedback and is not permanently stored. See our Privacy Policy for full details."
      },
      {
        "q": "How do I delete my account?",
        "a": "You can request account deletion by emailing support@speakwithsophie.ai. All your data will be permanently removed within 30 days."
      },
      {
        "q": "Can I use Sophie offline?",
        "a": "Sophie requires an internet connection to process AI conversations and provide real-time feedback."
      }
    ],
    "privacyPolicy": "Privacy Policy",
    "termsOfService": "Terms of Service"
  },
  "notFoundPage": {
    "title": "Sophie is speechless.",
    "description": "The page you are looking for doesn't exist, or maybe it just hasn't learned to speak yet.",
    "backToHome": "Back to Home"
  },
  "privacyPage": {
    "badge": "Legal",
    "title": "Privacy Policy",
    "lastUpdated": "Last updated: January 13, 2026",
    "infoCollectTitle": "1. Information We Collect",
    "infoCollectIntro": "We collect information to provide better services to all our users. This includes:",
    "infoItems": [
      {
        "label": "Account Data",
        "desc": "Name, email address, and preferred languages"
      },
      {
        "label": "Voice Data",
        "desc": "Audio processed in real-time for speaking practice (transient)"
      },
      {
        "label": "Learning Progress",
        "desc": "Vocabulary, grammar stats, and session history"
      },
      {
        "label": "Technical Data",
        "desc": "Device info and usage analytics for app stability"
      }
    ],
    "useDataTitle": "2. How We Use Your Data",
    "useDataIntro": "Your data is used to personalize your learning experience, track your progress, and improve our AI's accuracy. We do not sell your personal data to third parties.",
    "voiceDataLabel": "Voice Data:",
    "voiceDataBeforeFirstNot": "Your voice data is used exclusively for providing real-time speaking feedback. We do ",
    "voiceDataAfterFirstNot": " sell your voice data. We do ",
    "voiceDataAfterSecondNot": " use your voice recordings to train public AI models. Conversations and inputs are processed to generate AI responses and may be used in an anonymized form to improve the language learning experience.",
    "dataSecurityTitle": "3. Data Security",
    "dataSecurityBody": "We implement industry-standard security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. All data in transit is encrypted via TLS, and data at rest is encrypted using AES-256. Your conversation transcripts are stored in isolated containers and are only accessible by you.",
    "rightsTitle": "4. Your Rights",
    "rightsBeforeEmail": "You have the right to access, correct, or delete your personal information at any time through the app's account settings or by contacting our support team at ",
    "rightsAfterEmail": ".",
    "retentionTitle": "5. Data Retention & Deletion",
    "retentionBody": "We retain your personal data only for as long as necessary to provide our services. You may request deletion of your account and all associated data at any time by contacting us. Upon account deletion, your data will be permanently removed within 30 days.",
    "thirdPartyTitle": "6. Third-Party Services",
    "thirdPartyBody": "We use third-party services including Supabase (authentication and database), Google Gemini (AI language processing), and analytics tools to operate the app. These services process data in accordance with their own privacy policies and are bound by data processing agreements.",
    "childrenTitle": "7. Children's Privacy",
    "childrenBody": "Speak With Sophie is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal data, please contact us so we can take appropriate action.",
    "changesTitle": "8. Changes to This Policy",
    "changesBody": "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the \"Last updated\" date. Your continued use of the app after changes constitutes acceptance of the updated policy.",
    "contactTitle": "9. Contact Us",
    "contactBeforeEmail": "If you have questions about this Privacy Policy, please contact us at ",
    "contactAfterEmail": "."
  },
  "termsPage": {
    "badge": "Legal",
    "title": "Terms of Service",
    "lastUpdatedPrefix": "Last updated:",
    "acceptanceTitle": "1. Acceptance of Terms",
    "acceptanceBody": "By accessing and using Sophie.ai (\"Service\"), you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the Service.",
    "usageTitle": "2. Usage Guidelines",
    "permittedTitle": "Permitted Use",
    "permittedBody": "Personal language learning, educational purposes, and normal conversational practice.",
    "prohibitedTitle": "Prohibited Use",
    "prohibitedBody": "Automated scraping, reverse engineering the AI model, or using the service for harassment/hate speech.",
    "subscriptionsTitle": "3. Subscriptions & Billing",
    "subscriptionsBody": "Sophie.ai offers Free and Paid tiers. Paid subscriptions are billed monthly, quarterly, semi-annually, or annually. You may cancel at any time, and access will continue until the end of your billing period.",
    "refundLabel": "Refund Policy:",
    "refundBody": "We offer a 14-day money-back guarantee for first-time subscribers who are unsatisfied with the service.",
    "ipTitle": "4. Intellectual Property",
    "ipBody": "The Service and its original content (excluding user-generated voice data), features, and functionality are the exclusive property of Sophie.ai.",
    "terminationTitle": "5. Termination",
    "terminationBody": "We reserve the right to terminate or suspend access to our Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users of the Service."
  },
  "hero": {
    "newDialectsAdded": "New: {language} Dialects Added",
    "dontJust": "Don't just",
    "intro": "Stop translating in your head, just ask Sophie. She will help you to conquer real conversation to speak like a native, not like a textbook student.",
    "hearSophie": "Hear Sophie",
    "conversation": "Conversation",
    "naturalCorrection": "Natural Correction",
    "accentAccuracy": "Accent Accuracy"
  },
  "problemSolution": {
    "titlePrefix": "Memorizing words",
    "titleStrike": "doesn't work",
    "titleSuffix": "Real conversation does.",
    "traditionalMethod": "The traditional method",
    "traditionalSubtitle": "Memorizing vocabulary & verbs tables",
    "traditionalBullets": [
      "Memorizing basic words, phrases and grammar",
      "Most times useless vocabulary & complex conjugations and tenses",
      "You forget everything"
    ],
    "speakingWithSophie": "Speaking with Sophie",
    "immersionInstantCorrection": "Immersion & Instant Correction",
    "solutionBullets": [
      "Get instant feedback",
      "Speaking skills developed right away",
      "No more need to have a human native speaker to practice, you have Sophie."
    ],
    "resultLabel": "Result:",
    "resultValue": "Fluent confidence in 30 days"
  },
  "pricing": {
    "titlePrefix": "Invest in your",
    "titleSuffix": "fluency.",
    "cheaperThanTutor": "Cheaper than one hour with a private tutor.",
    "freeTierName": "M&G",
    "freeTierSubtitle": "Meet and Greet Sophie",
    "freePriceSuffix": "7 days",
    "freeFeatures": [
      "App in 15 languages",
      "Natural conversations with Sophie in 50+ languages",
      "Sophie's translation from any to any available language",
      "Unlimited vocabulary saver in all available languages.",
      "100+ conversational scenarios"
    ],
    "premiumTierName": "SCF",
    "premiumBadge": "Popular",
    "premiumTierSubtitle": "Sophie Close Friend",
    "premiumRegularPriceSuffix": "Month regular price",
    "premiumLaunchPrice": "$14/Month launch price",
    "premiumFeatures": [
      "Everything is included in the free trial.",
      "24/7 Customer support. Guaranteed.",
      "Unrestricted app usage",
      "Strategic ambassador option."
    ],
    "proTierName": "SBB",
    "proTierSubtitle": "Sophie Best Buddy",
    "bestValue": "Best Value",
    "proMonth": "month",
    "proBilledEvery": "billed ${total} every {cycle}",
    "proCycle6": "6 months",
    "proCycle12": "12 months",
    "proCycle18": "18 months",
    "proCycle24": "24 months",
    "proTab6": "6mo",
    "proTab12": "12mo",
    "proTab18": "18mo",
    "proTab24": "24mo",
    "saveVsMonthly": "Save {percent}% vs monthly",
    "proFeatures": [
      "Everything in Sophie Close Friend",
      "Priority 24/7 support",
      "Exclusive content & early access",
      "Custom learning path",
      "Dedicated account manager"
    ],
    "joinWaitlist": "Join Waitlist",
    "startFreeTrial": "Start Free Trial"
  },
  "testimonials": {
    "title": "Don't take our word for it.",
    "items": [
      {
        "quote": "I took 4 years of {language} in high school but couldn't order a taco. Sophie fixed my fear of speaking in 2 weeks.",
        "author": "James T.",
        "role": "Traveler"
      },
      {
        "quote": "Real-world context finally makes sense. Sophie explained it while we were roleplaying a scene in {nativeLanguage}.",
        "author": "Sarah M.",
        "role": "Expat"
      },
      {
        "quote": "The accent correction is brutal but effective. I finally stopped sounding like a textbook and started sounding like a local.",
        "author": "David K.",
        "role": "Digital Nomad"
      }
    ]
  },
  "comparisonTable": {
    "title": "Compare your options.",
    "subtitle": "See how Sophie stacks up against traditional learning methods and other apps. The difference isn't just in the price - it's in the results.",
    "columns": {
      "feature": "Feature",
      "sophie": "Sophie.ai",
      "apps": "Gamified Apps",
      "tutor": "Private Tutor"
    },
    "rows": [
      {
        "name": "Active Speaking Time",
        "sophie": "Unlimited",
        "apps": "0 mins (Tapping)",
        "tutor": "45 mins / session"
      },
      {
        "name": "Cost per Month",
        "sophie": "$12",
        "apps": "$0 - $15",
        "tutor": "$200+"
      },
      {
        "name": "Feedback Speed",
        "sophie": "Instant (<1s)",
        "apps": "Instant (Binary)",
        "tutor": "Delayed (Polite)"
      },
      {
        "name": "Contextual Memory",
        "sophie": "Permanent",
        "apps": "None",
        "tutor": "Human Memory"
      },
      {
        "name": "Availability",
        "sophie": "24/7",
        "apps": "24/7",
        "tutor": "Scheduled"
      },
      {
        "name": "Anxiety Factor",
        "sophie": "Zero",
        "apps": "Low",
        "tutor": "High"
      }
    ],
    "footer": "Based on average market rates for professional language tutors in the US/EU."
  },
  "productTour": {
    "title": "Confidence Boost",
    "subtitle": "See how Sophie speaking with Sophie will boost your speaking confidence.",
    "tabs": [
      {
        "id": "speak",
        "label": "Natural Speaking",
        "desc": "Just talk. No tapping words."
      },
      {
        "id": "correct",
        "label": "Instant Feedback",
        "desc": "Corrections that stick."
      },
      {
        "id": "track",
        "label": "Boost your confidence",
        "desc": "Sophie judges no one. Feel free to make mistakes"
      }
    ],
    "speakQuote": "\"I would like to order a coffee, please.\"",
    "suggestionLabel": "Suggestion",
    "correctionLine": "\"I'd like\" is softer and more polite than \"I want\".",
    "correctionHint": "Fluency Metrics",
    "metrics": [
      {
        "label": "Vocabulary",
        "value": 85,
        "color": "bg-pink-500"
      },
      {
        "label": "Pronunciation",
        "value": 62,
        "color": "bg-orange-500"
      },
      {
        "label": "Confidence",
        "value": 94,
        "color": "bg-cyan-500"
      }
    ],
    "fluencyMetrics": "Fluency Metrics"
  },
  "personalizationEngine": {
    "title": "A premium learning engine built around your behavior.",
    "subtitle": "Most apps reset every session. Sophie builds a persistent, evolving model of your language patterns.",
    "graphTitle": "Live Learning Graph",
    "graphUpdated": "Updated after every conversation",
    "graphRealtime": "Realtime",
    "stats": [
      {
        "label": "Confidence",
        "helper": "Conversation-ready"
      },
      {
        "label": "Vocab",
        "helper": "Industry terms tracked"
      },
      {
        "label": "Tone",
        "helper": "Context adjusted"
      },
      {
        "label": "Fluency",
        "helper": "Weekly improvement"
      },
      {
        "label": "Accent",
        "helper": "Pronunciation map"
      }
    ],
    "steps": [
      {
        "title": "Persistent Memory",
        "desc": "Mistakes from last week become drills for today. Nothing is lost."
      },
      {
        "title": "Adaptive Difficulty",
        "desc": "Always challenging, never crushing. It scales with your confidence."
      },
      {
        "title": "Context Awareness",
        "desc": "Sophie knows you're a 'Software Engineer' who likes 'Hiking', not a generic user."
      }
    ]
  },
  "socialProof": {
    "title": "Powering the next generation of polyglots"
  },
  "cookieBanner": {
    "title": "Cookies & Privacy",
    "description": "We use cookies to ensure Sophie remembers your progress and settings. We respect your privacy.",
    "accept": "Accept",
    "decline": "Decline"
  },
  "blogPage": {
    "titleLine1": "The Fluency",
    "titleLine2": "Log.",
    "subtitle": "Insights on linguistics, AI, and the art of conversation.",
    "readArticle": "Read Article",
    "loadMoreArticles": "Load More Articles",
    "posts": [
      {
        "slug": "why-you-are-still-translating",
        "title": "Why You're Still Translating in Your Head",
        "excerpt": "The cognitive bottleneck that prevents fluency, and how to break it using the Direct Method.",
        "category": "Methodology",
        "date": "Oct 24, 2023",
        "readTime": "5 min read"
      },
      {
        "slug": "myth-of-language-gene",
        "title": "The Myth of the 'Language Gene'",
        "excerpt": "New research suggests adaptability is a skill, not a talent. Here's how to train your neuroplasticity.",
        "category": "Science",
        "date": "Nov 12, 2023",
        "readTime": "8 min read"
      },
      {
        "slug": "mexican-vs-spanish-slang",
        "title": "Mexican vs. Spanish Slang: A Survival Guide",
        "excerpt": "Don't say 'Coger' in Mexico. Seriously. A breakdown of regional variances.",
        "category": "Culture",
        "date": "Dec 05, 2023",
        "readTime": "6 min read"
      },
      {
        "slug": "how-sophie-uses-llms",
        "title": "How Sophie Uses LLMs Differently",
        "excerpt": "We don't just use a wrapper. Inside our custom fine-tuning process for language acquisition.",
        "category": "Engineering",
        "date": "Jan 15, 2024",
        "readTime": "12 min read"
      }
    ]
  },
  "blogPostPage": {
    "backToLog": "Back to Log",
    "category": "Methodology",
    "date": "Oct 24, 2023",
    "readTime": "5 min read",
    "titleLine1": "Why You're Still",
    "titleLine2": "Translating in Your Head.",
    "authorName": "Dr. Elena Rostova",
    "authorRole": "Head of Linguistics",
    "lead": "You know the feeling. Someone asks you a simple question in Spanish, and your brain freezes. You hear the words, translate them to English, formulate a response in English, translate it back to Spanish, check grammar tables in your mind, and finally speak too late.",
    "sectionCognitiveTitle": "The Cognitive Bottleneck",
    "sectionCognitiveP1": "This process is called translation dependence, and it's one of the biggest killers of fluency. Traditional language education often trains this habit by focusing on vocabulary lists and grammar rules instead of context.",
    "sectionCognitiveP2": "When you learn that \"Gato\" means \"Cat\", you create a neural dependency. You cannot access the concept directly without passing through your native language first.",
    "approachTitle": "The Sophie Approach",
    "approachBody": "We use the Direct Method. We show you an image or place you in a real scenario and force direct interaction in the target language. No English bridge and no translation buffer.",
    "sectionNeuroTitle": "Neuroplasticity and Stress",
    "sectionNeuroP1": "Fear matters too. The amygdala, the brain's fear center, activates when social pressure rises. In classrooms or real-world settings, fear of looking wrong can shut down language production.",
    "sectionNeuroP2": "That is why AI can be a strong practice partner. Sophie does not judge and does not rush you. She corrects and moves on, which lowers the affective filter and helps your brain take risks.",
    "quote": "Fluency isn't about knowing every word. It's about retrieval speed, and translation is the slowest retrieval method.",
    "sectionBreakingTitle": "Breaking the Habit",
    "sectionBreakingP1": "To break translation dependence, practice production, not only reception. You need to speak a lot.",
    "breakingList": [
      "Stop using subtitles in your native language.",
      "Label your environment physically or mentally in your target language.",
      "Use Sophie's hands-free mode to force audio-only processing like real conversation."
    ],
    "ctaTitle": "Ready to stop translating?",
    "ctaSubtitle": "Join 10,000+ students breaking the translation barrier today.",
    "ctaButton": "Get Early Access"
  },
  "articlePlayer": {
    "listenToArticle": "Listen to this article",
    "audioVersion": "Audio Version",
    "duration": "5:23"
  },
  "signupModal": {
    "title": "Join the Early Access List",
    "description": "Sophie is currently in private beta. Reserve your spot today.",
    "emailLabel": "Email address",
    "emailPlaceholder": "hello@example.com",
    "learnLabel": "I want to learn",
    "languagePlaceholder": "Language",
    "levelLabel": "My level is",
    "levelPlaceholder": "Level",
    "levelBeginner": "Beginner",
    "levelIntermediate": "Intermediate",
    "levelAdvanced": "Advanced",
    "goalLabel": "Main goal",
    "goalPlaceholder": "Select a goal",
    "goalTravel": "Travel confidently",
    "goalWork": "Work & Business",
    "goalExams": "Study tool for school",
    "goalFamilyDating": "Family, friends or dating",
    "goalMigration": "Country migration",
    "joining": "Joining...",
    "joinWaitlist": "Join Waitlist",
    "successTitle": "You're on the list!",
    "successDescription": "We've sent a confirmation email to",
    "close": "Close"
  },
  "demoModal": {
    "dialogTitle": "Sophie AI Live Simulation Demo",
    "liveSimulation": "Live Simulation",
    "listening": "Listening...",
    "speakClearly": "Speak clearly into your microphone",
    "analyzing": "Analyzing grammar and accent...",
    "userInputSample": "El museo es cerrado ahora.",
    "correctionLabel": "Correction",
    "correctionSentence": "El museo está cerrado ahora.",
    "correctionHeading": "Ser vs Estar:",
    "correctionBody": "Being closed is a state, not a permanent characteristic. Use Estar.",
    "tryAnother": "Try Another",
    "tryLiveDemo": "Try Live Demo"
  }
};

const zh: Messages = {
  "navbar": {
    "science": "科学",
    "howItWorks": "如何运作",
    "features": "功能",
    "pricing": "价格",
    "faq": "常见问题",
    "login": "登录",
    "whatsapp": "WhatsApp",
    "menu": "菜单",
    "closeMenu": "关闭菜单",
    "selectLanguage": "选择语言"
  },
  "footer": {
    "ctaTitle": "直接问 Sophie",
    "ctaSubtitle": "加入成千上万的学习者，从死记硬背转向真实开口。",
    "meetSophie": "认识 Sophie",
    "product": "产品",
    "company": "公司",
    "legal": "法律",
    "about": "关于",
    "privacy": "隐私政策",
    "terms": "服务条款",
    "support": "支持",
    "allRightsReserved": "版权所有。"
  },
  "era": {
    "subtitle": "你的个人语言助手。",
    "line1": "任何语言。任何时间。任何地点",
    "line2": "和 Sophie 对话，更快更高效地获得流利表达",
    "meetButton": "认识 Sophie",
    "languageTitle": "Sophie 可协助你学习 50+ 种语言",
    "learnAnyLanguage": "学习任意语言",
    "seeMore": "查看更多",
    "seeLess": "收起"
  },
  "howItWorks": {
    "title": "流利循环",
    "subtitle": "三步认知流程，从卡壳到流利。",
    "startTalking": "开始开口",
    "steps": [
      {
        "step": "步骤01",
        "title": "上下文注入",
        "description": "旅行、工作、约会或与房东争吵。苏菲使模拟适应您的实际生活，而不是教科书。"
      },
      {
        "step": "步骤02",
        "title": "主动模拟",
        "description": "没有多项选择。没有敲击的话。只是说话。索菲按照您的水平做出反应，每次都会稍微推动您 (i+1)。"
      },
      {
        "step": "步骤03",
        "title": "神经重写",
        "description": "即时纠正发音和风格。苏菲在坏习惯养成之前重写你的神经通路。"
      }
    ]
  },
  "features": {
    "title": "像母语者一样开口所需的一切。",
    "cards": [
      {
        "title": "场景引擎",
        "description": "练习现实生活：在马德里问路、点小吃或在波哥大协商出租车。"
      },
      {
        "title": "不知道怎么说？问问苏菲就知道了。",
        "description": "别再被卡住了。如果您在言语时需要找到某个单词或短语，请询问 Sophie。"
      },
      {
        "title": "聪明的",
        "description": "如果您不知道该怎么说，请不要犹豫，直接问 Sophie。"
      },
      {
        "title": "无缝对话",
        "description": "享受无缝对话和即时反馈。"
      },
      {
        "title": "导师模式",
        "description": "问“你为什么在那里使用虚拟语气？”随时用英语。"
      }
    ],
    "correctionBefore": "埃斯托伊尴尬。",
    "correctionAfter": "Tengo vergüenza。"
  },
  "faq": {
    "title": "常见问题",
    "subtitle": "关于与 AI 导师一起掌握 {language} 所需了解的一切。",
    "stillHaveQuestions": "还有问题？",
    "stillHaveQuestionsBody": "我们的团队会帮助你充分利用学习体验。",
    "getInTouch": "联系我们",
    "items": [
      {
        "question": "苏菲教授不同的 {language} 方言吗？",
        "answer": "是的！您可以在设置中在 {language} 的不同地区口音和方言之间切换。索菲会调整她的词汇、常用表达和发音，以匹配您关注的特定区域。"
      },
      {
        "question": "我是一个完全的初学者。这太难了吗？",
        "answer": "一点也不。 Sophie 旨在适应您的特定水平。如果对话太复杂，你可以简单地要求她放慢速度，使用更简单的单词，甚至提供即时翻译来帮助你跟上。"
      },
      {
        "question": "苏菲如何帮助解决复杂的语法？",
        "answer": "索菲使用“上下文优先”的方法。她没有让您进行练习，而是将您置于自然需要复杂 {language} 语法的现实场景中。如果你犯了错误，她会实时提供温和、建设性的反馈。"
      },
      {
        "question": "苏菲可以在哪些平台上使用？",
        "answer": "Sophie 目前可作为 iOS 和 Android 的 Web 应用程序和移动应用程序使用。您的进度、自定义词汇列表和对话历史记录会在您的所有设备上同步。"
      },
      {
        "question": "我可以练习特定的对话主题吗？",
        "answer": "确实。您可以从数十种预设场景中进行选择，例如在咖啡馆点餐、商务会议或第一次约会，或者创建自己的自定义主题。索菲几乎可以处理您想要进行的任何对话。"
      },
      {
        "question": "苏菲会说几种语言？",
        "answer": "Sophie 目前支持 20 种主要的世界语言，并且我们每个月都会增加更多语言。每种语言均由本机级人工智能模型支持，以确保尽可能准确、自然的学习体验。"
      }
    ]
  },
  "loginPage": {
    "backToHome": "返回首页",
    "copyrightSuffix": "苏菲人工智能公司",
    "dailyProgress": "每日进度",
    "todayGoal": "今日目标",
    "progressLanguageLevel": "西班牙语 • 高级",
    "progressMinutes": "15 / 20 分钟",
    "testimonial": "索菲从第一天开始就催促我发言。它令人难以置信的无缝、自然和有效。",
    "testimonialAuthor": "亚历克斯·陈"
  },
  "loginForm": {
    "readyTitle": "准备好认识 Sophie 了吗？",
    "readySubtitle": "立即开口，先在下方登录。",
    "email": "邮箱",
    "emailPlaceholder": "sophie@example.com",
    "password": "密码",
    "forgotPassword": "忘记密码？",
    "signIn": "登录",
    "orContinueWith": "或使用以下方式继续",
    "noAccount": "还没有账号？",
    "signUpForBeta": "加入测试版"
  },
  "aboutPage": {
    "badge": "我们的故事",
    "titlePrefix": "关于",
    "subtitle": "装在口袋里的母语者",
    "sectionBeginning": "起点",
    "sectionApproach": "我们的方法",
    "sectionFounders": "创始人",
    "sectionForYou": "为你而生",
    "beginningP1": "SpeakWithSophie.ai 来自一个简单理念：真正的流利来自真实对话，而不是死记硬背。",
    "beginningP2": "在 Sophie.ai，我们相信最快速建立信心的方式，是每天进行有智能反馈的口语练习。",
    "approachP1": "我们的方法以沉浸式对话、即时纠正和个性化学习路径为核心。",
    "approachP2": "随着时间推移，Sophie.ai 会记住你的进度，帮你更快提升。",
    "foundersP1": "我们坚信：任何人都应该能够自信地说新语言，无需害怕，无需被评判。",
    "forYouP1": "无论你是为旅行、工作或留学做准备，Sophie.ai 都能随时陪你练习。",
    "closingBanner": "欢迎来到 Sophie.ai — 你口袋里的母语者。"
  },
  "methodologyPage": {
    "badge": "Sophie 方法",
    "titlePrefix": "语言习得的",
    "titleGradient": "科学",
    "subtitle": "我们不做游戏化包装，只专注大脑真正的语言重塑机制。",
    "quote": "\"语言不是天赋，而是社交有机体，只有在开口时才存活。\"",
    "quoteAuthor": "Sophie 研究团队",
    "principles": [
      {
        "title": "主动输出 (i+1)",
        "description": "被动听力不会带来流利，我们鼓励你输出略高于当前水平的句子。"
      },
      {
        "title": "语境化间隔重复",
        "description": "我们重复的不只是单词，而是不同场景下的语言模式。"
      },
      {
        "title": "情感过滤器",
        "description": "恐惧会阻碍学习，AI 的安全环境能降低压力。"
      },
      {
        "title": "即时反馈闭环",
        "description": "错误需要立即纠正，才能避免错误固化。"
      }
    ]
  },
  "supportPage": {
    "badge": "支持",
    "title": "我们可以怎样帮助你？",
    "subtitle": "我们将帮你最大化 Sophie 语言学习体验。",
    "contactUs": "联系我们",
    "emailSupport": "邮件支持",
    "emailSupportDesc": "通用咨询、Bug 反馈与功能建议。",
    "accountHelp": "账户帮助",
    "accountHelpDesc": "登录、订阅或账户设置问题。",
    "responseTime": "通常 24 小时内回复。紧急问题请在邮件标题注明 \"URGENT\"。",
    "faqTitle": "常见问题",
    "faqs": [
      {
        "q": "如何与 Sophie 开始对话？",
        "a": "打开 App，进入 Talk 标签，选择语言后按住麦克风开口。"
      },
      {
        "q": "Sophie 支持哪些语言？",
        "a": "当前支持英语、西班牙语、法语、德语、日语、中文和印地语，且持续增加。"
      },
      {
        "q": "我的语音数据会被存储吗？",
        "a": "语音仅用于实时反馈处理，不会永久保存。"
      },
      {
        "q": "如何删除账号？",
        "a": "向 support@speakwithsophie.ai 发邮件即可申请删除，30 天内完成永久清除。"
      },
      {
        "q": "可以离线使用 Sophie 吗？",
        "a": "不能，Sophie 需要网络连接来提供 AI 实时对话反馈。"
      }
    ],
    "privacyPolicy": "隐私政策",
    "termsOfService": "服务条款"
  },
  "notFoundPage": {
    "title": "Sophie 没话了。",
    "description": "你访问的页面不存在，也许它还没学会开口。",
    "backToHome": "返回首页"
  },
  "privacyPage": {
    "badge": "法律",
    "title": "隐私政策",
    "lastUpdated": "最后更新：2026年1月13日",
    "infoCollectTitle": "1. 我们收集的信息",
    "infoCollectIntro": "为提供更好服务，我们会收集下列信息：",
    "infoItems": [
      {
        "label": "账户数据",
        "desc": "姓名、电子邮件地址和首选语言"
      },
      {
        "label": "语音数据",
        "desc": "实时处理音频以进行口语练习（瞬态）"
      },
      {
        "label": "学习进度",
        "desc": "词汇、语法统计和会话历史记录"
      },
      {
        "label": "技术数据",
        "desc": "设备信息和使用情况分析以确保应用程序稳定性"
      }
    ],
    "useDataTitle": "2. 我们如何使用你的数据",
    "useDataIntro": "您的数据用于个性化您的学习体验、跟踪您的进度并提高我们人工智能的准确性。我们不会将您的个人数据出售给第三方。",
    "voiceDataLabel": "语音数据：",
    "voiceDataBeforeFirstNot": "您的语音数据专门用于提供实时语音反馈。我们做",
    "voiceDataAfterFirstNot": "出售您的语音数据。我们做",
    "voiceDataAfterSecondNot": "使用您的录音来训练公共人工智能模型。对话和输入经过处理以生成人工智能响应，并可以匿名形式使用以改善语言学习体验。",
    "dataSecurityTitle": "3. 数据安全",
    "dataSecurityBody": "我们实施行业标准的安全措施来保护您的信息免遭未经授权的访问、更改、披露或破坏。所有传输中的数据均通过 TLS 加密，静态数据使用 AES-256 加密。您的对话记录存储在独立的容器中，只有您自己才能访问。",
    "rightsTitle": "4. 你的权利",
    "rightsBeforeEmail": "您有权随时通过应用程序的帐户设置或联系我们的支持团队来访问、更正或删除您的个人信息：",
    "rightsAfterEmail": "。",
    "retentionTitle": "5. 数据保留与删除",
    "retentionBody": "我们仅在提供服务所需的时间内保留您的个人数据。您可以随时联系我们请求删除您的帐户和所有相关数据。帐户删除后，您的数据将在 30 天内永久删除。",
    "thirdPartyTitle": "6. 第三方服务",
    "thirdPartyBody": "我们使用第三方服务，包括 Supabase（身份验证和数据库）、Google Gemini（人工智能语言处理）和分析工具来操作该应用程序。这些服务根据自己的隐私政策处理数据，并受数据处理协议的约束。",
    "childrenTitle": "7. 儿童隐私",
    "childrenBody": "与苏菲交谈不针对 13 岁以下的儿童。我们不会故意收集 13 岁以下儿童的个人信息。如果您是父母或监护人，并且认为您的孩子已向我们提供了个人数据，请与我们联系，以便我们采取适当的行动。",
    "changesTitle": "8. 本政策更新",
    "changesBody": "我们可能会不时更新本隐私政策。我们将通过在此页面上发布新政策并更新“最后更新”日期来通知您任何重大变更。您在更改后继续使用该应用程序即表示您接受更新后的政策。",
    "contactTitle": "9. 联系我们",
    "contactBeforeEmail": "如果您对本隐私政策有疑问，请通过以下方式联系我们：",
    "contactAfterEmail": "。"
  },
  "termsPage": {
    "badge": "法律",
    "title": "服务条款",
    "lastUpdatedPrefix": "最后更新：",
    "acceptanceTitle": "1. 条款接受",
    "acceptanceBody": "通过访问和使用 Sophie.ai（“服务”），您同意受这些条款的约束。如果您不同意条款的任何部分，您将无法访问服务。",
    "usageTitle": "2. 使用规范",
    "permittedTitle": "允许用途",
    "permittedBody": "个人语言学习、教育目的和正常会话练习。",
    "prohibitedTitle": "禁止用途",
    "prohibitedBody": "自动抓取、对人工智能模型进行逆向工程，或使用该服务进行骚扰/仇恨言论。",
    "subscriptionsTitle": "3. 订阅与计费",
    "subscriptionsBody": "Sophie.ai 提供免费和付费级别。付费订阅按月、季、半年或年计费。您可以随时取消，并且访问将继续到您的计费周期结束。",
    "refundLabel": "退款政策：",
    "refundBody": "我们为对服务不满意的首次订阅者提供 14 天退款保证。",
    "ipTitle": "4. 知识产权",
    "ipBody": "本服务及其原始内容（不包括用户生成的语音数据）、特性和功能是 Sophie.ai 的专有财产。",
    "terminationTitle": "5. 终止",
    "terminationBody": "对于我们认为违反这些条款或对服务的其他用户有害的行为，我们保留立即终止或暂停访问我们的服务的权利，恕不另行通知。"
  },
  "hero": {
    "newDialectsAdded": "新增：{language} 方言",
    "dontJust": "别只是",
    "intro": "别再在脑中翻译，直接问 Sophie。像母语者一样开口。",
    "hearSophie": "听 Sophie",
    "conversation": "对话",
    "naturalCorrection": "自然纠错",
    "accentAccuracy": "发音准确度"
  },
  "problemSolution": {
    "titlePrefix": "死记硬背",
    "titleStrike": "没用",
    "titleSuffix": "真实对话才有用。",
    "traditionalMethod": "传统方法",
    "traditionalSubtitle": "背词汇和动词变位表",
    "traditionalBullets": [
      "记住基本单词、短语和语法",
      "大多数时候都是无用的词汇和复杂的词形变化和时态",
      "你忘记了一切"
    ],
    "speakingWithSophie": "与 Sophie 练习对话",
    "immersionInstantCorrection": "沉浸式 + 即时纠错",
    "solutionBullets": [
      "获得即时反馈",
      "口语能力立即得到提升",
      "不再需要一个以人类为母语的人来练习，你有苏菲。"
    ],
    "resultLabel": "结果：",
    "resultValue": "30 天内建立流利自信"
  },
  "pricing": {
    "titlePrefix": "投资你的",
    "titleSuffix": "流利度。",
    "cheaperThanTutor": "比一小时私教更便宜。",
    "freeTierName": "晨光",
    "freeTierSubtitle": "认识 Sophie",
    "freePriceSuffix": "7 天",
    "freeFeatures": [
      "15 种语言的应用程序",
      "用 50 多种语言与 Sophie 进行自然对话",
      "苏菲从任何语言到任何可用语言的翻译",
      "所有可用语言的无限词汇保存器。",
      "100+对话场景"
    ],
    "premiumTierName": "超临界流体",
    "premiumBadge": "最受欢迎",
    "premiumTierSubtitle": "苏菲亲密朋友",
    "premiumRegularPriceSuffix": "月度常规价",
    "premiumLaunchPrice": "$14/月 首发价",
    "premiumFeatures": [
      "一切都包含在免费试用中。",
      "24/7 客户支持。有保证。",
      "不受限制的应用程序使用",
      "战略大使选项。"
    ],
    "proTierName": "瑞士巴塞尔银行",
    "proTierSubtitle": "苏菲最好的伙伴",
    "bestValue": "最佳价值",
    "proMonth": "月",
    "proBilledEvery": "每 {cycle} 收取 ${total} 美元",
    "proCycle6": "6个月",
    "proCycle12": "12个月",
    "proCycle18": "18个月",
    "proCycle24": "24个月",
    "proTab6": "6个月",
    "proTab12": "12个月",
    "proTab18": "18个月",
    "proTab24": "24个月",
    "saveVsMonthly": "比月付节省 {percent}%",
    "proFeatures": [
      "《苏菲密友》中的一切",
      "优先 24/7 支持",
      "独家内容和抢先体验",
      "定制学习路径",
      "专属客户经理"
    ],
    "joinWaitlist": "加入候补名单",
    "startFreeTrial": "开始免费试用"
  },
  "testimonials": {
    "title": "不要只听我们说。",
    "items": [
      {
        "quote": "我高中学了 4 年 {language}，却不敢开口。Sophie 两周就解决了我的开口恐惧。",
        "author": "James T.",
        "role": "旅行者"
      },
      {
        "quote": "真实语境终于变得容易理解，Sophie 在 {nativeLanguage} 场景扮演中解释得很清楚。",
        "author": "Sarah M.",
        "role": "异地工作者"
      },
      {
        "quote": "发音纠正直接但有效，我终于不再像课本，更像当地人了。",
        "author": "David K.",
        "role": "数字游民"
      }
    ]
  },
  "comparisonTable": {
    "title": "对比你的选择",
    "subtitle": "看看 Sophie 与传统方法和其他 App 的差别，不只是价格。",
    "columns": {
      "feature": "项目",
      "sophie": "苏菲.ai",
      "apps": "游戏化 App",
      "tutor": "私人老师"
    },
    "rows": [
      {
        "name": "活跃发言时间",
        "sophie": "无限",
        "apps": "0 分钟（敲击）",
        "tutor": "45 分钟/节"
      },
      {
        "name": "每月费用",
        "sophie": "12 美元",
        "apps": "$0 - $15",
        "tutor": "$200+"
      },
      {
        "name": "反馈速度",
        "sophie": "即时（<1秒）",
        "apps": "即时（二进制）",
        "tutor": "延迟（礼貌）"
      },
      {
        "name": "情境记忆",
        "sophie": "永恒的",
        "apps": "没有任何",
        "tutor": "人类记忆"
      },
      {
        "name": "可用性",
        "sophie": "24/7",
        "apps": "24/7",
        "tutor": "预定"
      },
      {
        "name": "焦虑因素",
        "sophie": "零",
        "apps": "低的",
        "tutor": "高的"
      }
    ],
    "footer": "基于美国/欧盟专业语言教师的市场均价。"
  },
  "productTour": {
    "title": "自信提升",
    "subtitle": "看看与 Sophie 对话如何提升你的口语自信。",
    "tabs": [
      {
        "id": "speak",
        "label": "自然开口",
        "desc": "直接说，不需点选单词。"
      },
      {
        "id": "correct",
        "label": "即时反馈",
        "desc": "能真正记住的纠正。"
      },
      {
        "id": "track",
        "label": "提升自信",
        "desc": "Sophie 不会评判你，可以安心犯错。"
      }
    ],
    "speakQuote": "“我想点一杯咖啡，谢谢。”",
    "suggestionLabel": "建议",
    "correctionLine": "\"I'd like\" 比 \"I want\" 更礼貌。",
    "correctionHint": "流利指标",
    "metrics": [
      {
        "label": "词汇",
        "value": 85,
        "color": "bg-pink-500"
      },
      {
        "label": "发音",
        "value": 62,
        "color": "bg-orange-500"
      },
      {
        "label": "信心",
        "value": 94,
        "color": "bg-cyan-500"
      }
    ],
    "fluencyMetrics": "流利指标"
  },
  "personalizationEngine": {
    "title": "围绕你行为打造的高级学习引擎。",
    "subtitle": "大多数 App 每次会重置，Sophie 会持续构建你的语言模型。",
    "graphTitle": "实时学习图",
    "graphUpdated": "每次对话后都会更新",
    "graphRealtime": "即时的",
    "stats": [
      {
        "label": "信心",
        "helper": "对话就绪"
      },
      {
        "label": "词汇",
        "helper": "跟踪的行业术语"
      },
      {
        "label": "语气",
        "helper": "上下文调整"
      },
      {
        "label": "流利程度",
        "helper": "每周改善"
      },
      {
        "label": "口音",
        "helper": "发音图"
      }
    ],
    "steps": [
      {
        "title": "持久内存",
        "desc": "上周的错误成为今天的练习。什么都没有丢失。"
      },
      {
        "title": "自适应难度",
        "desc": "永远充满挑战，永远不会被压垮。它会随着您的信心而变化。"
      },
      {
        "title": "情境意识",
        "desc": "Sophie 知道您是一位喜欢“徒步旅行”的“软件工程师”，而不是普通用户。"
      }
    ]
  },
  "socialProof": {
    "title": "助力新一代多语者"
  },
  "cookieBanner": {
    "title": "Cookie 和隐私",
    "description": "我们使用 cookie 来确保 Sophie 记住您的进度和设置。我们尊重您的隐私。",
    "accept": "接受",
    "decline": "衰退"
  },
  "blogPage": {
    "titleLine1": "流畅性",
    "titleLine2": "日志。",
    "subtitle": "对语言学、人工智能和对话艺术的见解。",
    "readArticle": "阅读文章",
    "loadMoreArticles": "加载更多文章",
    "posts": [
      {
        "slug": "why-you-are-still-translating",
        "title": "为什么你还在脑子里翻译",
        "excerpt": "阻碍流畅性的认知瓶颈，以及如何使用直接法打破它。",
        "category": "方法论",
        "date": "2023 年 10 月 24 日",
        "readTime": "5 分钟阅读"
      },
      {
        "slug": "myth-of-language-gene",
        "title": "“语言基因”的神话",
        "excerpt": "新的研究表明，适应能力是一种技能，而不是天赋。以下是训练神经可塑性的方法。",
        "category": "科学",
        "date": "2023 年 11 月 12 日",
        "readTime": "8 分钟阅读"
      },
      {
        "slug": "mexican-vs-spanish-slang",
        "title": "墨西哥俚语与西班牙俚语：生存指南",
        "excerpt": "在墨西哥不要说“Coger”。严重地。区域差异的细分。",
        "category": "文化",
        "date": "2023 年 12 月 5 日",
        "readTime": "6 分钟阅读"
      },
      {
        "slug": "how-sophie-uses-llms",
        "title": "苏菲如何以不同的方式使用法学硕士",
        "excerpt": "我们不只是使用包装器。在我们的语言习得定制微调流程中。",
        "category": "工程",
        "date": "2024 年 1 月 15 日",
        "readTime": "阅读时间 12 分钟"
      }
    ]
  },
  "blogPostPage": {
    "backToLog": "返回日志",
    "category": "方法论",
    "date": "2023 年 10 月 24 日",
    "readTime": "5 分钟阅读",
    "titleLine1": "为什么你还在",
    "titleLine2": "在你的头脑中进行翻译。",
    "authorName": "Dr. Elena Rostova",
    "authorRole": "语言学系主任",
    "lead": "你知道这种感觉。有人用西班牙语问你一个简单的问题，你的大脑就冻结了。你听到这些单词，将其翻译成英语，用英语制定回应，将其翻译回西班牙语，在脑海中检查语法表，最后说得太晚了。",
    "sectionCognitiveTitle": "认知瓶颈",
    "sectionCognitiveP1": "这个过程称为翻译依赖，它是流畅性的最大杀手之一。传统的语言教育通常通过关注词汇表和语法规则而不是上下文来训练这种习惯。",
    "sectionCognitiveP2": "当您了解到“Gato”的意思是“猫”时，您就会产生神经依赖性。如果不先通过母语，您就无法直接访问该概念。",
    "approachTitle": "苏菲方法",
    "approachBody": "我们使用直接法。我们向您展示图像或将您置于真实场景中，并强制使用目标语言进行直接交互。没有英语桥，也没有翻译缓冲区。",
    "sectionNeuroTitle": "神经可塑性和压力",
    "sectionNeuroP1": "恐惧也很重要。当社会压力上升时，杏仁核（大脑的恐惧中心）就会激活。在课堂或现实世界中，担心看错可能会导致语言产生停止。",
    "sectionNeuroP2": "这就是为什么人工智能可以成为强大的实践伙伴。苏菲不会评判你，也不会催促你。她纠正并继续前进，这会降低情感过滤器并帮助你的大脑承担风险。",
    "quote": "流利并不是要知道每个单词。问题在于检索速度，而翻译是最慢的检索方式。",
    "sectionBreakingTitle": "打破习惯",
    "sectionBreakingP1": "要打破翻译依赖，实践生产，而不仅仅是接待。你需要说很多话。",
    "breakingList": [
      "停止使用您的母语字幕。",
      "用您的目标语言标记您的身体或心理环境。",
      "使用 Sophie 的免提模式强制进行纯音频处理，就像真正的对话一样。"
    ],
    "ctaTitle": "准备好停止翻译了吗？",
    "ctaSubtitle": "今天就与 10,000 多名学生一起打破翻译障碍。",
    "ctaButton": "抢先体验"
  },
  "articlePlayer": {
    "listenToArticle": "听听这篇文章",
    "audioVersion": "音频版",
    "duration": "5:23"
  },
  "signupModal": {
    "title": "加入抢先体验列表",
    "description": "苏菲目前处于内测阶段。今天就预订你的位置。",
    "emailLabel": "电子邮件",
    "emailPlaceholder": "你好@example.com",
    "learnLabel": "我想学习",
    "languagePlaceholder": "语言",
    "levelLabel": "我的水平是",
    "levelPlaceholder": "等级",
    "levelBeginner": "初学者",
    "levelIntermediate": "中间的",
    "levelAdvanced": "先进的",
    "goalLabel": "主要目标",
    "goalPlaceholder": "选择一个目标",
    "goalTravel": "自信旅行",
    "goalWork": "工作与商业",
    "goalExams": "学校学习工具",
    "goalFamilyDating": "家人、朋友或约会",
    "goalMigration": "国家移民",
    "joining": "加入...",
    "joinWaitlist": "加入候补名单",
    "successTitle": "你在名单上！",
    "successDescription": "我们已发送确认电子邮件至",
    "close": "关闭"
  },
  "demoModal": {
    "dialogTitle": "Sophie AI 真人模拟演示",
    "liveSimulation": "现场模拟",
    "listening": "听...",
    "speakClearly": "对着麦克风清晰说话",
    "analyzing": "分析语法和口音...",
    "userInputSample": "博物馆位于阿霍拉 (Cerrado ahora)。",
    "correctionLabel": "更正",
    "correctionSentence": "博物馆位于阿霍拉 (Cerrado ahora)。",
    "correctionHeading": "Ser vs Estar：",
    "correctionBody": "封闭是一种状态，而不是永久的特征。使用易思达。",
    "tryAnother": "尝试另一个",
    "tryLiveDemo": "尝试现场演示"
  }
};

const hi: Messages = {
  "navbar": {
    "science": "विज्ञान",
    "howItWorks": "यह कैसे काम करता है",
    "features": "फ़ीचर्स",
    "pricing": "प्राइसिंग",
    "faq": "अक्सर पूछे जाने वाले प्रश्न",
    "login": "लॉग इन",
    "whatsapp": "WhatsApp",
    "menu": "मेनू",
    "closeMenu": "मेनू बंद करें",
    "selectLanguage": "भाषा चुनें"
  },
  "footer": {
    "ctaTitle": "बस Sophie से पूछें",
    "ctaSubtitle": "हजारों शिक्षार्थियों से जुड़ें जिन्होंने रटने के बजाय बोलना शुरू किया।",
    "meetSophie": "Sophie से मिलें",
    "product": "प्रोडक्ट",
    "company": "कंपनी",
    "legal": "कानूनी",
    "about": "हमारे बारे में",
    "privacy": "गोपनीयता नीति",
    "terms": "सेवा की शर्तें",
    "support": "सपोर्ट",
    "allRightsReserved": "सभी अधिकार सुरक्षित।"
  },
  "era": {
    "subtitle": "आपका व्यक्तिगत भाषा सहायक।",
    "line1": "कोई भी भाषा। कभी भी। कहीं भी",
    "line2": "Sophie से बात करें और तेज़, प्रभावी fluency पाएं",
    "meetButton": "Sophie से मिलें",
    "languageTitle": "Sophie 50+ भाषाओं में आपकी मदद कर सकती है",
    "learnAnyLanguage": "कोई भी भाषा सीखें",
    "seeMore": "और देखें",
    "seeLess": "कम देखें"
  },
  "howItWorks": {
    "title": "Fluency चक्र",
    "subtitle": "तीन संज्ञानात्मक चरणों में झिझक से fluency तक।",
    "startTalking": "बोलना शुरू करें",
    "steps": [
      {
        "step": "चरण 01",
        "title": "प्रसंग इंजेक्शन",
        "description": "यात्रा, काम, डेटिंग, या अपने मकान मालिक के साथ बहस करना। सोफी अनुकरण को पाठ्यपुस्तक के बजाय आपके वास्तविक जीवन के अनुरूप ढालती है।"
      },
      {
        "step": "चरण 02",
        "title": "सक्रिय सिमुलेशन",
        "description": "कोई बहुविकल्पी नहीं. कोई दोहन शब्द नहीं. बस बात करो. सोफी आपके स्तर पर प्रतिक्रिया करती है, आपको हर बार थोड़ा धक्का देती है (i+1)।"
      },
      {
        "step": "चरण 03",
        "title": "तंत्रिका पुनर्लेखन",
        "description": "उच्चारण और शैली में तुरंत सुधार प्राप्त करें। बुरी आदतें आने से पहले सोफी आपके तंत्रिका मार्गों को फिर से लिखती है।"
      }
    ]
  },
  "features": {
    "title": "मूल वक्ता की तरह बोलने के लिए जो कुछ चाहिए, सब यहां है।",
    "cards": [
      {
        "title": "परिदृश्य इंजन",
        "description": "वास्तविक जीवन का अभ्यास करें: मैड्रिड में दिशा-निर्देश पूछना, तपस का ऑर्डर देना, या बोगोटा में टैक्सी के लिए बातचीत करना।"
      },
      {
        "title": "पता नहीं इसे कैसे कहें? बस सोफी से पूछो.",
        "description": "अब और मत फंसो. यदि आपको मौखिक रूप से बोलते समय कोई शब्द या वाक्यांश ढूंढने की आवश्यकता है, तो बस सोफी से पूछें।"
      },
      {
        "title": "बुद्धिमान",
        "description": "यदि आप नहीं जानते कि कुछ कैसे कहना है, तो संकोच न करें बस सोफी से पूछें।"
      },
      {
        "title": "निर्बाध बातचीत",
        "description": "त्वरित प्रतिक्रिया के साथ सहज बातचीत का आनंद लें।"
      },
      {
        "title": "ट्यूटर मोड",
        "description": "पूछें \"आपने वहां सबजंक्टिव का उपयोग क्यों किया?\" अंग्रेजी में कभी भी."
      }
    ],
    "correctionBefore": "यह शर्म की बात है.",
    "correctionAfter": "टेंगो वर्गुएन्ज़ा।"
  },
  "faq": {
    "title": "अक्सर पूछे जाने वाले सवाल",
    "subtitle": "अपने एआई ट्यूटर के साथ {language} में महारत हासिल करने के बारे में आपको जो कुछ जानने की जरूरत है।",
    "stillHaveQuestions": "अभी भी सवाल हैं?",
    "stillHaveQuestionsBody": "हमारी टीम आपकी learning journey में पूरी मदद करेगी।",
    "getInTouch": "संपर्क करें",
    "items": [
      {
        "question": "क्या सोफ़ी विभिन्न {language} बोलियाँ सिखाती है?",
        "answer": "हाँ! आप अपनी सेटिंग में {language} के विभिन्न क्षेत्रीय लहजों और बोलियों के बीच टॉगल कर सकते हैं। जिस विशिष्ट क्षेत्र पर आप ध्यान केंद्रित कर रहे हैं, उससे मेल खाने के लिए सोफी अपनी शब्दावली, सामान्य अभिव्यक्ति और उच्चारण को अनुकूलित करती है।"
      },
      {
        "question": "मैं पूरी तरह से नौसिखिया हूं। क्या यह बहुत कठिन है?",
        "answer": "बिल्कुल नहीं। सोफी को आपके विशिष्ट स्तर के अनुकूल बनाने के लिए डिज़ाइन किया गया है। यदि बातचीत बहुत जटिल है, तो आप उसे धीरे-धीरे बोलने, सरल शब्दों का उपयोग करने, या यहां तक ​​कि आपको आगे बढ़ने में मदद करने के लिए त्वरित अनुवाद प्रदान करने के लिए कह सकते हैं।"
      },
      {
        "question": "सोफी जटिल व्याकरण में कैसे मदद करती है?",
        "answer": "सोफी \"संदर्भ-प्रथम\" दृष्टिकोण का उपयोग करती है। अभ्यास के बजाय, वह आपको वास्तविक दुनिया के परिदृश्यों में रखती है जिसके लिए स्वाभाविक रूप से जटिल {language} व्याकरण की आवश्यकता होती है। यदि आप कोई गलती करते हैं, तो वह वास्तविक समय में सौम्य, रचनात्मक प्रतिक्रिया प्रदान करती है।"
      },
      {
        "question": "सोफ़ी किस प्लेटफ़ॉर्म पर उपलब्ध है?",
        "answer": "सोफी वर्तमान में आईओएस और एंड्रॉइड दोनों के लिए एक वेब एप्लिकेशन और एक मोबाइल ऐप के रूप में उपलब्ध है। आपकी प्रगति, कस्टम शब्दावली सूचियाँ और वार्तालाप इतिहास आपके सभी उपकरणों पर समन्वयित हैं।"
      },
      {
        "question": "क्या मैं विशिष्ट वार्तालाप विषयों का अभ्यास कर सकता हूँ?",
        "answer": "निश्चित रूप से। आप दर्जनों पूर्व निर्धारित परिदृश्यों में से चुन सकते हैं—जैसे किसी कैफे में ऑर्डर करना, कोई व्यावसायिक मीटिंग, या पहली डेट—या अपने स्वयं के कस्टम विषय बना सकते हैं। सोफी आपकी इच्छित लगभग किसी भी बातचीत को संभाल सकती है।"
      },
      {
        "question": "सोफ़ी कितनी भाषाएँ बोल सकती है?",
        "answer": "सोफी वर्तमान में विश्व की 20 प्रमुख भाषाओं का समर्थन करती है, और हम हर महीने और भाषाएँ जोड़ रहे हैं। सबसे सटीक और प्राकृतिक सीखने का अनुभव सुनिश्चित करने के लिए प्रत्येक भाषा को मूल-स्तरीय एआई मॉडल द्वारा समर्थित किया जाता है।"
      }
    ]
  },
  "loginPage": {
    "backToHome": "होम पर वापस",
    "copyrightSuffix": "सोफी एआई इंक.",
    "dailyProgress": "दैनिक प्रगति",
    "todayGoal": "आज का लक्ष्य",
    "progressLanguageLevel": "स्पैनिश • उन्नत",
    "progressMinutes": "15/20 मिनट",
    "testimonial": "सोफी ने मुझे पहले दिन से ही बोलने के लिए प्रेरित किया। यह अविश्वसनीय रूप से सहज, प्राकृतिक और प्रभावी है।",
    "testimonialAuthor": "एलेक्स चेन"
  },
  "loginForm": {
    "readyTitle": "Sophie से मिलने के लिए तैयार हैं?",
    "readySubtitle": "अभी बोलना शुरू करें, नीचे लॉग इन करें।",
    "email": "ईमेल",
    "emailPlaceholder": "sophie@example.com",
    "password": "पासवर्ड",
    "forgotPassword": "पासवर्ड भूल गए?",
    "signIn": "साइन इन",
    "orContinueWith": "या इसके साथ जारी रखें",
    "noAccount": "खाता नहीं है?",
    "signUpForBeta": "बीटा के लिए साइन अप करें"
  },
  "aboutPage": {
    "badge": "हमारी कहानी",
    "titlePrefix": "हमारे बारे में",
    "subtitle": "आपकी जेब में नेटिव स्पीकर",
    "sectionBeginning": "शुरुआत",
    "sectionApproach": "हमारा तरीका",
    "sectionFounders": "संस्थापक",
    "sectionForYou": "आपके लिए",
    "beginningP1": "SpeakWithSophie.ai का जन्म एक सरल विचार से हुआ था: वास्तविक प्रवाह वास्तविक बातचीत से आता है, याद रखने से नहीं। पारंपरिक भाषा सीखने के उपकरण अक्सर शिक्षार्थियों को शब्दों की सूची और अलग-अलग व्याकरण अभ्यासों में फंसा देते हैं - लेकिन हम जानते थे कि एक बेहतर तरीका होना चाहिए।",
    "beginningP2": "Sophie.ai में, हमारा मानना ​​है कि किसी अन्य भाषा में आत्मविश्वास का सबसे तेज़ रास्ता बुद्धिमान प्रतिक्रिया के साथ दैनिक बोलने का अभ्यास है जो प्राकृतिक और मानव जैसा लगता है। सोफी सिर्फ एक एआई नहीं है - वह एक बोलने वाली भागीदार है जो पहले दिन से ही वास्तविक दुनिया की बातचीत को सुनती है, अपनाती है और आपको वास्तविक दुनिया की बातचीत का अभ्यास करने में मदद करती है।",
    "approachP1": "हमारा दृष्टिकोण गहन संवाद, त्वरित सुधार और वैयक्तिकृत शिक्षण पथों के आसपास बनाया गया है। शब्दावली की सूचियों को दोहराने के बजाय, आप सार्थक बातचीत के माध्यम से बात करते हैं, प्रतिक्रिया देते हैं और अपने कौशल को बढ़ाते हैं।",
    "approachP2": "समय के साथ, Sophie.ai आपकी प्रगति को याद रखती है, आपके अनूठे पैटर्न को समझती है, और आपको तेजी से सुधार करने में मदद करने के लिए अभ्यास सत्र तैयार करती है।",
    "foundersP1": "हम लुइस अल्बर्टो ओल्गुइन रेयेस और अर्नेस्टो ओल्गुइन रोमन इस विश्वास के साथ इस मंच को आकार देते हैं कि किसी को भी नई भाषा में आत्मविश्वास से बोलने में सक्षम होना चाहिए - बिना किसी डर के, बिना निर्णय के, और बिना उबाऊ अभ्यास के। हमने हर जगह शिक्षार्थियों को साहसपूर्वक बोलने, अक्सर बोलने और स्वाभाविक रूप से बोलने के लिए सशक्त बनाने के लिए Sophie.ai का निर्माण किया।",
    "forYouP1": "चाहे आप यात्रा, काम, अध्ययन की तैयारी कर रहे हों, या बस वास्तविक बातचीत में प्रवाह चाहते हों, Sophie.ai आपके साथ अभ्यास करने के लिए यहां है - कभी भी, कहीं भी।",
    "closingBanner": "Sophie.ai में आपका स्वागत है।"
  },
  "methodologyPage": {
    "badge": "Sophie Method",
    "titlePrefix": "अधिगम का",
    "titleGradient": "विज्ञान",
    "subtitle": "हम गेमिफिकेशन हटाकर केवल असल भाषा अधिगम पर ध्यान देते हैं।",
    "quote": "\"भाषा कोई आनुवंशिक उपहार नहीं है, यह एक सामाजिक जीव है। यह केवल बोलने पर ही जीवित रहती है।\"",
    "quoteAuthor": "सोफी रिसर्च टीम",
    "principles": [
      {
        "title": "सक्रिय उत्पादन (i+1)",
        "description": "निष्क्रिय श्रवण से प्रवाह का निर्माण नहीं होता है। हमारा इंजन आपको अपने वर्तमान स्तर से थोड़ा ऊपर वाक्य बनाने के लिए मजबूर करता है, जिससे मस्तिष्क के भाषा केंद्रों में तेजी से अनुकूलन शुरू हो जाता है।"
      },
      {
        "title": "प्रासंगिक स्थानिक पुनरावृत्ति",
        "description": "हम सिर्फ शब्द नहीं दोहराते. हम नए संदर्भों में *पैटर्न* दोहराते हैं। यदि आप स्पैनिश सब्जेक्टिव के साथ संघर्ष करते हैं, तो सोफी इसे राजनीति के बारे में एक बहस में बुन देगी, फिर एक तारीख परिदृश्य में।"
      },
      {
        "title": "प्रभावशाली फ़िल्टर",
        "description": "डर सीखने में बाधा डालता है। एआई के साथ एक सुरक्षित, निर्णय-मुक्त वातावरण का अनुकरण करके, हम आपके कोर्टिसोल के स्तर को कम करते हैं, जिससे आपके मस्तिष्क को जोखिम लेने और जानकारी को 3 गुना तेजी से बनाए रखने की अनुमति मिलती है।"
      },
      {
        "title": "तत्काल प्रतिक्रिया लूप",
        "description": "न्यूरोप्लास्टिकिटी के लिए तत्काल त्रुटि सुधार की आवश्यकता होती है। गलती होते ही सोफी हस्तक्षेप करती है, बुरी आदत (जीवाश्मीकरण) शुरू होने से पहले तंत्रिका मार्ग को फिर से लिखती है।"
      }
    ]
  },
  "supportPage": {
    "badge": "सपोर्ट",
    "title": "हम आपकी कैसे मदद करें?",
    "subtitle": "Sophie के साथ सर्वश्रेष्ठ learning अनुभव के लिए हम यहां हैं।",
    "contactUs": "संपर्क करें",
    "emailSupport": "ईमेल सपोर्ट",
    "emailSupportDesc": "सामान्य पूछताछ, बग रिपोर्ट और सुविधा अनुरोधों के लिए।",
    "accountHelp": "अकाउंट सहायता",
    "accountHelpDesc": "लॉगिन, सदस्यता, या खाता सेटिंग से संबंधित समस्याएं.",
    "responseTime": "हम आम तौर पर 24 घंटों के भीतर जवाब देते हैं। अत्यावश्यक मुद्दों के लिए, कृपया अपनी ईमेल विषय पंक्ति में \"तत्काल\" शामिल करें।",
    "faqTitle": "अक्सर पूछे जाने वाले सवाल",
    "faqs": [
      {
        "q": "मैं सोफ़ी के साथ बातचीत कैसे शुरू करूँ?",
        "a": "ऐप खोलें, टॉक टैब पर जाएं, वह भाषा चुनें जिसे आप सीखना चाहते हैं और बोलना शुरू करने के लिए माइक्रोफ़ोन बटन दबाए रखें। सोफी वास्तविक समय में जवाब देगी।"
      },
      {
        "q": "सोफ़ी किन भाषाओं का समर्थन करती है?",
        "a": "सोफी वर्तमान में अंग्रेजी, स्पेनिश, फ्रेंच, जर्मन, जापानी, चीनी (मंदारिन) और हिंदी का समर्थन करती है - जल्द ही और भी भाषाएँ आने वाली हैं।"
      },
      {
        "q": "क्या मेरा ध्वनि डेटा संग्रहीत है?",
        "a": "फीडबैक देने के लिए आपकी आवाज़ को वास्तविक समय में संसाधित किया जाता है और इसे स्थायी रूप से संग्रहीत नहीं किया जाता है। पूर्ण विवरण के लिए हमारी गोपनीयता नीति देखें।"
      },
      {
        "q": "मैं अपना खाता कैसे मिटाऊ़?",
        "a": "You can request account deletion by emailing support@speakwithsophie.ai. All your data will be permanently removed within 30 days."
      },
      {
        "q": "क्या मैं सोफी का ऑफ़लाइन उपयोग कर सकता हूँ?",
        "a": "सोफी को एआई वार्तालापों को संसाधित करने और वास्तविक समय पर प्रतिक्रिया प्रदान करने के लिए इंटरनेट कनेक्शन की आवश्यकता होती है।"
      }
    ],
    "privacyPolicy": "गोपनीयता नीति",
    "termsOfService": "सेवा की शर्तें"
  },
  "notFoundPage": {
    "title": "Sophie चुप है।",
    "description": "जिस पेज की आप तलाश कर रहे हैं, वह मौजूद नहीं है।",
    "backToHome": "होम पर वापस"
  },
  "privacyPage": {
    "badge": "कानूनी",
    "title": "गोपनीयता नीति",
    "lastUpdated": "अंतिम अद्यतन: 13 जनवरी 2026",
    "infoCollectTitle": "1. जानकारी हम एकत्रित करते हैं",
    "infoCollectIntro": "हम अपने सभी उपयोगकर्ताओं को बेहतर सेवाएँ प्रदान करने के लिए जानकारी एकत्र करते हैं। यह भी शामिल है:",
    "infoItems": [
      {
        "label": "खाता डेटा",
        "desc": "नाम, ईमेल पता और पसंदीदा भाषाएँ"
      },
      {
        "label": "ध्वनि डेटा",
        "desc": "बोलने के अभ्यास के लिए वास्तविक समय में ऑडियो संसाधित (क्षणिक)"
      },
      {
        "label": "सीखने की प्रगति",
        "desc": "शब्दावली, व्याकरण आँकड़े और सत्र इतिहास"
      },
      {
        "label": "तकनीकी डाटा",
        "desc": "ऐप स्थिरता के लिए डिवाइस की जानकारी और उपयोग विश्लेषण"
      }
    ],
    "useDataTitle": "2. हम आपके डेटा का उपयोग कैसे करते हैं",
    "useDataIntro": "आपके डेटा का उपयोग आपके सीखने के अनुभव को निजीकृत करने, आपकी प्रगति को ट्रैक करने और हमारी एआई की सटीकता में सुधार करने के लिए किया जाता है। हम आपका व्यक्तिगत डेटा तीसरे पक्ष को नहीं बेचते हैं।",
    "voiceDataLabel": "ध्वनि डेटा:",
    "voiceDataBeforeFirstNot": "आपके ध्वनि डेटा का उपयोग विशेष रूप से वास्तविक समय में बोलने पर प्रतिक्रिया प्रदान करने के लिए किया जाता है। क र ते हैं।",
    "voiceDataAfterFirstNot": "अपना वॉयस डेटा बेचें। क र ते हैं।",
    "voiceDataAfterSecondNot": "सार्वजनिक एआई मॉडल को प्रशिक्षित करने के लिए अपनी वॉयस रिकॉर्डिंग का उपयोग करें। एआई प्रतिक्रियाएं उत्पन्न करने के लिए बातचीत और इनपुट को संसाधित किया जाता है और भाषा सीखने के अनुभव को बेहतर बनाने के लिए अज्ञात रूप में इसका उपयोग किया जा सकता है।",
    "dataSecurityTitle": "3. डेटा सुरक्षा",
    "dataSecurityBody": "हम आपकी जानकारी को अनधिकृत पहुंच, परिवर्तन, प्रकटीकरण या विनाश से बचाने के लिए उद्योग-मानक सुरक्षा उपाय लागू करते हैं। पारगमन में सभी डेटा को टीएलएस के माध्यम से एन्क्रिप्ट किया गया है, और बाकी डेटा को एईएस-256 का उपयोग करके एन्क्रिप्ट किया गया है। आपकी बातचीत की प्रतिलेख अलग-अलग कंटेनरों में संग्रहीत हैं और केवल आपके द्वारा ही पहुंच योग्य हैं।",
    "rightsTitle": "4. आपके अधिकार",
    "rightsBeforeEmail": "आपको किसी भी समय ऐप की खाता सेटिंग्स के माध्यम से या हमारी सहायता टीम से संपर्क करके अपनी व्यक्तिगत जानकारी तक पहुंचने, सही करने या हटाने का अधिकार है।",
    "rightsAfterEmail": ".",
    "retentionTitle": "5. डेटा प्रतिधारण एवं विलोपन",
    "retentionBody": "हम आपका व्यक्तिगत डेटा केवल तब तक ही रखते हैं जब तक हमारी सेवाएँ प्रदान करने के लिए आवश्यक हो। आप किसी भी समय हमसे संपर्क करके अपना खाता और सभी संबद्ध डेटा हटाने का अनुरोध कर सकते हैं। खाता हटाए जाने पर, आपका डेटा 30 दिनों के भीतर स्थायी रूप से हटा दिया जाएगा।",
    "thirdPartyTitle": "6. तृतीय-पक्ष सेवाएँ",
    "thirdPartyBody": "हम ऐप को संचालित करने के लिए सुपाबेस (प्रमाणीकरण और डेटाबेस), Google जेमिनी (एआई भाषा प्रसंस्करण), और एनालिटिक्स टूल सहित तृतीय-पक्ष सेवाओं का उपयोग करते हैं। ये सेवाएँ अपनी गोपनीयता नीतियों के अनुसार डेटा संसाधित करती हैं और डेटा प्रोसेसिंग समझौतों से बंधी होती हैं।",
    "childrenTitle": "7. बच्चों की गोपनीयता",
    "childrenBody": "स्पीक विद सोफी 13 वर्ष से कम उम्र के बच्चों के लिए निर्देशित नहीं है। हम जानबूझकर 13 वर्ष से कम उम्र के बच्चों से व्यक्तिगत जानकारी एकत्र नहीं करते हैं। यदि आप माता-पिता या अभिभावक हैं और मानते हैं कि आपके बच्चे ने हमें व्यक्तिगत डेटा प्रदान किया है, तो कृपया हमसे संपर्क करें ताकि हम उचित कार्रवाई कर सकें।",
    "changesTitle": "8. इस नीति में परिवर्तन",
    "changesBody": "हम इस गोपनीयता नीति को समय-समय पर अद्यतन कर सकते हैं। हम इस पृष्ठ पर नई नीति पोस्ट करके और \"अंतिम अद्यतन\" तिथि को अपडेट करके किसी भी महत्वपूर्ण परिवर्तन के बारे में आपको सूचित करेंगे। परिवर्तनों के बाद ऐप का आपका निरंतर उपयोग अद्यतन नीति की स्वीकृति माना जाता है।",
    "contactTitle": "9. हमसे संपर्क करें",
    "contactBeforeEmail": "यदि इस गोपनीयता नीति के बारे में आपके कोई प्रश्न हैं, तो कृपया हमसे यहां संपर्क करें",
    "contactAfterEmail": "."
  },
  "termsPage": {
    "badge": "कानूनी",
    "title": "सेवा की शर्तें",
    "lastUpdatedPrefix": "अंतिम अद्यतन:",
    "acceptanceTitle": "1. शर्तों की स्वीकृति",
    "acceptanceBody": "Sophie.ai (\"सेवा\") तक पहुंच और उपयोग करके, आप इन शर्तों से बंधे होने के लिए सहमत हैं। यदि आप शर्तों के किसी भी भाग से असहमत हैं, तो आप सेवा तक नहीं पहुँच सकते।",
    "usageTitle": "2. उपयोग दिशानिर्देश",
    "permittedTitle": "अनुमत उपयोग",
    "permittedBody": "व्यक्तिगत भाषा सीखना, शैक्षिक उद्देश्य और सामान्य बातचीत का अभ्यास।",
    "prohibitedTitle": "निषिद्ध उपयोग",
    "prohibitedBody": "स्वचालित स्क्रैपिंग, एआई मॉडल को रिवर्स इंजीनियरिंग करना, या उत्पीड़न/घृणास्पद भाषण के लिए सेवा का उपयोग करना।",
    "subscriptionsTitle": "3. सदस्यता एवं बिलिंग",
    "subscriptionsBody": "Sophie.ai मुफ़्त और सशुल्क स्तर प्रदान करता है। सशुल्क सदस्यता का बिल मासिक, त्रैमासिक, अर्ध-वार्षिक या वार्षिक रूप से लिया जाता है। आप किसी भी समय रद्द कर सकते हैं, और आपकी बिलिंग अवधि के अंत तक पहुंच जारी रहेगी।",
    "refundLabel": "भुगतान वापसी की नीति:",
    "refundBody": "हम पहली बार सेवा से असंतुष्ट ग्राहकों के लिए 14 दिन की मनी-बैक गारंटी प्रदान करते हैं।",
    "ipTitle": "4. बौद्धिक संपदा",
    "ipBody": "सेवा और इसकी मूल सामग्री (उपयोगकर्ता द्वारा उत्पन्न वॉयस डेटा को छोड़कर), सुविधाएँ और कार्यक्षमता Sophie.ai की विशिष्ट संपत्ति हैं।",
    "terminationTitle": "5. समाप्ति",
    "terminationBody": "हम बिना किसी पूर्व सूचना के तुरंत अपनी सेवा तक पहुंच समाप्त करने या निलंबित करने का अधिकार सुरक्षित रखते हैं, ऐसे आचरण के लिए जो हमें लगता है कि इन शर्तों का उल्लंघन करता है या सेवा के अन्य उपयोगकर्ताओं के लिए हानिकारक है।"
  },
  "hero": {
    "newDialectsAdded": "नया: {language} की बोलियाँ जुड़ीं",
    "dontJust": "सिर्फ़",
    "intro": "दिमाग में अनुवाद न करें, सीधा Sophie से बात करें।",
    "hearSophie": "Sophie को सुनें",
    "conversation": "बातचीत",
    "naturalCorrection": "प्राकृतिक सुधार",
    "accentAccuracy": "उच्चारण सटीकता"
  },
  "problemSolution": {
    "titlePrefix": "सिर्फ़ रटना",
    "titleStrike": "काम नहीं करता",
    "titleSuffix": "असली बातचीत काम करती है।",
    "traditionalMethod": "पारंपरिक तरीका",
    "traditionalSubtitle": "शब्दावली और क्रिया तालिकाओं को याद करना",
    "traditionalBullets": [
      "बुनियादी शब्दों, वाक्यांशों और व्याकरण को याद रखना",
      "अधिकांश समय बेकार शब्दावली और जटिल संयुग्मन और काल",
      "तुम सब कुछ भूल जाओ"
    ],
    "speakingWithSophie": "Sophie के साथ बोलना",
    "immersionInstantCorrection": "Immersion और Instant Correction",
    "solutionBullets": [
      "तुरंत प्रतिक्रिया प्राप्त करें",
      "बोलने का कौशल तुरंत विकसित हो गया",
      "अब अभ्यास के लिए किसी मानव देशी वक्ता की आवश्यकता नहीं है, आपके पास सोफी है।"
    ],
    "resultLabel": "परिणाम:",
    "resultValue": "30 दिनों में धाराप्रवाह आत्मविश्वास"
  },
  "pricing": {
    "titlePrefix": "अपनी",
    "titleSuffix": "fluency में निवेश करें।",
    "cheaperThanTutor": "एक घंटे के private tutor से भी सस्ता।",
    "freeTierName": "एम एंड जी",
    "freeTierSubtitle": "सोफी से मिलें और नमस्कार करें",
    "freePriceSuffix": "7 दिन",
    "freeFeatures": [
      "15 भाषाओं में ऐप",
      "सोफी के साथ 50+ भाषाओं में स्वाभाविक बातचीत",
      "सोफी का किसी भी उपलब्ध भाषा से अनुवाद",
      "सभी उपलब्ध भाषाओं में असीमित शब्दावली बचतकर्ता।",
      "100+ वार्तालाप परिदृश्य"
    ],
    "premiumTierName": "एस सी एफ",
    "premiumBadge": "लोकप्रिय",
    "premiumTierSubtitle": "सोफी करीबी दोस्त",
    "premiumRegularPriceSuffix": "माह नियमित मूल्य",
    "premiumLaunchPrice": "$14/माह लॉन्च कीमत",
    "premiumFeatures": [
      "नि:शुल्क परीक्षण में सब कुछ शामिल है।",
      "24/7 ग्राहक सहायता। गारंटीशुदा.",
      "अप्रतिबंधित ऐप उपयोग",
      "रणनीतिक राजदूत विकल्प."
    ],
    "proTierName": "एसबीबी",
    "proTierSubtitle": "सोफी बेस्ट बडी",
    "bestValue": "सबसे अच्छी वैल्यू",
    "proMonth": "महीना",
    "proBilledEvery": "प्रत्येक {cycle} पर ${total} का बिल भेजा गया",
    "proCycle6": "6 महीने",
    "proCycle12": "12 महीने",
    "proCycle18": "18 महीने",
    "proCycle24": "24 माह",
    "proTab6": "6माह",
    "proTab12": "12मो",
    "proTab18": "18मो",
    "proTab24": "24मो",
    "saveVsMonthly": "मासिक बनाम {percent}% बचाएं",
    "proFeatures": [
      "सोफी क्लोज फ्रेंड में सब कुछ",
      "प्राथमिकता 24/7 समर्थन",
      "विशिष्ट सामग्री और शीघ्र पहुंच",
      "कस्टम शिक्षण पथ",
      "समर्पित खाता प्रबंधक"
    ],
    "joinWaitlist": "प्रतीक्षा सूची में शामिल हों",
    "startFreeTrial": "निशुल्क आजमाइश शुरु करें"
  },
  "testimonials": {
    "title": "सिर्फ़ हमारी बात पर मत जाइए।",
    "items": [
      {
        "quote": "मैंने हाई स्कूल में {language} के 4 साल बिताए लेकिन टैको का ऑर्डर नहीं दे सका। सोफी ने मेरे बोलने के डर को दो सप्ताह में ठीक कर दिया।",
        "author": "James T.",
        "role": "यात्री"
      },
      {
        "quote": "वास्तविक दुनिया का संदर्भ अंततः समझ में आता है। सोफी ने इसे तब समझाया जब हम {nativeLanguage} में एक दृश्य की भूमिका निभा रहे थे।",
        "author": "Sarah M.",
        "role": "प्रवासी"
      },
      {
        "quote": "उच्चारण सुधार क्रूर लेकिन प्रभावी है। आख़िरकार मैंने पाठ्यपुस्तक की तरह दिखना बंद कर दिया और स्थानीय की तरह लगने लगा।",
        "author": "David K.",
        "role": "डिजिटल खानाबदोश"
      }
    ]
  },
  "comparisonTable": {
    "title": "अपने विकल्प तुलना करें।",
    "subtitle": "देखें कि सोफी पारंपरिक शिक्षण विधियों और अन्य ऐप्स के सामने कैसे खड़ी होती है। अंतर केवल कीमत में नहीं है - यह परिणामों में है।",
    "columns": {
      "feature": "विशेषता",
      "sophie": "सोफी.एआई",
      "apps": "गेमिफ़ाइड ऐप्स",
      "tutor": "निजी शिक्षक"
    },
    "rows": [
      {
        "name": "सक्रिय बोलने का समय",
        "sophie": "असीमित",
        "apps": "0 मिनट (टैपिंग)",
        "tutor": "45 मिनट/सत्र"
      },
      {
        "name": "प्रति माह लागत",
        "sophie": "$12",
        "apps": "$0 - $15",
        "tutor": "$200+"
      },
      {
        "name": "प्रतिक्रिया गति",
        "sophie": "तत्काल (<1s)",
        "apps": "त्वरित (बाइनरी)",
        "tutor": "विलंबित (विनम्र)"
      },
      {
        "name": "प्रासंगिक स्मृति",
        "sophie": "स्थायी",
        "apps": "कोई नहीं",
        "tutor": "मानव स्मृति"
      },
      {
        "name": "उपलब्धता",
        "sophie": "24/7",
        "apps": "24/7",
        "tutor": "अनुसूचित"
      },
      {
        "name": "चिंता कारक",
        "sophie": "शून्य",
        "apps": "कम",
        "tutor": "उच्च"
      }
    ],
    "footer": "यूएस/ईयू में पेशेवर भाषा ट्यूटर्स के लिए औसत बाजार दरों के आधार पर।"
  },
  "productTour": {
    "title": "कॉन्फिडेंस बूस्ट",
    "subtitle": "Sophie के साथ बोलना आपका आत्मविश्वास कैसे बढ़ाता है, देखें।",
    "tabs": [
      {
        "id": "speak",
        "label": "स्वाभाविक बोलना",
        "desc": "बस बात करो. कोई दोहन शब्द नहीं."
      },
      {
        "id": "correct",
        "label": "तत्काल प्रतिक्रिया",
        "desc": "सुधार जो टिके रहते हैं।"
      },
      {
        "id": "track",
        "label": "अपना आत्मविश्वास बढ़ाएँ",
        "desc": "सोफी किसी को जज नहीं करती. गलतियाँ करने के लिए स्वतंत्र महसूस करें"
      }
    ],
    "speakQuote": "\"कृपया मैं एक कॉफ़ी ऑर्डर करना चाहूँगा।\"",
    "suggestionLabel": "सुझाव",
    "correctionLine": "\"मैं चाहूंगा\" की तुलना में \"मैं चाहूंगा\" अधिक नरम और विनम्र है।",
    "correctionHint": "प्रवाह मेट्रिक्स",
    "metrics": [
      {
        "label": "शब्दावली",
        "value": 85,
        "color": "bg-pink-500"
      },
      {
        "label": "उच्चारण",
        "value": 62,
        "color": "bg-orange-500"
      },
      {
        "label": "आत्मविश्वास",
        "value": 94,
        "color": "bg-cyan-500"
      }
    ],
    "fluencyMetrics": "प्रवाह मेट्रिक्स"
  },
  "personalizationEngine": {
    "title": "आपके व्यवहार पर बना premium learning engine।",
    "subtitle": "अधिकांश ऐप्स हर सत्र में रीसेट हो जाते हैं। सोफी आपके भाषा पैटर्न का एक सतत, विकसित मॉडल बनाती है।",
    "graphTitle": "लाइव लर्निंग ग्राफ़",
    "graphUpdated": "हर बातचीत के बाद अपडेट किया गया",
    "graphRealtime": "रियल टाइम",
    "stats": [
      {
        "label": "आत्मविश्वास",
        "helper": "बातचीत के लिए तैयार"
      },
      {
        "label": "शब्दावली",
        "helper": "उद्योग की शर्तें ट्रैक की गईं"
      },
      {
        "label": "सुर",
        "helper": "प्रसंग समायोजित"
      },
      {
        "label": "प्रवाह",
        "helper": "साप्ताहिक सुधार"
      },
      {
        "label": "लहज़ा",
        "helper": "उच्चारण मानचित्र"
      }
    ],
    "steps": [
      {
        "title": "सतत स्मृति",
        "desc": "पिछले सप्ताह की गलतियाँ आज के लिए अभ्यास बन जाती हैं। कुछ भी नहीं खोया है."
      },
      {
        "title": "अनुकूली कठिनाई",
        "desc": "हमेशा चुनौतीपूर्ण, कभी कुचलने वाला नहीं। यह आपके आत्मविश्वास से मेल खाता है।"
      },
      {
        "title": "प्रसंग जागरूकता",
        "desc": "सोफी जानती है कि आप एक 'सॉफ़्टवेयर इंजीनियर' हैं जिसे 'हाइकिंग' पसंद है, कोई सामान्य उपयोगकर्ता नहीं।"
      }
    ]
  },
  "socialProof": {
    "title": "अगली पीढ़ी के polyglots को शक्ति दे रहा है"
  },
  "cookieBanner": {
    "title": "कुकीज़ और गोपनीयता",
    "description": "हम यह सुनिश्चित करने के लिए कुकीज़ का उपयोग करते हैं कि सोफी आपकी प्रगति और सेटिंग्स को याद रखे। हम आपकी निजता का सम्मान करते हैं.",
    "accept": "स्वीकार करना",
    "decline": "गिरावट"
  },
  "blogPage": {
    "titleLine1": "प्रवाह",
    "titleLine2": "लकड़ी का लट्ठा।",
    "subtitle": "भाषा विज्ञान, एआई और बातचीत की कला पर अंतर्दृष्टि।",
    "readArticle": "आलेख पढ़ें",
    "loadMoreArticles": "अधिक लेख लोड करें",
    "posts": [
      {
        "slug": "why-you-are-still-translating",
        "title": "आप अभी भी अपने दिमाग में अनुवाद क्यों कर रहे हैं?",
        "excerpt": "संज्ञानात्मक बाधा जो प्रवाह को रोकती है, और प्रत्यक्ष विधि का उपयोग करके इसे कैसे तोड़ें।",
        "category": "क्रियाविधि",
        "date": "24 अक्टूबर, 2023",
        "readTime": "5 मिनट पढ़ें"
      },
      {
        "slug": "myth-of-language-gene",
        "title": "'भाषा जीन' का मिथक",
        "excerpt": "नए शोध से पता चलता है कि अनुकूलनशीलता एक कौशल है, प्रतिभा नहीं। यहां बताया गया है कि अपनी न्यूरोप्लास्टिकिटी को कैसे प्रशिक्षित करें।",
        "category": "विज्ञान",
        "date": "12 नवंबर, 2023",
        "readTime": "8 मिनट पढ़ें"
      },
      {
        "slug": "mexican-vs-spanish-slang",
        "title": "मैक्सिकन बनाम स्पैनिश स्लैंग: एक उत्तरजीविता गाइड",
        "excerpt": "मेक्सिको में 'कोगर' मत कहें। गंभीरता से। क्षेत्रीय भिन्नताओं का विश्लेषण.",
        "category": "संस्कृति",
        "date": "दिसम्बर 05, 2023",
        "readTime": "6 मिनट पढ़ें"
      },
      {
        "slug": "how-sophie-uses-llms",
        "title": "सोफी एलएलएम का अलग ढंग से उपयोग कैसे करती है",
        "excerpt": "हम सिर्फ एक रैपर का उपयोग नहीं करते. भाषा अधिग्रहण के लिए हमारी कस्टम फ़ाइन-ट्यूनिंग प्रक्रिया के अंदर।",
        "category": "इंजीनियरिंग",
        "date": "15 जनवरी 2024",
        "readTime": "12 मिनट पढ़ें"
      }
    ]
  },
  "blogPostPage": {
    "backToLog": "लॉग पर वापस जाएँ",
    "category": "क्रियाविधि",
    "date": "24 अक्टूबर, 2023",
    "readTime": "5 मिनट पढ़ें",
    "titleLine1": "आप अभी भी क्यों हैं",
    "titleLine2": "आपके दिमाग में अनुवाद.",
    "authorName": "Dr. Elena Rostova",
    "authorRole": "भाषाविज्ञान के प्रमुख",
    "lead": "आप भावना को जानते हैं. कोई आपसे स्पैनिश में एक सरल प्रश्न पूछता है, और आपका मस्तिष्क ठिठक जाता है। आप शब्दों को सुनते हैं, उनका अंग्रेजी में अनुवाद करते हैं, अंग्रेजी में उत्तर तैयार करते हैं, उसका स्पेनिश में अनुवाद करते हैं, अपने दिमाग में व्याकरण तालिकाओं की जांच करते हैं और अंत में बहुत देर से बोलते हैं।",
    "sectionCognitiveTitle": "संज्ञानात्मक बाधा",
    "sectionCognitiveP1": "इस प्रक्रिया को अनुवाद निर्भरता कहा जाता है, और यह प्रवाह के सबसे बड़े हत्यारों में से एक है। पारंपरिक भाषा शिक्षा अक्सर संदर्भ के बजाय शब्दावली सूचियों और व्याकरण नियमों पर ध्यान केंद्रित करके इस आदत को प्रशिक्षित करती है।",
    "sectionCognitiveP2": "जब आप सीखते हैं कि \"गाटो\" का अर्थ \"बिल्ली\" है, तो आप एक तंत्रिका निर्भरता पैदा करते हैं। आप पहले अपनी मूल भाषा से गुजरे बिना अवधारणा तक सीधे नहीं पहुंच सकते।",
    "approachTitle": "सोफी दृष्टिकोण",
    "approachBody": "हम प्रत्यक्ष विधि का उपयोग करते हैं। हम आपको एक छवि दिखाते हैं या आपको वास्तविक परिदृश्य में रखते हैं और लक्ष्य भाषा में सीधे बातचीत के लिए बाध्य करते हैं। कोई अंग्रेजी पुल नहीं और कोई अनुवाद बफ़र नहीं।",
    "sectionNeuroTitle": "न्यूरोप्लास्टिकिटी और तनाव",
    "sectionNeuroP1": "डर भी मायने रखता है. सामाजिक दबाव बढ़ने पर मस्तिष्क का भय केंद्र अमिगडाला सक्रिय हो जाता है। कक्षाओं या वास्तविक दुनिया की सेटिंग में, गलत दिखने का डर भाषा उत्पादन को बंद कर सकता है।",
    "sectionNeuroP2": "इसीलिए AI एक मजबूत अभ्यास भागीदार हो सकता है। सोफी आपको जज नहीं करती और न ही आपको परेशान करती है। वह सुधार करती है और आगे बढ़ती है, जो भावात्मक फ़िल्टर को कम करती है और आपके मस्तिष्क को जोखिम लेने में मदद करती है।",
    "quote": "प्रवाह का मतलब हर शब्द को जानना नहीं है। यह पुनर्प्राप्ति गति के बारे में है, और अनुवाद सबसे धीमी पुनर्प्राप्ति विधि है।",
    "sectionBreakingTitle": "आदत को छोड़ना",
    "sectionBreakingP1": "अनुवाद निर्भरता को तोड़ने के लिए, केवल स्वागत नहीं बल्कि उत्पादन का अभ्यास करें। आपको बहुत कुछ बोलना है.",
    "breakingList": [
      "अपनी मूल भाषा में उपशीर्षक का प्रयोग बंद करें।",
      "अपने परिवेश को अपनी लक्षित भाषा में शारीरिक या मानसिक रूप से लेबल करें।",
      "वास्तविक वार्तालाप की तरह केवल-ऑडियो प्रसंस्करण को बाध्य करने के लिए सोफी के हैंड्स-फ़्री मोड का उपयोग करें।"
    ],
    "ctaTitle": "अनुवाद बंद करने के लिए तैयार हैं?",
    "ctaSubtitle": "आज अनुवाद बाधा को तोड़ते हुए 10,000+ छात्रों से जुड़ें।",
    "ctaButton": "शीघ्र पहुंच प्राप्त करें"
  },
  "articlePlayer": {
    "listenToArticle": "इस लेख को सुनें",
    "audioVersion": "ऑडियो संस्करण",
    "duration": "5:23"
  },
  "signupModal": {
    "title": "प्रारंभिक पहुंच सूची में शामिल हों",
    "description": "सोफी फिलहाल प्राइवेट बीटा में है। आज ही अपना स्थान आरक्षित करें.",
    "emailLabel": "मेल पता",
    "emailPlaceholder": "hello@example.com",
    "learnLabel": "मैं सीखना चाहता हूँ",
    "languagePlaceholder": "भाषा",
    "levelLabel": "मेरा लेवल है",
    "levelPlaceholder": "स्तर",
    "levelBeginner": "शुरुआती",
    "levelIntermediate": "मध्यवर्ती",
    "levelAdvanced": "विकसित",
    "goalLabel": "मुख्य लक्ष्य",
    "goalPlaceholder": "एक लक्ष्य चुनें",
    "goalTravel": "आत्मविश्वास से यात्रा करें",
    "goalWork": "कार्य एवं व्यवसाय",
    "goalExams": "स्कूल के लिए अध्ययन उपकरण",
    "goalFamilyDating": "परिवार, दोस्त या डेटिंग",
    "goalMigration": "देश प्रवास",
    "joining": "शामिल हो रहे हैं...",
    "joinWaitlist": "प्रतीक्षा सूची में शामिल हों",
    "successTitle": "आप सूची में हैं!",
    "successDescription": "हमने एक पुष्टिकरण ईमेल भेज दिया है",
    "close": "बंद करना"
  },
  "demoModal": {
    "dialogTitle": "सोफी एआई लाइव सिमुलेशन डेमो",
    "liveSimulation": "लाइव सिमुलेशन",
    "listening": "सुनना...",
    "speakClearly": "अपने माइक्रोफ़ोन में स्पष्ट रूप से बोलें",
    "analyzing": "व्याकरण और उच्चारण का विश्लेषण...",
    "userInputSample": "एल म्यूजियो एस सेराडो अहोरा।",
    "correctionLabel": "सुधार",
    "correctionSentence": "एल म्यूजियो एस्टा सेराडो अहोरा।",
    "correctionHeading": "सेर बनाम एस्टार:",
    "correctionBody": "बंद होना एक अवस्था है, कोई स्थायी लक्षण नहीं। एस्टार का प्रयोग करें.",
    "tryAnother": "दूसरा प्रयास करें",
    "tryLiveDemo": "लाइव डेमो आज़माएं"
  }
};

const es: Messages = {
  "navbar": {
    "science": "Ciencia",
    "howItWorks": "Cómo funciona",
    "features": "Funciones",
    "pricing": "Precios",
    "faq": "Preguntas frecuentes",
    "login": "Iniciar sesión",
    "whatsapp": "WhatsApp",
    "menu": "Menú",
    "closeMenu": "Cerrar menú",
    "selectLanguage": "Seleccionar idioma"
  },
  "footer": {
    "ctaTitle": "Solo pregúntale a Sophie",
    "ctaSubtitle": "Únete a miles de estudiantes que dejaron de memorizar y empezaron a hablar.",
    "meetSophie": "Conoce a Sophie",
    "product": "Producto",
    "company": "Empresa",
    "legal": "Legal",
    "about": "Acerca de",
    "privacy": "Política de privacidad",
    "terms": "Términos del servicio",
    "support": "Soporte",
    "allRightsReserved": "Todos los derechos reservados."
  },
  "era": {
    "subtitle": "Tu asistente personal de idiomas.",
    "line1": "Cualquier idioma. En cualquier momento. En cualquier lugar",
    "line2": "Habla con Sophie para lograr fluidez rápida y efectiva",
    "meetButton": "Conoce a Sophie",
    "languageTitle": "Sophie puede ayudarte en más de 50 idiomas",
    "learnAnyLanguage": "Aprende cualquier idioma",
    "seeMore": "Ver más",
    "seeLess": "Ver menos"
  },
  "howItWorks": {
    "title": "El ciclo de fluidez",
    "subtitle": "De bloqueado a fluido en tres pasos cognitivos.",
    "startTalking": "Empieza a hablar",
    "steps": [
      {
        "step": "Paso 01",
        "title": "Inyección de contexto",
        "description": "Viajar, trabajar, tener citas o discutir con el propietario. Sophie adapta la simulación a tu vida real, no a un libro de texto."
      },
      {
        "step": "Paso 02",
        "title": "Simulación activa",
        "description": "Sin opción múltiple. Sin palabras de tapping. Sólo habla. Sophie responde a tu nivel, empujándote ligeramente cada vez (i+1)."
      },
      {
        "step": "Paso 03",
        "title": "Reescritura neuronal",
        "description": "Obtenga correcciones instantáneas de pronunciación y estilo. Sophie reescribe tus vías neuronales antes de que aparezcan los malos hábitos."
      }
    ]
  },
  "features": {
    "title": "Todo lo que necesitas para sonar como nativo.",
    "cards": [
      {
        "title": "Motor de escenarios",
        "description": "Practica la vida real: preguntando direcciones en Madrid, pidiendo tapas o negociando un taxi en Bogotá."
      },
      {
        "title": "¿No sabes cómo decirlo? Pregúntale a Sofía.",
        "description": "No te quedes estancado más. Si necesita encontrar una palabra o frase mientras verbaliza, pregúntele a Sophie."
      },
      {
        "title": "ELEGANTE",
        "description": "Si no sabes cómo decir algo, no dudes en preguntarle a Sophie."
      },
      {
        "title": "Conversación fluida",
        "description": "Disfrute de tener conversaciones fluidas con comentarios instantáneos."
      },
      {
        "title": "Modo tutor",
        "description": "Pregunte \"¿Por qué usaste el subjuntivo allí?\" en inglés en cualquier momento."
      }
    ],
    "correctionBefore": "Estoy avergonzado.",
    "correctionAfter": "Tengo vergüenza."
  },
  "faq": {
    "title": "Preguntas frecuentes",
    "subtitle": "Todo lo que necesitas saber para dominar {language} con tu tutor de IA.",
    "stillHaveQuestions": "¿Todavía tienes preguntas?",
    "stillHaveQuestionsBody": "Nuestro equipo está aquí para ayudarte a aprovechar al máximo tu aprendizaje.",
    "getInTouch": "Contáctanos",
    "items": [
      {
        "question": "¿Sophie enseña diferentes {language} dialectos?",
        "answer": "¡Sí! Puedes alternar entre diferentes acentos regionales y dialectos de {language} en tu configuración. Sophie adapta su vocabulario, expresiones comunes y pronunciación para que coincidan con la región específica en la que te estás concentrando."
      },
      {
        "question": "Soy un completo principiante. ¿Es esto demasiado difícil?",
        "answer": "De nada. Sophie está diseñada para adaptarse a tu nivel específico. Si una conversación es demasiado compleja, simplemente puedes pedirle que disminuya la velocidad, use palabras más simples o incluso que proporcione traducciones instantáneas para ayudarte a seguirla."
      },
      {
        "question": "¿Cómo ayuda Sophie con la gramática compleja?",
        "answer": "Sophie utiliza un enfoque de \"primero el contexto\". En lugar de ejercicios, te coloca en escenarios del mundo real que naturalmente requieren una gramática {language} compleja. Si comete un error, ella le brindará comentarios amables y constructivos en tiempo real."
      },
      {
        "question": "¿En qué plataformas está disponible Sophie?",
        "answer": "Sophie está actualmente disponible como aplicación web y aplicación móvil para iOS y Android. Su progreso, listas de vocabulario personalizadas e historial de conversaciones se sincronizan en todos sus dispositivos."
      },
      {
        "question": "¿Puedo practicar temas de conversación específicos?",
        "answer": "Definitivamente. Puede elegir entre docenas de escenarios preestablecidos (como hacer un pedido en una cafetería, una reunión de negocios o una primera cita) o crear sus propios temas personalizados. Sophie puede manejar casi cualquier conversación que quieras tener."
      },
      {
        "question": "¿Cuántos idiomas puede hablar Sophie?",
        "answer": "Actualmente, Sophie admite 20 idiomas importantes del mundo y agregamos más cada mes. Cada idioma está respaldado por modelos de inteligencia artificial de nivel nativo para garantizar la experiencia de aprendizaje más precisa y natural posible."
      }
    ]
  },
  "loginPage": {
    "backToHome": "Volver al inicio",
    "copyrightSuffix": "Sophie AI Inc.",
    "dailyProgress": "Progreso diario",
    "todayGoal": "Meta de hoy",
    "progressLanguageLevel": "Español • Avanzado",
    "progressMinutes": "15/20 minutos",
    "testimonial": "Sophie me empujó a hablar desde el día 1. Es increíblemente perfecto, natural y eficaz.",
    "testimonialAuthor": "Alex Chen"
  },
  "loginForm": {
    "readyTitle": "¿Listo para conocer a Sophie?",
    "readySubtitle": "Habla ahora, ingresa tus datos abajo.",
    "email": "Correo",
    "emailPlaceholder": "sophie@ejemplo.com",
    "password": "Contraseña",
    "forgotPassword": "¿Olvidaste tu contraseña?",
    "signIn": "Iniciar sesión",
    "orContinueWith": "O continúa con",
    "noAccount": "¿No tienes cuenta?",
    "signUpForBeta": "Regístrate para la beta"
  },
  "aboutPage": {
    "badge": "Nuestra historia",
    "titlePrefix": "Sobre",
    "subtitle": "Un hablante nativo en tu bolsillo",
    "sectionBeginning": "El inicio",
    "sectionApproach": "Nuestro enfoque",
    "sectionFounders": "Fundadores",
    "sectionForYou": "Para ti",
    "beginningP1": "SpeakWithSophie.ai nació de una idea simple: la fluidez real viene de conversaciones reales, no de memorizar listas.",
    "beginningP2": "En Sophie.ai creemos que la forma más rápida de ganar confianza es practicar hablando cada día con retroalimentación inteligente.",
    "approachP1": "Nuestro método se basa en diálogo inmersivo, corrección inmediata y rutas de aprendizaje personalizadas.",
    "approachP2": "Con el tiempo, Sophie.ai recuerda tu progreso y adapta la práctica para que mejores más rápido.",
    "foundersP1": "Creamos esta plataforma con la convicción de que cualquiera puede hablar un nuevo idioma con confianza, sin miedo y sin juicios.",
    "forYouP1": "Ya sea para viajar, trabajar, estudiar o simplemente conversar con fluidez real, Sophie.ai está contigo en cualquier momento.",
    "closingBanner": "Bienvenido a Sophie.ai: un hablante nativo en tu bolsillo."
  },
  "methodologyPage": {
    "badge": "Método Sophie",
    "titlePrefix": "La ciencia de la",
    "titleGradient": "adquisición.",
    "subtitle": "No inventamos el aprendizaje de idiomas. Solo quitamos la gamificación para centrarnos en cómo el cerebro realmente se reconfigura.",
    "quote": "\"El lenguaje no es un don genético, es un organismo social. Vive sólo cuando se habla\".",
    "quoteAuthor": "Equipo de Investigación Sophie",
    "principles": [
      {
        "title": "Producción Activa (i+1)",
        "description": "Escuchar pasivamente no crea fluidez. Nuestro motor te empuja a construir frases un poco por encima de tu nivel actual."
      },
      {
        "title": "Repetición Espaciada Contextual",
        "description": "No repetimos solo palabras. Repetimos patrones en nuevos contextos para consolidar gramática y expresiones."
      },
      {
        "title": "Filtro Afectivo",
        "description": "El miedo bloquea el aprendizaje. Un entorno seguro y sin juicio reduce el estrés y mejora la retención."
      },
      {
        "title": "Bucle de Retroalimentación Inmediata",
        "description": "La neuroplasticidad requiere corrección instantánea para evitar fosilizar errores."
      }
    ]
  },
  "supportPage": {
    "badge": "Soporte",
    "title": "¿Cómo podemos ayudarte?",
    "subtitle": "Estamos aquí para ayudarte a aprovechar al máximo tu aprendizaje con Sophie.",
    "contactUs": "Contáctanos",
    "emailSupport": "Soporte por correo",
    "emailSupportDesc": "Consultas generales, errores y solicitudes de funciones.",
    "accountHelp": "Ayuda con la cuenta",
    "accountHelpDesc": "Problemas de inicio de sesión, suscripción o configuración de cuenta.",
    "responseTime": "Normalmente respondemos en 24 horas. Para casos urgentes, incluye \"URGENTE\" en el asunto.",
    "faqTitle": "Preguntas frecuentes",
    "faqs": [
      {
        "q": "¿Cómo inicio una conversación con Sophie?",
        "a": "Abre la app, ve a la pestaña Talk, elige el idioma y mantén presionado el micrófono para hablar."
      },
      {
        "q": "¿Qué idiomas admite Sophie?",
        "a": "Sophie admite inglés, español, francés, alemán, japonés, chino mandarín e hindi; y seguiremos añadiendo más."
      },
      {
        "q": "¿Se almacena mi voz?",
        "a": "Tu voz se procesa en tiempo real para dar retroalimentación y no se guarda de forma permanente."
      },
      {
        "q": "¿Cómo elimino mi cuenta?",
        "a": "Solicita la eliminación por correo a support@speakwithsophie.ai. Tus datos se eliminarán en 30 días."
      },
      {
        "q": "¿Puedo usar Sophie sin conexión?",
        "a": "No. Sophie requiere internet para procesar conversaciones con IA y feedback en tiempo real."
      }
    ],
    "privacyPolicy": "Política de privacidad",
    "termsOfService": "Términos del servicio"
  },
  "notFoundPage": {
    "title": "Sophie se quedó sin palabras.",
    "description": "La página que buscas no existe, o tal vez todavía no aprendió a hablar.",
    "backToHome": "Volver al inicio"
  },
  "privacyPage": {
    "badge": "Legal",
    "title": "Política de privacidad",
    "lastUpdated": "Última actualización: 13 de enero de 2026",
    "infoCollectTitle": "1. Información que recopilamos",
    "infoCollectIntro": "Recopilamos información para brindar mejores servicios a todos nuestros usuarios. Esto incluye:",
    "infoItems": [
      {
        "label": "Datos de cuenta",
        "desc": "Nombre, dirección de correo electrónico e idiomas preferidos"
      },
      {
        "label": "Datos de voz",
        "desc": "Audio procesado en tiempo real para práctica oral (transitorio)"
      },
      {
        "label": "Progreso del aprendizaje",
        "desc": "Vocabulario, estadísticas gramaticales e historial de sesiones."
      },
      {
        "label": "Datos técnicos",
        "desc": "Información del dispositivo y análisis de uso para la estabilidad de la aplicación"
      }
    ],
    "useDataTitle": "2. Cómo usamos tus datos",
    "useDataIntro": "Sus datos se utilizan para personalizar su experiencia de aprendizaje, realizar un seguimiento de su progreso y mejorar la precisión de nuestra IA. No vendemos sus datos personales a terceros.",
    "voiceDataLabel": "Datos de voz:",
    "voiceDataBeforeFirstNot": "Sus datos de voz se utilizan exclusivamente para proporcionar comentarios de voz en tiempo real. nosotros hacemos",
    "voiceDataAfterFirstNot": "vende tus datos de voz. nosotros hacemos",
    "voiceDataAfterSecondNot": "Utilice sus grabaciones de voz para entrenar modelos públicos de IA. Las conversaciones y las entradas se procesan para generar respuestas de IA y pueden usarse de forma anónima para mejorar la experiencia de aprendizaje de idiomas.",
    "dataSecurityTitle": "3. Seguridad de los datos",
    "dataSecurityBody": "Implementamos medidas de seguridad estándar de la industria para proteger su información contra acceso no autorizado, alteración, divulgación o destrucción. Todos los datos en tránsito se cifran mediante TLS y los datos en reposo se cifran mediante AES-256. Las transcripciones de sus conversaciones se almacenan en contenedores aislados y solo usted puede acceder a ellas.",
    "rightsTitle": "4. Tus derechos",
    "rightsBeforeEmail": "Tiene derecho a acceder, corregir o eliminar su información personal en cualquier momento a través de la configuración de la cuenta de la aplicación o comunicándose con nuestro equipo de soporte al",
    "rightsAfterEmail": ".",
    "retentionTitle": "5. Retención y eliminación de datos",
    "retentionBody": "Conservamos sus datos personales solo durante el tiempo necesario para proporcionar nuestros servicios. Puede solicitar la eliminación de su cuenta y todos los datos asociados en cualquier momento comunicándose con nosotros. Tras la eliminación de la cuenta, sus datos se eliminarán permanentemente dentro de los 30 días.",
    "thirdPartyTitle": "6. Servicios de terceros",
    "thirdPartyBody": "Utilizamos servicios de terceros, incluidos Supabase (autenticación y base de datos), Google Gemini (procesamiento de lenguaje AI) y herramientas de análisis para operar la aplicación. Estos servicios procesan datos de acuerdo con sus propias políticas de privacidad y están sujetos a acuerdos de procesamiento de datos.",
    "childrenTitle": "7. Privacidad infantil",
    "childrenBody": "Speak With Sophie no está dirigido a niños menores de 13 años. No recopilamos intencionalmente información personal de niños menores de 13 años. Si usted es padre o tutor y cree que su hijo nos ha proporcionado datos personales, comuníquese con nosotros para que podamos tomar las medidas adecuadas.",
    "changesTitle": "8. Cambios en esta política",
    "changesBody": "Podemos actualizar esta Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio importante publicando la nueva política en esta página y actualizando la fecha de \"Última actualización\". Su uso continuado de la aplicación después de los cambios constituye la aceptación de la política actualizada.",
    "contactTitle": "9. Contáctanos",
    "contactBeforeEmail": "Si tiene preguntas sobre esta Política de Privacidad, por favor contáctenos en",
    "contactAfterEmail": "."
  },
  "termsPage": {
    "badge": "Legal",
    "title": "Términos del servicio",
    "lastUpdatedPrefix": "Última actualización:",
    "acceptanceTitle": "1. Aceptación de los términos",
    "acceptanceBody": "Al acceder y utilizar Sophie.ai (\"Servicio\"), usted acepta estar sujeto a estos términos. Si no está de acuerdo con alguna parte de los términos, no podrá acceder al Servicio.",
    "usageTitle": "2. Lineamientos de uso",
    "permittedTitle": "Uso permitido",
    "permittedBody": "Aprendizaje personal de idiomas, fines educativos y práctica conversacional normal.",
    "prohibitedTitle": "Uso prohibido",
    "prohibitedBody": "Scraping automatizado, ingeniería inversa del modelo de IA o uso del servicio para acoso/incitación al odio.",
    "subscriptionsTitle": "3. Suscripciones y facturación",
    "subscriptionsBody": "Sophie.ai ofrece niveles gratuitos y de pago. Las suscripciones pagas se facturan mensual, trimestral, semestral o anualmente. Puede cancelar en cualquier momento y el acceso continuará hasta el final de su período de facturación.",
    "refundLabel": "Política de reembolso:",
    "refundBody": "Ofrecemos una garantía de devolución de dinero de 14 días para suscriptores nuevos que no estén satisfechos con el servicio.",
    "ipTitle": "4. Propiedad intelectual",
    "ipBody": "El Servicio y su contenido original (excluidos los datos de voz generados por el usuario), sus características y funcionalidades son propiedad exclusiva de Sophie.ai.",
    "terminationTitle": "5. Terminación",
    "terminationBody": "Nos reservamos el derecho de cancelar o suspender el acceso a nuestro Servicio inmediatamente, sin previo aviso, por conducta que creemos que viola estos Términos o es perjudicial para otros usuarios del Servicio."
  },
  "hero": {
    "newDialectsAdded": "Nuevo: dialectos de {language} agregados",
    "dontJust": "No solo",
    "intro": "Deja de traducir en tu cabeza y solo pregúntale a Sophie. Ella te ayuda a dominar conversaciones reales como nativo.",
    "hearSophie": "Escuchar a Sophie",
    "conversation": "Conversación",
    "naturalCorrection": "Corrección natural",
    "accentAccuracy": "Precisión de acento"
  },
  "problemSolution": {
    "titlePrefix": "Memorizar palabras",
    "titleStrike": "no funciona",
    "titleSuffix": "La conversación real sí.",
    "traditionalMethod": "Método tradicional",
    "traditionalSubtitle": "Memorizar vocabulario y tablas verbales",
    "traditionalBullets": [
      "Memorizar palabras, frases y gramática básicas.",
      "La mayoría de las veces vocabulario inútil y conjugaciones y tiempos complejos",
      "te olvidas de todo"
    ],
    "speakingWithSophie": "Hablar con Sophie",
    "immersionInstantCorrection": "Inmersión y corrección instantánea",
    "solutionBullets": [
      "Obtenga comentarios instantáneos",
      "Habilidades para hablar desarrolladas de inmediato.",
      "Ya no es necesario tener un hablante nativo humano para practicar, tienes a Sophie."
    ],
    "resultLabel": "Resultado:",
    "resultValue": "Confianza fluida en 30 días"
  },
  "pricing": {
    "titlePrefix": "Invierte en tu",
    "titleSuffix": "fluidez.",
    "cheaperThanTutor": "Más barato que una hora con un tutor privado.",
    "freeTierName": "M&G",
    "freeTierSubtitle": "Conoce a Sophie",
    "freePriceSuffix": "7 días",
    "freeFeatures": [
      "Aplicación en 15 idiomas",
      "Conversaciones naturales con Sophie en más de 50 idiomas",
      "La traducción de Sophie de cualquier idioma a cualquier disponible.",
      "Ahorro de vocabulario ilimitado en todos los idiomas disponibles.",
      "Más de 100 escenarios conversacionales"
    ],
    "premiumTierName": "SCF",
    "premiumBadge": "Popular",
    "premiumTierSubtitle": "Sophie Amiga Cercana",
    "premiumRegularPriceSuffix": "precio mensual regular",
    "premiumLaunchPrice": "$14/mes precio de lanzamiento",
    "premiumFeatures": [
      "Todo está incluido en la prueba gratuita.",
      "Atención al cliente 24 horas al día, 7 días a la semana. Garantizado.",
      "Uso de aplicaciones sin restricciones",
      "Opción de embajador estratégico."
    ],
    "proTierName": "SBB",
    "proTierSubtitle": "Sophie Mejor Compañera",
    "bestValue": "Mejor valor",
    "proMonth": "mes",
    "proBilledEvery": "facturado ${total} cada {cycle}",
    "proCycle6": "6 meses",
    "proCycle12": "12 meses",
    "proCycle18": "18 meses",
    "proCycle24": "24 meses",
    "proTab6": "6 meses",
    "proTab12": "12 meses",
    "proTab18": "18 meses",
    "proTab24": "24 meses",
    "saveVsMonthly": "Ahorra {percent}% vs mensual",
    "proFeatures": [
      "Todo en Sophie Close Friend",
      "Soporte prioritario 24 horas al día, 7 días a la semana",
      "Contenido exclusivo y acceso anticipado",
      "Ruta de aprendizaje personalizada",
      "Gerente de cuenta dedicado"
    ],
    "joinWaitlist": "Unirse a la lista de espera",
    "startFreeTrial": "Iniciar prueba gratis"
  },
  "testimonials": {
    "title": "No te quedes solo con nuestra palabra.",
    "items": [
      {
        "quote": "Estudié {language} 4 años en la escuela y no podía pedir un taco. Sophie quitó mi miedo en 2 semanas.",
        "author": "James T.",
        "role": "Viajero"
      },
      {
        "quote": "El contexto real por fin tiene sentido. Sophie lo explicó mientras actuábamos una escena en {nativeLanguage}.",
        "author": "Sarah M.",
        "role": "Expatriada"
      },
      {
        "quote": "La corrección de acento es dura, pero efectiva. Dejé de sonar a libro y empecé a sonar local.",
        "author": "David K.",
        "role": "Nómada digital"
      }
    ]
  },
  "comparisonTable": {
    "title": "Compara tus opciones.",
    "subtitle": "Mira cómo Sophie se compara con métodos tradicionales y otras apps. La diferencia no es solo precio, son resultados.",
    "columns": {
      "feature": "Característica",
      "sophie": "Sophie.ai",
      "apps": "Apps gamificadas",
      "tutor": "Tutor privado"
    },
    "rows": [
      {
        "name": "Tiempo de conversación activo",
        "sophie": "Ilimitado",
        "apps": "0 minutos (tocando)",
        "tutor": "45 minutos/sesión"
      },
      {
        "name": "Costo por mes",
        "sophie": "$12",
        "apps": "$0 - $15",
        "tutor": "$200+"
      },
      {
        "name": "Velocidad de retroalimentación",
        "sophie": "Instantáneo (<1s)",
        "apps": "Instantáneo (binario)",
        "tutor": "Retrasado (educado)"
      },
      {
        "name": "Memoria contextual",
        "sophie": "Permanente",
        "apps": "Ninguno",
        "tutor": "Memoria humana"
      },
      {
        "name": "Disponibilidad",
        "sophie": "24/7",
        "apps": "24/7",
        "tutor": "Programado"
      },
      {
        "name": "Factor de ansiedad",
        "sophie": "Cero",
        "apps": "Bajo",
        "tutor": "Alto"
      }
    ],
    "footer": "Basado en tarifas promedio del mercado de tutores profesionales en EE.UU./UE."
  },
  "productTour": {
    "title": "Impulso de confianza",
    "subtitle": "Mira cómo hablar con Sophie aumenta tu confianza al hablar.",
    "tabs": [
      {
        "id": "speak",
        "label": "Habla natural",
        "desc": "Solo habla. Sin tocar palabras."
      },
      {
        "id": "correct",
        "label": "Feedback instantáneo",
        "desc": "Correcciones que se quedan."
      },
      {
        "id": "track",
        "label": "Sube tu confianza",
        "desc": "Sophie no juzga. Puedes equivocarte con libertad."
      }
    ],
    "speakQuote": "\"Me gustaría pedir un café, por favor\".",
    "suggestionLabel": "Sugerencia",
    "correctionLine": "\"Me gustaría\" es más suave y educado que \"quiero\".",
    "correctionHint": "Métricas de fluidez",
    "metrics": [
      {
        "label": "Vocabulario",
        "value": 85,
        "color": "bg-pink-500"
      },
      {
        "label": "Pronunciación",
        "value": 62,
        "color": "bg-orange-500"
      },
      {
        "label": "Confianza",
        "value": 94,
        "color": "bg-cyan-500"
      }
    ],
    "fluencyMetrics": "Métricas de fluidez"
  },
  "personalizationEngine": {
    "title": "Un motor premium de aprendizaje construido alrededor de tu comportamiento.",
    "subtitle": "La mayoría de apps se reinician cada sesión. Sophie construye un modelo persistente de tus patrones.",
    "graphTitle": "Gráfico de aprendizaje en vivo",
    "graphUpdated": "Actualizado después de cada conversación.",
    "graphRealtime": "En tiempo real",
    "stats": [
      {
        "label": "Confianza",
        "helper": "Listo para conversar"
      },
      {
        "label": "Vocabulario",
        "helper": "Seguimiento de los términos de la industria"
      },
      {
        "label": "Tono",
        "helper": "Contexto ajustado"
      },
      {
        "label": "Fluidez",
        "helper": "Mejora semanal"
      },
      {
        "label": "Acento",
        "helper": "Mapa de pronunciación"
      }
    ],
    "steps": [
      {
        "title": "Memoria persistente",
        "desc": "Los errores de la semana pasada se convierten en ejercicios de hoy. No se pierde nada."
      },
      {
        "title": "Dificultad adaptativa",
        "desc": "Siempre desafiante, nunca aplastante. Se adapta a tu confianza."
      },
      {
        "title": "Conciencia del contexto",
        "desc": "Sophie sabe que eres un \"ingeniero de software\" al que le gusta el \"senderismo\", no un usuario genérico."
      }
    ]
  },
  "socialProof": {
    "title": "Impulsando a la nueva generación de políglotas"
  },
  "cookieBanner": {
    "title": "Cookies y privacidad",
    "description": "Utilizamos cookies para garantizar que Sophie recuerde su progreso y configuración. Respetamos su privacidad.",
    "accept": "Aceptar",
    "decline": "Rechazar"
  },
  "blogPage": {
    "titleLine1": "La fluidez",
    "titleLine2": "Registro.",
    "subtitle": "Información sobre lingüística, inteligencia artificial y el arte de la conversación.",
    "readArticle": "Leer artículo",
    "loadMoreArticles": "Cargar más artículos",
    "posts": [
      {
        "slug": "why-you-are-still-translating",
        "title": "Por qué sigues traduciendo mentalmente",
        "excerpt": "El cuello de botella cognitivo que impide la fluidez y cómo romperlo utilizando el Método Directo.",
        "category": "Metodología",
        "date": "24 de octubre de 2023",
        "readTime": "5 minutos de lectura"
      },
      {
        "slug": "myth-of-language-gene",
        "title": "El mito del 'gen del lenguaje'",
        "excerpt": "Una nueva investigación sugiere que la adaptabilidad es una habilidad, no un talento. A continuación te explicamos cómo entrenar tu neuroplasticidad.",
        "category": "Ciencia",
        "date": "12 de noviembre de 2023",
        "readTime": "8 minutos de lectura"
      },
      {
        "slug": "mexican-vs-spanish-slang",
        "title": "Argot mexicano versus español: una guía de supervivencia",
        "excerpt": "No digas 'Coger' en México. En serio. Un desglose de las variaciones regionales.",
        "category": "Cultura",
        "date": "05 de diciembre de 2023",
        "readTime": "6 minutos de lectura"
      },
      {
        "slug": "how-sophie-uses-llms",
        "title": "Cómo Sophie usa los LLM de manera diferente",
        "excerpt": "No utilizamos simplemente un envoltorio. Dentro de nuestro proceso de ajuste personalizado para la adquisición del idioma.",
        "category": "Ingeniería",
        "date": "15 de enero de 2024",
        "readTime": "12 minutos de lectura"
      }
    ]
  },
  "blogPostPage": {
    "backToLog": "Volver al registro",
    "category": "Metodología",
    "date": "24 de octubre de 2023",
    "readTime": "5 minutos de lectura",
    "titleLine1": "¿Por qué todavía estás?",
    "titleLine2": "Traduciendo en tu cabeza.",
    "authorName": "Dr. Elena Rostova",
    "authorRole": "Jefe de Lingüística",
    "lead": "Ya conoces el sentimiento. Alguien te hace una pregunta sencilla en español y tu cerebro se congela. Escuchas las palabras, las traduces al inglés, formulas una respuesta en inglés, la traduces nuevamente al español, revisas mentalmente las tablas gramaticales y finalmente hablas demasiado tarde.",
    "sectionCognitiveTitle": "El cuello de botella cognitivo",
    "sectionCognitiveP1": "Este proceso se llama dependencia de la traducción y es uno de los mayores asesinos de la fluidez. La educación de idiomas tradicional a menudo entrena este hábito centrándose en listas de vocabulario y reglas gramaticales en lugar del contexto.",
    "sectionCognitiveP2": "Cuando aprendes que \"Gato\" significa \"Gato\", creas una dependencia neuronal. No puedes acceder al concepto directamente sin pasar primero por tu lengua materna.",
    "approachTitle": "El enfoque de Sofía",
    "approachBody": "Usamos el Método Directo. Te mostramos una imagen o te situamos en un escenario real y forzamos la interacción directa en el idioma de destino. Sin puente de inglés ni búfer de traducción.",
    "sectionNeuroTitle": "Neuroplasticidad y estrés",
    "sectionNeuroP1": "El miedo también importa. La amígdala, el centro del miedo del cerebro, se activa cuando aumenta la presión social. En las aulas o en entornos del mundo real, el miedo a quedar mal puede frenar la producción del lenguaje.",
    "sectionNeuroP2": "Por eso la IA puede ser un sólido compañero de práctica. Sophie no te juzga ni te apresura. Ella corrige y sigue adelante, lo que reduce el filtro afectivo y ayuda a tu cerebro a tomar riesgos.",
    "quote": "La fluidez no se trata de saber cada palabra. Se trata de velocidad de recuperación y la traducción es el método de recuperación más lento.",
    "sectionBreakingTitle": "Rompiendo el hábito",
    "sectionBreakingP1": "Para romper con la dependencia de la traducción, practique la producción, no sólo la recepción. Necesitas hablar mucho.",
    "breakingList": [
      "Deja de usar subtítulos en tu idioma nativo.",
      "Etiquete su entorno física o mentalmente en su idioma de destino.",
      "Utilice el modo manos libres de Sophie para forzar el procesamiento de solo audio como si fuera una conversación real."
    ],
    "ctaTitle": "¿Listo para dejar de traducir?",
    "ctaSubtitle": "Únase a más de 10 000 estudiantes que rompen la barrera de la traducción hoy.",
    "ctaButton": "Obtenga acceso temprano"
  },
  "articlePlayer": {
    "listenToArticle": "Escuche este artículo",
    "audioVersion": "Versión de audio",
    "duration": "5:23"
  },
  "signupModal": {
    "title": "Únase a la lista de acceso temprano",
    "description": "Sophie se encuentra actualmente en versión beta privada. Reserva tu lugar hoy.",
    "emailLabel": "Dirección de correo electrónico",
    "emailPlaceholder": "hola@ejemplo.com",
    "learnLabel": "quiero aprender",
    "languagePlaceholder": "Idioma",
    "levelLabel": "mi nivel es",
    "levelPlaceholder": "Nivel",
    "levelBeginner": "Principiante",
    "levelIntermediate": "Intermedio",
    "levelAdvanced": "Avanzado",
    "goalLabel": "Objetivo principal",
    "goalPlaceholder": "Selecciona un objetivo",
    "goalTravel": "Viaja con confianza",
    "goalWork": "Trabajo y negocios",
    "goalExams": "herramienta de estudio para la escuela",
    "goalFamilyDating": "Familia, amigos o citas.",
    "goalMigration": "Migración del país",
    "joining": "Unión...",
    "joinWaitlist": "Unirse a la lista de espera",
    "successTitle": "¡Estás en la lista!",
    "successDescription": "Hemos enviado un correo electrónico de confirmación a",
    "close": "Cerca"
  },
  "demoModal": {
    "dialogTitle": "Demostración de simulación en vivo de Sophie AI",
    "liveSimulation": "Simulación en vivo",
    "listening": "Escuchando...",
    "speakClearly": "Habla claramente por tu micrófono",
    "analyzing": "Analizando gramática y acento...",
    "userInputSample": "El museo está cerrado ahora.",
    "correctionLabel": "Corrección",
    "correctionSentence": "El museo está cerrado ahora.",
    "correctionHeading": "Ser contra Estar:",
    "correctionBody": "Estar cerrado es un estado, no una característica permanente. Utilice Estar.",
    "tryAnother": "Prueba con otro",
    "tryLiveDemo": "Pruebe la demostración en vivo"
  }
};

const ar: Messages = {
  "navbar": {
    "science": "المنهجية",
    "howItWorks": "كيف يعمل",
    "features": "المميزات",
    "pricing": "الأسعار",
    "faq": "الأسئلة الشائعة",
    "login": "تسجيل الدخول",
    "whatsapp": "واتساب",
    "menu": "القائمة",
    "closeMenu": "إغلاق القائمة",
    "selectLanguage": "اختر اللغة"
  },
  "footer": {
    "ctaTitle": "فقط اسأل Sophie",
    "ctaSubtitle": "انضم إلى آلاف المتعلمين الذين توقفوا عن الحفظ وبدأوا التحدث.",
    "meetSophie": "تعرّف على Sophie",
    "product": "المنتج",
    "company": "الشركة",
    "legal": "قانوني",
    "about": "من نحن",
    "privacy": "سياسة الخصوصية",
    "terms": "شروط الخدمة",
    "support": "الدعم",
    "allRightsReserved": "جميع الحقوق محفوظة."
  },
  "era": {
    "subtitle": "مساعدك الشخصي لتعلم اللغات.",
    "line1": "أي لغة. في أي وقت. في أي مكان",
    "line2": "تحدث مع Sophie للوصول إلى الطلاقة بسرعة وكفاءة",
    "meetButton": "تعرّف على Sophie",
    "languageTitle": "يمكن لـ Sophie مساعدتك في أكثر من 50 لغة",
    "learnAnyLanguage": "تعلم أي لغة",
    "seeMore": "عرض المزيد",
    "seeLess": "عرض أقل"
  },
  "howItWorks": {
    "title": "دورة الطلاقة",
    "subtitle": "من التردد إلى الطلاقة في ثلاث خطوات إدراكية.",
    "startTalking": "ابدأ التحدث",
    "steps": [
      {
        "step": "الخطوة 01",
        "title": "حقن السياق",
        "description": "السفر أو العمل أو المواعدة أو الجدال مع مالك العقار. تقوم صوفي بتكييف المحاكاة مع حياتك الفعلية، وليس مع كتاب مدرسي."
      },
      {
        "step": "الخطوة 02",
        "title": "محاكاة نشطة",
        "description": "لا يوجد خيار متعدد. لا التنصت الكلمات. فقط تحدث. تستجيب صوفي بمستواك، وتدفعك قليلاً في كل مرة (i+1)."
      },
      {
        "step": "الخطوة 03",
        "title": "إعادة الكتابة العصبية",
        "description": "احصل على تصحيحات فورية على النطق والأسلوب. تعيد \"صوفي\" كتابة مساراتك العصبية قبل ظهور العادات السيئة."
      }
    ]
  },
  "features": {
    "title": "كل ما تحتاجه لتتحدث مثل الناطق الأصلي.",
    "cards": [
      {
        "title": "محرك السيناريو",
        "description": "مارس الحياة الواقعية: اسأل عن الاتجاهات في مدريد، أو طلب المقبلات، أو التفاوض بشأن سيارة أجرة في بوغوتا."
      },
      {
        "title": "لا أعرف كيف أقول ذلك؟ فقط اسأل صوفي.",
        "description": "لا تتعثر بعد الآن. إذا كنت بحاجة إلى العثور على كلمة أو عبارة أثناء التحدث، فما عليك سوى سؤال صوفي."
      },
      {
        "title": "ذكي",
        "description": "إذا كنت لا تعرف كيف تقول شيئًا ما، فلا تتردد فقط في سؤال صوفي."
      },
      {
        "title": "محادثة سلسة",
        "description": "استمتع بإجراء محادثات سلسة مع تعليقات فورية."
      },
      {
        "title": "وضع المعلم",
        "description": "اسأل \"لماذا استخدمت الشرط هناك؟\" باللغة الإنجليزية في أي وقت."
      }
    ],
    "correctionBefore": "إستوي إبرازادو.",
    "correctionAfter": "Tengo vergüenza."
  },
  "faq": {
    "title": "الأسئلة الشائعة",
    "subtitle": "كل ما تحتاج لمعرفته حول إتقان {language} مع مدرس الذكاء الاصطناعي الخاص بك.",
    "stillHaveQuestions": "هل لا تزال لديك أسئلة؟",
    "stillHaveQuestionsBody": "فريقنا هنا لمساعدتك على تحقيق أفضل تقدم.",
    "getInTouch": "تواصل معنا",
    "items": [
      {
        "question": "هل تقوم صوفي بتدريس لهجات {language} المختلفة؟",
        "answer": "نعم! يمكنك التبديل بين اللهجات الإقليمية المختلفة ولهجات {language} في إعداداتك. تقوم صوفي بتكييف مفرداتها وتعبيراتها الشائعة ونطقها لتتناسب مع المنطقة المحددة التي تركز عليها."
      },
      {
        "question": "أنا مبتدئ تماما. هل هذا صعب للغاية؟",
        "answer": "مُطْلَقاً. تم تصميم صوفي للتكيف مع مستواك المحدد. إذا كانت المحادثة معقدة للغاية، يمكنك ببساطة أن تطلب منها التباطؤ، أو استخدام كلمات أبسط، أو حتى توفير ترجمة فورية لمساعدتك على المتابعة."
      },
      {
        "question": "كيف تساعد صوفي في القواعد النحوية المعقدة؟",
        "answer": "تستخدم صوفي نهج \"السياق أولاً\". بدلاً من التدريبات، تضعك في سيناريوهات من العالم الحقيقي تتطلب بطبيعة الحال قواعد نحوية معقدة. إذا ارتكبت خطأً ما، فإنها تقدم تعليقات لطيفة وبناءة في الوقت الفعلي. ({language})"
      },
      {
        "question": "ما هي المنصات التي تتوفر عليها صوفي؟",
        "answer": "صوفي متاحة حاليًا كتطبيق ويب وتطبيق جوال لكل من iOS وAndroid. تتم مزامنة تقدمك وقوائم المفردات المخصصة وسجل المحادثات عبر جميع أجهزتك."
      },
      {
        "question": "هل يمكنني التدرب على موضوعات محادثة محددة؟",
        "answer": "قطعاً. يمكنك الاختيار من بين العشرات من السيناريوهات المعدة مسبقًا - مثل الطلب في مقهى، أو اجتماع عمل، أو الموعد الأول - أو إنشاء موضوعاتك المخصصة. تستطيع صوفي التعامل مع أي محادثة ترغب في إجرائها تقريبًا."
      },
      {
        "question": "كم عدد اللغات التي تستطيع صوفي التحدث بها؟",
        "answer": "تدعم صوفي حاليًا 20 لغة عالمية رئيسية، ونقوم بإضافة المزيد كل شهر. يتم دعم كل لغة بنماذج الذكاء الاصطناعي على المستوى الأصلي لضمان تجربة التعلم الأكثر دقة وطبيعية قدر الإمكان."
      }
    ]
  },
  "loginPage": {
    "backToHome": "العودة إلى الرئيسية",
    "copyrightSuffix": "شركة صوفي ايه آي",
    "dailyProgress": "التقدم اليومي",
    "todayGoal": "هدف اليوم",
    "progressLanguageLevel": "الأسبانية • متقدم",
    "progressMinutes": "15 / 20 دقيقة",
    "testimonial": "لقد دفعتني صوفي إلى التحدث منذ اليوم الأول. إنه منتج سلس وطبيعي وفعال بشكل لا يصدق.",
    "testimonialAuthor": "اليكس تشين"
  },
  "loginForm": {
    "readyTitle": "جاهز للتعرّف على Sophie؟",
    "readySubtitle": "ابدأ التحدث الآن وسجل الدخول بالأسفل.",
    "email": "البريد الإلكتروني",
    "emailPlaceholder": "صوفي@example.com",
    "password": "كلمة المرور",
    "forgotPassword": "هل نسيت كلمة المرور؟",
    "signIn": "تسجيل الدخول",
    "orContinueWith": "أو تابع عبر",
    "noAccount": "ليس لديك حساب؟",
    "signUpForBeta": "سجّل في النسخة التجريبية"
  },
  "aboutPage": {
    "badge": "قصتنا",
    "titlePrefix": "حول",
    "subtitle": "متحدّث أصلي في جيبك",
    "sectionBeginning": "البداية",
    "sectionApproach": "منهجنا",
    "sectionFounders": "المؤسسون",
    "sectionForYou": "لك",
    "beginningP1": "ولد موقع SpeakWithSophie.ai من فكرة واحدة بسيطة: الطلاقة الحقيقية تأتي من المحادثة الحقيقية، وليس من الحفظ. غالبًا ما تحصر أدوات تعلم اللغة التقليدية المتعلمين في قوائم الكلمات والتدريبات النحوية المعزولة - ولكننا كنا نعلم أنه لا بد من وجود طريقة أفضل.",
    "beginningP2": "في Sophie.ai، نعتقد أن أسرع طريق للثقة في لغة أخرى هو ممارسة التحدث يوميًا مع ردود فعل ذكية تبدو طبيعية وشبيهة بالبشر. صوفي ليست مجرد ذكاء اصطناعي - إنها شريكة متحدثة تستمع وتتكيف وتساعدك على ممارسة المحادثات الواقعية من اليوم الأول.",
    "approachP1": "يعتمد نهجنا على الحوار الشامل والتصحيح الفوري ومسارات التعلم المخصصة. بدلاً من تكرار قوائم المفردات، يمكنك التحدث والرد وتنمية مهاراتك من خلال التفاعل الهادف.",
    "approachP2": "بمرور الوقت، تتذكر Sophie.ai التقدم الذي أحرزته، وتفهم أنماطك الفريدة، وتخصص جلسات تدريب لمساعدتك على التحسن بشكل أسرع.",
    "foundersP1": "نحن لويس ألبرتو أولغوين رييس وإرنستو أولغوين رومان نشكل هذه المنصة مع الإيمان بأن أي شخص يجب أن يكون قادرًا على التحدث بثقة بلغة جديدة - دون خوف، دون إصدار أحكام، ودون تدريبات مملة. لقد أنشأنا Sophie.ai لتمكين المتعلمين في كل مكان من التحدث بجرأة، والتحدث كثيرًا، والتحدث بشكل طبيعي.",
    "forYouP1": "سواء كنت تستعد للسفر أو العمل أو الدراسة أو تريد فقط طلاقة حقيقية في المحادثة، فإن Sophie.ai موجودة للتدرب معك - في أي وقت وفي أي مكان.",
    "closingBanner": "مرحبًا بك في Sophie.ai."
  },
  "methodologyPage": {
    "badge": "منهج Sophie",
    "titlePrefix": "علم",
    "titleGradient": "الاكتساب",
    "subtitle": "لم نخترع تعلم اللغات. فقط أزلنا التشتيت لنركز على كيف يتعلم الدماغ حقًا.",
    "quote": "\"اللغة ليست موهبة وراثية، إنها كائن اجتماعي. إنها تعيش فقط عندما يتم التحدث بها.\"",
    "quoteAuthor": "فريق أبحاث صوفي",
    "principles": [
      {
        "title": "الإنتاج النشط (ط+1)",
        "description": "الاستماع السلبي لا يبني الطلاقة. يجبرك محركنا على بناء جمل أعلى قليلاً من مستواك الحالي، مما يؤدي إلى التكيف السريع في مراكز اللغة في الدماغ."
      },
      {
        "title": "التكرار السياقي المتباعد",
        "description": "نحن لا نكرر الكلمات فقط. نكرر *الأنماط* ضمن سياقات جديدة. إذا كنت تواجه صعوبة في استخدام صيغة الشرط الإسبانية، فسوف تنسجها صوفي في نقاش حول السياسة، ثم في سيناريو التاريخ."
      },
      {
        "title": "الفلتر العاطفي",
        "description": "الخوف يمنع التعلم من خلال محاكاة بيئة آمنة خالية من الأحكام باستخدام الذكاء الاصطناعي، نقوم بخفض مستويات الكورتيزول لديك، مما يسمح لعقلك بالمخاطرة والاحتفاظ بالمعلومات بشكل أسرع 3 مرات."
      },
      {
        "title": "حلقة ردود الفعل الفورية",
        "description": "تتطلب المرونة العصبية تصحيحًا فوريًا للأخطاء. تتدخل صوفي في اللحظة التي يحدث فيها خطأ، وتعيد كتابة المسار العصبي قبل أن تبدأ العادة السيئة (التحجر)."
      }
    ]
  },
  "supportPage": {
    "badge": "الدعم",
    "title": "كيف يمكننا مساعدتك؟",
    "subtitle": "نحن هنا لأفضل تجربة تعلم مع Sophie.",
    "contactUs": "تواصل معنا",
    "emailSupport": "دعم البريد",
    "emailSupportDesc": "للاستفسارات العامة وتقارير الأخطاء وطلبات الميزات.",
    "accountHelp": "مساعدة الحساب",
    "accountHelpDesc": "مشكلات تتعلق بتسجيل الدخول أو الاشتراك أو إعدادات الحساب.",
    "responseTime": "نرد عادةً خلال 24 ساعة. بالنسبة للقضايا العاجلة، يرجى تضمين كلمة \"عاجل\" في سطر موضوع البريد الإلكتروني الخاص بك.",
    "faqTitle": "الأسئلة الشائعة",
    "faqs": [
      {
        "q": "كيف أبدأ محادثة مع صوفي؟",
        "a": "افتح التطبيق، وانتقل إلى علامة التبويب Talk، وحدد اللغة التي تريد تعلمها، واضغط مع الاستمرار على زر الميكروفون لبدء التحدث. سوف تستجيب صوفي في الوقت الحقيقي."
      },
      {
        "q": "ما هي اللغات التي تدعمها صوفي؟",
        "a": "تدعم صوفي حاليًا اللغة الإنجليزية والإسبانية والفرنسية والألمانية واليابانية والصينية (الماندرين) والهندية - مع توفر المزيد من اللغات قريبًا."
      },
      {
        "q": "هل يتم تخزين بياناتي الصوتية؟",
        "a": "تتم معالجة صوتك في الوقت الفعلي لتقديم التعليقات ولا يتم تخزينه بشكل دائم. راجع سياسة الخصوصية الخاصة بنا للحصول على التفاصيل الكاملة."
      },
      {
        "q": "كيف يمكنني حذف حسابي؟",
        "a": "You can request account deletion by emailing support@speakwithsophie.ai. All your data will be permanently removed within 30 days."
      },
      {
        "q": "هل يمكنني استخدام صوفي دون اتصال بالإنترنت؟",
        "a": "تتطلب صوفي اتصالاً بالإنترنت لمعالجة محادثات الذكاء الاصطناعي وتقديم تعليقات في الوقت الفعلي."
      }
    ],
    "privacyPolicy": "سياسة الخصوصية",
    "termsOfService": "شروط الخدمة"
  },
  "notFoundPage": {
    "title": "Sophie بلا كلام.",
    "description": "الصفحة غير موجودة أو لم تتعلم الكلام بعد.",
    "backToHome": "العودة للرئيسية"
  },
  "privacyPage": {
    "badge": "قانوني",
    "title": "سياسة الخصوصية",
    "lastUpdated": "آخر تحديث: 13 يناير 2026",
    "infoCollectTitle": "1. المعلومات التي نجمعها",
    "infoCollectIntro": "نقوم بجمع المعلومات لتقديم خدمات أفضل لجميع مستخدمينا. وهذا يشمل:",
    "infoItems": [
      {
        "label": "بيانات الحساب",
        "desc": "الاسم وعنوان البريد الإلكتروني واللغات المفضلة"
      },
      {
        "label": "البيانات الصوتية",
        "desc": "تتم معالجة الصوت في الوقت الفعلي لممارسة التحدث (عابر)"
      },
      {
        "label": "التقدم في التعلم",
        "desc": "المفردات والإحصائيات النحوية وتاريخ الجلسة"
      },
      {
        "label": "البيانات الفنية",
        "desc": "معلومات الجهاز وتحليلات الاستخدام لاستقرار التطبيق"
      }
    ],
    "useDataTitle": "2. كيف نستخدم بياناتك",
    "useDataIntro": "يتم استخدام بياناتك لتخصيص تجربة التعلم الخاصة بك، وتتبع التقدم المحرز الخاص بك، وتحسين دقة الذكاء الاصطناعي لدينا. نحن لا نبيع بياناتك الشخصية لأطراف ثالثة.",
    "voiceDataLabel": "البيانات الصوتية:",
    "voiceDataBeforeFirstNot": "يتم استخدام بياناتك الصوتية حصريًا لتقديم تعليقات التحدث في الوقت الفعلي. نحن نفعل",
    "voiceDataAfterFirstNot": "بيع البيانات الصوتية الخاصة بك. نحن نفعل",
    "voiceDataAfterSecondNot": "استخدم تسجيلاتك الصوتية لتدريب نماذج الذكاء الاصطناعي العامة. تتم معالجة المحادثات والمدخلات لإنشاء استجابات الذكاء الاصطناعي ويمكن استخدامها في نموذج مجهول لتحسين تجربة تعلم اللغة.",
    "dataSecurityTitle": "3. أمن البيانات",
    "dataSecurityBody": "نحن ننفذ إجراءات أمنية متوافقة مع معايير الصناعة لحماية معلوماتك من الوصول غير المصرح به أو التغيير أو الكشف أو التدمير. يتم تشفير جميع البيانات أثناء النقل عبر TLS، ويتم تشفير البيانات غير النشطة باستخدام AES-256. يتم تخزين نصوص المحادثة الخاصة بك في حاويات معزولة ولا يمكن الوصول إليها إلا بواسطتك.",
    "rightsTitle": "4. حقوقك",
    "rightsBeforeEmail": "لديك الحق في الوصول إلى معلوماتك الشخصية أو تصحيحها أو حذفها في أي وقت من خلال إعدادات حساب التطبيق أو عن طريق الاتصال بفريق الدعم لدينا على",
    "rightsAfterEmail": ".",
    "retentionTitle": "5. الاحتفاظ بالبيانات وحذفها",
    "retentionBody": "نحن نحتفظ ببياناتك الشخصية فقط طالما كان ذلك ضروريًا لتقديم خدماتنا. يمكنك طلب حذف حسابك وجميع البيانات المرتبطة به في أي وقت عن طريق الاتصال بنا. عند حذف الحساب، ستتم إزالة بياناتك نهائيًا خلال 30 يومًا.",
    "thirdPartyTitle": "6. خدمات الطرف الثالث",
    "thirdPartyBody": "نحن نستخدم خدمات الجهات الخارجية بما في ذلك Supabase (المصادقة وقاعدة البيانات)، وGoogle Gemini (معالجة لغة الذكاء الاصطناعي)، وأدوات التحليلات لتشغيل التطبيق. تعالج هذه الخدمات البيانات وفقًا لسياسات الخصوصية الخاصة بها وتلتزم باتفاقيات معالجة البيانات.",
    "childrenTitle": "7. خصوصية الأطفال",
    "childrenBody": "إن برنامج Speak With Sophie غير موجه للأطفال دون سن 13 عامًا. نحن لا نجمع معلومات شخصية عن عمد من الأطفال دون سن 13 عامًا. إذا كنت أحد الوالدين أو الوصي وتعتقد أن طفلك قد زودنا ببيانات شخصية، فيرجى الاتصال بنا حتى نتمكن من اتخاذ الإجراء المناسب.",
    "changesTitle": "8. التغييرات على هذه السياسة",
    "changesBody": "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. وسوف نقوم بإعلامك بأي تغييرات جوهرية عن طريق نشر السياسة الجديدة على هذه الصفحة وتحديث تاريخ \"آخر تحديث\". إن استمرارك في استخدام التطبيق بعد التغييرات يشكل قبولًا للسياسة المحدثة.",
    "contactTitle": "9. اتصل بنا",
    "contactBeforeEmail": "إذا كانت لديك أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على",
    "contactAfterEmail": "."
  },
  "termsPage": {
    "badge": "قانوني",
    "title": "شروط الخدمة",
    "lastUpdatedPrefix": "آخر تحديث:",
    "acceptanceTitle": "1. قبول الشروط",
    "acceptanceBody": "من خلال الوصول إلى Sophie.ai (\"الخدمة\") واستخدامها، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق على أي جزء من الشروط، فلا يجوز لك الوصول إلى الخدمة.",
    "usageTitle": "2. إرشادات الاستخدام",
    "permittedTitle": "الاستخدام المسموح به",
    "permittedBody": "تعلم اللغة الشخصية، والأغراض التعليمية، وممارسة المحادثة العادية.",
    "prohibitedTitle": "الاستخدام المحظور",
    "prohibitedBody": "الاستخلاص الآلي، أو الهندسة العكسية لنموذج الذكاء الاصطناعي، أو استخدام الخدمة للتحرش/خطاب الكراهية.",
    "subscriptionsTitle": "3. الاشتراكات والفواتير",
    "subscriptionsBody": "تقدم Sophie.ai مستويات مجانية ومدفوعة. تتم محاسبة الاشتراكات المدفوعة شهريًا، أو ربع سنويًا، أو نصف سنويًا، أو سنويًا. يمكنك الإلغاء في أي وقت، وسيستمر الوصول حتى نهاية فترة الفاتورة الخاصة بك.",
    "refundLabel": "سياسة الاسترداد:",
    "refundBody": "نحن نقدم ضمان استعادة الأموال لمدة 14 يومًا للمشتركين لأول مرة غير الراضين عن الخدمة.",
    "ipTitle": "4. الملكية الفكرية",
    "ipBody": "الخدمة ومحتواها الأصلي (باستثناء البيانات الصوتية التي أنشأها المستخدم) والميزات والوظائف هي ملكية حصرية لشركة Sophie.ai.",
    "terminationTitle": "5. الإنهاء",
    "terminationBody": "نحن نحتفظ بالحق في إنهاء أو تعليق الوصول إلى خدمتنا على الفور، دون إشعار مسبق، بسبب السلوك الذي نعتقد أنه ينتهك هذه الشروط أو يضر بالمستخدمين الآخرين للخدمة."
  },
  "hero": {
    "newDialectsAdded": "جديد: إضافة لهجات {language}",
    "dontJust": "لا تكتفِ",
    "intro": "توقف عن الترجمة في رأسك واسأل Sophie مباشرة.",
    "hearSophie": "استمع إلى Sophie",
    "conversation": "محادثة",
    "naturalCorrection": "تصحيح طبيعي",
    "accentAccuracy": "دقة النطق"
  },
  "problemSolution": {
    "titlePrefix": "حفظ الكلمات",
    "titleStrike": "لا ينجح",
    "titleSuffix": "المحادثة الحقيقية تنجح.",
    "traditionalMethod": "الطريقة التقليدية",
    "traditionalSubtitle": "حفظ جداول المفردات والأفعال",
    "traditionalBullets": [
      "حفظ الكلمات والعبارات والقواعد الأساسية",
      "في معظم الأوقات، تكون المفردات عديمة الفائدة والإقترانات والأزمنة المعقدة",
      "نسيت كل شيء"
    ],
    "speakingWithSophie": "التحدث مع Sophie",
    "immersionInstantCorrection": "الغمر والتصحيح الفوري",
    "solutionBullets": [
      "احصل على ردود فعل فورية",
      "تطورت مهارات التحدث على الفور",
      "لم تعد هناك حاجة إلى أن يكون لديك متحدث أصلي بشري للتدرب، فلديك صوفي."
    ],
    "resultLabel": "النتيجة:",
    "resultValue": "الثقة بطلاقة في 30 يوما"
  },
  "pricing": {
    "titlePrefix": "استثمر في",
    "titleSuffix": "طلاقتك.",
    "cheaperThanTutor": "أقل تكلفة من ساعة مع مدرس خاص.",
    "freeTierName": "إم آند جي",
    "freeTierSubtitle": "لقاء وتحية صوفي",
    "freePriceSuffix": "7 أيام",
    "freeFeatures": [
      "التطبيق بـ 15 لغة",
      "محادثات طبيعية مع صوفي بأكثر من 50 لغة",
      "ترجمة صوفي من أي إلى أي لغة متاحة",
      "توفير عدد غير محدود من المفردات بجميع اللغات المتاحة.",
      "100+ سيناريوهات المحادثة"
    ],
    "premiumTierName": "SCF",
    "premiumBadge": "الأكثر شيوعًا",
    "premiumTierSubtitle": "صوفي صديق مقرب",
    "premiumRegularPriceSuffix": "سعر الشهر العادي",
    "premiumLaunchPrice": "سعر الإطلاق 14 دولارًا شهريًا",
    "premiumFeatures": [
      "يتم تضمين كل شيء في النسخة التجريبية المجانية.",
      "دعم العملاء 24/7. مضمون.",
      "استخدام التطبيق غير المقيد",
      "خيار السفير الاستراتيجي."
    ],
    "proTierName": "اس بي بي",
    "proTierSubtitle": "صوفي أفضل صديق",
    "bestValue": "أفضل قيمة",
    "proMonth": "شهر",
    "proBilledEvery": "تتم الفاتورة بمبلغ {total} دولار كل {cycle}",
    "proCycle6": "6 أشهر",
    "proCycle12": "12 شهرا",
    "proCycle18": "18 شهرا",
    "proCycle24": "24 شهرا",
    "proTab6": "6 مو",
    "proTab12": "12 شهرًا",
    "proTab18": "18 شهرًا",
    "proTab24": "24 شهرًا",
    "saveVsMonthly": "وفر {percent}% مقابل شهريًا",
    "proFeatures": [
      "كل شيء في صوفي الصديق المقرب",
      "الأولوية للدعم على مدار 24 ساعة طوال أيام الأسبوع",
      "المحتوى الحصري والوصول المبكر",
      "مسار التعلم المخصص",
      "مدير حساب مخصص"
    ],
    "joinWaitlist": "انضم إلى قائمة الانتظار",
    "startFreeTrial": "ابدأ النسخة التجريبية المجانية"
  },
  "testimonials": {
    "title": "لا تأخذ كلامنا وحده.",
    "items": [
      {
        "quote": "لقد قضيت 4 سنوات في {language} في المدرسة الثانوية ولكن لم أتمكن من طلب تاكو. أصلحت صوفي خوفي من التحدث خلال أسبوعين.",
        "author": "James T.",
        "role": "مسافر"
      },
      {
        "quote": "سياق العالم الحقيقي أصبح منطقيًا أخيرًا. شرحت صوفي ذلك أثناء قيامنا بتمثيل مشهد في {nativeLanguage}.",
        "author": "Sarah M.",
        "role": "مغترب"
      },
      {
        "quote": "تصحيح اللهجة وحشي ولكنه فعال. لقد توقفت أخيرًا عن الظهور ككتاب مدرسي وبدأت أبدو كمواطن محلي.",
        "author": "David K.",
        "role": "البدوي الرقمي"
      }
    ]
  },
  "comparisonTable": {
    "title": "قارن خياراتك.",
    "subtitle": "تعرف على كيفية مواجهة صوفي لأساليب التعلم التقليدية والتطبيقات الأخرى. الفرق ليس فقط في السعر، بل في النتائج.",
    "columns": {
      "feature": "الميزة",
      "sophie": "صوفي.ai",
      "apps": "تطبيقات ملعبة",
      "tutor": "مدرس خاص"
    },
    "rows": [
      {
        "name": "وقت التحدث النشط",
        "sophie": "غير محدود",
        "apps": "0 دقيقة (النقر)",
        "tutor": "45 دقيقة/جلسة"
      },
      {
        "name": "التكلفة شهريا",
        "sophie": "12 دولارًا",
        "apps": "0 دولار - 15 دولارًا",
        "tutor": "200 دولار+"
      },
      {
        "name": "سرعة ردود الفعل",
        "sophie": "فورية (<1 ثانية)",
        "apps": "فورية (ثنائية)",
        "tutor": "متأخر (مهذب)"
      },
      {
        "name": "الذاكرة السياقية",
        "sophie": "دائم",
        "apps": "لا أحد",
        "tutor": "الذاكرة البشرية"
      },
      {
        "name": "التوفر",
        "sophie": "24/7",
        "apps": "24/7",
        "tutor": "المقرر"
      },
      {
        "name": "عامل القلق",
        "sophie": "صفر",
        "apps": "قليل",
        "tutor": "عالي"
      }
    ],
    "footer": "استنادًا إلى متوسط ​​أسعار السوق لمعلمي اللغة المحترفين في الولايات المتحدة/الاتحاد الأوروبي."
  },
  "productTour": {
    "title": "دفعة ثقة",
    "subtitle": "اكتشف كيف يزيد التحدث مع Sophie ثقتك.",
    "tabs": [
      {
        "id": "speak",
        "label": "التحدث الطبيعي",
        "desc": "فقط تحدث. لا التنصت الكلمات."
      },
      {
        "id": "correct",
        "label": "ردود فعل فورية",
        "desc": "التصحيحات التي تلتصق."
      },
      {
        "id": "track",
        "label": "تعزيز ثقتك بنفسك",
        "desc": "صوفي لا تحكم على أحد. لا تتردد في ارتكاب الأخطاء"
      }
    ],
    "speakQuote": "\"أريد أن أطلب القهوة من فضلك.\"",
    "suggestionLabel": "اقتراح",
    "correctionLine": "\"أريد\" أكثر ليونة وأكثر أدبًا من \"أريد\".",
    "correctionHint": "مقاييس الطلاقة",
    "metrics": [
      {
        "label": "مفردات",
        "value": 85,
        "color": "bg-pink-500"
      },
      {
        "label": "نطق",
        "value": 62,
        "color": "bg-orange-500"
      },
      {
        "label": "ثقة",
        "value": 94,
        "color": "bg-cyan-500"
      }
    ],
    "fluencyMetrics": "مقاييس الطلاقة"
  },
  "personalizationEngine": {
    "title": "محرك تعلم متقدم مبني حول سلوكك.",
    "subtitle": "تقوم معظم التطبيقات بإعادة ضبط كل جلسة. تقوم صوفي ببناء نموذج مستمر ومتطور لأنماط لغتك.",
    "graphTitle": "الرسم البياني للتعلم المباشر",
    "graphUpdated": "يتم تحديثه بعد كل محادثة",
    "graphRealtime": "في الوقت الحالى",
    "stats": [
      {
        "label": "ثقة",
        "helper": "المحادثة جاهزة"
      },
      {
        "label": "فوكب",
        "helper": "تتبع شروط الصناعة"
      },
      {
        "label": "نغمة",
        "helper": "تم تعديل السياق"
      },
      {
        "label": "الطلاقة",
        "helper": "التحسن الأسبوعي"
      },
      {
        "label": "لهجة",
        "helper": "خريطة النطق"
      }
    ],
    "steps": [
      {
        "title": "الذاكرة الدائمة",
        "desc": "أخطاء الأسبوع الماضي تصبح تدريبات لهذا اليوم. لا شيء يضيع."
      },
      {
        "title": "صعوبة التكيف",
        "desc": "دائما تحدي، لا سحق أبدا. إنه يتدرج مع ثقتك."
      },
      {
        "title": "الوعي بالسياق",
        "desc": "تعرف صوفي أنك \"مهندسة برمجيات\" تحب \"المشي لمسافات طويلة\"، ولست مستخدمًا عامًا."
      }
    ]
  },
  "socialProof": {
    "title": "نمكّن الجيل القادم من متعددي اللغات"
  },
  "cookieBanner": {
    "title": "ملفات تعريف الارتباط والخصوصية",
    "description": "نحن نستخدم ملفات تعريف الارتباط للتأكد من أن صوفي تتذكر تقدمك وإعداداتك. نحن نحترم خصوصيتك.",
    "accept": "يقبل",
    "decline": "انخفاض"
  },
  "blogPage": {
    "titleLine1": "الطلاقة",
    "titleLine2": "سجل.",
    "subtitle": "رؤى حول اللغويات والذكاء الاصطناعي وفن المحادثة.",
    "readArticle": "اقرأ المقال",
    "loadMoreArticles": "تحميل المزيد من المقالات",
    "posts": [
      {
        "slug": "why-you-are-still-translating",
        "title": "لماذا لا تزال تترجم في رأسك؟",
        "excerpt": "الاختناق المعرفي الذي يمنع الطلاقة، وكيفية كسره باستخدام الطريقة المباشرة.",
        "category": "المنهجية",
        "date": "24 أكتوبر 2023",
        "readTime": "5 دقائق قراءة"
      },
      {
        "slug": "myth-of-language-gene",
        "title": "أسطورة \"جين اللغة\"",
        "excerpt": "يشير بحث جديد إلى أن القدرة على التكيف هي مهارة وليست موهبة. وإليك كيفية تدريب المرونة العصبية الخاصة بك.",
        "category": "علوم",
        "date": "12 نوفمبر 2023",
        "readTime": "8 دقائق قراءة"
      },
      {
        "slug": "mexican-vs-spanish-slang",
        "title": "اللغة العامية المكسيكية مقابل الإسبانية: دليل البقاء",
        "excerpt": "لا تقل \"Coger\" في المكسيك. بجد. انهيار الفروق الإقليمية.",
        "category": "ثقافة",
        "date": "05 ديسمبر 2023",
        "readTime": "6 دقائق قراءة"
      },
      {
        "slug": "how-sophie-uses-llms",
        "title": "كيف تستخدم صوفي LLMs بشكل مختلف",
        "excerpt": "نحن لا نستخدم الغلاف فقط. داخل عملية الضبط المخصصة لدينا لاكتساب اللغة.",
        "category": "هندسة",
        "date": "15 يناير 2024",
        "readTime": "12 دقيقة قراءة"
      }
    ]
  },
  "blogPostPage": {
    "backToLog": "العودة إلى السجل",
    "category": "المنهجية",
    "date": "24 أكتوبر 2023",
    "readTime": "5 دقائق قراءة",
    "titleLine1": "لماذا لا تزال",
    "titleLine2": "ترجمة في رأسك.",
    "authorName": "Dr. Elena Rostova",
    "authorRole": "رئيس قسم اللغويات",
    "lead": "أنت تعرف هذا الشعور. يسألك شخص ما سؤالاً بسيطًا باللغة الإسبانية، فيتجمد دماغك. تسمع الكلمات، وتترجمها إلى الإنجليزية، وتصوغ ردًا باللغة الإنجليزية، ثم تترجمها مرة أخرى إلى الإسبانية، وتتحقق من الجداول النحوية في عقلك، وأخيرًا تتحدث بعد فوات الأوان.",
    "sectionCognitiveTitle": "عنق الزجاجة المعرفية",
    "sectionCognitiveP1": "تُسمى هذه العملية بالاعتماد على الترجمة، وهي واحدة من أكبر العوامل التي تقتل الطلاقة. غالبًا ما يقوم تعليم اللغة التقليدية بتدريب هذه العادة من خلال التركيز على قوائم المفردات وقواعد القواعد بدلاً من السياق.",
    "sectionCognitiveP2": "عندما تعلم أن كلمة \"Gato\" تعني \"قطة\"، فإنك تنشئ تبعية عصبية. لا يمكنك الوصول إلى المفهوم مباشرة دون المرور بلغتك الأم أولاً.",
    "approachTitle": "نهج صوفي",
    "approachBody": "نحن نستخدم الطريقة المباشرة. نعرض لك صورة أو نضعك في سيناريو حقيقي ونفرض عليك التفاعل المباشر باللغة الهدف. لا يوجد جسر إنجليزي ولا يوجد مخزن مؤقت للترجمة.",
    "sectionNeuroTitle": "المرونة العصبية والإجهاد",
    "sectionNeuroP1": "الخوف مهم أيضا. اللوزة الدماغية، مركز الخوف في الدماغ، تنشط عندما يرتفع الضغط الاجتماعي. في الفصول الدراسية أو في بيئات العالم الحقيقي، يمكن للخوف من الظهور بشكل خاطئ أن يوقف إنتاج اللغة.",
    "sectionNeuroP2": "ولهذا السبب يمكن للذكاء الاصطناعي أن يكون شريكًا قويًا في الممارسة. صوفي لا تحكم عليك ولا تتعجل. إنها تقوم بالتصحيح والمضي قدمًا، مما يقلل من المرشح العاطفي ويساعد عقلك على تحمل المخاطر.",
    "quote": "الطلاقة لا تعني معرفة كل كلمة. يتعلق الأمر بسرعة الاسترجاع، والترجمة هي أبطأ طريقة استرجاع.",
    "sectionBreakingTitle": "كسر العادة",
    "sectionBreakingP1": "لكسر الاعتماد على الترجمة، مارس الإنتاج، وليس الاستقبال فقط. تحتاج إلى التحدث كثيرا.",
    "breakingList": [
      "توقف عن استخدام الترجمات بلغتك الأم.",
      "قم بتسمية بيئتك جسديًا أو عقليًا بلغتك المستهدفة.",
      "استخدم وضع التحدث الحر الخاص بـ Sophie لفرض معالجة الصوت فقط مثل المحادثة الحقيقية."
    ],
    "ctaTitle": "هل أنت مستعد للتوقف عن الترجمة؟",
    "ctaSubtitle": "انضم إلى أكثر من 10000 طالب يكسرون حاجز الترجمة اليوم.",
    "ctaButton": "احصل على الوصول المبكر"
  },
  "articlePlayer": {
    "listenToArticle": "استمع لهذا المقال",
    "audioVersion": "النسخة الصوتية",
    "duration": "5:23"
  },
  "signupModal": {
    "title": "انضم إلى قائمة الوصول المبكر",
    "description": "صوفي حاليا في مرحلة تجريبية خاصة. احجز مكانك اليوم.",
    "emailLabel": "عنوان البريد الإلكتروني",
    "emailPlaceholder": "مرحبا@example.com",
    "learnLabel": "أريد أن أتعلم",
    "languagePlaceholder": "لغة",
    "levelLabel": "مستواي هو",
    "levelPlaceholder": "مستوى",
    "levelBeginner": "مبتدئ",
    "levelIntermediate": "متوسط",
    "levelAdvanced": "متقدم",
    "goalLabel": "الهدف الرئيسي",
    "goalPlaceholder": "حدد هدفا",
    "goalTravel": "سافر بثقة",
    "goalWork": "العمل والأعمال",
    "goalExams": "أداة الدراسة للمدرسة",
    "goalFamilyDating": "العائلة أو الأصدقاء أو المواعدة",
    "goalMigration": "الهجرة القطرية",
    "joining": "الانضمام...",
    "joinWaitlist": "انضم إلى قائمة الانتظار",
    "successTitle": "أنت على القائمة!",
    "successDescription": "لقد أرسلنا رسالة تأكيد بالبريد الإلكتروني إلى",
    "close": "يغلق"
  },
  "demoModal": {
    "dialogTitle": "عرض المحاكاة الحية لصوفي AI",
    "liveSimulation": "محاكاة حية",
    "listening": "جاري الاستماع...",
    "speakClearly": "تحدث بوضوح في الميكروفون الخاص بك",
    "analyzing": "تحليل النحو والصرف...",
    "userInputSample": "المتحف مغلق الآن.",
    "correctionLabel": "تصحيح",
    "correctionSentence": "المتحف مغلق الآن.",
    "correctionHeading": "سر مقابل إستار:",
    "correctionBody": "الانغلاق هو حالة وليس صفة دائمة. استخدم استار.",
    "tryAnother": "حاول آخر",
    "tryLiveDemo": "جرب العرض التجريبي المباشر"
  }
};

export const MESSAGES: Record<AppLocale, Messages> = { en, zh, hi, es, ar };
