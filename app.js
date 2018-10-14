

console.log(__filename);
console.log(__dirname);
const logger = require('./logger');
const path = require('path');
const os = require('os');
//console.log(logger);
function sayHello(name)
{
    console.log('Hello ' +name);
}

var pathobj=path.parse(__filename);


var mem = os.freemem();
var totalmem = os.totalmem();
console.log(totalmem);
console.log(os.userInfo());
console.log(mem);
console.log(pathobj);
//sayHello('Kaustubh');
//console.log(window);

//console.log(module);

