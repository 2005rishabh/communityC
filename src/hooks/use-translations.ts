'use client';

import { useContext } from 'react';
import { SettingsContext } from '@/contexts/SettingsContext';
import { translations, TranslationKey } from '@/lib/translations';

export const useTranslations = () => {
  const context = useContext(SettingsContext);
  
  if (context === undefined) {
    throw new Error('useTranslations must be used within a SettingsProvider');
  }

  const { language } = context;

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations['en'][key];
  };

  return t;
};
