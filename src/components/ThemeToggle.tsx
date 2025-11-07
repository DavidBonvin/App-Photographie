import { IonButton, IonIcon } from '@ionic/react';
import { moon, sunny } from 'ionicons/icons';
import { useState, useEffect } from 'react';
import './ThemeToggle.css';

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Verificar si hay una preferencia guardada
    const savedTheme = localStorage.getItem('theme-preference');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDarkMode(shouldUseDark);
    
    // Aplicar el tema al documento
    document.body.classList.toggle('dark-theme', shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    // Guardar preferencia en localStorage
    localStorage.setItem('theme-preference', newTheme ? 'dark' : 'light');
    
    // Aplicar el tema al documento
    document.body.classList.toggle('dark-theme', newTheme);
  };

  return (
    <IonButton 
      fill="clear" 
      className="theme-toggle-button"
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      <IonIcon 
        icon={isDarkMode ? sunny : moon} 
        className="theme-toggle-icon"
      />
    </IonButton>
  );
};

export default ThemeToggle;