import React from 'react';
import { createRoot } from 'react-dom/client';
import { TranslationProvider } from './i18n/TranslationContext';
import App from './App';
import './utils/tabEffects';

// Function to handle initial navigation
const handleInitialNavigation = () => {
  const currentPath = window.location.pathname;
  let basePath = '';
  
  // Detect deployment platform
  if (process.env.NODE_ENV === 'production') {
    const hostname = window.location.hostname;
    
    if (hostname.includes('vercel.app') || hostname.includes('.vercel.app')) {
      basePath = '';
    } else if (hostname.includes('github.io')) {
      basePath = '/App-Photographie';
    }
  }
  
  // If we're at the root or base path, redirect to welcome
  if (currentPath === '/' || currentPath === basePath || currentPath === basePath + '/') {
    const welcomePath = basePath + '/welcome';
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