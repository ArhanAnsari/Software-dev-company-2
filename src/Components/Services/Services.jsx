import React from 'react';
import './Services.css'; 
import { FaExpandAlt, FaLaptopCode } from 'react-icons/fa';
import { IoBuild } from 'react-icons/io5';

const services = [
    {
        title: 'Graphic Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nesciunt explicabo quidem maiores praesentium deserunt tempora, corporis enim dolorem vero eaque libero voluptates ',
        icon: <FaLaptopCode />, 
    },
    {
        title: 'Software Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nesciunt explicabo quidem maiores praesentium deserunt tempora, corporis enim dolorem vero eaque libero voluptates ',
        icon: <FaLaptopCode />, 
    },
    {
        title: 'UI/UX Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nesciunt explicabo quidem maiores praesentium deserunt tempora, corporis enim dolorem vero eaque libero voluptates .',
        icon: <FaLaptopCode />, 
    },
    {
        title: 'Software Testing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nesciunt explicabo quidem maiores praesentium deserunt tempora, corporis enim dolorem vero eaque libero voluptates .',
        icon: <IoBuild />, 
    }
];

const Services = () => {
    return (
        <div className="services-container borders">
            {services.map((service, index) => (
                <div className="service-card" key={index}>
                    <div className="service-icon">{service.icon}</div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <button className="expand-btn"><FaExpandAlt /></button> {/* Placeholder icon for expand */}
                </div>
            ))}
        </div>
    );
};

export default Services;
