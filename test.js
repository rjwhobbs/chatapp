const _ = require('lodash');

// var rooms = [
// 	{name: 'A', id: 1},
// 	{name: 'b', id: 2},
// 	{name: 'c', id: 3},
// ];
// console.log(rooms);
// var roomId = 2
// var room = _.find(rooms, r => r.id === roomId);
// room.name = 'Z';
// console.log(room);
// console.log(rooms);

// var objectTest = [
// 	{name: 'D', id: 4},
// 	{name: 'E', id: 5},
// 	{name: 'F', id: 6},
// ];

// var test = objectTest[1];
// test.name = "WHAT";
// console.log (objectTest[1].name); 
// objectTest[1].name = "THIS";
// console.log(test.name);

var objectTest = {
	name: "a",
	id: 1
}

var refObjTest = objectTest;
refObjTest.name = 'b';
console.log(objectTest.name);
