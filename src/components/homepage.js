import React, { useState, useEffect } from "react";
import "../css/homepage.css"; // Import CSS for styling
import videoBg from "../assets/background.mp4"; // Import video
import delivery from "../assets/website15.png"; // Import the image
import cargoImage from "../assets/cargoloading.avif"; // Import new cargo image
import user1boy from "../assets/website7.png";
import user2women from "../assets/website8.png";
import airplane from "../assets/website3.png";
import red from "../assets/website6.png";
// import truck from "../assets/website15.png"
import truck from "../assets/truc.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import startupLogo from '../assets/Startup-India.jpg';
import msmeLogo from '../assets/msme4.png';
import CountUp from "react-countup";
import { FaStore, FaMapMarkedAlt, FaWarehouse, FaUsers } from "react-icons/fa";


function Home() {
  const [showTrackingPopup, setShowTrackingPopup] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });

    // Handle scroll events
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   const statsData = [
  { value: 150, suffix: "+", label: "Total Outlets", icon: <FaStore size={30} color="#ff0000" /> },
  { value: 5000, suffix: "+", label: "Areas Serving", icon: <FaMapMarkedAlt size={30} color="#ff0000" /> },
  { value: 15, suffix: "+", label: "Hubs", icon: <FaWarehouse size={30} color="#ff0000" /> },
  { value: 200, suffix: "+", label: "Team Size", icon: <FaUsers size={30} color="#ff0000" /> }
];

  return (
    <main>
        <section className="hero" data-aos="fade-up" data-aos-duration="1500">
          <div className="video-container">
          <video autoPlay loop muted className="video-bg">
            <source src={videoBg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>

          <div className="hero-content" data-aos="zoom-in" data-aos-delay="300">
            <h1>UrbanDot Services</h1>
            <p>Cargo and Courier Services</p>
            <button className="cta-button" onClick={() => {
                window.location.href = "https://navis.elastic.run/trackOrder";
              }}>Track your Shipment</button>
          </div>
        </section>


        <section className="trusted-partner" data-aos="fade-up" data-aos-duration="1200">
          <h2>Your Trusted Courier and Cargo Partner</h2>
          <div className="content">
            <div className="column" data-aos="fade-right" data-aos-delay="200">
              <h3>Excellence in Delivery Services</h3>
              <p>
                At Urbandot, we specialize in reliable courier and cargo services,
                ensuring your parcels are delivered safely and on time, backed by
                a dedicated team committed to customer satisfaction.
              </p>
            </div>
            <div className="column" data-aos="fade-left" data-aos-delay="400">
              <h3>Nationwide Logistics Solutions</h3>
              <p>
                Our robust network serves individuals and businesses alike,
                providing effective logistics solutions tailored to meet diverse
                delivery needs across the country, ensuring timely and secure
                transportation of your small cargo.
              </p>
            </div>
          </div>
        <div className="image-container" data-aos="zoom-in" data-aos-delay="300">
          <img src={truck} alt="Courier Delivering a Package" />
        </div>
        </section>

      <section className="reliable-delivery" data-aos="fade-up">
        <div className="section-heading" data-aos="fade-down">
          <h2>Reliable Delivery Solutions</h2>
          <p className="subtext">
            Expert logistics for safe and timely delivery of your parcels across the country.
          </p>
        </div>

        <div className="content">
          <div className="left-image" data-aos="fade-right" data-aos-delay="200">
            <img src={cargoImage} alt="Cargo Loading in an Airplane" />
          </div>

          <div className="right-content">
            <div className="info-box" data-aos="fade-left" data-aos-delay="300">
              <h3>Nationwide Coverage</h3>
              <p>
                Our robust network guarantees delivery across the entire country, no matter the size.
              </p>
            </div>
            <div className="info-box" data-aos="fade-left" data-aos-delay="400">
              <h3>Fast Courier Services</h3>
              <p>We ensure your packages arrive safely and on time, every time.</p>
            </div>
            <div className="info-box" data-aos="fade-left" data-aos-delay="500">
              <h3>Cargo Transport Solutions</h3>
              <p>
                Comprehensive logistics for businesses and individuals, tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials" data-aos="zoom-in" data-aos-duration="1000">
        <div className="testimonial-bg"></div>
        <div className="overlay"></div>

        <div className="testimonial-content">
          <div className="review" data-aos="fade-up" data-aos-delay="200">
            <div className="stars">★★★★★</div>
            <p>
              "Urbandot delivered my package on time and in perfect condition. Highly
              recommend their services for reliability!"
            </p>
          </div>

          <div className="review" data-aos="fade-up" data-aos-delay="400">
            <div className="stars">★★★★★</div>
            <p>
              "The team at Urbandot is professional and efficient. My cargo was
              handled with utmost care and speed."
            </p>
          </div>
        </div>
      </section>

    <div class="logos-section">
      <div className="logo">
        <img src={msmeLogo} alt="MSME Logo" />
      </div>
      <div className="logo">
        <img src={startupLogo} alt="Startup India Logo" />
      </div>
    </div>

    <section className="counter-section" data-aos="fade-up">
        <div className="counter-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="counter-box">
              <div className="icon">{stat.icon}</div>
              <h2>
                <CountUp end={stat.value} duration={5} />{stat.suffix || ""}
              </h2>
              <h3>{stat.label}</h3>
            </div>
          ))}
        </div>
      </section>

    

    <section className="gallery" data-aos="fade-up">
          <h2>Gallery</h2>
          <p className="gallery-subtext">
            Explore our commitment to excellence in courier and cargo services.  </p>

        <div className="gallery-grid">
          <img src={user1boy} alt="Cargo Plane" data-aos="zoom-in" data-aos-delay="100"/>
          <img src={user2women} alt="Cargo Plane 2" data-aos="zoom-in" data-aos-delay="200"/>
          <img src={red} alt="Shipping Containers" data-aos="zoom-in" data-aos-delay="300"/>
          <img src={airplane} alt="Stacked Containers" data-aos="zoom-in" data-aos-delay="400"/>
          <img src={delivery} alt="Logistics and Shipping" data-aos="zoom-in" data-aos-delay="500"/>
          <img src={cargoImage} alt="Cargo Transport" data-aos="zoom-in" data-aos-delay="600"/>
        </div>
    </section>
    <div>

    {/* <div class="logos-section">
      <div className="logo">
        <img src={msmeLogo} alt="MSME Logo" />
      </div>
      <div className="logo">
        <img src={startupLogo} alt="Startup India Logo" />
      </div>
    </div> */}
</div>
    </main>
  );
}

export default Home;
