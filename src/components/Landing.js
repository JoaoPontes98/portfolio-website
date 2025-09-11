import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LandingSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  overflow: hidden;
  padding: 80px 0 120px 0;
  
  @media (max-width: 768px) {
    min-height: auto;
    padding: 100px 0 100px 0;
  }
  
  @media (max-width: 480px) {
    padding: 80px 0 80px 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
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
  position: relative;
  z-index: 1;
  min-height: calc(100vh - 200px);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    padding-top: 0;
    min-height: auto;
  }
  
  @media (max-width: 1200px) {
    padding: 0 20px;
  }
`;

const TextContent = styled.div`
  text-align: left;
  padding-left: 0;
  margin-left: 0;
  
  @media (max-width: 768px) {
    text-align: center;
    padding-left: 0;
    margin-left: 0;
    margin-top: 20px;
  }
`;

const CubeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  
  @media (max-width: 768px) {
    height: 200px;
    margin-top: 0;
    margin-bottom: 20px;
    transform: translateY(-20px);
  }
`;

const Cube = styled(motion.div)`
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const CubeFace = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: ${props => props.color || 'rgba(255, 255, 255, 0.1)'};
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
  
  &:nth-child(1) { 
    transform: rotateY(0deg) translateZ(100px);
    @media (max-width: 768px) {
      transform: rotateY(0deg) translateZ(75px);
    }
  }
  &:nth-child(2) { 
    transform: rotateY(90deg) translateZ(100px);
    @media (max-width: 768px) {
      transform: rotateY(90deg) translateZ(75px);
    }
  }
  &:nth-child(3) { 
    transform: rotateY(180deg) translateZ(100px);
    @media (max-width: 768px) {
      transform: rotateY(180deg) translateZ(75px);
    }
  }
  &:nth-child(4) { 
    transform: rotateY(-90deg) translateZ(100px);
    @media (max-width: 768px) {
      transform: rotateY(-90deg) translateZ(75px);
    }
  }
  &:nth-child(5) { 
    transform: rotateX(90deg) translateZ(100px);
    @media (max-width: 768px) {
      transform: rotateX(90deg) translateZ(75px);
    }
  }
  &:nth-child(6) { 
    transform: rotateX(-90deg) translateZ(100px);
    @media (max-width: 768px) {
      transform: rotateX(-90deg) translateZ(75px);
    }
  }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    white-space: normal;
    margin-top: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-top: 15px;
  }
`;

const TypingText = styled.span`
  border-right: 3px solid white;
  animation: blink 1s infinite;
  
  @keyframes blink {
    0%, 50% { border-color: white; }
    51%, 100% { border-color: transparent; }
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0.8;
  max-width: 500px;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background: ${props => props.primary ? 'white' : 'transparent'};
  color: ${props => props.primary ? '#ff6b6b' : 'white'};
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid white;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    background: ${props => props.primary ? '#f8f9fa' : 'white'};
    color: ${props => props.primary ? '#ff6b6b' : '#ff6b6b'};
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: white;
  opacity: 0.7;
  z-index: 10;
  
  @media (max-width: 768px) {
    bottom: 20px;
  }
`;

const ScrollText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;

const ScrollArrow = styled(motion.div)`
  width: 2px;
  height: 30px;
  background: white;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -3px;
    width: 8px;
    height: 8px;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    transform: rotate(45deg);
  }
`;

const Landing = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const jobTitles = ['Software Engineer', 'Full Stack Developer', 'AI Engineer'];
  
  useEffect(() => {
    const currentTitle = jobTitles[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
        }
      }
    }, isDeleting ? 100 : 150); // Faster deletion, slower typing
    
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, jobTitles]);
  
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LandingSection id="landing">
      <Container>
        <TextContent>
          <Title
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TypingText>{displayText}</TypingText>
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building Modern Web Applications
          </Subtitle>
          <Description
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I build scalable, efficient, and user-friendly applications 
            using React, JavaScript, TypeScript, Java Spring Boot, AWS and LLMs.
            <br />
            <br />
            I'm always eager to learn new technologies, solve complex problems and collaborate with smart people. Lets build something exceptional :)
          </Description>
        </TextContent>
        
        <CubeContainer>
          <Cube
            animate={{ 
              rotateX: [0, 360],
              rotateY: [0, 360],
              rotateZ: [0, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <CubeFace color="rgba(255, 107, 107, 0.2)" />
            <CubeFace color="rgba(255, 167, 38, 0.2)" />
            <CubeFace color="rgba(255, 107, 107, 0.2)" />
            <CubeFace color="rgba(255, 167, 38, 0.2)" />
            <CubeFace color="rgba(255, 107, 107, 0.2)" />
            <CubeFace color="rgba(255, 167, 38, 0.2)" />
          </Cube>
        </CubeContainer>
      </Container>
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <ScrollText>Scroll to explore</ScrollText>
        <ScrollArrow
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </ScrollIndicator>
    </LandingSection>
  );
};

export default Landing;
