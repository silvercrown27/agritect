import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import "../assets/css/style.css"
import "../assets/css/bootstrap.min.css"

import services_image from "../assets/images/services.png";

function AboutSection() {
    return (
        <div id="about" className="about-us section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className="section-heading">
                            <h4 class="heading-underline mb-5" style={{ color: 'cornsilk' }}>
                                About <em style={{ color: 'springgreen' }}>Our Mission</em> & Expertise
                            </h4>
                            <p>
                                Welcome to AI Agriculture, where innovation meets cultivation. Our mission is to
                                revolutionize farming through cutting-edge AI technology and expert insights.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="box-item">
                                    <h4><Link to="/ai-powered-analysis">AI-powered Analysis</Link></h4>
                                    <p>
                                        Our AI algorithms analyze plant health from photos and videos, providing real-time
                                        insights for farmers.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box-item">
                                    <h4><Link to="/farming-excellence">Farming Excellence</Link></h4>
                                    <p>We empower farmers with knowledge on crop care, sustainable practices, and maximizing yield.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box-item">
                                    <h4>
                                        <Link to="/community-collaboration">Community Collaboration</Link>
                                    </h4>
                                    <p>
                                        Our platform fosters a vibrant community where farmers connect, share, and learn from
                                        each other.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box-item">
                                    <h4>
                                        <Link to="/continuous-innovation">Continuous Innovation</Link>
                                    </h4>
                                    <p>
                                        We're dedicated to advancing agriculture through ongoing research and technological
                                        advancements.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <p>Join us in the journey to transform agriculture.</p>
                                <div className="gradient-button">
                                    <Link to="/explore-features">Explore Our Features</Link>
                                </div>
                                <span>*Unlock the Future of Farming</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-image">
                            <img
                                src={services_image}
                                alt="About Right Image"
                                style={{ position: 'relative', top: '100px', width: '80%', left: '10px' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function About() {
    return (
        <Router>
            <div>
                <AboutSection />
            </div>
        </Router>
    )
}
export default About;
