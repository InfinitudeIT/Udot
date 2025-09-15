import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../css/FloatingWhatsApp.css";

const PHONE_NUMBER = "9493979796"; // Without country code, default to India (+91)
const COUNTRY_CODE = "91";

function buildWhatsAppLink() {
  const message = encodeURIComponent("Hello! I'd like to know more about your courier services.");
  const fullNumber = `${COUNTRY_CODE}${PHONE_NUMBER}`;
  return `https://wa.me/${fullNumber}?text=${message}`;
}

const FloatingWhatsApp = () => {
  const handleClick = () => {
    window.open(buildWhatsAppLink(), "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
      onClick={handleClick}
    >
      <FaWhatsapp className="floating-whatsapp-icon" />
      <span className="floating-whatsapp-text">Chat with us</span>
    </button>
  );
};

export default FloatingWhatsApp;


