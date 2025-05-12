import React from 'react';
import '../../css/SeaFreightService.css'; // Changed to a separate CSS file
import { FaShip, FaGlobeAmericas, FaBoxOpen, FaShieldAlt, FaTruckLoading, FaAnchor } from 'react-icons/fa';

const SeaFreightService = () => {
  return (
    <div className="sea-freight-container">
      {/* Hero Section */}
      <section className="sea-freight-hero">
        <div className="sea-freight-hero-content">
          <h1 className="sea-freight-hero-heading">Your Trusted Cargo Shipping Company Near You</h1>
          <p className="sea-freight-hero-subtext">
          When cost is a priority or delivery time is flexible, UrbanDot Couriers and Cargo provides reliable Freight & Cargo Solutions through our sea freight services. If you need to transport large or heavy shipments, our extensive network ensures smooth and cost-effective cargo movement. With regular weekly shipments, we offer high-capacity solutions, frequent departures, and competitive pricing. Our services connect major global ports, covering both intercontinental and short-sea routes.
          </p>
          <button className="sea-freight-hero-button" onClick={() => window.location.href = '/contact'}>
            Get a Quote
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="sea-freight-features">
        <h2>Why Choose Our Sea Freight Services?</h2>
        <div className="sea-freight-features-grid">
          <div className="sea-freight-feature-card" data-aos="fade-up">
            <FaShip className="sea-freight-feature-icon" />
            <h3>Regular Weekly Shipments</h3>
            <p>High-capacity solutions with frequent departures and competitive pricing, connecting major global ports.</p>
          </div>
          <div className="sea-freight-feature-card" data-aos="fade-up" data-aos-delay="100">
            <FaGlobeAmericas className="sea-freight-feature-icon" />
            <h3>Global Coverage</h3>
            <p>Services covering both intercontinental and short-sea routes with extensive network connectivity.</p>
          </div>
          <div className="sea-freight-feature-card" data-aos="fade-up" data-aos-delay="200">
            <FaTruckLoading className="sea-freight-feature-icon" />
            <h3>Complete Logistics Support</h3>
            <p>Expert assistance with port procedures, customs regulations, and cargo handling.</p>
          </div>
          <div className="sea-freight-feature-card" data-aos="fade-up" data-aos-delay="300">
            <FaBoxOpen className="sea-freight-feature-icon" />
            <h3>Integrated Transport Solutions</h3>
            <p>Seamless integration of sea freight with air, rail, truck, and barge transport.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="sea-freight-services">
        <h2>Our Sea Freight Services Include</h2>
        <div className="sea-freight-services-list">
          <div className="sea-freight-service-item" data-aos="fade-right">
            <FaAnchor className="sea-freight-service-icon" />
            <div className="sea-freight-service-text">
              <h3>Full Container Loads (FCL)</h3>
              <p>Dedicated container shipping for large cargo volumes</p>
            </div>
          </div>
          <div className="sea-freight-service-item" data-aos="fade-left">
            <FaBoxOpen className="sea-freight-service-icon" />
            <div className="sea-freight-service-text">
              <h3>Less than Container Loads (LCL)</h3>
              <p>Cost-effective solutions for smaller shipments</p>
            </div>
          </div>
          <div className="sea-freight-service-item" data-aos="fade-right">
            <FaShip className="sea-freight-service-icon" />
            <div className="sea-freight-service-text">
              <h3>Scheduled Direct LCL Groupage Services</h3>
              <p>Regular consolidated shipping options</p>
            </div>
          </div>
          <div className="sea-freight-service-item" data-aos="fade-left">
            <FaGlobeAmericas className="sea-freight-service-icon" />
            <div className="sea-freight-service-text">
              <h3>Gulf Countries Distribution</h3>
              <p>Specialized pickup and distribution services</p>
            </div>
          </div>
          <div className="sea-freight-service-item" data-aos="fade-right">
            <FaTruckLoading className="sea-freight-service-icon" />
            <div className="sea-freight-service-text">
              <h3>Specialized Cargo Handling</h3>
              <p>Hazardous goods, personal effects & refrigerated cargo</p>
            </div>
          </div>
          <div className="sea-freight-service-item" data-aos="fade-left">
            <FaShieldAlt className="sea-freight-service-icon" />
            <div className="sea-freight-service-text">
              <h3>Marine Transport Insurance</h3>
              <p>Additional security for your valuable cargo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="sea-freight-cta">
        <div className="sea-freight-cta-content" data-aos="zoom-in">
          <h2>Ready to Ship with UrbanDot?</h2>
          <p>Let us handle your freight with efficiency and care!</p>
          <button className="sea-freight-cta-button" onClick={() => window.location.href = '/contact'}>
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default SeaFreightService; 