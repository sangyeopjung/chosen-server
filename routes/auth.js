/**
 * Created by Sangyeop on 16/12/3.
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var Verify = require('./verify');

router.get('/facebook', passport.authenticate('facebook'), function(req, res){});

router.get('/facebook/callback', function(req,res,next){
	passport.authenticate('facebook', function(err, user, info) {
		if (err) {
			return next(err);
		}
		if (!user) {
			return res.status(401).json({
				err: info
			});
		}
		var token = Verify.getToken({"name":user.name, "_id":user._id, "admin":user.admin});
		res.status(200).json({
			status: 'Login successful!',
			success: true,
			user: {
				token: token,
				id: user.id,
				name: user.name,
				gender: user.gender,
				admin: user.admin,
				picture: user.picture[0]
			}
		});
	})(req,res,next);
});

router.get('/check', Verify.verifyOrdinaryUser, function(req,res,next){
	User.findById(req.decoded._id, function(err, user){
		if(err){
			return next(err);
		}
		else {
			res.status(200).json({
				status: 'You are logged in!'
			});
		}
	});
});

router.get('/logout', function(req, res) {
	req.logout();
	res.status(200).json({
		status: 'Bye!'
	});
})

module.exports = router;
