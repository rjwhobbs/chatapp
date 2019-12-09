const mysql = require('mysql');

//socketPath: '/goinfre/rhobbs/Desktop/Server/mysql/tmp/mysql.sock',
//test2 XYfErbAQ8dAvrjKc
// user: 'test_root',
// 	password: 's55oQsBuoDvyr2HB',

let conn = mysql.createConnection({
	host: 'localhost',
	user: 'test2',
	password: 'XYfErbAQ8dAvrjKc',
	socketPath: '/Users/RogerHobbs/Desktop/Server/mysql/tmp/mysql.sock'

});

conn.connect((err) => {
	if (err) {throw err;}
	console.log("Connection established");
	conn.query('CREATE DATABASE IF NOT EXISTS testdb', (err) => {
		if (err) {throw err;}
		console.log('Database created');
	});
});


