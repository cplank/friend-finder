//dependencies 
const path = require("path");

//routes

module.exports = function (app) {
    //HTML GET requests. Below code handles when users visit
    //a page. In each of the below cases, the user is shown
    //an HTML page

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
        console.log("You've hit home")
    });

    //if no matching route, go home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
        console.log("Youve maybe also hit home");
    })

}