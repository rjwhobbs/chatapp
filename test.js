const _ = require('lodash');
let messages = require('./data/messages.json');

// let stuff = [
// 	{ thing: 'a', num: 1 },
// 	{ thing: 'b', num: 2 },
// 	{ thing: 'c', num: 3 },
// ];

// let copy = stuff[1];
// let original = { name: 'Potato'};
// let room = {
// 	name: 'Cheesy',
// 	number: 1
// };

// original.test = copy;

// original.test.thing = "XXXXX";
//console.log(stuff);
let arr = [1,2,3,4,5,6,7];
let cArr = arr;
cArr[0] = 100;
console.log(arr);

let roomId = "f2754172-1c58-41ed-ae84-74e046888adb";

let roomMessages = messages
		.filter(m => m.roomId === roomId);

roomMessages[0].text = "XXXX";

console.log(roomMessages);
console.log(messages);


