import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonAvatar, IonButton, IonIcon, IonChip, IonLabel, IonButtons, IonMenuButton } from '@ionic/react';
import { logoInstagram, logoLinkedin, logoTwitter, camera, trophy, star } from 'ionicons/icons';
import ThemeToggle from '../components/ThemeToggle';
import './About.css';

const About: React.FC = () => {
  const skills = [
    'Fotografía de Retrato',
    'Fotografía de Paisaje',
    'Fotografía de Eventos',
    'Edición Digital',
    'Lightroom',
    'Photoshop',
    'Fotografía Nocturna',
    'Fotografía de Producto'
  ];

  const achievements = [
    {
      year: '2023',
      title: 'Premio Nacional de Fotografía',
      description: 'Primer lugar en categoría paisajes'
    },
    {
      year: '2022',
      title: 'Exposición Individual',
      description: 'Galería de Arte Contemporáneo'
    },
    {
      year: '2021',
      title: 'Certificación Profesional',
      description: 'Instituto de Fotografía Digital'
    }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Sobre mí</IonTitle>
          <IonButtons slot="end">
            <ThemeToggle />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sobre mí</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        {/* Perfil personal */}
        <div className="profile-section">
          <IonAvatar className="profile-avatar">
            <img src="/Fotografias/P1026360.jpg" alt="Foto de perfil" />
          </IonAvatar>
          <h2>Tu Nombre</h2>
          <p className="profile-subtitle">Fotógrafo Profesional</p>
        </div>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonIcon icon={camera} className="section-icon" />
              Mi Historia
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Soy un fotógrafo apasionado con experiencia capturando momentos únicos y 
              creando imágenes que cuentan historias. Mi especialidad abarca desde retratos íntimos hasta 
              paisajes espectaculares, siempre buscando la perfecta combinación entre técnica y creatividad.
            </p>
            <p>
              Mi filosofía se basa en capturar la esencia auténtica de cada momento, ya sea en una sesión 
              de retrato, una boda especial o un paisaje natural. Cada fotografía es una oportunidad de 
              contar una historia única.
            </p>
          </IonCardContent>
        </IonCard>

        {/* Habilidades */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonIcon icon={star} className="section-icon" />
              Especialidades
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <IonChip key={index} color="primary">
                  <IonLabel>{skill}</IonLabel>
                </IonChip>
              ))}
            </div>
          </IonCardContent>
        </IonCard>

        {/* Logros */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonIcon icon={trophy} className="section-icon" />
              Logros y Reconocimientos
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <div className="achievement-year">{achievement.year}</div>
                <div className="achievement-content">
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
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