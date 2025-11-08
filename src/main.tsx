import React from 'react';
import { createRoot } from 'react-dom/client';
import { TranslationProvider } from './i18n/TranslationContext';
import App from './App';
import './utils/tabEffects';

// Function to handle initial navigation to Welcome page
const handleInitialNavigation = () => {
  const currentPath = window.location.pathname;
  const basePath = process.env.NODE_ENV === 'production' ? '/App-Photographie' : '';
  
  // If we're at the root or base path, redirect to welcome
  if (currentPath === '/' || currentPath === basePath || currentPath === basePath + '/') {
    const welcomePath = basePath + '/welcome';
    console.log('Redirecting to Welcome page:', welcomePath);
    window.history.replaceState(null, '', welcomePath);
  }
};

// Execute navigation before rendering
handleInitialNavigation();

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <TranslationProvider>
      <App />
    </TranslationProvider>
  </React.StrictMode>
);