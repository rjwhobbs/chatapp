const express = require('express');
const _ = require('lodash');
const uuid = require('uuid/v4');

let rooms = require('./data/rooms.json');
let messages = require('./data/messages.json');

var router = express.Router();
module.exports = router;

router.get('/rooms', function(req, res) {
	res.json(rooms);
});

router.route('/rooms/:roomId/messages')
	.get(function(req, res) {
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
	})
	.post(function(req, res) {
		let roomId = req.params.roomId;
		let message = {
			roomId: roomId,
			text: req.body.text,
			userId: '44f885e8-87e9-4911-973c-4074188f408a',
			id: uuid()
		};
		messages.push(message);
		res.sendStatus(200);
	})
	.delete(function(req, res) {
		let roomId = req.params.roomId;
		// Chapter: API to delete meassages.
		// This could cause issues as we are now making a new ref to the array.
		// It might be safer to put all the functions that manipulate this
		// array into it's own module and then export that module and call the methods. 
		messages = messages.filter(m => m.roomId !== roomId);
		res.sendStatus(200);
	});
