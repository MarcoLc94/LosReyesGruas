import "./Certification.css";

const Certification = () => {
  return (
    <section className="certification-repse-section">
      <div className="certification-repse-container">
        <div className="certification-repse-content">
          <div className="certification-repse-badge">
            <div className="certification-badge-icon">
              <span className="material-symbols-outlined">verified</span>
            </div>
            <div className="certification-badge-text">
              <span className="certification-certified">Certificado</span>
              <span className="certification-standard">REPSE</span>
            </div>
          </div>

          <div className="certification-repse-info">
            <h2 className="certification-repse-title">
              Certificación{" "}
              <span className="certification-highlight">REPSE</span> Avalada
            </h2>
            <p className="certification-repse-description">
              Contamos con el registro REPSE (Registro de Prestadores de
              Servicios Especializados) otorgado por la Secretaría del Trabajo y
              Previsión Social, que avala nuestra capacidad técnica y operativa
              en servicios de grúas y maniobras industriales.
            </p>

            <div className="certification-repse-benefits">
              <div className="certification-benefit-item">
                <span className="material-symbols-outlined certification-benefit-check">
                  check_circle
                </span>
                <span className="certification-benefit-text">
                  Cumplimiento de normativas oficiales
                </span>
              </div>
              <div className="certification-benefit-item">
                <span className="material-symbols-outlined certification-benefit-check">
                  check_circle
                </span>
                <span className="certification-benefit-text">
                  Personal certificado y capacitado
                </span>
              </div>
              <div className="certification-benefit-item">
                <span className="material-symbols-outlined certification-benefit-check">
                  check_circle
                </span>
                <span className="certification-benefit-text">
                  Equipos con mantenimiento certificado
                </span>
              </div>
              <div className="certification-benefit-item">
                <span className="material-symbols-outlined certification-benefit-check">
                  check_circle
                </span>
                <span className="certification-benefit-text">
                  Procedimientos de seguridad avalados
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="certification-repse-partners">
          <h3 className="certification-partners-title">Avalado por:</h3>
          <div className="certification-partners-grid">
            <div className="certification-partner-item">
              <div className="certification-partner-icon">
                <span className="material-symbols-outlined">
                  account_balance
                </span>
              </div>
              <span className="certification-partner-name">
                Secretaría del Trabajo y Previsión Social
              </span>
            </div>
            <div className="certification-partner-item">
              <div className="certification-partner-icon">
                <span className="material-symbols-outlined">gavel</span>
              </div>
              <span className="certification-partner-name">
                Normativa Oficial Mexicana
              </span>
            </div>
            <div className="certification-partner-item">
              <div className="certification-partner-icon">
                <span className="material-symbols-outlined">engineering</span>
              </div>
              <span className="certification-partner-name">
                Profesionales Certificados
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
