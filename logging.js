let fs = require('fs');
let accessLogStream = fs.createWriteStream(__dirname + "/access.log", {flags: 'a'});
module.exports = require('morgan')('combined', {stream: accessLogStream});

