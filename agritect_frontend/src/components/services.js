import React from 'react';

import ServiceCard from './card1';

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

    const items = services.map((item) => (
        <ServiceCard
            icon={item.icon}
            title={item.title}
            description={item.description}
        />
    ));

    return <div className='d-flex flex-row m-2'>{items}</div>;
}

export default ServicesSection;

