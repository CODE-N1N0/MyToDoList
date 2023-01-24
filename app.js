const express = require("express");
const https = require("https");

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.static("Public"));

app.get("/",  function(req,res){
  res.sendFile(__dirname + "Public/index.html");
});


app.listen(3000, function(){
  console.log("server is up and running on port 3000 for your To Do List. Good job! Keep going! Don't give up!");
});
