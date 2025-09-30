import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import TeamSection from '../../components/TeamSection/TeamSection';
import ValueSection from '../../components/ValueSection/ValueSection';
import StorySection from '../../components/StorySection/StorySection';
import CTA from '../../components/CTA/CTA';
import './About.css';

const About = () => {
  return (
    <div className="page-wrapper">
      <PageHeader 
        title="About GrowMate"
        subtitle="Empowering businesses to reach their full potential through innovative strategies and expert guidance"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' }
        ]}
      />
      <StorySection />
      <ValueSection />
      <TeamSection />
      <CTA />
    </div>
  );
};

export default About;