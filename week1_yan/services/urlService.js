//map for two direction search
var longToShort = {};
var shortToLong = {};
var encode = []; // ["a", .. ,"z", "A", .." "0]

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

var getShortUrl = function(longUrl){
    //check whether contains longUrl
    if (longToShort[longUrl] != null){
        return longToShort[longUrl];
    }
    else{
        var shortUrl = generateShortUrl();
        longToShort[longUrl] = shortUrl;
        shortToLong[shortUrl] = longUrl;
        return shortUrl;
    }
};

//function to generate shortUrl
var generateShortUrl = function(){
    return convertTo62(Object.keys(longToShort).length);
};

var getLongUrl = function (shortUrl){
    return shortToLong[shortUrl];
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
    getLongUrl: getLongUrl
};