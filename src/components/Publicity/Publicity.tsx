import { useState, useEffect } from "react";
import "./PublicityComponent.css";
import { useNavigate } from "react-router-dom";

const promociones = [
  "Solo ramo industrial y maniobras industriales",
  "Contactanos hoy mismo, para una asistencia personalizada",
  "🚫 No movemos autos convencionales solo ramo industrial",
];

const PublicityComponent = () => {
  const [isBlackBackground, setIsBlackBackground] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setIsBlackBackground((prev) => !prev);
    }, 500); // Cambio de fondo más rápido para dar efecto de parpadeo

    return () => clearInterval(bgInterval);
  }, []);

  const handlePromo = () => {
    navigate("/reservation");
  };

  return (
    <div
      className={`publicity-slider ${isBlackBackground ? "black" : "white"}`}
      onClick={handlePromo}
    >
      <div className="slider">
        <div className="slider-track">
          {[...promociones, ...promociones].map((promo, i) => (
            <p key={i} className="promo-text">
              {promo}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicityComponent;
