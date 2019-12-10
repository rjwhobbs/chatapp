const _ = require('lodash');

let stuff = [
	{ thing: 'a', num: 1 },
	{ thing: 'b', num: 2 },
	{ thing: 'c', num: 3 },
];

let copy = stuff[1];
let original = { name: 'Potato'};
let room = {
	name: 'Cheesy',
	number: 1
};

original.test = copy;

original.test.thing = "XXXXX";
console.log(stuff);



