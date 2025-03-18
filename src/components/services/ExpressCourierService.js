import React from 'react';
import '../../css/ExpressCourierService.css';
import { FaClock, FaMapMarkedAlt, FaShieldAlt, FaTruck, FaGlobe, FaBox } from 'react-icons/fa';

const ExpressCourierService = () => {
  return (
    <div className="service-detail-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-heading">Fast & Secure Express Courier Services</h1>
          <p className="hero-subtext">
            Urbandot is a trusted express courier service that helps individuals and businesses 
            send parcels, documents, and packages quickly and safely. Unlike regular postal services, 
            Urbandot provides faster deliveries, better security, and real-time tracking.
          </p>
          <button className="hero-button" onClick={() => window.location.href = '/contact'}>
            Book a Courier
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Features of UrbanDot Express Courier Services</h2>
        <div className="features-grid">
          <div className="feature-card" data-aos="fade-up">
            <FaClock className="feature-icon" />
            <h3>Fast Delivery</h3>
            <p>Quick delivery within hours or a few days, depending on the destination. Perfect for urgent shipments like legal papers, business contracts, and perishable goods.</p>
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
            <FaMapMarkedAlt className="feature-icon" />
            <h3>Real-Time Tracking</h3>
            <p>Monitor your shipments in real-time with our tracking system. Get updates on package location and estimated delivery time.</p>
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
            <FaShieldAlt className="feature-icon" />
            <h3>Safe and Secure Shipping</h3>
            <p>Packages handled with utmost care. Additional security and insurance options available for high-value items.</p>
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
            <FaTruck className="feature-icon" />
            <h3>Door-to-Door Service</h3>
            <p>Convenient doorstep pickup and delivery. Book online and our courier agent will collect and deliver your package directly.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <h2>Why Choose UrbanDot Express Courier Services?</h2>
        <div className="reasons-grid">
          <div className="reason-card" data-aos="fade-right">
            <FaClock className="reason-icon" />
            <h3>For Urgent Shipments</h3>
            <p>Ideal for businesses and individuals needing fast and reliable deliveries.</p>
          </div>
          <div className="reason-card" data-aos="fade-up">
            <FaShieldAlt className="reason-icon" />
            <h3>For Secure Transport</h3>
            <p>Important items like legal documents, passports, and electronics are handled safely.</p>
          </div>
          <div className="reason-card" data-aos="fade-left">
            <FaGlobe className="reason-icon" />
            <h3>For International Deliveries</h3>
            <p>Seamless domestic and international shipping with customs support.</p>
          </div>
        </div>
      </section>

      {/* Booking Process Section */}
      <section className="booking-section">
        <h2>How to Book a Courier Online with Urbandot?</h2>
        <div className="booking-steps">
          <div className="step" data-aos="fade-up">
            <div className="step-number">1</div>
            <p>Visit the Urbandot website or mobile app</p>
          </div>
          <div className="step" data-aos="fade-up" data-aos-delay="100">
            <div className="step-number">2</div>
            <p>Enter pickup and delivery details</p>
          </div>
          <div className="step" data-aos="fade-up" data-aos-delay="200">
            <div className="step-number">3</div>
            <p>Select the service type (same-day, next-day, standard, etc.)</p>
          </div>
          <div className="step" data-aos="fade-up" data-aos-delay="300">
            <div className="step-number">4</div>
            <p>Make payment securely online</p>
          </div>
          <div className="step" data-aos="fade-up" data-aos-delay="400">
            <div className="step-number">5</div>
            <p>Schedule a pickup from your home or office</p>
          </div>
        </div>
        <div className="booking-note" data-aos="fade-up" data-aos-delay="500">
          <FaBox className="note-icon" />
          <p>Once booked, you will receive a tracking number to monitor your shipment until it reaches its destination.</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content" data-aos="zoom-in">
          <h2>Ready to Ship with Urbandot?</h2>
          <p>Experience fast, safe, and convenient shipping across India and beyond.</p>
          <button className="cta-button-Express" onClick={() => window.location.href = '/contact'}>
            Book a Courier Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ExpressCourierService; 