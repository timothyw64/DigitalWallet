/*
 * Main server entry point. 
 */

// Imports.
let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let apiRoutes = require("./api-routes")

// Initialize the app
let app = express();

// Enable CORS. 
app.use(cors());

// Use bodyParser for POST request.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/profile', { useNewUrlParser: true });

// Setup server port
var port = process.env.PORT || 3000;

// Use Api routes in the App
app.use('/api', apiRoutes)

// Launch app to listen to specified port
var server = app.listen(port, function () {
    console.log("Listening on port " + port);
});

module.exports = server