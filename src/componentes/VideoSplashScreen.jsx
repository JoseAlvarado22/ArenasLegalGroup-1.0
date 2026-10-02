import React, { useState } from 'react';
import videoEntrada from '../assets/intro.mp4';
import '../estilos-css/videoSplashScreen.css';

function VideoSplashScreen({ alFinalizarVideo }) {
  const [desvaneciendo, setDesvaneciendo] = useState(false);

  const iniciarSalida = () => {
    setDesvaneciendo(true);
    // Espera 600ms (duración de la transición en CSS) antes de avisar a App.jsx
    setTimeout(() => {
      alFinalizarVideo();
    }, 500);
  };

  return (
    <div className={`contenedor-splash-video ${desvaneciendo ? 'desvanecer-salida' : ''}`}>
      <video
        autoPlay
        muted
        playsInline
        onEnded={iniciarSalida}
        className="video-presentacion"
      >
        <source src={videoEntrada} type="video/mp4" />
        Tu navegador no soporta vídeos.
      </video>

      <button className="boton-omitir" onClick={iniciarSalida}>
        Omitir intro ➔
      </button>
    </div>
  );
}

export default VideoSplashScreen;