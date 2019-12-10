const mysql = require('mysql');

//let DB = 'testdb2';

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

const startConnection = function () {
	return mysql.createConnection(settingsTwo);
}

module.exports = {
	startConnection
}




