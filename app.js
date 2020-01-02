const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//order matters for middleware
app.set('views', './views');
app.set('view engine', 'pug');

app.use(require('./logging'));

// Registring middleware with express app.
// When getting requests this middle ware will be invoked, 
// which helps serve up static content.
app.use(express.static('public'));
// This is redundant as I'm linking directly to the bootstrap website.
app.use(express.static('node_modules/bootstrap/dist'));
app.use(express.static('node_modules/jquery/dist'));
// This needs to be registered before any routes that rely on it
require('express-debug')(app, {});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// app.use(function (req, res, next) {
// 	console.log(req);
// 	next();
// });

app.get('/', function(req, res) {
	// throw new Error("OH NOSSS");
	res.render('home', {title: 'Home'});
});

var adminRouter = require('./admin');
app.use('/admin', adminRouter);

var apiRouter = require('./api');
app.use('/api', apiRouter);

// app.use(function(err, req, res, next) {
// 	res.send("Super secret error handler"); // Error handling middleware must come last
// });

app.listen(3000, function() {
	console.log('Chat app listening on port 3000');
});