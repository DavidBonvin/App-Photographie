import { useEffect, useMemo } from 'react';
import { useTranslation } from '../../i18n/useTranslation';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  image,
  url 
}) => {
  const { language } = useTranslation();

  const siteMetadata = useMemo(() => ({
    es: {
      title: "David Cordoba - Portfolio Fotógrafo Profesional | Retratos, Eventos & Paisajes",
      description: "Portfolio profesional de David Cordoba, fotógrafo especializado en retratos íntimos, eventos especiales y paisajes espectaculares. Capturando momentos únicos con creatividad y técnica excepcional.",
      keywords: "fotógrafo profesional, portfolio fotografía, retrato, eventos, paisajes, fotografía artística, David Cordoba, sesiones fotográficas, bodas, Francia, España",
      lang: "es_ES"
    },
    en: {
      title: "David Cordoba - Professional Photographer Portfolio | Portraits, Events & Landscapes",
      description: "Professional portfolio of David Cordoba, photographer specialized in intimate portraits, special events and spectacular landscapes. Capturing unique moments with creativity and exceptional technique.",
      keywords: "professional photographer, photography portfolio, portrait, events, landscapes, artistic photography, David Cordoba, photo sessions, weddings, France, Spain",
      lang: "en_US"
    },
    fr: {
      title: "David Cordoba - Portfolio Photographe Professionnel | Portraits, Événements & Paysages",
      description: "Portfolio professionnel de David Cordoba, photographe spécialisé dans les portraits intimes, événements spéciaux et paysages spectaculaires. Capturer des moments uniques avec créativité et technique exceptionnelle.",
      keywords: "photographe professionnel, portfolio photographie, portrait, événements, paysages, photographie artistique, David Cordoba, séances photo, mariages, France, Espagne",
      lang: "fr_FR"
    }
  }), []);

  const baseUrl = useMemo(() => 
    import.meta.env.DEV ? 'http://localhost:5173/' : 'https://davidbonvin.github.io/App-Photographie/', 
    []
  );
  
  const defaultImage = useMemo(() => `${baseUrl}Fotografias/P1026360.jpg`, [baseUrl]);
  const siteUrl = useMemo(() => url || baseUrl, [url, baseUrl]);

  useEffect(() => {
    const currentMetadata = siteMetadata[language];
    const pageTitle = title || currentMetadata.title;
    const pageDescription = description || currentMetadata.description;
    const pageImage = image || defaultImage;

    // Update document title
    document.title = pageTitle;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', property);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update HTML lang attribute
    document.documentElement.lang = language;

    // Basic SEO meta tags
    updateMetaTag('description', pageDescription);
    updateMetaTag('keywords', currentMetadata.keywords);
    updateMetaTag('language', language);

    // Open Graph tags
    updateMetaTag('og:title', pageTitle, true);
    updateMetaTag('og:description', pageDescription, true);
    updateMetaTag('og:image', pageImage, true);
    updateMetaTag('og:url', siteUrl, true);
    updateMetaTag('og:locale', currentMetadata.lang, true);

    // Twitter Card tags
    updateMetaTag('twitter:title', pageTitle);
    updateMetaTag('twitter:description', pageDescription);
    updateMetaTag('twitter:image', pageImage);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = siteUrl;

  }, [language, title, description, image, url, defaultImage, siteUrl, siteMetadata]);

  return null; // This component doesn't render anything
};

export default SEOHead;