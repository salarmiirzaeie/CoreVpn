import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en/transitionEn.json';
import fa from './fa/transitionFa.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  resources: {
    en: en,
    fa: fa,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  react: {
    bindI18n: 'languageChanged',
    useSuspense: false,
  },
});

export default i18n;
