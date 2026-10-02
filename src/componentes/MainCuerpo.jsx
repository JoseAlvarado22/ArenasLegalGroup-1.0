import React from 'react';
import '../estilos-css/mainCuerpo.css';

function MainCuerpo(props){
    return(
        <>
            <h1 className="animacion-entrada" style={{ animationDelay: '0.1s' }}>
                <span>{props.tituloDegradado}</span> {props.tituloNormal}
            </h1>
            
            <p className="animacion-entrada" style={{ animationDelay: '0.3s' }}>
                {props.parrafo}
            </p>
            
            <a
                className="boton-agenda animacion-entrada"
                style={{ animationDelay: '0.5s' }}
                href="#contacto"
                onClick={(e) => {
                    e.preventDefault();

                    document.getElementById('contacto')?.scrollIntoView({
                        behavior: 'smooth'
                    });
                }}
            >
                {props.textoBoton}
                <img src={props.logoBoton} alt="Icono de calendario" loading="lazy"/>
            </a>
        </>
    )
}

export default MainCuerpo;
