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

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	let user = _.find(users, u => u.id === id);
	done(null, user);
});