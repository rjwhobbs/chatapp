let DB = 'testdb';
let usersTable = 'users';
let basicUsersTable = 'BasicUsers';
let test = 'rertert qwerwer';

let createDB = `CREATE DATABASE IF NOT EXISTS ${DB}`;

let createTableUsers = "CREATE TABLE IF NOT EXISTS " + DB + "." + usersTable + " " + 
						"(`id` INT NOT NULL AUTO_INCREMENT, " +
						"`username` VARCHAR(50) NOT NULL, " +	  
						"`passwd` VARCHAR(255) NOT NULL, " + 
						"`email` VARCHAR(80) NOT NULL ," +
						"`verified` BOOLEAN NOT NULL DEFAULT FALSE, " +
						"`verification` VARCHAR(255) DEFAULT NULL, " +
						"`profile-pic` VARCHAR(255) DEFAULT NULL, " +
						"`notifications` BOOLEAN NOT NULL DEFAULT TRUE, " + 
						"PRIMARY KEY (`id`))";

let createTableBasicUsers = "CREATE TABLE IF NOT EXISTS " + DB + "." + basicUsersTable + " " + 
							"(`id` INT NOT NULL AUTO_INCREMENT, " +
							"`username` VARCHAR(50) NOT NULL, " +	  
							"`passwd` VARCHAR(255) NOT NULL, " + 
							"`email` VARCHAR(80) NOT NULL ," +
							"PRIMARY KEY (`id`))";

//console.log(createTableUsers);
module.exports = {
	createDB,
	createTableUsers,
	createTableBasicUsers
}