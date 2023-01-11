const express = require('express');

//create app
const app = express();

//set up a route for the API => backend API
//in the frontend, we will fetch the users array and display every single user.
app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]});
})

app.listen(5000, () => {console.log("Server started on port 5000")});
