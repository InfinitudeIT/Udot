import React from "react";
import { FaShippingFast } from "react-icons/fa";
import "../css/FloatingWhatsApp.css";

const TRACK_URL = "https://navis.elastic.run/trackOrder";

const FloatingTrackButton = () => {
  const handleClick = () => {
    window.open(TRACK_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      className="floating-whatsapp floating-track" /* reuse same styles with red override */
      aria-label="Track Shipment"
      onClick={handleClick}
    >
      <FaShippingFast className="floating-whatsapp-icon" />
      <span className="floating-whatsapp-text">Track shipment</span>
    </button>
  );
};

export default FloatingTrackButton;


