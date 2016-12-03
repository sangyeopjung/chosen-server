/**
 * Created by Sangyeop on 16/12/3.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    id: String,
    name: String,
    gender: String,
    admin:   {
        type: Boolean,
        default: false
    },
    picture: [String]
});

module.exports = mongoose.model('User', User);
