import { useRef } from "react";
import "./Home.css";
import Benefits from "../../components/benefits/Benefits";
import Welcome from "../welcome/Welcome";
import { useNavigate } from "react-router-dom";
import Certification from "../certification/Certification";
import Invitation from "../invitation/Invitation";

const Home = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const phoneNumber = "+528117764871";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const redirectToServices = () => {
    navigate("/servicios");
  };

  return (
    <>
      <Welcome></Welcome>
      <section className="home-section" ref={sectionRef}>
        <div className="background-overlay"></div>

        <div className="home-container">
          <div className="home-content">
            <p className="home-description">
              SOMOS UNA EMPRESA REGIOMONTANA CON MÁS DE 15 AÑOS DE EXPERIENCIA
              EN LA MANIOBRA DE MAQUINARIA INDUSTRIAL
            </p>

            <div className="home-buttons">
              <button className="primary-button" onClick={openWhatsApp}>
                Contactar ahora
              </button>

              <button className="secondary-button" onClick={redirectToServices}>
                Nuestros servicios
              </button>
            </div>
          </div>

          <div className="home-image">
            <div className="montacarga-image"></div>
          </div>
        </div>
      </section>

      <section>
        <Benefits />
      </section>

      <section>
        <Certification></Certification>
      </section>

      <section>
        <Invitation></Invitation>
      </section>
    </>
  );
};

export default Home;
