const mysql = require('mysql');

let DB = 'testdb2';

let settingsOne = {
	host: 'localhost',
	user: 'test2',
	password: 'XYfErbAQ8dAvrjKc',
	socketPath: '/Users/RogerHobbs/Desktop/Server/mysql/tmp/mysql.sock'
};

let settingsTwo = {
	host: 'localhost',
	user: 'root',
	password: 'pw123456',
	socketPath: '/goinfre/rhobbs/Desktop/Server/mysql/tmp/mysql.sock'
};

let conn = mysql.createConnection(settingsTwo);

conn.connect((err) => {
	if (err) {throw err;}
	console.log("Connection established");
	conn.query('CREATE DATABASE IF NOT EXISTS testdb2', (err) => {
		if (err) { throw err; }
		console.log("DB Created");
	});
});



