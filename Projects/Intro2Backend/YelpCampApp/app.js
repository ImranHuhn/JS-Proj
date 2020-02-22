const express = require("express");
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

const campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});
const Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Granire Hill", 
//         image: "https://cdn.pixabay.com/photo/2017/08/04/20/04/camping-2581242_960_720.jpg",
//         description: "This is a huge granite hill, no bathrooms. No water. Beatiful granite!"
//     }, function(err, campground) {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("NEWLY CREATED CAMPGROUND:");
//             console.log(campground);
//         }
//     });

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    Campground.find({}, function(err, allCampgrounds) {
        if(err) {
            console.log(err);
        } else {
            res.render("index", {campgrounds: allCampgrounds})
        }
    });
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

app.post("/campgrounds", function(req, res) {
    const name = req.body.name;
    const image = req.body.image;
    const desc = req.body.description;
    const newCampground = {name: name, image: image, description: desc};
    Campground.create(newCampground, function(err, newlyCreated) {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/:id", function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground) {
        if(err) {
            console.log(err);
        } else {
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(3000, function() {
    console.log("YelpCamp server is now running!");
});

