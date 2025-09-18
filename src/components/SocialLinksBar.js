import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "../css/SocialLinksBar.css";

const SocialLinksBar = ({ vertical = false }) => {
  return (
    <div className={`social-links-bar ${vertical ? "vertical" : "horizontal"}`}>
      <a href="https://www.facebook.com/urbandotlogistics/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com/urbandot_couriers_cargo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram />
      </a>
      <a href="https://x.com/urbandotIN" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <FaTwitter />
      </a>
      <a href="https://www.linkedin.com/in/urbandot-couriers-and-cargo-350130339/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default SocialLinksBar;


