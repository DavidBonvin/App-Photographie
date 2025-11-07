import { useContext } from 'react';
import { TranslationContext, type TranslationContextType } from './TranslationContext';

export type { Language } from './TranslationContext';

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};