import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaDownload, FaFilePdf } from 'react-icons/fa';

const ResumeSection = styled.section`
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  padding: 100px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const ResumeCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
`;

const IconContainer = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  transition: all 0.3s ease;
  
  .icon {
    font-size: 2.5rem;
    color: white;
    transition: all 0.3s ease;
    animation: ${props => props.isHovered ? 'pulseSpin 1.5s linear infinite' : 'none'};
  }
  
  @keyframes pulseSpin {
    0% {
      transform: rotate(0deg);
      scale: 1;
    }
    50% {
      scale: 1.25;
    }
    100% {
      transform: rotate(360deg);
      scale: 1;
    }
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(255, 107, 107, 0.3);
  }
  
  .icon {
    font-size: 1.2rem;
  }
`;

const ResumePreview = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background: #f0f0f0;
  border-radius: 12px;
  text-align: left;
  
  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 1rem;
  }
  
  .preview-content {
    font-size: 0.9rem;
    color: #666;
    line-height: 1.6;
    
    .section {
      margin-bottom: 1rem;
      
      .section-title {
        font-weight: 600;
        color: #333;
        margin-bottom: 0.3rem;
      }
    }
  }
`;

const Resume = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleDownload = () => {
    // In a real application, this would trigger the actual PDF download
    alert('Resume download would start here. Please replace with your actual resume PDF.');
  };

  return (
    <ResumeSection id="resume">
      <Container>
        <ResumeCard
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <IconContainer isHovered={isHovered}>
            <FaFilePdf className="icon" />
          </IconContainer>
          
          <Title>Download My Resume</Title>
          <Description>
            Get a comprehensive overview of my experience, skills, and achievements. 
            My resume highlights my expertise and professional journey.
          </Description>
          
          <DownloadButton
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleDownload();
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="icon" />
            Download PDF Resume
          </DownloadButton>
        </ResumeCard>
      </Container>
    </ResumeSection>
  );
};

export default Resume;
