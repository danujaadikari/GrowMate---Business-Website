import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlay, FiTrendingUp, FiUsers, FiAward } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const stats = [
    { icon: <FiUsers />, number: '500+', label: 'Happy Clients' },
    { icon: <FiTrendingUp />, number: '200%', label: 'Average Growth' },
    { icon: <FiAward />, number: '50+', label: 'Awards Won' }
  ];

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          {/* Main Content */}
          <div className="hero-main">
            <div className="hero-badge">
              <span className="badge-text">🚀 #1 Business Growth Platform</span>
            </div>
            
            <h1 className="hero-title">
              Accelerate Your Business Growth with
              <span className="title-highlight"> Expert Solutions</span>
            </h1>
            
            <p className="hero-description">
              Transform your business potential into measurable success. We provide cutting-edge strategies, 
              innovative technologies, and expert consulting to help your company achieve sustainable growth 
              and dominate your market.
            </p>
            
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Started Today
                <FiArrowRight />
              </Link>
              
              <button className="btn-play">
                <div className="play-icon">
                  <FiPlay />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-content">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hero Image/Illustration */}
          <div className="hero-visual">
            <div className="hero-image-placeholder">
              <div className="floating-card card-1">
                <div className="card-icon">📈</div>
                <div className="card-text">Growth Analytics</div>
              </div>
              
              <div className="floating-card card-2">
                <div className="card-icon">💡</div>
                <div className="card-text">Innovation</div>
              </div>
              
              <div className="floating-card card-3">
                <div className="card-icon">🎯</div>
                <div className="card-text">Strategy</div>
              </div>
              
              <div className="hero-main-visual">
                <div className="visual-circle">
                  <span className="visual-text">GrowMate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;