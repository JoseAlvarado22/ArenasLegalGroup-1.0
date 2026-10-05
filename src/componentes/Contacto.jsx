import React from 'react';
import ContactoCuerpo from './ContactoCuerpo';
import iconoTelefono from '../assets/iconoTelefono.svg';
import iconoEmail from '../assets/iconoEmail.svg';
/*import iconoDireccion from '../assets/iconoDireccion.svg';*/
import atencion from '../assets/iconoAtencion.svg';
import '../estilos-css/contacto.css'
import ContactoCuerpoForm from './ContactoCuerpoForm';

function Contacto(){
    return(
        <section className='seccion-contacto'>

            <ContactoCuerpo
                tituloSeccion="Contacto"
                titulo='Agendar Consulta '
                parrafo='Inicie su proceso con el respaldo de una defensa jurídica técnica y dedicada. 
                        Evaluamos la viabilidad de su caso con criterios de honestidad y rigor legal.'
                imagenTelefono={iconoTelefono}
                textoTelefono1="Teléfono: "
                textoTelefono2="(+57) 3147644644"
                imagenEmail={iconoEmail}
                textoEmail1="Correo: "
                textoEmail2="arenaslegalgroup@gmail.com"
                /* imagenDireccion={iconoDireccion}
                textoDireccion1="Dirección: "
                textoDireccion2="Calle 123 Barranquilla, Colombia"} */
                imagenAtencion={atencion}
                textoAtencion1="Atención: "
                textoAtencion2="Lunes a Viernes de 8:00 AM - 5:00 PM"

            />

            <ContactoCuerpoForm/>

        </section>
    )
}

export default Contacto;