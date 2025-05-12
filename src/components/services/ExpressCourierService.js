import React from 'react';
import '../../css/ExpressCourierService.css';
import {
  FaClock,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaTruck,
  FaGlobe,
  FaBox
} from 'react-icons/fa';

const ExpressCourierService = () => {
  return (
    <div className="ecs-wrapper">
      {/* Hero Section */}
      <section className="ecs-hero">
        <div className="ecs-hero-content">
          <h1 className="ecs-title">Fast & Secure Express Courier Services</h1>
          <p className="ecs-subtext">
            Urbandot is a trusted express courier service that helps individuals and businesses 
            send parcels, documents, and packages quickly and safely. Unlike regular postal services, 
            Urbandot provides faster deliveries, better security, and real-time tracking.
          </p>
          <button className="ecs-button" onClick={() => window.location.href = '/contact'}>
            Book a Courier
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="ecs-features">
        <h2 className="ecs-section-title">Features of UrbanDot Express Courier Services</h2>
        <div className="ecs-grid">
          <div className="ecs-card" data-aos="fade-up">
            <FaClock className="ecs-icon" />
            <h3>Fast Delivery</h3>
            <p>Quick delivery within hours or a few days, depending on the destination. Perfect for urgent shipments like legal papers, business contracts, and perishable goods.</p>
          </div>
          <div className="ecs-card" data-aos="fade-up" data-aos-delay="100">
            <FaMapMarkedAlt className="ecs-icon" />
            <h3>Real-Time Tracking</h3>
            <p>Monitor your shipments in real-time with our tracking system. Get updates on package location and estimated delivery time.</p>
          </div>
          <div className="ecs-card" data-aos="fade-up" data-aos-delay="200">
            <FaShieldAlt className="ecs-icon" />
            <h3>Safe and Secure Shipping</h3>
            <p>Packages handled with utmost care. Additional security and insurance options available for high-value items.</p>
          </div>
          <div className="ecs-card" data-aos="fade-up" data-aos-delay="300">
            <FaTruck className="ecs-icon" />
            <h3>Door-to-Door Service</h3>
            <p>Convenient doorstep pickup and delivery. Book online and our courier agent will collect and deliver your package directly.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="ecs-why-choose">
        <h2 className="ecs-section-title">Why Choose UrbanDot Express Courier Services?</h2>
        <div className="ecs-reasons">
          <div className="ecs-reason" data-aos="fade-right">
            <FaClock className="ecs-icon" />
            <h3>For Urgent Shipments</h3>
            <p>Ideal for businesses and individuals needing fast and reliable deliveries.</p>
          </div>
          <div className="ecs-reason" data-aos="fade-up">
            <FaShieldAlt className="ecs-icon" />
            <h3>For Secure Transport</h3>
            <p>Important items like legal documents, passports, and electronics are handled safely.</p>
          </div>
          <div className="ecs-reason" data-aos="fade-left">
            <FaGlobe className="ecs-icon" />
            <h3>For International Deliveries</h3>
            <p>Seamless domestic and international shipping with customs support.</p>
          </div>
        </div>
      </section>

      {/* Booking Process Section */}
      <section className="ecs-booking">
        <h2 className="ecs-section-title">How to Book a Courier Online with Urbandot?</h2>
        <div className="ecs-steps">
          {["Visit the Urbandot website or mobile app",
            "Enter pickup and delivery details",
            "Select the service type (same-day, next-day, standard, etc.)",
            "Make payment securely online",
            "Schedule a pickup from your home or office"].map((step, index) => (
            <div className="ecs-step" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="ecs-step-number">{index + 1}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
        <div className="ecs-note" data-aos="fade-up" data-aos-delay="500">
          <FaBox className="ecs-note-icon" />
          <p>Once booked, you will receive a tracking number to monitor your shipment until it reaches its destination.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ecs-cta">
        <div className="ecs-cta-content" data-aos="zoom-in">
          <h2>Ready to Ship with Urbandot?</h2>
          <p>Experience fast, safe, and convenient shipping across India and beyond.</p>
          <button className="ecs-button" onClick={() => window.location.href = '/contact'}>
            Book a Courier Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ExpressCourierService;
