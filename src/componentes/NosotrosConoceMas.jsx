// import React from 'react';
// import '../estilos-css/nosotrosConoceMas.css';
// import logo from '../assets/LogoArenasLegalGroup4.svg';
// import Footer from './Footer.jsx';
// import Fotogerente from "../assets/FotoGerente.svg"
// import IconoCalendario from '../assets/IconoCalendario.svg'

// function NosotrosConoceMas() {
//   return (
//     <div className="contenedor-mision-vision">

//       <header className='cabecera'>
//         <div className='contenedor-cabecera'>
//             <div className='logo'>
//                 <button className="boton-atras" aria-label="Volver">
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                         <circle cx="12" cy="12" r="10"/>
//                         <path d="M14 16l-4-4 4-4"/>
//                     </svg>
//                 </button>

//                 <img className='ALG' src={logo} alt='Logo Arenas Legal Group' />
//             </div>
//         </div>
//       </header>

//       <main className="contenido-principal">
        
//         {/* Sección Misión */}
//         <section className="bloque-texto">
//           <h2 className="titulo-serif">Misión</h2>
//           <p>
//             Brindar servicios jurídicos integrales con altos estándares de calidad, ética y responsabilidad profesional, ofreciendo soluciones estratégicas y personalizadas que protejan los intereses de nuestros clientes, generen confianza y aporten seguridad jurídica en cada una de sus decisiones legales.
//           </p>
//         </section>

//         {/* Sección Visión */}
//         <section className="bloque-texto">
//           <h2 className="titulo-serif">Visión</h2>
//           <p>
//             Ser una firma de abogados reconocida a nivel nacional por su excelencia profesional, compromiso con la justicia y capacidad de innovación, consolidándonos como un aliado jurídico confiable que contribuya al desarrollo legal, empresarial y social de nuestros clientes y de la comunidad.
//           </p>
//         </section>
//       </main>

      

//       {/* Banner Gerente General */}
//         <section className="banner-gerente">
//           <div className="contenedor-foto-gerente">
//             {/* === SEÑAL PARA LA FOTO DE LA GERENTE GENERAL === */}
//             <img 
//               src={Fotogerente} /* <-- Reemplaza por tu importación o ruta (ej: fotoGerente) */
//               alt="Lina Fernanda Arenas Campo - Gerente General" 
//               className="foto-gerente"
//             />
//           </div>
//           <div className="info-gerente">
//             <h3 className="nombre-gerente">Lina Fernanda Arenas Campo</h3>
//             <p className="cargo-gerente">Gerente General</p>
//           </div>
//         </section>

//         <div className='contenedor-bloque-texto'>
//             {/* Perfil Profesional */}
//             <section className="bloque-texto texto-perfil">
//             <p>
//                 Abogada, dedicada a brindar asesoría jurídica clara, responsable y estratégica, enfocada en la protección de los derechos e intereses de sus clientes. Ofrece acompañamiento legal integral, con especial atención al estudio individual de cada caso, la construcción de soluciones prácticas y oportunas.
//             </p>
//             <p>
//                 Su enfoque profesional se desarrolla en áreas como derecho laboral, derecho administrativo, trámites administrativos y reclamaciones ante entidades de diferente índole a nivel nacional.
//             </p>
//             </section>

//             {/* Tarjeta Call To Action (Agendar Asesoría) */}
//             <section className="tarjeta-cta">
//             <h4 className="titulo-cta">¿Le ofrecemos la asesoría jurídica que necesita?</h4>
//             <p className="subtitulo-cta">Obtenga una evaluación y consulta de su caso</p>

//             <a className='boton-agenda-n'>
//                 AGENDAR ASESORIA
//                 <img src={IconoCalendario} alt="Icono de calendario"/>
//             </a>
//             </section>
//         </div>

//       <Footer/>
//     </div>
//   );
// }

// export default NosotrosConoceMas;

import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Importamos useNavigate
import '../estilos-css/nosotrosConoceMas.css';
import logo from '../assets/LogoArenasLegalGroup4.svg';
import Footer from './Footer.jsx';
import Fotogerente from "../assets/FotoGerente.svg";
import IconoCalendario from '../assets/IconoCalendario.svg';

function NosotrosConoceMas() {
  const navigate = useNavigate(); // 2. Inicializamos el hook para la navegación

  return (
    <div className="contenedor-mision-vision">

      <header className='cabecera'>
        <div className='contenedor-cabecera'>
            <div className='logo'>
                {/* 3. Agregamos onClick para regresar a la raíz "/" */}
                <button 
                  className="boton-atras" 
                  aria-label="Volver" 
                  onClick={() => navigate('/')}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M14 16l-4-4 4-4"/>
                    </svg>
                </button>

                <img className='ALG' src={logo} alt='Logo Arenas Legal Group' />
            </div>
        </div>
      </header>

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
        <div className="contenedor-foto-gerente">
          <img 
            src={Fotogerente} 
            alt="Lina Fernanda Arenas Campo - Gerente General" 
            className="foto-gerente"
          />
        </div>
        <div className="info-gerente">
          <h3 className="nombre-gerente">Lina Fernanda Arenas Campo</h3>
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

          {/* Tarjeta Call To Action (Agendar Asesoría) */}
          <section className="tarjeta-cta">
            <h4 className="titulo-cta">¿Le ofrecemos la asesoría jurídica que necesita?</h4>
            <p className="subtitulo-cta">Obtenga una evaluación y consulta de su caso</p>

            <a className='boton-agenda-n' href="#contacto">
                AGENDAR ASESORIA
                <img src={IconoCalendario} alt="Icono de calendario"/>
            </a>
          </section>
      </div>

      <Footer/>
    </div>
  );
}

export default NosotrosConoceMas;