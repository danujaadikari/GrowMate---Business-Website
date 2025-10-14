import React, { useState, useEffect } from 'react';
import { 
  FiEdit3, FiSave, FiPlus, FiTrash2, FiEye, FiDownload, 
  FiUpload, FiRefreshCw, FiSettings, FiX 
} from 'react-icons/fi';
import ServiceEditor from '../../components/Admin/ServiceEditor';
import PricingPlanEditor from '../../components/Admin/PricingPlanEditor';
import FaqEditor from '../../components/Admin/FaqEditor';
import './AdminServices.css';
import '../../components/Admin/ServiceEditor.css';

const AdminServices = () => {
  // Services data state
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Business Growth Consulting",
      description: "Strategic guidance to accelerate your business growth with data-driven insights and proven methodologies.",
      features: [
        "Market Analysis & Competitive Research",
        "Growth Strategy Development",
        "Performance Metrics & KPI Tracking",
        "Revenue Optimization",
        "Scalability Planning"
      ],
      pricing: { min: 2500, max: 5000 },
      duration: "3-6 months",
      results: { roi: "300%", growth: "150%", time: "90 days" },
      videoUrl: "/videos/business-consulting.mp4"
    },
    {
      id: 2,
      title: "Digital Marketing Solutions",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive qualified leads.",
      features: [
        "SEO & Content Marketing",
        "Social Media Management",
        "PPC Campaign Management",
        "Email Marketing Automation",
        "Analytics & Reporting"
      ],
      pricing: { min: 1500, max: 3500 },
      duration: "Ongoing",
      results: { roi: "400%", growth: "200%", time: "60 days" },
      videoUrl: "/videos/digital-marketing.mp4"
    },
    {
      id: 3,
      title: "Web Development & Design",
      description: "Custom web solutions that convert visitors into customers with modern design and powerful functionality.",
      features: [
        "Responsive Web Design",
        "E-commerce Development",
        "CMS Integration",
        "Performance Optimization",
        "Security Implementation"
      ],
      pricing: { min: 3000, max: 8000 },
      duration: "2-4 months",
      results: { roi: "250%", growth: "180%", time: "120 days" },
      videoUrl: "/videos/web-development.mp4"
    },
    {
      id: 4,
      title: "Data Analytics & Insights",
      description: "Transform your raw data into actionable insights that drive informed business decisions and growth.",
      features: [
        "Business Intelligence Setup",
        "Custom Dashboard Creation",
        "Predictive Analytics",
        "Data Visualization",
        "Automated Reporting"
      ],
      pricing: { min: 2000, max: 6000 },
      duration: "1-3 months",
      results: { roi: "350%", growth: "220%", time: "45 days" },
      videoUrl: "/videos/data-analytics.mp4"
    }
  ]);

  // Pricing plans state
  const [pricingPlans, setPricingPlans] = useState([
    {
      id: 1,
      name: "Starter",
      price: { monthly: 1500, yearly: 15000 },
      popular: false,
      description: "Perfect for small businesses looking to establish their growth foundation",
      features: [
        "Business Growth Strategy",
        "Basic Digital Marketing",
        "Website Audit & Optimization",
        "Monthly Performance Reports",
        "Email Support",
        "1 Strategy Session/Month"
      ]
    },
    {
      id: 2,
      name: "Professional",
      price: { monthly: 2500, yearly: 25000 },
      popular: true,
      description: "Ideal for growing businesses ready to scale their operations",
      features: [
        "Everything in Starter",
        "Advanced Marketing Campaigns",
        "Custom Web Development",
        "Data Analytics Dashboard",
        "Priority Support",
        "Weekly Strategy Sessions",
        "Dedicated Account Manager"
      ]
    },
    {
      id: 3,
      name: "Enterprise",
      price: { monthly: 5000, yearly: 50000 },
      popular: false,
      description: "Comprehensive solution for established businesses seeking market leadership",
      features: [
        "Everything in Professional",
        "Custom Software Solutions",
        "Advanced Analytics & AI",
        "24/7 Premium Support",
        "Daily Consultation Access",
        "Multi-location Support",
        "White-label Solutions"
      ]
    }
  ]);

  // FAQ data state
  const [faqData, setFaqData] = useState([
    {
      id: 1,
      question: "How long does it take to see results from your services?",
      answer: "Results vary by service type, but most clients see initial improvements within 30-60 days. Our Business Growth Consulting typically shows measurable results within 90 days, while Digital Marketing campaigns often generate leads within the first month."
    },
    {
      id: 2,
      question: "Do you work with businesses of all sizes?",
      answer: "Yes! We tailor our services to businesses ranging from startups to enterprise-level organizations. Our flexible approach ensures we can scale our solutions to match your specific needs and budget."
    },
    {
      id: 3,
      question: "What makes GrowMate different from other consulting firms?",
      answer: "Our data-driven approach, proven methodologies, and commitment to measurable results set us apart. We don't just provide advice – we implement solutions and track their performance to ensure your success."
    },
    {
      id: 4,
      question: "Can I customize a service package for my specific needs?",
      answer: "Absolutely! While we offer structured packages, we understand every business is unique. We're happy to create custom solutions that address your specific challenges and goals."
    },
    {
      id: 5,
      question: "What kind of support do you provide during projects?",
      answer: "We provide comprehensive support including regular check-ins, progress reports, dedicated account management, and direct access to our team of experts. Support level varies by package."
    },
    {
      id: 6,
      question: "Do you offer any guarantees on your services?",
      answer: "We're confident in our methods and offer a 30-day satisfaction guarantee. If you're not completely satisfied with our initial strategy and approach, we'll work with you to make it right or provide a full refund."
    },
    {
      id: 7,
      question: "How do you measure the success of your services?",
      answer: "We use specific KPIs and metrics tailored to each service and your business goals. This includes ROI calculations, growth metrics, conversion rates, and other relevant performance indicators that matter to your business."
    },
    {
      id: 8,
      question: "Can you work with our existing team and tools?",
      answer: "Yes! We're experienced in integrating with existing teams, processes, and technology stacks. We adapt our approach to complement your current operations while introducing improvements where needed."
    }
  ]);

  // UI state
  const [activeTab, setActiveTab] = useState('services');
  const [editingItem, setEditingItem] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  // Track changes for save indicator
  useEffect(() => {
    setHasChanges(true);
  }, [services, pricingPlans, faqData]);

  // Services editor functions
  const addNewService = () => {
    const newService = {
      id: Date.now(),
      title: "New Service",
      description: "Service description...",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      pricing: { min: 1000, max: 2000 },
      duration: "1-2 months",
      results: { roi: "200%", growth: "100%", time: "30 days" },
      videoUrl: "/videos/new-service.mp4"
    };
    setServices([...services, newService]);
    setEditingItem({ type: 'service', id: newService.id });
  };

  const updateService = (id, updatedService) => {
    setServices(services.map(service => 
      service.id === id ? { ...service, ...updatedService } : service
    ));
  };

  const deleteService = (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      setServices(services.filter(service => service.id !== id));
    }
  };

  // Pricing editor functions
  const addNewPlan = () => {
    const newPlan = {
      id: Date.now(),
      name: "New Plan",
      price: { monthly: 1000, yearly: 10000 },
      popular: false,
      description: "Plan description...",
      features: ["Feature 1", "Feature 2", "Feature 3"]
    };
    setPricingPlans([...pricingPlans, newPlan]);
    setEditingItem({ type: 'pricing', id: newPlan.id });
  };

  const updatePricingPlan = (id, updatedPlan) => {
    setPricingPlans(pricingPlans.map(plan => 
      plan.id === id ? { ...plan, ...updatedPlan } : plan
    ));
  };

  const deletePricingPlan = (id) => {
    if (window.confirm('Are you sure you want to delete this pricing plan?')) {
      setPricingPlans(pricingPlans.filter(plan => plan.id !== id));
    }
  };

  // FAQ editor functions
  const addNewFaq = () => {
    const newFaq = {
      id: Date.now(),
      question: "New Question?",
      answer: "Answer content..."
    };
    setFaqData([...faqData, newFaq]);
    setEditingItem({ type: 'faq', id: newFaq.id });
  };

  const updateFaq = (id, updatedFaq) => {
    setFaqData(faqData.map(faq => 
      faq.id === id ? { ...faq, ...updatedFaq } : faq
    ));
  };

  const deleteFaq = (id) => {
    if (window.confirm('Are you sure you want to delete this FAQ?')) {
      setFaqData(faqData.filter(faq => faq.id !== id));
    }
  };

  // Data management functions
  const exportData = () => {
    const data = { services, pricingPlans, faqData };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `growmate-services-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const importData = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          if (data.services) setServices(data.services);
          if (data.pricingPlans) setPricingPlans(data.pricingPlans);
          if (data.faqData) setFaqData(data.faqData);
          alert('Data imported successfully!');
        } catch (error) {
          alert('Error importing data. Please check the file format.');
        }
      };
      reader.readAsText(file);
    }
  };

  const saveChanges = () => {
    // In a real app, this would save to a backend
    localStorage.setItem('growmate-services-data', JSON.stringify({
      services, pricingPlans, faqData
    }));
    setHasChanges(false);
    alert('Changes saved successfully!');
  };

  const resetData = () => {
    if (window.confirm('Are you sure you want to reset all data? This cannot be undone.')) {
      // Reset to default values
      window.location.reload();
    }
  };

  return (
    <div className="admin-services">
      <div className="admin-header">
        <div className="header-content">
          <h1>
            <FiSettings className="header-icon" />
            Services Content Editor
          </h1>
          <p>Manage your services, pricing, and FAQ content</p>
        </div>
        
        <div className="header-actions">
          {hasChanges && (
            <span className="changes-indicator">
              <FiRefreshCw className="spinning" />
              Unsaved changes
            </span>
          )}
          
          <div className="action-buttons">
            <button 
              className="btn btn-secondary" 
              onClick={() => setShowPreview(!showPreview)}
            >
              <FiEye />
              {showPreview ? 'Hide' : 'Show'} Preview
            </button>
            
            <button className="btn btn-secondary" onClick={exportData}>
              <FiDownload />
              Export Data
            </button>
            
            <label className="btn btn-secondary file-input">
              <FiUpload />
              Import Data
              <input type="file" accept=".json" onChange={importData} hidden />
            </label>
            
            <button className="btn btn-primary" onClick={saveChanges}>
              <FiSave />
              Save Changes
            </button>
          </div>
        </div>
      </div>

      <div className="admin-nav">
        <button 
          className={`nav-tab ${activeTab === 'services' ? 'active' : ''}`}
          onClick={() => setActiveTab('services')}
        >
          Services ({services.length})
        </button>
        <button 
          className={`nav-tab ${activeTab === 'pricing' ? 'active' : ''}`}
          onClick={() => setActiveTab('pricing')}
        >
          Pricing ({pricingPlans.length})
        </button>
        <button 
          className={`nav-tab ${activeTab === 'faq' ? 'active' : ''}`}
          onClick={() => setActiveTab('faq')}
        >
          FAQ ({faqData.length})
        </button>
      </div>

      <div className="admin-content">
        {activeTab === 'services' && (
          <div className="services-editor">
            <div className="section-header">
              <h2>Services Management</h2>
              <button className="btn btn-primary" onClick={addNewService}>
                <FiPlus />
                Add New Service
              </button>
            </div>

            <div className="items-grid">
              {services.map(service => (
                <div key={service.id} className="item-card">
                  <div className="item-header">
                    <h3>{service.title}</h3>
                    <div className="item-actions">
                      <button 
                        className="btn-icon"
                        onClick={() => setEditingItem({ type: 'service', id: service.id })}
                      >
                        <FiEdit3 />
                      </button>
                      <button 
                        className="btn-icon danger"
                        onClick={() => deleteService(service.id)}
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                  
                  <div className="item-preview">
                    <p>{service.description}</p>
                    <div className="item-meta">
                      <span>Features: {service.features.length}</span>
                      <span>Price: ${service.pricing.min} - ${service.pricing.max}</span>
                      <span>Duration: {service.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="pricing-editor">
            <div className="section-header">
              <h2>Pricing Plans Management</h2>
              <button className="btn btn-primary" onClick={addNewPlan}>
                <FiPlus />
                Add New Plan
              </button>
            </div>

            <div className="items-grid">
              {pricingPlans.map(plan => (
                <div key={plan.id} className={`item-card ${plan.popular ? 'popular' : ''}`}>
                  <div className="item-header">
                    <h3>
                      {plan.name}
                      {plan.popular && <span className="popular-badge">Popular</span>}
                    </h3>
                    <div className="item-actions">
                      <button 
                        className="btn-icon"
                        onClick={() => setEditingItem({ type: 'pricing', id: plan.id })}
                      >
                        <FiEdit3 />
                      </button>
                      <button 
                        className="btn-icon danger"
                        onClick={() => deletePricingPlan(plan.id)}
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                  
                  <div className="item-preview">
                    <p>{plan.description}</p>
                    <div className="item-meta">
                      <span>Monthly: ${plan.price.monthly}</span>
                      <span>Yearly: ${plan.price.yearly}</span>
                      <span>Features: {plan.features.length}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="faq-editor">
            <div className="section-header">
              <h2>FAQ Management</h2>
              <button className="btn btn-primary" onClick={addNewFaq}>
                <FiPlus />
                Add New FAQ
              </button>
            </div>

            <div className="faq-list">
              {faqData.map(faq => (
                <div key={faq.id} className="faq-item">
                  <div className="faq-header">
                    <h4>{faq.question}</h4>
                    <div className="item-actions">
                      <button 
                        className="btn-icon"
                        onClick={() => setEditingItem({ type: 'faq', id: faq.id })}
                      >
                        <FiEdit3 />
                      </button>
                      <button 
                        className="btn-icon danger"
                        onClick={() => deleteFaq(faq.id)}
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                  <p className="faq-preview">{faq.answer.substring(0, 150)}...</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {editingItem && (
        <div className="edit-modal-overlay" onClick={() => setEditingItem(null)}>
          <div className="edit-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>
                Edit {editingItem.type === 'service' ? 'Service' : 
                     editingItem.type === 'pricing' ? 'Pricing Plan' : 'FAQ'}
              </h3>
              <button className="btn-icon" onClick={() => setEditingItem(null)}>
                <FiX />
              </button>
            </div>
            <div className="modal-content">
              {editingItem.type === 'service' && (
                <ServiceEditor
                  service={services.find(s => s.id === editingItem.id)}
                  onSave={(updatedService) => {
                    updateService(editingItem.id, updatedService);
                    setEditingItem(null);
                  }}
                  onCancel={() => setEditingItem(null)}
                />
              )}
              
              {editingItem.type === 'pricing' && (
                <PricingPlanEditor
                  plan={pricingPlans.find(p => p.id === editingItem.id)}
                  onSave={(updatedPlan) => {
                    updatePricingPlan(editingItem.id, updatedPlan);
                    setEditingItem(null);
                  }}
                  onCancel={() => setEditingItem(null)}
                />
              )}
              
              {editingItem.type === 'faq' && (
                <FaqEditor
                  faq={faqData.find(f => f.id === editingItem.id)}
                  onSave={(updatedFaq) => {
                    updateFaq(editingItem.id, updatedFaq);
                    setEditingItem(null);
                  }}
                  onCancel={() => setEditingItem(null)}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminServices;