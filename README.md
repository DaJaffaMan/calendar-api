# Calendar API

Express server to get calendar content, using Postgres as a RDBMS and typeorm as an ORM.

# Build status
[![Build Status](https://travis-ci.com/DaJaffaMan/calendar-api.svg?branch=master)](https://travis-ci.com/DaJaffaMan/calendar-api)

# Setup
Install NodeJS
 - `https://nodejs.org/en/download/`

In the root directory download all the required dependencies
 - `npm i`

Start a local DB instance of Postgress and run the typeorm migration scripts
 - `npm run compose:up`
 - `npm run migrate`

 Start the Express server
 - `npm start`
