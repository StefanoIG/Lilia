import React from 'react';



function Header() {
    const goToHome = () => {
        // Redirigir a la página de inicio
        window.location.href = "Paginaprincipal.html";
      };

  return (
    <header>
        <div className='logo'>
        <img  src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo de tu aplicación" />
        </div>
            
      <h1 className="bienvenido"><strong><em>Sistema de Gestión de Tutorías Académicas</em></strong></h1>
      <button id="goHomeButton" onClick={goToHome}>Inicio</button>
      
    </header>
  );
}

export default Header;
