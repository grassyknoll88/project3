var express = require("express");

var router = express.Router();
// grabbing our models
var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/owners");
});

// get route, edited to match sequelize
router.get("/owners", (req, res) => {
  // replace old function with sequelize function
  db.Dog.findAll({
    attributes: { exclude: ['password']},
    // Here we specify we want to return our dogs in ordered by ascending dog breed
    order: [
      ["location", "ASC"]
    ]
  })
  // use promise method to pass the dogs...
    .then(function(dbDog) {
      res.json(dbDog);
    });
});

// post route to create dogs
router.post("/signup", function(req, res) {  //or api/users
  db.Dog.create({
    // id: req.body.id,
    username: req.body.username,
    password: req.body.password,
    last_login: req.body.log_in,
    name: req.body.name,
    location: req.body.location,
    breed: req.body.breed,
    size: req.body.size,
    description: req.body.description,
    email: req.body.email,
    imgurl: req.body.imgurl
  })
  .then(function(dbPost) {
      console.log(dbPost);
      res.json(dbPost); //or dbDog
      res.redirect("/profile"); //redirect to profile
  });
});
//route for redirection to profile after login
router.post("/login", function(req, res) {
    res.json("/profile");
  });
//
  router.get("/owners/dog/:id", (req, res) => {
    const id = req.params.id;
    db.Dog.find({
      where: { id: id }
    })
    .then(Dog => {
      res.json(owner);
    });
  });
  router.delete("/owners/dog/:id", (req,res) => {
    const id = req.params.id;
    db.Dog.destroy({
      where: { id: id }
    })
    .then(deletedDog => {
      res.json(deletedOwner);
    });
  });
  
    // dog.update(req.params.id, function(result) {
    //   // wrapper for orm.js that using MySQL update callback will return a log to console,
    //   // render back to index with handle
    //   console.log(result);
    //   // Send back response and let page reload from .then in Ajax
  //   //   res.json("/");
  //   });
  // });

// router.post("/api/signup", function(req, res) {
//     db.User.create({
//       email: req.body.email,
//       password: req.body.password
//     }).then(function(user) {
//       res.redirect(303, "/profile");
//     }).catch(function(err) {
//       res.json(err);
    
//     });
//   });

// put route -> back to index
router.put("/dogs/update/:id", function(req, res) {
  dog.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.json("/");
  });
});


module.exports = router;