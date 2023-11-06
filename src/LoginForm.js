import React, { useState } from 'react';
import './LoginForm.css';
import RegistroForm from './RegistroUsuario'; // Importa el componente de registro

function LoginForm({ onToggleForm }) {
  const [showRegistroForm, setShowRegistroForm] = useState(false);




  const submitForm = () => {
    // Lógica para el inicio de sesión
  };

  return (
     <div className="container">
      <div className="form-content" >
      
        <h1 id="tittle" className="tittle">Iniciar sesión</h1>
        {showRegistroForm ? (
          <RegistroForm onToggleForm={onToggleForm} />
        ) : (
          <form id="login-form">
              <div className="input-group">
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" id="email" placeholder="Correo" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" id="password" placeholder="Contraseña" />
              </div>
              <div className="btn-field">
              <button
                id="signIn"
                className="center-button"
                type="button"
              >
                Iniciar sesión
              </button>
            </div>
            </div>
            <p>
              ¿No tienes cuenta?{' '}
              <button className="register-link" onClick={onToggleForm}>
                Regístrate aquí
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
