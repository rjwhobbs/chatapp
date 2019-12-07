const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const uuid = require('uuid/v4');
const _ = require('lodash');

var rooms = require('./data/rooms.json');

app.set('views', './views');
app.set('view engine', 'pug');

// Registring middleware with express app.
// When getting requests this middle ware will be invoked, 
// which helps serve up static content.
app.use(express.static('public'));
// This is redundant as I'm linking directly to the bootstrap website.
app.use(express.static('node_modules/bootstrap/dist'));
// This needs to be registered before any routes that rely on it
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	res.render('index', {title: 'Home'});
});

app.get('/admin/rooms', function(req, res) {
	console.log(rooms);
	res.render('rooms', {
		title: 'Admin rooms',
		rooms: rooms
	});
});

app.get('/admin/rooms/add', function(req, res) {
	res.render('add');
});

app.post('/admin/rooms/add', function(req, res) {
	var room = {
		name: req.body.name,
		id: uuid()
	}
	rooms.push(room);
	res.redirect('/admin/rooms');
});

app.get('/admin/rooms/edit/:id', function(req, res) {
	var roomId = req.params.id;
	var room = _.find(rooms, r => r.id === roomId);
	res.render('edit', {room});
});

app.post('/admin/rooms/edit/:id', function(req, res) {
	var roomId = req.params.id;
	var room = _.find(rooms, r => r.id === roomId);
	room.name = req.body.name;
	res.redirect('/admin/rooms');
});

app.get('/admin/rooms/delete/:id', function(req, res) {
	var roomId = req.params.id;
	rooms = rooms.filter(r => r.id !== roomId);
	res.redirect('/admin/rooms');
});

app.listen(3000, function() {
	console.log('Chat app listening on port 3000');
});