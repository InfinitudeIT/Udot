import React from 'react';
import '../../css/ServiceDetail.css';

const ThirdPartyServices = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">Your Trusted <br /> Delivery Partner</h1>
        <p className="hero-subtext">
          At Urbandot, we ensure timely and safe delivery of parcels, catering 
          to individuals and businesses with a commitment to excellence and 
          customer satisfaction.
        </p>
        <button className="hero-button">Explore</button>
      </div>
      <div className="hero-image-container">
        {/* <img src={user2women} alt="Shipping Cargo" className="hero-image" /> */}
      </div>
    </section>
  );
};

export default ThirdPartyServices; 