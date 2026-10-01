import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Importamos useNavigate
import '../estilos-css/cabeceraAtras.css';
import logo from '../assets/LogoArenasLegalGroup4.svg';

function CabeceraAtras() {
  const navigate = useNavigate(); // 2. Inicializamos el hook para la navegación

  return (
    <>
      <header className='cabecera'>
        <div className='contenedor-cabecera'>
            <div className='logo'>
                {/* 3. Agregamos onClick para regresar a la raíz "/" */}
                <button 
                  className="boton-atras" 
                  aria-label="Volver" 
                  onClick={() => navigate('/')}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M14 16l-4-4 4-4"/>
                    </svg>
                </button>

                <img className='ALG' src={logo} alt='Logo Arenas Legal Group' />
            </div>
        </div>
      </header>
    </>
  );
}

export default CabeceraAtras;