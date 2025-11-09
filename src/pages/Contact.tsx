import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonList, IonButtons, IonMenuButton } from '@ionic/react';
import { mail, call, location, send, time, camera } from 'ionicons/icons';
import { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import LanguageSelector from '../components/LanguageSelector';
import { useTranslation } from '../i18n/useTranslation';
import './Contact.css';

const Contact: React.FC = () => {
  const { t, language } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert(t('contact.form.successMessage'));
  };

  const contactInfo = [
    {
      icon: mail,
      title: t('contact.info.email.title'),
      value: t('contact.info.email.value'),
      description: t('contact.info.email.description')
    },
    {
      icon: call,
      title: t('contact.info.phone.title'),
      value: t('contact.info.phone.value'),
      description: t('contact.info.phone.description')
    },
    {
      icon: location,
      title: t('contact.info.location.title'),
      value: t('contact.info.location.value'),
      description: t('contact.info.location.description')
    },
    {
      icon: time,
      title: t('contact.info.schedule.title'),
      value: t('contact.info.schedule.value'),
      description: t('contact.info.schedule.description')
    }
  ];

  const services = [
    {
      title: t('contact.services.portrait.title'),
      price: t('contact.services.portrait.price'),
      duration: t('contact.services.portrait.duration'),
      includes: t('contact.services.portrait.includes')
    },
    {
      title: t('contact.services.wedding.title'),
      price: t('contact.services.wedding.price'),
      duration: t('contact.services.wedding.duration'),
      includes: t('contact.services.wedding.includes')
    },
    {
      title: t('contact.services.commercial.title'),
      price: t('contact.services.commercial.price'),
      duration: t('contact.services.commercial.duration'),
      includes: t('contact.services.commercial.includes')
    }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar key={`contact-toolbar-${language}`}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{t('contact.title')}</IonTitle>
          <IonButtons slot="end">
            <LanguageSelector />
            <ThemeToggle />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar key={`contact-condense-toolbar-${language}`}>
            <IonTitle size="large">{t('contact.title')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        {/* Hero section */}
        <div className="contact-hero">
          <h2>{t('contact.hero.title')}</h2>
          <p>{t('contact.hero.subtitle')}</p>
        </div>

        {/* Información de contacto */}
        <IonGrid>
          <IonRow>
            {contactInfo.map((info, index) => (
              <IonCol size="12" sizeMd="6" key={`contact-info-${index}-${language}`}>
                <IonCard className="contact-info-card">
                  <IonCardContent>
                    <div className="contact-info-item">
                      <IonIcon icon={info.icon} className="contact-icon" />
                      <div className="contact-details">
                        <h3>{info.title}</h3>
                        <p className="contact-value">{info.value}</p>
                        <p className="contact-description">{info.description}</p>
                      </div>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        {/* Formulario de contacto */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonIcon icon={send} className="section-icon" />
              {t('contact.form.title')}
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <form onSubmit={handleSubmit}>
              <IonList>
                <IonItem>
                  <IonLabel position="stacked">{t('contact.form.name')} *</IonLabel>
                  <IonInput
                    value={formData.name}
                    onIonInput={(e) => handleInputChange('name', e.detail.value!)}
                    placeholder={t('contact.form.namePlaceholder')}
                    required
                  />
                </IonItem>
                
                <IonItem>
                  <IonLabel position="stacked">{t('contact.form.email')} *</IonLabel>
                  <IonInput
                    type="email"
                    value={formData.email}
                    onIonInput={(e) => handleInputChange('email', e.detail.value!)}
                    placeholder={t('contact.form.emailPlaceholder')}
                    required
                  />
                </IonItem>
                
                <IonItem>
                  <IonLabel position="stacked">{t('contact.form.phone')}</IonLabel>
                  <IonInput
                    type="tel"
                    value={formData.phone}
                    onIonInput={(e) => handleInputChange('phone', e.detail.value!)}
                    placeholder={t('contact.form.phonePlaceholder')}
                  />
                </IonItem>
                
                <IonItem>
                  <IonLabel position="stacked">{t('contact.form.subject')}</IonLabel>
                  <IonInput
                    value={formData.subject}
                    onIonInput={(e) => handleInputChange('subject', e.detail.value!)}
                    placeholder={t('contact.form.subjectPlaceholder')}
                  />
                </IonItem>
                
                <IonItem>
                  <IonLabel position="stacked">{t('contact.form.message')} *</IonLabel>
                  <IonTextarea
                    value={formData.message}
                    onIonInput={(e) => handleInputChange('message', e.detail.value!)}
                    placeholder={t('contact.form.messagePlaceholder')}
                    rows={4}
                    required
                  />
                </IonItem>
              </IonList>
              
              <div className="form-actions">
                <IonButton type="submit" expand="block" color="primary">
                  <IonIcon icon={send} slot="start" />
                  {t('contact.form.send')}
                </IonButton>
              </div>
            </form>
          </IonCardContent>
        </IonCard>

        {/* Servicios y precios */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonIcon icon={camera} className="section-icon" />
              {t('contact.services.title')}
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                {services.map((service, index) => (
                  <IonCol size="12" sizeMd="4" key={`service-${index}-${language}`}>
                    <div className="service-card">
                      <h3>{service.title}</h3>
                      <div className="service-price">{service.price}</div>
                      <div className="service-duration">{service.duration}</div>
                      <p>{service.includes}</p>
                    </div>
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Contact;