import React from 'react';
import nosotrosImg from '../assets/sobreNosotros.avif'
// import iconoFlecha from '../assets/flecha.svg'
import NosotrosCuerpo from './NosotrosCuerpo';
import '../estilos-css/nosotros.css'

function Nosotros(){
    return(
        <section className='seccion-nosotros'>

            <NosotrosCuerpo
                tituloSeccion="Sobre Nosotros"
                imagenSeccion={nosotrosImg}
                titulo="Tu Aliado Legal de Confianza."
                parrafo1='En' 
                parrafo2={<span>Arenas Legal Group</span>}
                parrafo3=', entendemos la práctica del derecho como un ejercicio de precisión,
                        ética y actualización constante. Nuestra firma se distingue por ofrecer un servicio 
                        de consultoría y representación judicial caracterizado por la profundidad técnica y 
                        la eficiencia procesal.'
                textoBoton="Conoce mas"
                rutaDestino="/Sobre-Nosotros"
                // imagenBoton={iconoFlecha}
            />

        </section>
    )
}

export default Nosotros;