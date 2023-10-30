import React from 'react';
import background from "../assets/images/background.jpg";
import "../assets/css/card1.css";
import "../assets/css/bootstrap.min.css";

function ServiceCard({ icon, title, description }) {
    return (
        <div>
            <article class="card">
                <img src={background} className='card__background'/>
                {icon}
                <div class="card__content | flow">
                    <div class="card__content--container | flow">
                        <h2 class="card__title">{title}</h2>
                        <p class="card__description">{description}
                        </p>
                    </div>
                    <button class="card__button">Read more</button>
                </div>
            </article>
        </div>
    );
}

export default ServiceCard;
