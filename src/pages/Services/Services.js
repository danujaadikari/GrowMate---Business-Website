import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import ServicesList from '../../components/ServicesList/ServicesList';
import PricingSection from '../../components/PricingSection/PricingSection';
import ProcessSection from '../../components/ProcessSection/ProcessSection';
import CTA from '../../components/CTA/CTA';
import './Services.css';

const Services = () => {
  return (
    <div className="page-wrapper">
      <PageHeader 
        title="Our Services"
        subtitle="Comprehensive business solutions designed to accelerate your growth and maximize your potential"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' }
        ]}
      />
      <ServicesList />
      <ProcessSection />
      <PricingSection />
      <CTA />
    </div>
  );
};

export default Services;