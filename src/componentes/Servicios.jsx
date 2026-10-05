import React from 'react';
import ServiciosCuerpo from './ServiciosCuerpo.jsx';
import ServiciosCardSlider from './ServiciosCardSlider.jsx';
import imagenSeccion from '../assets/nuestrosServicios.svg'
import '../estilos-css/servicios.css'

function Servicios(){
    return(
        <section className='seccion-servicios'>

            <ServiciosCuerpo
                tituloSeccion="Nuestros Servicios"
                imagenSeccion={imagenSeccion}
                titulo="Diferenciales Estratégicos"
                parrafo='Atención Personalizada de Alto Nivel, Comunicación directa 
                        con el profesional a cargo, asegurando que cada detalle técnico sea 
                        analizado exhaustivamente.'
            />

            <ServiciosCardSlider/>

        </section>
    )
}

export default Servicios;