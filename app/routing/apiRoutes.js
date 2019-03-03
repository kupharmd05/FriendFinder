var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        res.json(friends);
    })

    app.post("/api/friends", function(req,res){
       
        let bestDiff = 41;
        var bestIndex = 0;

        var user = req.body;
        var userScores = req.body.scores;
        // var match = [];
        
        console.log(userScores);
        
        // var difference = 0;
        // var difference1 = 0;
        // var difference2 = 0;
        for (var i = 0; i < friends.length; i++){
            diffArray=[];
            for (var j=0; j<10;j++){
                let diff = Math.abs(parseInt(userScores[j])-(friends[i].scores[j]));
                diffArray.push(diff);
                if (j ===9){
                    let totalDiff = diffArray.reduce((acc,val)=> acc + val);
                    if (totalDiff < bestDiff) {
                        bestDiff = totalDiff;
                        bestIndex = i;
                    };
                };
            };
            
            if (i === (friends.length -1)){
                res.json(friends[bestIndex])
                console.log(friends[bestIndex])
            }
     
            
        }

        friends.push(user);

       
    })
}

