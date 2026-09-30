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
            
            {/* <a className='boton-agenda' href='#contacto'>
                {props.textoBoton}
                <img src={props.logoBoton} alt="Icono de calendario"/>
            </a> */}

            <a
                className='boton-agenda'
                href="#contacto"
                onClick={(e) => {
                    e.preventDefault();

                    document.getElementById('contacto')?.scrollIntoView({
                        behavior: 'smooth'
                    });
                }}
            >
                {props.textoBoton}
                <img src={props.logoBoton} alt="Icono de calendario"/>
            </a>
        </>
    )
}

export default MainCuerpo;
