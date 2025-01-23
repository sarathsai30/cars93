// filepath: /d:/Study/Cars93/cars93/src/Modules/NavBar/NavBar.jsx
import React from "react";

const NavBar = () => {
  const handleScrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary border border-warning">
      <div className="container">
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
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link ms-4 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-4 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="/new-cars">New Cars</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-4 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="/reviews">Reviews</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-4 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="#videos" onClick={(e) => handleScrollToSection(e, 'videos')}>Videos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-4 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="#about-us" onClick={(e) => handleScrollToSection(e, 'about-us')}>About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;