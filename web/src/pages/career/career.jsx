
import React, { useState } from "react";
import CareerHero from "./careerHero";
import CareerBenefits from "./careerBenefits";
import CareerPositions from "./careerPositions";
import CareerForm from "./careerFormComponent";
import "./career.css";
import JobDescriptions from "./jobDescriptions";
import CareerWithUs from "./careerWithUs"

export default function Career() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showJobDescription, setShowJobDescription] = useState(false); // New state
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handleApply = (position) => {
    setSelectedPosition(position);
    setShowJobDescription(true); 
  };

  const handleApplyFromDescription = () => {
    setShowJobDescription(false);
    setShowApplicationForm(true);
  };

  return (
    <div className="career-container">
      <CareerHero />
      <CareerBenefits />
      {!showJobDescription && <CareerPositions onApply={handleApply} />}

      {showJobDescription && (
        <JobDescriptions
          job={selectedPosition}
          onApply={handleApplyFromDescription}
          onBack={() => setShowJobDescription(false)}
        />
      )}

      {showApplicationForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <CareerForm
              position={selectedPosition}
              onClose={() => setShowApplicationForm(false)}
            />
          </div>
        </div>
      )}

      <div>
        <CareerWithUs/>
      </div>
    </div>
  );
}
