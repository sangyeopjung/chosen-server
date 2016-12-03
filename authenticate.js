/**
 * Created by Sangyeop on 16/12/3.
 */
var passport = require('passport');
var User = require('./models/user');
var config = require('./config');
var FacebookStrategy = require('passport-facebook').Strategy;

exports.facebook = passport.use(new FacebookStrategy({
		clientID: config.facebook.clientID,
		clientSecret: config.facebook.clientSecret,
		callbackURL: config.facebook.callbackURL
	},
	function(accessToken, refreshToken, profile, done) {
		User.findOne({ id: profile.id }, function(err, user) {
			if(err) {
				console.log(err); // handle errors!
			} else if (user !== null) {
				done(null, user);
			} else {
				user = new User({
					name: profile.displayName,
					token: accessToken,
					id: profile.id,
					gender: profile.gender
				});
				user.picture[0] = 'http://graph.facebook.com/' + profile.id + '/picture';

				user.save(function(err) {
					if(err) {
						console.log(err); // handle errors!
					} else {
						console.log("saving user ...");
						done(null, user);
					}
				});
			}
		});
	}
));