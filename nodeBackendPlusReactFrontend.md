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
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1",
                "start": "node server.js",
                "dev": "nodemon server"
            },
        