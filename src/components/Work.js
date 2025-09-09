import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaGraduationCap, FaProjectDiagram } from 'react-icons/fa';
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiSpring, 
  SiPostgresql, 
  SiAmazonaws, 
  SiDocker, 
  SiGit,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiExpress,
  SiJest,
  SiGithub,
  SiIntellijidea,
  SiVisualstudiocode,
  SiFlask
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const WorkSection = styled.section`
  min-height: 100vh;
  background: white;
  padding: 100px 0 150px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  background: #f8f9fa;
  border-radius: 16px;
  padding: 0.5rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 1200px) {
    max-width: 100%;
    margin: 0 20px 3rem 20px;
  }
`;

const SubHeaderItem = styled.button`
  flex: 1;
  padding: 1rem 2rem;
  border: none;
  background: ${props => props.active ? 'white' : 'transparent'};
  color: ${props => props.active ? '#ff6b6b' : '#666'};
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: ${props => props.active ? '0 4px 12px rgba(255, 107, 107, 0.2)' : 'none'};
  
  &:hover {
    color: #ff6b6b;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }
`;

const ContentContainer = styled.div`
  min-height: 600px;
  position: relative;
  margin-bottom: 2rem;
`;

const ContentSection = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

// Tech Stack Styles
const TechCategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 3rem auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (max-width: 1200px) {
    max-width: 100%;
    margin: 0 20px 3rem 20px;
  }
`;

const TechCategory = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
  border-bottom: 2px solid #ff6b6b;
  padding-bottom: 0.5rem;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1rem;
  
  &.backend-grid {
    grid-template-columns: repeat(4, 1fr);
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }
  
  &.dev-tools-grid {
    grid-template-columns: repeat(3, 1fr);
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }
`;

const TechCard = styled(motion.div)`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.2);
    background: white;
  }
`;

const TechIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #ff6b6b;
`;

const TechName = styled.h4`
  font-size: 0.8rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

// Education Styles
const EducationContent = styled.div`
  max-width: 800px;
  margin: 0 auto 1rem auto;
`;

const EducationCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const EducationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const EducationInfo = styled.div`
  flex: 1;
  
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
    margin: 0;
  }
`;

const GPABadge = styled.div`
  background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
`;

const TeamPhoto = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 16px;
  overflow: hidden;
  margin-top: 1rem;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
`;

// Projects Styles
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  height: 150px;
  background: linear-gradient(135deg, ${props => props.gradient || '#ff6b6b 0%, #ffa726 100%'});
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    padding: 10px;
    box-sizing: border-box;
  }
  
  .fallback-text {
    position: relative;
    z-index: 2;
    background: rgba(0, 0, 0, 0.7);
    padding: 0.5rem 1rem;
    border-radius: 8px;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  
  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.8rem;
  }
  
  p {
    color: #666;
    line-height: 1.5;
    margin-bottom: 1.2rem;
    font-size: 0.95rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.2rem;
`;

const TechTag = styled.span`
  background: #f0f0f0;
  color: #666;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: ${props => props.primary ? 'linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%)' : 'transparent'};
  color: ${props => props.primary ? 'white' : '#ff6b6b'};
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid #ff6b6b;
  
  &:hover {
    transform: translateY(-2px);
    background: ${props => props.primary ? 'linear-gradient(135deg, #ff5252 0%, #ff9800 100%)' : '#ff6b6b'};
    color: white;
  }
`;

const Work = () => {
  const [activeSection, setActiveSection] = useState('tech');

  const techStack = {
    programmingLanguages: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Java', icon: FaJava },
      { name: 'Python', icon: SiPython }
    ],
    frontend: [
      { name: 'React', icon: SiReact },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Jest', icon: SiJest }
    ],
    backend: [
      { name: 'Spring Boot', icon: SiSpring },
      { name: 'REST API', icon: FaCode },
      { name: 'Express', icon: SiExpress },
      { name: 'Flask', icon: SiFlask },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'AWS', icon: SiAmazonaws }
    ],
    devTools: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'IntelliJ', icon: SiIntellijidea },
      { name: 'VS Code', icon: SiVisualstudiocode }
    ]
  };

  const projects = [
    {
      id: 1,
      title: "Nota - Engineering Capstone",
      description: "A full-stack production ready social media app. We sought out to build a social media app that used anonymous geo-tagged posts for user to explore and interact with. The point of this project was to show off our ability to make a fully scalable, production ready app equipped with automated testing, CI/CD, and more.",
      tech: ["React", "Express", "MongoDB", "Node.js", "Jest"],
      gradient: "#ff6b6b 0%, #ffa726 100%",
      githubUrl: "https://github.com/Dubble-bubble-original/engg4000",
      image: "/project-imgs/nota-logo.png"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Hope you're enjoying it! Just a little something I made to show off my work and skills.",
      tech: ["React", "Spring Boot", "AWS", "Docker"],
      gradient: "#ffa726 0%, #ff6b6b 100%",
      githubUrl: "https://github.com/JoaoPontes98/portfolio-website",
      image: "/project-imgs/JP-logo-background.png"
    }
  ];

  const renderTechStack = () => (
    <TechCategoriesGrid>
      {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
        <TechCategory
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
        >
          <CategoryTitle>
            {category === 'programmingLanguages' ? 'Programming Languages' :
             category === 'frontend' ? 'Frontend' :
             category === 'backend' ? 'Backend' :
             category === 'devTools' ? 'Dev Tools' : category}
          </CategoryTitle>
          <TechGrid className={
            category === 'backend' ? 'backend-grid' : 
            category === 'devTools' ? 'dev-tools-grid' : ''
          }>
            {technologies.map((tech, techIndex) => {
              const IconComponent = tech.icon;
              return (
                <TechCard
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                >
                  <TechIcon>
                    <IconComponent />
                  </TechIcon>
                  <TechName>{tech.name}</TechName>
                </TechCard>
              );
            })}
          </TechGrid>
        </TechCategory>
      ))}
    </TechCategoriesGrid>
  );

  const renderEducation = () => (
    <EducationContent>
      <EducationCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <EducationHeader>
          <EducationInfo>
            <h3>Bachelor of Science in Software Engineering</h3>
            <h4>University of New Brunswick | May 2022 Grad</h4>
            <p>Co-Founder & President of UNB Developer Society</p>
            <p>IEEE NB Section Prize @ 2022 Engineering Design Symposium (Capstone Project)</p>
          </EducationInfo>
          <GPABadge>3.9 GPA</GPABadge>
        </EducationHeader>
        <TeamPhoto>
          <img 
            src="/capstone.jpeg" 
            alt="Capstone Engineering Team Photo" 
          />
        </TeamPhoto>
      </EducationCard>
    </EducationContent>
  );

  const renderProjects = () => (
    <ProjectsGrid>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <ProjectImage gradient={project.gradient}>
            {project.image ? (
              <img 
                src={project.image} 
                alt={`${project.title} project image`}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            ) : null}
            <div className="fallback-text" style={{ display: project.image ? 'none' : 'flex' }}>
              {project.title.charAt(0)}
            </div>
          </ProjectImage>
          <ProjectContent>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <TechStack>
              {project.tech.map((tech, techIndex) => (
                <TechTag key={techIndex}>{tech}</TechTag>
              ))}
            </TechStack>
            <ProjectLinks>
              <LinkButton href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub />
                View Code
              </LinkButton>
            </ProjectLinks>
          </ProjectContent>
        </ProjectCard>
      ))}
    </ProjectsGrid>
  );

  return (
    <WorkSection id="work">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Work
        </SectionTitle>
        
        <SubHeader>
          <SubHeaderItem 
            active={activeSection === 'tech'} 
            onClick={() => setActiveSection('tech')}
          >
            <FaCode />
            Tech Stack
          </SubHeaderItem>
          <SubHeaderItem 
            active={activeSection === 'education'} 
            onClick={() => setActiveSection('education')}
          >
            <FaGraduationCap />
            Education
          </SubHeaderItem>
          <SubHeaderItem 
            active={activeSection === 'projects'} 
            onClick={() => setActiveSection('projects')}
          >
            <FaProjectDiagram />
            Projects
          </SubHeaderItem>
        </SubHeader>

        <ContentContainer>
          <AnimatePresence mode="wait">
            <ContentSection
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {activeSection === 'tech' && renderTechStack()}
              {activeSection === 'education' && renderEducation()}
              {activeSection === 'projects' && renderProjects()}
            </ContentSection>
          </AnimatePresence>
        </ContentContainer>
      </Container>
    </WorkSection>
  );
};

export default Work;
