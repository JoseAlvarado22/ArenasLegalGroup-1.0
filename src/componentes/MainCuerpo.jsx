import React from 'react'
import '../estilos-css/mainCuerpo.css';

function MainCuerpo(props){
    return(
        <>
            <h1>
                <span>{props.tituloDegradado}</span> {props.tituloNormal}
            </h1>
            
            <p>
                {props.parrafo}
            </p>
            
            <a className='boton-agenda'>
                {props.textoBoton}
                <img src={props.logoBoton} alt="Icono de calendario"/>
            </a>
        </>
    )
}

export default MainCuerpo;
