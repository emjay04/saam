var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    console.log("You are now in landing page");
    res.render("index");
});

// router.get("/home", function(req, res) {
//     console.log("You are now in Home page")
//     res.render("home");
// });

router.get("/about", function(req, res) {
    console.log("You are now in About page")
    res.render("about");
});

module.exports = router;