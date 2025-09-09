import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.08)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(20px)' : 'blur(0px)'};
  border-bottom: ${props => props.scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent'};
  box-shadow: ${props => props.scrolled ? '0 8px 32px rgba(0, 0, 0, 0.1)' : '0 0px 0px rgba(0, 0, 0, 0)'};
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 1rem 0;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.scrolled ? '#333' : '#fff'};
  transition: color 0.3s ease;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLink = styled.li`
  a {
    color: ${props => props.scrolled ? '#333' : '#fff'};
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
      color: #ff6b6b;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: #ff6b6b;
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 100%;
    }
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <Nav>
        <Logo scrolled={scrolled}>João Pontes</Logo>
        <NavLinks>
          <NavLink scrolled={scrolled}>
            <a href="#landing" onClick={(e) => { e.preventDefault(); scrollToSection('landing'); }}>
              Home
            </a>
          </NavLink>
          <NavLink scrolled={scrolled}>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
              About
            </a>
          </NavLink>
          <NavLink scrolled={scrolled}>
            <a href="#work" onClick={(e) => { e.preventDefault(); scrollToSection('work'); }}>
              Work
            </a>
          </NavLink>
          <NavLink scrolled={scrolled}>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              Contact
            </a>
          </NavLink>
          <NavLink scrolled={scrolled}>
            <a href="#resume" onClick={(e) => { e.preventDefault(); scrollToSection('resume'); }}>
              Resume
            </a>
          </NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
