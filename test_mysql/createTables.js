const connection = require('./connection');
const sql = require('./statements');

conn = connection.startConnection();

conn.connect((err) => {
	if (err) {throw err;}
	console.log("Connection established");
	conn.query(sql.createTableUsers, (err) => {
		if (err) { throw err; }
		console.log("Table Created");
	});
});
