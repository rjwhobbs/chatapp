const connection = require('./connection');
const sql = require('./statements');

let conn = connection.startConnection();

conn.query(sql.createTableUsers, (err) => {
	if (err) {throw err;}
	console.log("Users table Created");
});

conn.query(sql.createTableBasicUsers, (err) => {
	if (err) {throw err;}
	console.log("Basic Users table Created");
});



