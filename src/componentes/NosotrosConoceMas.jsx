import React, { useState, useEffect } from 'react';
import '../estilos-css/nosotrosConoceMas.css';
import Footer from './Footer.jsx';
import Fotogerente from "../assets/FotoGerente.svg";
import TargetaAgendarAsesoria from './TargetaAgendarAsesoria.jsx';
import CabeceraAtras from './CabeceraAtras.jsx';

function NosotrosConoceMas() {
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

    <div className={`vista-nosotros-conocemas ${cargado ? 'entrada-sua' : ''}`}>
      <div className="contenedor-mision-vision">
        <CabeceraAtras/>

        <main className="contenido-principal">
          
          {/* Sección Misión */}
          <section className="bloque-texto">
            <h2 className="titulo-serif">Misión</h2>
            <p>
              Brindar servicios jurídicos integrales con altos estándares de calidad, ética y responsabilidad profesional, ofreciendo soluciones estratégicas y personalizadas que protejan los intereses de nuestros clientes, generen confianza y aporten seguridad jurídica en cada una de sus decisiones legales.
            </p>
          </section>

          {/* Sección Visión */}
          <section className="bloque-texto">
            <h2 className="titulo-serif">Visión</h2>
            <p>
              Ser una firma de abogados reconocida a nivel nacional por su excelencia profesional, compromiso con la justicia y capacidad de innovación, consolidándonos como un aliado jurídico confiable que contribuya al desarrollo legal, empresarial y social de nuestros clientes y de la comunidad.
            </p>
          </section>
        </main>

        {/* Banner Gerente General */}
        <section className="banner-gerente">
          {/* <div className="contenedor-foto-gerente">
            <img 
              src={Fotogerente} 
              alt="Lina Fernanda Arenas Campo - Gerente General" 
              className="foto-gerente"
              loading="lazy"
            />
          </div> */}
          <div className="info-gerente">
            <h3 className="nombre-gerente">Lina Fernanda Arenas Campo</h3>
            <h4>(Especialista en Derecho Laboral y Seguridad Social)</h4>
            <p className="cargo-gerente">Gerente General</p>
          </div>
        </section>

        <div className='contenedor-bloque-texto'>
            {/* Perfil Profesional */}
            <section className="bloque-texto texto-perfil">
              <p>
                Abogada, dedicada a brindar asesoría jurídica clara, responsable y estratégica, enfocada en la protección de los derechos e intereses de sus clientes. Ofrece acompañamiento legal integral, con especial atención al estudio individual de cada caso, la construcción de soluciones prácticas y oportunas.
              </p>
              <p>
                Su enfoque profesional se desarrolla en áreas como derecho laboral, derecho administrativo, trámites administrativos y reclamaciones ante entidades de diferente índole a nivel nacional.
              </p>
            </section>

            <TargetaAgendarAsesoria/>
        </div>

        <Footer/>
      </div>
    </div>
  );
}

export default NosotrosConoceMas;