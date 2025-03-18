import React from 'react';
import '../../css/ServiceDetail.css';
import website1 from "../../assets/website1.png";

const OtherServices = () => {
    return (
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-heading">B2B & B2C Logistics </h1>
          <p className="hero-subtext">
          Custom logistics solutions designed for businesses of all sizes, enabling smooth supply chain operations for retailers, manufacturers, and e-commerce platforms. 
          </p>
          <button className="hero-button">Explore</button>
        </div>
        <div className="hero-image-container">
          <img src={website1} alt="Shipping Cargo" className="hero-image" />
        </div>
      </section>
    );
};

export default OtherServices; 