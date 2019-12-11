const express = require('express');

var rooms = require('./data/rooms.json');

var router = express.Router();
module.exports = router;

router.get('/rooms', function(res, req) {
	res.render(rooms);
});