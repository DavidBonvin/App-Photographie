import React from 'react';
import { Redirect, Route, BrowserRouter } from 'react-router-dom';
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
import { images, person, mail, home } from 'ionicons/icons';
import { useTranslation } from './i18n/useTranslation';
import SEOHead from './components/SEOHead';
// import Welcome from './pages/Welcome';
import Welcome from './pages/Welcome';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

// Navigation Component
const NavigationItem: React.FC<{ 
  to: string; 
  icon: string; 
  label: string;
  basename: string;
}> = ({ to, icon, label, basename }) => {
  const handleClick = () => {
    console.log('🔗 Navigating to:', `${basename}${to}`);
    window.location.href = `${basename}${to}`;
  };

  return (
    <IonItem button onClick={handleClick} routerDirection="none">
      <IonIcon aria-hidden="true" icon={icon} slot="start" />
      <IonLabel>{label}</IonLabel>
    </IonItem>
  );
};

// Tab Navigation Component
const TabNavigationButton: React.FC<{ 
  tab: string;
  to: string; 
  icon: string; 
  label: string;
  basename: string;
  className?: string;
}> = ({ tab, to, icon, label, basename, className }) => {
  const handleClick = () => {
    console.log('🔗 Tab navigating to:', `${basename}${to}`);
    window.location.href = `${basename}${to}`;
  };

  return (
    <IonTabButton tab={tab} onClick={handleClick} className={className}>
      <IonIcon aria-hidden="true" icon={icon} />
      <IonLabel>{label}</IonLabel>
    </IonTabButton>
  );
};

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
    <BrowserRouter basename={basename}>
      {/* Menú lateral para móvil */}
      <IonMenu contentId="main-content" type="overlay" key={`menu-${language}`}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{t('navigation.portfolio')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="menu-content">
          <IonList className="menu-list">
            <NavigationItem 
              to="/welcome" 
              icon={home} 
              label={t('navigation.home') || 'Inicio'} 
              basename={basename}
            />
            <NavigationItem 
              to="/app/gallery" 
              icon={images} 
              label={t('navigation.gallery')} 
              basename={basename}
            />
            <NavigationItem 
              to="/app/about" 
              icon={person} 
              label={t('navigation.about')} 
              basename={basename}
            />
            <NavigationItem 
              to="/app/contact" 
              icon={mail} 
              label={t('navigation.contact')} 
              basename={basename}
            />
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
                <TabNavigationButton 
                  tab="gallery" 
                  to="/app/gallery" 
                  icon={images} 
                  label={t('navigation.gallery')} 
                  basename={basename}
                  className="tab-button-gallery"
                />
                <TabNavigationButton 
                  tab="about" 
                  to="/app/about" 
                  icon={person} 
                  label={t('navigation.about')} 
                  basename={basename}
                  className="tab-button-about"
                />
                <TabNavigationButton 
                  tab="contact" 
                  to="/app/contact" 
                  icon={mail} 
                  label={t('navigation.contact')} 
                  basename={basename}
                  className="tab-button-contact"
                />
              </IonTabBar>
            </IonTabs>
          );
        }} />
      </div>
    </BrowserRouter>
  </IonApp>
);
};

export default App;
