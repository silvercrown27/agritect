import React from 'react';

import GridComponent from './card2';
import "../assets/css/style.css"


function ServicesSection() {
    const services = [
        {
            icon: <i className="fas fa-leaf"></i>,
            title: 'Plant Health Analysis',
            description: 'Upload plant photos for AI-powered health assessment and get personalized recommendations.',
        },
        {
            icon: <i className="fas fa-seedling"></i>,
            title: 'Agricultural Insights',
            description: 'Explore in-depth information about crops, farming techniques, and sustainable practices.',
        },
        {
            icon: <i className="fas fa-users"></i>,
            title: 'Community Interaction',
            description: 'Join our farming community to share experiences, ask questions, and collaborate.',
        },
        {
            icon: <i className="fas fa-mobile-alt"></i>,
            title: 'Mobile Accessible',
            description: 'Access our platform on the go with a mobile-friendly design and responsive interface.',
        },
    ];

    return (
        <div id="services" className="">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-heading wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                            <h4 className='heading-underline'>Our AI-powered Services & Features</h4>
                            <p>Empowering farmers with cutting-edge AI technology and agricultural insights.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {services.map((service, index) => (
                        <GridComponent key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;
