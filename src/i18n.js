import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './components/Languages/en/translation.json';
import translationTR from './components/Languages/tr/translation.json';
import translationFR from './components/Languages/fr/translation.json';
import translationDE from './components/Languages/de/translation.json';
import translationES from './components/Languages/es/translation.json';
import translationAR from './components/Languages/ar/translation.json';
import translationRU from './components/Languages/ru/translation.json'; // Russian translations
import translationCN from './components/Languages/cn/translation.json'; // Chinese translations
import translationPT from './components/Languages/pt/translation.json'; // Portuguese translations
import translationIT from './components/Languages/it/translation.json'; // Italian translations

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
    ar: {
        translation: translationAR,
    },
    ru: {
        translation: translationRU, // Russian translations
    },
    cn: {
        translation: translationCN, // Chinese translations
    },
    pt: {
        translation: translationPT, // Portuguese translations
    },
    it: {
        translation: translationIT, // Italian translations
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