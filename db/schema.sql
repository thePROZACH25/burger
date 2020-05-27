-- Database code to use in MySQL
CREATE DATABASE burgers_db;
USE burgers_db;

-- Name of table and colums for database
CREATE TABLE burgers
(
	id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false
);
