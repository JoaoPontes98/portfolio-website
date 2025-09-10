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


-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at);
CREATE INDEX IF NOT EXISTS idx_contact_messages_is_read ON contact_messages(is_read);

-- Grant permissions to portfolio_user
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO portfolio_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO portfolio_user;
