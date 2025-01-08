import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import cloudServicesImage from "../../assets/resize.jpg";
import './ourCustomersSection.css';
import QuotationForm from '../form/quotationForm';

const OurCustomersSection = () => {
  const [consultActive, setConsultActive] = useState(false);

  const handleConsult = () => {
    setConsultActive(true);
  };



  useEffect(() => {
    if (consultActive) {
      document.getElementById('scroll').scrollIntoView({ behavior: 'smooth' });
    }
  }, [consultActive]);

  return (
    <>
      {/* Main Section */}
      <section className="mnc-customers-section">
        <div className="mnc-customers-content">
          {/* Text Content */}
          <div className="mnc-text-content">
            <h1 className="mnc-title">
              Bringing the Best Solutions to Our Valued Customers
            </h1>
            <p className="mnc-description">
            At the core of our work is a dedication to your success. Our IT services are designed to exceed expectations, empowering your business with innovative solutions that drive remarkable results in today’s competitive technology landscape.
            </p>
            <button className="mnc-button" onClick={handleConsult}>
              Consult Now <FaArrowRight />
            </button>
          </div>
          {/* Image Content */}
          <div className="mnc-image-wrapper">
            <img
              src={cloudServicesImage}
              alt="Cloud Services"
              className="mnc-image"
            />
          </div>
        </div>
      </section>

      {consultActive && (
        <section id="scroll" className="quotation-form-section">
          <div className="form-container">
            <QuotationForm />
          </div>
        </section>
      )}
    </>
  );
};

export default OurCustomersSection;
