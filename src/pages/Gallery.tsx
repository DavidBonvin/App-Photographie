import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg, IonButton, IonButtons, IonIcon, IonSegment, IonSegmentButton, IonLabel, IonMenuButton } from '@ionic/react';
import { camera, expand, grid, leaf, business, walk } from 'ionicons/icons';
import { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import LanguageSelector from '../components/LanguageSelector';
import AdvancedImageViewer from '../components/AdvancedImageViewer';
import { useTranslation } from '../i18n/useTranslation';
import { photographyData, getAllPhotos, getAlbumNames, type Photo } from '../data/photographyData';
import './Gallery.css';

const Gallery: React.FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<string>('all');
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  
  const { t, language } = useTranslation();

  // Get current photos based on selected album
  const getCurrentPhotos = (): Photo[] => {
    if (selectedAlbum === 'all') {
      return getAllPhotos();
    }
    const album = photographyData.find(a => a.id === selectedAlbum);
    return album ? album.photos : [];
  };

  const currentPhotos = getCurrentPhotos();
  const albumNames = getAlbumNames();

  const openImageViewer = (photoIndex: number) => {
    setCurrentPhotoIndex(photoIndex);
    setIsImageViewerOpen(true);
  };

  const closeImageViewer = () => {
    setIsImageViewerOpen(false);
  };

  const handlePhotoChange = (newIndex: number) => {
    setCurrentPhotoIndex(newIndex);
  };

  const handleAlbumChange = (newAlbum: string) => {
    const album = photographyData.find(a => a.name === newAlbum);
    if (album) {
      setSelectedAlbum(album.id);
      setCurrentPhotoIndex(0);
    }
  };

  // Get album display name
  const getAlbumDisplayName = (albumId: string): string => {
    const albumMap: { [key: string]: string } = {
      'portraits': t('gallery.categories.portraits') || 'Retratos',
      'landscapes': t('gallery.categories.landscapes') || 'Paisajes',
      'street': t('gallery.categories.street') || 'Fotografía Callejera'
    };
    return albumMap[albumId] || t('gallery.categories.all') || 'Todas';
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar key={`gallery-toolbar-${language}`}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{t('gallery.title')}</IonTitle>
          <IonButtons slot="end">
            <LanguageSelector />
            <ThemeToggle />
            <IonButton>
              <IonIcon icon={camera} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar key={`gallery-condense-toolbar-${language}`}>
            <IonTitle size="large">{t('gallery.title')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        {/* Album Filters */}
        <div className="category-filter">
          <IonSegment 
            value={selectedAlbum} 
            onIonChange={e => setSelectedAlbum(e.detail.value as string)}
            className="category-segment"
          >
            <IonSegmentButton value="all" className="category-btn">
              <IonIcon icon={grid} className="category-icon" />
              <IonLabel className="category-label-desktop">{t('gallery.categories.all') || 'Todas'}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="portraits" className="category-btn">
              <IonIcon icon={business} className="category-icon" />
              <IonLabel className="category-label-desktop">{t('gallery.categories.portraits') || 'Retratos'}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="landscapes" className="category-btn">
              <IonIcon icon={leaf} className="category-icon" />
              <IonLabel className="category-label-desktop">{t('gallery.categories.landscapes') || 'Paisajes'}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="street" className="category-btn">
              <IonIcon icon={walk} className="category-icon" />
              <IonLabel className="category-label-desktop">{t('gallery.categories.street') || 'Callejera'}</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </div>

        {/* Photo Grid */}
        <IonGrid className="photo-grid">
          <IonRow>
            {currentPhotos.map((photo, index) => (
              <IonCol size="12" sizeMd="6" sizeLg="4" key={`photo-${photo.id}-${language}`}>
                <IonCard className="photo-card" onClick={() => openImageViewer(index)}>
                  <IonImg src={photo.src} alt={photo.title} />
                  <IonCardHeader>
                    <IonCardTitle>{photo.title}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p>{photo.description}</p>
                    <IonButton 
                      fill="clear" 
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        openImageViewer(index);
                      }}
                    >
                      <IonIcon icon={expand} slot="start" />
                      {t('gallery.viewButton') || 'Ver'}
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>

      {/* Advanced Image Viewer */}
      <AdvancedImageViewer
        isOpen={isImageViewerOpen}
        onClose={closeImageViewer}
        photos={currentPhotos}
        currentPhotoIndex={currentPhotoIndex}
        onPhotoChange={handlePhotoChange}
        albums={albumNames}
        currentAlbum={getAlbumDisplayName(selectedAlbum)}
        onAlbumChange={handleAlbumChange}
      />
    </IonPage>
  );
};

export default Gallery;