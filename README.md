
# Movie Express Project

## Table of Contents
* Introducton
* Features
* Technologies
* Project Planning
* Testing
* Setup and Geting Started
* Contribution Guidelines

## Introduction
This project is developed to perform CRUD operatinos on a movie database using the Node framework.


## Project Planning
The project plan and tasks are handled by using project managment tool jira
<img width="765" alt="kanbna_board2" src="https://user-images.githubusercontent.com/71066745/145644622-51912e07-c851-450f-a12b-191393127abe.PNG">


The databse Schema for the movie express project  is show in the Entity relatoionship diagram (ERD)  below
<img width="500" alt="movie-db2" src="https://user-images.githubusercontent.com/71066745/145620525-b7b234b0-14bc-46e0-902d-a1431d03dead.PNG">
## Technologies 

This project is created with:
* Jira
* draw.io
* nodejs
* express
* sqlite
* sequelize
* jest
* postman
## Setup
In your terminal - initialize a new node project with relevant dependencies
* npm init -y
* npm install jest sqlite3 sequelize express
* Check your package.json to confirm that dependencies were added
* Revise scripts in package.json:
* "scripts": {
    "test": "jest",
    "test:report": "jest --coverage=true"
  },
* Setup your SQLite3 database with a Sequelize ORM
