-- Create the database
CREATE DATABASE IF NOT EXISTS yourdatabase;

-- Use the database
USE yourdatabase;

-- Create a sample table
CREATE TABLE IF NOT EXISTS your_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
);

-- Optional: Seed with test data
INSERT INTO your_table (name) VALUES ('Example 1'), ('Example 2');


CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY, 
username VARCHAR(50) NOT NULL, 
password VARCHAR(255) NOT NULL, 
email VARCHAR(100), 
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username, password, email) VALUES 
('testuser', 'hashed_password_here', 'test@example.com'), 
('testuser1', 'great_password_123', 'example@email.com'); 