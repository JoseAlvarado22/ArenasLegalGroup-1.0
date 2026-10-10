import React, { useRef, useEffect, useState } from 'react';
import videoEntrada from '../assets/intro.mp4';
import '../estilos-css/videoSplashScreen.css';

function VideoSplashScreen({ alFinalizarVideo }) {
  const videoRef = useRef(null);
  const [desvaneciendo, setDesvaneciendo] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  const iniciarSalida = () => {
    setDesvaneciendo(true);
    setTimeout(() => {
      alFinalizarVideo();
    }, 600); 
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