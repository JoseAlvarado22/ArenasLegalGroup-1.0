import React from 'react';
import IconoCalendario from '../assets/IconoCalendario.svg'
import MainCuerpo from './MainCuerpo';
import '../estilos-css/main.css';

function Main(){
    return(
        <main className='main' id='inicio'>
            <div className='contenedor-mainCuerpo'>
                <MainCuerpo
                    tituloDegradado='Soluciones'
                    tituloNormal='Legales Integrales.'
                    parrafo='Brindamos soluciones legales integrales mediante un análisis técnico-jurídico 
                    riguroso. Nos especializamos en la representación judicial y administrativa, garantizando 
                    una defensa proactiva y personalizada para cada uno de nuestros clientes.'
                    textoBoton='AGENDAR ASESORIA'
                    logoBoton={IconoCalendario}
                />
            </div>
        </main>
    )
}

export default Main;