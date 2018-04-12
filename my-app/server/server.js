var express =require("express");
var path = require("path");
var bodyParser = require("body-parser");

var index = require("./routes/index");
//api to use with mongodb
var clientList = require();

//Creates express variable
var app = express();

//Creates port
var port = 3000;

app.listen(port, function(){
    console.log("Server running on port, ", port);
});
app.set("views", path.join(_dirname, "views"));
app.set("view engin", "ejs");
app.engin("html", require("ejs".renderFile));

