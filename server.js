//Set up the required packages
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const PORT = process.env.PORT || 3010;
var logger = require("morgan");
var mongoose = require("mongoose");
var allRoutes = require("./routes/index.js");
const db = mongoose.connection;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/wine_buddy";



//========= Configure all the Express stuff =======================//

//Morgan will log requests
app.use(logger("dev"));
//BodyParser will handle form submissions
app.use(bodyParser.urlencoded({extended: true}));
//Serve public folder as static directory
// app.use(express.static("public"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
app.use('/', allRoutes);

//====================== End Express Stuff ========================//

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI).catch(err => console.log(err));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Start Server
app.listen(PORT, function() {
    console.log(`You launched port: ${PORT}!`)
})