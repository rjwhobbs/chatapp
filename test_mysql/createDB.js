const connection = require('./connection');
const sql = require('./statements');

conn = connection.startConnection();

conn.connect((err) => {
	if (err) {throw err;}
	console.log("Connection established");
	conn.query(sql.createDB, (err) => {
		if (err) { throw err; }
		console.log("DB Created");
	});
});