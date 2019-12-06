const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const uuid = require('uuid/v4');
let rooms = require('./data/rooms.json');

app.set('views', './views');
app.set('view engine', 'pug');

// registring middleware with express app
// when getting requests this middle ware will be invoked, 
// which helps serve up static content.
app.use(express.static('public'));
// This is redundant as I'm linking directly to bootstrap.
app.use(express.static('node_modules/bootstrap/dist'));
// This needs to be registered before any routes that rely on it
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	res.render('index', {title: 'Home'});
});

app.get('/admin/rooms', function(req, res) {
	res.render('rooms', {
		title: 'Admin rooms',
		rooms: rooms
	});
});

app.get('/admin/rooms/add', function(req, res) {
	res.render('add');
});

app.post('/admin/rooms/add', function(req, res) {
	let room = {
		name: req.body.name,
		id: uuid()
	}
	rooms.push(room);
	res.json(room);
	// res.send("nothing");
});

app.listen(3000, function() {
	console.log('Chat app listening on port 3000');
});