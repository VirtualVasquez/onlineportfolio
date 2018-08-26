var express = require("express");

var router = express.Router();

//Import the model (project.js) to use its database functions.
var project = require("../models/project.js");

//create all our routes and set up lgic withing those routes where required.

router.get("/", function(req, res) {
  project.all(function(data) {
    var hbsObject = {
      project: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
}); 

//Export routes for server.js to use 
module.exports = router;