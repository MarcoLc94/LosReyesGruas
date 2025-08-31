import "./Services.css";

const Services = () => {
  const phoneNumber = "+528117764871";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <section className="services-section" id="servicios">
      <div className="container">
        <div className="section-header">
          <h2>Nuestros Servicios</h2>
          <div className="divider">
            <span className="line"></span>
            <span className="dot"></span>
            <span className="line"></span>
          </div>
          <p className="section-subtitle">
            Soluciones especializadas en maniobras industriales con personal
            capacitado y certificado
          </p>
        </div>

        <div className="services-grid">
          {/* Servicio 1 - Grúas */}
          <div className="service-card">
            <div className="service-icon">
              <span>🏗️</span>
            </div>
            <h3>Servicio de Grúas</h3>
            <p>
              Transporte seguro de maquinaria industrial y equipo pesado con:
            </p>
            <ul className="service-features">
              <li>Equipo especializado</li>
              <li>Capacidad para cargas pesadas</li>
              <li>Planificación logística</li>
              <li>Seguridad garantizada</li>
            </ul>
            <div className="service-highlight">
              <p>
                Ideal para: Movimiento de centros de maquinado, prensas y equipo
                industrial pesado
              </p>
            </div>
          </div>

          {/* Servicio 2 - Maniobras */}
          <div className="service-card featured">
            <div className="service-icon">
              <span>👷</span>
            </div>
            <h3>Maniobras Especializadas</h3>
            <div className="service-tabs">
              <div className="tab active">Externas</div>
              <div className="tab">Internas</div>
            </div>
            <p>Servicio completo de maniobras:</p>
            <ul className="service-features">
              <li>Personal certificado con DC3</li>
              <li>Descenso seguro de artículos industriales pesados</li>
              <li>Maniobras dentro o fuera de su empresa</li>
              <li>Procedimientos con altos estándares de seguridad</li>
            </ul>
            <div className="service-highlight">
              <p>Experiencia en bajada e instalación de maquinaria compleja</p>
            </div>
          </div>

          {/* Servicio 3 - Montacargas */}
          <div className="service-card">
            <div className="service-icon">
              <span>🚜</span>
            </div>
            <h3>Apoyo con Montacargas</h3>
            <p>Soluciones de manejo de materiales con:</p>
            <ul className="service-features">
              <li>Diferentes capacidades disponibles</li>
              <li>Operadores certificados</li>
              <li>Cuadrillas completas</li>
              <li>Equipos mantenidos óptimamente</li>
            </ul>
            <div className="service-highlight">
              <p>Contamos con montacargas para diversas necesidades de carga</p>
            </div>
          </div>
        </div>

        <div className="service-cta">
          <p className="cta-text">
            ¿Necesitas un servicio personalizado? Contáctanos para una asesoría
            especializada.
          </p>
          <button className="cta-button" onClick={openWhatsApp}>
            Cotizar Servicio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
