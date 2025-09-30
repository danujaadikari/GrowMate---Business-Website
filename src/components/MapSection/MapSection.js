import React from 'react';
import './MapSection.css';

const MapSection = () => {
  return (
    <section className="map-section">
      <div className="map-container">
        <div className="map-placeholder">
          <div className="map-content">
            <h3>Find Us Here</h3>
            <p>Colombo, Sri Lanka<br />Available for Remote Consultations</p>
            <a href="https://maps.google.com/search/Colombo+Sri+Lanka" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View Location
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;