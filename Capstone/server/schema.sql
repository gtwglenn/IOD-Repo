-- Create the database
CREATE DATABASE IF NOT EXISTS yourdatabase;

-- Use the database
USE yourdatabase;

-- Sample data table (optional)
CREATE TABLE IF NOT EXISTS your_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
);

INSERT INTO your_table (name) VALUES ('Example 1'), ('Example 2');

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Add test user
INSERT IGNORE INTO users (first_name, last_name, username, password, email) VALUES 
('Test', 'User', 'testuser', '$2b$10$eYtkgz1Or1dTJGc1A9z3YuklG3b0kDpoI9nIojg49wPBXrxKmnUJK', 'test@example.com');


-- // changes for GIT commit 