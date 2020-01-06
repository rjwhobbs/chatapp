var express = require('express');
var passport = require('passport');
var users = require('./data/users');
var _ = require('lodash');

var router = express.Router();
module.exports = router;

router.get('/login', function(req, res) {
	// Automatically log in during developement
	if (req.app.get('env') === 'developement') {
		let user = users[0];
		if (req.query.user) {
			user = _.find(users, u => u.name === req.query.user);
		}
		req.logIn(user, function (err) {
			if (err) {return next(err);}
			return res.redirect('/');
		});
		return ;
	}
	let message = req.flash('error');
	res.render('login', {message: message[0]});
});

router.post('/login', passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login',
	failureFlash: 'Incorrect username or password'
}));

// router.get('/loginfail', function(req, res) {
	
// 	res.render('login', {message: 'Incorrect username or password' });
// });

router.get('/logout', function(req, res) {
	req.logout(); // This clears out the session
	res.redirect('/login');
});
	