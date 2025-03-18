import React, {useState} from "react";
import "../css/Contactus.css"; // Unique CSS file for Contact Page
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone_number: "",
    category: "Services",
    feedback: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/feedback/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Feedback submitted successfully!");
        setFormData({
          name: "",
          lastname: "",
          email: "",
          phone_number: "",
          category: "Services",
          feedback: "",
        });
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Something went wrong. Please try again.");
    }
  };

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
      <form className="contactpage-form" onSubmit={handleSubmit}>
        <div className="contactpage-form-group">
          <input
            type="text"
            name="name"
            placeholder="First Name *"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name *"
            required
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <div className="contactpage-form-group">
          <input
            type="email"
            name="email"
            placeholder="Your E-mail *"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone_number"
            placeholder="Phone Number *"
            required
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>
        <div className="contactpage-form-group">
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="Services">Services</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Partnership">Partnership</option>
            <option value="Support">Support</option>
          </select>
        </div>
        <textarea
          name="feedback"
          placeholder="Message"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="contactpage-submit-btn">
          SUBMIT NOW
        </button>
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
