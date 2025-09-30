import React, { useState } from 'react';
import { FiSend, FiCheck } from 'react-icons/fi';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Business Consulting',
    'Digital Marketing',
    'Web Development',
    'Growth Strategy',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="form-success">
        <div className="success-icon">
          <FiCheck />
        </div>
        <h3>Thank You!</h3>
        <p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="contact-form">
      <div className="form-header">
        <h2>Get Started Today</h2>
        <p>Ready to transform your business? Fill out the form below and let's discuss your growth potential.</p>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="company" className="form-label">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your company name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="service" className="form-label">Service of Interest</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            rows="5"
            required
            placeholder="Tell us about your project and goals..."
          />
        </div>

        <button 
          type="submit" 
          className={`btn btn-primary btn-lg form-submit ${isSubmitting ? 'loading' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="spinner"></div>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <FiSend />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;