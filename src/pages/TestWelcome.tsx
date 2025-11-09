import React from 'react';

const TestWelcome: React.FC = () => {
  console.log('🧪 TestWelcome component rendering!');
  console.log('🧪 TestWelcome - Window location:', window.location.href);
  
  // Force visibility with important styles
  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'red',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 999999,
    fontFamily: 'Arial, sans-serif'
  };
  
  const textStyle: React.CSSProperties = {
    backgroundColor: 'black',
    padding: '20px',
    borderRadius: '10px',
    border: '3px solid white',
    maxWidth: '80%'
  };
  
  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        <h1>🧪 TEST WELCOME IS WORKING!</h1>
        <p>Current URL: {window.location.href}</p>
        <p>Pathname: {window.location.pathname}</p>
        <p>If you see this, routing is working!</p>
        <p>Component rendered at: {new Date().toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default TestWelcome;