import React from 'react';
import { FiPhone, FiMail, FiMessageSquare, FiClock } from 'react-icons/fi';
import './ContactCTA.css';

const ContactCTA = () => {
  return (
    <section className="contact-cta">
      <div className="container">
        <div className="cta-grid">
          <div className="cta-card">
            <div className="cta-icon primary"><FiPhone /></div>
            <div className="cta-content">
              <h4>Talk to a Specialist</h4>
              <p>Get answers fast. Average response time under 2 hours.</p>
              <a href="tel:+94786621310" className="btn btn-primary btn-sm">Call Now</a>
            </div>
          </div>

          <div className="cta-card">
            <div className="cta-icon secondary"><FiMail /></div>
            <div className="cta-content">
              <h4>Email Our Team</h4>
              <p>Share your goals and we’ll propose a plan within 24 hours.</p>
              <a href="mailto:danujaadikari2001@gmail.com" className="btn btn-secondary btn-sm">Send Email</a>
            </div>
          </div>

          <div className="cta-card">
            <div className="cta-icon accent"><FiMessageSquare /></div>
            <div className="cta-content">
              <h4>WhatsApp Chat</h4>
              <p>Quick questions? We’re available on WhatsApp.</p>
              <a href="https://wa.me/94786621310" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">Open Chat</a>
            </div>
          </div>

          <div className="cta-card hours">
            <div className="cta-icon"><FiClock /></div>
            <div className="cta-content">
              <h4>Business Hours</h4>
              <ul>
                <li>Mon - Fri: 9:00 AM – 6:00 PM</li>
                <li>Sat: 10:00 AM – 4:00 PM</li>
                <li>Time Zone: GMT+5:30</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;