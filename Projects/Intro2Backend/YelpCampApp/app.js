const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

const campgrounds = [
    {name: "Salmon Creek", image: "https://pixabay.com/get/57e8dc414e5ba814f6da8c7dda793f7f1636dfe2564c704c7d2e73d39f49c15c_340.jpg"},
    {name: "Granire Hill", image: "https://pixabay.com/get/57e1d3404e53a514f6da8c7dda793f7f1636dfe2564c704c7d2e73d39f49c15c_340.jpg"},
    {name: "Mountain Great's Rest", image: "https://pixabay.com/get/5fe3dc46425ab108f5d084609620367d1c3ed9e04e50744174277cdc9349c1_340.jpg"},
    {name: "Salmon Creek", image: "https://pixabay.com/get/57e8dc414e5ba814f6da8c7dda793f7f1636dfe2564c704c7d2e73d39f49c15c_340.jpg"},
    {name: "Granire Hill", image: "https://pixabay.com/get/57e1d3404e53a514f6da8c7dda793f7f1636dfe2564c704c7d2e73d39f49c15c_340.jpg"},
    {name: "Mountain Great's Rest", image: "https://pixabay.com/get/5fe3dc46425ab108f5d084609620367d1c3ed9e04e50744174277cdc9349c1_340.jpg"},
    {name: "Salmon Creek", image: "https://pixabay.com/get/57e8dc414e5ba814f6da8c7dda793f7f1636dfe2564c704c7d2e73d39f49c15c_340.jpg"},
    {name: "Granire Hill", image: "https://pixabay.com/get/57e1d3404e53a514f6da8c7dda793f7f1636dfe2564c704c7d2e73d39f49c15c_340.jpg"},
    {name: "Mountain Great's Rest", image: "https://pixabay.com/get/5fe3dc46425ab108f5d084609620367d1c3ed9e04e50744174277cdc9349c1_340.jpg"}
];

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: campgrounds})
});

app.post("/campgrounds", function(req, res) {
    const name = req.body.name;
    const image = req.body.name;
    const newCampground = {name: name, image: image};

    campgrounds.push(newCampground);
    res.redirect("/campgrounds");

});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

app.listen(3000, function() {
    console.log("YelpCamp server is now running!");
});

