const express = require('express');
const _ = require('lodash');
const uuid = require('uuid/v4');

let rooms = require('./data/rooms.json');
let messages = require('./data/messages.json');
let users = require('./data/users.json');

var router = express.Router();
module.exports = router;

router.get('/rooms', function(req, res) {
	res.json(rooms);
});

router.route('/rooms/:roomId/messages')
	.get(function(req, res) {
		let roomId = req.params.roomId;
		let roomMessages = messages
		.filter(m => m.roomId === roomId)
		.map(m => {
			let user = _.find(users, u => u.id === m.userId); //Needs error handling incase user doesn't exist
			return {text: `${user.name}: ${m.text}`};
		});
		let room = _.find(rooms, r => r.id === roomId);
		//console.log(roomMessages);
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
			userId: req.user.id,
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
