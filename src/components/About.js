import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  padding: 100px 0;
  
  @media (max-width: 768px) {
    padding: 100px 0 50px 0;
  }
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
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
`;

const CompanyLogoCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: grayscale(100%);
  min-height: 120px;
  
  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 80px;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem;
    min-height: 70px;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.2);
    filter: grayscale(0%);
  }
`;

const CompanyLogo = styled.img`
  max-width: 100%;
  max-height: 80px;
  object-fit: contain;
  transition: filter 0.3s ease;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImageContainer = styled.div`
  width: 340px;
  height: 340px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: conic-gradient(
      from 0deg,
      #ff6b6b 0deg,
      #ffa726 60deg,
      #ff6b6b 120deg,
      #ffa726 180deg,
      #ff6b6b 240deg,
      #ffa726 300deg,
      #ff6b6b 360deg
    );
    border-radius: 50%;
    z-index: 1;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s ease-in-out;
  }
  
  &:hover {
    transform: scale(1.05);
    
    &::before {
      opacity: 1;
      transform: scale(1);
      animation: rotate 2s linear infinite;
    }
  }
  
  @media (max-width: 768px) {
    &:active {
      transform: scale(1.05);
      
      &::before {
        opacity: 1;
        transform: scale(1);
        animation: rotate 2s linear infinite;
      }
    }
  }
  
  @media (max-width: 768px) {
    width: 320px;
    height: 320px;
  }
  
  @media (max-width: 480px) {
    width: 280px;
    height: 280px;
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const ProfileImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 40px rgba(255, 107, 107, 0.3);
  z-index: 2;
  
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
    user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
  
  @media (max-width: 480px) {
    width: 240px;
    height: 240px;
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
            <ProfileImageContainer>
              <ProfileImage>
                <img 
                  src="/profile-photo.png" 
                  alt="João Pontes with Arnold the cat"
                  draggable="false"
                />
              </ProfileImage>
            </ProfileImageContainer>
          </ImageContainer>
        </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About;
