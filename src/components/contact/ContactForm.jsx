import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'nombre':
        if (!value.trim()) {
          newErrors.nombre = 'El nombre es requerido';
        } else if (value.trim().length < 3) {
          newErrors.nombre = 'El nombre debe tener al menos 3 caracteres';
        } else {
          delete newErrors.nombre;
        }
        break;
      
      case 'email':
        if (!value.trim()) {
          newErrors.email = 'El email es requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = 'El formato del email no es válido';
        } else {
          delete newErrors.email;
        }
        break;
      
      case 'asunto':
        if (!value.trim()) {
          newErrors.asunto = 'El asunto es requerido';
        } else {
          delete newErrors.asunto;
        }
        break;
      
      case 'mensaje':
        if (!value.trim()) {
          newErrors.mensaje = 'El mensaje es requerido';
        } else if (value.trim().length < 10) {
          newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
        } else {
          delete newErrors.mensaje;
        }
        break;
      
      default:
        break;
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validación en tiempo real solo para campos que ya han sido tocados
    if (touched[name]) {
      setErrors(validateField(name, value));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(validateField(name, formData[name]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Marcar todos los campos como tocados
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);
    
    // Validar todos los campos
    let newErrors = {};
    Object.keys(formData).forEach(key => {
      newErrors = validateField(key, formData[key]);
    });
    
    setErrors(newErrors);
    
    // Si no hay errores, enviar el formulario
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simular envío a una API
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setSubmitStatus('success');
        setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
        setTouched({});
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const isFormValid = () => {
    return Object.keys(formData).every(key => 
      formData[key].trim() && !errors[key]
    );
  };

  return (
    <div className="contact-form">
      {submitStatus === 'success' && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <i className="fas fa-check-circle me-2"></i>
          ¡Mensaje enviado correctamente! Te contactaremos pronto.
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setSubmitStatus(null)}
          ></button>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          <i className="fas fa-exclamation-triangle me-2"></i>
          Error al enviar el mensaje. Por favor, intenta nuevamente.
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setSubmitStatus(null)}
          ></button>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="nombre" className="form-label fw-semibold">
              Nombre Completo *
            </label>
            <input
              type="text"
              className={`form-control ${errors.nombre && touched.nombre ? 'is-invalid' : ''} ${
                !errors.nombre && touched.nombre && formData.nombre ? 'is-valid' : ''
              }`}
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Tu nombre completo"
            />
            {errors.nombre && touched.nombre && (
              <div className="invalid-feedback">{errors.nombre}</div>
            )}
          </div>

          <div className="col-md-6">
            <label htmlFor="email" className="form-label fw-semibold">
              Email *
            </label>
            <input
              type="email"
              className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''} ${
                !errors.email && touched.email && formData.email ? 'is-valid' : ''
              }`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="tu.email@ejemplo.com"
            />
            {errors.email && touched.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          <div className="col-12">
            <label htmlFor="asunto" className="form-label fw-semibold">
              Asunto *
            </label>
            <input
              type="text"
              className={`form-control ${errors.asunto && touched.asunto ? 'is-invalid' : ''} ${
                !errors.asunto && touched.asunto && formData.asunto ? 'is-valid' : ''
              }`}
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Asunto del mensaje"
            />
            {errors.asunto && touched.asunto && (
              <div className="invalid-feedback">{errors.asunto}</div>
            )}
          </div>

          <div className="col-12">
            <label htmlFor="mensaje" className="form-label fw-semibold">
              Mensaje *
            </label>
            <textarea
              className={`form-control ${errors.mensaje && touched.mensaje ? 'is-invalid' : ''} ${
                !errors.mensaje && touched.mensaje && formData.mensaje ? 'is-valid' : ''
              }`}
              id="mensaje"
              name="mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
            {errors.mensaje && touched.mensaje && (
              <div className="invalid-feedback">{errors.mensaje}</div>
            )}
            <div className="form-text">
              Mínimo 10 caracteres. Actual: {formData.mensaje.length}
            </div>
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={isSubmitting || !isFormValid()}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                  Enviando...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane me-2"></i>
                  Enviar Mensaje
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;