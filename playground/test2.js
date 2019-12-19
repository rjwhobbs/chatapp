let moredata = require('./data'); // test already required me so don't require?
// So it sees it's already open from test and then uses that fd 

moredata.push({thing: 'thing'});
console.log("Test 2 ran");
//console.log(fish);