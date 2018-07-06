var passport = require("passport");
//var LocalStrategy = require("passport-local").Strategy;
//var bcrypt = require("bcrypt-nodejs");
var JwtStrategy = require ("passport-jwt").Strategy;
var ExtractJwt = require ("passport-jwt").ExtractJwt;
var jwt = require("jsonwebtoken");
var db = require("../models");
var keys = require ("./keys");

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

// Telling passport we want to login with a username/email and password
module.exports = function (passport) { 
  passport.use(new JwtStrategy (opts, function (jwt_payload, done) {

    console.log (jwt_payload);
        //When a user tries to sign in this code runs
        
        db.Dog.findOne({id: jwt_payload.sub}, function (err, user){
        //   where: {
        //     email: email
  
        // }
                
         })
           .then(function (user) {
  
            // If there's no user with the given email
            if (!user) {
              return done(null, false, {
                message: "Incorrect email."
              });
            }
            // If there is a user with the given email, but the password the user gives us is incorrect
            else if (user.password !== password) {
              return done(null, false, {
                message: "Incorrect password."
              });
            }
            // If none of the above, return the user
            bcrypt.compare(password,user.password).then(isMatch => {
              if(isMatch){
              const payload = { id: user.id, username: user.username, img: user.imgurl, password: user.password} //create JWT payload

              jwt.sign(
                payload,
                keys.secretOrKey, 
                { expiresIn: 3600 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  })
    
                }
              );
              }




            })
            //return done(null, user);
            //Sign the token
            
  
          })
          .catch(error => {
            console.log(error);
            
          });
      }
    ));
}


// In order to help keep authentication state across HTTP requests,

// passport.serializeUser(function (user, cb) {
//   cb(null, user);
// });

// passport.deserializeUser(function (obj, cb) {
//   cb(null, obj);
// });


