// filepath: d:\Study\Cars93\cars93\src\Modules\FeaturedCars\FeaturedCars.jsx
import React, { useState, useRef } from "react";
import allCarsData from "../../Data/data.json"; // Import the allCars JSON file
import "./FeaturedCars.css"; // Import the CSS file for styling

const FeaturedCars = () => {
  const [selectedCategory, setSelectedCategory] = useState("trending");
  const carListRef = useRef(null);

  const scrollLeft = () => {
    carListRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carListRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Extract categories dynamically from allCars, ignoring undefined categories
  const categories = [
    ...new Set(
      allCarsData.AllCars
        .filter((car) => car.category) // Filter out cars with undefined categories
        .map((car) => car.category)
    )
  ];

  // Filter cars based on the selected category
  const filteredCars = allCarsData.AllCars.filter(
    (car) => car.category === selectedCategory
  );

  return (
    <section id="featured-cars" className="mt-5">
      <div className="container-fluid">
        <h2 className="text-left mb-4">Featured Cars</h2>
        <ul className="nav nav-tabs mb-4">
          {categories.map((category) => (
            <li className="nav-item" key={category}>
              <a
                className={`nav-link ${selectedCategory === category ? "active" : ""}`}
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedCategory(category);
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
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
              {filteredCars.map((car) => (
                <div className="col-md-4 mb-4" key={car.id}>
                  <div className="card h-100">
                    <img src={car.image} className="card-img-top" alt={car.name} />
                    <div className="card-body">
                      <h5 className="card-title">{car.name}</h5>
                      <p className="card-text">{car.description}</p>
                      <h5 className="card-price">{car.priceRange}</h5>
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