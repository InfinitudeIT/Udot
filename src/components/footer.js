import React from "react";
import "../css/footer.css"; // Import CSS for styling
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import startupLogo from '../assets/DPIIT3.png';
import msmeLogo from '../assets/msme3.png';

function Footer() {
  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="footer-container">
        {/* Left Section - Company Info */}
        <section className="footer-section" aria-label="Company Info">
          <h1>URBANDOT</h1>
          <p>Reliable logistics for your parcel delivery needs.</p>
          <nav className="social-icons" aria-label="Social Media Links">
            <a href="https://www.facebook.com/urbandotlogistics/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/_couriers_cargo/ " target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://x.com/urbandotIN" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/urbandot-couriers-and-cargo-350130339/ " target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </nav>
          <div className="partner-logos" aria-label="Certifications and Partners">
            <img src={msmeLogo} alt="MSME Logo" className="logo-icon" />
            <img src={startupLogo} alt="Startup India Logo" className="logo-icon2" />
          </div>
        </section>

        {/* Middle Section - Contact Info */}
        <section className="footer-section" aria-label="Contact Information">
          <h3>Contact</h3>
          <address>
            <p>Customer Support : 1800 570 1989</p>
            <p>Franchise Enquires : 9493979796</p>
            <p>Email: info@urbandot.in</p>
            <p>#301, Manbhum Jade Towers,<br />Somajiguda, Hyderabad, Telangana, 500082</p>
          </address>
        </section>

        {/* Right Section - Newsletter Signup */}
        <section className="footer-section" aria-label="Newsletter Signup">
          <h3>Enter your email address</h3>
          <form className="newsletter-form" autoComplete="off">
            <input
              type="email"
              className="centered-placeholder"
              placeholder="Your email for updates"
              aria-label="Email address for newsletter"
            />
            <button type="submit">Submit your request now</button>
          </form>
        </section>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p className="left">© {new Date().getFullYear()} Urbandot Private Limited, All Rights Reserved.</p>
        <p className="center">
          <a href="https://www.infinitudeit.com" target="_blank" rel="noopener noreferrer">⚡ InfinitudeIT</a>
        </p>
        <nav className="right" aria-label="Footer Navigation">
          <a href="/terms-of-use">Terms of Use</a> | <a href="/privacy-policy">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
