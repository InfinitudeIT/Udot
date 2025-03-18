import React from 'react';
import '../../css/ServiceDetail.css';
import website1 from "../../assets/website1.png";

const ThirdPartyServices = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">First-Mile & Last-Mile Delivery </h1>
        <p className="hero-subtext">
        From warehouse pickup to doorstep delivery, we ensure efficient handling of shipments across 
        urban and remote locations. 
        </p>
        <button className="hero-button">Explore</button>
      </div>
      <div className="hero-image-container">
        <img src={website1} alt="Shipping Cargo" className="hero-image" />
      </div>
    </section>
  );
};

export default ThirdPartyServices; 