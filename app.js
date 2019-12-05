const express = require('express');
const app = express();

app.use(express.static('public')); // registring middleware with express app
									// when getting requests this middle ware will be invoked, 
									// which helps serve up static content.
app.use(express.static('node_modules/bootstrap/dist'))

app.get('/hello', function(req, res) {
	res.send('This is a sentence');
});

app.listen(3000, function() {
	console.log('Chat app listening on port 3000');
});