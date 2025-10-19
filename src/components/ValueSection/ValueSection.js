import React, { useState } from 'react';
import { 
  FiAward, 
  FiUsers, 
  FiZap, 
  FiShield, 
  FiTrendingUp, 
  FiHeart,
  FiSearch
} from 'react-icons/fi';
import './ValueSection.css';

const ValueSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const values = [
    {
      icon: <FiAward />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, never settling for mediocrity. Our commitment to quality ensures exceptional results for every client.'
    },
    {
      icon: <FiUsers />,
      title: 'Client-Centric',
      description: 'Your success is our success. We prioritize understanding your unique needs and delivering solutions that exceed expectations.'
    },
    {
      icon: <FiZap />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative thinking to provide forward-thinking solutions that keep you ahead of the competition.'
    },
    {
      icon: <FiShield />,
      title: 'Integrity',
      description: 'Transparency, honesty, and ethical practices are at the core of our business. We build trust through consistent, reliable service.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Growth Mindset',
      description: 'We believe in continuous improvement for ourselves and our clients. Every challenge is an opportunity to learn and grow.'
    },
    {
      icon: <FiHeart />,
      title: 'Passion',
      description: 'We love what we do, and it shows. Our enthusiasm drives us to go the extra mile and deliver results that make a real impact.'
    }
  ];

  // Filter values based on search term
  const filteredValues = values.filter(value => {
    const searchLower = searchTerm.toLowerCase();
    return (
      value.title.toLowerCase().includes(searchLower) ||
      value.description.toLowerCase().includes(searchLower)
    );
  });

  return (
    <section className="value-section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-lg">Our Core Values</h2>
          <p className="body-lg">
            These principles guide everything we do and define who we are as a company
          </p>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <div className="search-box">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search our values..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button 
                className="clear-search"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
          {searchTerm && (
            <p className="search-results-text">
              Found {filteredValues.length} value{filteredValues.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        <div className="values-grid">
          {filteredValues.length > 0 ? (
            filteredValues.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3 className="heading-sm">{value.title}</h3>
              <p className="body-md">{value.description}</p>
            </div>
          ))
          ) : (
            <div className="no-results">
              <p className="heading-sm">No values found</p>
              <p className="body-md">Try adjusting your search terms</p>
            </div>
          )}
        </div>

        {/* Our Commitment */}
        <div className="commitment-section">
          <div className="commitment-content">
            <h3 className="heading-md">Our Commitment to You</h3>
            <p className="body-lg">
              At GrowMate, we don't just work for you—we work with you. Every project is a 
              partnership built on trust, communication, and shared goals. We're committed to:
            </p>
            <ul className="commitment-list">
              <li>
                <span className="commitment-icon">✓</span>
                Delivering measurable results that drive real business growth
              </li>
              <li>
                <span className="commitment-icon">✓</span>
                Providing transparent communication throughout every project
              </li>
              <li>
                <span className="commitment-icon">✓</span>
                Staying on the cutting edge of technology and industry trends
              </li>
              <li>
                <span className="commitment-icon">✓</span>
                Building long-term partnerships based on mutual success
              </li>
              <li>
                <span className="commitment-icon">✓</span>
                Supporting your business with ongoing expertise and guidance
              </li>
            </ul>
          </div>
          <div className="commitment-image">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop" 
              alt="Team Commitment"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;