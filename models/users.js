var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Define schema
var usercollectionSchema = new Schema({
	username: String,
	email: String
});

//Set collection
usercollectionSchema.set('collection','usercollection');

//Set model & export
module.exports =  mongoose.model('usercollection', usercollectionSchema);

