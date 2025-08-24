import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <section className="who-we-are-section" id="quienes-somos">
      <div className="who-we-are-container">
        <div className="who-we-are-header">
          <h2 className="who-we-are-title">Quiénes Somos</h2>
        </div>

        <div className="who-we-are-content">
          <div className="who-we-are-text">
            <p className="who-we-are-highlight">
              Somos una empresa regiomontana con más de{" "}
              <strong>15 años de experiencia</strong> en la maniobra de
              maquinaria industrial.
            </p>

            <div className="who-we-are-expertise">
              <h3 className="who-we-are-subtitle">Nuestra Experiencia</h3>
              <ul className="who-we-are-list">
                <li className="who-we-are-list-item">
                  <span className="material-symbols-outlined who-we-are-icon">
                    precision_manufacturing
                  </span>
                  <span className="who-we-are-list-text">
                    Centros de maquinados: CNC, tornos convencionales, fresas,
                    madriladoras, rectificadoras, dobladoras, etc.
                  </span>
                </li>
                <li className="who-we-are-list-item">
                  <span className="material-symbols-outlined who-we-are-icon">
                    print
                  </span>
                  <span className="who-we-are-list-text">
                    Impresión: Maquinaria de impresión (offset, flexo,
                    serigrafía), troqueladoras, guillotinas, encuadernadoras,
                    etc.
                  </span>
                </li>
              </ul>
            </div>

            <div className="who-we-are-advantages">
              <h3 className="who-we-are-subtitle">Nuestras Ventajas</h3>
              <div className="who-we-are-advantages-grid">
                <div className="who-we-are-advantage-card">
                  <span className="material-symbols-outlined who-we-are-card-icon">
                    engineering
                  </span>
                  <h4 className="who-we-are-card-title">Personal Calificado</h4>
                  <p className="who-we-are-card-text">
                    Contamos con personal capacitado y certificado con DC3 en el
                    manejo de la herramienta y cuidado de equipos.
                  </p>
                </div>
                <div className="who-we-are-advantage-card">
                  <span className="material-symbols-outlined who-we-are-card-icon">
                    shield
                  </span>
                  <h4 className="who-we-are-card-title">
                    Seguridad Garantizada
                  </h4>
                  <p className="who-we-are-card-text">
                    Tenemos todo lo necesario para facilitar la maniobra con
                    seguridad.
                  </p>
                </div>
                <div className="who-we-are-advantage-card">
                  <span className="material-symbols-outlined who-we-are-card-icon">
                    forklift
                  </span>
                  <h4 className="who-we-are-card-title">
                    Equipamiento Completo
                  </h4>
                  <p className="who-we-are-card-text">
                    Montacargas de diferentes capacidades y cuadrillas de 3
                    personas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="who-we-are-location">
            <h3 className="who-we-are-subtitle">Nuestra Ubicación</h3>
            <div className="who-we-are-address-card">
              <div className="who-we-are-map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3595.8278045206!2d-100.20965532460241!3d25.677002277405226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDQwJzM3LjIiTiAxMDDCsDEyJzI1LjUiVw!5e0!3m2!1ses-419!2smx!4v1756004965692!5m2!1ses-419!2smx"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Los Reyes Grúas"
                  className="who-we-are-map-iframe"
                />
              </div>
              <p className="who-we-are-address-text">
                Aarón Sáenz 202B, Col. Nuevo San Sebastián, Guadalupe, N.L.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
