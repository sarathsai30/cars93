// filepath: /d:/Study/Cars93/cars93/src/Modules/AboutUs/AboutUs.jsx
import React from "react";
import "./AboutUs.css"; // Import the CSS file for styling

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us-section mt-5">
      <div className="container">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-text">
          Welcome to 93Cars! We are dedicated to providing you with the latest information on new cars, reviews, and videos. Our mission is to help you make informed decisions when it comes to purchasing your next vehicle. Thank you for visiting our website!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;