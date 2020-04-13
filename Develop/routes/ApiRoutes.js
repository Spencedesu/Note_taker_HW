// Linking routes to a series of data files/sources
const fs = require("fs");
const noteData = require("../db/notes");

// Routes

module.exports = function(app) {
// API GET requests
// Below link can we followed to shouw the JSON of the data

// app.get("/api/notes", function(req, res){
//   res.json(noteData);
// });
app.get("/api/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "../../db.json"))
})


// API POST request
// Below handles when a user submits information in the form(a title or note)
//then pushes to the json
app.post("/api/notes", function(req,res) {
  let noteArray = [];
  const db = fs.readFileSync("./db/db.json");
  if (db. length > 0) {
    noteArray = JSON.parse(db);
  }
  // noteData.push(req.body);
  // res.json(true);
  const note = {
    id: noteArray.length +1,
    title:req.body.title,
    text: req.body.text
  }
  noteArray.push(note);
  fs.writeFile("./db/db.json", JSON.stringify(noteArray), () => {
    console.log("this worked?")
  });
  res.json(note);
});

app.post("api/clear", function(req,res) {
  noteData.length = 0;

  res.json({ ok: true});
});
};