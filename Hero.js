// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, ref] = useScrollAnimation();
  
  const texts = ['Desarrollador Full Stack', 'Diseñador UI/UX', 'Creador de Soluciones'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToProjects = () => {
    document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div ref={ref} className={`hero-content ${isVisible ? 'fade-in-up' : ''}`}>
          <h1 className="hero-title">
            Hola, soy <span className="highlight">Tu Nombre</span>
          </h1>
          <div className="hero-subtitle">
            <span className="typing-text">{texts[textIndex]}</span>
          </div>
          <p className="hero-description">
            Apasionado por crear experiencias digitales excepcionales 
            con código limpio y diseño innovador.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={scrollToProjects}>
              Ver Proyectos
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
            >
              Contactar
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-card">
            <div className="card-content">
              <span>💻</span>
              <h4>+2 años</h4>
              <p>Experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;