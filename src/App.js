import React, { useState } from 'react';
import './LoginForm.css';
import Header from './Header';
import LoginForm from './LoginForm';
import Footer from './Footer';
import RegistroForm from './RegistroUsuario';

function App() {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/fondo.jpg'})` }}>
      <Header />
      {showLoginForm ? (
        <LoginForm onToggleForm={toggleForm} />
      ) : (
        
        <RegistroForm onToggleForm={toggleForm} />
      )}
      <Footer />
    </div>
  );
}

export default App;
