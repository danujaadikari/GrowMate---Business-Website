import React from 'react';
import { FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import './TeamSection.css';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      bio: '15+ years of experience in business strategy and digital transformation. Passionate about helping businesses reach their full potential.',
      linkedin: '#',
      twitter: '#',
      email: 'sarah@growmate.com'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Tech visionary with expertise in AI, cloud architecture, and scalable solutions. Led engineering teams at top tech companies.',
      linkedin: '#',
      twitter: '#',
      email: 'michael@growmate.com'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Marketing',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      bio: 'Digital marketing expert specializing in growth hacking, SEO, and content strategy. Drives measurable results for clients.',
      linkedin: '#',
      twitter: '#',
      email: 'emily@growmate.com'
    },
    {
      name: 'David Thompson',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      bio: 'Full-stack developer with a passion for clean code and innovative solutions. Expert in React, Node.js, and cloud technologies.',
      linkedin: '#',
      twitter: '#',
      email: 'david@growmate.com'
    },
    {
      name: 'Lisa Wang',
      role: 'Design Director',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
      bio: 'Award-winning designer focused on creating intuitive, beautiful user experiences. Believes great design drives business success.',
      linkedin: '#',
      twitter: '#',
      email: 'lisa@growmate.com'
    },
    {
      name: 'James Mitchell',
      role: 'Business Consultant',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Strategic advisor helping businesses optimize operations and scale efficiently. MBA with 12+ years consulting experience.',
      linkedin: '#',
      twitter: '#',
      email: 'james@growmate.com'
    }
  ];

  return (
    <section className="team-section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-lg">Meet Our Team</h2>
          <p className="body-lg">
            A diverse group of experts passionate about driving your success
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="team-overlay">
                  <div className="team-social">
                    <a href={member.linkedin} className="social-link" aria-label="LinkedIn">
                      <FiLinkedin />
                    </a>
                    <a href={member.twitter} className="social-link" aria-label="Twitter">
                      <FiTwitter />
                    </a>
                    <a href={`mailto:${member.email}`} className="social-link" aria-label="Email">
                      <FiMail />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div className="join-team-cta">
          <div className="join-content">
            <h3 className="heading-md">Join Our Growing Team</h3>
            <p className="body-lg">
              We're always looking for talented individuals who share our passion for 
              innovation and excellence. If you're ready to make an impact, we'd love to hear from you.
            </p>
            <a href="/contact" className="btn btn-primary">
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;