import React, { useState } from 'react';
import { FiPlus, FiTrash2, FiSave, FiX } from 'react-icons/fi';

const PricingPlanEditor = ({ plan, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    id: plan?.id,
    name: plan?.name || '',
    description: plan?.description || '',
    price: {
      monthly: plan?.price?.monthly ?? 0,
      yearly: plan?.price?.yearly ?? 0,
    },
    popular: plan?.popular || false,
    features: plan?.features?.length ? [...plan.features] : [''],
  });

  const handleChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        }
      }));
      return;
    }
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFeatureChange = (idx, value) => {
    const features = [...formData.features];
    features[idx] = value;
    setFormData(prev => ({ ...prev, features }));
  };

  const addFeature = () => setFormData(prev => ({ ...prev, features: [...prev.features, ''] }));
  const removeFeature = (idx) => setFormData(prev => ({ ...prev, features: prev.features.filter((_, i) => i !== idx) }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Please enter a plan name');
      return;
    }
    if (!formData.description.trim()) {
      alert('Please enter a plan description');
      return;
    }
    if (formData.price.monthly < 0 || formData.price.yearly < 0) {
      alert('Prices cannot be negative');
      return;
    }
    const features = formData.features.map(f => f.trim()).filter(Boolean);
    if (!features.length) {
      alert('Please add at least one feature');
      return;
    }

    onSave({
      ...formData,
      features,
      id: plan?.id || Date.now(),
    });
  };

  return (
    <div className="pricing-plan-editor">
      <form onSubmit={onSubmit} className="pricing-editor-form">
        <div className="form-section">
          <h4>Plan Details</h4>
          <div className="form-group">
            <label>Plan Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="e.g., Professional"
              required
            />
          </div>
          <div className="form-group">
            <label>Description *</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Describe what's included in this plan"
              rows={3}
              required
            />
          </div>
          <div className="form-group checkbox-group">
            <input
              id="popular-toggle"
              type="checkbox"
              checked={formData.popular}
              onChange={(e) => handleChange('popular', e.target.checked)}
            />
            <label htmlFor="popular-toggle">Mark as Most Popular</label>
          </div>
        </div>

        <div className="form-section">
          <h4>Pricing</h4>
          <div className="form-row">
            <div className="form-group">
              <label>Monthly Price ($)</label>
              <input
                type="number"
                min={0}
                step={50}
                value={formData.price.monthly}
                onChange={(e) => handleChange('price.monthly', parseInt(e.target.value || '0', 10))}
              />
            </div>
            <div className="form-group">
              <label>Yearly Price ($)</label>
              <input
                type="number"
                min={0}
                step={100}
                value={formData.price.yearly}
                onChange={(e) => handleChange('price.yearly', parseInt(e.target.value || '0', 10))}
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="section-header">
            <h4>Features</h4>
            <button type="button" className="btn btn-secondary btn-sm" onClick={addFeature}>
              <FiPlus />
              Add Feature
            </button>
          </div>
          <div className="features-list">
            {formData.features.map((f, idx) => (
              <div className="feature-input" key={idx}>
                <input
                  type="text"
                  value={f}
                  onChange={(e) => handleFeatureChange(idx, e.target.value)}
                  placeholder={`Feature ${idx + 1}`}
                />
                {formData.features.length > 1 && (
                  <button type="button" className="btn-icon danger" onClick={() => removeFeature(idx)}>
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
            Save Plan
          </button>
        </div>
      </form>
    </div>
  );
};

export default PricingPlanEditor;