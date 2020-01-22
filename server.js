// you gotta include the "npm install express"
// in order to have a running app
// regardless is thers now json file 


const http = require("http");
var path = require("path");

const PORT = 8080;

var server = http.createServer(handleRequest); //http.createServer, somehow the handleRequest argument is passed, but defined later

server.listen(PORT, function() {

  // signs of successfully listening. 
  console.log("Server listening on: http://localhost:" + PORT);
});


function handleRequest(res, req) {
  var path = req.url;

  switch(path) {
    case "/":
    return displayRoot(res);

  case "/post":
    return displayPost(res);

  default:
    return display404(path, res);
  }
}