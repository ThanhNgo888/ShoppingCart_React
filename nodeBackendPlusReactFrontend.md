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
    - then start server then
    - displaying the date from the backend to the frontend in this app.js file 
=================================================



        