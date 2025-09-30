import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import './ContactInfo.css';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <FiMail />,
      title: 'Email Us',
      details: ['danujaadikari2001@gmail.com', 'hello@growmate.com'],
      action: { text: 'Send Email', link: 'mailto:danujaadikari2001@gmail.com' }
    },
    {
      icon: <FiPhone />,
      title: 'Call Us',
      details: ['+94 78 662 1310', 'WhatsApp Available'],
      action: { text: 'Call Now', link: 'tel:+94786621310' }
    },
    {
      icon: <FiMapPin />,
      title: 'Visit Us',
      details: ['Colombo, Sri Lanka', 'Available for Remote Work'],
      action: { text: 'Get Directions', link: 'https://maps.google.com/search/Colombo+Sri+Lanka' }
    },
    {
      icon: <FiClock />,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      action: null
    }
  ];

  return (
    <div className="contact-info">
      <h3>Get in Touch</h3>
      <p>We're here to help you succeed. Reach out to us through any of these channels.</p>
      
      <div className="contact-details">
        {contactDetails.map((item, index) => (
          <div key={index} className="contact-detail-item">
            <div className="contact-detail-icon">{item.icon}</div>
            <div className="contact-detail-content">
              <h4>{item.title}</h4>
              {item.details.map((detail, idx) => (
                <p key={idx}>{detail}</p>
              ))}
              {item.action && (
                <a href={item.action.link} className="contact-action">
                  {item.action.text}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;