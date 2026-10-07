import React, { useState, useEffect, useRef } from 'react';
import '../estilos-css/contactoCuerpo.css';

function ContactoCuerpo(props) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // activa solo la primera vez que entra en pantalla
        }
      },
      {
        threshold: 0.15, // activa cuando el 15% de la sección es visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className={`contenedor-seccion-contacto ${isVisible ? 'animar-entrada' : 'seccion-oculta'}`}
    >
      <div className="contenedor-titulo-contacto anim-hijo-1">
        <h3>{props.tituloSeccion}</h3>
      </div>

      <div className="contenedor-texto-contacto anim-hijo-2">
        <h1>{props.titulo}</h1>
        <p>{props.parrafo}</p>
      </div>

      <div className="contenedor-iconos-contacto">
        <div className="contenedor-icono-telefono contenedor-icono anim-hijo-3">
          <img className="icono-telefono" src={props.imagenTelefono} alt="Icono de telefono" loading="lazy" />
          <p><span>{props.textoTelefono1}</span>{props.textoTelefono2}</p>
        </div>

        <div className="contenedor-icono-email contenedor-icono anim-hijo-4">
          <img className="icono-email" src={props.imagenEmail} alt="Icono de email" loading="lazy" />
          <p><span>{props.textoEmail1}</span>{props.textoEmail2}</p>
        </div>

        <div className="contenedor-icono-atencion contenedor-icono anim-hijo-5">
          <img className="icono-atencion" src={props.imagenAtencion} alt="Icono de atencion" loading="lazy" />
          <p><span>{props.textoAtencion1}</span>{props.textoAtencion2}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactoCuerpo;