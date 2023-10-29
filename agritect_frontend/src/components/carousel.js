import React from 'react';

function Header() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="main-nav">
              <div className="row align-items-center">
                <a href="/" className="logo col-md-3">
                  <img src="/assets/images/logo.png" alt="Agricultural AI" />
                </a>
                <ul className="nav col-md-5 justify-content-center">
                  <li><a href="/">Home</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/about">About Us</a></li>
                  {/* Add more navigation items here */}
                </ul>
                <ul className="nav col-md-4 d-flex flex-row-reverse">
                  <li><a href="/signin">Sign In</a></li>
                  <li>
                    <div className="gradient-button">
                      <a href="/signup">Sign Up</a>
                    </div>
                  </li>
                </ul>
                <a className="menu-trigger"><span>Menu</span></a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

function Banner() {
  return (
    <div className="main-banner">
      <div className="container">
        <div className="col-lg-12">
          <h2 style={{ color: 'cornsilk' }}>Get Started With AI Agriculture</h2>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div
                  className="left-content show-up header-text"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <h2>Embark on a Journey of Effortless Crop Monitoring</h2>
                    </div>
                    <div className="col-lg-12 ps-4">
                      <div className="white-button first-button scroll-to-section mt-3">
                        <a href="#">Get Started <i className="fas fa-leaf"></i></a>
                      </div>
                      <div className="white-button scroll-to-section mt-3">
                        <a href="learn/">Learn More <i className="fas fa-info-circle"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 justify-content-center">
                <div
                  className="right-image"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <img
                    src="/assets/images/about-bg.png"
                    style={{ width: '100%' }}
                    alt="Agriculture Banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Carousel() {
  return (
    <div>
      <Header />
      <Banner />
      {/* Add more content or components here */}
    </div>
  );
}

export default Carousel;
