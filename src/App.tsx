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
// import Welcome from './pages/Welcome';
import Welcome from './pages/Welcome';
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
  console.log('🔍 Full pathname:', window.location.pathname);
  console.log('📍 Relative pathname (without basename):', window.location.pathname.replace(basename, ''));
  console.log('🎭 IonRouterOutlet will render with basename:', basename);
  
  // Add effect to log route changes (MUST be before any early returns)
  React.useEffect(() => {
    console.log('🎭 App useEffect - pathname changed:', window.location.pathname);
    console.log('🎭 App useEffect - relative path:', window.location.pathname.replace(basename, ''));
  }, [basename]);
  
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
            <IonItem button routerLink="/welcome" routerDirection="none" onClick={() => console.log('🔗 Menu: Navigating to /welcome')}>
              <IonIcon aria-hidden="true" icon={home} slot="start" />
              <IonLabel>{t('navigation.home') || 'Inicio'}</IonLabel>
            </IonItem>
            <IonItem button routerLink="/app/gallery" routerDirection="none" onClick={() => console.log('🔗 Menu: Navigating to /app/gallery')}>
              <IonIcon aria-hidden="true" icon={images} slot="start" />
              <IonLabel>{t('navigation.gallery')}</IonLabel>
            </IonItem>
            <IonItem button routerLink="/app/about" routerDirection="none" onClick={() => console.log('🔗 Menu: Navigating to /app/about')}>
              <IonIcon aria-hidden="true" icon={person} slot="start" />
              <IonLabel>{t('navigation.about')}</IonLabel>
            </IonItem>
            <IonItem button routerLink="/app/contact" routerDirection="none" onClick={() => console.log('🔗 Menu: Navigating to /app/contact')}>
              <IonIcon aria-hidden="true" icon={mail} slot="start" />
              <IonLabel>{t('navigation.contact')}</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      {/* Contenido principal */}
      <div id="main-content">
        {(() => {
          console.log('🎭 Router content rendering...');
          console.log('🛣️ Current pathname for routing:', window.location.pathname);
          console.log('🛣️ Basename for routing:', basename);
          console.log('🛣️ Effective path for routing:', window.location.pathname.replace(basename, ''));
          return null;
        })()}
        
        {/* Welcome page - standalone without tabs */}
        <Route exact path="/welcome" render={(props) => {
          console.log('🏠 Welcome route render function called!');
          console.log('🏠 Route props:', props);
          console.log('🏠 Route match:', props.match);
          console.log('🏠 Route location:', props.location);
          console.log('🎯 Rendering actual Welcome component...');
          return <Welcome />;
        }} />
        
        {/* Main app with tabs */}
        <Route path="/app" render={() => {
          console.log('📱 App route render function called!');
          return (
            <IonTabs>
              <IonRouterOutlet>
                <Route exact path="/app/gallery" render={() => {
                  console.log('📸 Gallery route render function called!');
                  return <Gallery />;
                }} />
                <Route exact path="/app/about" render={() => {
                  console.log('👤 About route render function called!');
                  return <About />;
                }} />
                <Route path="/app/contact" render={() => {
                  console.log('📧 Contact route render function called!');
                  return <Contact />;
                }} />
                <Route exact path="/app" render={() => {
                  console.log('🔄 App root route - redirecting to gallery');
                  return <Redirect to="/app/gallery" />;
                }} />
              </IonRouterOutlet>
              
              {/* Tab bar only for app section */}
              <IonTabBar slot="bottom" key={`tabbar-${language}`} className="iphone-tabbar">
                <IonTabButton tab="gallery" href="/app/gallery" className="tab-button-gallery" onClick={() => console.log('🔗 Tab: Navigating to /app/gallery')}>
                  <IonIcon aria-hidden="true" icon={images} />
                  <IonLabel>{t('navigation.gallery')}</IonLabel>
                </IonTabButton>
                <IonTabButton tab="about" href="/app/about" className="tab-button-about" onClick={() => console.log('🔗 Tab: Navigating to /app/about')}>
                  <IonIcon aria-hidden="true" icon={person} />
                  <IonLabel>{t('navigation.about')}</IonLabel>
                </IonTabButton>
                <IonTabButton tab="contact" href="/app/contact" className="tab-button-contact" onClick={() => console.log('🔗 Tab: Navigating to /app/contact')}>
                  <IonIcon aria-hidden="true" icon={mail} />
                  <IonLabel>{t('navigation.contact')}</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          );
        }} />
      </div>
    </IonReactRouter>
  </IonApp>
);
};

export default App;
