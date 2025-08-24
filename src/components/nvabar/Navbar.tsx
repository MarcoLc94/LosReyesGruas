import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div
            className="navbar-mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`hamburger ${isOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className={`navbar-links ${isOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link
                  to="/"
                  className={`nav-link ${
                    location.pathname === "/home" ? "active" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/whoWeAre"
                  className={`nav-link ${
                    location.pathname === "/whoWeAre" ? "activeBig" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Quienes somos
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`nav-link ${
                    location.pathname === "/services" ? "active" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`nav-link ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-dark-mode">
          <span className="material-symbols-outlined" onClick={toggleTheme}>
            {theme === "dark" ? "dark_mode" : "light_mode"}
          </span>
        </div>
      </nav>
      <div className="navbar-logo-container">
        <img src="/logo.png" alt="" className="navbar-logo" />
      </div>
    </>
  );
};

export default Navbar;
