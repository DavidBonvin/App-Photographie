import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg, IonButton, IonButtons, IonIcon, IonSegment, IonSegmentButton, IonLabel, IonMenuButton } from '@ionic/react';
import { camera, expand, grid, leaf, business, walk, shapes } from 'ionicons/icons';
import { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import LanguageSelector from '../components/LanguageSelector';
import ImageViewer from '../components/ImageViewer';
import { useTranslation } from '../i18n/useTranslation';
import './Gallery.css';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    description: string;
    category: string;
  } | null>(null);
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
  
  const { t, language, tArray } = useTranslation();

  console.log('Gallery component re-rendered with language:', language);
  console.log('Gallery title translation:', t('gallery.title'));

  // Base URL para imágenes - funciona tanto local como en GitHub Pages
  const baseUrl = import.meta.env.DEV ? '/' : import.meta.env.BASE_URL;

  // Obtener traducciones de fotos
  const photoTranslations = tArray('gallery.photos') as unknown as Array<{title: string, description: string}>;

  // Galería de fotografías reales
  const photos = [
    {
      id: 1,
      src: `${baseUrl}Fotografias/P1013582.jpg`,
      title: photoTranslations[0]?.title || 'Composición Natural',
      category: 'naturaleza',
      description: photoTranslations[0]?.description || 'Captura de elementos naturales con enfoque artístico'
    },
    {
      id: 2,
      src: `${baseUrl}Fotografias/P1026360.jpg`,
      title: photoTranslations[1]?.title || 'Perspectiva Única',
      category: 'arquitectura',
      description: photoTranslations[1]?.description || 'Juego de luces y sombras en espacios urbanos'
    },
    {
      id: 3,
      src: `${baseUrl}Fotografias/P1026596.jpg`,
      title: photoTranslations[2]?.title || 'Momento Capturado',
      category: 'street',
      description: photoTranslations[2]?.description || 'Fotografía callejera con narrativa visual'
    },
    {
      id: 4,
      src: `${baseUrl}Fotografias/P1026601.jpg`,
      title: photoTranslations[3]?.title || 'Detalles Urbanos',
      category: 'arquitectura',
      description: photoTranslations[3]?.description || 'Enfoque en texturas y formas arquitectónicas'
    },
    {
      id: 5,
      src: `${baseUrl}Fotografias/P1026798.jpg`,
      title: photoTranslations[4]?.title || 'Escena Cotidiana',
      category: 'street',
      description: photoTranslations[4]?.description || 'La belleza en los momentos ordinarios'
    },
    {
      id: 6,
      src: `${baseUrl}Fotografias/P1026932.jpg`,
      title: photoTranslations[5]?.title || 'Expresión Visual',
      category: 'conceptual',
      description: photoTranslations[5]?.description || 'Exploración de conceptos a través de la imagen'
    },
    {
      id: 7,
      src: `${baseUrl}Fotografias/P1028134.jpg`,
      title: photoTranslations[6]?.title || 'Composición Abstracta',
      category: 'conceptual',
      description: photoTranslations[6]?.description || 'Interpretación artística de formas y colores'
    }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  // Función para abrir el visor de imágenes
  const openImageViewer = (photo: typeof photos[0]) => {
    setSelectedImage({
      src: photo.src,
      title: photo.title,
      description: photo.description,
      category: getCategoryDisplayName(photo.category)
    });
    setIsImageViewerOpen(true);
  };

  // Función para cerrar el visor de imágenes
  const closeImageViewer = () => {
    setIsImageViewerOpen(false);
    setSelectedImage(null);
  };

  // Función para obtener el nombre de categoría traducido
  const getCategoryDisplayName = (category: string): string => {
    const categoryMap: { [key: string]: string } = {
      'naturaleza': t('gallery.categories.nature'),
      'arquitectura': t('gallery.categories.architecture'),
      'street': t('gallery.categories.street'),
      'conceptual': t('gallery.categories.conceptual')
    };
    return categoryMap[category] || category;
  };

  // Debug temporal
  console.log('Selected category:', selectedCategory);
  console.log('Filtered photos:', filteredPhotos.length);
  console.log('BaseURL:', baseUrl);

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
        
        {/* Filtros por categoría */}
        <div className="category-filter">
          <IonSegment 
            value={selectedCategory} 
            onIonChange={e => setSelectedCategory(e.detail.value as string)}
            className="category-segment"
          >
            <IonSegmentButton value="all" className="category-btn">
              <IonIcon icon={grid} className="category-icon" />
              <IonLabel className="category-label">{t('gallery.categories.all')}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="naturaleza" className="category-btn">
              <IonIcon icon={leaf} className="category-icon" />
              <IonLabel className="category-label">{t('gallery.categories.nature')}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="arquitectura" className="category-btn">
              <IonIcon icon={business} className="category-icon" />
              <IonLabel className="category-label">{t('gallery.categories.architecture')}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="street" className="category-btn">
              <IonIcon icon={walk} className="category-icon" />
              <IonLabel className="category-label">{t('gallery.categories.street')}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="conceptual" className="category-btn">
              <IonIcon icon={shapes} className="category-icon" />
              <IonLabel className="category-label">{t('gallery.categories.conceptual')}</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </div>

        {/* Grid de fotografías */}
        <IonGrid>
          <IonRow>
            {filteredPhotos.map((photo) => (
              <IonCol size="12" sizeMd="6" sizeLg="4" key={`photo-${photo.id}-${language}`}>
                <IonCard className="photo-card" onClick={() => openImageViewer(photo)}>
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
                        e.stopPropagation(); // Evita el doble click
                        openImageViewer(photo);
                      }}
                    >
                      <IonIcon icon={expand} slot="start" />
                      {t('gallery.viewButton')}
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>

      {/* Image Viewer Modal */}
      {selectedImage && (
        <ImageViewer
          isOpen={isImageViewerOpen}
          onClose={closeImageViewer}
          imageSrc={selectedImage.src}
          imageTitle={selectedImage.title}
          imageDescription={selectedImage.description}
          category={selectedImage.category}
        />
      )}
    </IonPage>
  );
};

export default Gallery;