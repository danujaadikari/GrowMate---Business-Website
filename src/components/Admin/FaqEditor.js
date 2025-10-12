import React, { useState } from 'react';
import { FiSave, FiX } from 'react-icons/fi';

const FaqEditor = ({ faq, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    id: faq?.id,
    question: faq?.question || '',
    answer: faq?.answer || '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formData.question.trim()) {
      alert('Please enter a question');
      return;
    }
    if (!formData.answer.trim()) {
      alert('Please provide an answer');
      return;
    }
    onSave({ ...formData, id: faq?.id || Date.now() });
  };

  return (
    <div className="faq-editor-form">
      <form onSubmit={onSubmit}>
        <div className="form-section">
          <div className="form-group">
            <label>Question *</label>
            <input
              type="text"
              value={formData.question}
              onChange={(e) => setFormData(prev => ({ ...prev, question: e.target.value }))}
              placeholder="e.g., How long does it take to see results?"
              required
            />
          </div>
          <div className="form-group">
            <label>Answer *</label>
            <textarea
              rows={6}
              value={formData.answer}
              onChange={(e) => setFormData(prev => ({ ...prev, answer: e.target.value }))}
              placeholder="Write a helpful, concise answer..."
              required
            />
          </div>
        </div>
        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            <FiX />
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            <FiSave />
            Save FAQ
          </button>
        </div>
      </form>
    </div>
  );
};

export default FaqEditor;