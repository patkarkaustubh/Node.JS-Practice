const fs = require('fs');


//avoiding using synchronous methods

const files = fs.readdirSync('./');

console.log(files);

//Asynchronous form of same function

fs.readdir('$',function(error,files){
    if(error) console.log("Error "+error);
    else
    console.log('Result '+files);
});