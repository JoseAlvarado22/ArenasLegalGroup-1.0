import React, { useState, useEffect } from 'react';
import '../estilos-css/serviciosCard3.css';
import TargetaAgendarAsesoria from './TargetaAgendarAsesoria';
import Footer from './Footer';
import CabeceraAtras from './CabeceraAtras';

function ServiciosCard3() {
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

      <div className="contenedor-defensa-bancaria">
        
        <div className="banner-titulo-bancaria">
          <div className="superposicion-oscura"></div>
          <h1 className="titulo-banner">
            Litigios y Reclamaciones Bancarias
          </h1>
        </div>

        {/* Cuerpos de Texto y Listado */}
        <div className="contenido-bancaria">
          <p className="parrafo-principal">
            Nuestro equipo se especializa 
            en la gestión de procesos ante la Delegatura para Funciones Jurisdiccionales de la Superintendencia Financiera. Desde la 
            interposición de quejas formales hasta el seguimiento de investigaciones administrativas, garantizamos que su caso sea presentado 
            con el máximo rigor técnico para obtener resoluciones favorables y restaurar el equilibrio en sus relaciones contractuales.
          </p>

          <p className="parrafo-secundario">
            Alcances de nuestro equipo ante la SFC:
          </p>

          <ul className="lista-servicios">
            <li>
              <span className="punto-negro">•</span>
              <p>
                <strong>Acciones Jurisdiccionales:</strong> Demandas para la protección del consumidor financiero y resolucion de controversias ante las entidades vigiladas.
              </p>
            </li>
            <li>
              <span className="punto-negro">•</span>
              <p>
                <strong>Interposición de Quejas:</strong> Gestión técnica de reclamaciones por fallas en el servicio, vulneracion de derechos e incumplimiento de obligaciones.
              </p>
            </li>
            <li>
              <span className="punto-negro">•</span>
              <p>
                <strong>Vigilancia de Prácticas Abusivas:</strong> Denuncia y seguimiento de conductas que afectan los derechos de los consumidores financieros.
              </p>
            </li>
            {/* <li>
              <span className="punto-negro">•</span>
              <p>
                <strong>Defensa en Procesos Administrativos:</strong> Acompañamiento en investigaciones y requerimientos donde la SFC actúe como autoridad de control.
              </p>
            </li> */}
            <li>
              <span className="punto-negro">•</span>
              <p>
                <strong>Conciliación Extrajudicial:</strong> Representación en audiencias para lograr acuerdos efectivos antes de iniciar acciones judiciales.
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

export default ServiciosCard3;