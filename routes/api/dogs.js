//const express = require("express");
const router = require("express").Router();
// grabbing our models
const db = require("../../models");
const passport = require("../../config/passport");
const Passport = require('passport');
//const bcrypt = require("bcrypt-nodejs");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const Sequelize = require("sequelize");
const keys = require ("../../config/keys");


module.exports = function (app) {
  // get route, edited to match sequelize
  app.get("/api/dogs", (req, res) => {
    // replace old function with sequelize function
    db.Dog.findAll({
      //attributes that will not reflect on the dog card on the search page
      attributes: {

        exclude: [
          "password",

        ]

      },
      order: [["state"]]
    })
      // use promise method to pass the dogs...
      .then(function (dbDog) {
        res.json(dbDog);
      });
  });
 
// post route to create dogs (for cards)
app.post("/api/signup", function(req, res) {
  //or api/users
  db.Dog.create({
    id: req.body.id,
    username: req.body.username,
    password: req.body.password,
    pet_name: req.body.pet_name,
    breed: req.body.breed,
    city: req.body.city,
    state: req.body.state,
    description: req.body.description,
    email: req.body.email,
    imgurl: req.body.imgurl
  }).then(function(dbDog) {
    console.log(dbDog);
    res.json(dbDog);
  });
});


  // post route to create a new user
  app.post("/api/register", (function (req, res) {
    db.Dog.findOne({
      where: {
        username: req.body.username
      }

    }).then(function (dbDog) {
      if (dbDog) {

        return {
          message: "username already exist."
        };

      } else {

        const newDog = new db.Dog({
          //Dog.create({

          username: req.body.username,
          password: req.body.password,
          pet_name: req.body.pet_name,
          city: req.body.city,
          state: req.body.state,
          breed: req.body.breed,
          description: req.body.description,
          email: req.body.email,
          imgurl: req.body.imgurl,
          review_id: req.body.review_id
          //})

        })


        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(newDog.password, salt, function (err, hash) {
            if (err) throw err;
            newDog.password = hash;
            newDog
              .save()
              .then(dbDog => res.json(dbDog))
              .catch(err => console.log(err));

          });
        });
      }
    })


  }));
  //________________________________________________________________________________________________

  //route for reviews
  app.post("/api/review", function (req, res) {
    db.Review.create({
      id: req.body.id,
      reviewer: req.body.reviewer,
      dog_id: req.body.dog_id,
      review: req.body.review
    }).then(function (dbDog) {
      console.log(dbDog);
      res.json(dbDog);
    });
  });

  // PUT route for updating dogs. We can get the updated dog data from req.body
  app.put("/api/update", function (req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Dog.update({
      username: req.body.username,
      password: req.body.password,
      pet_name: req.body.pet_name,
      breed: req.body.breed,
      city: req.body.city,
      state: req.body.state,
      description: req.body.description,
      email: req.body.email,
      imgurl: req.body.imgurl
    }, {
        where: {
          id: req.body.id
        }
      }).then(function (dbDog) {
        res.json(dbDog);
      });
  });

  //_________________________________________________________________


  //route for login
  app.post("/api/login", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    db.Dog.findOne({
      where: {
        username: username
      }
    }).then(function (dbDog) {
      // Check for user
      if (!dbDog) {
        return {
          message: "username not found."


        };
        

      }

      // Check Password
      bcrypt.compare(password, dbDog.password).then(isMatch => {
        if (isMatch) {
          // User Matched
          const payload = { id: dbDog.id, username: dbDog.username, imgurl: dbDog.imgurl }; // Create JWT Payload

          // Sign Token
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              });
            }
          );
        } else {
          return {
            message: "password incorrect."
  
          };
          res.json(dbDog);
        }
      });

      //_________________________________________________________________



      app.get("/api/profile/:id", function (req, res) {
        db.Dog.findOne({
          attributes: {
            exclude: ["password"]
          },
          where: { id: req.params.id }
        }).then(function (dbDog) {
          res.json(dbDog);
        });
      });

    });
  })














}