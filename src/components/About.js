import React from "react";
import "../css/AboutUs.css";
import aboutImage from "../assets/website8.png";
import ceoImage from "../assets/ceo.jpg";
import { FaMapMarkedAlt,FaUsers , FaSmileBeam , FaCogs, FaClock, FaBoxOpen, FaLeaf,FaHandshake, FaRobot, FaMapSigns, FaWallet, FaSeedling } from "react-icons/fa";
import visionImage from "../assets/website7.png";

const AboutUs = () => {
  const visionPoints = [
    {
      icon: <FaMapMarkedAlt className="vision-icon red" />,
      title: "Expand Nationwide",
      text: "Reaching from villages to metro cities, ensuring reliable last-mile connectivity everywhere.",
    },
    {
      icon: <FaCogs className="vision-icon blue" />,
      title: "Innovate Logistics",
      text: "Using AI, automation, and smart technology for faster, more efficient deliveries.",
    },
    {
      icon: <FaClock className="vision-icon red" />,
      title: "Ensure Reliability & Speed",
      text: "Delivering secure, timely, and cost-effective courier and cargo services.",
    },
    {
      icon: <FaBoxOpen className="vision-icon blue" />,
      title: "Empower Small Businesses",
      text: "Supporting MSMEs and online sellers by simplifying logistics and expanding market reach.",
    },
    {
      icon: <FaLeaf className="vision-icon red" />,
      title: "Grow Sustainably",
      text: "Committing to eco-friendly practices while continuously evolving to meet global standards.",
    },
    {
      icon: <FaSmileBeam className="vision-icon blue" />, // Choose any relevant icon
      title: "Enhance Customer Experience",
      text: "Prioritizing customer satisfaction by offering personalized services, real-time tracking, and proactive support for a seamless logistics experience.",
    }

  ];

  const missionPoints = [
  {
    icon: <FaHandshake className="mission-icon red" />,
    title: "Customer-Centric Service",
    description: "Delivering exceptional service with reliability, transparency, and efficiency.",
  },
  {
    icon: <FaRobot className="mission-icon blue" />,
    title: "Technology & Innovation",
    description: "Leveraging AI, automation, and real-time tracking to enhance logistics solutions.",
  },
  {
    icon: <FaMapSigns className="mission-icon red" />,
    title: "Rural & Urban Connectivity",
    description: "Expanding our network to reach every corner of India, from remote villages to bustling cities.",
  },
  {
    icon: <FaWallet className="mission-icon blue" />,
    title: "Affordability & Accessibility",
    description: "Offering cost-effective and easily accessible logistics solutions for individuals and businesses.",
  },
  {
    icon: <FaSeedling className="mission-icon red" />,
    title: "Sustainability & Growth",
    description: "Implementing eco-friendly practices and continuously evolving to meet market demands.",
  },
  {
  icon: <FaUsers className="mission-icon blue" />,
  title: "Empowered Workforce",
  description: "Investing in training, development, and a positive work culture to empower our team and drive service excellence.",
  }

];

  return (
    <div className="main">
    <section className="urb-about-wrapper">
      <div className="urb-about-flexbox" data-aos="fade-up">
        <div className="urb-about-img-box">
          <img src={aboutImage} alt="Delivery person" />
        </div>
        <div className="urb-about-text-content">
          <h2>
            About <span className="urb-highlight-word">Us</span>
          </h2>
          <p>
            Urbandot Couriers & Cargo is a leading logistics and supply chain
            solutions provider, offering cutting-edge technology-driven services
            across 29 states and 6 union territories in India. With a robust
            network spanning 1,100+ cities and towns and covering 18,600+ pin
            codes, we ensure seamless and reliable delivery solutions tailored
            to your business needs.
          </p>
          <p>
            From first-mile pickup to last-mile delivery, we specialize in
            efficient logistics operations, ensuring speed, security, and
            accuracy in every shipment. Whether you're a business looking for
            streamlined supply chain solutions or an individual needing quick
            and secure parcel delivery, Urbandot Couriers & Cargo has you
            covered.
          </p>
        </div>
      </div>
    </section>

    <section className="urb-ceo-vision-section">
      <div className="urb-ceo-layout" data-aos="fade-right">
        <div className="urb-ceo-image">
          <img src={ceoImage} alt="CEO of UrbanDot" />
          <h4 className="urb-ceo-name">
            Mr. Raparla Ravindranath Choudary
          </h4>
        </div>

        <div className="urb-ceo-text-block">
          <h2>CEO's Vision</h2>
          <blockquote>
            <span className="urb-ceo-highlight">
              “Mr. Raparla Ravindranath Choudary
            </span>
            , CEO of UrbanDot Couriers and Cargo Private Limited, come from a
            humble middle-class background with an unshakable passion for
            innovation and excellence in logistics.”
          </blockquote>

          <p>
            “My professional journey began in 2009, driven by a deep curiosity
            and an unwavering belief in the transformative power of technology.
            Over the years, I navigated diverse industries, growing from
            hands-on roles to strategic leadership positions—each step
            reinforcing my passion for building solutions that move people and
            businesses forward.
          </p>

          <p>
            In 2013, I took my first leap into entrepreneurship by founding an
            IT services company. Though that chapter was short-lived, it became
            one of the most defining experiences of my life. It taught me that
            true innovation comes not just from success, but from the courage
            to try, to learn, and to evolve.
          </p>

          <p>
            <strong>UrbanDot</strong> was born from that evolution—a vision
            shaped by resilience, refined by experience, and fueled by the
            belief that technology should not only solve problems, but spark
            possibilities. Today, we stand for more than services—we stand for
            impact, for forward-thinking, and for a future we can create
            together.”
          </p>
        </div>
      </div>
    </section>

    <section className="urb-vision-section">
      <div className="urb-vision-content" data-aos="fade-up">
        <div className="urb-vision-text">
          <h2>Our Vision</h2>
          <p className="vision-subtext">
            At UrbanDot, our vision is to be India’s most trusted and efficient logistics provider, seamlessly connecting people and businesses through technology-driven delivery solutions.
          </p>
          <div className="vision-grid">
            {visionPoints.map((item, index) => (
              <div className="vision-card" data-aos="zoom-in" data-aos-delay="100" key={index}>
                {item.icon}
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="vision-footer">
            <strong>UrbanDot – Connecting India, One Delivery at a Time!</strong>
          </p>
        </div>
        <div className="urb-vision-image">
          <img src={visionImage} alt="Our Vision" />
        </div>
      </div>
    </section>

    <section className="urb-mission-wrapper">
      <div className="urb-mission-container" data-aos="fade-up">
        <h2>Our Mission</h2>
        <p className="urb-mission-intro">
          At UrbanDot Couriers and Cargo Private Limited, our mission is to revolutionize the logistics industry
          by providing fast, reliable, and technology-driven courier and cargo services. We are committed to
          building a seamless delivery network that connects villages to metro cities, ensuring efficient and
          secure transportation of goods across India.
        </p>

        <div className="urb-mission-list">
          {missionPoints.map((point, index) => (
            <div className="mission-card" data-aos="fade-left" data-aos-delay="100" key={index}>
              {point.icon}
              <div className="mission-text">
                <h4>{point.title}</h4>
                <p>{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="urb-mission-outro">
          <strong><em>UrbanDot – Delivering Beyond Expectations!</em></strong>
        </p>
      </div>
    </section>
</div>
    
  );
};

export default AboutUs;
