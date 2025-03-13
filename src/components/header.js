import React, { useState, useEffect, useRef } from "react";
import "../css/header.css";
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaVimeo, FaTimes, FaMapMarkerAlt, FaSearch, FaUser ,FaChevronDown, FaShippingFast, FaTruck, FaUndo, FaRoute, FaHandshake, FaSearchLocation } from "react-icons/fa";
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
import LocationSearchPopup from "./LocationSearchPopup"; // Ensure correct import path
// import Popup from "./contactus";
import logo2 from "../assets/logo2.png"
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [pincode, setPincode] = useState('');
  const [nearbyStores, setNearbyStores] = useState([]);
  const [showStoreList, setShowStoreList] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [showTrackingPopup, setShowTrackingPopup] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const dropdownRef = useRef(null);

  
  // Sample stores data
  const stores = [
    { id: 1, name: "Store A", pincode: "12345", address: "123 Main St" },
    { id: 2, name: "Store B", pincode: "12346", address: "456 Oak Ave" },
    { id: 3, name: "Store C", pincode: "12347", address: "789 Pine Rd" }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowServicesDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      setHideTopBar(currentScrollY > lastScrollY && currentScrollY > 100);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the store list dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.location-search') && !event.target.closest('.stores-dropdown')) {
        setShowStoreList(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handlePincodeSearch = () => {
    if (!pincode) return;
    const foundStores = stores.filter(store => 
      Math.abs(parseInt(store.pincode) - parseInt(pincode)) <= 2
    );
    setNearbyStores(foundStores);
    setShowStoreList(true);
    setShowLocationPopup(false); // Ensure the popup doesn't interfere
  };

  const handleTrackShipment = () => {
    console.log('Tracking shipment:', trackingNumber);
    setShowTrackingPopup(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', email, password);
  };

  return (
    <>
      {/* TOP NAVBAR */}
      <div className={`top-navbar ${hideTopBar ? "hide" : ""}`}>
        <div className="contact-info">
          <span><FaPhone /> 1800 590 1989</span>
          <span><FaEnvelope /> info@urbandot.in</span>
        </div>
        <div className="location-search">
          <div className="search-container" onClick={() => setShowLocationPopup(true)}>
            <FaMapMarkerAlt className="location-icon" />
            <input type="text" placeholder="Nearby Stores" readOnly />
            <button><FaSearch /></button>
          </div>
        </div>
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
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaVimeo />
        </a>
      </div>

      </div>

      {/* MAIN NAVBAR */}
      <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-content">
          <div className="logo">
          <img 
            src={isScrolled ? logo : logo2} 
            alt="UrbanDot Logo" 
            className="logo-image"
          />
          </div>
          <nav>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>

              {/* Services Dropdown (Behaves Like Other Links) */}
              <li className="dropdown-container" ref={dropdownRef}>
                <Link to="/our-services"
                  className="dropdown-trigger"
                  onClick={(e) => {
                    if (!showServicesDropdown) {
                      e.preventDefault(); // Prevents navigation on first click
                      setShowServicesDropdown(true);
                    }
                  }}
                >
                  Services
                </Link>
                {showServicesDropdown && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/services/cargo">
                        <FaShippingFast className="menu-icon" /> Express Courier Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/domestic">
                        <FaTruck className="menu-icon" /> Freight & Cargo Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/international">
                        <FaUndo className="menu-icon" /> Reverse Logistics & Returns Management
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/3rdPartyServices">
                        <FaRoute className="menu-icon" /> First-Mile & Last-Mile Delivery
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/OtherServices">
                        <FaHandshake className="menu-icon" /> B2B & B2C Logistics
                      </Link>
                    </li>
                    <li>
                      <Link to="/our-services/ecommerce">
                        <FaSearchLocation className="menu-icon" /> Technology-Driven Tracking & Support
                      </Link>
                    </li>
                  </ul>
                )}
              </li>


              <li><Link to="/contact">Contact Us</Link></li>  
            </ul>

          </nav>
          <div className="nav-buttons">
            <button className="enquiry-btn" onClick={() => setShowTrackingPopup(true)}>
              Track Shipment
            </button>
            <button className="login-btn" onClick={() => setShowLoginPopup(true)}>
              <FaUser />
            </button>
          </div>
        </div>
      </header>

      {/* TRACKING POPUP */}
      {showTrackingPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={() => setShowTrackingPopup(false)}>×</button>
            <h2>Track Your Shipment</h2>
            <input type="text" value={trackingNumber} onChange={(e) => setTrackingNumber(e.target.value)} placeholder="Enter tracking number" />
            <button className="track-btn" onClick={handleTrackShipment}>Track Now</button>
          </div>
        </div>
      )}

      {/* LOGIN POPUP */}
      {showLoginPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={() => setShowLoginPopup(false)}><FaTimes /></button>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
              <button 
                  type="submit"
                  className="login-btn" 
                  onClick={handleLogin} 
                  style={{ 
                    backgroundColor: "red", 
                    color: "white", 
                    border: "none", 
                    padding: "12px 20px", 
                    cursor: "pointer", 
                    borderRadius: "5px", 
                    fontSize: "16px", 
                    fontWeight: "bold",
                    width: "100%", // Make it full-width inside the form
                    marginTop: "10px", // Add space above
                    textAlign: "center",
                    display: "block" // Ensure it doesn't shrink
                  }}
                >
                  Login
                </button>
            </form>
          </div>
        </div>
      )}

      {/* LOCATION SEARCH POPUP */}
      {showLocationPopup && (
        <LocationSearchPopup
          onClose={() => setShowLocationPopup(false)}
          onStoreSelect={(selectedPincode, selectedStores) => {
            setPincode(selectedPincode);
            setNearbyStores(selectedStores);
            setShowStoreList(false); // Ensure dropdown does not appear twice
          }}
        />
      )}
    </>
  );
}

export default Header;
