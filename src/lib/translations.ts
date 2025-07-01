export const translations = {
  en: {
    // App
    appName: "Pollution Spotter",
    // Main Nav
    pollutionMap: "Pollution Map",
    reportsList: "Reports List",
    aiAssistant: "AI Assistant",
    feedback: "Feedback",
    settings: "Settings",
    reportPollution: "Report Pollution",
    // User Nav
    login: "Login",
    logout: "Log out",
    welcome: "Welcome!",
    // Settings Page
    settingsTitle: "Settings",
    settingsDescription: "Manage your app and account settings.",
    language: "Language",
    languageDescription: "Choose your preferred language.",
    english: "English",
    hinglish: "Hinglish",
    theme: "Theme",
    themeDescription: "Select the app's appearance.",
    light: "Light",
    dark: "Dark",
    system: "System",
  },
  'hi-en': {
    // App
    appName: "Pollution Spotter",
    // Main Nav
    pollutionMap: "Pradushan Naksha",
    reportsList: "Report Suchi",
    aiAssistant: "AI Sahayak",
    feedback: "Pratikriya",
    settings: "Settings",
    reportPollution: "Pradushan Report Karein",
    // User Nav
    login: "Login",
    logout: "Log out",
    welcome: "Swagat hai!",
    // Settings Page
    settingsTitle: "Settings",
    settingsDescription: "Apne app aur account ki settings manage karein.",
    language: "Bhasha",
    languageDescription: "Apni pasand ki bhasha chunein.",
    english: "English",
    hinglish: "Hinglish",
    theme: "Theme",
    themeDescription: "App ka appearance chunein.",
    light: "Light",
    dark: "Dark",
    system: "System",
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations['en'];
