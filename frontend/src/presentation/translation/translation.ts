import i18n from 'i18next';
import {format as dateFnsFormat} from 'date-fns';
import {useTranslation as reacti18nextTranslationHook, initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import {PT_TRANSLATION} from '#/presentation/translation/locales/pt';
import {EN_TRANSLATION} from '#/presentation/translation/locales/en';
import {SupportedLanguages} from '#/presentation/translation/types';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      interpolation: {
        format: (value, format) => {
          if (value instanceof Date) {
            const defaultFormat = 'yyyy-MM-dd';
            return dateFnsFormat(value, format || defaultFormat);
          }
          return value;
        },
      },
      resources: {
        [SupportedLanguages.en]: {
          translation: EN_TRANSLATION,
        },
        [SupportedLanguages.pt]: {
          translation: PT_TRANSLATION,
        },
      },
    });

export const setLanguage = (language: SupportedLanguages) => i18n.changeLanguage(language);
export const useTranslation = reacti18nextTranslationHook;
