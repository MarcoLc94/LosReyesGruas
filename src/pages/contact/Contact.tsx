import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contacto">
      <div className="container">
        <div className="section-header">
          <h2>Contáctanos</h2>
          <div className="divider">
            <span className="line"></span>
            <span className="dot"></span>
            <span className="line"></span>
          </div>
          <p className="section-subtitle">
            Estamos listos para atender tus necesidades de maniobras
            industriales
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Información de Contacto</h3>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h4>Dirección</h4>
                  <p>
                    Aarón Sáenz 202B, Col. Nuevo San Sebastián
                    <br />
                    Guadalupe, N.L.
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-text">
                  <h4>Teléfonos</h4>
                  <p>
                    <a href="tel:8117764871">81 1776 4871</a>
                    <br />
                    <a href="tel:8123638118">81 2363 8118</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-text">
                  <h4>Correo Electrónico</h4>
                  <p>
                    <a href="mailto:losreyesgruas@hotmail.com">
                      losreyesgruas@hotmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🌐</div>
                <div className="contact-text">
                  <h4>Redes Sociales</h4>
                  <div className="social-links">
                    <a
                      href="https://www.facebook.com/losreyesgruas"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="social-icon">📘</span> Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/losreyesgruas"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="social-icon">📷</span> Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="map-container">
              {/* Aquí puedes integrar Google Maps */}
              <div className="map-placeholder">
                <span>🗺️</span>
                <p>Mapa de ubicación</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Envíanos un mensaje</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Ingresa tu nombre"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Ingresa tu email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Ingresa tu teléfono"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Servicio de interés</label>
                <select id="service">
                  <option value="">Selecciona un servicio</option>
                  <option value="gruas">Servicio de Grúas</option>
                  <option value="maniobras">Maniobras Especializadas</option>
                  <option value="montacargas">Apoyo con Montacargas</option>
                  <option value="otro">Otro servicio</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Describe tu requerimiento"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
