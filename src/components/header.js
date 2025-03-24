import React, { useState, useEffect, useRef } from "react";
import "../css/header.css";
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaVimeo, FaTimes, FaMapMarkerAlt, FaSearch, FaUser ,FaChevronDown, FaShippingFast, FaTruck, FaUndo, FaRoute, FaHandshake, FaSearchLocation,FaBars } from "react-icons/fa";
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
import LocationSearchPopup from "./LocationSearchPopup"; // Ensure correct import path
import LoginPopup from "./loginPopup";
import logo2 from "../assets/logo2.png";
import * as XLSX from 'xlsx';


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
  const [menuOpen, setMenuOpen] = useState(false);

  
  

  
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
          <span><FaPhone /> 1800 570 1989</span>
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
      </div>

      </div>

      {/* Main Navbar */}
      <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-content">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
            <img src={isScrolled ? logo : logo2} alt="UrbanDot Logo" />
            </Link>
          </div>

          {/* Hamburger Toggle */}
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Nav Links */}
          <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <ul>
              <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>

              {/* Dropdown */}
              <li className="dropdown-container" ref={dropdownRef}>
                <span
                  className="dropdown-trigger"
                  onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                >
                  Services
                </span>
                {showServicesDropdown && (
                  <ul className="dropdown-menu show">
                    <li><Link to="/services/Express" onClick={() => setMenuOpen(false)}><FaShippingFast className="menu-icon" /> Express Courier</Link></li>
                    <li><Link to="/services/freight" onClick={() => setMenuOpen(false)}><FaTruck className="menu-icon" /> Freight & Cargo</Link></li>
                    <li><Link to="/services/Reverse" onClick={() => setMenuOpen(false)}><FaUndo className="menu-icon" /> Reverse Logistics</Link></li>
                    <li><Link to="/services/first-last-mile-delivery" onClick={() => setMenuOpen(false)}><FaRoute className="menu-icon" /> First/Last Mile</Link></li>
                    <li><Link to="/services/b2b-b2c-fulfillment" onClick={() => setMenuOpen(false)}><FaHandshake className="menu-icon" /> B2B / B2C</Link></li>
                  </ul>
                )}
              </li>

              <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
            </ul>

            {/* Buttons */}
            <div className="nav-buttons">
              <button className="enquiry-btn" onClick={() => { setShowTrackingPopup(true); setMenuOpen(false); }}>
                Track Shipment
              </button>
              <button className="login-btn" onClick={() => { setShowLoginPopup(true); setMenuOpen(false); }}>
                <FaUser />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Popups */}
      {showLoginPopup && <LoginPopup setShowLoginPopup={setShowLoginPopup} />}
      {showLocationPopup && (
        <LocationSearchPopup
          onClose={() => setShowLocationPopup(false)}
          onStoreSelect={(selectedPincode) => {
            handlePincodeSearch(selectedPincode);
          }}
        />
      )}
      {showTrackingPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={() => setShowTrackingPopup(false)}>×</button>
            <h2>Track Your Shipment</h2>
            <input type="text" placeholder="Enter tracking number" />
            <button className="track-btn">Track Now</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;