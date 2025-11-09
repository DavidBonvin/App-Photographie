import React, { createContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'fr' | 'en';

// Definimos las traducciones directamente en TypeScript
const translations = {
  es: {
    app: {
      title: "Mi Portafolio"
    },
    welcome: {
      title: "Portafolio Fotográfico",
      subtitle: "Descubre un mundo cautivado por la belleza",
      tagline: "Arte • Pasión • Visión",
      enter: "Entrar"
    },
    navigation: {
      portfolio: "Portafolio",
      home: "Inicio",
      gallery: "Galería",
      about: "Sobre mí",
      contact: "Contacto"
    },
    gallery: {
      title: "Mi Portafolio",
      categories: {
        all: "Todas",
        nature: "Naturaleza",
        architecture: "Arquitectura",
        street: "Street",
        conceptual: "Conceptual"
      },
      photos: [
        {
          title: "Composición Natural",
          description: "Captura de elementos naturales con enfoque artístico"
        },
        {
          title: "Perspectiva Única",
          description: "Juego de luces y sombras en espacios urbanos"
        },
        {
          title: "Momento Capturado",
          description: "Fotografía callejera con narrativa visual"
        },
        {
          title: "Detalles Urbanos",
          description: "Enfoque en texturas y formas arquitectónicas"
        },
        {
          title: "Escena Cotidiana",
          description: "La belleza en los momentos ordinarios"
        },
        {
          title: "Expresión Visual",
          description: "Exploración de conceptos a través de la imagen"
        },
        {
          title: "Composición Abstracta",
          description: "Interpretación artística de formas y colores"
        }
      ],
      viewButton: "Ver completa",
      imageViewer: {
        tapToHideControls: "Toca para ocultar controles"
      }
    },
    about: {
      title: "Sobre mí",
      name: "David Cordoba",
      profession: "Fotógrafo",
      story: {
        title: "Mi Historia",
        paragraph1: "Soy un fotógrafo apasionado con experiencia capturando momentos únicos y creando imágenes que cuentan historias. Mi especialidad abarca desde retratos íntimos hasta paisajes espectaculares, siempre buscando la perfecta combinación entre técnica y creatividad.",
        paragraph2: "Mi filosofía se basa en capturar la esencia auténtica de cada momento, ya sea en una sesión de retrato, una boda especial o un paisaje natural. Cada fotografía es una oportunidad de contar una historia única."
      },
      specialties: {
        title: "Especialidades"
      },
      skills: [
        "Fotografía de Retrato",
        "Fotografía de Paisaje", 
        "Fotografía de Eventos",
        "Edición Digital",
        "Lightroom",
        "Photoshop",
        "Fotografía Nocturna",
        "Fotografía de Producto"
      ],
      activities: [
        {
          title: "Concepteur Développeur",
          description: "Marcq-en-Barœul, Francia"
        },
        {
          title: "Músico - Los Parceros del Norte",
          description: "Grupo de cumbia colombiana"
        },
        {
          title: "Presidente de Asociación",
          description: "Pasos Prohibidos, Lille - Francia"
        }
      ],
      activitiesTitle: "Mis Actividades"
    },
    contact: {
      title: "Contacto",
      hero: {
        title: "¡Trabajemos juntos!",
        subtitle: "Estoy aquí para capturar tus momentos más especiales"
      },
      info: {
        email: {
          title: "Email",
          value: "bonvincode@gmail.com",
          description: "Respondo en 24 horas"
        },
        phone: {
          title: "Teléfono", 
          value: "+33 7 49 39 31 07",
          description: "Llamadas y WhatsApp"
        },
        location: {
          title: "Ubicación",
          value: "Lille, Francia", 
          description: "Disponible para viajes"
        },
        schedule: {
          title: "Horario",
          value: "Lun - Vie: 9:00 - 18:00",
          description: "Fines de semana por cita"
        }
      },
      form: {
        title: "Envíame un mensaje",
        name: "Nombre",
        email: "Email",
        phone: "Teléfono",
        subject: "Asunto",
        message: "Mensaje",
        send: "Enviar Mensaje",
        namePlaceholder: "Tu nombre completo",
        emailPlaceholder: "tu@email.com",
        phonePlaceholder: "+33 123 456 789",
        subjectPlaceholder: "Asunto del mensaje",
        messagePlaceholder: "Cuéntame sobre tu proyecto...",
        successMessage: "¡Mensaje enviado! Te contactaré pronto."
      },
      services: {
        title: "Servicios",
        portrait: {
          title: "Sesiones de Retrato",
          price: "Desde 150€",
          duration: "1-2 horas", 
          includes: "Edición profesional incluida"
        },
        wedding: {
          title: "Bodas y Eventos",
          price: "Desde 800€",
          duration: "Día completo",
          includes: "Galería online incluida"
        },
        commercial: {
          title: "Fotografía Comercial",
          price: "Desde 300€", 
          duration: "Según proyecto",
          includes: "Derechos comerciales incluidos"
        }
      }
    }
  },
  en: {
    app: {
      title: "My Portfolio"
    },
    welcome: {
      title: "Photography Portfolio",
      subtitle: "Discover a world captivated by beauty",
      tagline: "Art • Passion • Vision",
      enter: "Enter"
    },
    navigation: {
      portfolio: "Portfolio",
      home: "Home",
      gallery: "Gallery",
      about: "About",
      contact: "Contact"
    },
    gallery: {
      title: "My Portfolio",
      categories: {
        all: "All",
        nature: "Nature",
        architecture: "Architecture",
        street: "Street",
        conceptual: "Conceptual"
      },
      photos: [
        {
          title: "Natural Composition",
          description: "Capture of natural elements with artistic focus"
        },
        {
          title: "Unique Perspective",
          description: "Play of lights and shadows in urban spaces"
        },
        {
          title: "Captured Moment",
          description: "Street photography with visual narrative"
        },
        {
          title: "Urban Details",
          description: "Focus on architectural textures and forms"
        },
        {
          title: "Everyday Scene",
          description: "Beauty in ordinary moments"
        },
        {
          title: "Visual Expression",
          description: "Exploration of concepts through imagery"
        },
        {
          title: "Abstract Composition",
          description: "Artistic interpretation of shapes and colors"
        }
      ],
      viewButton: "View full",
      imageViewer: {
        tapToHideControls: "Tap to hide controls"
      }
    },
    about: {
      title: "About",
      name: "David Cordoba",
      profession: "Photographer",
      story: {
        title: "My Story",
        paragraph1: "I am a passionate photographer with experience capturing unique moments and creating images that tell stories. My specialty ranges from intimate portraits to spectacular landscapes, always seeking the perfect combination of technique and creativity.",
        paragraph2: "My philosophy is based on capturing the authentic essence of each moment, whether in a portrait session, a special wedding or a natural landscape. Each photograph is an opportunity to tell a unique story."
      },
      specialties: {
        title: "Specialties"
      },
      skills: [
        "Portrait Photography",
        "Landscape Photography",
        "Event Photography", 
        "Digital Editing",
        "Lightroom",
        "Photoshop",
        "Night Photography",
        "Product Photography"
      ],
      activities: [
        {
          title: "Developer Designer",
          description: "Marcq-en-Barœul, France"
        },
        {
          title: "Musician - Los Parceros del Norte",
          description: "Colombian cumbia group"
        },
        {
          title: "Association President",
          description: "Pasos Prohibidos, Lille - France"
        }
      ],
      activitiesTitle: "My Activities"
    },
    contact: {
      title: "Contact",
      hero: {
        title: "Let's work together!",
        subtitle: "I'm here to capture your most special moments"
      },
      info: {
        email: {
          title: "Email",
          value: "bonvincode@gmail.com", 
          description: "I respond within 24 hours"
        },
        phone: {
          title: "Phone",
          value: "+33 7 49 39 31 07",
          description: "Calls and WhatsApp"
        },
        location: {
          title: "Location",
          value: "Lille, France",
          description: "Available for travel"
        },
        schedule: {
          title: "Schedule", 
          value: "Mon - Fri: 9:00 - 18:00",
          description: "Weekends by appointment"
        }
      },
      form: {
        title: "Send me a message",
        name: "Name",
        email: "Email",
        phone: "Phone",
        subject: "Subject", 
        message: "Message",
        send: "Send Message",
        namePlaceholder: "Your full name",
        emailPlaceholder: "your@email.com",
        phonePlaceholder: "+33 123 456 789",
        subjectPlaceholder: "Message subject",
        messagePlaceholder: "Tell me about your project...",
        successMessage: "Message sent! I'll contact you soon."
      },
      services: {
        title: "Services",
        portrait: {
          title: "Portrait Sessions",
          price: "From 150€",
          duration: "1-2 hours",
          includes: "Professional editing included"
        },
        wedding: {
          title: "Weddings & Events", 
          price: "From 800€",
          duration: "Full day",
          includes: "Online gallery included"
        },
        commercial: {
          title: "Commercial Photography",
          price: "From 300€",
          duration: "Project based",
          includes: "Commercial rights included"
        }
      }
    }
  },
  fr: {
    app: {
      title: "Mon Portfolio"
    },
    welcome: {
      title: "Portfolio Photographique",
      subtitle: "Découvrez un monde captivé par la beauté",
      tagline: "Art • Passion • Vision",
      enter: "Entrer"
    },
    navigation: {
      portfolio: "Portfolio",
      home: "Accueil",
      gallery: "Galerie",
      about: "À propos",
      contact: "Contact"
    },
    gallery: {
      title: "Mon Portfolio",
      categories: {
        all: "Toutes",
        nature: "Nature",
        architecture: "Architecture",
        street: "Street",
        conceptual: "Conceptuel"
      },
      photos: [
        {
          title: "Composition Naturelle",
          description: "Capture d'éléments naturels avec approche artistique"
        },
        {
          title: "Perspective Unique",
          description: "Jeu de lumières et d'ombres dans les espaces urbains"
        },
        {
          title: "Moment Capturé",
          description: "Photographie de rue avec narration visuelle"
        },
        {
          title: "Détails Urbains",
          description: "Focus sur les textures et formes architecturales"
        },
        {
          title: "Scène Quotidienne",
          description: "La beauté dans les moments ordinaires"
        },
        {
          title: "Expression Visuelle",
          description: "Exploration de concepts à travers l'image"
        },
        {
          title: "Composition Abstraite",
          description: "Interprétation artistique de formes et couleurs"
        }
      ],
      viewButton: "Voir complet",
      imageViewer: {
        tapToHideControls: "Appuyez pour masquer les contrôles"
      }
    },
    about: {
      title: "À propos",
      name: "David Cordoba",
      profession: "Photographe",
      story: {
        title: "Mon Histoire",
        paragraph1: "Je suis un photographe passionné avec de l'expérience dans la capture de moments uniques et la création d'images qui racontent des histoires. Ma spécialité va des portraits intimes aux paysages spectaculaires, recherchant toujours la combinaison parfaite entre technique et créativité.",
        paragraph2: "Ma philosophie est basée sur la capture de l'essence authentique de chaque moment, que ce soit lors d'une séance de portrait, d'un mariage spécial ou d'un paysage naturel. Chaque photographie est une opportunité de raconter une histoire unique."
      },
      specialties: {
        title: "Spécialités"
      },
      skills: [
        "Photographie de Portrait",
        "Photographie de Paysage",
        "Photographie d'Événements",
        "Édition Numérique",
        "Lightroom",
        "Photoshop",
        "Photographie Nocturne",
        "Photographie de Produit"
      ],
      activities: [
        {
          title: "Concepteur Développeur",
          description: "Marcq-en-Barœul, France"
        },
        {
          title: "Musicien - Los Parceros del Norte",
          description: "Groupe de cumbia colombienne"
        },
        {
          title: "Président d'Association",
          description: "Pasos Prohibidos, Lille - France"
        }
      ],
      activitiesTitle: "Mes Activités"
    },
    contact: {
      title: "Contact",
      hero: {
        title: "Travaillons ensemble !",
        subtitle: "Je suis là pour capturer vos moments les plus spéciaux"
      },
      info: {
        email: {
          title: "Email",
          value: "bonvincode@gmail.com",
          description: "Je réponds sous 24h"
        },
        phone: {
          title: "Téléphone",
          value: "+33 7 49 39 31 07", 
          description: "Appels et WhatsApp"
        },
        location: {
          title: "Localisation",
          value: "Lille, France",
          description: "Disponible pour déplacements"
        },
        schedule: {
          title: "Horaires",
          value: "Lun - Ven: 9:00 - 18:00",
          description: "Week-ends sur rendez-vous"
        }
      },
      form: {
        title: "Envoyez-moi un message",
        name: "Nom",
        email: "Email",
        phone: "Téléphone",
        subject: "Sujet",
        message: "Message", 
        send: "Envoyer le Message",
        namePlaceholder: "Votre nom complet",
        emailPlaceholder: "votre@email.com",
        phonePlaceholder: "+33 123 456 789",
        subjectPlaceholder: "Sujet du message",
        messagePlaceholder: "Parlez-moi de votre projet...",
        successMessage: "Message envoyé ! Je vous contacterai bientôt."
      },
      services: {
        title: "Services",
        portrait: {
          title: "Séances Portrait",
          price: "À partir de 150€",
          duration: "1-2 heures",
          includes: "Retouche professionnelle incluse"
        },
        wedding: {
          title: "Mariages et Événements",
          price: "À partir de 800€", 
          duration: "Journée complète",
          includes: "Galerie en ligne incluse"
        },
        commercial: {
          title: "Photographie Commerciale",
          price: "À partir de 300€",
          duration: "Selon le projet",
          includes: "Droits commerciaux inclus"
        }
      }
    }
  }
};

interface TranslationContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
  tObject: (key: string) => Record<string, unknown>;
}

export const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export type { TranslationContextType };

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-language');
    return (saved as Language) || 'fr';
  });

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[language];
    
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }
    
    const result = typeof value === 'string' ? value : key;
    return result;
  };

  const tArray = (key: string): string[] => {
    const keys = key.split('.');
    let value: unknown = translations[language];
    
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }
    
    return Array.isArray(value) ? value : [];
  };

  const tObject = (key: string): Record<string, unknown> => {
    const keys = key.split('.');
    let value: unknown = translations[language];
    
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }
    
    return typeof value === 'object' && value !== null ? value as Record<string, unknown> : {};
  };

  const contextValue: TranslationContextType = {
    language,
    changeLanguage,
    t,
    tArray,
    tObject,
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
};