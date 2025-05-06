// filepath: /d:/Study/Cars93/cars93/src/Modules/Footer/footer.jsx
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer bg-light border border-warning-subtle">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <h5>Connect with Us</h5>
            <p>&copy; 2025 93Cars. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <h5>Follow Us</h5>
            <a href="https://www.instagram.com" className="me-3"
             target="_blank" 
             rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://x.com/93CarsOfficial" className="me-3"
             target="_blank" 
             rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.youtube.com/@93carsOfficial"
             target="_blank" 
             rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;