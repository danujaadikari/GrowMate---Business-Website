import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiMessageSquare, FiTrendingUp, FiDollarSign, FiUsers, FiStar } from 'react-icons/fi';
import './CaseStudies.css';

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      company: "TechMart Solutions",
      industry: "E-Commerce",
      challenge: "Legacy platform couldn't handle growing traffic, resulting in lost sales and poor user experience during peak seasons.",
      solution: "Built a modern, scalable e-commerce platform with microservices architecture, CDN integration, and optimized checkout flow.",
      results: [
        { icon: <FiDollarSign />, label: "Revenue Growth", value: "+250%" },
        { icon: <FiTrendingUp />, label: "Conversion Rate", value: "+180%" },
        { icon: <FiUsers />, label: "Traffic Handled", value: "10x more" },
        { icon: <FiStar />, label: "Customer Rating", value: "4.8/5" }
      ],
      testimonial: {
        quote: "GrowMate transformed our online business. The new platform not only handles our traffic seamlessly but has increased our conversion rate dramatically. Best investment we've made.",
        author: "Sarah Johnson",
        role: "CEO, TechMart Solutions",
        avatar: "https://i.pravatar.cc/150?img=5"
      },
      timeline: "4 months",
      tags: ["React", "Node.js", "AWS", "MongoDB"]
    },
    {
      id: 2,
      company: "CloudSync Pro",
      industry: "SaaS",
      challenge: "New product struggling to gain traction in competitive market with minimal brand awareness and lead generation.",
      solution: "Executed comprehensive digital marketing strategy including SEO, content marketing, PPC campaigns, and strategic partnerships.",
      results: [
        { icon: <FiUsers />, label: "Qualified Leads", value: "5,000+" },
        { icon: <FiDollarSign />, label: "Marketing ROI", value: "400%" },
        { icon: <FiTrendingUp />, label: "Trial Signups", value: "+1,200" },
        { icon: <FiStar />, label: "Brand Awareness", value: "+500%" }
      ],
      testimonial: {
        quote: "The team's strategic approach to our launch was phenomenal. We went from zero to hero in our market segment within 6 months. Their expertise in SaaS marketing is unmatched.",
        author: "Michael Chen",
        role: "Founder & CTO, CloudSync Pro",
        avatar: "https://i.pravatar.cc/150?img=12"
      },
      timeline: "6 months",
      tags: ["SEO", "Content Marketing", "PPC", "Analytics"]
    },
    {
      id: 3,
      company: "StartupX Technologies",
      industry: "Technology",
      challenge: "Fast-growing startup needed strategic guidance to scale operations, secure funding, and establish market position.",
      solution: "Provided end-to-end business consulting including market analysis, financial modeling, operational optimization, and investor pitch preparation.",
      results: [
        { icon: <FiTrendingUp />, label: "Revenue Growth", value: "+350%" },
        { icon: <FiDollarSign />, label: "ARR Achieved", value: "$2M" },
        { icon: <FiUsers />, label: "Team Growth", value: "15 → 45" },
        { icon: <FiStar />, label: "Funding Raised", value: "Series A" }
      ],
      testimonial: {
        quote: "GrowMate was instrumental in our journey from seed to Series A. Their strategic insights, operational expertise, and hands-on support helped us scale efficiently and attract top-tier investors.",
        author: "Emily Rodriguez",
        role: "CEO, StartupX Technologies",
        avatar: "https://i.pravatar.cc/150?img=9"
      },
      timeline: "12 months",
      tags: ["Business Strategy", "Operations", "Fundraising", "Scaling"]
    }
  ];

  const currentCase = caseStudies[activeCase];

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="case-studies-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="heading-lg">Featured Case Studies</h2>
          <p className="body-lg text-secondary">
            Deep dive into how we've helped businesses achieve remarkable growth
          </p>
        </div>

        <div className="case-study-viewer">
          <div className="case-study-card">
            <div className="case-header">
              <div className="case-company-info">
                <h3>{currentCase.company}</h3>
                <span className="industry-badge">{currentCase.industry}</span>
              </div>
              <div className="case-meta">
                <span className="timeline">
                  <FiTrendingUp />
                  {currentCase.timeline}
                </span>
              </div>
            </div>

            <div className="case-content">
              <div className="case-section">
                <h4>The Challenge</h4>
                <p>{currentCase.challenge}</p>
              </div>

              <div className="case-section">
                <h4>Our Solution</h4>
                <p>{currentCase.solution}</p>
              </div>

              <div className="case-results">
                <h4>Key Results</h4>
                <div className="results-grid">
                  {currentCase.results.map((result, idx) => (
                    <div key={idx} className="result-card">
                      <div className="result-icon">{result.icon}</div>
                      <div className="result-value">{result.value}</div>
                      <div className="result-label">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="case-testimonial">
                <FiMessageSquare className="quote-icon" />
                <blockquote>{currentCase.testimonial.quote}</blockquote>
                <div className="testimonial-author">
                  <img src={currentCase.testimonial.avatar} alt={currentCase.testimonial.author} />
                  <div>
                    <div className="author-name">{currentCase.testimonial.author}</div>
                    <div className="author-role">{currentCase.testimonial.role}</div>
                  </div>
                </div>
              </div>

              <div className="case-tags">
                {currentCase.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="case-navigation">
            <button onClick={prevCase} className="nav-btn" aria-label="Previous case study">
              <FiChevronLeft />
            </button>
            <div className="case-indicators">
              {caseStudies.map((_, idx) => (
                <button
                  key={idx}
                  className={`indicator ${activeCase === idx ? 'active' : ''}`}
                  onClick={() => setActiveCase(idx)}
                  aria-label={`Go to case study ${idx + 1}`}
                />
              ))}
            </div>
            <button onClick={nextCase} className="nav-btn" aria-label="Next case study">
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;