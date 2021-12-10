
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
<img width="768" alt="front-end-for our app" src="https://user-images.githubusercontent.com/71066745/145648088-af5b3551-e7fa-4f00-99a4-5472c418efca.PNG">


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

Fork and clone this repository then run npm install to add the relevant dependencies. Run npm run test to seed the database and confirm tests pass. Finally, run server.js to run the express server and interact with the Routes using Postman.
If you want to intiate a new node project:
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

## Contribution Guidelines
To make suggestions, create a new issue on this repo.
