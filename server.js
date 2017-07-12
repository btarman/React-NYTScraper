var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var Article = require("./models/Article");
// Create a new express app
var app = express();

// Set up an Express Router
var router = express.Router();

// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));
app.use(router);


mongoose.connect("mongodb://localhost/React-NYTScraper");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
app.get('/api/saved', function(req, res) {

});
app.post('/api/saved', function(req, res) {
	const article = new Article(req.body);
	article.save(function(err) {
		if(err) {
			console.log(err);
		}
	})
	res.send("Saved!")
});
app.delete('/api/saved', function(req, res) {
	
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
