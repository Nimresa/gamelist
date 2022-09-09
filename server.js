const express = require("express");
const fs = require('fs');
const _ = require('lodash');
const app = express();

app.get("/", function(req, res){
    res.send("<h1> Hello, world! </h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: kialapsina@gmail.com");
});

app.get("/about", function(req, res){
    res.send("My favorit colors are black and red.");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>games</li><li>movies</li><li>montains</li><li>larp</li><li>swords</li><li>fantasy stories</li></ul>");
});

app.listen(3000, function(){
    console.log("Sever started on port 3000");
});