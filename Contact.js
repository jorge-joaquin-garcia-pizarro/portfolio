// src/components/Contact.js
import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
// import { db } from '../firebase/config';
// import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const [isVisible, ref] = useScrollAnimation();
  const [submitStatus, setSubmitStatus] = useState(null);

  const validate = (values) => {
    const errors = {};
    
    if (!values.name.trim()) {
      errors.name = 'El nombre es requerido';
    }
    
    if (!values.email.trim()) {
      errors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email no válido';
    }
    
    if (!values.message.trim()) {
      errors.message = 'El mensaje es requerido';
    } else if (values.message.length < 10) {
      errors.message = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    return errors;
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm({
    name: '',
    email: '',
    message: ''
  }, validate);

  const submitForm = async (formData) => {
    try {
      // Simulación de envío a Firebase (descomentar cuando configures Firebase)
      /*
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: new Date(),
        read: false
      });
      */
      
      // Simulación de éxito
      setTimeout(() => {
        setSubmitStatus('success');
        // Limpiar formulario después del éxito
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }, 1000);
      
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <section id="contacto" className="section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        
        <div ref={ref} className={`contact-content ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="contact-info">
            <h3>¡Hablemos!</h3>
            <p>
              ¿Tienes un proyecto en mente? Me encantaría escucharte. 
              Estoy siempre abierto a discutir nuevas oportunidades y colaboraciones.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>tu.email@ejemplo.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>Teléfono</h4>
                  <p>+34 123 456 789</p>
                </div>
              </div>
              
              <div className="contact-method">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Ubicación</h4>
                  <p>Madrid, España</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit(submitForm)}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                placeholder="Tu nombre completo"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="tu.email@ejemplo.com"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                rows="5"
                placeholder="Cuéntame sobre tu proyecto..."
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                ✅ ¡Mensaje enviado correctamente! Te contactaré pronto.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="error-message">
                ❌ Error al enviar el mensaje. Por favor, inténtalo de nuevo.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;