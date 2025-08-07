import React, { useState } from 'react';
import axios from 'axios';
import { 
  faEnvelope,
  faAddressCard,
  faPaperPlane,
  faHandshake,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    message: '',
    type: '',
    show: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: '', type: '', show: false });

    try {
      // Replace with your actual API endpoint
      const response = await axios.post('http://localhost:5000/contact', formData);
      
      if (response.data.success) {
        setStatus({
          message: 'Your message has been sent successfully! I will get back to you soon.',
          type: 'success',
          show: true
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus({
          message: response.data.message || 'There was an error sending your message.',
          type: 'error',
          show: true
        });
      }
    } catch (error) {
      setStatus({
        message: error.response?.data?.message || 'There was an error sending your message. Please try again later.',
        type: 'error',
        show: true
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setStatus(prev => ({ ...prev, show: false }));
      }, 5000);
    }
  };

  return (
    <div className="readme-container" id="contact">
      <div className="readme-header">
        <h1 className="readme-title">
          <FontAwesomeIcon icon={faEnvelope} /> Contact Me
          <span className="badge badge-primary">Open to Collaborate</span>
          <span className="badge badge-secondary">MERN Expert</span>
        </h1>
      </div>

      {/* Contact Information Section */}
      <div className="readme-section">
        <h2 className="section-title"><FontAwesomeIcon icon={faAddressCard} /> Contact Information</h2>
        <ul className="feature-list">
          <li className="feature-item">
            <strong>Email:</strong> <a href="mailto:john.doe@example.com" style={{ color: '#00d4ff', textDecoration: 'none' }}> rrk.rrk@example.com </a>
          </li>
          <li className="feature-item">
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" style={{ color: '#00d4ff', textDecoration: 'none' }}>linkedin.com/in/rrk</a>
          </li>
          <li className="feature-item">
            <strong>GitHub:</strong> <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" style={{ color: '#00d4ff', textDecoration: 'none' }}>github.com/rrk</a>
          </li>
          <li className="feature-item">
            <strong>Portfolio:</strong> <a href="https://johndoe.dev" target="_blank" rel="noopener noreferrer" style={{ color: '#00d4ff', textDecoration: 'none' }}>rrk.rkc</a>
          </li>
        </ul>
      </div>

      {/* Contact Form Section */}
      <div className="readme-section">
        <h2 className="section-title"><FontAwesomeIcon icon={faPaperPlane} /> Send a Message</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="form-control" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="form-control" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              className="form-control" 
              value={formData.subject}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea 
              id="message" 
              name="message" 
              className="form-control" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <><FontAwesomeIcon icon={faSpinner} spin /> Sending...</>
            ) : (
              <><FontAwesomeIcon icon={faPaperPlane} /> Send Message</>
            )}
          </button>
          
          {status.show && (
            <div className={`status-message ${status.type}`}>
              {status.message}
            </div>
          )}
        </form>
      </div>

      {/* Get in Touch Section */}
      <div className="readme-section">
        <h2 className="section-title"><FontAwesomeIcon icon={faHandshake} /> Get in Touch</h2>
        <p>
          I'm always excited to connect with like-minded professionals, discuss potential projects, or explore collaboration opportunities. Whether you have a question about MERN stack development, need help with system design, or want to discuss innovative tech solutions, feel free to reach out!
        </p>
        <ul className="feature-list">
          <li className="feature-item">Available for freelance projects and consulting</li>
          <li className="feature-item">Open to contributing to open-source initiatives</li>
          <li className="feature-item">Happy to mentor or discuss DSA and web development</li>
          <li className="feature-item">Quick response time, typically within 24 hours</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;