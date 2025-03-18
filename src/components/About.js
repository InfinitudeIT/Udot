<<<<<<< Updated upstream
import "../css/Aboutus.css"; // Import CSS file
import React, { useEffect, useState } from "react";
import logisticsImage from "../assets/delivery.avif"; // About Us Image
import ceoImage from "../assets/user1boy.avif"; // CEO Image
import visionBackground from "../assets/airplane.jpg"; // Vision Background Image

const AboutUs = () => {
  const [showVision, setShowVision] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const visionSection = document.getElementById("vision-section");
      if (visionSection) {
        const top = visionSection.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.85) {
          setShowVision(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* About Us Section */}
      <section id="about-section" className="about-container fade-in-section">
        <div className="about-content">
          {/* Image Section */}
          <div className="about-image">
            <img src={logisticsImage} alt="Logistics Network" />
          </div>

          {/* Text Content */}
          <div className="about-text">
            <h2 className="about-heading">
              About Us
              <span className="underline"></span>
            </h2>
            <p>
              Urbandot Couriers & Cargo is a leading logistics and supply chain solutions provider, 
              offering cutting-edge technology-driven services across 29 states and 6 union territories 
              in India. With a robust network spanning 1,100+ cities and towns and covering 18,600+ 
              pin codes, we ensure seamless and reliable delivery solutions tailored to your business needs.
            </p>
            <p>
              From first-mile pickup to last-mile delivery, we specialize in efficient logistics 
              operations, ensuring speed, security, and accuracy in every shipment. Whether you're a 
              business looking for streamlined supply chain solutions or an individual needing quick and 
              secure parcel delivery, Urbandot Couriers & Cargo has you covered.
            </p>
          </div>
        </div>
      </section>

      {/* CEO's Message Section */}
      <section id="ceo-section" className="ceo-container fade-in-section">
        <div className="ceo-content">
          {/* Image Section */}
          <div className="ceo-image">
            <img src={ceoImage} alt="CEO" />
          </div>

          {/* Text Content */}
          <div className="ceo-text">
            <h2 className="ceo-heading">CEO's Vision</h2>
            <span className="ceo-underline"></span>
            <blockquote>
              <p>
                "I, <span className="highlight">Mr. Raparla Ravindranath Choudary</span>, CEO of
                Urbandot Couriers and Cargo Private Limited, come from a humble middle-class
                background with an unshakable passion for innovation and excellence in logistics."
              </p>
            </blockquote>
            <p>
              My journey began in 2009, working tirelessly across industries, rising from entry-level
              roles to leadership positions. In 2013, I took a bold step into entrepreneurship with an
              IT services company. Though it closed in 2014, it became my greatest lesson and fueled
              my drive to succeed.
            </p>
            <h3 className="ceo-name">– Mr. Raparla Ravindranath Choudary</h3>
          </div>
        </div>
      </section>

      {/* <section id="ceo-section" className="ceo-container fade-in-section">
        <div className="ceo-content"> */}
          {/* Image Section */}
          {/* <div className="ceo-image">
            <img src={visionBackground} alt="CEO" />
          </div> */}

          {/* Text Content */}
          {/* <div className="ceo-text">
            <h2 className="ceo-heading">OUR VISION</h2>
            <span className="ceo-underline"></span>
            <blockquote>
              <p>
                At Urbandot, our vision is to be India’s most trusted and efficient logistics provider, seamlessly connecting people and businesses through technology-driven delivery solutions.
              </p>
            </blockquote>
            <p>
            <ul className="vision-points">
            <li><strong>Expand Nationwide</strong> – Reaching from villages to metro cities, ensuring reliable last-mile connectivity everywhere.</li>
            <li><strong>Innovate Logistics</strong> – Using AI, automation, and smart technology for faster, more efficient deliveries.</li>
            <li><strong>Ensure Reliability & Speed</strong> – Delivering secure, timely, and cost-effective courier and cargo services.</li>
            <li><strong>Empower Small Businesses</strong> – Supporting MSMEs and online sellers by simplifying logistics and expanding market reach.</li>
            <li><strong>Grow Sustainably</strong> – Committing to eco-friendly practices while continuously evolving to meet global standards.</li>
          </ul>
            </p>
          </div>
        </div>
      </section> */}

      <section id="about-section" className="about-container fade-in-section">
        <div className="about-content">
          {/* Image Section */}
          <div className="about-image">
            <img src={logisticsImage} alt="Logistics Network" />
          </div>

          {/* Text Content */}
          <div className="about-text">
            <h2 className="about-heading">
              OUR MISSON
              <span className="underline"></span>
            </h2>
            <p>
            At Urbandot Couriers and Cargo Private Limited, our mission is to revolutionize the logistics industry by providing fast, reliable, and technology-driven courier and cargo services. We are committed to building a seamless delivery network that connects villages to metro cities, ensuring efficient and secure transportation of goods across India. 
            </p>
            <ul className="mission-points">
            <li><strong>Customer-Centric Service</strong> – Delivering exceptional service with reliability, transparency, and efficiency.  </li>
            <li><strong>Technology & Innovation</strong> – Leveraging AI, automation, and real-time tracking to enhance logistics solutions. </li>
            <li><strong>Rural & Urban Connectivity</strong> – Expanding our network to reach every corner of India, from remote villages to bustling cities. </li>
            <li><strong> Affordability & Accessibility</strong> – Offering cost-effective and easily accessible logistics solutions for individuals and businesses. </li>
            <li><strong>Sustainability & Growth</strong> –  Implementing eco-friendly practices and continuously evolving to meet market demands. </li>
          </ul>
          </div>

          {/* Image Section */}
          {/* <div className="about-image">
            <img src={logisticsImage} alt="Logistics Network" />
          </div> */}
        </div>
      </section>

      {/* Our Vision Section */}
      {/* <section id="vision-section" className={`vision-container ${showVision ? "show" : ""}`}>
        <div className="vision-overlay">
          <h2 className="vision-heading">Our Vision<span className="underline"></span></h2>
          <p className="vision-text">
            At Urbandot, our vision is to be India’s most trusted and efficient logistics provider, seamlessly
            connecting people and businesses through technology-driven delivery solutions.
          </p>
          <ul className="vision-points">
            <li><strong>Expand Nationwide</strong> – Reaching from villages to metro cities, ensuring reliable last-mile connectivity everywhere.</li>
            <li><strong>Innovate Logistics</strong> – Using AI, automation, and smart technology for faster, more efficient deliveries.</li>
            <li><strong>Ensure Reliability & Speed</strong> – Delivering secure, timely, and cost-effective courier and cargo services.</li>
            <li><strong>Empower Small Businesses</strong> – Supporting MSMEs and online sellers by simplifying logistics and expanding market reach.</li>
            <li><strong>Grow Sustainably</strong> – Committing to eco-friendly practices while continuously evolving to meet global standards.</li>
          </ul>
          <h1 className="vision-bottom-text">Urbandot – Connecting India, One Delivery at a Time!</h1>
        </div>
      </section>

      <section id="mission-section" className={`vision-container ${showVision ? "show" : ""}`}>
        <div className="mission-overlay">
          <h2 className="mission-heading">Our Mission<span className="underline"></span></h2>
          <p className="mission-text">
          At Urbandot Couriers and Cargo Private Limited, our mission is to revolutionize the logistics industry by providing fast, reliable, and technology-driven courier and cargo services. We are committed to building a seamless delivery network that connects villages to metro cities, ensuring efficient and secure transportation of goods across India. 
          </p>
          <ul className="mission-points">
            <li><strong>Customer-Centric Service</strong> – Delivering exceptional service with reliability, transparency, and efficiency.  </li>
            <li><strong>Technology & Innovation</strong> – Leveraging AI, automation, and real-time tracking to enhance logistics solutions. </li>
            <li><strong>Rural & Urban Connectivity</strong> – Expanding our network to reach every corner of India, from remote villages to bustling cities. </li>
            <li><strong> Affordability & Accessibility</strong> – Offering cost-effective and easily accessible logistics solutions for individuals and businesses. </li>
            <li><strong>Sustainability & Growth</strong> –  Implementing eco-friendly practices and continuously evolving to meet market demands. </li>
          </ul>
          <h1 className="mission-bottom-text">Urbandot – Delivering Beyond Expectations! </h1>
        </div>
      </section> */}

      <section id="ceo-section" className="ceo-container fade-in-section">
        <div className="ceo-content">
          {/* Image Section */}
          <div className="vision-image">
            <img src={visionBackground} alt="CEO" />
          </div>

          {/* Text Content */}
          <div className="vision-container">
            <h2 className="ceo-heading">OUR VISION</h2>
            <span className="ceo-underline"></span>
            <blockquote>
              <p>
                At Urbandot, our vision is to be India’s most trusted and efficient logistics provider, seamlessly connecting people and businesses through technology-driven delivery solutions.
              </p>
            </blockquote>
            <p>
            <ul className="vision-points">
            <li><strong>Expand Nationwide</strong> – Reaching from villages to metro cities, ensuring reliable last-mile connectivity everywhere.</li>
            <li><strong>Innovate Logistics</strong> – Using AI, automation, and smart technology for faster, more efficient deliveries.</li>
            <li><strong>Ensure Reliability & Speed</strong> – Delivering secure, timely, and cost-effective courier and cargo services.</li>
            <li><strong>Empower Small Businesses</strong> – Supporting MSMEs and online sellers by simplifying logistics and expanding market reach.</li>
            <li><strong>Grow Sustainably</strong> – Committing to eco-friendly practices while continuously evolving to meet global standards.</li>
          </ul>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
=======
import "../css/Aboutus.css"; // Import CSS file
import React, { useEffect, useState } from "react";
import logisticsImage from "../assets/website14.jpg";
import About from "../assets/website8.png"; // About Us Image
import ceoImage from "../assets/ceo.jpg"; // CEO Image
import visionBackground from "../assets/website9.png"; // Vision Background Image

const AboutUs = () => {
  const [showVision, setShowVision] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const visionSection = document.getElementById("vision-section");
      if (visionSection) {
        const top = visionSection.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.85) {
          setShowVision(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* About Us Section */}
      <section id="about-section" className="about-container fade-in-section">
        <div className="about-content">
          {/* Image Section */}
          <div className="about-image">
            <img src={About} alt="Logistics Network" />
          </div>

          {/* Text Content */}
          <div className="about-text">
            <h2 className="about-heading">
              About Us
              <span className="underline"></span>
            </h2>
            <p>
              Urbandot Couriers & Cargo is a leading logistics and supply chain solutions provider, 
              offering cutting-edge technology-driven services across 29 states and 6 union territories 
              in India. With a robust network spanning 1,100+ cities and towns and covering 18,600+ 
              pin codes, we ensure seamless and reliable delivery solutions tailored to your business needs.
            </p>
            <p>
              From first-mile pickup to last-mile delivery, we specialize in efficient logistics 
              operations, ensuring speed, security, and accuracy in every shipment. Whether you're a 
              business looking for streamlined supply chain solutions or an individual needing quick and 
              secure parcel delivery, Urbandot Couriers & Cargo has you covered.
            </p>
          </div>
        </div>
      </section>

      {/* CEO's Message Section */}
      <section id="ceo-section" className="ceo-container fade-in-section">
        <div className="ceo-content">
          {/* Image Section */}
          <div className="ceo-image">
            <img src={ceoImage} alt="CEO" />
          </div>

          {/* Text Content */}
          <div className="ceo-text">
            <h2 className="ceo-heading">CEO's Vision</h2>
            <span className="ceo-underline"></span>
            <blockquote>
              <p>
                "I, <span className="highlight">Mr. Raparla Ravindranath Choudary</span>, CEO of
                Urbandot Couriers and Cargo Private Limited, come from a humble middle-class
                background with an unshakable passion for innovation and excellence in logistics."
              </p>
            </blockquote>
            <p>
              My journey began in 2009, working tirelessly across industries, rising from entry-level
              roles to leadership positions. In 2013, I took a bold step into entrepreneurship with an
              IT services company. Though it closed in 2014, it became my greatest lesson and fueled
              my drive to succeed.
            </p>
            <h3 className="ceo-name">– Mr. Raparla Ravindranath Choudary</h3>
          </div>
        </div>
      </section>

      {/* <section id="ceo-section" className="ceo-container fade-in-section">
        <div className="ceo-content"> */}
          {/* Image Section */}
          {/* <div className="ceo-image">
            <img src={visionBackground} alt="CEO" />
          </div> */}

          {/* Text Content */}
          {/* <div className="ceo-text">
            <h2 className="ceo-heading">OUR VISION</h2>
            <span className="ceo-underline"></span>
            <blockquote>
              <p>
                At Urbandot, our vision is to be India’s most trusted and efficient logistics provider, seamlessly connecting people and businesses through technology-driven delivery solutions.
              </p>
            </blockquote>
            <p>
            <ul className="vision-points">
            <li><strong>Expand Nationwide</strong> – Reaching from villages to metro cities, ensuring reliable last-mile connectivity everywhere.</li>
            <li><strong>Innovate Logistics</strong> – Using AI, automation, and smart technology for faster, more efficient deliveries.</li>
            <li><strong>Ensure Reliability & Speed</strong> – Delivering secure, timely, and cost-effective courier and cargo services.</li>
            <li><strong>Empower Small Businesses</strong> – Supporting MSMEs and online sellers by simplifying logistics and expanding market reach.</li>
            <li><strong>Grow Sustainably</strong> – Committing to eco-friendly practices while continuously evolving to meet global standards.</li>
          </ul>
            </p>
          </div>
        </div>
      </section> */}

      <section id="about-section" className="about-container fade-in-section">
        <div className="about-content">
          {/* Image Section */}
          <div className="about-image">
            <img src={logisticsImage} alt="Logistics Network" />
          </div>

          {/* Text Content */}
          <div className="about-text">
            <h2 className="about-heading">
              OUR MISSON
              <span className="underline"></span>
            </h2>
            <p>
            At Urbandot Couriers and Cargo Private Limited, our mission is to revolutionize the logistics industry by providing fast, reliable, and technology-driven courier and cargo services. We are committed to building a seamless delivery network that connects villages to metro cities, ensuring efficient and secure transportation of goods across India. 
            </p>
            <ul className="mission-points">
            <li><strong>Customer-Centric Service</strong> – Delivering exceptional service with reliability, transparency, and efficiency.  </li>
            <li><strong>Technology & Innovation</strong> – Leveraging AI, automation, and real-time tracking to enhance logistics solutions. </li>
            <li><strong>Rural & Urban Connectivity</strong> – Expanding our network to reach every corner of India, from remote villages to bustling cities. </li>
            <li><strong> Affordability & Accessibility</strong> – Offering cost-effective and easily accessible logistics solutions for individuals and businesses. </li>
            <li><strong>Sustainability & Growth</strong> –  Implementing eco-friendly practices and continuously evolving to meet market demands. </li>
          </ul>
          </div>

          {/* Image Section */}
          {/* <div className="about-image">
            <img src={logisticsImage} alt="Logistics Network" />
          </div> */}
        </div>
      </section>

      {/* Our Vision Section */}
      {/* <section id="vision-section" className={`vision-container ${showVision ? "show" : ""}`}>
        <div className="vision-overlay">
          <h2 className="vision-heading">Our Vision<span className="underline"></span></h2>
          <p className="vision-text">
            At Urbandot, our vision is to be India’s most trusted and efficient logistics provider, seamlessly
            connecting people and businesses through technology-driven delivery solutions.
          </p>
          <ul className="vision-points">
            <li><strong>Expand Nationwide</strong> – Reaching from villages to metro cities, ensuring reliable last-mile connectivity everywhere.</li>
            <li><strong>Innovate Logistics</strong> – Using AI, automation, and smart technology for faster, more efficient deliveries.</li>
            <li><strong>Ensure Reliability & Speed</strong> – Delivering secure, timely, and cost-effective courier and cargo services.</li>
            <li><strong>Empower Small Businesses</strong> – Supporting MSMEs and online sellers by simplifying logistics and expanding market reach.</li>
            <li><strong>Grow Sustainably</strong> – Committing to eco-friendly practices while continuously evolving to meet global standards.</li>
          </ul>
          <h1 className="vision-bottom-text">Urbandot – Connecting India, One Delivery at a Time!</h1>
        </div>
      </section>

      <section id="mission-section" className={`vision-container ${showVision ? "show" : ""}`}>
        <div className="mission-overlay">
          <h2 className="mission-heading">Our Mission<span className="underline"></span></h2>
          <p className="mission-text">
          At Urbandot Couriers and Cargo Private Limited, our mission is to revolutionize the logistics industry by providing fast, reliable, and technology-driven courier and cargo services. We are committed to building a seamless delivery network that connects villages to metro cities, ensuring efficient and secure transportation of goods across India. 
          </p>
          <ul className="mission-points">
            <li><strong>Customer-Centric Service</strong> – Delivering exceptional service with reliability, transparency, and efficiency.  </li>
            <li><strong>Technology & Innovation</strong> – Leveraging AI, automation, and real-time tracking to enhance logistics solutions. </li>
            <li><strong>Rural & Urban Connectivity</strong> – Expanding our network to reach every corner of India, from remote villages to bustling cities. </li>
            <li><strong> Affordability & Accessibility</strong> – Offering cost-effective and easily accessible logistics solutions for individuals and businesses. </li>
            <li><strong>Sustainability & Growth</strong> –  Implementing eco-friendly practices and continuously evolving to meet market demands. </li>
          </ul>
          <h1 className="mission-bottom-text">Urbandot – Delivering Beyond Expectations! </h1>
        </div>
      </section> */}

      <section id="ceo-section" className="ceo-container fade-in-section">
        <div className="ceo-content">
          {/* Image Section */}
          <div className="vision-image">
            <img src={visionBackground} alt="CEO" />
          </div>

          {/* Text Content */}
          <div className="vision-container">
            <h2 className="ceo-heading">OUR VISION</h2>
            <span className="ceo-underline"></span>
            <blockquote>
              <p>
                At Urbandot, our vision is to be India’s most trusted and efficient logistics provider, seamlessly connecting people and businesses through technology-driven delivery solutions.
              </p>
            </blockquote>
            <p>
            <ul className="vision-points">
            <li><strong>Expand Nationwide</strong> – Reaching from villages to metro cities, ensuring reliable last-mile connectivity everywhere.</li>
            <li><strong>Innovate Logistics</strong> – Using AI, automation, and smart technology for faster, more efficient deliveries.</li>
            <li><strong>Ensure Reliability & Speed</strong> – Delivering secure, timely, and cost-effective courier and cargo services.</li>
            <li><strong>Empower Small Businesses</strong> – Supporting MSMEs and online sellers by simplifying logistics and expanding market reach.</li>
            <li><strong>Grow Sustainably</strong> – Committing to eco-friendly practices while continuously evolving to meet global standards.</li>
          </ul>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
>>>>>>> Stashed changes
