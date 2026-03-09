import type { AppLocale } from "./locales.ts";

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
    languageSubTitle: string;
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
    voiceDataNotWord: string;
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

import { en } from "./messages/en.ts";
import { zh } from "./messages/zh.ts";
import { hi } from "./messages/hi.ts";
import { es } from "./messages/es.ts";
import { ar } from "./messages/ar.ts";

export const MESSAGES = { en, zh, hi, es, ar } satisfies Record<AppLocale, Messages>;


