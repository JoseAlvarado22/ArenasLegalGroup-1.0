import React, { useState, useEffect } from 'react';
import '../estilos-css/serviciosCard2.css';
import TargetaAgendarAsesoria from './TargetaAgendarAsesoria';
import Footer from './Footer';
import CabeceraAtras from './CabeceraAtras';

function ServiciosCard2() {
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

      <div className="contenedor-defensa-transito">
        
        <div className="banner-titulo-transito">
          <div className="superposicion-oscura"></div>
          <h1 className="titulo-banner">
            Defensa Integral ante Infracciones de Tránsito
          </h1>
        </div>

        {/* Cuerpos de Texto y Listado */}
        <div className="contenido-transito">
          <p className="parrafo-principal">
            Nuestra firma se especializa en la impugnación de infracciones de tránsito mediante la utilización de los recursos establecidos por la ley.<br/><br/>
            Representamos sus intereses ante las autoridades de movilidad para garantizar que ninguna sanción se imponga sin el pleno respeto a sus garantías legales.
          </p>

          <p className="parrafo-secundario">
            ¿Recibió una fotomulta o un comparendo sin pruebas claras? Nuestro servicio de defensa integral le ofrece:
          </p>

          <ul className="lista-servicios">
            <li>
              <span className="punto-negro">•</span>
              <p>
                Deteccion de fallas en el procedimiento sancionatorio.
              </p>
            </li>
            <li>
              <span className="punto-negro">•</span>
              <p>
                Análisis de caducidad y prescripción de multas antiguas.
              </p>
            </li>
            <li>
              <span className="punto-negro">•</span>
              <p>
                Representación en audiencias públicas ante la Inspección de Tránsito.
              </p>
            </li>
            <li>
              <span className="punto-negro">•</span>
              <p>
                Protección contra la suspensión de la licencia de conducción.
              </p>
            </li>
            <li>
              <span className="punto-negro">•</span>
              <p>
                Detección de vicios de nulidad en la notificación.
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

export default ServiciosCard2;