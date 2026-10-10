import React, { useState, useEffect } from 'react';
import '../estilos-css/serviciosCard4.css';
import TargetaAgendarAsesoria from './TargetaAgendarAsesoria';
import Footer from './Footer';
import CabeceraAtras from './CabeceraAtras';

function ServiciosCard4() {
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
    <>
      <CabeceraAtras/>
      
      <div className={`vista-servicio-transicion ${cargado ? 'entrada-suave' : ''}`}>

        <div className="contenedor-defensa-laboral">
          
          <div className="banner-titulo-laboral">
            <div className="superposicion-oscura"></div>
            <h1 className="titulo-banner">
              Asesoría y Representación legal (Derecho Laboral)
            </h1>
          </div>

          {/* Cuerpos de Texto y Listado */}
          <div className="contenido-laboral">
            <p className="parrafo-principal">
              Brindamos soluciones integrales en Derecho Laboral y Seguridad Social, dirigida a trabajadores y 
              empleadores que requieren orientación para prevenir, resolver o gestionar situaciones de su 
              relación laboral y el acceso a las prestaciones del Sistema de Seguridad Social.
            </p>

            <p className="parrafo-secundario">
              El servicio comprende el análisis jurídico de cada situación, orientación sobre los derechos y 
              obligaciones de las partes, reclamaciones y acompañamiento ante las entidades correspondientes 
              y representación en las actuaciones y procesos que sean necesarios, de acuerdo con las 
              características de cada caso.
            </p>

            <p className="parrafo-secundario">
              Nuestra firma esta enfocada  en brindar una  asesoría laboral preventiva
              con una orientación jurídica para la correcta aplicación de la legislación laboral y la prevención de conflictos entre  
              trabajadores y empleadores, ejercemos la representación en procesos judiciales de diferente indole, defendiendo  íntegramente 
              los derechos laborales de nuestros clientes apuntando siempre a la proteccion y creación de relaciones laborales justas. Brindamos 
              acompañamiento en la evaluación del caso, identificación de la vía jurídica procedente y preparación de las actuaciones necesarias en cada etapa procesal.
            </p>

            <TargetaAgendarAsesoria/>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default ServiciosCard4;