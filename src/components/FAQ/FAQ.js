import React, { useState } from 'react';
import { FiPlus, FiMinus, FiHelpCircle } from 'react-icons/fi';
import './FAQ.css';

const FAQ_DATA = [
  {
    id: 1,
    question: "How long does it typically take to see results?",
    answer: "Results vary by service type and business size. For digital marketing, you'll typically see initial improvements within 30-60 days, with significant growth by month 3. Business consulting shows measurable impact within 60-90 days. Web development projects deliver immediate improvements upon launch."
  },
  {
    id: 2,
    question: "Do you work with businesses in my industry?",
    answer: "Yes! We've successfully worked with businesses across 50+ industries including technology, healthcare, retail, manufacturing, professional services, and more. Our methodology is adaptable to any business model and market sector."
  },
  {
    id: 3,
    question: "What makes your approach different from other agencies?",
    answer: "Our data-driven methodology focuses on measurable ROI rather than vanity metrics. We combine strategic consulting with hands-on implementation, providing both the 'what' and the 'how'. Every client gets a dedicated growth specialist and transparent reporting."
  },
  {
    id: 4,
    question: "Can I upgrade or downgrade my plan at any time?",
    answer: "Absolutely! You can upgrade immediately to access additional features. Downgrades take effect at your next billing cycle. We'll help you transition smoothly and ensure no disruption to your ongoing campaigns."
  },
  {
    id: 5,
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, all our packages include post-launch support. The duration varies by plan - Starter includes 30 days, Professional includes 90 days, and Enterprise includes 6 months. Extended support packages are available."
  },
  {
    id: 6,
    question: "What if I'm not satisfied with the results?",
    answer: "We offer a 30-day money-back guarantee on all new engagements. If you're not completely satisfied within the first month, we'll refund your investment. Our 98% client satisfaction rate speaks to our commitment to your success."
  },
  {
    id: 7,
    question: "Do you work with international clients?",
    answer: "Yes, we work with clients globally. Our team operates across multiple time zones and we're experienced in various market regulations. We adapt our strategies to local market conditions and cultural preferences."
  },
  {
    id: 8,
    question: "How do you measure and report on progress?",
    answer: "We provide detailed analytics through custom dashboards showing key metrics like revenue growth, lead generation, website performance, and ROI. You'll receive regular reports (weekly or monthly) plus real-time access to your performance data."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([1])); // First item open by default

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="faq-section">
      <div className="container">
        {/* Header */}
        <div className="faq-header">
          <span className="section-badge">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Get answers to common questions about our services, process, and pricing. 
            Can't find what you're looking for? Contact us for personalized assistance.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="faq-content">
          <div className="faq-list">
            {FAQ_DATA.map((item) => (
              <div 
                key={item.id} 
                className={`faq-item ${openItems.has(item.id) ? 'active' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={openItems.has(item.id)}
                >
                  <span className="question-text">{item.question}</span>
                  <span className="faq-icon">
                    {openItems.has(item.id) ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>
                
                <div className={`faq-answer ${openItems.has(item.id) ? 'open' : ''}`}>
                  <div className="answer-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Card */}
          <div className="faq-contact-card">
            <div className="contact-icon">
              <FiHelpCircle />
            </div>
            <h3>Still have questions?</h3>
            <p>
              Our team is here to help. Schedule a free consultation to discuss 
              your specific needs and get personalized answers.
            </p>
            <div className="contact-actions">
              <button className="btn btn-primary">Schedule Call</button>
              <button className="btn btn-secondary">Send Message</button>
            </div>
            
            <div className="contact-stats">
              <div className="stat">
                <span className="stat-number">&lt; 2hrs</span>
                <span className="stat-label">Avg Response Time</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;