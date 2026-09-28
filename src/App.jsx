import './App.css'
import Cabecera from './componentes/Cabecera.jsx'
import Contacto from './componentes/Contacto.jsx'
import Main from './componentes/Main.jsx'
import Nosotros from './componentes/Nosotrtos.jsx'
import Servicios from './componentes/Servicios.jsx'
import Footer from './componentes/Footer.jsx'

function App() {

  return (
    <div className='contenedor'>
      <Cabecera/>

      <Main/>

      <Nosotros/>

      <Servicios/>

      <Contacto/>

      <Footer/>
    </div>
  )
}

export default App
