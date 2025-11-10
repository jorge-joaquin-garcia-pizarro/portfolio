// src/components/About.js
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [isVisible1, ref1] = useScrollAnimation();
  const [isVisible2, ref2] = useScrollAnimation();

  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="about-content">
          <div 
            ref={ref1} 
            className={`about-text ${isVisible1 ? 'slide-in-left' : ''}`}
          >
            <p>
              Soy un desarrollador full stack apasionado por crear soluciones digitales 
              innovadoras. Con más de 2 años de experiencia en el desarrollo web, 
              me especializo en JavaScript, React, Node.js y tecnologías modernas.
            </p>
            <p>
              Mi enfoque combina el diseño creativo con el desarrollo técnico robusto, 
              siempre buscando las mejores prácticas y las tecnologías más adecuadas 
              para cada proyecto.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>10+</h3>
                <p>Proyectos Completados</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Clientes Satisfechos</p>
              </div>
              <div className="stat">
                <h3>2+</h3>
                <p>Años de Experiencia</p>
              </div>
            </div>
          </div>
          <div 
            ref={ref2} 
            className={`about-image ${isVisible2 ? 'fade-in-up' : ''}`}
          >
            <div className="image-placeholder">
              <span></span>
              <p>Tu foto aquí</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;