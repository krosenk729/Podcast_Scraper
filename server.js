const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// =============================================================
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// =============================================================
// Serve static files
app.use(express.static("client/build"));


// =============================================================
// API Routes
app.use(routes);


// =============================================================
// Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/my_db");


// =============================================================
// Start Server
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}`);
});
