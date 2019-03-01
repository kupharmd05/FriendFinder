var express = require("express");

var app = express();

var port = process.env.port || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(port,"0.0.0.0", function(){
    console.log("Listening on PORT: "+ port);
});