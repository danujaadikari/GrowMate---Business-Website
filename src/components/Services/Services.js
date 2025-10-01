import React from 'react';
import { FiTrendingUp, FiUsers, FiTarget, FiZap } from 'react-icons/fi';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FiTrendingUp />,
      title: 'Business Consulting',
      description: 'Strategic guidance to optimize operations and accelerate growth.',
      features: ['Strategic Planning', 'Process Optimization', 'Performance Analytics']
    },
    {
      icon: <FiUsers />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital strategies to expand your online presence.',
      features: ['SEO & SEM', 'Social Media', 'Content Marketing']
    },
    {
      icon: <FiTarget />,
      title: 'Growth Strategy',
      description: 'Data-driven strategies to scale your business sustainably.',
      features: ['Market Analysis', 'Growth Hacking', 'ROI Optimization']
    },
    {
      icon: <FiZap />,
      title: 'Web Development',
      description: 'Modern, responsive websites that convert visitors into customers.',
      features: ['Custom Development', 'E-commerce', 'Mobile Apps']
    }
  ];

  return (
    <section className="services-section section-padding">
      <div className="container">
        <div className="services-header text-center">
          <h2 className="heading-lg">Our Services</h2>
          <p className="body-lg text-secondary">
            Comprehensive solutions designed to accelerate your business growth
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;