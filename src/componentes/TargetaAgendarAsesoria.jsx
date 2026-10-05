import React, { useState, useRef, useEffect } from 'react';
import '../estilos-css/targetaAgendarAsesoria.css';
import IconoCalendario from '../assets/IconoCalendario.svg';
import ContactoCuerpoForm from './ContactoCuerpoForm';

function TargetaAgendarAsesoria() {
  // Estado para controlar la visibilidad del nuevo elemento
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Referencia para ubicar el contenedor en el DOM
  const formularioRef = useRef(null);

  const manejarClicAgendar = (e) => {
    e.preventDefault(); // Evita que la página recargue o salte al presionar el enlace
    setMostrarFormulario(!mostrarFormulario); // Alterna la visibilidad (mostrar/ocultar)
  };

  // Efecto que realiza el scroll suave cuando mostrarFormulario pasa a ser true
  useEffect(() => {
    if (mostrarFormulario && formularioRef.current) {
      formularioRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }, [mostrarFormulario]);

  return (
    <>
      {/* Tarjeta Call To Action (Agendar Asesoría) */}
      <section className="tarjeta-cta">
        <h4 className="titulo-cta">Le ofrecemos la asesoría jurídica que necesita</h4>
        <p className="subtitulo-cta">Obtenga una evaluación y consulta de su caso</p>

        <a className='boton-agenda-n' href="#" onClick={manejarClicAgendar}>
          AGENDAR ASESORIA
          <img src={IconoCalendario} alt="Icono de calendario"/>
        </a>
      </section>

      {/* elemento renderizado al dar clic en la etiqueta <a> */}
      {mostrarFormulario && (
        <div className="contenedor-desplegable-agendar" ref={formularioRef}>
          <ContactoCuerpoForm/>
        </div>
      )}
    </>
  );
}

export default TargetaAgendarAsesoria;