// call express framework
var express = require("express");
var app = express();

// First route
app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

// Second route
app.get("/speak/:animal", function(req, res) {
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'");
});

// Third route 
app.get("/repeat/:message/:times", function(req, res) {
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    for (var i = 0; i < times; i++) {
        result += " " + message;
    };
    res.send(result);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000, function() {
    console.log("Server is now runnning so you better go catch it lmao!");
});