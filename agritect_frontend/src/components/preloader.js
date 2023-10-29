import React, { useEffect } from 'react';
import '../assets/css/style.css';

function Preloader() {
  useEffect(() => {
    window.addEventListener('load', () => {
      const preloader = document.getElementById('js-preloader');
      if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500);
      }
    });

    return () => {
      window.removeEventListener('load', () => {});
    };
  }, []);

  return (
    <div id="js-preloader" className="js-preloader">
      <div className="preloader-inner">
        <span className="dot"></span>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
