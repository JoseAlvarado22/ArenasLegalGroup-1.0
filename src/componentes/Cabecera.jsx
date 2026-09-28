import React from 'react';
import logo from '../assets/LogoArenasLegalGroup4.svg';
import '../estilos-css/cabecera.css';

function Cabecera(){
    return(
        <header className='cabecera'>
            <div className='contenedor-cabecera'>
                <div className='logo'>
                    <img className='ALG' src={logo} alt='Logo Arenas Legal Group' />
                </div>
            </div>
        </header>
    )
};

export default Cabecera;