import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonList, IonButtons, IonMenuButton } from '@ionic/react';
import { mail, call, location, send, time, camera } from 'ionicons/icons';
import { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import './Contact.css';

const Contact: React.FC = () => {
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
    console.log('Formulario enviado:', formData);
    alert('¡Mensaje enviado! Te contactaré pronto.');
  };

  const contactInfo = [
    {
      icon: mail,
      title: 'Email',
      value: 'tu.email@ejemplo.com',
      description: 'Respondo en 24 horas'
    },
    {
      icon: call,
      title: 'Teléfono',
      value: '+34 123 456 789',
      description: 'Llamadas y WhatsApp'
    },
    {
      icon: location,
      title: 'Ubicación',
      value: 'Madrid, España',
      description: 'Disponible para viajes'
    },
    {
      icon: time,
      title: 'Horario',
      value: 'Lun - Vie: 9:00 - 18:00',
      description: 'Fines de semana por cita'
    }
  ];

  const services = [
    {
      title: 'Sesiones de Retrato',
      price: 'Desde 150€',
      duration: '1-2 horas',
      includes: 'Edición profesional incluida'
    },
    {
      title: 'Fotografía de Eventos',
      price: 'Desde 300€',
      duration: 'Evento completo',
      includes: 'Entrega en 48-72 horas'
    },
    {
      title: 'Fotografía de Producto',
      price: 'Desde 80€',
      duration: 'Por producto',
      includes: 'Fondo neutro incluido'
    }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Contacto</IonTitle>
          <IonButtons slot="end">
            <ThemeToggle />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contacto</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        {/* Hero section */}
        <div className="contact-hero">
          <h2>¡Trabajemos juntos!</h2>
          <p>Estoy aquí para capturar tus momentos más especiales</p>
        </div>

        {/* Información de contacto */}
        <IonGrid>
          <IonRow>
            {contactInfo.map((info, index) => (
              <IonCol size="12" sizeMd="6" key={index}>
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
              Envíame un mensaje
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <form onSubmit={handleSubmit}>
              <IonList>
                <IonItem>
                  <IonLabel position="stacked">Nombre completo *</IonLabel>
                  <IonInput
                    value={formData.name}
                    onIonInput={(e) => handleInputChange('name', e.detail.value!)}
                    placeholder="Tu nombre"
                    required
                  />
                </IonItem>
                
                <IonItem>
                  <IonLabel position="stacked">Email *</IonLabel>
                  <IonInput
                    type="email"
                    value={formData.email}
                    onIonInput={(e) => handleInputChange('email', e.detail.value!)}
                    placeholder="tu@email.com"
                    required
                  />
                </IonItem>
                
                <IonItem>
                  <IonLabel position="stacked">Teléfono</IonLabel>
                  <IonInput
                    type="tel"
                    value={formData.phone}
                    onIonInput={(e) => handleInputChange('phone', e.detail.value!)}
                    placeholder="+34 123 456 789"
                  />
                </IonItem>
                
                <IonItem>
                  <IonLabel position="stacked">Tipo de sesión</IonLabel>
                  <IonInput
                    value={formData.subject}
                    onIonInput={(e) => handleInputChange('subject', e.detail.value!)}
                    placeholder="Retrato, evento, producto..."
                  />
                </IonItem>
                
                <IonItem>
                  <IonLabel position="stacked">Mensaje *</IonLabel>
                  <IonTextarea
                    value={formData.message}
                    onIonInput={(e) => handleInputChange('message', e.detail.value!)}
                    placeholder="Cuéntame más sobre tu proyecto..."
                    rows={4}
                    required
                  />
                </IonItem>
              </IonList>
              
              <div className="form-actions">
                <IonButton type="submit" expand="block" color="primary">
                  <IonIcon icon={send} slot="start" />
                  Enviar mensaje
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
              Servicios y Tarifas
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                {services.map((service, index) => (
                  <IonCol size="12" sizeMd="4" key={index}>
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