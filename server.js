var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

//serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

//parse application/json
app.use(bodyParser.json());

//setup handlebars engine
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//import router
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//start server
app.listen(PORT, function () {
    // show in terminal that it's connected
    console.log("Server listening on: http://localhost:" + PORT);
});