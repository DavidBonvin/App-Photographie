import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonButton, IonIcon } from '@ionic/react';
import { arrowForward, images, person, mail } from 'ionicons/icons';
import { useTranslation } from '../i18n/useTranslation';
import { getAllPhotos } from '../data/photographyData';
import './Welcome.css';

const Welcome: React.FC = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [textPhase, setTextPhase] = useState<'entering' | 'visible' | 'exiting'>('entering');
  
  console.log('🏠 Welcome component rendering...');
  console.log('🌍 Welcome - Current URL:', window.location.href);
  console.log('📍 Welcome - Current pathname:', window.location.pathname);
  
  const photos = getAllPhotos();
  console.log('📸 Welcome - Photos loaded:', photos.length, 'items');
  
  // Cycle through images every 8 seconds
  useEffect(() => {
    console.log('🖼️ Welcome - Setting up image cycle...');
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % photos.length;
        console.log('🔄 Welcome - Image cycle:', prevIndex, '->', newIndex);
        return newIndex;
      });
    }, 8000);
    
    return () => {
      console.log('🧹 Welcome - Cleaning up image cycle');
      clearInterval(interval);
    };
  }, [photos.length]);
  
  // Text animation cycle
  useEffect(() => {
    console.log('✨ Welcome - Setting up text animation...');
    
    const cycleText = () => {
      console.log('🎭 Welcome - Text cycle starting');
      setTextPhase('entering');
      setTimeout(() => {
        console.log('👀 Welcome - Text visible');
        setTextPhase('visible');
      }, 1000);
      setTimeout(() => {
        console.log('👋 Welcome - Text exiting');
        setTextPhase('exiting');
      }, 4000);
      setTimeout(() => {
        console.log('🔄 Welcome - Text cycle restarting');
        setTextPhase('entering');
      }, 5000);
    };
    
    // Initial delay
    setTimeout(() => {
      console.log('📱 Welcome - Showing content');
      setShowContent(true);
    }, 500);
    
    // Start text cycle
    const textInterval = setInterval(cycleText, 6000);
    cycleText();
    
    return () => {
      console.log('🧹 Welcome - Cleaning up text animation');
      clearInterval(textInterval);
    };
  }, []);
  
  const currentPhoto = photos[currentImageIndex];
  console.log('🖼️ Welcome - Current photo:', currentPhoto?.title || 'No photo');
  
  console.log('🎨 Welcome - Rendering JSX...');
  
  return (
    <IonPage className="welcome-page">
      <IonContent className="welcome-content" scrollY={false}>
        {/* Background Image */}
        <div className="welcome-background">
          {currentPhoto && (
            <img 
              src={currentPhoto.srcZoom || currentPhoto.src} 
              alt={currentPhoto.title}
              className="background-image"
            />
          )}
          <div className="background-overlay"></div>
        </div>
        
        {/* Content */}
        {showContent && (
          <div className="welcome-text-container">
            <div className={`welcome-text ${textPhase}`}>
              <h1 className="welcome-title">
                {t('welcome.title') || 'Portfolio Photographique'}
              </h1>
              <p className="welcome-subtitle">
                {t('welcome.subtitle') || 'Découvrez un monde captivé par la beauté'}
              </p>
            </div>
            
            <div className="welcome-description">
              <p className="welcome-tagline">
                {t('welcome.tagline') || 'Art • Passion • Vision'}
              </p>
            </div>
          </div>
        )}
        
        {/* Navigation Buttons */}
        <div className="welcome-navigation">
          <IonButton 
            routerLink="/app/gallery" 
            fill="clear" 
            className="nav-btn gallery-btn"
            title={t('navigation.gallery') || 'Galerie'}
          >
            <IonIcon icon={images} />
            <span className="nav-label">{t('navigation.gallery') || 'Galerie'}</span>
          </IonButton>
          
          <IonButton 
            routerLink="/app/about" 
            fill="clear" 
            className="nav-btn about-btn"
            title={t('navigation.about') || 'À propos'}
          >
            <IonIcon icon={person} />
            <span className="nav-label">{t('navigation.about') || 'À propos'}</span>
          </IonButton>
          
          <IonButton 
            routerLink="/app/contact" 
            fill="clear" 
            className="nav-btn contact-btn"
            title={t('navigation.contact') || 'Contact'}
          >
            <IonIcon icon={mail} />
            <span className="nav-label">{t('navigation.contact') || 'Contact'}</span>
          </IonButton>
        </div>
        
        {/* Enter Button */}
        <div className="welcome-enter">
          <IonButton 
            routerLink="/app/gallery" 
            fill="clear" 
            className="enter-btn"
          >
            <span>{t('welcome.enter') || 'Entrer'}</span>
            <IonIcon icon={arrowForward} slot="end" />
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;