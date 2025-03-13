import React from 'react';
import '../../css/ServiceDetail.css';
// import user2women from "../assets/user2women.avif";
// import cargoDelivery from "../assets/cargoloading.avif";
import website1 from "../../assets/website1.png";

const CargoService = () => {
    return (
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-heading">Express Courier Services </h1>
          <p className="hero-subtext">
          Fast and reliable parcel delivery services for businesses and individuals, ensuring same-day or 
          next-day delivery in major cities. 
          </p>
          <button className="hero-button">Explore</button>
        </div>
        <div className="hero-image-container">
          <img src={website1} alt="Shipping Cargo" className="hero-image" />
        </div>
      </section>
    );
};

export default CargoService; 