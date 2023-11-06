import React, { useState } from 'react';
import './RegistroUsuario.css';
import LoginForm from './LoginForm'; // Importa el componente de inicio de sesión

function RegistroForm({ onToggleForm  }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const registrar = (event) => {
    event.preventDefault();
    // Lógica para el registro de usuario

    if (!nombre || !email || !password || !confirmPassword) {
      setError('Por favor, complete todos los campos.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    // Si todas las validaciones pasan, puedes enviar los datos al servidor o realizar otra acción
    // Reinicia los campos y borra los errores
    setNombre('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <div className='container'>
    {showLoginForm ? (
      <LoginForm onToggleForm={onToggleForm} />
    ) : (
      <form id="registrationForm" className='form-content' onSubmit={registrar}>
          {/* Contenido del formulario de registro */}
          <label htmlFor="nombre" className="register-label">Nombres y Apellidos:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="register-input"
          /><br />

                <label htmlFor="email" className="register-label">Correo Electrónico:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="register-input"
      /><br />

      <label htmlFor="password" className="register-label">Crear Contraseña:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="register-input"
      /><br />

      <label htmlFor="confirmPassword" className="register-label">Confirmar Contraseña:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        className="register-input"
      /><br /><br />

          <input type="submit" value="Registrarse" className="register-button" />
          <p>
            ¿Ya tienes una cuenta?{' '}
            <button className="register-link" onClick={toggleLoginForm}>
              Inicia sesión aquí
            </button>
          </p>

          {error && <p className="register-error">{error}</p>}
        </form>
      )}
    </div>
  );
}

export default RegistroForm;
