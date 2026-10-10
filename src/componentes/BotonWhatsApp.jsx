import React from 'react';
import '../estilos-css/botonWhatsApp.css';

function BotonWhatsApp() {
  const numeroTelefono = "573147644644"; 
  const mensajePredeterminado = encodeURIComponent("¡Hola! Quisiera solicitar información sobre sus servicios jurídicos.");

  const enlaceWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensajePredeterminado}`;

  return (
    <div className="contenedor-flotante">
      <a
        href={enlaceWhatsApp}
        className="boton-whatsapp-flotante"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <span className="parrafo-flotante">¿Puedo ayudarte?</span>
        
        <div className="circulo-icono-wa">
          <svg
            className="icono-whatsapp"
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 2A13.93 13.93 0 0 0 3.84 22.84L2 29.5l6.83-1.79A13.92 13.92 0 1 0 16 2zm0 25.5a11.5 11.5 0 0 1-5.87-1.61l-.42-.25-4.36 1.14 1.16-4.25-.28-.44A11.52 11.52 0 1 1 16 27.5zm6.32-8.62c-.35-.18-2.07-1.02-2.39-1.14s-.55-.18-.79.18-.91 1.14-1.12 1.38-.42.27-.77.09a9.7 9.7 0 0 1-2.86-1.77 10.72 10.72 0 0 1-1.98-2.47c-.2-.35 0-.54.17-.72a12.87 12.87 0 0 0 .79-.92c.11-.18.05-.35-.03-.53s-.79-1.9-1.08-2.6c-.28-.68-.57-.59-.79-.6h-.67a1.3 1.3 0 0 0-.94.44A3.94 3.94 0 0 0 6 12.72a6.85 6.85 0 0 0 1.44 3.63 15.65 15.65 0 0 0 6 5.31c2.45 1.06 3.42 1 4.67.8a3.98 3.98 0 0 0 2.62-1.85 3.25 3.25 0 0 0 .23-1.85c-.09-.16-.33-.25-.68-.43z"/>
          </svg>
        </div>
      </a>

      <a
      className="boton-inicio-flotante"
        href="#inicio"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('inicio')?.scrollIntoView({
            behavior: 'smooth'
          });
        }}
        aria-label="Volver arriba"
      >
        <svg className="boton-inicio" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
        </svg>
      </a>
    </div>
  );
}

export default BotonWhatsApp;