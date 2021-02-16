import i18n from 'i18next';
import en from './locales/en';
import zh from './locales/zh';

const resources = {
    en,
    zh
}

i18n.init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    react: {
        useSuspense: false,
    },
});

export default i18n;
