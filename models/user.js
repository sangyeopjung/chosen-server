/**
 * Created by Sangyeop on 16/12/3.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    token: String,
    id: String,
    name: String,
    gender: String,
    admin:   {
        type: Boolean,
        default: false
    },
    picture: [String]
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
