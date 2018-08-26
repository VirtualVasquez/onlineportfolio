// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var project = {
  all: function(cb) {
    orm.all("projects", function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (projectsController.js).
module.exports = project;