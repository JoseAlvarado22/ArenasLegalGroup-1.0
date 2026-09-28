import React from 'react';
import '../estilos-css/contactoCuerpo.css'

function ContactoCuerpo(props){
    return(
        <div className='contenedor-seccion-contacto'>

            <div className='contenedor-titulo-contacto'>
                <h3>{props.tituloSeccion}</h3>
            </div>

            <div className='contenedor-texto-contacto'>
                <h1>{props.titulo}</h1>

                <p>{props.parrafo}</p>
            </div>

            <div className='contenedor-iconos-contacto'>

                <div className='contenedor-icono-telefono contenedor-icono'>
                    <img className='icono-telefono' src={props.imagenTelefono} alt="Icono de telefono"/>
                    <p><span>{props.textoTelefono1}</span>{props.textoTelefono2}</p>
                </div>

                <div className='contenedor-icono-email contenedor-icono'>
                    <img className='icono-email' src={props.imagenEmail} alt="Icono de email"/>
                    <p><span>{props.textoEmail1}</span>{props.textoEmail2}</p>
                </div>

                {/* <div className='contenedor-icono-direccion'>
                    <img className='icono-direccion' src={props.imagenDireccion} alt="Icono de direccion"/>
                    <p><span>{props.textoDireccion1}</span>{props.textoDireccion2}</p>
                </div>*/}

                <div className='contenedor-icono-atencion contenedor-icono'>
                    <img className='icono-atencion' src={props.imagenAtencion} alt="Icono de atencion"/>
                    <p><span>{props.textoAtencion1}</span>{props.textoAtencion2}</p>
                </div>

            </div>

        </div>
    )
}

export default ContactoCuerpo;
