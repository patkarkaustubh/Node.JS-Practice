
const os = require('os');

var mem = os.freemem();
var totalmem = os.totalmem();
console.log(totalmem);
console.log(os.userInfo());
console.log(mem);