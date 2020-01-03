var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var users = require('./data/users');
var _ = require('lodash');

passport.use(new localStrategy(function(username, password, done) {
	let user = _.find(users, u => u.name === username);
	if (!user || user.password !== password) {
		done(null, false); // Null = no error, false = auth failed, no user
		return ;
	}
	done(null, user);
}));
// Check chap 67, perhaps rather pass user.id here.
passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});