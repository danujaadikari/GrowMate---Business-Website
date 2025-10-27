import React, { useState } from 'react';
import { FiCalendar, FiUser, FiClock, FiArrowRight, FiSearch, FiTag } from 'react-icons/fi';
import './BlogGrid.css';

const BlogGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const articles = [
    {
      id: 1,
      title: '10 Essential Digital Marketing Strategies for 2025',
      excerpt: 'Discover the most effective digital marketing tactics that will help your business thrive in the evolving online landscape.',
      content: 'Full article content here...',
      category: 'Marketing',
      author: 'Emily Rodriguez',
      date: '2025-10-20',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['Digital Marketing', 'SEO', 'Social Media']
    },
    {
      id: 2,
      title: 'The Future of Web Development: Trends to Watch',
      excerpt: 'Explore emerging technologies and frameworks that are shaping the future of web development and user experience.',
      content: 'Full article content here...',
      category: 'Development',
      author: 'David Thompson',
      date: '2025-10-18',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      tags: ['Web Development', 'React', 'JavaScript']
    },
    {
      id: 3,
      title: 'Building a Strong Brand Identity: A Complete Guide',
      excerpt: 'Learn how to create a memorable brand identity that resonates with your target audience and stands out from competitors.',
      content: 'Full article content here...',
      category: 'Branding',
      author: 'Lisa Wang',
      date: '2025-10-15',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tags: ['Branding', 'Design', 'Strategy']
    },
    {
      id: 4,
      title: 'How AI is Transforming Business Operations',
      excerpt: 'Discover how artificial intelligence is revolutionizing business processes, from customer service to data analytics.',
      content: 'Full article content here...',
      category: 'Technology',
      author: 'Michael Chen',
      date: '2025-10-12',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      tags: ['AI', 'Technology', 'Innovation']
    },
    {
      id: 5,
      title: 'Effective Leadership in Remote Work Environments',
      excerpt: 'Master the art of leading distributed teams and maintaining productivity in the era of remote work.',
      content: 'Full article content here...',
      category: 'Business',
      author: 'Sarah Johnson',
      date: '2025-10-10',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
      tags: ['Leadership', 'Remote Work', 'Management']
    },
    {
      id: 6,
      title: 'Maximizing ROI with Data-Driven Marketing',
      excerpt: 'Learn how to leverage analytics and data insights to optimize your marketing campaigns and achieve better results.',
      content: 'Full article content here...',
      category: 'Marketing',
      author: 'James Mitchell',
      date: '2025-10-08',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Analytics', 'Marketing', 'ROI']
    },
    {
      id: 7,
      title: 'Cybersecurity Best Practices for Small Businesses',
      excerpt: 'Protect your business from cyber threats with these essential security measures and preventive strategies.',
      content: 'Full article content here...',
      category: 'Technology',
      author: 'Michael Chen',
      date: '2025-10-05',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
      tags: ['Cybersecurity', 'Security', 'Technology']
    },
    {
      id: 8,
      title: 'E-commerce Growth Hacks for 2025',
      excerpt: 'Boost your online store\'s performance with proven strategies for increasing conversions and customer retention.',
      content: 'Full article content here...',
      category: 'Business',
      author: 'Emily Rodriguez',
      date: '2025-10-03',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Growth', 'Sales']
    },
    {
      id: 9,
      title: 'User Experience Design Principles That Matter',
      excerpt: 'Create exceptional user experiences by following these fundamental UX design principles and best practices.',
      content: 'Full article content here...',
      category: 'Design',
      author: 'Lisa Wang',
      date: '2025-10-01',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop',
      tags: ['UX Design', 'Design', 'User Experience']
    },
    {
      id: 10,
      title: 'Content Marketing Strategies That Drive Results',
      excerpt: 'Build a successful content marketing strategy that attracts, engages, and converts your target audience.',
      content: 'Full article content here...',
      category: 'Marketing',
      author: 'Emily Rodriguez',
      date: '2025-09-28',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      tags: ['Content Marketing', 'Strategy', 'SEO']
    },
    {
      id: 11,
      title: 'Cloud Computing: A Comprehensive Business Guide',
      excerpt: 'Understand the benefits of cloud computing and how to successfully migrate your business to the cloud.',
      content: 'Full article content here...',
      category: 'Technology',
      author: 'David Thompson',
      date: '2025-09-25',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      tags: ['Cloud Computing', 'Technology', 'Infrastructure']
    },
    {
      id: 12,
      title: 'Building High-Performance Teams',
      excerpt: 'Discover the secrets to creating and managing teams that consistently deliver exceptional results.',
      content: 'Full article content here...',
      category: 'Business',
      author: 'Sarah Johnson',
      date: '2025-09-22',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      tags: ['Team Building', 'Leadership', 'Management']
    }
  ];

  const categories = ['all', 'Marketing', 'Development', 'Business', 'Technology', 'Design', 'Branding'];

  // Filter articles
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="blog-grid">
      {/* Header with Search */}
      <div className="blog-header">
        <div className="blog-title-section">
          <h2 className="heading-lg">Latest Articles</h2>
          <p className="body-lg">Stay updated with our latest insights and tips</p>
        </div>

        <div className="blog-search">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="blog-search-input"
          />
          {searchTerm && (
            <button 
              className="clear-search"
              onClick={() => setSearchTerm('')}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
          >
            {category === 'all' ? 'All Articles' : category}
          </button>
        ))}
      </div>

      {/* Results Count */}
      {(searchTerm || selectedCategory !== 'all') && (
        <p className="results-count">
          Found {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
        </p>
      )}

      {/* Articles Grid */}
      {currentArticles.length > 0 ? (
        <>
          <div className="articles-grid">
            {currentArticles.map((article) => (
              <article key={article.id} className="article-card">
                <div className="article-image">
                  <img src={article.image} alt={article.title} />
                  <div className="article-category-badge">{article.category}</div>
                </div>
                <div className="article-content">
                  <div className="article-meta">
                    <span className="meta-item">
                      <FiCalendar />
                      {new Date(article.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="meta-item">
                      <FiClock />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <div className="article-tags">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        <FiTag />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="article-footer">
                    <div className="article-author">
                      <FiUser />
                      {article.author}
                    </div>
                    <button className="read-more-btn">
                      Read More
                      <FiArrowRight />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              
              <button
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="no-results">
          <p className="heading-sm">No articles found</p>
          <p className="body-md">Try adjusting your search or filter</p>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;