import React, { useState } from 'react';
import { FiPlus, FiTrash2, FiSave, FiX } from 'react-icons/fi';

const ServiceEditor = ({ service, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: service?.title || '',
    description: service?.description || '',
    features: service?.features || [''],
    pricing: {
      min: service?.pricing?.min || 1000,
      max: service?.pricing?.max || 2000
    },
    duration: service?.duration || '',
    results: {
      roi: service?.results?.roi || '200%',
      growth: service?.results?.growth || '100%',
      time: service?.results?.time || '30 days'
    },
    videoUrl: service?.videoUrl || ''
  });

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData(prev => ({
      ...prev,
      features: newFeatures
    }));
  };

  const addFeature = () => {
    setFormData(prev => ({
      ...prev,
      features: [...prev.features, '']
    }));
  };

  const removeFeature = (index) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      features: newFeatures
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.title.trim()) {
      alert('Please enter a service title');
      return;
    }
    
    if (!formData.description.trim()) {
      alert('Please enter a service description');
      return;
    }
    
    const validFeatures = formData.features.filter(f => f.trim());
    if (validFeatures.length === 0) {
      alert('Please add at least one feature');
      return;
    }

    const cleanData = {
      ...formData,
      features: validFeatures,
      id: service?.id || Date.now()
    };

    onSave(cleanData);
  };

  return (
    <div className="service-editor">
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h4>Basic Information</h4>
          
          <div className="form-group">
            <label>Service Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="e.g., Business Growth Consulting"
              required
            />
          </div>

          <div className="form-group">
            <label>Description *</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Describe what this service offers..."
              rows={3}
              required
            />
          </div>

          <div className="form-group">
            <label>Duration</label>
            <input
              type="text"
              value={formData.duration}
              onChange={(e) => handleInputChange('duration', e.target.value)}
              placeholder="e.g., 3-6 months, Ongoing"
            />
          </div>

          <div className="form-group">
            <label>Video URL</label>
            <input
              type="text"
              value={formData.videoUrl}
              onChange={(e) => handleInputChange('videoUrl', e.target.value)}
              placeholder="/videos/service-demo.mp4"
            />
          </div>
        </div>

        <div className="form-section">
          <h4>Pricing Range</h4>
          
          <div className="form-row">
            <div className="form-group">
              <label>Minimum Price ($)</label>
              <input
                type="number"
                value={formData.pricing.min}
                onChange={(e) => handleInputChange('pricing.min', parseInt(e.target.value))}
                min="0"
                step="100"
              />
            </div>

            <div className="form-group">
              <label>Maximum Price ($)</label>
              <input
                type="number"
                value={formData.pricing.max}
                onChange={(e) => handleInputChange('pricing.max', parseInt(e.target.value))}
                min="0"
                step="100"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h4>Expected Results</h4>
          
          <div className="form-row">
            <div className="form-group">
              <label>ROI</label>
              <input
                type="text"
                value={formData.results.roi}
                onChange={(e) => handleInputChange('results.roi', e.target.value)}
                placeholder="300%"
              />
            </div>

            <div className="form-group">
              <label>Growth Rate</label>
              <input
                type="text"
                value={formData.results.growth}
                onChange={(e) => handleInputChange('results.growth', e.target.value)}
                placeholder="150%"
              />
            </div>

            <div className="form-group">
              <label>Time to Results</label>
              <input
                type="text"
                value={formData.results.time}
                onChange={(e) => handleInputChange('results.time', e.target.value)}
                placeholder="90 days"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="section-header">
            <h4>Features & Benefits</h4>
            <button type="button" className="btn btn-secondary btn-sm" onClick={addFeature}>
              <FiPlus />
              Add Feature
            </button>
          </div>

          <div className="features-list">
            {formData.features.map((feature, index) => (
              <div key={index} className="feature-input">
                <input
                  type="text"
                  value={feature}
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                  placeholder={`Feature ${index + 1}`}
                />
                {formData.features.length > 1 && (
                  <button
                    type="button"
                    className="btn-icon danger"
                    onClick={() => removeFeature(index)}
                  >
                    <FiTrash2 />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            <FiX />
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            <FiSave />
            Save Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceEditor;