// src/components/Experience.js
import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, ref] = useScrollAnimation();

  const experiences = [
    {
      company: "Empresa Tech",
      position: "Desarrollador Full Stack",
      period: "2022 - Presente",
      description: [
        "Desarrollo de aplicaciones web con React y Node.js",
        "Implementación de APIs RESTful y GraphQL",
        "Colaboración en equipo usando metodologías ágiles",
        "Optimización de performance y SEO"
      ]
    },
    {
      company: "Startup Innovadora",
      position: "Desarrollador Frontend",
      period: "2021 - 2022",
      description: [
        "Creación de interfaces de usuario responsivas",
        "Integración con APIs de terceros",
        "Mantenimiento y mejora de código existente",
        "Participación en diseño de UX/UI"
      ]
    },
    {
      company: "Agencia Digital",
      position: "Desarrollador Junior",
      period: "2020 - 2021",
      description: [
        "Desarrollo de sitios web con HTML, CSS, JavaScript",
        "Implementación de diseños responsive",
        "Soporte técnico y mantenimiento",
        "Aprendizaje continuo de nuevas tecnologías"
      ]
    }
  ];

  return (
    <section id="experiencia" className="section">
      <div className="container">
        <h2 className="section-title">Experiencia</h2>
        <div ref={ref} className={`experience-content ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="experience-tabs">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {exp.company}
              </button>
            ))}
          </div>
          
          <div className="experience-details">
            <div className="experience-header">
              <h3>{experiences[activeTab].position}</h3>
              <span className="company">{experiences[activeTab].company}</span>
              <span className="period">{experiences[activeTab].period}</span>
            </div>
            
            <ul className="experience-description">
              {experiences[activeTab].description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;