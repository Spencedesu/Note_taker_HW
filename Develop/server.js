//Includes the dependencies, required files or modules, not sure if it makes a difference.
const fs = require("fs");
const path = require("path");
const express = require("express");

// Local file
const notejs = require("./db/notes");
const htmlRoutes = require("./routes/HTML_routes");


// Node will be expecting an express server
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//routes
require("./routes/HTML_routes")(app);
require("./routes/ApiRoutes")(app);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", function(req,res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
// console.log("You just posted some data to the server:\n", requestData);

app.listen(PORT, function() {
  // signs of successfully listening. 
  console.log("Server listening on: http://localhost:" + PORT);
});
