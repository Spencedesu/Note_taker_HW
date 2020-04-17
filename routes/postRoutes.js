fs = require("fs");

module.exports = app => {
// Create New Notes - takes in JSON input from the api/notes window
app.post("/api/notes", function(req, res) {
    // create new array to store saved notes from DB and add the new note to it
    let newArray = [];
    
    const notesDataBase = fs.readFileSync("./db/db.json");
   //loop through
    if (notesDataBase.length > 0) {
      newArray = JSON.parse(notesDataBase);
    }
    const newNote = {
      id: newArray.length + 1, 
      title: req.body.title,
      text: req.body.text
    };

    // add the new note to the array
    newArray.push(newNote);
    fs.writeFile("./db/db.json", JSON.stringify(newArray), () => {
      console.log("Success! +1 note acquired");
    });
    // send the new note back
    res.json(newNote);
  });
}