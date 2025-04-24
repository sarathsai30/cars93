// filepath: /d:/Study/Cars93/cars93/src/Modules/AboutUs/AboutUs.jsx
import React from "react";
import "./AboutUs.css"; // Import the CSS file for styling

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us-section mt-5">
      <div className="container">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-text">
          93Cars is your trusted source for the latest informationon on new cars in the indian market.
          From detailed specifications and features to prices, variants, and expert comparisons,
          we bring everything you need to known-all in one place.
          whether you're exploring the latest launches or comparing models,
          93Cars helps you make informed decisions with confidence.
          Thanks for visiting our website.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;