// var express = require("express");
var router = require("express").Router();
// grabbing our models
var db = require("../../models");
var passport = require("../../config/passport");


module.exports = function (app) {
  // get route, edited to match sequelize
  app.get("/api/dogs", (req, res) => {
    // replace old function with sequelize function
    db.Dog.findAll({
      attributes: { exclude: ['password'] },
      // Here we specify we want to return our dogs in ordered by ascending dog breed
      order: [
        ["zipcode", "ASC"] //this is where we need to group by zipcode
      ]


    })
      // use promise method to pass the dogs...
      .then(function (dbDog) {
        res.json(dbDog);
      });
  });
  // function getLatLngByZipcode(zipcode) {
  //   var geocoder = new google.maps.Geocoder();
  //           var address = zipcode;
  //           geocoder.geocode({ 'address': address }, function (results, status) {
  //               if (status == google.maps.GeocoderStatus.OK) {
  //                   var latitude = results[0].geometry.location.lat();
  //                   var longitude = results[0].geometry.location.lng();
  //                   alert("Latitude: " + latitude + "\nLongitude: " + longitude);
  //               } else {
  //                   alert("Request failed.")
  //               }
  //           });
  //           return [latitude, longitude];
  // post route to create dogs
  app.post("/api/signup", function (req, res) {  //or api/users
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
      .then(function (dbDog) {
        console.log(dbDog);
        res.json(dbDog);
      });
  });

  //route for login
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    db.Dog.findOne({
      username: req.body.username,
      password: req.body.password,
    }).then (function(dbDog){
      res.json(dbDog);
    })
  });


  app.get("/api/profile", function (req, res) {
    db.Dog.findOne({
      where: { id: id }
    })
  })
};



