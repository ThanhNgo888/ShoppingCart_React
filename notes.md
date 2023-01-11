# ReactJS Full Ecommerce site(MERN STACK) - Smart System Solutions
1. Installing required tools for react.js | How to setting up environment react
- Text Editor: Visual Studio Code: code.visualstudio.com/Download
- install node.js: nodejs.ort/en/download
    - NodeJS help us to run our code in the backend. This is runtime environment that help us to run JavaScript on the backend.
- Install Git: git-scm.com/downloads =>git for terminal(only install with windo OS, Mac doesn't need to.)
    - which help us to control the versions (terminal)
- Install Postman: postman.com/downloads
    - A software that help us to test our APIs, we are going to build our API on the backend, and then we will connect this API to the frontend. To test all these routes on the backend, we need a software such as Postman one of the best software to test APIs.
- mongodb.com/try/download/compass => because we are using the mongodb database as our database in this project so we need mongodb compass which is a software you can install and you can use it offline or online.
- We will handle and complete the project with the backend first and then we wil connect the backend API with the frontend using reactJS.
=======================================================================================
2. Start with backend | How to set basic project setup
- Setting up code on the backend, install all the required packages:
    - Express Mongo
    - rootDirectory/backend =>create a folders name backend and frontend under root-project
    - In terminal:
        rootDirectory => npm init
-  Install packages => terminal: ShoppingCart_React =>Ctr + l = clear terminal
    npm i express dotenv mongoose =>backend
        - dotent - to read environment variables
        - mongoose - for mongodb
=================================================
- ShoppingCart_React/server/app.js
const express = require('express');
const app = express();
module.exports = app;
=================================================
- server/server.js
const app = require('./app');

app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT}`);
});
=================================================
server/config/config.env
PORT = 4000;
NODE_ENV = DEVELOPMENT;
=================================================
- server/server.js
const app = require('./app');

const dotenv = require('dotenv');

//Setting up config file
dotenv.config*{ path: 'server/config/config.env'}

app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT}` in ${process.env.NODE_ENV} mode.`);
});
=================================================
terminal:
node server/server.js => Server started on PORT: 4000 in ...... node.
=======================================================================================
3. How to install Nodemon on react.js | Ecommerce site using react.js
- npm i nodemon --save-dev =>install this package as dev dependency(for development only)
    - package.json => nodemon installed
        - {
            "scripts": {
            "start": "node server/server.js",
            "dev" : "SET NODE_ENV=DEVELOPMENT& nodemon server/server",
            "prod": "SET NODE_ENV=PRODUCTION& nodemon server/server"
        },
        "dependencies": {
            "dotenv": "^16.0.3",
            "express": "^4.18.2",
            "mongoose": "^6.8.3"
        },
        "devDependencies": {
            "nodemon": "^2.0.20"
        }
        }
- terminal: ShoppingCart_React => npm run dev
    - Server started on PORT: 4000 in DEVELOPMENT mode.
    - npm run prod => run in production mode.
=================================================