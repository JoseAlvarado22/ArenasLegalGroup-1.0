import React, { useState, useEffect } from 'react';
import '../estilos-css/serviciosCard1.css';
import TargetaAgendarAsesoria from './TargetaAgendarAsesoria';
import Footer from './Footer';
import CabeceraAtras from './CabeceraAtras';

function ServiciosCard1() {
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
      <CabeceraAtras />

      <div className="contenedor-derecho-peticion">
        
        <div className="banner-titulo-peticion">
          <div className="superposicion-oscura"></div>
          <h1 className="titulo-banner">
            Derechos de Petición y Acciones de Tutela
          </h1>
        </div>

        {/* Cuerpos de Texto y Listado */}
        <div className="contenido-peticion">
          <p className="parrafo-principal">
            Nuestros servicios legales están diseñados para garantizar que su voz sea escuchada por las autoridades 
            y que sus derechos fundamentales no sean vulnerados. Utilizamos las herramientas constitucionales más efectivas 
            para asegurar respuestas rápidas y soluciones reales.
          </p>

          <p className="parrafo-secundario">
            <span>Derecho de Petición:</span> Es la facultad que tiene toda persona para presentar solicitudes respetuosas ante autoridades 
            o entidades privadas y obtener una respuesta pronta, clara y de fondo.
          </p>

          <ul className="lista-servicios">
            <li>
              <span className="punto-negro">•</span>
              <p>
                <strong>Nuestro valor agregado:</strong> Redactamos peticiones con fundamentos técnicos y legales sólidos para evitar 
                respuestas evasivas y garantizar que las entidades se pronuncien de manera efectiva.
              </p>
            </li>
          </ul>

          <p className="parrafo-secundario">
            <span>Acción de Tutela:</span> Es el mecanismo judicial preferente y sumario para la protección inmediata de sus derechos fundamentales 
            cuando estos se encuentren amenazados o vulnerados por la acción u omisión de cualquier persona o autoridad.
          </p>

          <ul className="lista-servicios">
            <li>
              <span className="punto-negro">•</span>
              <p>
                <strong>Nuestro valor agregado:</strong> Asumimos la representación técnica en todo el proceso: desde el estudio de la vulneración y la 
                radicación de la demanda, hasta el seguimiento al cumplimiento del fallo y la presentación de incidentes de desacato si la orden del 
                juez es ignorada.
              </p>
            </li>
          </ul>

          <TargetaAgendarAsesoria />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ServiciosCard1;