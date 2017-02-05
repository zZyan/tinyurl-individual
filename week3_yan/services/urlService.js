var UrlModel = require("../models/urlModels");

var encode = []; // ["a", .. ,"z", "A", .." "0]

//generate a dictionary for 62 char
var genCharArray = function (charA, charZ){
    var arr = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i<=j; i++){
        arr.push(String.fromCharCode(i));
    }
    return arr;
};

encode = encode.concat(genCharArray('a', 'z'));
encode = encode.concat(genCharArray('A', 'Z'));
encode = encode.concat(genCharArray('0', '9'));

var getShortUrl = function(longUrl, callback){
    //check whether contains longUrl
    //check from database, with callback function;
    UrlModel.findOne({longUrl: longUrl}, function(err, url){
        if (url){
            callback(url);
        }
        else {
            //generate shortUrl, call the function
            generateShortUrl(function(shortUrl){
                //instantiate a new object
                var url = new UrlModel({
                    shortUrl: shortUrl,
                    longUrl: longUrl
                });
                url.save();
                callback(url);
            });
        }
    });
};

//function to generate shortUrl
var generateShortUrl = function(callback){
    // with callback, don't need return
    //return convertTo62(Object.keys(longToShort).length);
    // pass in condition, and send back a function -> from db
    UrlModel.count({}, function(err, length){
        callback(convertTo62(length));
    });
};

var getLongUrl = function(shortUrl, callback){
    UrlModel.findOne({shortUrl: shortUrl}, function(err, url){
        callback(url);
    });
};

var convertTo62 = function (num){
    var result ="";
    do {
        result = encode[num % 62] + result;
        num = Math.floor(num / 62);
    }while(num);

    return result;
}

module.exports = {
    //use an object to package
    getShortUrl: getShortUrl,
    getLongUrl: getLongUrl,
};