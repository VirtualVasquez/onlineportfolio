CREATE DATABASE projects_db;
USE projects_db;

CREATE TABLE projects;
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	url varchar(255) NOT NULL,
	description varchar(500) NOT NULL,
	toptech varchar (100) NOT NULL,
	tech2 varchar (100) NOT NULL,
	tech3 var char (100) NOT NULL,
	PRIMARY KEY (id)
);

