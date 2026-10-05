import React, { useRef, useEffect, useState } from 'react';
import videoEntrada from '../assets/intro.mp4';
import '../estilos-css/videoSplashScreen.css';

function VideoSplashScreen({ alFinalizarVideo }) {
  const videoRef = useRef(null);
  const [desvaneciendo, setDesvaneciendo] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      // Ajusta la velocidad de reproducción a 1.5x (El video de 6s pasará a durar 4s)
      videoRef.current.playbackRate = 3;
    }
  }, []);

  const iniciarSalida = () => {
    setDesvaneciendo(true);
    setTimeout(() => {
      alFinalizarVideo();
    }, 600); // Duración de la transición de opacidad en CSS
  };

  return (
    <div className={`contenedor-splash-video ${desvaneciendo ? 'desvanecer-salida' : ''}`}>
      <video
        ref={videoRef}
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