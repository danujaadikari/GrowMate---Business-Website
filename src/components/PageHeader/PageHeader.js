import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import './PageHeader.css';

const PageHeader = ({ title, subtitle, breadcrumb = [] }) => {
  return (
    <section className="page-header">
      <div className="page-header-background">
        <div className="page-header-gradient"></div>
      </div>
      
      <div className="container">
        <div className="page-header-content">
          {/* Breadcrumb */}
          {breadcrumb.length > 0 && (
            <nav className="breadcrumb">
              {breadcrumb.map((item, index) => (
                <span key={index} className="breadcrumb-item">
                  {index < breadcrumb.length - 1 ? (
                    <>
                      <Link to={item.path} className="breadcrumb-link">
                        {item.name}
                      </Link>
                      <FiChevronRight className="breadcrumb-separator" />
                    </>
                  ) : (
                    <span className="breadcrumb-current">{item.name}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          
          {/* Title */}
          <h1 className="page-title">{title}</h1>
          
          {/* Subtitle */}
          {subtitle && (
            <p className="page-subtitle">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;