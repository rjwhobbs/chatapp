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

var rooms2 = [
	{name: 'D', id: 4},
	{name: 'E', id: 5},
	{name: 'F', id: 6},
];

var test = rooms2[1];
test.name = "WHAT";
console.log(test);
console.log(rooms2[1].name);
rooms2[1].name = "THIS";
console.log(test.name);