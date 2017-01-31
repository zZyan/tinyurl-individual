var express = require("express");
var router = express.Router();
var urlService = require("../services/urlService");

//define responses to various requests
//"*" means as long as the previous /../.. are matched
router.get("*", function(req, res){
    //get longUrl
    //originalUrl: from express
    var shortUrl = req.originalUrl.slice(1);
    var longUrl = urlService.getLongUrl(shortUrl);

    //if longUrl exists,
    if (longUrl){
        res.redirect(longUrl);
    }
    else{
        res.send("No such Url found");
    }
});

//allow the function to be visible by other file
module.exports = router;