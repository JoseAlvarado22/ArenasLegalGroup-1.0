import React, { useState, useEffect, useRef } from 'react';
import '../estilos-css/reseñasSlider.css';

const resenas = [
  {
    id: 1,
    nombre: "Carlos Mendoza",
    calificacion: 4,
    comentario: "Excelente acompañamiento en mi proceso administrativo, su equipo demostró un alto nivel de ética y profesionalismo en todo momento."
  },
  {
    id: 2,
    nombre: "María Gómez",
    calificacion: 4,
    comentario: "Resolvieron mi caso con suma rapidez y claridad, muy recomendados por su compromiso y atención personalizada."
  },
  {
    id: 3,
    nombre: "Jorge Silva",
    calificacion: 4,
    comentario: "Gracias a Arenas Legal Group logramos por su acompañamiento en la solucion de mi caso, su estrategia jurídica fue impecable."
  },
  {
    id: 4,
    nombre: "Andrea López",
    calificacion: 5,
    comentario: "Una asesoría jurídica oportuna y muy clara, despejaron todas mis dudas desde la primera consulta con gran calidez humana."
  },
  {
    id: 5,
    nombre: "Gabriel Torres",
    calificacion: 4,
    comentario: "Atención de primera clase, su representación en reclamaciones bancarias fue muy efectiva."
  }
];

function ResenasSlider() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // INTERSECTION OBSERVER PARA DETECTAR EL FOCO DE SCROLL
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // activa una sola vez al entrar en pantalla
        }
      },
      {
        threshold: 0.15, //activa cuando el 15% de la sección es visible
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

  // Función para renderizar las estrellas de calificación
  const renderEstrellas = (cant) => {
    return "★".repeat(cant) + "☆".repeat(5 - cant);
  };

  return (
    <section 
      ref={sectionRef}
      className={`seccion-resenas ${isVisible ? 'animar-entrada' : 'seccion-oculta'}`}
    >
      <div className="encabezado-resenas anim-encabezado">
        <h2 className="titulo-resenas">Valoraciones de nuestros clientes</h2>
        <p className="subtitulo-resenas">La confianza y satisfacción de quienes representamos son nuestro mayor respaldo.</p>
      </div>

      {/* Cintas enmascaradas para movimiento infinito */}
      <div className="carrusel-infinito-contenedor anim-carrusel">
        <div className="carrusel-infinito-pista">
          {/* Se duplica el arreglo para garantizar el bucle continuo sin saltos */}
          {[...resenas, ...resenas].map((item, index) => (
            <div className="tarjeta-resena" key={`${item.id}-${index}`}>
              <div className="estrellas-calificacion" aria-label={`Calificación: ${item.calificacion} de 5 estrellas`}>
                {renderEstrellas(item.calificacion)}
              </div>
              <p className="comentario-resena">"{item.comentario}"</p>
              <h4 className="nombre-cliente">{item.nombre}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResenasSlider;