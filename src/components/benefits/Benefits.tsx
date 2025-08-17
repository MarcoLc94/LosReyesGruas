import "./Benefits.css";

const Benefits = () => {
  const benefits = [
    {
      icon: "payments",
      title: "Costos Accesibles",
      description:
        "Ofrecemos tarifas competitivas y planes flexibles adaptados a tu presupuesto sin comprometer la calidad.",
    },
    {
      icon: "support_agent",
      title: "Atención Personalizada",
      description:
        "Soluciones a medida diseñadas específicamente para las necesidades únicas de tu empresa.",
    },
    {
      icon: "school",
      title: "Personal Capacitado",
      description:
        "Equipo de profesionales certificados y en constante formación para brindarte el mejor servicio.",
    },
    {
      icon: "health_and_safety",
      title: "Prevención de Accidentes",
      description:
        "Implementamos protocolos de seguridad avanzados para proteger a tu equipo y operaciones.",
    },
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <h2 className="benefits-title">Ventajas de Elegirnos</h2>
        <p className="benefits-subtitle">
          Nuestros diferenciales que marcan la diferencia en cada servicio
        </p>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon-container">
                <span className="material-symbols-outlined benefit-icon">
                  {benefit.icon}
                </span>
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
