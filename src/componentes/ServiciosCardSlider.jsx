// import React from "react";
// import '../estilos-css/serviciosCardSlider.css'
// import {useState} from "react";
// import imgCarta1 from '../assets/imgCarta1.jpg';
// import imgCarta2 from '../assets/imgCarta2.jpg';
// import imgCarta3 from '../assets/imgCarta3.jpg';
// import imgCarta4 from '../assets/imgCarta4.jpg';
// import imgCarta5 from '../assets/imgCarta5.jpg';

// const cartas = [
//     {
//         imgCarta:imgCarta1,
//         textoCarta:'Derecho de Petición y Acciones de Tutela',
//     },
//     {
//         imgCarta:imgCarta2,
//         textoCarta:'Defensa Integral ante Infracciones de Tránsito'
//     },
//     {
//         imgCarta:imgCarta3,
//         textoCarta:'Litigios y Reclamaciones Bancarias'
//     },
//     {
//         imgCarta:imgCarta4,
//         textoCarta:'Asesoría y Representación legal (Derecho Laboral)'
//     },
//     {
//         imgCarta:imgCarta5,
//         textoCarta:'Defensa Legal ante Entidades Estatales'
//     }
// ]


// const ServiciosCardSlider = () => {

//     const [indiceActual, setIndiceActual] = useState(2);

//     const anteriorSlide = () => {
//         setIndiceActual((prev) => (prev - 1 + cartas.length) % cartas.length)
//     }

//     const siguenteSlide = () => {
//         setIndiceActual((prev) => (prev + 1) % cartas.length)
//     }

//     const getCartaStilo = (index) => {
//         const posicion = index - indiceActual;
//         const baseZ = -Math.abs(posicion);
//         const scale = posicion === 0 ? 1.2 : 0.8;
//         const opacity = posicion === 0 ? 1 : 0.8;
//         const translateX = posicion * 120 + '%';
//         return {
//             transform: `translateX(${translateX}) scale(${scale})`,
//             zIndex: 100 + baseZ,
//             opacity
//         }
//     }

//     return(
//         <div className="servicios-carta-slider">
//             <div className="servicios-carta-slider-contenedor">

//                 <div className="servicios-carta">
//                     {cartas.map((carta, index) => (
//                         <div className="carta" key={index} style={getCartaStilo(index)}>
//                             <div className="carta-imagen">
//                                 <img src={carta.imgCarta} alt="Imagen" />
//                             </div>
//                             <div className="carta-texto" style={getCartaStilo(index)}>
//                                 <p>{carta.textoCarta}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="botones">
//                     <button onClick={anteriorSlide}>{'<'}</button>
//                     <button onClick={siguenteSlide}>{'>'}</button>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default ServiciosCardSlider;

import React, { useState, useEffect } from "react";
import '../estilos-css/serviciosCardSlider.css';

import imgCarta1 from '../assets/imgCarta1.svg';
import imgCarta2 from '../assets/imgCarta2.svg';
import imgCarta3 from '../assets/imgCarta3.svg';
import imgCarta4 from '../assets/imgCarta4.svg';
import imgCarta5 from '../assets/imgCarta5.svg';

const cartas = [
    {
        imgCarta: imgCarta1,
        textoCarta: 'Derecho de Petición y Acciones de Tutela',
    },
    {
        imgCarta: imgCarta2,
        textoCarta: 'Defensa Integral ante Infracciones de Tránsito'
    },
    {
        imgCarta: imgCarta3,
        textoCarta: 'Litigios y Reclamaciones Bancarias'
    },
    {
        imgCarta: imgCarta4,
        textoCarta: 'Asesoría y Representación legal (Derecho Laboral)'
    },
    {
        imgCarta: imgCarta5,
        textoCarta: 'Defensa Legal ante Entidades Estatales'
    }
];

const ServiciosCardSlider = () => {
    const [indiceActual, setIndiceActual] = useState(2);
    const [estaPausado, setEstaPausado] = useState(false);

    const anteriorSlide = () => {
        setIndiceActual((prev) => (prev - 1 + cartas.length) % cartas.length);
    };

    const siguienteSlide = () => {
        setIndiceActual((prev) => (prev + 1) % cartas.length);
    };

    useEffect(() => {
        if (estaPausado) return;
        const timer = setInterval(() => {
            siguienteSlide();
        }, 3000);

        return () => clearInterval(timer);
    }, [estaPausado, indiceActual]);

    const getCartaStilo = (index) => {
        const total = cartas.length;
        let posRelativa = index - indiceActual;

        if (posRelativa > Math.floor(total / 2)) {
            posRelativa -= total;
        } else if (posRelativa < -Math.floor(total / 2)) {
            posRelativa += total;
        }

        const isActiva = posRelativa === 0;
        const scale = isActiva ? 1.05 : 0.85;
        const opacity = isActiva ? 1 : 0.5;
        const translateX = posRelativa * 100 + '%';
        const zIndex = 100 - Math.abs(posRelativa);

        return {
            transform: `translateX(${translateX}) scale(${scale})`,
            zIndex: zIndex,
            opacity: Math.abs(posRelativa) > 2 ? 0 : opacity,
        };
    };

    return (
        <div className="servicios-carta-slider">
            <div 
                className="servicios-carta-slider-contenedor"
                onMouseEnter={() => setEstaPausado(true)}
                onMouseLeave={() => setEstaPausado(false)}
            >
                {/* Carrusel de Cartas */}
                <div className="servicios-carta">
                    {cartas.map((carta, index) => (
                        <div 
                            className={`carta ${index === indiceActual ? 'carta-activa' : ''}`} 
                            key={index} 
                            style={getCartaStilo(index)}
                            onClick={() => setIndiceActual(index)}
                        >
                            <div className="carta-imagen">
                                <img src={carta.imgCarta} alt={carta.textoCarta} />
                            </div>
                            <div className="carta-texto">
                                <p>{carta.textoCarta}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controles: Botones e Indicadores */}
                <div className="controles-inferiores">
                    <div className="botones">
                        <button onClick={anteriorSlide} aria-label="Anterior">&lt;</button>
                        
                        {/* GUÍA VISUAL / INDICADORES */}
                        <div className="indicadores-puntos">
                            {cartas.map((_, index) => (
                                <button
                                    key={index}
                                    className={`punto ${index === indiceActual ? 'punto-activo' : ''}`}
                                    onClick={() => setIndiceActual(index)}
                                    aria-label={`Ir a carta ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button onClick={siguienteSlide} aria-label="Siguiente">&gt;</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ServiciosCardSlider;