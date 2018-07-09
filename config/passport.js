const passport = require("passport");
//const LocalStrategy = require("passport-local").Strategy;
//const bcrypt = require("bcrypt-nodejs");
const JwtStrategy = require ("passport-jwt").Strategy;
const ExtractJwt = require ("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");
const db = require("../models");
const keys = require ("./keys");


const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

// Telling passport we want to login with a username/email and password
passport.use(
  new JwtStrategy (opts,
        // User will sign in using an email, rather than a "username"
        // {
        //   usernameField: "email"
        // },  
    function (jwt_payload, done) {
      // When a user tries to sign in this code runs
      db.Dog.findOne({
        where: {
          id: jwt_payload.id
        }
      })
        .then(function (dbUser) {
          // If there's no user with the given email
          if (!dbUser) {
            return done(null, false, {
              message: "Incorrect email."
            });
          }
          // If there is a user with the given email, but the password the user gives us is incorrect
          else if (dbUser.password !== password) {
            return done(null, false, {
              message: "Incorrect password."
            });
          }
          // If none of the above, return the user
          return done(null, dbUser);
          const payload = { id: dbUser.id, username: dbUser.username, img: dbUser.imgurl } //create JWT payload
          //Sign the token
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

        })
        .catch(error => {
          console.log(error);
        });
    }
  )

);

// In order to help keep authentication state across HTTP requests,

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
