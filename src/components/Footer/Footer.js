import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/about#team' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' }
    ],
    services: [
      { name: 'Business Consulting', path: '/services#consulting' },
      { name: 'Digital Marketing', path: '/services#marketing' },
      { name: 'Web Development', path: '/services#development' },
      { name: 'Growth Strategy', path: '/services#strategy' }
    ],
    resources: [
      { name: 'Blog', path: '/blog' },
      { name: 'Case Studies', path: '/portfolio' },
      { name: 'FAQs', path: '/faq' },
      { name: 'Support', path: '/support' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
      { name: 'Sitemap', path: '/sitemap' }
    ]
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      text: 'danujaadikari2001@gmail.com',
      link: 'mailto:danujaadikari2001@gmail.com'
    },
    {
      icon: <FiPhone />,
      text: '+94 78 662 1310',
      link: 'tel:+94786621310'
    },
    {
      icon: <FiMapPin />,
      text: 'Colombo, Sri Lanka',
      link: 'https://maps.google.com/search/Colombo+Sri+Lanka'
    }
  ];

  const socialLinks = [
    { icon: <FiFacebook />, url: 'https://facebook.com/growmate', label: 'Facebook' },
    { icon: <FiTwitter />, url: 'https://twitter.com/growmate', label: 'Twitter' },
    { icon: <FiInstagram />, url: 'https://instagram.com/growmate', label: 'Instagram' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/company/growmate', label: 'LinkedIn' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section company-info">
            <Link to="/" className="footer-logo">
              <span className="logo-text">GrowMate</span>
            </Link>
            <p className="company-description">
              Empowering businesses to achieve sustainable growth through innovative strategies, 
              cutting-edge technology, and expert consulting services.
            </p>
            
            {/* Contact Information */}
            <div className="contact-info">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.link}
                  className="contact-item"
                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <span className="contact-icon">{item.icon}</span>
                  <span className="contact-text">{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="footer-links">
            <div className="footer-section">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-list">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-list">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Resources</h4>
              <ul className="footer-list">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-list">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="footer-section newsletter">
            <h4 className="footer-heading">Stay Updated</h4>
            <p className="newsletter-description">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-primary newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} GrowMate. All rights reserved.</p>
              <p className="developer-credit">Developed by: Danuja Adikari</p>
            </div>
            
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;