import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
  display: flex;
  align-items: center;
  padding: 100px 0;
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Content = styled.div`
  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(10px);
  }
  
  .icon {
    font-size: 1.5rem;
    color: #fff;
  }
  
  .content {
    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.3rem;
    }
    
    a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: color 0.3s ease;
      position: relative;
      
      &:hover {
        color: white;
      }
      
      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: white;
        transition: width 0.25s ease;
      }
      
      &:hover::after {
        width: 100%;
      }
    }
  }
`;

const ContactForm = styled(motion.form)`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  
  .form-group {
    margin-bottom: 1.5rem;
    
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
    
    input, textarea {
      width: 100%;
      padding: 1rem;
      border: none;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.9);
      color: #333;
      font-size: 1rem;
      
      &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
      }
      
      &::placeholder {
        color: #666;
      }
    }
    
    textarea {
      resize: vertical;
      min-height: 120px;
    }
  }
  
  .submit-btn {
    width: 100%;
    padding: 1rem;
    background: white;
    color: #ff6b6b;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
  }
`;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    const messageData = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('http://localhost:8080/api/contact/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Content>
            <h2>Get In Touch</h2>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <ContactInfo>
              <ContactItem
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <FaEnvelope className="icon" />
                <div className="content">
                  <h3>Email</h3>
                  <a href="mailto:joao.vrpontes@gmail.com">joao.vrpontes@gmail.com</a>
                </div>
              </ContactItem>
              
              <ContactItem
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <FaLinkedin className="icon" />
                <div className="content">
                  <h3>LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/jo%C3%A3o-pontes-8b8101179/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/joão-pontes-8b8101179/
                  </a>
                </div>
              </ContactItem>
              
              <ContactItem
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <FaGithub className="icon" />
                <div className="content">
                  <h3>GitHub</h3>
                  <a href="https://github.com/JoaoPontes98" target="_blank" rel="noopener noreferrer">
                    github.com/JoaoPontes98
                  </a>
                </div>
              </ContactItem>
              
              <ContactItem
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <FaMapMarkerAlt className="icon" />
                <div className="content">
                  <h3>Location</h3>
                  <span>Ottawa, ON, Canada</span>
                </div>
              </ContactItem>
            </ContactInfo>
          </Content>
        </motion.div>
        
        <ContactForm
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="What's this about?" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Tell me about your project or just say hello!" required></textarea>
          </div>
          
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {submitStatus === 'success' && (
            <div style={{ 
              marginTop: '1rem', 
              padding: '1rem', 
              background: 'rgba(76, 175, 80, 0.1)', 
              color: '#4caf50', 
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              ✅ Thank you for your message! I'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div style={{ 
              marginTop: '1rem', 
              padding: '1rem', 
              background: 'rgba(244, 67, 54, 0.1)', 
              color: '#f44336', 
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              ❌ Sorry, there was an error sending your message. Please try again.
            </div>
          )}
        </ContactForm>
      </Container>
    </ContactSection>
  );
};

export default Contact;
