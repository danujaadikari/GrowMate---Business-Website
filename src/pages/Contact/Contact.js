import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import MapSection from '../../components/MapSection/MapSection';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-wrapper">
      <PageHeader 
        title="Contact Us"
        subtitle="Ready to transform your business? Get in touch with our team of experts today"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' }
        ]}
      />
      
      <section className="section-padding">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form-section">
              <ContactForm />
            </div>
            <div className="contact-info-section">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      
      <MapSection />
    </div>
  );
};

export default Contact;