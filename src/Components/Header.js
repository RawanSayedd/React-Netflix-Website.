import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [Mobile, setMobile] = useState(false);
  return (
    <div>
      <header>
        <div className="container flexSB">
          <nav className="flexSB">
            <div className="logo">
              <img src="./images/logo.png" alt="" />
            </div>
            <ul
              className={Mobile ? "navMenu-list" : "flexSB"}
              onClick={() => setMobile(false)}
            >
              <Link to="/">Home</Link>
              <Link to="/series">Series</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/pages">Pages</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/contact">Contact</Link>
            </ul>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </nav>
          <div className="account flexSB">
            <i className="fa fa-search"></i>
            <i className="fa fa-bell"></i>
            <i className="fa fa-user"></i>
            <button>Subsrcibe Now</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
