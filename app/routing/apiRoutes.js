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
        let userScore = req.body.userScore;
        let lowestScore = 50;
        let bestFriend = {};

        //compare each inde of userScore to each index of friendsData.scores.
        //will need to loop through friendsData and then also loop through scores.
        for (let i = 0; i < friendsData.length; i++) {
            let scoutScore = friendsData[i].scores;
            let friendDiff = compareScores(userScore, scoutScore);
            console.log(friendDiff);
            if (lowestScore > friendDiff) {
                lowestScore = friendDiff
                bestFriend = friendsData[i];
            }
        }
        res.json(bestFriend);


        function compareScores(arr1, arr2) {
            let totalDiff = 0;
            for (let i = 0; i < arr1.length; i++) {
                let elementDiff = parseInt(arr1[i]) - parseInt(arr2[i]);
                elementDiff = Math.abs(elementDiff);
                totalDiff = totalDiff + elementDiff
            }
            console.log(arr1, arr2)
            return totalDiff;
        }
    })
}