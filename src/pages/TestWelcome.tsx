import React from 'react';
import { IonPage, IonContent } from '@ionic/react';

const TestWelcome: React.FC = () => {
  console.log('🧪 TestWelcome component rendering!');
  
  return (
    <IonPage style={{ backgroundColor: 'red' }}>
      <IonContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
        <div style={{ 
          color: 'white', 
          fontSize: '24px', 
          textAlign: 'center',
          backgroundColor: 'black',
          padding: '20px',
          borderRadius: '10px'
        }}>
          <h1>🧪 TEST WELCOME WORKING!</h1>
          <p>Current URL: {window.location.href}</p>
          <p>Pathname: {window.location.pathname}</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TestWelcome;