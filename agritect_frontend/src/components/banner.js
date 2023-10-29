import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import '../assets/css/bootstrap.min.css';
import '../assets/css/owl.css';
import '../assets/css/style.css';
import '../assets/css/animated.css';

import logo2 from "../assets/images/about-bg.png"

function Banner() {
    useEffect(() => {
        function updateMainBannerHeight() {
            const windowHeight = window.innerHeight;
            const mainBanner = document.querySelector('.main-banner');
            if (mainBanner) {
                mainBanner.style.height = windowHeight + 'px';
            }
        }

        updateMainBannerHeight();

        window.addEventListener('resize', updateMainBannerHeight);

        if (document.querySelector('.menu-trigger')) {
            document.querySelector('.menu-trigger').addEventListener('click', function () {
                this.classList.toggle('active');
                const nav = document.querySelector('.header-area .nav');
                if (nav) {
                    nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
                }
            });
        }

        // Menu elevator animation
        const scrollToSectionLinks = document.querySelectorAll('.scroll-to-section a[href*="#"]:not([href="#"])');
        scrollToSectionLinks.forEach((link) => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.hash;
                const target = document.querySelector(targetId);
                if (target) {
                    const width = window.innerWidth;
                    if (width < 991) {
                        const menuTrigger = document.querySelector('.menu-trigger');
                        const nav = document.querySelector('.header-area .nav');
                        if (menuTrigger && nav) {
                            menuTrigger.classList.remove('active');
                            nav.style.display = 'none';
                        }
                    }
                    window.scrollTo({
                        top: target.offsetTop + 1,
                        behavior: 'smooth',
                    });
                }
            });
        });

        return () => {
            window.removeEventListener('resize', updateMainBannerHeight);
        };
    }, []);

    return (
        <div className="main-banner wow fadeIn" id="top" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="gradient-overlay"></div>
            <div className="container text-center" style={{ marginTop: '70px', marginLeft: '20px' }}>
                <div className="col-lg-12">
                    <h2 style={{ color: 'cornsilk' }}>Get Started With AI Agriculture</h2>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6 mt-large">
                                <div
                                    className="left-content show-up header-text">
                                    <div className="row d-flex flex-column">
                                        <div className="col-lg-12 animated fadeInLeft">
                                            <h2>Embark on a Journey of Effortless Crop Monitoring</h2>
                                        </div>
                                        <div className="white-button first-button scroll-to-section mt-3  animated fadeInLeft">
                                            <Link to="#">
                                                Get Started <FontAwesomeIcon icon={faLeaf} />
                                            </Link>
                                        </div>
                                        <div className="white-button scroll-to-section mt-3  animated fadeInLeft">
                                            <Link to="learn/">
                                                Learn More <FontAwesomeIcon icon={faInfoCircle} />
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 justify-content-center">
                                <div className="right-image animated fadeInRight">
                                    <img src={logo2} alt="Agriculture Banner" height={450} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

function MainBanner() {
    return (
        <Router>
            <div>
                <Banner />
            </div>
        </Router>
    )
}
export default MainBanner;
