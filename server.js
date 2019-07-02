//dependencies

const express = require("express");
const path = require("path")

//set up express
const app = express();
const PORT = process.env.PORT || 8008;

//set up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve up static files
app.use(express.static("public"));


//use routes to give the server a map of how to respond 

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//LISTENER to start the server

app.listen(PORT, function () {
    console.log("App is listening on PORT:" + PORT);
})