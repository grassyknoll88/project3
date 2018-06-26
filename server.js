var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
// var passport= require ("./config/passport");
// Sets up the Express App
// =============================================================
var app = express();

var PORT = process.env.PORT || 8080;

// process.env["AWS_SHARED_CREDENTIAL_FILE"] = "$HOME/.aws/credentials";

// console.log(process.env.AWS_SHARED_CREDENTIAL_FILE);
process.env["AWS_ACCESS_KEY_ID"] = "AKIAJLGBMF5ZLFYVJBUQ";
process.env["AWS_SECRET_ACCESS_KEY"] =
  "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";

// Sets up the Express app to handle data parsing

var db = require("./models");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// // Static directory to be served
// app.use(express.static("client/build"));

// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// image s3 uploader config
// app.use(
//   "/s3",
//   require("react-dropzone-s3-uploader/s3router")({
//     bucket: "pup-life",
//     region: "us-east-1",
//     headers: { "Access-Control-Allow-Origin": "*" },
//     ACL: "public-read"
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
