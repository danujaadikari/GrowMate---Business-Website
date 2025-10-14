import React, { useState } from 'react';
import { FiSearch, FiExternalLink, FiCode, FiTrendingUp, FiShoppingCart, FiBarChart2, FiGlobe } from 'react-icons/fi';
import './PortfolioGrid.css';

const PortfolioGrid = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      category: "web-development",
      client: "TechMart Solutions",
      description: "Complete redesign and development of a multi-vendor e-commerce platform",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      metrics: { revenue: "+250%", conversion: "+180%", traffic: "+320%" },
      duration: "4 months",
      year: "2024",
      link: "#",
      details: "Built a scalable e-commerce platform with advanced filtering, real-time inventory management, and integrated payment processing. Implemented a custom CMS for easy product management."
    },
    {
      id: 2,
      title: "Marketing Analytics Dashboard",
      category: "data-analytics",
      client: "Digital Growth Agency",
      description: "Real-time analytics dashboard for multi-channel marketing campaigns",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["Python", "D3.js", "PostgreSQL", "AWS"],
      metrics: { efficiency: "+200%", insights: "15+ metrics", clients: "50+" },
      duration: "3 months",
      year: "2024",
      link: "#",
      details: "Created a comprehensive analytics platform integrating data from Google Analytics, Facebook Ads, and LinkedIn. Features custom reporting, automated insights, and predictive analytics."
    },
    {
      id: 3,
      title: "SaaS Product Launch Strategy",
      category: "marketing",
      client: "CloudSync Pro",
      description: "Full-scale digital marketing campaign for SaaS product launch",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["SEO", "Content Marketing", "PPC", "Social Media"],
      metrics: { leads: "5,000+", roi: "400%", signups: "1,200+" },
      duration: "6 months",
      year: "2023",
      link: "#",
      details: "Orchestrated a multi-channel marketing campaign including content marketing, SEO optimization, paid advertising, and social media strategy. Achieved product-market fit within first quarter."
    },
    {
      id: 4,
      title: "Corporate Website Transformation",
      category: "web-development",
      client: "Horizon Industries",
      description: "Modern corporate website with CMS and multilingual support",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      tags: ["Next.js", "Headless CMS", "i18n", "Vercel"],
      metrics: { performance: "95+ score", languages: "5", pageviews: "+400%" },
      duration: "2 months",
      year: "2024",
      link: "#",
      details: "Built a lightning-fast corporate website using Next.js with server-side rendering, integrated headless CMS for content management, and implemented multilingual support for global reach."
    },
    {
      id: 5,
      title: "Business Growth Consulting",
      category: "consulting",
      client: "StartupX Technologies",
      description: "Strategic business planning and growth acceleration program",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
      tags: ["Strategy", "Market Analysis", "KPI Tracking", "Scaling"],
      metrics: { growth: "+350%", revenue: "$2M ARR", team: "15 to 45" },
      duration: "12 months",
      year: "2023-2024",
      link: "#",
      details: "Provided comprehensive business consulting including market analysis, competitive positioning, go-to-market strategy, and operational optimization. Helped scale from seed to Series A."
    },
    {
      id: 6,
      title: "Mobile App Development",
      category: "web-development",
      client: "FitLife Wellness",
      description: "Cross-platform fitness and wellness tracking mobile application",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      tags: ["React Native", "Firebase", "GraphQL", "Redux"],
      metrics: { downloads: "50,000+", rating: "4.8/5", retention: "85%" },
      duration: "5 months",
      year: "2024",
      link: "#",
      details: "Developed a feature-rich fitness app with workout tracking, nutrition planning, social features, and wearable device integration. Achieved top 10 ranking in Health & Fitness category."
    },
    {
      id: 7,
      title: "Content Marketing Campaign",
      category: "marketing",
      client: "EcoProducts International",
      description: "Sustainable brand awareness campaign across digital channels",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop",
      tags: ["Content Strategy", "Video Production", "Influencer Marketing", "SEO"],
      metrics: { reach: "2M+", engagement: "+450%", sales: "+280%" },
      duration: "8 months",
      year: "2023",
      link: "#",
      details: "Created and executed a comprehensive content marketing strategy including blog posts, video content, influencer partnerships, and SEO optimization. Built a loyal community of 100K+ followers."
    },
    {
      id: 8,
      title: "AI-Powered Chatbot Integration",
      category: "data-analytics",
      client: "CustomerFirst Support",
      description: "Intelligent customer support chatbot with NLP capabilities",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
      tags: ["Python", "NLP", "TensorFlow", "API Integration"],
      metrics: { automation: "80%", satisfaction: "92%", response: "< 30s" },
      duration: "4 months",
      year: "2024",
      link: "#",
      details: "Built and deployed an AI-powered chatbot using natural language processing to handle customer inquiries. Integrated with existing CRM and ticketing systems for seamless workflow."
    },
    {
      id: 9,
      title: "Brand Identity Redesign",
      category: "consulting",
      client: "Nexus Financial Services",
      description: "Complete brand refresh including visual identity and positioning",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
      tags: ["Brand Strategy", "Design", "Positioning", "Guidelines"],
      metrics: { recognition: "+300%", trust: "+250%", inquiries: "+400%" },
      duration: "3 months",
      year: "2023",
      link: "#",
      details: "Led comprehensive brand transformation including logo redesign, color palette development, typography selection, and brand guidelines. Repositioned the company as a modern, trustworthy financial partner."
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: <FiGlobe /> },
    { id: 'web-development', label: 'Web Development', icon: <FiCode /> },
    { id: 'marketing', label: 'Digital Marketing', icon: <FiTrendingUp /> },
    { id: 'data-analytics', label: 'Data & Analytics', icon: <FiBarChart2 /> },
    { id: 'consulting', label: 'Consulting', icon: <FiShoppingCart /> }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="portfolio-grid-section section-padding">
      <div className="container">
        {/* Stats Bar */}
        <div className="portfolio-stats">
          <div className="stat-card">
            <div className="stat-number">150+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">$5M+</div>
            <div className="stat-label">Revenue Generated</div>
          </div>
        </div>

        {/* Filter and Search */}
        <div className="portfolio-controls">
          <div className="portfolio-filters">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
          
          <div className="portfolio-search">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button className="view-btn">
                    <FiExternalLink />
                    View Project
                  </button>
                </div>
              </div>
              <div className="project-content">
                <div className="project-meta">
                  <span className="project-year">{project.year}</span>
                  <span className="project-duration">{project.duration}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-client">{project.client}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="tag more">+{project.tags.length - 3}</span>
                  )}
                </div>
                <div className="project-metrics">
                  {Object.entries(project.metrics).map(([key, value], idx) => (
                    <div key={idx} className="metric">
                      <span className="metric-value">{value}</span>
                      <span className="metric-label">{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-results">
            <p>No projects found matching your criteria.</p>
            <button className="btn btn-secondary" onClick={() => { setSearchTerm(''); setActiveFilter('all'); }}>
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            <div className="modal-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            <div className="modal-content">
              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
                <p className="modal-client">{selectedProject.client}</p>
              </div>
              <div className="modal-meta">
                <span><strong>Duration:</strong> {selectedProject.duration}</span>
                <span><strong>Year:</strong> {selectedProject.year}</span>
                <span><strong>Category:</strong> {categories.find(c => c.id === selectedProject.category)?.label}</span>
              </div>
              <p className="modal-description">{selectedProject.details}</p>
              <div className="modal-tags">
                <strong>Technologies:</strong>
                <div className="tags-list">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="modal-metrics">
                <h4>Key Results</h4>
                <div className="metrics-grid">
                  {Object.entries(selectedProject.metrics).map(([key, value], idx) => (
                    <div key={idx} className="metric-item">
                      <div className="metric-value">{value}</div>
                      <div className="metric-label">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-actions">
                <a href={selectedProject.link} className="btn btn-primary">
                  <FiExternalLink />
                  View Live Project
                </a>
                <button className="btn btn-secondary" onClick={() => setSelectedProject(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioGrid;