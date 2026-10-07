import React, { useState, useEffect, sectionRef } from 'react';
import { Link } from 'react-router-dom';
import '../estilos-css/nosotrosCuerpo.css';

// Componente auxiliar para observar cada elemento de forma independiente
function ElementoAnimado({ children, className = '', animacion = 'desde-izquierda' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = sectionRef(null);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    },
    {
      // En iOS, 0.01 o 0.05 garantiza la activación inmediata al primer contacto
      threshold: 0.05, 
      // rootMargin expande el margen de detección 50px antes de que toque la pantalla
      rootMargin: "0px 0px 50px 0px"
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => {
    if (sectionRef.current) observer.disconnect();
  };
}, []);

  return (
    <div
      ref={ref}
      className={`${className} anim-lateral ${animacion} ${isVisible ? 'entrada-activa' : ''}`}
    >
      {children}
    </div>
  );
}

function NosotrosCuerpo(props) {
  return (
    <div className='contenedor-seccion-nosotros'>

      <div className='contenedor-titulo-nosotros'>
        {/* Entra desde la izquierda */}
        <ElementoAnimado animacion="desde-izquierda">
          <h3>{props.tituloSeccion}</h3>
        </ElementoAnimado>
        
        {/* Entra desde la derecha */}
        <ElementoAnimado className='contenedor-banner-imagen' animacion="desde-derecha">
          <img className='imagen-seccion-nosotros' src={props.imagenSeccion} alt="Imagen de seccion"/>
          <h1 className='titulo-encima'>{props.titulo}</h1>
        </ElementoAnimado>
      </div>

      {/* Entra desde la izquierda cuando el usuario llega al texto */}
      <ElementoAnimado className='contenedor-texto-nosotros' animacion="desde-izquierda">
        <p>{props.parrafo1} {props.parrafo2} {props.parrafo3}</p>
      </ElementoAnimado>

      {/* Entra desde la derecha cuando enfoca el botón */}
      <ElementoAnimado className='contenedor-a' animacion="desde-derecha">
        <Link to={props.rutaDestino || '#'}>
          {props.textoBoton}<span className="arrow-icon">▷</span>
        </Link>
      </ElementoAnimado>

    </div>
  );
}

export default NosotrosCuerpo;