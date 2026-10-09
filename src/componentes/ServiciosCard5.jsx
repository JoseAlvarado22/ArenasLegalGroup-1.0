import React, { useState, useEffect } from 'react';
import '../estilos-css/serviciosCard5.css';
import TargetaAgendarAsesoria from './TargetaAgendarAsesoria';
import Footer from './Footer';
import CabeceraAtras from './CabeceraAtras';

function ServiciosCard5() {
  const [cargado, setCargado] = useState(false);
          
            // EFECTO PARA DISPARAR LA ENTRADA SUAVE AL MONTAR LA RUTA
            useEffect(() => {
              // Scroll al inicio de la página inmediatamente al cambiar de ruta
              window.scrollTo(0, 0);
          
              // Activa la animación de entrada
              const timer = setTimeout(() => {
                setCargado(true);
              }, 50);
          
              return () => clearTimeout(timer);
            }, []);

  return (
    <div className={`vista-servicio-transicion ${cargado ? 'entrada-suave' : ''}`}>

      <CabeceraAtras/>

      <div className="contenedor-defensa-estatal">
        
        <div className="banner-titulo-estatal">
          <div className="superposicion-oscura"></div>
          <h1 className="titulo-banner">
            Defensa Legal ante Entidades Estatales
          </h1>
        </div>

        {/* Cuerpos de Texto y Listado */}
        <div className="contenido-estatal">
          <p className="parrafo-principal">
            Nuestra firma brinda asesorías, representación y defensa jurídica en controversias entre 
            particulares y entidades públicas, así como en la protección de derechos frente a actuaciones, 
            actos, omisiones y decisiones de la administración Pública.
          </p>

          <p className="parrafo-secundario">
            Alcances de nuestro equipo:          
          </p>

          <ul className="lista-servicios">
            <li>
              <span className="punto-negro">•</span>
              <p>
                <strong>Derechos de petición y reclamaciones administrativas:</strong> Ejercemos la elaboración y seguimiento de solicitudes dirigidas a entidades públicas para obtener el reconocimiento de derechos, información, corrección de actuaciones o respuestas frente a situaciones administrativas.
              </p>
            </li>
            <li>
              <span className="punto-negro">•</span>
              <p>
                <strong>Nulidad y restablecimiento del derecho:</strong> Representación judicial para controvertir actos administrativos de carácter particular que puedan afectar los derechos de una persona, buscando su nulidad y el correspondiente restablecimiento de los derechos vulnerados.
              </p>
            </li>
            <li>
              <span className="punto-negro">•</span>
              <p>
                <strong>Controversias contractuales con entidades públicas:</strong> Asesoría y representación en conflictos relacionados con contratos celebrados con entidades estatales, incluyendo controversias sobre cumplimiento, incumplimiento, terminación, liquidación y reconocimiento de obligaciones.
              </p>
            </li>
            <li>
              <span className="punto-negro">•</span>
              <p>
                <strong>Defensa frente a actuaciones administrativas:</strong> Asesoría para controvertir decisiones, sanciones, actos administrativos y demás actuaciones de las entidades públicas que puedan afectar los derechos o intereses de los particulares.
              </p>
            </li>
          </ul>

          <TargetaAgendarAsesoria/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ServiciosCard5;