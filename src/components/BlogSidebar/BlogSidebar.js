import React from 'react';
import { FiCalendar, FiArrowRight, FiTag, FiTrendingUp } from 'react-icons/fi';
import './BlogSidebar.css';

const BlogSidebar = () => {
  const recentPosts = [
    {
      id: 1,
      title: '10 Essential Digital Marketing Strategies for 2025',
      date: '2025-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=150&fit=crop'
    },
    {
      id: 2,
      title: 'The Future of Web Development: Trends to Watch',
      date: '2025-10-18',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=150&fit=crop'
    },
    {
      id: 3,
      title: 'Building a Strong Brand Identity',
      date: '2025-10-15',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=150&fit=crop'
    },
    {
      id: 4,
      title: 'How AI is Transforming Business Operations',
      date: '2025-10-12',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=150&fit=crop'
    }
  ];

  const popularTags = [
    'Digital Marketing',
    'Web Development',
    'SEO',
    'Branding',
    'AI',
    'Leadership',
    'E-commerce',
    'Design',
    'Technology',
    'Analytics',
    'Social Media',
    'Strategy'
  ];

  const categories = [
    { name: 'Marketing', count: 15 },
    { name: 'Technology', count: 12 },
    { name: 'Business', count: 10 },
    { name: 'Development', count: 8 },
    { name: 'Design', count: 6 },
    { name: 'Branding', count: 4 }
  ];

  return (
    <div className="blog-sidebar">
      {/* Newsletter Signup */}
      <div className="sidebar-widget newsletter-widget">
        <h3 className="widget-title">Subscribe to Newsletter</h3>
        <p className="widget-text">Get the latest articles and insights delivered to your inbox</p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Your email address"
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-btn">
            Subscribe
            <FiArrowRight />
          </button>
        </form>
      </div>

      {/* Recent Posts */}
      <div className="sidebar-widget">
        <h3 className="widget-title">Recent Posts</h3>
        <div className="recent-posts">
          {recentPosts.map((post) => (
            <div key={post.id} className="recent-post-item">
              <div className="recent-post-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="recent-post-content">
                <h4 className="recent-post-title">{post.title}</h4>
                <div className="recent-post-date">
                  <FiCalendar />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="sidebar-widget">
        <h3 className="widget-title">Categories</h3>
        <div className="categories-list">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <div className="category-name">
                <FiTrendingUp />
                {category.name}
              </div>
              <span className="category-count">{category.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="sidebar-widget">
        <h3 className="widget-title">Popular Tags</h3>
        <div className="tags-cloud">
          {popularTags.map((tag, index) => (
            <button key={index} className="tag-btn">
              <FiTag />
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* CTA Widget */}
      <div className="sidebar-widget cta-widget">
        <div className="cta-content">
          <h3 className="widget-title">Need Expert Advice?</h3>
          <p className="widget-text">
            Our team is ready to help you grow your business with proven strategies
          </p>
          <a href="/contact" className="cta-btn">
            Get In Touch
            <FiArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;