import React, { useState } from 'react';
import '../estilos-css/contactoCuerpoForm.css';

export default function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    caseDetails: '',
    acceptTerms: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error for field being edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Este campo es requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'Este campo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ingrese un correo válido';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Este campo es requerido';
    if (!formData.caseDetails.trim()) newErrors.caseDetails = 'Este campo es requerido';
    if (!formData.acceptTerms) newErrors.acceptTerms = 'Debe aceptar los términos';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      caseDetails: '',
      acceptTerms: false,
    });
    setErrors({});
  };

  return (
    <>
      {}
      <div className="page-container">
        <form className="form-card" onSubmit={handleSubmit} noValidate>
          
          {/* Nombre completo */}
          <div className='form-group-1'>
            <div className='form-group-2'>
              <div className="form-group">
                <label className="form-label" htmlFor="fullName">
                  Nombre completo <span className="asterisk">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="form-input"
                  placeholder="Escriba su Nombre"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <span className="error-message">{errors.fullName}</span>}
              </div>

              {/* Correo Electrónico */}
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Correo Electrónico <span className="asterisk">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="Ejemplo@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              {/* Teléfono Celular */}
              <div className="form-group">
                <label className="form-label" htmlFor="phone">
                  Teléfono Celular <span className="asterisk">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  placeholder="ej: 300 123 4567(Solo Números)"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
            </div>

            {/* Cuéntanos tu Caso */}
            <div className="form-group form-group-2">
              <label className="form-label" htmlFor="caseDetails">
                Cuéntanos tu Caso <span className="asterisk">*</span>
              </label>
              <textarea
                id="caseDetails"
                name="caseDetails"
                className="form-textarea"
                placeholder="Nuestro equipo se encargara de todo su proceso."
                value={formData.caseDetails}
                onChange={handleChange}
              />
              {errors.caseDetails && <span className="error-message">{errors.caseDetails}</span>}
            </div>
          </div>

          {/* Términos y condiciones */}
          <div className="terms-section">
            <span className="terms-title">
              Uso y tratamiento de datos personales <span className="asterisk">*</span>
            </span>
            <label className="checkbox-container">
              <input
                type="checkbox"
                name="acceptTerms"
                className="checkbox-input"
                checked={formData.acceptTerms}
                onChange={handleChange}
              />
              <span className="checkbox-label">
                Acepto la <strong>política de uso y tratamiento de datos personales</strong>
              </span>
            </label>
            {errors.acceptTerms && <span className="error-message">{errors.acceptTerms}</span>}
          </div>

          {/* Botón de Enviar */}
          <button type="submit" className="submit-btn">
            Enviar <span className="arrow-icon">▷</span>
          </button>
        </form>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="close-btn"
              onClick={closeModal}
              aria-label="Cerrar modal"
            >
              ✕
            </button>
            <div className="modal-content">
              <h3 className="modal-title">
                Formulario enviado<br />exitosamente!
              </h3>
              <p className="modal-subtitle">
                Muchas Gracias por Confiar<br />en Nuestro Equipo.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}