var express = require('express');
var passport = require('passport');

var router = express.Router();
module.exports = router;

router.get('/login', function(req, res) {
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
	