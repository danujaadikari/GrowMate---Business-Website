import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import BlogGrid from '../../components/BlogGrid/BlogGrid';
import BlogSidebar from '../../components/BlogSidebar/BlogSidebar';
import './Blog.css';

const Blog = () => {
  return (
    <div className="page-wrapper">
      <PageHeader 
        title="Our Blog"
        subtitle="Stay updated with the latest insights, trends, and strategies in business growth and development"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' }
        ]}
      />
      
      <section className="section-padding">
        <div className="container">
          <div className="blog-content">
            <div className="blog-main">
              <BlogGrid />
            </div>
            <div className="blog-sidebar-section">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;