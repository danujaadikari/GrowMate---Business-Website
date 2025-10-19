import React, { useState, useEffect, useRef } from 'react';
import { FiAward, FiTrendingUp, FiUsers, FiStar, FiSearch } from 'react-icons/fi';
import './AchievementsSection.css';

const AchievementsSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const statsRef = useRef(null);

  // Animated counter hook
  const useCountUp = (end, duration = 2000, shouldStart = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!shouldStart) return;
      
      let startTime;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, shouldStart]);

    return count;
  };

  // Intersection Observer to trigger animation
  useEffect(() => {
    const currentRef = statsRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  // Animated stats values
  const projectsCount = useCountUp(200, 2000, hasAnimated);
  const clientsCount = useCountUp(150, 2000, hasAnimated);
  const satisfactionCount = useCountUp(98, 2000, hasAnimated);
  const awardsCount = useCountUp(15, 2000, hasAnimated);

  const awards = [
    {
      year: '2024',
      title: 'Best Digital Agency',
      organization: 'Tech Excellence Awards',
      description: 'Recognized for outstanding innovation in digital transformation'
    },
    {
      year: '2023',
      title: 'Top Growth Partner',
      organization: 'Business Innovation Forum',
      description: 'Awarded for exceptional client growth and satisfaction'
    },
    {
      year: '2023',
      title: 'Excellence in Web Development',
      organization: 'Web Design Association',
      description: 'Honored for cutting-edge web solutions and user experience'
    },
    {
      year: '2022',
      title: 'Startup Supporter of the Year',
      organization: 'Entrepreneur Magazine',
      description: 'Celebrated for empowering startups to achieve their goals'
    }
  ];

  // Filter awards based on search term
  const filteredAwards = awards.filter(award => {
    const searchLower = searchTerm.toLowerCase();
    return (
      award.title.toLowerCase().includes(searchLower) ||
      award.organization.toLowerCase().includes(searchLower) ||
      award.description.toLowerCase().includes(searchLower) ||
      award.year.includes(searchLower)
    );
  });

  return (
    <section className="achievements-section">
      <div className="container">
        {/* Stats */}
        <div className="achievement-stats" ref={statsRef}>
          <div className="stat-item">
            <div className="stat-icon">
              <FiTrendingUp />
            </div>
            <div className="stat-number">{projectsCount}+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <FiUsers />
            </div>
            <div className="stat-number">{clientsCount}+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <FiStar />
            </div>
            <div className="stat-number">{satisfactionCount}%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <FiAward />
            </div>
            <div className="stat-number">{awardsCount}+</div>
            <div className="stat-label">Industry Awards</div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="awards-content">
          <div className="section-header">
            <h2 className="heading-lg">Awards & Recognition</h2>
            <p className="body-lg">
              Our commitment to excellence has been recognized by leading industry organizations
            </p>
          </div>

          {/* Search Bar */}
          <div className="search-container">
            <div className="search-box">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search awards by title, organization, or year..."
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
                Found {filteredAwards.length} award{filteredAwards.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>

          <div className="awards-grid">
            {filteredAwards.length > 0 ? (
              filteredAwards.map((award, index) => (
              <div key={index} className="award-card">
                <div className="award-year">{award.year}</div>
                <div className="award-icon">
                  <FiAward />
                </div>
                <h3 className="award-title">{award.title}</h3>
                <p className="award-org">{award.organization}</p>
                <p className="award-description">{award.description}</p>
              </div>
            ))
            ) : (
              <div className="no-results">
                <p className="heading-sm">No awards found</p>
                <p className="body-md">Try adjusting your search terms</p>
              </div>
            )}
          </div>
        </div>

        {/* Certifications */}
        <div className="certifications">
          <h3 className="heading-md text-center">Certifications & Partnerships</h3>
          <div className="cert-logos">
            <div className="cert-item">
              <div className="cert-badge">Google Partner</div>
            </div>
            <div className="cert-item">
              <div className="cert-badge">AWS Certified</div>
            </div>
            <div className="cert-item">
              <div className="cert-badge">Meta Business Partner</div>
            </div>
            <div className="cert-item">
              <div className="cert-badge">Shopify Expert</div>
            </div>
            <div className="cert-item">
              <div className="cert-badge">HubSpot Partner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
