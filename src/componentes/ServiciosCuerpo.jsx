import React, { useState, useEffect, useRef } from 'react';
import '../estilos-css/serviciosCuerpo.css';

// Componente auxiliar para observar cada sub-bloque de forma independiente
function ElementoAnimado({ children, className = '', animacion = 'desde-izquierda' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } // Se activa cuando el 20% del elemento entra en pantalla
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
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

function ServiciosCuerpo(props) {
  return (
    <div className='contenedor-seccion-servicios'>

      <div className='contenedor-titulo-servicios'>
        {/* H3 entra limpiamente desde la izquierda */}
        <ElementoAnimado animacion="desde-izquierda">
          <h3>{props.tituloSeccion}</h3>
        </ElementoAnimado>
        
        {/* El banner de imagen entra con elegancia desde la derecha */}
        <ElementoAnimado className='contenedor-banner-imagen' animacion="desde-derecha">
          <img 
            className='imagen-seccion-servicios' 
            src={props.imagenSeccion} 
            alt="Imagen de seccion" 
            loading="lazy"
          />
          <h1 className='titulo-encima'>{props.titulo}</h1>
        </ElementoAnimado>
      </div>

      {/* El texto explicativo ingresa desde la izquierda al hacer scroll */}
      <ElementoAnimado className='contenedor-texto-servicios' animacion="desde-izquierda">
        <p>{props.parrafo}</p>
      </ElementoAnimado>

    </div>
  );
}

export default ServiciosCuerpo;