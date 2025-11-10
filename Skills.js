// src/components/Skills.js
import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [isVisible, ref] = useScrollAnimation();

  const skillsData = {
    frontend: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'TypeScript', level: 75 },
      { name: 'Vue.js', level: 70 }
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'Express', level: 85 }
    ],
    tools: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 65 },
      { name: 'Figma', level: 80 },
      { name: 'AWS', level: 60 },
      { name: 'Firebase', level: 85 }
    ]
  };

  return (
    <section id="habilidades" className="section">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <div ref={ref} className={`skills-content ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="skills-categories">
            {Object.keys(skillsData).map((category) => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="skills-list">
            {skillsData[activeCategory].map((skill, index) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;