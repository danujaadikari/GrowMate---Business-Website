import React from 'react';
import './MapSection.css';

const MapSection = () => {
  return (
    <section className="map-section" aria-label="Our location on map">
      <div className="map-container">
        <iframe
          title="GrowMate Location - Colombo, Sri Lanka"
          className="map-embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Colombo%2C%20Sri%20Lanka&output=embed"
        />
        <noscript>
          <div className="map-fallback">
            <div className="map-content">
              <h3>Find Us Here</h3>
              <p>Colombo, Sri Lanka<br />Available for Remote Consultations</p>
              <a
                href="https://maps.google.com/search/Colombo+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Location
              </a>
            </div>
          </div>
        </noscript>
      </div>
    </section>
  );
};

export default MapSection;