import React from "react";
import "../css/footer.css"; // Import CSS for styling
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

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
            <a href="https://www.instagram.com/urbandot_couriers_cargo/ " target="_blank" rel="noopener noreferrer">
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
          <p> #301, Manbhum Jade Towers, Somajiguda, Hyderabad, Telangana, 500082</p>
        </div>

        {/* Right Section - Newsletter Signup */}
        <div className="footer-section">
          {/* <h3>Service</h3> */}
          <h3>Enter your email address</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email for updates" />
            <button type="submit">Submit your request now</button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Urbandot Private Limited, All Rights Reserved.</p>
        <a
          href="https://www.infinitudeit.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          ⚡InfinitudeIT
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
