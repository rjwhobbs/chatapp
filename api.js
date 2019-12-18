const express = require('express');
const _ = require('lodash');

let rooms = require('./data/rooms.json');
let messages = require('./data/messages.json');

var router = express.Router();
module.exports = router;

router.get('/rooms', function(req, res) {
	res.json(rooms);
});

router.get('/rooms/:roomId/messages', function(req, res) {
	let roomId = req.params.roomId;
	let roomMessages = messages
		.filter(m => m.roomId === roomId);
	let room = _.find(rooms, r => r.id === roomId);
	if (!room) {
		res.sendStatus(404);
		return ;
	}
	res.json({
		room: room,
		messages: roomMessages
	});
});
