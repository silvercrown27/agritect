import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import '../assets/css/bootstrap.min.css';
import '../assets/css/owl.css';
import '../assets/css/style.css';

import logo from "../assets/images/logo.png"

function HeaderComponent() {
  return (
    <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
      <div className="container" style={{ marginLeft: '0px', marginRight: '0px'}}>
        <div className="row">
          <div className="col-md-12">
            <nav className="main-nav">
              <div className="row align-items-center">
                <Link to="/landing_page" className="logo col-md-3">
                  <img src={logo} alt="Agricultural AI" height={60} />
                </Link>
                <ul className="nav col-md-5 justify-content-center">
                  <li><Link to="/landing_page" className="active">Home</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li></li>
                </ul>
                <ul className="nav col-md-4 d-flex flex-row-reverse">
                  <li><Link to="/signin">Sign In</Link></li>
                  <li>
                    <div className="gradient-button">
                        <Link to="/signup">Sign Up</Link>
                    </div>
                  </li>
                </ul>
                <Link className="menu-trigger"><span>Menu</span></Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

function Header() {
  return (
    <Router>
      <div>
        <HeaderComponent />
      </div>
    </Router>
  );
}

export default Header;
