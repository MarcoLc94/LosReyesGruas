import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    window.location.href = "mailto:contacto@losreyesgruas.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+525512345678";
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          {/* Sección de Información de la Empresa */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo.png" alt="Los Reyes Grúas" className="logo-img" />
              <h3>Los Reyes Grúas</h3>
            </div>
            <p className="footer-description">
              Líderes en soluciones de grúas, montacargas y maniobras
              industriales con los más altos estándares de seguridad y calidad.
            </p>
            <div className="social-links-footer">
              <a
                href="https://www.facebook.com/profile.php?id=61555724414409"
                className="social-link"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/facebook.png"
                  alt="Facebook"
                  className="social-icon"
                />
              </a>
              <a
                href="https://wa.me/8117764871"
                className="social-link"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  className="social-icon"
                />
              </a>
              <a
                href="https://instagram.com/losreyesgruas"
                className="social-link"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/instagram.png"
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
            </div>
          </div>

          {/* Sección de Enlaces Rápidos */}
          <div className="footer-section">
            <h4>Servicios</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => scrollToSection("services")}>
                  Grúas Industriales
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")}>
                  Montacargas
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")}>
                  Maniobras Especializadas
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")}>
                  Transporte de Maquinaria
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")}>
                  Servicios de Emergencia
                </button>
              </li>
            </ul>
          </div>

          {/* Sección de Contacto */}
          <div className="footer-section">
            <h4>Contacto</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="material-symbols-outlined">location_on</span>
                <div className="names-inside">
                  <p>San sebastian</p>
                  <p>Guadalupe, Nuevo León, CP 67203</p>
                  <p>México</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="material-symbols-outlined">phone</span>
                <div className="names-inside">
                  <button onClick={handlePhoneClick} className="contact-link">
                    +52 8117764871
                  </button>
                  <button onClick={handlePhoneClick} className="contact-link">
                    +52 8123638118
                  </button>
                </div>
              </div>
              <div className="contact-item">
                <span className="material-symbols-outlined">mail</span>
                <div>
                  <button onClick={handleEmailClick} className="contact-link">
                    losreyesgruas@hotmail.com
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sección de Horario */}
          <div className="footer-section">
            <h4>Horario de Atención</h4>
            <div className="business-hours">
              <div className="hour-item">
                <span>Lunes - Viernes</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="hour-item">
                <span>Sábado</span>
                <span>9:00 AM - 2:00 PM</span>
              </div>
              <div className="hour-item">
                <span>Domingo</span>
                <span>Cerrado</span>
              </div>
              <div className="emergency-hours">
                <span className="material-symbols-outlined">emergency</span>
                <span>Servicio de Emergencia 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Certificaciones */}
      <div className="certification-bar-footer">
        <div className="certification-container-footer">
          <span>Certificaciones:</span>
          <div className="certification-badges-footer">
            <span className="certification-badge-footer">REPSE</span>

            <span className="certification-badge-footer">STPS</span>
            <span className="certification-badge-footer">
              Norma Oficial Mexicana
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="copyright">
            <p>
              &copy; {currentYear} Los Reyes Grúas. Todos los derechos
              reservados.
            </p>
          </div>
          <div className="legal-links">
            <button onClick={() => scrollToSection("privacy")}>
              Política de Privacidad
            </button>
            <span className="separator">|</span>
            <button onClick={() => scrollToSection("terms")}>
              Términos de Servicio
            </button>
            <span className="separator">|</span>
            <button onClick={() => scrollToSection("cookies")}>
              Política de Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
