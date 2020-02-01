// Linking routes to a series of data files/sources

const noteData = require("../db/notes");

// Routes

module.exports = function(app) {
// API GET requests
// Below link can we followed to shouw the JSON of the data

app.get("/api/notes", function(req, res){
  res.json(noteData);
});


// API POST request
// Below handles when a user submits information in the form(a title or note)
//then pushes to the json
app.post("/api/notes", function(req,res) {
  noteData.push(req.body);
  res.json(true);
});

app.post("api/clear", function(req,res) {
  noteData.length = 0;

  res.json({ ok: true});
});
};