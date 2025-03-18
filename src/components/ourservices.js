import React from "react";
import { Link } from "react-router-dom";
import "../css/ourservices.css";
import cargoDelivery from "../assets/cargoloading.avif"; // Update the path if needed
import customerFocus from "../assets/website3.png"; // Update the path if needed
import domesticDelivery from "../assets/website6.png"; // You'll need to add this image
import internationalDelivery from "../assets/website4.png"; // You'll need to add this image
import firstnlast from "../assets/website7.png";
import B2B from "../assets/website5.png";
import ware from "../assets/website8.png";

const OurServices = () => {
  return (
    <div className="our-services">

      {/* Page Header */}
      <section className="services-header" data-aos="fade-down">
        <h1>Logistics Solutions</h1>
        <p>Reliable courier and cargo services for timely deliveries nationwide and worldwide.</p>
      </section>

      {/* Cargo Delivery Section */}
      <section className="service-section" data-aos="fade-right">
        <img 
          src={customerFocus} 
          alt="Cargo Delivery" 
          className="service-image" 
          data-aos="fade-right"
          data-aos-delay="200"
        />
        <div className="service-text" data-aos="fade-left" data-aos-delay="300">
          <h2>Express Courier Services </h2>
          <p>
          Fast and reliable parcel delivery services for businesses and individuals, ensuring same-day or 
          next-day delivery in major cities.
          </p>
          <Link 
            to="/services/Express" 
            className="service-btn"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Domestic Delivery Section */}
      <section className="service-section reverse" data-aos="fade-left">
        <img 
          src={domesticDelivery} 
          alt="Domestic Delivery" 
          className="service-image" 
          data-aos="fade-left"
          data-aos-delay="200"
        />
        <div className="service-text" data-aos="fade-right" data-aos-delay="300">
          <h2>Freight & Cargo Solutions </h2>
          <p>
          Tailored solutions for bulk cargo, heavy shipments, and specialized logistics needs, including air, 
          road, and rail freight. 
          </p>
          <Link 
            to="/services/freight" 
            className="service-btn"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* International Delivery Section */}
      <section className="service-section" data-aos="fade-right">
        <img 
          src={internationalDelivery} 
          alt="International Delivery" 
          className="service-image" 
          data-aos="fade-right"
          data-aos-delay="200"
        />
        <div className="service-text" data-aos="fade-left" data-aos-delay="300">
          <h2>Reverse Logistics & Returns Management </h2>
          <p>
          Seamless return management solutions for e-commerce and businesses, ensuring smooth pickup 
          and processing of returned goods.
          </p>
          <Link 
            to="/services/Reverse" 
            className="service-btn"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Learn More
          </Link>
        </div>
      </section>
      

            {/* Domestic Delivery Section */}
      <section className="service-section reverse" data-aos="fade-left">
        <img 
          src={firstnlast} 
          alt="Domestic Delivery" 
          className="service-image" 
          data-aos="fade-left"
          data-aos-delay="200"
        />
        <div className="service-text" data-aos="fade-right" data-aos-delay="300">
          <h2>First-Mile & Last-Mile Delivery </h2>
          <p>
          From warehouse pickup to doorstep delivery, we ensure efficient handling of shipments across 
          urban and remote locations
          </p>
          <Link 
            to="/services/first-last-mile-delivery" 
            className="service-btn"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Learn More
          </Link>
        </div>
      </section>


            {/* Cargo Delivery Section */}
      <section className="service-section" data-aos="fade-right">
        <img 
          src={B2B} 
          alt="Cargo Delivery" 
          className="service-image" 
          data-aos="fade-right"
          data-aos-delay="200"
        />
        <div className="service-text" data-aos="fade-left" data-aos-delay="300">
          <h2> B2B & B2C Logistics </h2>
          <p>
          Custom logistics solutions designed for businesses of all sizes, enabling smooth supply chain 
          operations for retailers, manufacturers, and e-commerce platforms.
          </p>
          <Link 
            to="/services/b2b-b2c-fulfillment" 
            className="service-btn"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Learn More
          </Link>
        </div>
      </section>


      <section className="service-section reverse" data-aos="fade-left">
        <img 
          src={ware} 
          alt="Domestic Delivery" 
          className="service-image" 
          data-aos="fade-left"
          data-aos-delay="200"
        />
        <div className="service-text" data-aos="fade-right" data-aos-delay="300">
          <h2>Warehousing & Distribution </h2>
          <p>
          State-of-the-art storage facilities with inventory management, order processing, and real-time 
          tracking for efficient distribution.
          </p>
          <Link 
            to="/services/3rdPartyServices" 
            className="service-btn"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Learn More
          </Link>
        </div>
      </section>

            {/* Cargo Delivery Section */}
      <section className="service-section" data-aos="fade-right">
        <img 
          src={cargoDelivery} 
          alt="Cargo Delivery" 
          className="service-image" 
          data-aos="fade-right"
          data-aos-delay="200"
        />
        <div className="service-text" data-aos="fade-left" data-aos-delay="300">
          <h2>  Technology-Driven Tracking & Support </h2>
          <p>
          Advanced AI-powered tracking systems, automated notifications, and 24/7 customer support to ensure complete transparency and convenience.
          </p>
          <Link 
            to="/services/OtherServices" 
            className="service-btn"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Learn More
          </Link>
        </div>
      </section>

      <section className="why-choose-section">
      <div className="why-choose-container">
        <h2 className="why-choose-title">Why Choose Urbandot Couriers & Cargo?</h2>
        <ul className="why-choose-list">
          <li>
            <span className="check-icon">✅</span> Extensive Network: Coverage across India with 18,600+ pin codes.
          </li>
          <li>
            <span className="check-icon">✅</span> Fast & Reliable: Efficient deliveries with real-time tracking.
          </li>
          <li>
            <span className="check-icon">✅</span> Secure Handling: Advanced logistics technology for safe transit.
          </li>
          <li>
            <span className="check-icon">✅</span> Cost-Effective Solutions: Competitive pricing for businesses and individuals.
          </li>
          <li>
            <span className="check-icon">✅</span> End-to-End Logistics: Comprehensive services from pickup to delivery.
          </li>
        </ul>
      </div>
    </section>
    </div>
  );
};

export default OurServices;
