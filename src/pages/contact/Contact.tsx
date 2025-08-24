import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_exv0w5r", // Tu Service ID
        "template_fipy0yq", // Tu Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          to_email: "losreyesgruas@hotmail.com",
          time: new Date().toLocaleString("es-MX", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
        "U8tku2KeGcJAGIFXK" // Tu Public Key
      );

      // Toast de éxito
      toast.success("¡Mensaje enviado con éxito! Te contactaremos pronto.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);

      // Toast de error
      toast.error(
        "Error al enviar el mensaje. Por favor, intenta nuevamente.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <section className="contact-section" id="contacto">
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="contact-title">Contáctanos</h2>

            <p className="contact-subtitle">
              Estamos listos para atender tus necesidades de maniobras
              industriales
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-info-card">
                <h3 className="contact-info-title">Información de Contacto</h3>

                <div className="contact-item">
                  <div className="contact-icon">
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                  </div>
                  <div className="contact-text">
                    <h4 className="contact-item-title">Dirección</h4>
                    <p className="contact-item-text">
                      Aarón Sáenz 202B, Col. Nuevo San Sebastián
                      <br />
                      Guadalupe, N.L.
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <span className="material-symbols-outlined">phone</span>
                  </div>
                  <div className="contact-text">
                    <h4 className="contact-item-title">Teléfonos</h4>
                    <p className="contact-item-text">
                      <a href="tel:8117764871" className="contact-link">
                        81 1776 4871
                      </a>
                      <br />
                      <a href="tel:8123638118" className="contact-link">
                        81 2363 8118
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <span className="material-symbols-outlined">email</span>
                  </div>
                  <div className="contact-text">
                    <h4 className="contact-item-title">Correo Electrónico</h4>
                    <p className="contact-item-text">
                      <a
                        href="mailto:losreyesgruas@hotmail.com"
                        className="contact-link"
                      >
                        losreyesgruas@hotmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <span className="material-symbols-outlined">public</span>
                  </div>
                  <div className="contact-text">
                    <h4 className="contact-item-title">Redes Sociales</h4>
                    <div className="contact-social-links">
                      <a
                        href="https://www.facebook.com/losreyesgruas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-social-link"
                      >
                        <img
                          src="/facebook.png"
                          alt="Facebook"
                          className="contact-social-icon"
                        />
                        Facebook
                      </a>
                      <a
                        href="https://www.instagram.com/losreyesgruas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-social-link"
                      >
                        <img
                          src="/instagram.png"
                          alt="Instagram"
                          className="contact-social-icon"
                        />
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3595.8278045206!2d-100.20965532460241!3d25.677002277405226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDQwJzM3LjIiTiAxMDDCsDEyJzI1LjUiVw!5e0!3m2!1ses-419!2smx!4v1756004965692!5m2!1ses-419!2smx"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Los Reyes Grúas"
                  className="contact-map-iframe"
                />
              </div>
            </div>

            <div className="contact-form">
              <h3 className="contact-form-title">Envíanos un mensaje</h3>

              <form className="contact-form-container" onSubmit={handleSubmit}>
                <div className="contact-form-group">
                  <label htmlFor="name" className="contact-form-label">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ingresa tu nombre"
                    required
                    className="contact-form-input"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="email" className="contact-form-label">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ingresa tu email"
                    required
                    className="contact-form-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="phone" className="contact-form-label">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Ingresa tu teléfono"
                    className="contact-form-input"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="service" className="contact-form-label">
                    Servicio de interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="contact-form-select"
                    value={formData.service}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="Servicio de Grúas">Servicio de Grúas</option>
                    <option value="Maniobras Especializadas">
                      Maniobras Especializadas
                    </option>
                    <option value="Apoyo con Montacargas">
                      Apoyo con Montacargas
                    </option>
                    <option value="Otro servicio">Otro servicio</option>
                  </select>
                </div>

                <div className="contact-form-group">
                  <label htmlFor="message" className="contact-form-label">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Describe tu requerimiento"
                    className="contact-form-textarea"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="contact-spinner"></span>
                      Enviando...
                    </>
                  ) : (
                    "Enviar Mensaje"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
