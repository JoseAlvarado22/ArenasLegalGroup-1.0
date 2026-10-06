import React from 'react';
import { Link } from 'react-router-dom'; // 1. Importamos Link
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
                {/* 2. Reemplazamos/Envolvemos la etiqueta <a> con <Link> */}
                <Link to={props.rutaDestino || '#'}>
                    {props.textoBoton}<span className="arrow-icon">▷</span>
                </Link>
            </div>

        </div>
    )
}

export default NosotrosCuerpo;