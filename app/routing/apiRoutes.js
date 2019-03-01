var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        res.json(friends);
    })

    app.post("/api/friends", function(req,res){
       
        

        var user = req.body;
        var userScores = req.body.scores;
        var match = [];
        
        var difference = 0;
        var difference1 = 0;
        var difference2 = 0;
        for (var i = 0; i < userScores.length; i++){
            
            
            difference += Math.abs(parseInt(userScores[i])- parseInt(friends[0].scores[i]))
            difference1 += Math.abs(parseInt(userScores[i])- parseInt(friends[1].scores[i]))
            difference2 += Math.abs(parseInt(userScores[i])- parseInt(friends[2].scores[i]))
            
            console.log(difference)
            
        }
        // console.log(difference, difference1, difference2);
        match.push(difference,difference1,difference2);
        // console.log(match)

            
        var indexOfMinValue = match.indexOf(Math.min(...match))
        console.log(indexOfMinValue);

        friends.push(user);

        res.json({friend: friends[indexOfMinValue]});
    })
}

