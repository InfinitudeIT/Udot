import React from 'react';
import '../../css/FirstLastMileDelivery.css';
import { FaTruck, FaWarehouse, FaShippingFast, FaMapMarkedAlt, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const FirstLastMileDelivery = () => {
  return (
    <div className="first-last-mile-container">
      {/* Hero Section */}
      <section className="first-last-mile-hero">
        <div className="first-last-mile-hero-content">
          <h1>First-Mile and Last-Mile Delivery</h1>
          <p>Efficient Logistics with Urbandot Couriers and Cargo</p>
          <div className="hero-description">
            First-mile and last-mile delivery are critical components of the logistics chain, 
            directly affecting delivery speed, operational efficiency, and customer satisfaction. 
            Urbandot Couriers and Cargo ensures a seamless transportation process from the seller 
            to the customer, optimizing both first-mile and last-mile logistics for businesses.
          </div>
        </div>
      </section>

      {/* First Mile Section */}
      <section className="first-mile-section">
        <div className="section-content">
          <h2>What is First-Mile Delivery?</h2>
          <p>
            First-mile delivery is the initial stage of the shipping process, starting from the 
            moment a package leaves the seller's warehouse and is transported to a distribution center. 
            This stage focuses on ensuring efficient, cost-effective movement of goods to streamline 
            the logistics process.
          </p>
          
          <div className="process-steps">
            <h3>How First-Mile Delivery Works</h3>
            <div className="steps-container">
              <div className="step">
                <FaTruck className="step-icon" />
                <p>A courier service picks up the package from the seller's facility.</p>
              </div>
              <div className="step">
                <FaWarehouse className="step-icon" />
                <p>The order is processed and forwarded to the next distribution point.</p>
              </div>
              <div className="step">
                <FaShippingFast className="step-icon" />
                <p>Accurate package details (weight, size, dimensions) are provided to ensure smooth transportation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Last Mile Section */}
      <section className="last-mile-section">
        <div className="section-content">
          <h2>What is Last-Mile Delivery?</h2>
          <p>
            Last-mile delivery is the final stage of the logistics journey, starting from the last 
            distribution hub and ending when the package is delivered to the customer. This stage is 
            crucial as it directly influences customer satisfaction and requires efficient and reliable 
            logistics solutions.
          </p>

          <div className="process-steps">
            <h3>How Last-Mile Delivery Works</h3>
            <div className="steps-container">
              <div className="step">
                <FaWarehouse className="step-icon" />
                <p>The package arrives at the nearest distribution center.</p>
              </div>
              <div className="step">
                <FaTruck className="step-icon" />
                <p>It is assigned to a delivery vehicle and dispatched to the customer's location.</p>
              </div>
              <div className="step">
                <FaMapMarkedAlt className="step-icon" />
                <p>The delivery team ensures timely and accurate delivery, completing the process.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Considerations Section */}
      <section className="considerations-section">
        <div className="section-content">
          <h2>Key Considerations for Last-Mile Delivery</h2>
          <p>Last-mile delivery challenges vary by geography. For example:</p>
          <div className="considerations-grid">
            <div className="consideration-item">
              <FaMapMarkedAlt className="consideration-icon" />
              <p>In compact urban areas, deliveries are faster and more efficient.</p>
            </div>
            <div className="consideration-item">
              <FaTruck className="consideration-icon" />
              <p>In large countries, a deeper logistics network is needed to cover all locations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="section-content">
          <h2>Why First-Mile Delivery is Essential for Your Business</h2>
          <div className="benefits-grid">
            {[
              'Faster delivery times',
              'Product integrity during transit',
              'Higher customer satisfaction',
              'A better last-mile delivery experience'
            ].map((benefit, index) => (
              <div key={index} className="benefit-item">
                <FaCheckCircle className="benefit-icon" />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="challenges-section">
        <div className="section-content">
          <h2>Challenges in First-Mile and Last-Mile Delivery</h2>
          <div className="challenges-grid">
            {[
              'Finding the right logistics partner',
              'Managing inventory efficiently',
              'Meeting customer expectations',
              'Overcoming traffic and weather delays',
              'Ensuring real-time tracking and updates'
            ].map((challenge, index) => (
              <div key={index} className="challenge-item">
                <FaExclamationTriangle className="challenge-icon" />
                <p>{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="first-last-mile-cta">
        <div className="cta-content-first">
          <h2>How Urbandot Couriers and Cargo Can Help</h2>
          <p>
            Urbandot Couriers and Cargo offers a reliable, technology-driven logistics platform 
            to optimize both first-mile and last-mile delivery. Our fast, efficient, and 
            cost-effective delivery solutions ensure that your business meets customer 
            expectations with ease.
          </p>
          <button onClick={() => window.location.href = '/contact'}>
            Partner with Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default FirstLastMileDelivery; 