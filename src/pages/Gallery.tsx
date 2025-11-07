import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg, IonButton, IonButtons, IonIcon, IonSegment, IonSegmentButton, IonLabel, IonMenuButton } from '@ionic/react';
import { camera, expand, grid, leaf, business, walk, shapes } from 'ionicons/icons';
import { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import './Gallery.css';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Galería de fotografías reales
  const photos = [
    {
      id: 1,
      src: '/Fotografias/P1013582.jpg',
      title: 'Composición Natural',
      category: 'naturaleza',
      description: 'Captura de elementos naturales con enfoque artístico'
    },
    {
      id: 2,
      src: '/Fotografias/P1026360.jpg',
      title: 'Perspectiva Única',
      category: 'arquitectura',
      description: 'Juego de luces y sombras en espacios urbanos'
    },
    {
      id: 3,
      src: '/Fotografias/P1026596.jpg',
      title: 'Momento Capturado',
      category: 'street',
      description: 'Fotografía callejera con narrativa visual'
    },
    {
      id: 4,
      src: '/Fotografias/P1026601.jpg',
      title: 'Detalles Urbanos',
      category: 'arquitectura',
      description: 'Enfoque en texturas y formas arquitectónicas'
    },
    {
      id: 5,
      src: '/Fotografias/P1026798.jpg',
      title: 'Escena Cotidiana',
      category: 'street',
      description: 'La belleza en los momentos ordinarios'
    },
    {
      id: 6,
      src: '/Fotografias/P1026932.jpg',
      title: 'Expresión Visual',
      category: 'conceptual',
      description: 'Exploración de conceptos a través de la imagen'
    },
    {
      id: 7,
      src: '/Fotografias/P1028134.jpg',
      title: 'Composición Abstracta',
      category: 'conceptual',
      description: 'Interpretación artística de formas y colores'
    }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Mi Portafolio</IonTitle>
          <IonButtons slot="end">
            <ThemeToggle />
            <IonButton>
              <IonIcon icon={camera} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Mi Portafolio</IonTitle>
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
              <IonLabel className="category-label">Todas</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="naturaleza" className="category-btn">
              <IonIcon icon={leaf} className="category-icon" />
              <IonLabel className="category-label">Naturaleza</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="arquitectura" className="category-btn">
              <IonIcon icon={business} className="category-icon" />
              <IonLabel className="category-label">Arquitectura</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="street" className="category-btn">
              <IonIcon icon={walk} className="category-icon" />
              <IonLabel className="category-label">Street</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="conceptual" className="category-btn">
              <IonIcon icon={shapes} className="category-icon" />
              <IonLabel className="category-label">Conceptual</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </div>

        {/* Grid de fotografías */}
        <IonGrid>
          <IonRow>
            {filteredPhotos.map((photo) => (
              <IonCol size="12" sizeMd="6" sizeLg="4" key={photo.id}>
                <IonCard className="photo-card">
                  <IonImg src={photo.src} alt={photo.title} />
                  <IonCardHeader>
                    <IonCardTitle>{photo.title}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p>{photo.description}</p>
                    <IonButton fill="clear" size="small">
                      <IonIcon icon={expand} slot="start" />
                      Ver completa
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Gallery;