// //Includes the dependencies, required files or modules, not sure if it makes a difference.
const fs = require("fs");
const path = require("path");
const express = require("express");


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));
//Routers
require("./routes/htmlRoutes")(app);
require("./routes/getRoutes")(app);
require("./routes/postRoutes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log(`Demo Note Taker on port: ${ PORT }`);
});
