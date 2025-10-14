import React from 'react';
import { 
  FiCode, FiDatabase, FiCloud, FiTool, FiLayout, FiTrendingUp,
  FiShoppingCart, FiBarChart2, FiLayers, FiZap
} from 'react-icons/fi';
import './TechStack.css';

const TechStack = () => {
  const technologies = [
    {
      category: "Frontend Development",
      icon: <FiLayout />,
      color: "#3b82f6",
      skills: [
        "React.js & Next.js",
        "Vue.js & Nuxt.js",
        "TypeScript",
        "Tailwind CSS",
        "Material-UI",
        "Redux & Context API"
      ]
    },
    {
      category: "Backend Development",
      icon: <FiCode />,
      color: "#10b981",
      skills: [
        "Node.js & Express",
        "Python & Django",
        "GraphQL & REST APIs",
        "Microservices",
        "Authentication & Security",
        "Real-time Applications"
      ]
    },
    {
      category: "Database & Storage",
      icon: <FiDatabase />,
      color: "#f59e0b",
      skills: [
        "MongoDB",
        "PostgreSQL & MySQL",
        "Redis",
        "Firebase",
        "Elasticsearch",
        "Data Modeling"
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: <FiCloud />,
      color: "#8b5cf6",
      skills: [
        "AWS & Azure",
        "Docker & Kubernetes",
        "CI/CD Pipelines",
        "Serverless Architecture",
        "Monitoring & Logging",
        "Infrastructure as Code"
      ]
    },
    {
      category: "Digital Marketing",
      icon: <FiTrendingUp />,
      color: "#ec4899",
      skills: [
        "SEO & SEM",
        "Content Marketing",
        "Social Media Marketing",
        "Email Campaigns",
        "PPC & Facebook Ads",
        "Marketing Automation"
      ]
    },
    {
      category: "Data & Analytics",
      icon: <FiBarChart2 />,
      color: "#06b6d4",
      skills: [
        "Google Analytics",
        "Data Visualization",
        "Business Intelligence",
        "Predictive Analytics",
        "A/B Testing",
        "Performance Metrics"
      ]
    },
    {
      category: "E-Commerce",
      icon: <FiShoppingCart />,
      color: "#ef4444",
      skills: [
        "Shopify & WooCommerce",
        "Payment Gateways",
        "Inventory Management",
        "Multi-vendor Platforms",
        "Shopping Cart Optimization",
        "Order Management"
      ]
    },
    {
      category: "Tools & Platforms",
      icon: <FiTool />,
      color: "#14b8a6",
      skills: [
        "Git & GitHub",
        "Jira & Trello",
        "Figma & Adobe XD",
        "Slack & Teams",
        "Postman & Swagger",
        "VS Code & WebStorm"
      ]
    }
  ];

  const achievements = [
    { icon: <FiZap />, label: "100+ Technologies", value: "Mastered" },
    { icon: <FiLayers />, label: "15+ Industries", value: "Served" },
    { icon: <FiTrendingUp />, label: "99.9% Uptime", value: "Delivered" },
    { icon: <FiCode />, label: "50,000+ Lines", value: "of Code/Month" }
  ];

  return (
    <section className="tech-stack-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="heading-lg">Our Technology Stack</h2>
          <p className="body-lg text-secondary">
            Leveraging cutting-edge technologies to build scalable, high-performance solutions
          </p>
        </div>

        {/* Achievements Bar */}
        <div className="achievements-bar">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="achievement-item">
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-content">
                <div className="achievement-value">{achievement.value}</div>
                <div className="achievement-label">{achievement.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="tech-grid">
          {technologies.map((tech, idx) => (
            <div key={idx} className="tech-card">
              <div className="tech-header">
                <div className="tech-icon" style={{ backgroundColor: `${tech.color}15`, color: tech.color }}>
                  {tech.icon}
                </div>
                <h3>{tech.category}</h3>
              </div>
              <ul className="skills-list">
                {tech.skills.map((skill, skillIdx) => (
                  <li key={skillIdx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="tech-cta">
          <h3>Need a Custom Technology Stack?</h3>
          <p>We adapt our expertise to match your unique project requirements</p>
          <a href="/contact" className="btn btn-primary btn-lg">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechStack;