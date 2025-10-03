import React, { useState, useEffect, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar, FiPlay, FiQuote } from 'react-icons/fi';
import './Testimonials.css';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechStart Inc.',
      image: 'https://i.pravatar.cc/150?img=1',
      logo: 'https://via.placeholder.com/100x40/4F46E5/ffffff?text=TechStart',
      rating: 5,
      text: 'Working with GrowMate has been an absolute game-changer for our business. Their strategic insights and innovative approach helped us increase our revenue by 250% in just 6 months. The team is professional, responsive, and truly invested in our success.',
      videoUrl: null,
      date: '2024-09-15'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Marketing Director',
      company: 'Digital Solutions Co.',
      image: 'https://i.pravatar.cc/150?img=12',
      logo: 'https://via.placeholder.com/100x40/059669/ffffff?text=DigitalSol',
      rating: 5,
      text: 'The digital marketing strategies implemented by GrowMate exceeded all our expectations. Our online presence has grown exponentially, and we\'ve seen a 300% increase in qualified leads. Highly recommend their services!',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: '2024-08-22'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Founder',
      company: 'StartUp Hub',
      image: 'https://i.pravatar.cc/150?img=5',
      logo: 'https://via.placeholder.com/100x40/DC2626/ffffff?text=StartUpHub',
      rating: 5,
      text: 'GrowMate helped us transform our business model and reach new markets we never thought possible. Their consulting services are top-notch, and the ROI speaks for itself. Best investment we\'ve made!',
      videoUrl: null,
      date: '2024-07-10'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'COO',
      company: 'Global Enterprises',
      image: 'https://i.pravatar.cc/150?img=13',
      logo: 'https://via.placeholder.com/100x40/7C3AED/ffffff?text=GlobalEnt',
      rating: 5,
      text: 'Outstanding service from start to finish. The GrowMate team understood our needs perfectly and delivered solutions that were both practical and innovative. Our operational efficiency has improved dramatically.',
      videoUrl: null,
      date: '2024-06-18'
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      position: 'VP of Sales',
      company: 'SalesPro Ltd.',
      image: 'https://i.pravatar.cc/150?img=9',
      logo: 'https://via.placeholder.com/100x40/EA580C/ffffff?text=SalesPro',
      rating: 5,
      text: 'The growth strategies developed by GrowMate have been instrumental in scaling our sales operations. We\'ve doubled our client base and improved our conversion rates significantly. Couldn\'t be happier!',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: '2024-05-25'
    },
    {
      id: 6,
      name: 'James Wilson',
      position: 'Managing Partner',
      company: 'Wilson & Associates',
      image: 'https://i.pravatar.cc/150?img=14',
      logo: 'https://via.placeholder.com/100x40/0891B2/ffffff?text=Wilson+Co',
      rating: 5,
      text: 'Professional, knowledgeable, and results-driven. GrowMate has been an invaluable partner in our digital transformation journey. Their expertise has saved us time and money while delivering exceptional results.',
      videoUrl: null,
      date: '2024-04-12'
    }
  ];

  const totalSlides = testimonials.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handleVideoClick = (testimonialId) => {
    setActiveVideo(activeVideo === testimonialId ? null : testimonialId);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return (
      <div className="testimonial-stars">
        {[...Array(5)].map((_, index) => (
          <FiStar
            key={index}
            className={index < rating ? 'star-filled' : 'star-empty'}
          />
        ))}
      </div>
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div className="testimonials-header">
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-description">
            Don't just take our word for it - hear from some of our satisfied clients
            about their experience working with GrowMate.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="testimonial-carousel">
          <button
            className="carousel-nav carousel-nav-prev"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <FiChevronLeft />
          </button>

          <div className="testimonial-track">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${
                  index === currentSlide ? 'active' : ''
                } ${index < currentSlide ? 'prev' : ''} ${
                  index > currentSlide ? 'next' : ''
                }`}
              >
                <div className="testimonial-content">
                  {/* Quote Icon */}
                  <div className="quote-icon">
                    <FiQuote />
                  </div>

                  {/* Rating */}
                  {renderStars(testimonial.rating)}

                  {/* Testimonial Text */}
                  <p className="testimonial-text">{testimonial.text}</p>

                  {/* Video Testimonial Button */}
                  {testimonial.videoUrl && (
                    <div className="video-section">
                      {activeVideo === testimonial.id ? (
                        <div className="video-container">
                          <iframe
                            src={testimonial.videoUrl}
                            title={`Video testimonial from ${testimonial.name}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      ) : (
                        <button
                          className="video-trigger"
                          onClick={() => handleVideoClick(testimonial.id)}
                        >
                          <FiPlay className="play-icon" />
                          <span>Watch Video Testimonial</span>
                        </button>
                      )}
                    </div>
                  )}

                  {/* Client Info */}
                  <div className="client-info">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="client-avatar"
                    />
                    <div className="client-details">
                      <h4 className="client-name">{testimonial.name}</h4>
                      <p className="client-position">
                        {testimonial.position} at {testimonial.company}
                      </p>
                      <p className="testimonial-date">
                        {formatDate(testimonial.date)}
                      </p>
                    </div>
                    {testimonial.logo && (
                      <img
                        src={testimonial.logo}
                        alt={`${testimonial.company} logo`}
                        className="company-logo"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-nav carousel-nav-next"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <FiChevronRight />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">250%</div>
            <div className="stat-label">Average Growth</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;