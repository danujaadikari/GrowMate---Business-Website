import React, { useState } from 'react';
import { 
  FiTrendingUp, 
  FiUsers, 
  FiGlobe, 
  FiCode, 
  FiBarChart, 
  FiTarget,
  FiCheck,
  FiArrowRight,
  FiPlay,
  FiStar
} from 'react-icons/fi';
import './ServicesList.css';

const SERVICES = [
  {
    id: 1,
    title: 'Business Growth Consulting',
    icon: <FiTrendingUp />,
    shortDesc: 'Strategic guidance to scale your business exponentially',
    fullDesc: 'Comprehensive business analysis, growth strategy development, and implementation roadmap to help you achieve sustainable growth.',
    features: [
      'Market Analysis & Competitive Research',
      'Growth Strategy Development',
      'Business Model Optimization',
      'Revenue Stream Diversification',
      'Operational Efficiency Improvement',
      'Risk Assessment & Mitigation'
    ],
    results: '250% avg. revenue increase',
    duration: '3-6 months',
    price: 'From $2,500/month',
    popular: true
  },
  {
    id: 2,
    title: 'Digital Marketing Solutions',
    icon: <FiUsers />,
    shortDesc: 'Complete digital presence to reach your ideal customers',
    fullDesc: 'End-to-end digital marketing strategy including SEO, social media, content marketing, and paid advertising campaigns.',
    features: [
      'SEO & Content Strategy',
      'Social Media Management',
      'Google Ads & Facebook Advertising',
      'Email Marketing Automation',
      'Brand Identity & Design',
      'Analytics & Performance Tracking'
    ],
    results: '400% increase in qualified leads',
    duration: '2-4 months',
    price: 'From $1,800/month',
    popular: false
  },
  {
    id: 3,
    title: 'Web Development & Design',
    icon: <FiCode />,
    shortDesc: 'Modern, high-converting websites that drive results',
    fullDesc: 'Custom web development using the latest technologies, optimized for performance, SEO, and user experience.',
    features: [
      'Responsive Web Design',
      'React & Modern JavaScript',
      'E-commerce Integration',
      'CMS Development',
      'Performance Optimization',
      'Ongoing Maintenance & Support'
    ],
    results: '300% improvement in conversion rates',
    duration: '4-8 weeks',
    price: 'From $3,500 project',
    popular: false
  },
  {
    id: 4,
    title: 'Data Analytics & Insights',
    icon: <FiBarChart />,
    shortDesc: 'Turn your data into actionable business intelligence',
    fullDesc: 'Advanced analytics setup, reporting dashboards, and data-driven insights to optimize your business decisions.',
    features: [
      'Analytics Implementation',
      'Custom Dashboard Creation',
      'Performance Monitoring',
      'Conversion Optimization',
      'A/B Testing & Experimentation',
      'Business Intelligence Reports'
    ],
    results: '180% better decision accuracy',
    duration: '2-3 months',
    price: 'From $2,200/month',
    popular: false
  }
];

const ServicesList = () => {
  const [selectedService, setSelectedService] = useState(1);
  const [showVideo, setShowVideo] = useState(false);

  const currentService = SERVICES.find(service => service.id === selectedService);

  return (
    <section className="services-list-section">
      <div className="container">
        {/* Header */}
        <div className="services-header">
          <span className="section-badge">Our Expertise</span>
          <h2 className="section-title">Comprehensive Business Solutions</h2>
          <p className="section-description">
            We provide end-to-end services designed to accelerate growth, optimize operations, 
            and maximize your business potential in today's competitive landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className={`service-card ${selectedService === service.id ? 'active' : ''} ${service.popular ? 'popular' : ''}`}
              onClick={() => setSelectedService(service.id)}
            >
              {service.popular && (
                <div className="popular-badge">
                  <FiStar />
                  Most Popular
                </div>
              )}
              
              <div className="service-icon">
                {service.icon}
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.shortDesc}</p>
              
              <div className="service-meta">
                <span className="service-price">{service.price}</span>
                <span className="service-duration">{service.duration}</span>
              </div>
              
              <div className="service-result">
                <FiTarget className="result-icon" />
                <span>{service.results}</span>
              </div>
              
              <button className="service-btn">
                Learn More <FiArrowRight />
              </button>
            </div>
          ))}
        </div>

        {/* Selected Service Details */}
        {currentService && (
          <div className="service-details">
            <div className="details-content">
              <div className="details-left">
                <h3>{currentService.title}</h3>
                <p>{currentService.fullDesc}</p>
                
                <div className="features-grid">
                  <h4>What's Included:</h4>
                  <ul className="features-list">
                    {currentService.features.map((feature, index) => (
                      <li key={index}>
                        <FiCheck className="check-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="service-actions">
                  <button className="btn btn-primary">
                    Get Started Now
                  </button>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => setShowVideo(true)}
                  >
                    <FiPlay />
                    Watch Demo
                  </button>
                </div>
              </div>
              
              <div className="details-right">
                <div className="service-stats">
                  <div className="stat-item">
                    <h4>Success Rate</h4>
                    <span className="stat-number">98%</span>
                  </div>
                  <div className="stat-item">
                    <h4>Avg. ROI</h4>
                    <span className="stat-number">350%</span>
                  </div>
                  <div className="stat-item">
                    <h4>Projects</h4>
                    <span className="stat-number">200+</span>
                  </div>
                </div>
                
                <div className="service-testimonial">
                  <blockquote>
                    "GrowMate transformed our business completely. The results exceeded our expectations."
                  </blockquote>
                  <cite>- Sarah Johnson, CEO TechStart Inc.</cite>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Modal */}
        {showVideo && (
          <div className="video-modal" onClick={() => setShowVideo(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setShowVideo(false)}>×</button>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Service Demo Video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesList;