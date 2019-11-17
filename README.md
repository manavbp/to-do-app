# Simple TO DO APP

## Table of contents

1. [About](#about)
1. [Build](#Build)
    - [Prerequisites](#prerequisites)
    - [Build steps](#build-steps)
    - [Server](#server)
    - [Testing](#Testing)

## About

This App is a simple to do app built with React, Redux , along with Django and MYSQL

## Build

### Prerequisites

- [Node.js](https://nodejs.org) ^8.0.0 (we recommend installing it via [nvm](https://github.com/creationix/nvm))
- [Git](https://git-scm.com/)
- [Yarn](https://yarnpkg.com) (as a replacement for `npm`).
- [Python](https://www.python.org/downloads/)
- [MYSQL](https://dev.mysql.com/downloads/windows/installer/8.0.html)
- [Django](https://www.djangoproject.com/download/)


### Build steps

- `git clone https://github.com/manavbp/to-do-app.git`
- `git checkout master` (`master` is the stable branch. `dev` is current working branch)
- `cd to-do-app`
- `yarn`

To build the app for dev mode run 
- `yarn build:dev`

To build the app for production mode run 
- `NODE_ENV=prod yarn build:prod`

And to run the app:

- `yarn dev`

And then redirect to localhost:8080

### Server

The Django server for this app has been set up but has not yet been connected to the front-end, due to time contraints I was not able to finish this. But the functionality of the server along with the mysql database is ready. Steps to run the server - 

- Open MySQL Workbench
- run the following command to create a database `create database todoapp`
- `use todoapp`
- Open another terminal and redirect to `./server` 
- Run `python manage.py makemigrations`
- `python manage.py migrate`
- `python manage.py runserver`
- Open your browser and redirect to `localhost:8000\admin`

Using Postman(https://www.getpostman.com/downloads/) the server along with the database can be validated.

### Testing

- `yarn test` runs jest (you have the optional `yarn test:watch`, too).
