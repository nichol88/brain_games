const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public/"));

app.get("/", function(req, resp){
    resp.sendFile("index.html");
})
