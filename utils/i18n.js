import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetectro from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      title: "Welcome to Paste It",
      createSnippet: "Create Snippet",
      brand: "Paste It",
      welcomeTitle: "Welcome to Paste It",
      description:
        "This is an application made for people to upload and share various snippets of text.",
      createScreen: "Upload your snippet now!",
      createDesc:
        "Paste whatever text you want in the textarea below, save it, and share the link with friends.",
      createButton: "save your snippet",
      shareButton: "Copy link to clipboard",
      warning: "all snippets will be deleted after 1-2 days",
      developer: "Developed By Sudan Alhilali",
    },
  },
  ar: {
    translation: {
      title: "مرحبا بك في موقع إلصقه",
      createSnippet: "إنشاء نص",
      brand: "إلصقه",
      welcomeTitle: "مرحبا بكم في موقع إلصقه",
      description: "هذا تطبيق مصمم لرفع و مشاركة مقتطفات نصية مختلفة",
      createScreen: "إرفع النص الخاص بك الآن!",
      createDesc:
        "الصق أي نص تريده في منطقة النص أدناه ، واحفظه ، وشارك الرابط مع الأصدقاء",
      createButton: "احفظ نصك",
      shareButton: "إنسخ الرابط للمشاركة",
      warning: "كل النصوص يستم حذفها خلال يوم او يومين",
      developer: "مطور الموقع ســودان الهلالي",
    },
  },
};

i18n
  .use(LanguageDetectro)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
