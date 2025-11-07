import { IonButton, IonIcon, IonPopover, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';
import { globe } from 'ionicons/icons';
import { useState, useRef, useId } from 'react';
import { useTranslation, Language } from '../i18n/useTranslation';
import './LanguageSelector.css';

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLIonPopoverElement>(null);
  const { language, changeLanguage } = useTranslation();
  const uniqueId = useId();
  const triggerId = `language-trigger-${uniqueId}`;

  const languages = [
    { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
    { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
    { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
  ];

  const handleLanguageChange = (lang: Language) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <>
      <IonButton 
        fill="clear" 
        id={triggerId}
        className="language-selector-button"
      >
        <IonIcon icon={globe} />
      </IonButton>

      <IonPopover
        ref={popoverRef}
        trigger={triggerId}
        isOpen={isOpen}
        onDidDismiss={() => setIsOpen(false)}
        onWillPresent={() => setIsOpen(true)}
        showBackdrop={true}
        dismissOnSelect={true}
        className="language-popover"
      >
        <IonContent className="language-popover-content">
          <IonList className="language-list">
            {languages.map((lang) => (
              <IonItem
                key={lang.code}
                button
                onClick={() => handleLanguageChange(lang.code)}
                className={`language-item ${language === lang.code ? 'selected' : ''}`}
              >
                <span className="language-flag">{lang.flag}</span>
                <IonLabel className="language-name">{lang.name}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonPopover>
    </>
  );
};

export default LanguageSelector;