import React, { useState, useEffect } from 'react';
import { 
  IonModal, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton, 
  IonIcon,
  IonButtons,
  IonLabel,
  IonChip
} from '@ionic/react';
import { close, download, share, heart, heartOutline } from 'ionicons/icons';
import { useTranslation } from '../../i18n/useTranslation';
import './ImageViewer.css';

interface ImageViewerProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageTitle: string;
  imageDescription: string;
  category?: string;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageTitle,
  imageDescription,
  category
}) => {
  const { t } = useTranslation();
  const [isLiked, setIsLiked] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsImageLoaded(false);
      setShowControls(true);
      
      // Auto-hide controls after 3 seconds
      const timer = setTimeout(() => {
        setShowControls(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    // Toggle controls when clicking on the modal background
    if (e.target === e.currentTarget) {
      setShowControls(!showControls);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = `${imageTitle.replace(/\s+/g, '_')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: imageTitle,
          text: imageDescription,
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      // You could show a toast here
    }
  };

  return (
    <IonModal 
      isOpen={isOpen} 
      onDidDismiss={onClose}
      className="image-viewer-modal"
      backdropDismiss={true}
    >
      <div className="image-viewer-container" onClick={handleModalClick}>
        {/* Background blur image */}
        <div 
          className="background-blur"
          style={{
            backgroundImage: `url(${imageSrc})`,
            opacity: isImageLoaded ? 1 : 0
          }}
        />

        {/* Header controls */}
        <IonHeader 
          className={`image-viewer-header ${showControls ? 'visible' : 'hidden'}`}
          translucent
        >
          <IonToolbar className="transparent-toolbar">
            <IonTitle className="image-title">{imageTitle}</IonTitle>
            <IonButtons slot="end">
              <IonButton 
                fill="clear" 
                onClick={() => setIsLiked(!isLiked)}
                className="control-button"
              >
                <IonIcon 
                  icon={isLiked ? heart : heartOutline} 
                  className={isLiked ? 'liked-icon' : 'like-icon'}
                />
              </IonButton>
              <IonButton 
                fill="clear" 
                onClick={handleShare}
                className="control-button"
              >
                <IonIcon icon={share} />
              </IonButton>
              <IonButton 
                fill="clear" 
                onClick={handleDownload}
                className="control-button"
              >
                <IonIcon icon={download} />
              </IonButton>
              <IonButton 
                fill="clear" 
                onClick={onClose}
                className="control-button close-button"
              >
                <IonIcon icon={close} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        {/* Main image */}
        <IonContent className="image-viewer-content" scrollY={false}>
          <div className="image-container">
            <img
              src={imageSrc}
              alt={imageTitle}
              className={`main-image ${isImageLoaded ? 'loaded' : 'loading'}`}
              onLoad={handleImageLoad}
              onClick={() => setShowControls(!showControls)}
            />
            
            {/* Loading spinner */}
            {!isImageLoaded && (
              <div className="loading-spinner">
                <div className="spinner"></div>
              </div>
            )}
          </div>
        </IonContent>

        {/* Bottom info panel */}
        <div 
          className={`bottom-info-panel ${showControls ? 'visible' : 'hidden'}`}
        >
          <div className="info-content">
            {category && (
              <IonChip className="category-chip" color="primary">
                <IonLabel>{category}</IonLabel>
              </IonChip>
            )}
            <h3 className="image-detail-title">{imageTitle}</h3>
            <p className="image-description">{imageDescription}</p>
          </div>
        </div>

        {/* Tap indicator */}
        {showControls && (
          <div className="tap-indicator">
            <span>{t('gallery.imageViewer.tapToHideControls')}</span>
          </div>
        )}
      </div>
    </IonModal>
  );
};

export default ImageViewer;