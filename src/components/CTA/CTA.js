import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import './CTA.css';

const CTA = ({ 
  title = "Ready to Transform Your Business?",
  subtitle = "Join hundreds of successful companies that have accelerated their growth with GrowMate. Let's discuss how we can help you achieve your business goals.",
  primaryButton = { text: "Get Started Today", link: "/contact" },
  secondaryButton = { text: "Schedule a Call", link: "tel:+94786621310" },
  background = "primary" // primary, secondary, or gradient
}) => {
  return (
    <section className={`cta-section cta-${background}`}>
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">{title}</h2>
            <p className="cta-subtitle">{subtitle}</p>
          </div>
          
          <div className="cta-actions">
            <Link to={primaryButton.link} className="btn btn-primary btn-lg">
              {primaryButton.text}
              <FiArrowRight />
            </Link>
            
            {secondaryButton && (
              <a 
                href={secondaryButton.link} 
                className="btn btn-secondary btn-lg"
                target={secondaryButton.link.startsWith('http') ? '_blank' : '_self'}
                rel={secondaryButton.link.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                <FiPhone />
                {secondaryButton.text}
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="cta-background">
        <div className="cta-shape cta-shape-1"></div>
        <div className="cta-shape cta-shape-2"></div>
        <div className="cta-shape cta-shape-3"></div>
      </div>
    </section>
  );
};

export default CTA;