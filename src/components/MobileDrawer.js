import React from 'react';
import styled from 'styled-components';
import { FaTimes, FaHome, FaUser, FaBriefcase, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const DrawerOverlay = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    z-index: 998;
    transition: opacity 0.3s ease;
  }
`;

const DrawerContainer = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-75%'};
    width: 75%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    z-index: 1001;
    transition: right 0.3s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  }
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 1rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const DrawerLogo = styled.img`
  height: 40px;
  width: auto;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;
`;

const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const DrawerItem = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
`;

const DrawerLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  color: #333;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ff6b6b;
    background: rgba(255, 107, 107, 0.05);
  }
`;

const DrawerIcon = styled.span`
  font-size: 1.2rem;
  width: 20px;
  text-align: center;
`;

const MobileDrawer = ({ isOpen, onClose, onNavigate }) => {
  const handleNavigation = (sectionId) => {
    onNavigate(sectionId);
    onClose();
  };

  return (
    <>
      <DrawerOverlay isOpen={isOpen} onClick={onClose} />
      <DrawerContainer isOpen={isOpen}>
        <DrawerHeader>
          <DrawerLogo src="/logos/JP-logo.png" alt="JP Logo" />
          <CloseButton onClick={onClose}>
            <FaTimes />
          </CloseButton>
        </DrawerHeader>
        <DrawerContent>
          <DrawerItem>
            <DrawerLink 
              href="#landing" 
              onClick={(e) => { e.preventDefault(); handleNavigation('landing'); }}
            >
              <DrawerIcon><FaHome /></DrawerIcon>
              Home
            </DrawerLink>
          </DrawerItem>
          <DrawerItem>
            <DrawerLink 
              href="#about" 
              onClick={(e) => { e.preventDefault(); handleNavigation('about'); }}
            >
              <DrawerIcon><FaUser /></DrawerIcon>
              About
            </DrawerLink>
          </DrawerItem>
          <DrawerItem>
            <DrawerLink 
              href="#work" 
              onClick={(e) => { e.preventDefault(); handleNavigation('work'); }}
            >
              <DrawerIcon><FaBriefcase /></DrawerIcon>
              Work
            </DrawerLink>
          </DrawerItem>
          <DrawerItem>
            <DrawerLink 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); handleNavigation('contact'); }}
            >
              <DrawerIcon><FaEnvelope /></DrawerIcon>
              Contact
            </DrawerLink>
          </DrawerItem>
          <DrawerItem>
            <DrawerLink 
              href="#resume" 
              onClick={(e) => { e.preventDefault(); handleNavigation('resume'); }}
            >
              <DrawerIcon><FaFileAlt /></DrawerIcon>
              Resume
            </DrawerLink>
          </DrawerItem>
        </DrawerContent>
      </DrawerContainer>
    </>
  );
};

export default MobileDrawer;
