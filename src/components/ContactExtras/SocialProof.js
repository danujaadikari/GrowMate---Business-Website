import React from 'react';
import { FiStar } from 'react-icons/fi';
import './SocialProof.css';

const SocialProof = () => {
  const logos = ['Acme', 'Globex', 'Umbrella', 'Stark', 'Wayne'];
  return (
    <section className="social-proof">
      <div className="container">
        <div className="social-proof-inner">
          <div className="ratings">
            <div className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <FiStar key={i} />
              ))}
            </div>
            <p>Rated 4.9/5 by 120+ clients</p>
          </div>
          <div className="logos">
            {logos.map((name) => (
              <div key={name} className="logo-item">{name}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;