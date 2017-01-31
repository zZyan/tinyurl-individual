var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlService = require("../services/urlService");

//define responses to various requests
//post to server request
router.post("/urls", jsonParser, function(req, res){
    //post data
    //json data: key must be string "xxx"
    var longUrl = req.body.longUrl;
    if(longUrl.indexOf("http") == -1){
        longUrl = "http://" + longUrl;
    }
    var shortUrl = urlService.getShortUrl(longUrl);
    //validate longUrl


    //send json file (express)
    res.json({
        shortUrl: shortUrl,
        longUrl: longUrl
    });

});


//allow the function to be visible by other file
module.exports = router;