var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var users = require('./data/users');
var _ = require('lodash');

passport.use(new localStrategy(function(username, password, done) {
	// things
}));