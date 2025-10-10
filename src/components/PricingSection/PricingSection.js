import React, { useState } from 'react';
import { FiCheck, FiX, FiStar, FiZap, FiTrendingUp, FiUsers } from 'react-icons/fi';
import './PricingSection.css';

const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Starter Package',
    icon: <FiTrendingUp />,
    tagline: 'Perfect for small businesses',
    monthlyPrice: 1500,
    yearlyPrice: 15000,
    description: 'Essential growth tools to kickstart your business success.',
    features: [
      { name: 'Business Strategy Consultation', included: true },
      { name: 'Basic Digital Marketing Setup', included: true },
      { name: 'Website Analysis & Recommendations', included: true },
      { name: 'Monthly Performance Reports', included: true },
      { name: 'Email Support', included: true },
      { name: 'Advanced Analytics Dashboard', included: false },
      { name: 'Dedicated Account Manager', included: false },
      { name: 'Custom Development', included: false },
      { name: '24/7 Priority Support', included: false }
    ],
    popular: false,
    cta: 'Start Growing'
  },
  {
    id: 'professional',
    name: 'Professional Package',
    icon: <FiZap />,
    tagline: 'Most popular choice',
    monthlyPrice: 2500,
    yearlyPrice: 25000,
    description: 'Comprehensive solutions for established businesses ready to scale.',
    features: [
      { name: 'Complete Growth Strategy', included: true },
      { name: 'Full Digital Marketing Suite', included: true },
      { name: 'Custom Website Development', included: true },
      { name: 'Weekly Performance Reports', included: true },
      { name: 'Priority Phone & Email Support', included: true },
      { name: 'Advanced Analytics Dashboard', included: true },
      { name: 'Dedicated Account Manager', included: true },
      { name: 'A/B Testing & Optimization', included: true },
      { name: 'Custom Integrations', included: false }
    ],
    popular: true,
    cta: 'Go Professional'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Package',
    icon: <FiUsers />,
    tagline: 'For large organizations',
    monthlyPrice: 5000,
    yearlyPrice: 50000,
    description: 'Enterprise-grade solutions with custom development and dedicated support.',
    features: [
      { name: 'Enterprise Strategy Consulting', included: true },
      { name: 'Omnichannel Marketing Platform', included: true },
      { name: 'Custom Application Development', included: true },
      { name: 'Real-time Analytics & Reporting', included: true },
      { name: '24/7 Dedicated Support Team', included: true },
      { name: 'Advanced Analytics Dashboard', included: true },
      { name: 'Dedicated Account Manager', included: true },
      { name: 'Custom Development & Integrations', included: true },
      { name: 'White-label Solutions', included: true }
    ],
    popular: false,
    cta: 'Contact Sales'
  }
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const formatPrice = (monthly, yearly) => {
    if (isYearly) {
      return {
        price: yearly.toLocaleString(),
        period: 'year',
        savings: Math.round(((monthly * 12 - yearly) / (monthly * 12)) * 100)
      };
    }
    return {
      price: monthly.toLocaleString(),
      period: 'month',
      savings: 0
    };
  };

  return (
    <section className="pricing-section">
      <div className="container">
        {/* Header */}
        <div className="pricing-header">
          <span className="section-badge">Pricing Plans</span>
          <h2 className="section-title">Choose Your Growth Path</h2>
          <p className="section-description">
            Transparent pricing with no hidden fees. All plans include our core growth methodology 
            and dedicated support to ensure your success.
          </p>
          
          {/* Billing Toggle */}
          <div className="billing-toggle">
            <span className={!isYearly ? 'active' : ''}>Monthly</span>
            <button 
              className={`toggle-switch ${isYearly ? 'yearly' : ''}`}
              onClick={() => setIsYearly(!isYearly)}
            >
              <span className="toggle-slider"></span>
            </button>
            <span className={isYearly ? 'active' : ''}>
              Yearly 
              <span className="savings-badge">Save 17%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {PRICING_PLANS.map((plan) => {
            const pricing = formatPrice(plan.monthlyPrice, plan.yearlyPrice);
            
            return (
              <div 
                key={plan.id} 
                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              >
                {plan.popular && (
                  <div className="popular-badge">
                    <FiStar />
                    Most Popular
                  </div>
                )}
                
                <div className="plan-header">
                  <div className="plan-icon">{plan.icon}</div>
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-tagline">{plan.tagline}</p>
                </div>
                
                <div className="plan-pricing">
                  <div className="price-container">
                    <span className="currency">$</span>
                    <span className="price">{pricing.price}</span>
                    <span className="period">/{pricing.period}</span>
                  </div>
                  {pricing.savings > 0 && (
                    <div className="savings">Save {pricing.savings}% annually</div>
                  )}
                </div>
                
                <p className="plan-description">{plan.description}</p>
                
                <ul className="features-list">
                  {plan.features.map((feature, index) => (
                    <li key={index} className={feature.included ? 'included' : 'excluded'}>
                      {feature.included ? (
                        <FiCheck className="feature-icon included" />
                      ) : (
                        <FiX className="feature-icon excluded" />
                      )}
                      <span>{feature.name}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`plan-cta ${plan.popular ? 'primary' : 'secondary'}`}>
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="pricing-footer">
          <div className="guarantee-box">
            <h4>🛡️ 30-Day Money-Back Guarantee</h4>
            <p>Try our services risk-free. If you're not completely satisfied, we'll refund your investment.</p>
          </div>
          
          <div className="pricing-faqs">
            <h4>💬 Have Questions?</h4>
            <p>Book a free 15-minute consultation to discuss your specific needs and find the perfect plan.</p>
            <button className="consultation-btn">Schedule Free Consultation</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;