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
import { images, person, mail } from 'ionicons/icons';
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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* Menú lateral para móvil */}
      <IonMenu contentId="main-content" type="overlay">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Portafolio</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="menu-content">
          <IonList className="menu-list">
            <IonItem button routerLink="/gallery" routerDirection="none">
              <IonIcon aria-hidden="true" icon={images} slot="start" />
              <IonLabel>Galería</IonLabel>
            </IonItem>
            <IonItem button routerLink="/about" routerDirection="none">
              <IonIcon aria-hidden="true" icon={person} slot="start" />
              <IonLabel>Sobre mí</IonLabel>
            </IonItem>
            <IonItem button routerLink="/contact" routerDirection="none">
              <IonIcon aria-hidden="true" icon={mail} slot="start" />
              <IonLabel>Contacto</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      {/* Contenido principal */}
      <IonTabs>
        <IonRouterOutlet id="main-content">
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Redirect to="/gallery" />
          </Route>
        </IonRouterOutlet>
        
        {/* Tab bar simple */}
        <IonTabBar slot="bottom">
          <IonTabButton tab="gallery" href="/gallery">
            <IonIcon aria-hidden="true" icon={images} />
            <IonLabel>Galería</IonLabel>
          </IonTabButton>
          <IonTabButton tab="about" href="/about">
            <IonIcon aria-hidden="true" icon={person} />
            <IonLabel>Sobre mí</IonLabel>
          </IonTabButton>
          <IonTabButton tab="contact" href="/contact">
            <IonIcon aria-hidden="true" icon={mail} />
            <IonLabel>Contacto</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
