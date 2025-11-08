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
  src: string;           // Preview image for fast loading
  srcZoom: string;       // High-res image for zoom
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

// Helper function to get base URL
const getBaseUrl = () => {
  return import.meta.env.DEV ? '/' : import.meta.env.BASE_URL;
};

// Sample photography data with real photos and professional metadata
export const photographyData: Album[] = [
  {
    id: 'naturaleza',
    name: 'Naturaleza',
    description: 'Explorando la belleza natural a través del lente',
    coverPhoto: `${getBaseUrl()}Fotografias/P1013582.jpg`,
    photos: [
      {
        id: 'nature-1',
        src: `${getBaseUrl()}Fotografias/P1013582.jpg`,
        srcZoom: `${getBaseUrl()}Fotografias/P1013582.jpg`, // Por ahora la misma, luego optimizaremos
        title: 'Composición Natural',
        description: 'Captura de elementos naturales con enfoque artístico',
        artistStatement: 'En esta obra busco capturar la esencia de la naturaleza en su estado más puro. Cada elemento en la composición habla de la armonía natural que existe cuando el humano observa sin interferir. La luz natural se convierte en pincel, creando una sinfonía visual que invita a la contemplación.',
        metadata: {
          camera: 'Panasonic Lumix',
          lens: 'Lumix G Vario 14-42mm',
          aperture: 'f/5.6',
          shutterSpeed: '1/125s',
          iso: '200',
          focalLength: '25mm',
          date: '15 de octubre, 2024',
          location: 'Parque Natural'
        },
        album: 'naturaleza',
        albumIndex: 0
      },
      {
        id: 'nature-2',
        src: `${getBaseUrl()}Fotografias/P1027713.jpg`,
        srcZoom: `${getBaseUrl()}Fotografias/P1027713.jpg`,
        title: 'Serenidad Natural',
        description: 'Momentos de calma en el entorno natural',
        artistStatement: 'La serenidad se encuentra en los detalles más simples de la naturaleza. Esta imagen captura ese momento de pausa donde el tiempo parece detenerse, invitando al espectador a encontrar su propio espacio de tranquilidad interior.',
        metadata: {
          camera: 'Panasonic Lumix',
          lens: 'Lumix G Vario 14-42mm',
          aperture: 'f/4.0',
          shutterSpeed: '1/60s',
          iso: '100',
          focalLength: '35mm',
          date: '20 de octubre, 2024',
          location: 'Sendero Natural'
        },
        album: 'naturaleza',
        albumIndex: 1
      },
      {
        id: 'nature-3',
        src: `${getBaseUrl()}Fotografias/P1028032.jpg`,
        srcZoom: `${getBaseUrl()}Fotografias/P1028032.jpg`,
        title: 'Texturas Orgánicas',
        description: 'Explorando las texturas naturales',
        artistStatement: 'Las texturas naturales cuentan historias milenarias. Cada línea, cada forma es el resultado de procesos que trascienden nuestra comprensión temporal. En esta obra, la cámara se convierte en arqueólogo visual, documentando la historia escrita por la naturaleza.',
        metadata: {
          camera: 'Panasonic Lumix',
          lens: 'Lumix G Vario 14-42mm',
          aperture: 'f/8.0',
          shutterSpeed: '1/200s',
          iso: '400',
          focalLength: '42mm',
          date: '25 de octubre, 2024',
          location: 'Bosque Nacional'
        },
        album: 'naturaleza',
        albumIndex: 2
      }
    ]
  },
  {
    id: 'arquitectura',
    name: 'Arquitectura',
    description: 'Geometrías urbanas y espacios construidos',
    coverPhoto: `${getBaseUrl()}Fotografias/P1026360.jpg`,
    photos: [
      {
        id: 'arch-1',
        src: `${getBaseUrl()}Fotografias/P1026360.jpg`,
        srcZoom: `${getBaseUrl()}Fotografias/P1026360.jpg`,
        title: 'Perspectiva Única',
        description: 'Juego de luces y sombras en espacios urbanos',
        artistStatement: 'La arquitectura moderna crea nuevos lenguajes visuales donde la luz y la sombra dialogan en perfecta armonía. Esta perspectiva revela cómo los espacios construidos pueden generar emociones tan profundas como las que encontramos en la naturaleza.',
        metadata: {
          camera: 'Panasonic Lumix',
          lens: 'Lumix G Vario 14-42mm',
          aperture: 'f/11',
          shutterSpeed: '1/250s',
          iso: '200',
          focalLength: '14mm',
          date: '12 de octubre, 2024',
          location: 'Centro Urbano'
        },
        album: 'arquitectura',
        albumIndex: 0
      },
      {
        id: 'arch-2',
        src: `${getBaseUrl()}Fotografias/P1026601.jpg`,
        srcZoom: `${getBaseUrl()}Fotografias/P1026601.jpg`,
        title: 'Detalles Urbanos',
        description: 'Enfoque en texturas y formas arquitectónicas',
        artistStatement: 'Los detalles arquitectónicos revelan la intención del creador. Cada línea, cada ángulo es una decisión consciente que busca comunicar algo específico. Mi lente se detiene en estos detalles para descifrar el mensaje oculto en la construcción.',
        metadata: {
          camera: 'Panasonic Lumix',
          lens: 'Lumix G Vario 14-42mm',
          aperture: 'f/5.6',
          shutterSpeed: '1/125s',
          iso: '320',
          focalLength: '28mm',
          date: '14 de octubre, 2024',
          location: 'Distrito Histórico'
        },
        album: 'arquitectura',
        albumIndex: 1
      },
      {
        id: 'arch-3',
        src: `${getBaseUrl()}Fotografias/P1028017.jpg`,
        srcZoom: `${getBaseUrl()}Fotografias/P1028017.jpg`,
        title: 'Geometría Moderna',
        description: 'Formas contemporáneas en el paisaje urbano',
        artistStatement: 'La geometría moderna desafía nuestra percepción tradicional del espacio. Estas formas contemporáneas no solo cumplen una función práctica, sino que redefinen nuestra relación con el entorno construido, creando nuevas formas de habitar y percibir.',
        metadata: {
          camera: 'Panasonic Lumix',
          lens: 'Lumix G Vario 14-42mm',
          aperture: 'f/8.0',
          shutterSpeed: '1/160s',
          iso: '250',
          focalLength: '35mm',
          date: '18 de octubre, 2024',
          location: 'Zona Comercial'
        },
        album: 'arquitectura',
        albumIndex: 2
      }
    ]
  },
  {
    id: 'street',
    name: 'Fotografía Callejera',
    description: 'Historias urbanas y momentos capturados',
    coverPhoto: `${getBaseUrl()}Fotografias/P1026596.jpg`,
    photos: [
      {
        id: 'street-1',
        src: `${getBaseUrl()}Fotografias/P1026596.jpg`,
        srcZoom: `${getBaseUrl()}Fotografias/P1026596.jpg`,
        title: 'Momento Capturado',
        description: 'Fotografía callejera con narrativa visual',
        artistStatement: 'La fotografía callejera es el arte de capturar la vida tal como sucede. Este momento, irrepetible y auténtico, nos habla de la condición humana en su expresión más pura. La calle se convierte en escenario donde cada persona escribe su propia historia.',
        metadata: {
          camera: 'Panasonic Lumix',
          lens: 'Lumix G Vario 14-42mm',
          aperture: 'f/4.0',
          shutterSpeed: '1/60s',
          iso: '800',
          focalLength: '42mm',
          date: '10 de octubre, 2024',
          location: 'Calle Peatonal'
        },
        album: 'street',
        albumIndex: 0
      },
      {
        id: 'street-2',
        src: `${getBaseUrl()}Fotografias/P1026798.jpg`,
        srcZoom: `${getBaseUrl()}Fotografias/P1026798.jpg`,
        title: 'Escena Cotidiana',
        description: 'La belleza en los momentos ordinarios',
        artistStatement: 'En lo cotidiano se esconde la verdadera poesía de la vida urbana. Esta escena ordinaria se transforma en extraordinaria cuando la observamos con la mirada del artista, revelando la belleza que existe en los momentos más simples de nuestro día a día.',
        metadata: {
          camera: 'Panasonic Lumix',
          lens: 'Lumix G Vario 14-42mm',
          aperture: 'f/2.8',
          shutterSpeed: '1/125s',
          iso: '640',
          focalLength: '25mm',
          date: '16 de octubre, 2024',
          location: 'Plaza Central'
        },
        album: 'street',
        albumIndex: 1
      },
      {
        id: 'street-3',
        src: `${getBaseUrl()}Fotografias/PSX_20251104_224647.jpg`,
        srcZoom: `${getBaseUrl()}Fotografias/PSX_20251104_224647.jpg`,
        title: 'Composición Urbana',
        description: 'Elementos urbanos en armonía visual',
        artistStatement: 'La ciudad es un lienzo en constante transformación. Esta composición urbana captura la armonía visual que emerge del aparente caos citadino, donde cada elemento encuentra su lugar en una sinfonía visual contemporánea.',
        metadata: {
          camera: 'Smartphone',
          lens: 'Lente Principal',
          aperture: 'f/1.8',
          shutterSpeed: '1/100s',
          iso: '320',
          focalLength: '26mm equiv.',
          date: '4 de noviembre, 2024',
          location: 'Área Urbana'
        },
        album: 'street',
        albumIndex: 2
      }
    ]
  },
  {
    id: 'conceptual',
    name: 'Conceptual',
    description: 'Exploración artística y conceptos visuales',
    coverPhoto: `${getBaseUrl()}Fotografias/P1026932.jpg`,
    photos: [
      {
        id: 'concept-1',
        src: `${getBaseUrl()}Fotografias/P1026932.jpg`,
        srcZoom: `${getBaseUrl()}Fotografias/P1026932.jpg`,
        title: 'Expresión Visual',
        description: 'Exploración de conceptos a través de la imagen',
        artistStatement: 'El arte conceptual trasciende la representación literal para adentrarse en el reino de las ideas. Esta obra explora conceptos abstractos a través del lenguaje visual, invitando al espectador a participar activamente en la construcción del significado.',
        metadata: {
          camera: 'Panasonic Lumix',
          lens: 'Lumix G Vario 14-42mm',
          aperture: 'f/2.8',
          shutterSpeed: '1/80s',
          iso: '400',
          focalLength: '20mm',
          date: '22 de octubre, 2024',
          location: 'Estudio'
        },
        album: 'conceptual',
        albumIndex: 0
      },
      {
        id: 'concept-2',
        src: `${getBaseUrl()}Fotografias/P1028134.jpg`,
        srcZoom: `${getBaseUrl()}Fotografias/P1028134.jpg`,
        title: 'Composición Abstracta',
        description: 'Interpretación artística de formas y colores',
        artistStatement: 'La abstracción libera a la fotografía de sus ataduras representativas. En esta composición, las formas y colores dialogan en un lenguaje puro, creando significados que emergen desde la percepción individual de cada observador.',
        metadata: {
          camera: 'Panasonic Lumix',
          lens: 'Lumix G Vario 14-42mm',
          aperture: 'f/5.6',
          shutterSpeed: '1/200s',
          iso: '100',
          focalLength: '30mm',
          date: '28 de octubre, 2024',
          location: 'Espacio Creativo'
        },
        album: 'conceptual',
        albumIndex: 1
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