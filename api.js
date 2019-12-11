const express = require('express');

let rooms = require('./data/rooms.json');

let router = express.Router();
module.exports = router;

router.get('/rooms', function(res, req) {
	res.json(rooms);
});