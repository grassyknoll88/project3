// var express = require("express");
var router = require("express").Router();
// grabbing our models
var db = require("../../models");

// get route, edited to match sequelize
router.get("/api/dogs", (req, res) => {
  // replace old function with sequelize function
  db.Dog.findAll({
    attributes: { exclude: ['password']},
    // Here we specify we want to return our dogs in ordered by ascending dog breed
    order: [
      ["location", "ASC"] //this is where we need to group by zipcode
    ]
  })
  // use promise method to pass the dogs...
    .then(function(dbDog) {
      res.json(dbDog);
    });
});

// post route to create dogs
router.post("/api/signup", function(req, res) {  //or api/users
  db.Dog.create({
    id: req.body.id,
    username: req.body.username,
    password: req.body.password,
    // last_login: req.body.log_in,
    name: req.body.name,
    location: req.body.location,
    breed: req.body.breed,
    size: req.body.size,
    description: req.body.description,
    email: req.body.email,
    // imgurl: req.body.imgurl
  })
  .then(function(dbDog) {
      console.log(dbDog);
      res.json(dbDog); 
  });
});

//route for login
router.get("/api/login", function(req, res) {
    db.Dog.findOne({
        username: req.body.username,
        password: req.body.password,  
    })
  });

router.get("/api/profile", function(req, res) {
    db.Dog.findOne({
        where: { id: id }
    })
})


module.exports = router;