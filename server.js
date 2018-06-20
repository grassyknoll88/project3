var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing

var db = require("./models");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory to be served
app.use(express.static("public"));

// image s3 uploader config
// app.use(
//   "/s3",
//   require("react-dropzone-s3-uploader/s3router")({
//     bucket: "pup-life"
//   })
// );

// We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());
// Routes
// =============================================================
var router = require("./routes/api/dogs.js");
app.use(router);
// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
