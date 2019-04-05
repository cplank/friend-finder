//linking our routes to a series of data
let friendsData = require("../data/friends")

//routing
module.exports = function (app) {
    //API GET requests. Below code handles when users visit a page
    //In each of the below cases when a user visits a link
    //they are shown a JSON of the data in a table

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        //This wil be used to handle incoming survey results
        //this route will also be used to handle the compatibility logic
    })
}