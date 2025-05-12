import React from "react";
import { FaTimes } from "react-icons/fa";
import "../css/loginpopup.css";

const LoginPopup = ({ setShowLoginPopup }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={() => setShowLoginPopup(false)}>
          <FaTimes />
        </button>

        <h2 className="popup-title">Welcome to UrbanDot</h2>
        <p className="popup-subtitle">Access your account or create a new one</p>

        <div className="popup-button-group">
          <a
            href="https://urbandot.elastic.run/portal/login" // <-- REPLACE with your login link
            className="popup-btn"
          >
            Sign In
          </a>
          <a
            href="https://urbandot.elastic.run/portal/sign_up" // <-- REPLACE with your signup link
            className="popup-btn outline"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
