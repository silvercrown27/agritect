import React from 'react';
import background from "../assets/images/background.jpg";
import "../assets/css/card1.css";
import "../assets/css/bootstrap.min.css";

function ServiceCard({ icon, title, description }) {
    return (
        <div>
            <article className="card">
                <img src={background} alt="Agriculture" className='card__background'/>
                <i className="fas fa-seedling"></i>
                <div className="card__content | flow">
                    
                    <div className="card__content--container | flow">
                        <h2 className="card__title">{title}</h2>
                        <p className="card__description">{description}
                        </p>
                    </div>
                    <button className="card__button">Read more</button>
                </div>
            </article>
        </div>
    );
}

export default ServiceCard;
