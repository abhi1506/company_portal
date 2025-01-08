
import React, { useEffect, useState } from "react";
import "./faqAndConsultation.css";
import QuotationForm from '../form/quotationForm';

const FaqAndConsultation = ({faqs}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null); 
  const [consultActive, setConsultActive] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index); 
  };
    const handleConsult = () =>{
      setConsultActive(true);
    }

useEffect(() => {
    if (consultActive) {
      document.getElementById('scroll').scrollIntoView({ behavior: 'smooth' });
    }
  }, [consultActive]);

  return (
    <div className="faq-consultation">
      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently asked questions</h2>
        <p>Here are some common questions about this service.</p>
        <ul className="faq-list">
          {faqs.map((faq, index) => (
            <li key={index}>
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <span>{faq.question}</span>
                <button>{openFaqIndex === index ? "-" : "+"}</button>
              </div>
              {openFaqIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Consultation Section */}
      <section className="consultation-section">
        <div className="consultation-box">
          <h3>Get Free Consultation Now!.</h3>
          <p>Let's create a powerful website that grows with your business</p>
          <button className="consult-btn" onClick={handleConsult}>Consult Now →</button>
        </div>
      </section>
      <section>
      {
          consultActive &&  (
            <div id="scroll"><QuotationForm /></div> 
          )
        }
      </section>
    </div>
  );
};

export default FaqAndConsultation;
