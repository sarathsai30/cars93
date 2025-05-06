import React from "react";
import "./NavBar.css";


const NavBar = () => {
  const handleScrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link ms-4" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-4" href="/new-cars"
               onClick={(e) => handleScrollToSection(e, "featured-cars")}>
                New Cars
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link ms-4" href="/reviews">
                Reviews
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a
                className="nav-link ms-4"
                href="#videos"
                onClick={(e) => handleScrollToSection(e, "videos")}
              >
                Videos
              </a>
            </li> */}
            <li className="nav-item">
              <a
                className="nav-link ms-4"
                href="#about-us"
                onClick={(e) => handleScrollToSection(e, "about-us")}
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;