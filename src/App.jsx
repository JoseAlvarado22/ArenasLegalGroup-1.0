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
        {/* <Cabecera /> */}

        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/Sobre-Nosotros" element={<PaginaNosotrosDetalle />} />
        </Routes>

        {/* <Footer /> */}
      </div>
    </HashRouter>
  );
}

export default App;


