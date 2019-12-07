const uuid = require('uuid/v4');
const _ = require('lodash');
const express = require('express');

var rooms = require('./data/rooms.json');

var router = express.Router();
module.exports = router;

router.get('/admin/rooms', function(req, res) {
	res.render('rooms', {
		title: 'Admin rooms',
		rooms: rooms
	});
});

router.get('/admin/rooms/add', function(req, res) {
	res.render('add');
});

router.post('/admin/rooms/add', function(req, res) {
	var room = {
		name: req.body.name,
		id: uuid()
	}
	rooms.push(room);
	res.redirect('/admin/rooms');
});

router.get('/admin/rooms/edit/:id', function(req, res) {
	var roomId = req.params.id;
	var room = _.find(rooms, r => r.id === roomId);
	if(!room) {
		res.sendStatus(404);
		return ;
	}
	res.render('edit', {room});
});

router.post('/admin/rooms/edit/:id', function(req, res) {
	var roomId = req.params.id;
	var room = _.find(rooms, r => r.id === roomId);
	if(!room) {
		res.sendStatus(404);
		return ;
	}
	room.name = req.body.name;
	res.redirect('/admin/rooms');
});

router.get('/admin/rooms/delete/:id', function(req, res) {
	var roomId = req.params.id;
	rooms = rooms.filter(r => r.id !== roomId);
	res.redirect('/admin/rooms');
});
