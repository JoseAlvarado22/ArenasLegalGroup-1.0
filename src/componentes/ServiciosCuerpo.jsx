// import React from 'react';
// import '../estilos-css/serviciosCuerpo.css'

// function ServiciosCuerpo(props){
//     return(
//         <div className='contenedor-seccion-servicios'>

//             <div className='contenedor-titulo-servicios'>
//                 <h3>{props.tituloSeccion}</h3>
//                 <img className='imagen-seccion' src={props.imagenSeccion} alt="Imagen de seccion"/>
//             </div>

//             <div className='contenedor-texto-servicios'>
//                 <h1>{props.titulo}</h1>

//                 <p>{props.parrafo}</p>
//             </div>

//         </div>
//     )
// }

// export default ServiciosCuerpo;

import React from 'react';
import '../estilos-css/serviciosCuerpo.css'

function ServiciosCuerpo(props){
    return(
        <div className='contenedor-seccion-servicios'>

            <div className='contenedor-titulo-servicios'>
                <h3>{props.tituloSeccion}</h3>
                <div className='contenedor-banner-imagen'>
                    <img className='imagen-seccion-servicios' src={props.imagenSeccion} alt="Imagen de seccion" loading="lazy"/>
                    <h1 className='titulo-encima'>{props.titulo}</h1>
                </div>
            </div>

            <div className='contenedor-texto-servicios'>
                <p>{props.parrafo}</p>
            </div>

        </div>
    )
}

export default ServiciosCuerpo;