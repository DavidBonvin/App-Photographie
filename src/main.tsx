import React from 'react';
import { createRoot } from 'react-dom/client';
import { TranslationProvider } from './i18n/TranslationContext';
import App from './App';
import './utils/tabEffects';

// Enhanced function to handle initial navigation with debugging
const handleInitialNavigation = () => {
  console.log('🚀 Main.tsx - Starting navigation handler');
  console.log('🌍 Current location:', window.location.href);
  console.log('📍 Pathname:', window.location.pathname);
  console.log('🏠 Hostname:', window.location.hostname);
  
  const currentPath = window.location.pathname;
  let basePath = '';
  
  // Detect deployment platform with enhanced debugging
  if (process.env.NODE_ENV === 'production') {
    console.log('🏗️ Production mode detected');
    const hostname = window.location.hostname;
    
    if (hostname.includes('vercel.app') || hostname.includes('.vercel.app')) {
      basePath = '';
      console.log('☁️ Vercel deployment detected, using root path');
    } else if (hostname.includes('github.io')) {
      basePath = '/App-Photographie';
      console.log('🐙 GitHub Pages detected, using /App-Photographie base');
    } else {
      console.log('❓ Unknown production environment:', hostname);
    }
  } else {
    console.log('🔧 Development mode detected');
  }
  
  console.log('📂 Base path determined:', basePath);
  console.log('🔍 Checking if redirect needed...');
  
  // If we're at the root or base path, redirect to welcome
  if (currentPath === '/' || currentPath === basePath || currentPath === basePath + '/') {
    const welcomePath = basePath + '/welcome';
    console.log('✅ Redirect needed! Going to:', welcomePath);
    window.history.replaceState(null, '', welcomePath);
    console.log('🔄 History updated, new path:', window.location.pathname);
  } else if (currentPath === basePath + '/welcome') {
    console.log('✅ Already at welcome page, no redirect needed');
  } else {
    console.log('❌ No redirect needed, current path is fine:', currentPath);
  }
};

// Execute navigation before rendering
console.log('🎬 Executing initial navigation...');
handleInitialNavigation();

console.log('🎨 Starting React app render...');
const container = document.getElementById('root');

if (!container) {
  console.error('❌ Root container not found!');
} else {
  console.log('✅ Root container found, creating React root...');
}

const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <TranslationProvider>
      <App />
    </TranslationProvider>
  </React.StrictMode>
);

console.log('🎉 React app rendered successfully!');