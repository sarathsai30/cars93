// filepath: /d:/Study/Cars93/cars93/src/Modules/FeaturedCars/FeaturedCars.jsx
import React, { useState, useRef } from "react";
import cars from "./featuredcars.json"
import "./FeaturedCars.css"; // Import the CSS file for styling

const FeaturedCars = () => {
  const [selectedCategory, setSelectedCategory] = useState("Trending");
  const carListRef = useRef(null);

 
  const scrollLeft = () => {
    carListRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carListRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section id="featured-cars" className="mt-5">
      <div className="container-fluid">
        <h2 className="text-left mb-4">Featured Cars</h2>
        <ul className="nav nav-tabs mb-4">
          {Object.keys(cars).map((category) => (
            <li className="nav-item" key={category}>
              <a
                className={`nav-link ${selectedCategory === category ? "active" : ""}`}
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedCategory(category);
                }}
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
        <div className="position-relative">
          <button className="scroll-button left" onClick={scrollLeft}>
            &#8249;
          </button>
          <div className="car-list" ref={carListRef}>
            <div className="row flex-nowrap">
              {cars[selectedCategory].map((car, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card h-100">
                    <img src={car.image} className="card-img-top" alt={car.name} />
                    <div className="card-body">
                      <h5 className="card-title">{car.name}</h5>
                      <p className="card-text">{car.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="scroll-button right" onClick={scrollRight}>
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;