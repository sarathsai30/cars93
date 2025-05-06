// filepath: /d:/Study/Cars93/cars93/src/Modules/Header/header.jsx
import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import "./header.css";

const Header = () => {
  return (
    <header className="bg-light text-white">
      <div className="container-fluid d-flex justify-content-between align-items-center py-2">
        <a
          className="navbar-brand text-white"
          href="https://www.carsdekho.com/"
          style={{ marginLeft: '0' }}
        >
          <img
            className="border border-warning"
            src="Logo.jpg"
            alt="Cars93"
            style={{ height: '70px', width: '70px', borderRadius: '50%' }}
          />
        </a>
        {/* <div className="quick-search ms-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Quick Search..."
            style={{ maxWidth: "300px" }}
          />
        </div> */}
      </div>
      <NavBar />
    </header>
  );
};

export default Header;