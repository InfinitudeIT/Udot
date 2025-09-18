import React, {useState} from "react";
import "../css/Contactus.css"; // Unique CSS file for Contact Page
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import contactUsBg from "../assets/contactus.jpg"; // Import the background image
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

  // Offices data for tabbed section
  const offices = {
    head: {
      title: "Head Office",
      address: "#301, Manbhum Jade Towers, Somajiguda, Hyderabad, Telangana 500082",
      phones: ["1800 570 1989", "9493979796"],
      email: ["info@urbandot.in", "partners@urbandot.in"],
      mapSrc: "https://www.google.com/maps?q=Manbhum%20Jade%20Towers%2C%20Somajiguda%2C%20Hyderabad%20500082&output=embed"
    },
    delhi: {
      title: "Regional Office - Delhi NCR",
      address: "#904, Tower 2, Assotech Business Cresterra, Sector 135, Noida, Uttar Pradesh 201305",
      phones: ["1800 570 1989"],
      email: ["info@urbandot.in"],
      mapSrc: "https://www.google.com/maps?q=Assotech%20Business%20Cresterra%2C%20Sector%20135%2C%20Noida&output=embed"
    },
    bengaluru: {
      title: "Regional Office - Bengaluru",
      address: "#301, Jaganath Arcade, 7-13, 1st Main Rd, SBM Layout, SBM Colony, Anandnagar, Ganganagar, Bengaluru, Karnataka 560024",
      phones: ["1800 570 1989"],
      email: ["info@urbandot.in"],
      mapSrc: "https://www.google.com/maps?q=Jaganath%20Arcade%20SBM%20Layout%20Ganganagar%20Bengaluru%20560024&output=embed"
    },
    vijayawada: {
      title: "Regional Office - Vijayawada",
      address: "#7-6, ABR Building, Opp Santhi Nagar, Rayanapadu, Vijayawada Rural, NTR Dist, Andhra Pradesh 521241",
      phones: ["1800 570 1989"],
      email: ["info@urbandot.in"],
      mapSrc: "https://www.google.com/maps?q=ABR%20Building%20Rayanapadu%20Vijayawada%20521241&output=embed"
    }
  };

  const [activeOfficeKey, setActiveOfficeKey] = useState("head");
  const activeOffice = offices[activeOfficeKey];

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
      const API_BASE_URL = "https://api.urbandot.in";
      const response = await fetch(`${API_BASE_URL}/feedback/`, {
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
    <div className="contact-container">
   
      {/* Offices - Tabbed two-column section */}
      <section className="contactpage-offices" aria-label="Our Offices">
        <div role="tablist" aria-label="Office Locations" className="office-tabs">
          <button
            role="tab"
            aria-selected={activeOfficeKey === "head"}
            className={`office-tab ${activeOfficeKey === "head" ? "active" : ""}`}
            onClick={() => setActiveOfficeKey("head")}
          >
            Head Office
          </button>
          <button
            role="tab"
            aria-selected={activeOfficeKey === "delhi"}
            className={`office-tab ${activeOfficeKey === "delhi" ? "active" : ""}`}
            onClick={() => setActiveOfficeKey("delhi")}
          >
            Delhi NCR
          </button>
          <button
            role="tab"
            aria-selected={activeOfficeKey === "bengaluru"}
            className={`office-tab ${activeOfficeKey === "bengaluru" ? "active" : ""}`}
            onClick={() => setActiveOfficeKey("bengaluru")}
          >
            Bengaluru
          </button>
          <button
            role="tab"
            aria-selected={activeOfficeKey === "vijayawada"}
            className={`office-tab ${activeOfficeKey === "vijayawada" ? "active" : ""}`}
            onClick={() => setActiveOfficeKey("vijayawada")}
          >
            Vijayawada
          </button>
        </div>

        <div className="office-split">
          <div className="office-left">
            <h3 className="office-title">{activeOffice.title}</h3>
            <p className="office-address">{activeOffice.address}</p>
            <div className="office-lines">
              <div className="office-line"><FaPhoneAlt /> {activeOffice.phones.join(" / ")}</div>
              <div className="office-line"><FaEnvelope /> {activeOffice.email.join(" , ")}</div>
            </div>
            <div className="office-actions">
              {/* <button
                type="button"
                className="address-action-btn"
                onClick={() => navigator.clipboard.writeText(`${activeOffice.title} - ${activeOffice.address}`)}
              >
                Copy Address
              </button> */}
            </div>
          </div>
          <div className="office-right">
            <div className="office-map-embed">
              <iframe
                title={`${activeOffice.title} Map`}
                src={activeOffice.mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
  
  {/* Hero Section */}
      <section className="contactpage-hero-section">
        <h1>GET IN TOUCH</h1>
        <p>
          UrbanDot is an innovative logistics solution for the delivery of small cargo.
          We're here to help! Reach out to us for inquiries or support.
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
