import React from 'react';
import { FiTarget, FiEye, FiHeart } from 'react-icons/fi';
import './StorySection.css';

const StorySection = () => {
  const timeline = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Founded with a vision to help small businesses compete in the digital age. Started with just 3 team members and a dream.'
    },
    {
      year: '2020',
      title: 'Rapid Growth',
      description: 'Expanded our services to include full-stack development and digital marketing. Reached 50+ happy clients milestone.'
    },
    {
      year: '2022',
      title: 'Innovation Hub',
      description: 'Launched our AI-powered analytics platform and established partnerships with leading technology providers.'
    },
    {
      year: '2024',
      title: 'Global Impact',
      description: 'Serving 200+ businesses worldwide with a team of 30+ experts. Recognized as a top business growth agency.'
    }
  ];

  return (
    <section className="story-section">
      {/* Our Story */}
      <div className="container">
        <div className="story-content">
          <div className="story-text">
            <h2 className="heading-lg">Our Story</h2>
            <p className="body-lg">
              GrowMate was born from a simple observation: talented entrepreneurs with great ideas 
              were struggling to navigate the complex digital landscape. In 2018, our founders came 
              together with a mission to bridge this gap.
            </p>
            <p className="body-lg">
              What started as a small consultancy has evolved into a full-service business growth 
              partner. We've helped hundreds of businesses transform their digital presence, streamline 
              operations, and achieve sustainable growth.
            </p>
            <p className="body-lg">
              Today, we're proud to be a trusted partner for businesses ranging from startups to 
              established enterprises, delivering innovative solutions that drive real results.
            </p>
          </div>
          <div className="story-image">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
              alt="GrowMate Team"
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-section">
          <h3 className="heading-md text-center">Our Journey</h3>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h4 className="heading-sm">{item.title}</h4>
                  <p className="body-md">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission, Vision, Values Overview */}
        <div className="mvv-cards">
          <div className="mvv-card">
            <div className="mvv-icon">
              <FiTarget />
            </div>
            <h4 className="heading-sm">Our Mission</h4>
            <p className="body-md">
              To empower businesses with innovative strategies, cutting-edge technology, and expert 
              guidance that drives measurable growth and long-term success.
            </p>
          </div>
          <div className="mvv-card">
            <div className="mvv-icon">
              <FiEye />
            </div>
            <h4 className="heading-sm">Our Vision</h4>
            <p className="body-md">
              To be the world's most trusted business growth partner, known for transforming ambitious 
              ideas into thriving enterprises through innovation and excellence.
            </p>
          </div>
          <div className="mvv-card">
            <div className="mvv-icon">
              <FiHeart />
            </div>
            <h4 className="heading-sm">Our Passion</h4>
            <p className="body-md">
              We're passionate about seeing our clients succeed. Every project is an opportunity to 
              make a real difference in someone's business and life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;