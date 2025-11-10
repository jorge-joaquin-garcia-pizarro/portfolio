// src/components/Projects.js
import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const [filter, setFilter] = useState('todos');
  const [isVisible, ref] = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: "E-commerce Moderno",
      description: "Plataforma de e-commerce con carrito de compras, pasarela de pago y panel administrativo.",
      image: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "App de Tareas",
      description: "Aplicación de gestión de tareas con drag & drop, notificaciones y sincronización en tiempo real.",
      image: "✅",
      technologies: ["Vue.js", "Firebase", "CSS3"],
      category: "frontend",
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "API REST",
      description: "API robusta con autenticación JWT, documentación Swagger y tests automatizados.",
      image: "🔗",
      technologies: ["Express", "JWT", "Jest", "PostgreSQL"],
      category: "backend",
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 4,
      title: "Dashboard Analytics",
      description: "Panel de control con gráficos interactivos, métricas en tiempo real y exportación de reportes.",
      image: "📊",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      category: "fullstack",
      demoLink: "#",
      codeLink: "#"
    }
  ];

  const filteredProjects = filter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="proyectos" className="section">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>
        
        <div className="projects-filters">
          {['todos', 'frontend', 'backend', 'fullstack'].map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div ref={ref} className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${isVisible ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <a href={project.demoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                  <a href={project.codeLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;