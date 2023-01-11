# How to set up a project with an express or node backend and a react frontend and we will be setting up an express backend API and display the data from the backend API onto the frontend using React.
- Express/Node + React Files/Folders
- Express-React =>project folder name
    - Create  folders names: 
    - client(frontend is the client folder) - directory will contain react code
    - server(backend is the server folder) - directory will be where we write all express inside of.
=================================================
# setting up the project files
- setting up files in the server
    cd server
    npm init - y ->to generate a package.json file
    - create server/server.js
    - npm i express'
    - install nodemon - If we make any changes without within server file, it'll automatically restart the server.
        - npm i nodemon -D =>Dev dependencies
        - package.js
        //create a script to start up server
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1",
                "start": "node server.js",
                "dev": "nodemon server"
            },
=================================================
- setting up files in the client
- cd client
- create react project => npx create-react-app . =>client project has been created.
- folder =>src => 
    - App.js
    //rfce
=================================================
- setting up the backend API in server.js file.
    - set up the backend API first
        - to set up backend - we need to import express first
        server.js
        const express = require('express');

        //create app
        const app = express();

        //set up a route for the API
        //In the frontend, we're going to fetch this user's array and display every single user.

        app.get("/api", (req, res) => {
            //send json array of users, this is the backend API
            res.json({"users": ["userOne", "userTwo", "userThree"]});
        })

        //start up backend
        app.listen(5000, () => {console.log("Server started on port 5000")});

        - terminal: server/npm run dev
        - http://localhost:5000/api
            - output:
            {"users":["userOne","userTwo","userThree"]} =>return json data of user's
        - display users onto the frontend with =>app.js file
            - to display these users, we will use uerEffect to fetch the API and to have these users. We will have them stored inside of a variable and then use that variable to display the users on the frontend.
    - then start server then
    - displaying the date from the backend to the frontend in this app.js file 
=================================================
//Express/Node + React Fetching The API
- setting up the frontend API in app.js file.
    - open package.json =>client folder
    - create a line in package.json, client; we put this line so we can make relative API requests and also avoid any issues that we might run into with cross origin.
     - "proxy": "http://localhost:5000",
     - client/src/App.js
     rfce
     import React, {useEffect, useState } from 'react';
     //create a state variable which will contain the back-end data that we get from the backend API 
     const [backendData, setBackendData] = useState([{}]);

     //to fetch backend API
     useEffect(() => {
        //the effect will be a fetch API, put the relative route. Once we fetch the api, whatever response that we get from the api, we're going to get the response in json. And then once you get the response in json, we will get the data inside the json.
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                //set that data to this backend data variable
                setBackendData(data)
            }
        )
        //pass in an empty array so that this only runs on the first render of the compoment
     }, [])

     - next, start up the frontend
        - client/
            - npm start -> start frontend on localhost:3000
    - render the users onto the web page
==================================================================================================
# Recap:
- First created backend server with express => server.js; in the backend, we set up a back-end API that returns a list of users and we will show those users on the frontend which is in react. To show in the frontend, we first set up a proxy in package.json file on the frontend and then used the useEffect hook to fetch the API and then store the data that the back end returned using the useState hook inside of the backend data variable, and then to display the data, we first check if the data has been retrieved or not and if it hasn't been retrieved, we just display loading...otherwise meaning that it has been retrieved, we map each user to a p tag and display them on frontend(localhost:3000)
- Then created frontend with react =>App.js


        