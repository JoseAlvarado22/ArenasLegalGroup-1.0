import React from 'react';
import '../estilos-css/footer.css';
import logo from '../assets/LogoArenasLegalGroup4.svg';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
    
        <div className="footer-logo-wrapper">
          <div className="logo-mockup">
            <img src={logo} alt="Arenas Legal Group" className="footer-logo-img" />
          </div>
        </div>

        {/* Lema */}
        <p className="footer-tagline">Tu asesoramiento legal comienza aquí.</p>

        {/* Título Redes Social */}
        <h3 className="social-heading">¡Siga Nuestras Redes!</h3>

        {/* Iconos de Redes Sociales */}
        <div className="social-icons">
          {/* LinkedIn */}
          <a target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/arenaslegalgroup?stkn=MXh6dGcyYWtrMm9t" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
            </svg>
          </a>

          {/* TikTok */}
          <a href="https://www.tiktok.com/@arenas.legal.group?_r=1&_t=ZS-9ADpadHrnPx" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="TikTok">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.36 1.52-1.36 2.51.02 1.2.78 2.29 1.92 2.68 1.14.39 2.45.08 3.28-.73.66-.63.99-1.54.98-2.45V.02z"/>
            </svg>
          </a>
        </div>

        {/* Derechos de Autor */}
        <p className="copyright-text">
          Copyright © 2026 Arenas Legal Group – All Rights Reserved.
        </p>

        {/* Créditos del diseñador */}
        {/* <p className="designer-text">
          Diseñado por <a href="https://midgardweb.co" target="_blank" rel="noopener noreferrer">midgardweb.co</a>
        </p> */}

      </div>
    </footer>
  );
}