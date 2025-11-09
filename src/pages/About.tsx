import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonAvatar, IonButton, IonIcon, IonChip, IonLabel, IonButtons, IonMenuButton } from '@ionic/react';
import { logoInstagram, logoLinkedin, logoTwitter, camera, star, code, musicalNotes, people } from 'ionicons/icons';
import ThemeToggle from '../components/ThemeToggle';
import LanguageSelector from '../components/LanguageSelector';
import { useTranslation } from '../i18n/useTranslation';
import './About.css';

const About: React.FC = () => {
  const { language, t, tArray } = useTranslation();
  
  // Base URL para imágenes - funciona tanto local como en GitHub Pages
  const baseUrl = import.meta.env.DEV ? '/' : import.meta.env.BASE_URL;

  const skills = tArray('about.skills');

  const activitiesData = tArray('about.activities') as unknown as Array<{title: string, description: string}>;
  const activities = activitiesData.map((activity, index) => ({
    icon: [code, musicalNotes, people][index],
    title: activity.title,
    description: activity.description
  }));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar key={`about-toolbar-${language}`}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{t('about.title')}</IonTitle>
          <IonButtons slot="end">
            <LanguageSelector />
            <ThemeToggle />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar key={`about-condense-toolbar-${language}`}>
            <IonTitle size="large">{t('about.title')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        {/* Perfil personal */}
        <div className="profile-section">
          <IonAvatar className="profile-avatar">
            <img src={`${baseUrl}Fotografias/P1026360.jpg`} alt="Foto de perfil" />
          </IonAvatar>
          <h2>{t('about.name')}</h2>
          <p className="profile-subtitle">{t('about.profession')}</p>
        </div>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonIcon icon={camera} className="section-icon" />
              {t('about.story.title')}
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              {t('about.story.paragraph1')}
            </p>
            <p>
              {t('about.story.paragraph2')}
            </p>
          </IonCardContent>
        </IonCard>

        {/* Habilidades */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonIcon icon={star} className="section-icon" />
              {t('about.specialties.title')}
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <IonChip key={`skill-${index}-${language}`} color="primary">
                  <IonLabel>{skill}</IonLabel>
                </IonChip>
              ))}
            </div>
          </IonCardContent>
        </IonCard>

        {/* Actividades */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonIcon icon={star} className="section-icon" />
              {t('about.activitiesTitle')}
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {activities.map((activity, index) => (
              <div key={`activity-${index}-${language}`} className="achievement-item">
                <div className="achievement-icon">
                  <IonIcon icon={activity.icon} />
                </div>
                <div className="achievement-content">
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                </div>
              </div>
            ))}
          </IonCardContent>
        </IonCard>

        {/* Redes sociales */}
        <IonCard>
          <IonCardContent>
            <h3>Sígueme en mis redes</h3>
            <div className="social-buttons">
              <IonButton fill="outline" color="primary">
                <IonIcon icon={logoInstagram} slot="start" />
                Instagram
              </IonButton>
              <IonButton fill="outline" color="primary">
                <IonIcon icon={logoLinkedin} slot="start" />
                LinkedIn
              </IonButton>
              <IonButton fill="outline" color="primary">
                <IonIcon icon={logoTwitter} slot="start" />
                Twitter
              </IonButton>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;