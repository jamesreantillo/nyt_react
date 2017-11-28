// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//use public folder to serve static files.
app.use(express.static("./public"));

// Require the routes from articlescontroller.js
require("./controllers/articlesController.js")(app);

// -------------------------------------------------

// MongoDB Configuration  (Change this URL to your own DB)
mongoose.connect("mongodb://heroku_r9j0591l:2kre4ch7t2bf7vtqp11ep0qupf@ds129090.mlab.com:29090/heroku_r9j0591l");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
