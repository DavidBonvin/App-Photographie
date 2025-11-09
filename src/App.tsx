import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { images, person, mail, home } from 'ionicons/icons';
import { useTranslation } from './i18n/useTranslation';
import SEOHead from './components/SEOHead';
import Welcome from './pages/Welcome';
import TestWelcome from './pages/TestWelcome';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import './styles/iphone-tabbar.css';

setupIonicReact();

const App: React.FC = () => {
  const { t, language } = useTranslation();
  
  console.log('🎨 App component rendering...');
  console.log('🌍 Current language:', language);
  console.log('🔗 Current URL:', window.location.href);
  console.log('📍 Current pathname:', window.location.pathname);
  console.log('🗣️ Navigation gallery translation:', t('navigation.gallery'));
  
  // Determine base path for router
  const basename = process.env.NODE_ENV === 'production' && window.location.hostname.includes('github.io') 
    ? '/App-Photographie' 
    : '';
  
  console.log('🏗️ Router basename determined:', basename);
  
  // Add effect to log route changes
  React.useEffect(() => {
    console.log('🎭 App useEffect - pathname changed:', window.location.pathname);
  }, []);
  
  return (
  <IonApp>
    <SEOHead />
    <IonReactRouter basename={basename}>
      {/* Menú lateral para móvil */}
      <IonMenu contentId="main-content" type="overlay" key={`menu-${language}`}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{t('navigation.portfolio')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="menu-content">
          <IonList className="menu-list">
            <IonItem button routerLink="/welcome" routerDirection="none">
              <IonIcon aria-hidden="true" icon={home} slot="start" />
              <IonLabel>{t('navigation.home') || 'Inicio'}</IonLabel>
            </IonItem>
            <IonItem button routerLink="/app/gallery" routerDirection="none">
              <IonIcon aria-hidden="true" icon={images} slot="start" />
              <IonLabel>{t('navigation.gallery')}</IonLabel>
            </IonItem>
            <IonItem button routerLink="/app/about" routerDirection="none">
              <IonIcon aria-hidden="true" icon={person} slot="start" />
              <IonLabel>{t('navigation.about')}</IonLabel>
            </IonItem>
            <IonItem button routerLink="/app/contact" routerDirection="none">
              <IonIcon aria-hidden="true" icon={mail} slot="start" />
              <IonLabel>{t('navigation.contact')}</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      {/* Contenido principal */}
      <IonRouterOutlet id="main-content">
        {/* Welcome page - standalone without tabs */}
        <Route exact path="/welcome">
          <TestWelcome />
        </Route>
        
        {/* Main app with tabs */}
        <Route path="/app">
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/app/gallery">
                <Gallery />
              </Route>
              <Route exact path="/app/about">
                <About />
              </Route>
              <Route path="/app/contact">
                <Contact />
              </Route>
              <Route exact path="/app">
                <Redirect to="/app/gallery" />
              </Route>
            </IonRouterOutlet>
            
            {/* Tab bar only for app section */}
            <IonTabBar slot="bottom" key={`tabbar-${language}`} className="iphone-tabbar">
              <IonTabButton tab="gallery" href="/app/gallery" className="tab-button-gallery">
                <IonIcon aria-hidden="true" icon={images} />
                <IonLabel>{t('navigation.gallery')}</IonLabel>
              </IonTabButton>
              <IonTabButton tab="about" href="/app/about" className="tab-button-about">
                <IonIcon aria-hidden="true" icon={person} />
                <IonLabel>{t('navigation.about')}</IonLabel>
              </IonTabButton>
              <IonTabButton tab="contact" href="/app/contact" className="tab-button-contact">
                <IonIcon aria-hidden="true" icon={mail} />
                <IonLabel>{t('navigation.contact')}</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);
};

export default App;
