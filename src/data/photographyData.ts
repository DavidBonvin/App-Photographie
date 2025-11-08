// Photo data with metadata and artist statements
export interface PhotoMetadata {
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
  src: string;
  title: string;
  description: string;
  artistStatement: string;
  metadata: PhotoMetadata;
  album: string;
  albumIndex: number;
}

export interface Album {
  id: string;
  name: string;
  description: string;
  coverPhoto: string;
  photos: Photo[];
}

// Sample photography data with professional metadata
export const photographyData: Album[] = [
  {
    id: 'portraits',
    name: 'Retratos',
    description: 'Explorando la esencia humana a través del lente',
    coverPhoto: 'https://picsum.photos/800/1200?random=1',
    photos: [
      {
        id: 'portrait-1',
        src: 'https://picsum.photos/800/1200?random=1',
        title: 'Susurros del Alma',
        description: 'La mirada que habla sin palabras',
        artistStatement: 'En esta obra busco capturar ese momento íntimo donde el alma se asoma a través de los ojos. Cada línea, cada sombra cuenta una historia de vulnerabilidad y fortaleza que coexisten en la naturaleza humana. Como las grandes obras del Louvre, esta fotografía invita al espectador a un diálogo silencioso con el sujeto.',
        metadata: {
          camera: 'Canon EOS R5',
          lens: '85mm f/1.4L',
          aperture: 'f/2.8',
          shutterSpeed: '1/125s',
          iso: '400',
          focalLength: '85mm',
          date: '15 de octubre, 2024',
          location: 'París, Francia'
        },
        album: 'portraits',
        albumIndex: 0
      },
      {
        id: 'portrait-2',
        src: 'https://picsum.photos/800/1200?random=2',
        title: 'Melancolía Urbana',
        description: 'Soledad en medio de la multitud',
        artistStatement: 'Esta pieza reflexiona sobre el aislamiento en la era moderna. El sujeto, rodeado de la geometría urbana, representa la paradoja de estar conectados pero solos. La composición utiliza las líneas arquitectónicas para crear un marco natural que enfatiza la fragilidad humana ante la inmensidad de la ciudad.',
        metadata: {
          camera: 'Canon EOS R5',
          lens: '50mm f/1.2L',
          aperture: 'f/2.0',
          shutterSpeed: '1/60s',
          iso: '800',
          focalLength: '50mm',
          date: '22 de septiembre, 2024',
          location: 'Londres, Reino Unido'
        },
        album: 'portraits',
        albumIndex: 1
      },
      {
        id: 'portrait-3',
        src: 'https://picsum.photos/800/1200?random=3',
        title: 'Ecos de Juventud',
        description: 'La inocencia en transición',
        artistStatement: 'Capturado en el umbral entre la infancia y la adolescencia, este retrato documenta ese momento efímero donde la inocencia se encuentra con la comprensión del mundo. La luz suave simboliza la pureza, mientras las sombras sugieren los misterios por descubrir.',
        metadata: {
          camera: 'Sony α7R IV',
          lens: '135mm f/1.8',
          aperture: 'f/2.8',
          shutterSpeed: '1/200s',
          iso: '200',
          focalLength: '135mm',
          date: '8 de noviembre, 2024',
          location: 'Barcelona, España'
        },
        album: 'portraits',
        albumIndex: 2
      }
    ]
  },
  {
    id: 'landscapes',
    name: 'Paisajes',
    description: 'La naturaleza como lienzo de emociones',
    coverPhoto: 'https://picsum.photos/1200/800?random=10',
    photos: [
      {
        id: 'landscape-1',
        src: 'https://picsum.photos/1200/800?random=10',
        title: 'Sinfonía del Amanecer',
        description: 'Cuando la luz abraza la montaña',
        artistStatement: 'Esta obra captura el momento sagrado donde la noche cede ante el día. La montaña, silenciosa testigo del tiempo, se viste de oro mientras las nubes danzan en una coreografía etérea. Es una meditación sobre la permanencia y el cambio, temas eternos que resuenan desde los paisajes de Turner hasta nuestros días.',
        metadata: {
          camera: 'Sony α7R IV',
          lens: '24-70mm f/2.8',
          aperture: 'f/8.0',
          shutterSpeed: '1/30s',
          iso: '100',
          focalLength: '35mm',
          date: '5 de octubre, 2024',
          location: 'Alpes Suizos'
        },
        album: 'landscapes',
        albumIndex: 0
      },
      {
        id: 'landscape-2',
        src: 'https://picsum.photos/1200/800?random=11',
        title: 'Espejo de Nubes',
        description: 'Reflexiones de infinito',
        artistStatement: 'El lago actúa como portal entre dos mundos: el tangible y el reflejado. Esta dualidad invita a cuestionar qué es real y qué es ilusión. La composición simétrica busca esa perfección matemática que los maestros renacentistas perseguían, encontrando en la naturaleza la geometría divina.',
        metadata: {
          camera: 'Canon EOS R6',
          lens: '16-35mm f/2.8L',
          aperture: 'f/11',
          shutterSpeed: '2s',
          iso: '50',
          focalLength: '24mm',
          date: '18 de septiembre, 2024',
          location: 'Lago Bled, Eslovenia'
        },
        album: 'landscapes',
        albumIndex: 1
      },
      {
        id: 'landscape-3',
        src: 'https://picsum.photos/1200/800?random=12',
        title: 'Catedral de Hielo',
        description: 'Arquitectura natural en estado puro',
        artistStatement: 'La naturaleza como arquitecta suprema crea estas catedrales de hielo que rivalizan con las más grandiosas construcciones humanas. Cada formación es única, efímera, preciosa. Esta imagen documenta un momento irrepetible en el tiempo geológico, una escultura temporal que solo los ojos privilegiados pueden contemplar.',
        metadata: {
          camera: 'Nikon Z9',
          lens: '14-24mm f/2.8',
          aperture: 'f/5.6',
          shutterSpeed: '1/250s',
          iso: '400',
          focalLength: '18mm',
          date: '2 de enero, 2024',
          location: 'Islandia'
        },
        album: 'landscapes',
        albumIndex: 2
      }
    ]
  },
  {
    id: 'street',
    name: 'Fotografía Callejera',
    description: 'Historias urbanas en movimiento',
    coverPhoto: 'https://picsum.photos/800/600?random=20',
    photos: [
      {
        id: 'street-1',
        src: 'https://picsum.photos/800/600?random=20',
        title: 'Prisa y Pausa',
        description: 'El ritmo de la ciudad moderna',
        artistStatement: 'En esta escena urbana se confrontan dos velocidades: la del mundo acelerado y la de la contemplación humana. El contraste entre el movimiento difuso de los transeúntes y la figura estática del protagonista nos habla de la resistencia individual ante el ritmo impuesto por la modernidad.',
        metadata: {
          camera: 'Leica Q2',
          lens: '28mm f/1.7',
          aperture: 'f/4.0',
          shutterSpeed: '1/15s',
          iso: '1600',
          focalLength: '28mm',
          date: '14 de noviembre, 2024',
          location: 'Nueva York, EE.UU.'
        },
        album: 'street',
        albumIndex: 0
      },
      {
        id: 'street-2',
        src: 'https://picsum.photos/800/600?random=21',
        title: 'Geometrías Humanas',
        description: 'Cuando la arquitectura abraza la vida',
        artistStatement: 'Las líneas arquitectónicas se convierten en marco narrativo de la experiencia humana. Esta composición explora cómo el espacio urbano influye en nuestros movimientos y comportamientos, creando patrones geométricos inconscientes que revelan la danza secreta entre humanidad y ciudad.',
        metadata: {
          camera: 'Fujifilm X-T5',
          lens: '23mm f/2',
          aperture: 'f/5.6',
          shutterSpeed: '1/125s',
          iso: '800',
          focalLength: '23mm',
          date: '7 de octubre, 2024',
          location: 'Tokio, Japón'
        },
        album: 'street',
        albumIndex: 1
      },
      {
        id: 'street-3',
        src: 'https://picsum.photos/800/600?random=22',
        title: 'Sombras de Memoria',
        description: 'El pasado que camina entre nosotros',
        artistStatement: 'Las sombras proyectadas en el pavimento crean una segunda realidad, un mundo paralelo donde la memoria y el presente se encuentran. Esta imagen captura ese momento donde lo efímero se vuelve eterno, donde una simple silueta cuenta la historia completa de una vida en movimiento.',
        metadata: {
          camera: 'Canon EOS R6',
          lens: '35mm f/1.4L',
          aperture: 'f/8.0',
          shutterSpeed: '1/60s',
          iso: '400',
          focalLength: '35mm',
          date: '25 de agosto, 2024',
          location: 'Roma, Italia'
        },
        album: 'street',
        albumIndex: 2
      }
    ]
  }
];

// Helper functions
export const getPhotosByAlbum = (albumId: string): Photo[] => {
  const album = photographyData.find(a => a.id === albumId);
  return album ? album.photos : [];
};

export const getAllPhotos = (): Photo[] => {
  return photographyData.flatMap(album => album.photos);
};

export const getAlbumNames = (): string[] => {
  return photographyData.map(album => album.name);
};

export const getPhotoById = (photoId: string): Photo | undefined => {
  return getAllPhotos().find(photo => photo.id === photoId);
};

export const getNextPhoto = (currentPhoto: Photo, albumPhotos: Photo[]): Photo | null => {
  const currentIndex = albumPhotos.findIndex(p => p.id === currentPhoto.id);
  return currentIndex < albumPhotos.length - 1 ? albumPhotos[currentIndex + 1] : null;
};

export const getPreviousPhoto = (currentPhoto: Photo, albumPhotos: Photo[]): Photo | null => {
  const currentIndex = albumPhotos.findIndex(p => p.id === currentPhoto.id);
  return currentIndex > 0 ? albumPhotos[currentIndex - 1] : null;
};