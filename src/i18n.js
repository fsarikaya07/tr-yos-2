import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './components/Languages/en/translation.json';
import translationTR from './components/Languages/tr/translation.json';
import translationFR from './components/Languages/fr/translation.json';
import translationDE from './components/Languages/de/translation.json';
import translationES from './components/Languages/es/translation.json';
const resources = {
    en: {
        translation: translationEN,
    },
    tr: {
        translation: translationTR,
    },
    fr: {
        translation: translationFR,
    },
    de: {
        translation: translationDE,
    },
    es: {
        translation: translationES,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;


// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// import Backend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";

// import translationEN from './components/Languages/en/translation.json';
// import translationTR from './components/Languages/tr/translation.json';
// import translationFR from './components/Languages/fr/translation.json';
// import translationDE from './components/Languages/de/translation.json';
// import translationES from './components/Languages/es/translation.json';

// const resources = {
//     en: {
//         translation: translationEN
//     },
//     tr: {
//         translation: translationTR
//     },
//     fr: {
//         translation: translationFR
//     },
//     de: {
//         translation: translationDE
//     },
//     es: {
//         translation: translationES
//     },
// };

// i18n
//     .use(Backend)
//     .use(LanguageDetector)
//     .use(initReactI18next)
//     .init({
//         resources,
//         fallbackLng: "en",
//         debug: true,
//         keySeparator: '.',
//         interpolation: {
//             escapeValue: false,
//         }
//     });

// export default i18n;