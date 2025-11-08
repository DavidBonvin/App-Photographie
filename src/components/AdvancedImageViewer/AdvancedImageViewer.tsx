import React, { useState, useRef, useEffect } from 'react';
import { IonModal, IonButton, IonIcon, IonContent, IonHeader, IonToolbar, IonTitle, IonSpinner } from '@ionic/react';
import { close, informationCircle, chatbubble, heart, share, download, chevronUp, chevronDown, chevronBack, chevronForward } from 'ionicons/icons';
import { useTranslation } from '../../i18n/useTranslation';
import './AdvancedImageViewer.css';

interface PhotoMetadata {
  camera?: string;
  lens?: string;
  aperture?: string;
  shutterSpeed?: string;
  iso?: string;
  focalLength?: string;
  date?: string;
  location?: string;
}

export interface Photo {
  id: string;
  src: string;           // Preview image for fast loading
  srcZoom: string;       // High-res image for zoom
  title: string;
  description: string;
  artistStatement: string;
  metadata: PhotoMetadata;
  album: string;
  albumIndex: number;
}

interface AdvancedImageViewerProps {
  isOpen: boolean;
  onClose: () => void;
  photos: Photo[];
  currentPhotoIndex: number;
  onPhotoChange: (index: number) => void;
  albums: string[];
  currentAlbum: string;
  onAlbumChange: (album: string) => void;
}

const AdvancedImageViewer: React.FC<AdvancedImageViewerProps> = ({
  isOpen,
  onClose,
  photos,
  currentPhotoIndex,
  onPhotoChange,
  albums,
  currentAlbum,
  onAlbumChange
}) => {
  const { t } = useTranslation();
  const [showDetails, setShowDetails] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [scale, setScale] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [currentImageSrc, setCurrentImageSrc] = useState('');
  const [isHighResLoaded, setIsHighResLoaded] = useState(false);
  
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchRef = useRef({
    lastDistance: 0,
    lastX: 0,
    lastY: 0,
    startX: 0,
    startY: 0,
    isZooming: false,
    isPanning: false
  });

  const currentPhoto = photos[currentPhotoIndex];
  const controlsTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-hide controls
  useEffect(() => {
    if (showControls && isOpen) {
      if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
      controlsTimeout.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
    return () => {
      if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
    };
  }, [showControls, isOpen]);

  // Reset image state when photo changes
  useEffect(() => {
    if (currentPhoto) {
      setScale(1);
      setTranslateX(0);
      setTranslateY(0);
      setShowControls(true);
      setCurrentImageSrc(currentPhoto.src); // Start with preview image
      setIsHighResLoaded(false);
      
      // Preload high-res image in background
      if (currentPhoto.srcZoom && currentPhoto.srcZoom !== currentPhoto.src) {
        const highResImg = new Image();
        highResImg.onload = () => {
          setIsHighResLoaded(true);
        };
        highResImg.src = currentPhoto.srcZoom;
      } else {
        setIsHighResLoaded(true); // If same image, consider it loaded
      }
    }
  }, [currentPhotoIndex, currentPhoto]);

  // Touch event handlers for zoom and pan
  const handleTouchStart = (e: React.TouchEvent) => {
    const touches = e.touches;
    
    if (touches.length === 1) {
      // Single touch - prepare for panning or navigation
      touchRef.current.startX = touches[0].clientX;
      touchRef.current.startY = touches[0].clientY;
      touchRef.current.lastX = touches[0].clientX;
      touchRef.current.lastY = touches[0].clientY;
    } else if (touches.length === 2) {
      // Two fingers - prepare for zooming
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      touchRef.current.lastDistance = Math.sqrt(dx * dx + dy * dy);
      touchRef.current.isZooming = true;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    const touches = e.touches;

    if (touches.length === 2 && touchRef.current.isZooming) {
      // Pinch to zoom
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (touchRef.current.lastDistance > 0) {
        const scaleChange = distance / touchRef.current.lastDistance;
        const newScale = Math.max(0.5, Math.min(scale * scaleChange, 5));
        setScale(newScale);
        
        // Switch to high-res image when zooming beyond 1.5x
        if (newScale > 1.5 && 
            isHighResLoaded && 
            currentPhoto?.srcZoom && 
            currentImageSrc !== currentPhoto.srcZoom) {
          setCurrentImageSrc(currentPhoto.srcZoom);
        }
        // Switch back to preview image when zooming back to normal view
        else if (newScale <= 1.5 && 
                 currentPhoto?.srcZoom && 
                 currentImageSrc !== currentPhoto.src) {
          setCurrentImageSrc(currentPhoto.src);
        }
      }
      
      touchRef.current.lastDistance = distance;
    } else if (touches.length === 1 && scale > 1) {
      // Pan when zoomed
      const deltaX = touches[0].clientX - touchRef.current.lastX;
      const deltaY = touches[0].clientY - touchRef.current.lastY;
      
      setTranslateX(prev => prev + deltaX);
      setTranslateY(prev => prev + deltaY);
      
      touchRef.current.lastX = touches[0].clientX;
      touchRef.current.lastY = touches[0].clientY;
      touchRef.current.isPanning = true;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touches = e.changedTouches;
    
    if (!touchRef.current.isZooming && !touchRef.current.isPanning && touches.length === 1) {
      const deltaX = Math.abs(touches[0].clientX - touchRef.current.startX);
      const deltaY = Math.abs(touches[0].clientY - touchRef.current.startY);
      
      // Check for swipe gestures
      if (deltaX > 50 && deltaX > deltaY) {
        // Horizontal swipe - change photo
        if (touches[0].clientX - touchRef.current.startX > 0) {
          // Swipe right - previous photo
          if (currentPhotoIndex > 0) {
            onPhotoChange(currentPhotoIndex - 1);
          }
        } else {
          // Swipe left - next photo
          if (currentPhotoIndex < photos.length - 1) {
            onPhotoChange(currentPhotoIndex + 1);
          }
        }
      } else if (deltaY > 80 && deltaY > deltaX) {
        // Vertical swipe - change album
        const currentAlbumIndex = albums.indexOf(currentAlbum);
        if (touches[0].clientY - touchRef.current.startY > 0) {
          // Swipe down - previous album
          if (currentAlbumIndex > 0) {
            onAlbumChange(albums[currentAlbumIndex - 1]);
          }
        } else {
          // Swipe up - next album
          if (currentAlbumIndex < albums.length - 1) {
            onAlbumChange(albums[currentAlbumIndex + 1]);
          }
        }
      } else if (deltaX < 10 && deltaY < 10) {
        // Tap - toggle controls
        setShowControls(!showControls);
      }
    }
    
    // Reset touch state
    touchRef.current.isZooming = false;
    touchRef.current.isPanning = false;
    touchRef.current.lastDistance = 0;
  };

  const resetImagePosition = () => {
    setScale(1);
    setTranslateX(0);
    setTranslateY(0);
    // Return to preview image when resetting
    if (currentPhoto?.src && currentImageSrc !== currentPhoto.src) {
      setCurrentImageSrc(currentPhoto.src);
    }
  };

  const toggleLike = () => {
    // TODO: Implement like functionality
    console.log('Toggle like for photo:', currentPhoto.id);
  };

  const sharePhoto = async () => {
    try {
      if (navigator.share) {
        // Native Web Share API (mobile)
        await navigator.share({
          title: currentPhoto.title,
          text: currentPhoto.description,
          url: window.location.href,
        });
      } else {
        // Fallback: Copy URL to clipboard
        await navigator.clipboard.writeText(window.location.href);
        console.log('URL copied to clipboard');
        // TODO: Show toast notification
      }
    } catch (error) {
      console.error('Error sharing photo:', error);
    }
  };

  const downloadPhoto = () => {
    try {
      // Use the high-res image if available, otherwise use regular src
      const imageUrl = currentPhoto.srcZoom || currentPhoto.src;
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = `${currentPhoto.title.replace(/\s+/g, '_')}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log('Downloaded photo:', currentPhoto.title);
    } catch (error) {
      console.error('Error downloading photo:', error);
    }
  };

  if (!currentPhoto) return null;

  return (
    <IonModal 
      isOpen={isOpen} 
      onDidDismiss={onClose}
      className="advanced-image-viewer"
      backdropDismiss={false}
    >
      <IonContent className="image-viewer-content">
        {/* Main Image Container */}
        <div 
          ref={containerRef}
          className="image-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            ref={imageRef}
            src={currentImageSrc}
            alt={currentPhoto.title}
            className="main-image"
            style={{
              transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
              transition: touchRef.current.isZooming || touchRef.current.isPanning ? 'none' : 'transform 0.3s ease'
            }}
            onDoubleClick={resetImagePosition}
          />
          
          {/* High-res loading indicator */}
          {!isHighResLoaded && currentPhoto?.srcZoom && currentPhoto.srcZoom !== currentPhoto.src && (
            <div className="loading-indicator">
              <IonSpinner name="crescent" />
              <p>{t('loadingHighRes')}</p>
            </div>
          )}
        </div>

        {/* Album Navigation Indicators */}
        <div className={`album-indicators ${showControls ? 'visible' : ''}`}>
          <div className="album-info">
            <IonIcon icon={chevronUp} className="album-nav-icon" />
            <span>{currentAlbum}</span>
            <IonIcon icon={chevronDown} className="album-nav-icon" />
          </div>
        </div>

        {/* Photo Counter */}
        <div className={`photo-counter ${showControls ? 'visible' : ''}`}>
          {currentPhotoIndex + 1} / {photos.length}
        </div>

        {/* Controls Overlay */}
        <div className={`controls-overlay ${showControls ? 'visible' : ''}`}>
          {/* Top Button Bar - Left Side */}
          <div className="top-button-bar-left">
            <button className="control-btn" onClick={onClose} title="Cerrar">
              <IonIcon icon={close} />
            </button>
            <button className="control-btn" onClick={sharePhoto} title="Compartir">
              <IonIcon icon={share} />
            </button>
            <button className="control-btn" onClick={downloadPhoto} title="Descargar">
              <IonIcon icon={download} />
            </button>
          </div>

          {/* Navigation Arrows */}
          <div className="navigation-arrows">
            <button 
              className="nav-btn nav-btn-left"
              onClick={() => currentPhotoIndex > 0 && onPhotoChange(currentPhotoIndex - 1)}
              disabled={currentPhotoIndex === 0}
              title="Foto anterior"
            >
              <IonIcon icon={chevronBack} />
            </button>
            
            <button 
              className="nav-btn nav-btn-right"
              onClick={() => currentPhotoIndex < photos.length - 1 && onPhotoChange(currentPhotoIndex + 1)}
              disabled={currentPhotoIndex === photos.length - 1}
              title="Foto siguiente"
            >
              <IonIcon icon={chevronForward} />
            </button>
          </div>

          {/* Bottom Action Buttons - Compacted */}
          <div className="bottom-action-bar">
            <button className="action-btn" onClick={() => setShowDetails(true)} title="Detalles">
              <IonIcon icon={informationCircle} />
            </button>
            <button className="action-btn" onClick={() => setShowComments(true)} title="Comentarios">
              <IonIcon icon={chatbubble} />
            </button>
            <button className="action-btn" onClick={toggleLike} title="Me gusta">
              <IonIcon icon={heart} />
            </button>
          </div>
        </div>

        {/* Photo Info Bar */}
        <div className={`photo-info-bar ${showControls ? 'visible' : ''}`}>
          <h3>{currentPhoto.title}</h3>
          <p>{currentPhoto.description}</p>
        </div>
      </IonContent>

      {/* Photo Details Modal */}
      <IonModal isOpen={showDetails} onDidDismiss={() => setShowDetails(false)}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{t('photoDetails')}</IonTitle>
            <IonButton slot="end" fill="clear" onClick={() => setShowDetails(false)}>
              <IonIcon icon={close} />
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent className="photo-details-content">
          <div className="details-section">
            <h2>{currentPhoto.title}</h2>
            <p className="artist-statement">{currentPhoto.artistStatement}</p>
            
            <div className="technical-details">
              <h3>{t('technicalDetails')}</h3>
              <div className="metadata-grid">
                {currentPhoto.metadata.camera && (
                  <div className="metadata-item">
                    <span className="label">{t('camera')}:</span>
                    <span className="value">{currentPhoto.metadata.camera}</span>
                  </div>
                )}
                {currentPhoto.metadata.lens && (
                  <div className="metadata-item">
                    <span className="label">{t('lens')}:</span>
                    <span className="value">{currentPhoto.metadata.lens}</span>
                  </div>
                )}
                {currentPhoto.metadata.aperture && (
                  <div className="metadata-item">
                    <span className="label">{t('aperture')}:</span>
                    <span className="value">{currentPhoto.metadata.aperture}</span>
                  </div>
                )}
                {currentPhoto.metadata.shutterSpeed && (
                  <div className="metadata-item">
                    <span className="label">{t('shutterSpeed')}:</span>
                    <span className="value">{currentPhoto.metadata.shutterSpeed}</span>
                  </div>
                )}
                {currentPhoto.metadata.iso && (
                  <div className="metadata-item">
                    <span className="label">ISO:</span>
                    <span className="value">{currentPhoto.metadata.iso}</span>
                  </div>
                )}
                {currentPhoto.metadata.focalLength && (
                  <div className="metadata-item">
                    <span className="label">{t('focalLength')}:</span>
                    <span className="value">{currentPhoto.metadata.focalLength}</span>
                  </div>
                )}
                {currentPhoto.metadata.date && (
                  <div className="metadata-item">
                    <span className="label">{t('date')}:</span>
                    <span className="value">{currentPhoto.metadata.date}</span>
                  </div>
                )}
                {currentPhoto.metadata.location && (
                  <div className="metadata-item">
                    <span className="label">{t('location')}:</span>
                    <span className="value">{currentPhoto.metadata.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </IonContent>
      </IonModal>

      {/* Comments Modal */}
      <IonModal isOpen={showComments} onDidDismiss={() => setShowComments(false)}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{t('comments')}</IonTitle>
            <IonButton slot="end" fill="clear" onClick={() => setShowComments(false)}>
              <IonIcon icon={close} />
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent className="comments-content">
          {/* TODO: Implement comments system */}
          <div className="comments-placeholder">
            <p>{t('commentsComingSoon')}</p>
          </div>
        </IonContent>
      </IonModal>
    </IonModal>
  );
};

export default AdvancedImageViewer;