var express = require("express");
var router = express.Router();
var urlService = require("../services/urlService");

//define responses to various requests
//"*" means as long as the previous /../.. are matched
router.get("*", function(req, res){
    //get longUrl
    //originalUrl: from express
    var shortUrl = req.originalUrl.slice(1);
    //call getLongUrl function from urlService and send callback
    urlService.getLongUrl(shortUrl, function(url){
        if (url){
            res.redirect(url.longUrl);
        }
        else {
            res.send("No such Url found");
            //TODO: add 404
        }

    });

});

//allow the function to be visible by other file
module.exports = router;