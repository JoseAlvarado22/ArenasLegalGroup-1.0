// import './App.css'
// import Cabecera from './componentes/Cabecera.jsx'
// import Contacto from './componentes/Contacto.jsx'
// import Main from './componentes/Main.jsx'
// import Nosotros from './componentes/Nosotrtos.jsx'
// import Servicios from './componentes/Servicios.jsx'
// import Footer from './componentes/Footer.jsx'
// import NosotrosConoceMas from './componentes/NosotrosConoceMas.jsx'

// function App() {

//   return (
//     <div className='contenedor'>
//       <Cabecera/>

//       <Main/>

//       <Nosotros/>

//       <Servicios/>

//       <Contacto/>

//       <Footer/>

//       {/* <NosotrosConoceMas/> */}
//     </div>
//   )
// }

// export default App






// import React, { useEffect } from 'react';
// import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
// import './App.css';

// import Cabecera from './componentes/Cabecera.jsx';
// import Contacto from './componentes/Contacto.jsx';
// import Main from './componentes/Main.jsx';
// import Nosotros from './componentes/Nosotrtos.jsx';
// import Servicios from './componentes/Servicios.jsx';
// import Footer from './componentes/Footer.jsx';
// import NosotrosConoceMas from './componentes/NosotrosConoceMas.jsx';
// import ServiciosCard5 from './componentes/ServiciosCard5.jsx';

// // Reinicia el scroll arriba al cambiar de vista
// function ScrollToTop() {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return null;
// }

// // Vista de la portada principal
// function PaginaPrincipal() {
//   return (
//     <>
//       <Cabecera />
//       <Main />
//       <Nosotros />
//       <Servicios />
//       <Contacto />
//       <Footer />

//       {/* <ServiciosCard5/> */}
//     </>
//   );
// }

// // Vista detallada de Nosotros
// function PaginaNosotrosDetalle() {
//   return (
//     <>
//       <NosotrosConoceMas />
//     </>
//   );
// }

// function App() {
//   return (
//     <HashRouter>
//       <ScrollToTop />
//       <div className='contenedor'>

//         <Routes>
//           <Route path="/" element={<PaginaPrincipal />} />
//           <Route path="/Sobre-Nosotros" element={<PaginaNosotrosDetalle />} />
//         </Routes>

//       </div>
//     </HashRouter>
//   );
// }

// export default App;




import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Cabecera from './componentes/Cabecera.jsx';
import Contacto from './componentes/Contacto.jsx';
import Main from './componentes/Main.jsx';
import Nosotros from './componentes/Nosotrtos.jsx';
import Servicios from './componentes/Servicios.jsx';
import Footer from './componentes/Footer.jsx';
import NosotrosConoceMas from './componentes/NosotrosConoceMas.jsx';

// Importa aquí los componentes de cada servicio
 
import ServiciosCard1 from './componentes/ServiciosCard1.jsx';
import ServiciosCard2 from './componentes/ServiciosCard2.jsx';
import ServiciosCard3 from './componentes/ServiciosCard3.jsx';
import ServiciosCard4 from './componentes/ServiciosCard4.jsx';
import ServiciosCard5 from './componentes/ServiciosCard5.jsx';

// Reinicia el scroll arriba al cambiar de vista
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Vista de la portada principal
function PaginaPrincipal() {
  return (
    <>
      <Cabecera />
      <Main />
      <Nosotros />
      <Servicios />
      <Contacto />
      <Footer />
    </>
  );
}

// Vista detallada de Nosotros
function PaginaNosotrosDetalle() {
  return (
    <>
      <NosotrosConoceMas />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className='contenedor'>

        <Routes>
          {/* Ruta Inicio */}
          <Route path="/" element={<PaginaPrincipal />} />
          

          {/* Ruta Nosotros */}
          <Route path="/Sobre-Nosotros" element={<PaginaNosotrosDetalle />} />


          {/* Rutas para los 5 Servicios */}
          <Route path="/servicio/peticion-y-tutelas" element={<ServiciosCard1 />} /> {/* Cambiar por el componente 1 cuando lo tengas */}
          <Route path="/servicio/infracciones-transito" element={<ServiciosCard2 />} /> {/* Cambiar por el componente 2 */}
          <Route path="/servicio/reclamaciones-bancarias" element={<ServiciosCard3 />} /> {/* Cambiar por el componente 3 */}
          <Route path="/servicio/derecho-laboral" element={<ServiciosCard4 />} /> {/* Cambiar por el componente 4 */}
          <Route path="/servicio/defensa-estatal" element={<ServiciosCard5 />} />
        </Routes>

      </div>
    </HashRouter>
  );
}

export default App;


