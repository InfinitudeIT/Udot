import React from "react";
import "../css/Contactus.css"; // Unique CSS file for Contact Page
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contactpage-container">
     <section >
      <div className="contactpage-info-section-address">
        <div className="contactpage-info-card">
          <FaMapMarkerAlt className="contactpage-icon" />
          <h3>HEAD OFFICE </h3>
          <h5>URBANDOT COURIER AND CARGO PRIVATE LIMITED </h5>
          <h5>CIN NO - U53200TS2024PTC187415 </h5>
          <p>#301, Manbhum Jade Towers, Somajiguda, Hyderabad, Telangana 500082</p>
        </div>
        <div className="contactpage-info-card">
          <FaMapMarkerAlt className="contactpage-icon" />
          <h3>REGIONAL OFFICE BENGALURU </h3>
          {/* <h5>URBANDOT COURIER AND CARGO PRIVATE LIMITED </h5> */}
          {/* <h5>CIN NO - U53200TS2024PTC187415 </h5> */}
          <p>#301, Jaganath arcade ,7-13, 1st Main Rd, SBM Layout, SBM Colony, Anandnagar, Ganganagar, Bengaluru, Karnataka 560024</p>
        </div>
        <div className="contactpage-info-card">
          <FaMapMarkerAlt className="contactpage-icon" />
          <h3> REGIONAL OFFICE VIJAYAWADA </h3>
          {/* <h5>URBANDOT COURIER AND CARGO PRIVATE LIMITED </h5> */}
          {/* <h5>CIN NO - U53200TS2024PTC187415 </h5> */}
          <p>D. No 8-103, Azad Street, Gollapudi, Vijayawada, NTR Dist., Andhra Pradesh 521225</p>
        </div>
      </div> 
      </section>

      <section >
      <div className="contactpage-info-section">
            <div className="contactpage-info-card">
              <FaPhoneAlt className="contactpage-icon" />
              <h3>Call Us</h3>
              <p> Customer Support : 1800 590 1989</p>
              <p> Franchise Enquires : 9493979796</p>
            </div>
            <div className="contactpage-info-card">
              <FaEnvelope className="contactpage-icon" />
              <h3>EMAIL</h3>
              <p>info@urbandot.in</p>
              <p>partners@urbandot.in</p>
            </div>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="contactpage-hero-section">
        <h1>GET IN TOUCH</h1>
        <p>
          Urbandot is an innovative logistics solution for the delivery of small cargo.
          We’re here to help! Reach out to us for inquiries or support.
        </p>
      </section>

      {/* Contact Form */}
      <section className="contactpage-form-section">
        <form className="contactpage-form">
          <div className="contactpage-form-group">
            <input type="text" placeholder="First Name *" required />
            <input type="text" placeholder="Last Name *" required />
          </div>
          <div className="contactpage-form-group">
            <input type="email" placeholder="Your E-mail *" required />
            <select>
              <option>Services</option>
              <option>General Inquiry</option>
              <option>Partnership</option>
              <option>Support</option>
            </select>
          </div>
          <textarea placeholder="Message"></textarea>
          <button type="submit" className="contactpage-submit-btn">SUBMIT NOW</button>
        </form>
      </section>

      {/* Contact Details */}
      {/* <section className="contactpage-info-section">
        <div className="contactpage-info-card">
          <FaMapMarkerAlt className="contactpage-icon" />
          <h3>FIND LOCATION</h3>
          <p>Hyderabad, Telangana, India</p>
        </div>
        <div className="contactpage-info-card">
          <FaPhoneAlt className="contactpage-icon" />
          <h3>PHONE NUMBER</h3>
          <p>1800 590 1989</p>
          <p>8977726784</p>
        </div>
        <div className="contactpage-info-card">
          <FaEnvelope className="contactpage-icon" />
          <h3>EMAIL</h3>
          <p>info@urbandot.in</p>
          <p>partners@urbandot.in</p>
        </div>
      </section> */}
    </div>
  );
};

export default ContactUs;
