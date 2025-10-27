import React from 'react';
import { FiCalendar, FiArrowRight, FiClock } from 'react-icons/fi';
import './FeaturedNews.css';

const FeaturedNews = () => {
  const featuredArticles = [
    {
      id: 1,
      title: '10 Essential Digital Marketing Strategies for 2025',
      excerpt: 'Discover the most effective digital marketing tactics that will help your business thrive in the evolving online landscape.',
      category: 'Marketing',
      date: '2025-10-20',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'The Future of Web Development: Trends to Watch',
      excerpt: 'Explore emerging technologies and frameworks that are shaping the future of web development.',
      category: 'Development',
      date: '2025-10-18',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      title: 'Building a Strong Brand Identity: A Complete Guide',
      excerpt: 'Learn how to create a memorable brand identity that resonates with your target audience.',
      category: 'Branding',
      date: '2025-10-15',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'
    },
    {
      id: 4,
      title: 'How AI is Transforming Business Operations',
      excerpt: 'Discover how artificial intelligence is revolutionizing business processes and operations.',
      category: 'Technology',
      date: '2025-10-12',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop'
    }
  ];

  return (
    <section className="featured-news-section">
      <div className="container">
        <div className="section-header">
          <div className="section-title-group">
            <h2 className="heading-lg">Latest News & Insights</h2>
            <p className="body-lg">
              Stay informed with expert tips, industry trends, and success stories
            </p>
          </div>
          <a href="/blog" className="view-all-btn">
            View All Articles
            <FiArrowRight />
          </a>
        </div>

        <div className="featured-news-grid">
          {/* Main Featured Article */}
          <div className="featured-main">
            <div className="featured-main-image">
              <img src={featuredArticles[0].image} alt={featuredArticles[0].title} />
              <div className="featured-badge">Featured</div>
            </div>
            <div className="featured-main-content">
              <div className="article-category-tag">{featuredArticles[0].category}</div>
              <h3 className="featured-title">{featuredArticles[0].title}</h3>
              <p className="featured-excerpt">{featuredArticles[0].excerpt}</p>
              <div className="featured-meta">
                <span className="meta-item">
                  <FiCalendar />
                  {new Date(featuredArticles[0].date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
                <span className="meta-item">
                  <FiClock />
                  {featuredArticles[0].readTime}
                </span>
              </div>
              <button className="read-article-btn">
                Read Article
                <FiArrowRight />
              </button>
            </div>
          </div>

          {/* Side Articles */}
          <div className="featured-side">
            {featuredArticles.slice(1).map((article) => (
              <div key={article.id} className="side-article">
                <div className="side-article-image">
                  <img src={article.image} alt={article.title} />
                </div>
                <div className="side-article-content">
                  <div className="article-category-tag small">{article.category}</div>
                  <h4 className="side-article-title">{article.title}</h4>
                  <p className="side-article-excerpt">{article.excerpt}</p>
                  <div className="side-article-meta">
                    <span className="meta-item">
                      <FiCalendar />
                      {new Date(article.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="meta-item">
                      <FiClock />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
