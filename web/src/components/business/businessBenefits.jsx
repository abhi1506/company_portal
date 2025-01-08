import React from "react";
import "./businessBenefits.css";

const BusinessBenefits = () => {
  const benefits = [
    {
      title: "Cloud Solutions and Migrations",
      description:
        "Your Journey to the Cloud Made Simple: Leverage our expertise to migrate your business to the cloud with minimal disruption. We specialize in cloud architecture, deployment, and management.",
      icon: "☁️",
    },
    {
      title: "Cybersecurity and Complian",
      description:
        "Secure Your Business, Protect Your Future: Defend your operations against evolving cyber threats. Our comprehensive security services ensure compliance while protecting sensitive data.",
      icon: "🔒",
    },
    {
      title: "IT Consulting and Strateg",
      description:
        "Your Journey to the Cloud Made Simple: Leverage our expertise to migrate your business to the cloud with minimal disruption. We specialize in cloud architecture, deployment, and management.",
      icon: "📋",
    },
  ];

  return (
    <div className="benefits-bussi-container">
      <h1>The Benefits of Our Business Continuity Solutions</h1>

      <div className="benefits-bussi-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-bussi-card">
            <div className="benefit-bussi-icon">{benefit.icon}</div>
            <h3 className="text-white">{benefit.title}</h3>
            <p className="text-white">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Consultation Section */}
      <section className="consultation_business-section">
        <div className="consultation1-box">
          <h3>Get Free Consultation Now!.</h3>
          <p>Let's create a powerful website that grows with your business</p>
          <button className="consult-btn">Consult Now →</button>
        </div>
      </section>
    </div>
  );
};

export default BusinessBenefits;
