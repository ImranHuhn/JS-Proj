var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Booyahhh!");
});

app.get("/bye", function (req, res) {
    res.send("Adios!");
});

app.get("/dog", function(req, res) {
    res.send("MEOW!");
});

app.get("*", function(req, res) {
    res.send("Sorry, no such link. Try another...");
});

app.listen(3000, function() {
    console.log("Server has started!");
});