import React from 'react';
import { Link, BrowserRouter as Router} from 'react-router-dom';

import white_logo from "../assets/images/white-logo.png"

import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";

function Footer() {
    return (
        <footer id="newsletter">
            <div className="container w-90%">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-heading">
                            <h4>Stay Informed with AI Agriculture Updates</h4>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-3 footer-content">
                        <form id="search" action="#" method="GET">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <fieldset>
                                        <input
                                            type="email"
                                            name="address"
                                            className="email"
                                            placeholder="Email Address..."
                                            autoComplete="on"
                                            required
                                        />
                                    </fieldset>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <fieldset>
                                        <button type="submit" className="main-button">
                                            Subscribe Now <i className="fa fa-angle-right"></i>
                                        </button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 footer-content">
                        <div className="footer-widget">
                            <h4>About Our Company</h4>
                            <div className="logo">
                                <img src={white_logo} style={{ width: '80%' }} alt="" />
                            </div>
                            <p>
                                Welcome to AI Agriculture, where innovation meets cultivation. Our mission is to
                                revolutionize farming through cutting-edge AI technology and expert insights.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-widget justify-content-center footer-content" style={{ paddingLeft: '50px' }}>
                            <h4>About Us</h4>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/plant-analysis">Plant Analysis</Link>
                                </li>
                                <li>
                                    <Link to="/agricultural-insights">Agricultural Insights</Link>
                                </li>
                                <li>
                                    <Link to="/community">Community</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-widget footer-content">
                            <h4>Contact Us</h4>
                            <p>Nairobi, Kenya, 123452,</p>
                            <p>
                                <Link to="">010-020-0340</Link>
                            </p>
                            <p>
                                <Link to="">agritech@gmail.com</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-widget footer-content">
                            <h4>Quick Links</h4>
                            <ul>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/faqs">FAQs</Link>
                                </li>
                                <li>
                                    <Link to="/terms">Terms of Service</Link>
                                </li>
                                <li>
                                    <Link to="/privacy-policy">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="copyright-text footer-content">
                            <p>&copy; 2023 AI Agriculture. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterMain() {
    return (
        <Router>
            <div>
                <Footer />
            </div>
        </Router>
    )
}
export default FooterMain;
