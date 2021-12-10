
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
The databse Schema for the movie express project  is show in the Entity relatoionship diagram (ERD)  below
<img width="500" alt="movie-db2" src="https://user-images.githubusercontent.com/71066745/145620525-b7b234b0-14bc-46e0-902d-a1431d03dead.PNG">

The project plan and tasks are handled by using project managment tool jira
<img style="text-align:center" width="550" alt="kanban_board" src="https://user-images.githubusercontent.com/71066745/145620870-43a489c6-62b4-4460-9e1e-90c93997b927.PNG">

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
## Testing
<img width="680" alt="test_coverage_report" src="https://user-images.githubusercontent.com/71066745/145643916-d49d12d5-ca5d-4839-b306-0e65efa74d63.PNG">

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
