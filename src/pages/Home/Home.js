import React from 'react';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import DevelopmentProcess from '../../components/Development/DevelopmentProcess';
import About from '../../components/About/About';
import Portfolio from '../../components/Portfolio/Portfolio';
import Testimonials from '../../components/Testimonials/Testimonials';
import FeaturedNews from '../../components/FeaturedNews/FeaturedNews';
import CTA from '../../components/CTA/CTA';
import './Home.css';

const Home = () => {
  return (
    <div className="page-wrapper">
      <Hero />
      <Services />
  <DevelopmentProcess />
      <About />
      <Portfolio />
      <Testimonials />
      <FeaturedNews />
      <CTA />
    </div>
  );
};

export default Home;