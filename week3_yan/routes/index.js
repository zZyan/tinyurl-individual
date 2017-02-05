var express = require("express");
var router = express.Router();
var path = require('path');

//define responses to various requests
//"*" means as long as the previous /../.. are matched
router.get("/", function(req, res){
    res.sendFile('index.html', {root: path.join(__dirname, '../public')});
});

//allow the function to be visible by other file
module.exports = router;