import "./Invitation.css";

const Invitation = () => {
  const phoneNumber = "+528117764871";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <section className="invitation-section">
      <div className="invitation-container">
        <div className="invitation-content">
          <div className="invitation-text">
            <h2 className="invitation-title">
              ¿Listo para <span className="highlight">transformar</span> tus
              <span className="highlight"> operaciones industriales</span>?
            </h2>

            <p className="invitation-description">
              No esperes más para contar con el servicio especializado que tu
              empresa merece. Nuestro equipo está listo para brindarte
              soluciones personalizadas en grúas, montacargas y maniobras
              industriales con los más altos estándares de seguridad y calidad.
            </p>

            <div className="invitation-features">
              <div className="feature-item">
                <span className="material-symbols-outlined">schedule</span>
                <p>Respuesta en menos de 24 horas</p>
              </div>
              <div className="feature-item">
                <span className="material-symbols-outlined">engineering</span>
                <p>Asesoría técnica especializada</p>
              </div>
              <div className="feature-item">
                <span className="material-symbols-outlined">paid</span>
                <p>Cotización sin compromiso</p>
              </div>
            </div>
          </div>

          <div className="invitation-cta">
            <div className="cta-card">
              <div className="cta-header">
                <span className="material-symbols-outlined">
                  connect_without_contact
                </span>
                <h3>Comencemos a Trabajar Juntos</h3>
              </div>

              <p className="cta-message">
                Únete a las empresas que ya confían en nuestros servicios
                especializados
              </p>

              <button className="cta-button" onClick={openWhatsApp}>
                <span className="material-symbols-outlined">phone_in_talk</span>
                Contactar Ahora
              </button>

              <div className="cta-benefits">
                <div className="benefit-tag">
                  <span className="material-symbols-outlined">verified</span>
                  Sin compromiso inicial
                </div>
                <div className="benefit-tag">
                  <span className="material-symbols-outlined">shield</span>
                  Garantía de servicio
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="invitation-stats">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Proyectos Completados</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">98%</span>
            <span className="stat-label">Clientes Satisfechos</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Soporte Disponible</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Años de Experiencia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
