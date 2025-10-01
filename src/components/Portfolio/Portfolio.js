import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio-section section-padding">
      <div className="container">
        <div className="portfolio-header text-center">
          <h2 className="heading-lg">Our Portfolio</h2>
          <p className="body-lg text-secondary">
            Recent projects that showcase our expertise and results
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;