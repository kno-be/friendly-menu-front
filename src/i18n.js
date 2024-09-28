import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Arquivos de tradução
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

// Configuração das línguas
const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n
  .use(LanguageDetector) // Detecta o idioma do navegador
  .use(initReactI18next) // Inicializa o react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Caso o idioma detectado não esteja disponível
    interpolation: {
      escapeValue: false, // React já faz o escaping de valores por padrão
    },
  });

export default i18n;