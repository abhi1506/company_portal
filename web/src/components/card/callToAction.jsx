import React, { useEffect, useState } from 'react';
import './callToAction.css';
import QuotationForm from '../form/quotationForm';

const CallToAction = () => {
  const [consultActive, setConsultActive] = useState(false);

  const handleConsult = () => {
    setConsultActive(true);
  };

  useEffect(() => {
    if (consultActive) {
      document.getElementById('quotation-form').scrollIntoView({ behavior: 'smooth' });
    }
  }, [consultActive]);
  return (
    <>
      {/* Consultation Box */}
      <section className="consultation_b-section">
        <div className="consultation-box">
          <h3>Get Free Consultation Now!</h3>
          <p>Let's create a powerful website that grows with your business.</p>
          <button
            className="consult-btn"
            onClick={handleConsult}
            aria-expanded={consultActive}
            aria-controls="quotation-form"
          >
            Consult Now →
          </button>
        </div>
      </section>

      {/* Quotation Form Section */}
      {consultActive && (
        <section id="quotation-form" className="quotation-form">
          <div className="form-container">
            <QuotationForm />
          </div>
        </section>
      )}
    </>
  );
};

export default CallToAction;
