// Data
// var friendData = require("../data/friendData");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });


  app.post("/api/clear", function() {

    friendData = [];


    console.log(friendData);
  });
};
