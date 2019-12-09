const uuid = require('uuid/v4');
const _ = require('lodash');
const express = require('express');

var rooms = require('./data/rooms.json');

var router = express.Router();
module.exports = router;

router.get('/rooms', function(req, res) {
	var origUrl = req.originalUrl; // The calling URL if you will , /admin/rooms
	res.render('rooms', {
		title: 'Admin rooms',
		rooms: rooms,
		origUrl: origUrl
	});
});

router.route('/rooms/add')
	.get(function(req, res) {
		res.render('add');
	})
	.post(function(req, res) {
		var room = {
			name: req.body.name,
			id: uuid()
		}
		rooms.push(room);
		res.redirect(req.baseUrl + '/rooms');
});

router.route('/rooms/edit/:id')
	.get(function(req, res) {
		var roomId = req.params.id;
		var room = _.find(rooms, r => r.id === roomId);
		if(!room) {
			res.sendStatus(404);
			return ;
		}
		res.render('edit', {room});
	})
	.post(function(req, res) {
		var roomId = req.params.id;
		var room = _.find(rooms, r => r.id === roomId);
		if(!room) {
			res.sendStatus(404);
			return ;
		}
		room.name = req.body.name;
		res.redirect(req.baseUrl + '/rooms');
});

router.get('/rooms/delete/:id', function(req, res) {
	var roomId = req.params.id;
	rooms = rooms.filter(r => r.id !== roomId);
	res.redirect(req.baseUrl + '/rooms');
});
