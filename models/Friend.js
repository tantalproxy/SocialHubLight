var mongoose = require('mongoose');
//var UserSchema = require('./User').UserSchema;

var SubFriend = new mongoose.Schema({
	userId: {type: mongoose.Schema.ObjectId, ref: 'User'},
	name: String,
	email: String,
	dateOfRegistration: Date,
	status: String
})

var scheme = new mongoose.Schema({

	userId: {type: mongoose.Schema.ObjectId, ref: 'User'},

	name: String,
	email: String,
	dateOfRegistration: Date,
	text: String,
	friends: [SubFriend]
})

module.exports = mongoose.model('Friend', scheme);