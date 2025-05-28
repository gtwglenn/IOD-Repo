


CREATE DATABASE IF NOT EXISTS yourdatabase; 
USE yourdatabase; 

                                         -- FOR DEBUGGING / REBUILDING DATABASE 
-- DROP DATABASE IF EXISTS yourdatabase;
-- CREATE DATABASE yourdatabase;
-- USE yourdatabase;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    instrument VARCHAR(100),
    role VARCHAR(100),
    storeLocation VARCHAR(100) DEFAULT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ADD TO USERS: ROLE + INSTRUMENT FOR MYPROFILE 

-- need table for store schedule: store#, date, 

    -- OR table: userID, date, times, storeLocation 
        -- from this table --> group t/g by storeLocation --> then separate into: DailySchedule(), WeeklySchedule(), MonthlySchedule() 

-- table for daily schedules? then daily schedules will be grouped together by month? year? 

-- daily: 9AM - 5PM, block each 30min; --> DailySchedule() 

    -- DailySchedule() --> WeeklySchedule() --> MonthlySchedule() 

-- additionally: group/organize/filter? schedules by userID --> MySchedule() 


-- Add test user
-- INSERT IGNORE INTO users (firstName, lastName, username, password, email) VALUES 
-- ('Test', 'User', 'testuser', '$2b$10$eYtkgz1Or1dTJGc1A9z3YuklG3b0kDpoI9nIojg49wPBXrxKmnUJK', 'test@example.com');


-- // changes for GIT commit 