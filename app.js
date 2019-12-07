const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

// Registring middleware with express app.
// When getting requests this middle ware will be invoked, 
// which helps serve up static content.
app.use(express.static('public'));
// This is redundant as I'm linking directly to the bootstrap website.
app.use(express.static('node_modules/bootstrap/dist'));
// This needs to be registered before any routes that rely on it
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	res.render('index', {title: 'Home'});
});

var adminRouter = require('./admin');
app.use('/admin', adminRouter);

app.listen(3000, function() {
	console.log('Chat app listening on port 3000');
});