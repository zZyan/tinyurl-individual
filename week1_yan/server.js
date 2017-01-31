//use express
var express = require("express");
var app = express();
//use function from the other folder
var restRouter = require("./routes/rest.js");
var redirectRouter = require("./routes/redirect.js");

app.get('/', function(req, res){
    res.send('hello yan')
});

//express router - req, res
app.use("/api/v1", restRouter);

// :shortUrl - variable
app.use("/:shortUrl", redirectRouter);

app.listen(3000, function(){
    console.log('TinyUrl app listening 3000')
});



/*
//use js
//http package for the protocol
var http = require("http");
// to read the file
var fs = require("fs");
//call back function
//assume when there is a http request, then create server
// res is the variable
// listen - where to get the request
http.createServer(function (req, res){
    //or can create a json information
    if (req.url == "/"){
        res.writeHead(200, {"Content-Type": "text-html"});
        // need to read html
        var html = fs.readFileSync(__dirname + "/index.html");
        res.end(html);
    }
    if (req.url == "/json"){
        res.writeHead(200, {"Content-Type": "application/json"});
        //create a variable
        var obj = {
            name: "zy",
            age: "2"
        };
        res.end(JSON.stringify(obj));
    }
}).listen(3000);

*/