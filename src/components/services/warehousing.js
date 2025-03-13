import React from 'react';
import '../../css/ServiceDetail.css';

const warehousing = () => {
    return (
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-heading"> Warehousing & Distribution </h1>
          <p className="hero-subtext">
          State-of-the-art storage facilities with inventory management, order processing, and real-time tracking for efficient distribution.
          </p>
          <button className="hero-button">Explore</button>
        </div>
        <div className="hero-image-container">
          {/* <img src={user2women} alt="Shipping Cargo" className="hero-image" /> */}
        </div>
      </section>
    );
};

export default warehousing; 