-- Portfolio Database Initialization Script
-- This script sets up the PostgreSQL database for the portfolio website

-- Create database (run this as superuser)
-- CREATE DATABASE portfolio_db;

-- Create user (run this as superuser)
-- CREATE USER portfolio_user WITH PASSWORD 'portfolio_password';

-- Grant privileges
-- GRANT ALL PRIVILEGES ON DATABASE portfolio_db TO portfolio_user;

-- Connect to portfolio_db and create tables
\c portfolio_db;

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_read BOOLEAN DEFAULT FALSE
);

-- Create projects table (for future use)
CREATE TABLE IF NOT EXISTS projects (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    github_url VARCHAR(500),
    demo_url VARCHAR(500),
    tech_stack TEXT[],
    image_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create skills table (for future use)
CREATE TABLE IF NOT EXISTS skills (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    category VARCHAR(50) NOT NULL,
    proficiency_level INTEGER CHECK (proficiency_level >= 1 AND proficiency_level <= 5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO skills (name, category, proficiency_level) VALUES
('React', 'Frontend', 5),
('JavaScript', 'Frontend', 5),
('HTML5', 'Frontend', 5),
('CSS3', 'Frontend', 5),
('Java', 'Backend', 5),
('Spring Boot', 'Backend', 5),
('PostgreSQL', 'Database', 4),
('AWS', 'Cloud', 4),
('Docker', 'DevOps', 3),
('Git', 'DevOps', 5)
ON CONFLICT (name) DO NOTHING;

INSERT INTO projects (title, description, github_url, demo_url, tech_stack) VALUES
('E-Commerce Platform', 'A full-stack e-commerce application built with React frontend, Java Spring Boot backend, and PostgreSQL database.', 'https://github.com/yourusername/ecommerce-platform', 'https://your-demo-url.com', ARRAY['React', 'Java', 'Spring Boot', 'PostgreSQL', 'AWS']),
('Task Management App', 'A collaborative task management application with real-time updates and team collaboration features.', 'https://github.com/yourusername/task-manager', 'https://your-demo-url.com', ARRAY['React', 'Node.js', 'WebSocket', 'MongoDB', 'Docker']),
('Weather Dashboard', 'A responsive weather dashboard that provides real-time weather data and forecasts.', 'https://github.com/yourusername/weather-dashboard', 'https://your-demo-url.com', ARRAY['React', 'JavaScript', 'Chart.js', 'API Integration']),
('Social Media Analytics', 'A comprehensive analytics platform for social media metrics and user engagement tracking.', 'https://github.com/yourusername/social-analytics', 'https://your-demo-url.com', ARRAY['React', 'Python', 'Django', 'PostgreSQL', 'AWS'])
ON CONFLICT DO NOTHING;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at);
CREATE INDEX IF NOT EXISTS idx_contact_messages_is_read ON contact_messages(is_read);
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at);
CREATE INDEX IF NOT EXISTS idx_skills_category ON skills(category);

-- Grant permissions to portfolio_user
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO portfolio_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO portfolio_user;
