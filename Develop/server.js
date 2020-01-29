// you gotta include the "npm install express"
// in order to have a running app
// regardless is thers now json file 

const fs = require("fs");
const path = require("path");
const express = require("express");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//http.createServer, somehow the handleRequest argument is passed, but defined later

const writeNote = [];

// Routes

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"))
});

app.post("api/notes", function(res, res) {
  writeNote.push(req.body);
  res.json(true);
});

app.post("/api/clear", function(req, res){
writeNote.length = 0;
res.json({ok:true});
});


app.listen(PORT, function() {
  // signs of successfully listening. 
  console.log("Server listening on: http://localhost:" + PORT);
});
