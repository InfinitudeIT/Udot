<<<<<<< Updated upstream
import React from "react";
import "../css/footer.css"; // Import CSS for styling
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaVimeo, FaTimes, FaMapMarkerAlt, FaSearch, FaUser } from "react-icons/fa";
import TermsOfUse from "../TermsofUse";
import PrivacyPolicy from "../privacyPolicy";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Company Info */}
        <div className="footer-section">
          <h1>URBANDOT</h1>
          <p>Reliable logistics for your parcel delivery needs.</p>
          <div className="social-icons">
          <a href="https://www.facebook.com/urbandotlogistics/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
            </a>
            <a href="https://www.instagram.com/urbandotlogistics/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://x.com/urbandotIN" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/urbandot-courier-350130339/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            {/* <a href="#" target="_blank" rel="noopener noreferrer">
              <FaVimeo />
            </a> */}
           </div>
        </div>

        {/* Middle Section - Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p> Customer Support : 1800 590 1989</p>
          <p> Franchise Enquires : 9493979796</p>
          <p>info@urbandot.in</p>
          <p>Flat #301, 3rd Floor, Mandhum Jade Towers,  
           Nampally, Telangana 500082, India </p>
        </div>

        {/* Right Section - Newsletter Signup */}
        <div className="footer-section">
          {/* <h3>Service</h3> */}
          <p>Enter your email address</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email for updates" />
            <button type="submit">Submit your request now</button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Urbandot Private Limited, All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/terms-of-use">Terms of Use</a>
          <span> | </span>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
=======
import React from "react";
import "../css/footer.css"; // Import CSS for styling
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaVimeo, FaTimes, FaMapMarkerAlt, FaSearch, FaUser } from "react-icons/fa";
import TermsOfUse from "../TermsofUse";
import PrivacyPolicy from "../privacyPolicy";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Company Info */}
        <div className="footer-section">
          <h1>URBANDOT</h1>
          <p>Reliable logistics for your parcel delivery needs.</p>
          <div className="social-icons">
          <a href="https://www.facebook.com/urbandotlogistics/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
            </a>
            <a href="https://www.instagram.com/urbandotlogistics/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://x.com/urbandotIN" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/urbandot-courier-350130339/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            {/* <a href="#" target="_blank" rel="noopener noreferrer">
              <FaVimeo />
            </a> */}
           </div>
        </div>

        {/* Middle Section - Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p> Customer Support : 1800 570 1989</p>
          <p> Franchise Enquires : 9493979796</p>
          <p>info@urbandot.in</p>
          <p>Flat #301, 3rd Floor, Mandhum Jade Towers,  
           Nampally, Telangana 500082, India </p>
        </div>

        {/* Right Section - Newsletter Signup */}
        <div className="footer-section">
          {/* <h3>Service</h3> */}
          <p>Enter your email address</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email for updates" />
            <button type="submit">Submit your request now</button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Urbandot Private Limited, All Rights Reserved.</p>
        <a href="https://www.infinitudeit.com/" target="_blank" rel="noopener noreferrer">
              Powered by InfintudeIT
            </a>
        <div className="footer-links">
          <a href="/terms-of-use">Terms of Use</a>
          <span> | </span>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
>>>>>>> Stashed changes
