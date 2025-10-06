import React from 'react';
import { FiTarget, FiLayers, FiPenTool, FiCode, FiRocket, FiTrendingUp } from 'react-icons/fi';
import './DevelopmentProcess.css';

const STEPS = [
  {
    id: 1,
    title: 'Discover',
    icon: <FiTarget />,
    tagline: 'Understand & Align',
    description: 'We start by understanding your business goals, audience, and challenges to ensure strategic alignment.'
  },
  {
    id: 2,
    title: 'Plan',
    icon: <FiLayers />,
    tagline: 'Strategize & Architect',
    description: 'We define scope, success metrics, technical architecture, and a phased roadmap for delivery.'
  },
  {
    id: 3,
    title: 'Design',
    icon: <FiPenTool />,
    tagline: 'Experience & Identity',
    description: 'Crafting intuitive, accessible, and on-brand user experiences with scalable component systems.'
  },
  {
    id: 4,
    title: 'Develop',
    icon: <FiCode />,
    tagline: 'Build & Integrate',
    description: 'We implement clean, testable code using modern React practices, performance, and security in mind.'
  },
  {
    id: 5,
    title: 'Launch',
    icon: <FiRocket />,
    tagline: 'Deploy & Stabilize',
    description: 'Smooth deployment pipeline with QA, accessibility checks, and performance optimization.'
  },
  {
    id: 6,
    title: 'Optimize',
    icon: <FiTrendingUp />,
    tagline: 'Iterate & Grow',
    description: 'Post-launch analytics, A/B testing, SEO refinement, and continuous improvement cycles.'
  }
];

const DevelopmentProcess = () => {
  return (
    <section className="development-section">
      <div className="container">
        <div className="dev-header">
          <span className="section-badge">Our Process</span>
          <h2 className="section-title">How We Deliver Growth</h2>
          <p className="section-description">
            A structured, transparent, and data-informed process that ensures quality at every step—from idea to impact.
          </p>
        </div>

        <div className="dev-grid">
          {STEPS.map(step => (
            <div key={step.id} className="dev-card" style={{ '--step-index': step.id }}>
              <div className="dev-icon-wrapper">
                <div className="dev-icon">{step.icon}</div>
                <div className="dev-index">{String(step.id).padStart(2, '0')}</div>
              </div>
              <h3 className="dev-title">{step.title}</h3>
              <p className="dev-tagline">{step.tagline}</p>
              <p className="dev-description">{step.description}</p>
              <div className="dev-progress-bar">
                <span className="dev-progress-fill" />
              </div>
            </div>
          ))}
        </div>

        <div className="dev-footer-note">
          <p>
            Each phase feeds the next—allowing us to reduce risk, accelerate delivery, and stay aligned with measurable outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;