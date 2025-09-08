import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
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
    color: #333;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #666;
    margin-bottom: 1.5rem;
  }
`;

const CompanyLogosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const CompanyLogoCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CompanyLogo = styled.img`
  max-width: 100%;
  max-height: 80px;
  object-fit: contain;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
  
  &:hover {
    filter: grayscale(0%);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 40px rgba(255, 107, 107, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
    border-radius: 50%;
    z-index: -1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Content>
            <h2>About Me</h2>
            <p>
              I'm a passionate software engineer with a strong foundation in modern web technologies. 
              I have experience in building entprise-grade applications in multple sectors ranging from fintech, cloud consulting, to cybersecurity.
            </p>
            <p>
              With expertise in React for frontend development, Java Spring Boot or Python Flask for backend services, 
              PostgreSQL for data management, and AWS for cloud deployment, I bring a comprehensive 
              approach to fullstack development.
            </p>
            <p>
              My partner in crime is my cat, Arnold. He's the best coding rubber duck a dev could ask for. If you play your cards right, you might get to meet him.
            </p>
            
            <CompanyLogosGrid>
              <CompanyLogoCard>
                <CompanyLogo 
                  src="/company-logos/IBM-logo.png" 
                  alt="IBM Logo"
                />
              </CompanyLogoCard>
              <CompanyLogoCard>
                <CompanyLogo 
                  src="/company-logos/deloitte-logo.png" 
                  alt="Deloitte Logo"
                />
              </CompanyLogoCard>
              <CompanyLogoCard>
                <CompanyLogo 
                  src="/company-logos/fef-logo.webp" 
                  alt="Company Logo"
                />
              </CompanyLogoCard>
            </CompanyLogosGrid>
          </Content>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ImageContainer>
            <ProfileImage>
              <img 
                src="/profile-photo.png" 
                alt="João Pontes with Arnold the cat" 
              />
            </ProfileImage>
          </ImageContainer>
        </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About;
