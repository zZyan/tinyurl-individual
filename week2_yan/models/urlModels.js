var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define a new scheme / similar to a new class, with fields
var UrlScheme = new Schema({
    longUrl: String,
    shortUrl: String
});

//create a new instance/model
var UrlModel = mongoose.model('UrlModel', UrlScheme);

module.exports = UrlModel;
