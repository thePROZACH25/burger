CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	burger_name varchar(35) NOT NULL,
	devoured BOOLEAN DEFAULT false
);
