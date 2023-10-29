import React from 'react';
import "../assets/css/style.css"
function ServiceCard({ icon, title, description }) {
    return (
        <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
                <div className="icon">{icon}</div>
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">
                    {title}
                </div>

                {description && (
                    <div className="ag-courses-item_date-box">
                        Start:
                        <span className="ag-courses-item_date">
                            {description}
                        </span>
                    </div>
                )}
            </a>
        </div>
    );
}

export default ServiceCard;
