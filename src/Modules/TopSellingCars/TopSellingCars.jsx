// filepath: /d:/Study/Cars93/cars93/src/Modules/TopSellingCars/TopSellingCars.jsx
import React, { useRef } from "react";
import "./TopSellingCars.css"; // Import the CSS file for styling

const TopSellingCars = () => {
  const carListRef = useRef(null);

  const topSellingCars = [
    {
      name: "Hyundai i20",
      description: "A premium hatchback with advanced features.",
      image: "topcars.jpg" // Replace with actual image path
    },
    {
      name: "Tata Tiago",
      description: "A compact car with robust design and safety features.",
      image: "topcars.jpg" // Replace with actual image path
    },
    {
      name: "Kia Sonet",
      description: "A compact SUV with modern design and features.",
      image: "topcars.jpg" // Replace with actual image path
    },
    {
      name: "Toyota Innova",
      description: "A premium MPV with advanced features and comfort.",
      image: "topcars.jpg" // Replace with actual image path
    },
  ];

  const scrollLeft = () => {
    carListRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carListRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section id="top-selling-cars" className="mt-5">
      <div className="container">
        <h2 className="text-left mb-4">Top Selling Cars</h2>
        <div className="position-relative">
          <button className="scroll-button left" onClick={scrollLeft}>
            &#8249;
          </button>
          <div className="car-list" ref={carListRef}>
            <div className="row flex-nowrap">
              {topSellingCars.map((car, index) => (
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

export default TopSellingCars;