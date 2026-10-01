import React from 'react';
import '../estilos-css/serviciosCard5.css';
import TargetaAgendarAsesoria from './TargetaAgendarAsesoria';
import Footer from './Footer';
import CabeceraAtras from './CabeceraAtras';

function ServiciosCard5() {
  return (
    <>

      <CabeceraAtras/>

      <div className="contenedor-defensa-estatal">
        
        <div className="banner-titulo-estatal">
          <div className="superposicion-oscura"></div>
          <h1 className="titulo-banner">
            Defensa Legal ante Entidades Estatales
          </h1>
        </div>

        {/* Cuerpos de Texto y Listado */}
        <div className="contenido-estatal">
          <p className="parrafo-principal">
            Salvaguardamos sus intereses frente a las actuaciones del Estado. Contamos con una amplia experiencia en la representación ante organismos de control, entes reguladores y tribunales administrativos. Nuestra práctica se centra en garantizar que la administración pública actúe bajo los principios de legalidad y debido proceso, defendiéndolo ante sanciones injustas, multas desproporcionadas o actos administrativos que vulneren sus derechos.
          </p>

          <p className="parrafo-secundario">
            Brindamos consultoría y defensa técnica en todas las etapas de la relación con el sector público:
          </p>

          <ul className="lista-servicios">
            <li>
              <span className="punto-negro">•</span>
              <p>
                <strong>Recursos Administrativos:</strong> Agotamiento de la vía gubernativa (reposición, apelación y queja).
              </p>
            </li>
            <li>
              <span className="punto-negro">•</span>
              <p>
                <strong>Responsabilidad del Estado:</strong> Demandas por reparación directa ante perjuicios causados por la administración.
              </p>
            </li>
            <li>
              <span className="punto-negro">•</span>
              <p>
                <strong>Procesos Sancionatorios:</strong> Defensa ante investigaciones de Superintendencias y entes de vigilancia.
              </p>
            </li>
          </ul>

          <TargetaAgendarAsesoria/>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ServiciosCard5;