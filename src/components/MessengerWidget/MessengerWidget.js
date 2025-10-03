import React, { useState } from 'react';
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi';
import './MessengerWidget.css';

const MessengerWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hi! 👋 How can I help you today?',
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setMessage('');

    // Auto-reply after a short delay
    setTimeout(() => {
      const autoReply = {
        id: messages.length + 2,
        text: "Thanks for your message! I'll get back to you soon. You can also email me at danujaadikari2001@gmail.com or call +94 78 662 1310.",
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, autoReply]);
    }, 1000);
  };

  const quickReplies = [
    'Tell me about your services',
    'Request a quote',
    'Schedule a meeting',
    'Contact information'
  ];

  const handleQuickReply = (reply) => {
    setMessage(reply);
  };

  return (
    <div className="messenger-widget">
      {/* Chat Button */}
      {!isOpen && (
        <button 
          className="messenger-button" 
          onClick={toggleChat}
          aria-label="Open chat"
        >
          <FiMessageCircle />
          <span className="messenger-badge">1</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="messenger-window">
          {/* Header */}
          <div className="messenger-header">
            <div className="messenger-header-info">
              <div className="messenger-avatar">
                <span>DA</span>
              </div>
              <div className="messenger-header-text">
                <h4>Danuja Adikari</h4>
                <span className="messenger-status">
                  <span className="status-dot"></span>
                  Usually replies within minutes
                </span>
              </div>
            </div>
            <button 
              className="messenger-close" 
              onClick={toggleChat}
              aria-label="Close chat"
            >
              <FiX />
            </button>
          </div>

          {/* Messages */}
          <div className="messenger-messages">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`message ${msg.sender === 'user' ? 'message-user' : 'message-bot'}`}
              >
                <div className="message-bubble">
                  <p>{msg.text}</p>
                  <span className="message-time">{msg.timestamp}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="messenger-quick-replies">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  className="quick-reply-btn"
                  onClick={() => handleQuickReply(reply)}
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form className="messenger-input" onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="messenger-input-field"
            />
            <button 
              type="submit" 
              className="messenger-send-btn"
              disabled={message.trim() === ''}
              aria-label="Send message"
            >
              <FiSend />
            </button>
          </form>

          {/* Footer */}
          <div className="messenger-footer">
            <span>💬 Chat with us</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessengerWidget;