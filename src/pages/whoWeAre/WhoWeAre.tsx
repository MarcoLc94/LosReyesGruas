import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <section className="who-we-are" id="quienes-somos">
      <div className="container">
        <div className="section-header">
          <h2>Quiénes Somos</h2>
          <div className="divider">
            <span className="line"></span>
            <span className="dot"></span>
            <span className="line"></span>
          </div>
        </div>

        <div className="content-grid">
          <div className="about-text">
            <p className="highlight">
              Somos una empresa regiomontana con más de{" "}
              <strong>15 años de experiencia</strong> en la maniobra de
              maquinaria industrial.
            </p>

            <div className="expertise">
              <h3>Nuestra Experiencia</h3>
              <ul>
                <li>
                  <span className="icon">⚙️</span>
                  <span>
                    Centros de maquinados: CNC, tornos convencionales, fresas,
                    madriladoras, rectificadoras, dobladoras, etc.
                  </span>
                </li>
                <li>
                  <span className="icon">🖨️</span>
                  <span>
                    Impresión: Maquinaria de impresión (offset, flexo,
                    serigrafía), troqueladoras, guillotinas, encuadernadoras,
                    etc.
                  </span>
                </li>
              </ul>
            </div>

            <div className="advantages">
              <h3>Nuestras Ventajas</h3>
              <div className="advantages-grid">
                <div className="advantage-card">
                  <div className="card-icon">👨‍🏭</div>
                  <h4>Personal Calificado</h4>
                  <p>
                    Contamos con personal capacitado y certificado con DC3 en el
                    manejo de la herramienta y cuidado de equipos.
                  </p>
                </div>
                <div className="advantage-card">
                  <div className="card-icon">🛡️</div>
                  <h4>Seguridad Garantizada</h4>
                  <p>
                    Tenemos todo lo necesario para facilitar la maniobra con
                    seguridad.
                  </p>
                </div>
                <div className="advantage-card">
                  <div className="card-icon">🚜</div>
                  <h4>Equipamiento Completo</h4>
                  <p>
                    Montacargas de diferentes capacidades y cuadrillas de 3
                    personas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="location">
            <h3>Nuestra Ubicación</h3>
            <div className="address-card">
              <div className="map-placeholder">
                {/* Aquí iría un componente de mapa o imagen */}
                <span>📍</span>
              </div>
              <p>Aarón Sáenz 202B, Col. Nuevo San Sebastián, Guadalupe, N.L.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
