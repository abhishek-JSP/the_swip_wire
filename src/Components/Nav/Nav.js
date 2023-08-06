import React from "react";
import './Nav.css';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 

const Nav = () => {
  return (
    <div className="head_nav">
      <nav className="nav_one navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">Logo</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to='/features'>Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/collabration'>Collabration</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/solutions'>Solutions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/testimonials'>Testimonials</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav_two">
        <button className="btn_login btn btn-primary">Log-in</button>
        <button className="btn_signup btn btn-success">Sign Up</button>
      </div>
    </div>
  );
};

export default Nav;
