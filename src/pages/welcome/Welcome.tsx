import { useState, useEffect } from "react";
import "./Welcome.css";

const backgroundImages = [
  "/wallpaper1.png",
  "/wallpaper2.png",
  "/wallpaper3.png",
];

// Precarga de imágenes
const preloadImages = (urls) => {
  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

const Welcome = () => {
  const [current, setCurrent] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    preloadImages(backgroundImages);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Iniciar transición
      setIsChanging(true);

      // Después de la duración de la transición, cambiar la imagen
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % backgroundImages.length);
        setIsChanging(false);
      }, 1000); // Duración de la transición
    }, 4000); // Tiempo total entre cambios (3s visible + 1s transición)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="welcome-container">
      <div
        className={`background-slideshow ${isChanging ? "fading" : ""}`}
        style={{ backgroundImage: `url(${backgroundImages[current]})` }}
      />
      <div className="overlay" />
      <div className="content">
        <div>
          <img src="/logo.png" alt="logo" className="logo" />
        </div>
        <h1 className="home-title">
          Soluciones en <span className="highlight">grúas</span>,{" "}
          <span className="highlight">montacargas</span> y{" "}
          <span className="highlight">maniobras industriales</span>
        </h1>
        <div className="belt-container">
          <div className="belt-inner">
            {Array.from({ length: 25 }).map((_, index) => (
              <div
                key={index}
                className={`belt-stripe ${
                  index % 2 === 0 ? "yellow" : "black"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
