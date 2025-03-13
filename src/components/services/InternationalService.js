import React from 'react';
import website2 from "../../assets/website2.png";
import '../../css/ServiceDetail.css';

const InternationalService = () => {
    return (
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-heading">Reverse Logistics & Returns Management</h1>
          <p className="hero-subtext">
          Seamless return management solutions for e-commerce and businesses, ensuring smooth pickup 
          and processing of returned goods. 
          </p>
          <button className="hero-button">Explore</button>
        </div>
        <div className="hero-image-container">
          <img src={website2} alt="Shipping Cargo" className="hero-image" />
        </div>
      </section>
    );
};

export default InternationalService; 
