import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            <a href="https://github.com/tuusuario" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <span>🐙</span>
            </a>
            <a href="https://linkedin.com/in/tuusuario" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <span>💼</span>
            </a>
            <a href="https://twitter.com/tuusuario" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <span>🐦</span>
            </a>
            <a href="mailto:tuemail@ejemplo.com" className="social-link" aria-label="Email">
              <span>📧</span>
            </a>
          </div>
          
          <p>&copy; {currentYear} Mi Portfolio. Todos los derechos reservados.</p>
          
          <p className="footer-note">
            Hecho con ❤️ usando React y mucho café ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;