// import React from 'react';
// import '../estilos-css/nosotrosCuerpo.css'

// function NosotrosCuerpo(props){
//     return(
//         <div className='contenedor-seccion-nosotros'>

//             <div className='contenedor-titulo-nosotros'>
//                 <h3>{props.tituloSeccion}</h3>
//                 <img className='imagen-seccion-nosotros' src={props.imagenSeccion} alt="Imagen de seccion"/>
//             </div>

//             <div className='contenedor-texto-nosotros'>
//                 <h1>{props.titulo}</h1>

//                 <p>{props.parrafo1} {props.parrafo2} {props.parrafo3}</p>
//             </div>

//             <div className='contenedor-a'>
//                 <a>
//                     {props.textoBoton}<span className="arrow-icon">▷</span>
//                     {/* <img className='icono-boton' src={props.imagenBoton} alt="Icono de flecha"/> */}
//                 </a>
//             </div>

//         </div>
//     )
// }

// export default NosotrosCuerpo;

import React from 'react';
import '../estilos-css/nosotrosCuerpo.css';

function NosotrosCuerpo(props){
    return(
        <div className='contenedor-seccion-nosotros'>

            <div className='contenedor-titulo-nosotros'>
                <h3>{props.tituloSeccion}</h3>
                <div className='contenedor-banner-imagen'>
                    <img className='imagen-seccion-nosotros' src={props.imagenSeccion} alt="Imagen de seccion"/>
                    <h1 className='titulo-encima'>{props.titulo}</h1>
                </div>
            </div>

            <div className='contenedor-texto-nosotros'>
                <p>{props.parrafo1} {props.parrafo2} {props.parrafo3}</p>
            </div>

            <div className='contenedor-a'>
                <a>
                    {props.textoBoton}<span className="arrow-icon">▷</span>
                </a>
            </div>

        </div>
    )
}

export default NosotrosCuerpo;