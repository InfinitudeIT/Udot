import React from 'react';
import '../../css/ServiceDetail.css';
import website2 from "../../assets/website2.png";

const DomesticService = () => {
    return (
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-heading">Freight & Cargo Solutions </h1>
          <p className="hero-subtext">
          Tailored solutions for bulk cargo, heavy shipments, and specialized logistics needs, including air, 
          road, and rail freight.
          </p>
          <button className="hero-button">Explore</button>
        </div>
        <div className="hero-image-container">
          <img src={website2} alt="Shipping Cargo" className="hero-image" />
        </div>
      </section>
    );
};

export default DomesticService; 