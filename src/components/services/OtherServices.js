import React from "react";
import "../../css/OtherServices.css"; // ✅ Import Animation Styles

const otherServices = [
  {
    title: "DMT (Money Transfer)",
    description: "Fast and secure domestic money transfer services.",
    icon: "💰",
  },
  {
    title: "AEPS (Money Withdrawal)",
    description: "Withdraw money using Aadhaar-based payment systems.",
    icon: "🏧",
  },
  {
    title: "Pan Card Services",
    description: "Quick and easy PAN card application and assistance.",
    icon: "📜",
  },
  {
    title: "Bus/Flight/Train Ticketing",
    description: "Seamless travel booking for buses, flights, and trains.",
    icon: "🎟️",
  },
  {
    title: "CMS (Cash Management System)",
    description: "Optimized cash handling solutions for businesses.",
    icon: "🏦",
  },
];

const OtherServices = () => {
  return (
    <div className="other-services-container">
      <h1 className="other-services-title">✨ Our Additional Services</h1>
      <div className="other-services-grid">
        {otherServices.map((service, index) => (
          <div className="other-service-card" key={index}>
            <span className="other-service-icon">{service.icon}</span>
            <h2 className="other-service-title">{service.title}</h2>
            <p className="other-service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherServices;
