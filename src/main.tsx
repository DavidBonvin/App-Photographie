import React from 'react';
import { createRoot } from 'react-dom/client';
import { TranslationProvider } from './i18n/TranslationContext';
import App from './App';
import './utils/tabEffects';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <TranslationProvider>
      <App />
    </TranslationProvider>
  </React.StrictMode>
);