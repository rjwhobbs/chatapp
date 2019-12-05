const express = require('express');
const app = express();

app.set('views', './views');

app.use(express.static('public')); // registring middleware with express app
									// when getting requests this middle ware will be invoked, 
									// which helps serve up static content.
app.use(express.static('node_modules/bootstrap/dist'))

app.get('/', function(req, res) {
	res.render('index.pug');
});
app.get('/admin/rooms', function(req, res) {
	res.render('rooms.pug');
});

app.listen(3000, function() {
	console.log('Chat app listening on port 3000');
});