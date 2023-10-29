import React from 'react';
import "../assets/css/components.css"
function Card({ icon, title, description }) {
  return (
    <div className="card">
      <span className="icon">{icon}</span>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="shine"></div>
      <div className="background">
        {/* ... Tiles and Lines */}
      </div>
    </div>
  );
}

function GridComponent() {
  return (
    <div className="grid">
      <Card
        icon={
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Path for the first card */}
          </svg>
        }
        title="Products"
        description="Standard chunk of Lorem Ipsum used since the 1500s is showed below for those interested."
      />

      <Card
        icon={
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Path for the second card */}
          </svg>
        }
        title="Categories"
        description="Standard chunk of Lorem Ipsum used since the 1500s is showed below for those interested."
      />

      {/* Add more Card components as needed. */}

      <label className="day-night">
        <input type="checkbox" checked />
        <div></div>
      </label>

      <a className="twitter" target="_top" href="https://twitter.com/aaroniker_me">
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72">
          {/* Twitter SVG */}
        </svg>
      </a>
    </div>
  );
}

export default GridComponent;
