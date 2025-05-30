-- -- 💣 RESET DATABASE
-- DROP DATABASE IF EXISTS yourdatabase;
-- CREATE DATABASE yourdatabase;
-- USE yourdatabase;

CREATE DATABASE IF NOT EXISTS yourdatabase; 
USE yourdatabase;

-- 🏬 STORES TABLE
CREATE TABLE IF NOT EXISTS stores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  store_code VARCHAR(10) UNIQUE NOT NULL, -- e.g., 'Store001'
  name VARCHAR(100)
);

-- 🎵 INSTRUMENTS TABLE
CREATE TABLE IF NOT EXISTS instruments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

-- 👨‍🎓 USERS TABLE (Students Only)
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

-- 👩‍🏫 TEACHERS TABLE
CREATE TABLE IF NOT EXISTS teachers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  username VARCHAR(50),
  store_id INT NOT NULL,
  store_code VARCHAR(50),
  instrument VARCHAR(100),
  FOREIGN KEY (store_id) REFERENCES stores(id)
);

-- 🔗 TEACHER-INSTRUMENT JUNCTION TABLE
CREATE TABLE IF NOT EXISTS teacher_instruments (
  teacher_id INT,
  instrument_id INT,
  FOREIGN KEY (teacher_id) REFERENCES teachers(id),
  FOREIGN KEY (instrument_id) REFERENCES instruments(id),
  PRIMARY KEY (teacher_id, instrument_id)
);

-- 📅 LESSONS TABLE
CREATE TABLE IF NOT EXISTS lessons (
  id INT AUTO_INCREMENT PRIMARY KEY,
  teacher_id INT,
  student_id INT,
  store_id INT,
  instrument_id INT,
  date DATE,
  start_time TIME,
  end_time TIME,
  status VARCHAR(50), 
  FOREIGN KEY (teacher_id) REFERENCES teachers(id),
  FOREIGN KEY (student_id) REFERENCES users(id),
  FOREIGN KEY (store_id) REFERENCES stores(id),
  FOREIGN KEY (instrument_id) REFERENCES instruments(id)
);

-- 🌐 SEED STORES
INSERT IGNORE INTO stores (store_code, name) VALUES
('Store001', 'StoreLocation001'),
('Store002', 'StoreLocation002'),
('Store003', 'StoreLocation003');

-- 🎸 SEED INSTRUMENTS
INSERT IGNORE INTO instruments (name) VALUES
('Piano'),
('Guitar'),
('Drums');

-- 👩‍🏫 SEED TEACHERS
-- Assumes stores auto-incremented as 1, 2, 3
INSERT INTO teachers (firstName, lastName, username, store_id, store_code, instrument) VALUES
('John', 'Doe', 'jdoe', 1, 'Store001', 'Piano'),
('Jane', 'Smith', 'jsmith', 1, 'Store001', 'Guitar'),
('Tom', 'Brown', 'tbrown', 1, 'Store001', 'Drums'),
('Ludwig', 'Beethoven', 'lbeeth', 1, 'Store001', 'Piano'),
('Eric', 'Clapton', 'eclapton', 2, 'Store002', 'Guitar'),
('Paul', 'McCartney', 'pmccartney', 3, 'Store003', 'Guitar');

-- 🔗 LINK TEACHERS TO INSTRUMENTS
-- Match IDs from `SELECT * FROM teachers;` if needed
INSERT IGNORE INTO teacher_instruments (teacher_id, instrument_id) VALUES
(4, 1),  -- Beethoven → Piano
(5, 2),  -- Clapton → Guitar
(6, 2),  -- McCartney → Guitar
(6, 1);  -- McCartney → Piano
