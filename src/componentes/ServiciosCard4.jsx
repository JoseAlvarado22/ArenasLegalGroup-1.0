import React from 'react';
import '../estilos-css/serviciosCard4.css';
import TargetaAgendarAsesoria from './TargetaAgendarAsesoria';
import Footer from './Footer';
import CabeceraAtras from './CabeceraAtras';

function ServiciosCard4() {
  return (
    <>

      <CabeceraAtras/>

      <div className="contenedor-defensa-laboral">
        
        <div className="banner-titulo-laboral">
          <div className="superposicion-oscura"></div>
          <h1 className="titulo-banner">
            Asesoría y Representación legal (Derecho Laboral)
          </h1>
        </div>

        {/* Cuerpos de Texto y Listado */}
        <div className="contenido-laboral">
            <h3>Profesional y Corporativo</h3>
          <p className="parrafo-principal">
            Brindamos soluciones integrales para la gestión del talento humano y la mitigación de riesgos legales. Nos especializamos en 
            blindar la relación empleador-trabajador mediante una asesoría preventiva sólida, auditorías de nómina y representación estratégica 
            ante entes administrativos y judiciales. Nuestro objetivo es garantizar la continuidad de su negocio bajo el estricto cumplimiento del 
            Código Sustantivo del Trabajo.
          </p>

          <h3>Protección del Trabajador</h3>
          <p className="parrafo-secundario">
            Si tus derechos laborales han sido vulnerados, no tienes por qué enfrentar el proceso a solas. Representamos a trabajadores en la 
            reclamación de acreencias, indemnizaciones por despido injustificado y protección de fueros especiales. Combinamos calidez humana con 
            una defensa técnica implacable para asegurar que recibas lo que legalmente te corresponde. Tu estabilidad y bienestar son nuestra 
            prioridad.
          </p>

          <TargetaAgendarAsesoria/>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ServiciosCard4;