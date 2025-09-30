import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import PortfolioGrid from '../../components/PortfolioGrid/PortfolioGrid';
import CaseStudies from '../../components/CaseStudies/CaseStudies';
import CTA from '../../components/CTA/CTA';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="page-wrapper">
      <PageHeader 
        title="Our Portfolio"
        subtitle="Discover the success stories and transformative results we've achieved for our clients"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Portfolio', path: '/portfolio' }
        ]}
      />
      <PortfolioGrid />
      <CaseStudies />
      <CTA />
    </div>
  );
};

export default Portfolio;