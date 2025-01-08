import React from "react";
import { FaArrowDown } from "react-icons/fa";
import PropTypes from "prop-types";  
import "./heroSection.css";

const HeroSection = ({ title, subtitle, onScrollDown, heroId, backgroundImage, className }) => {
  return (
    <div
      className={`main-hero-container ${className || ""}`}
      id={heroId}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }
          : {}
      }
    >
      <div className="main-hero-hero">
        <h1 className="main-hero-title">{title}</h1>
        <p className="main-hero-subtitle">{subtitle}</p>
        <div
          className="main-hero-actions-down"
          onClick={onScrollDown}
          role="button" 
          aria-label="Scroll down"
        >
          <FaArrowDown />
        </div>
      </div>
    </div>
  );
};


HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onScrollDown: PropTypes.func.isRequired,
  heroId: PropTypes.string,
  backgroundImage: PropTypes.string,
  className: PropTypes.string,
};

export default HeroSection;

 