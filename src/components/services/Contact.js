import React, {useState} from "react";
import "../css/Contactus.css"; // Unique CSS file for Contact Page
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import locationpng from "../assets/location.avif";

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
    <div className="contact-page-background">
        <section >

        </section>

        <section >

        </section>
      </div>
      
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
    </div>
  );
};

export default ContactUs;
