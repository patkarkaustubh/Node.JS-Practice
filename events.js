const EventEmitter = require('events');

const emitter = new EventEmitter();

//Register a listener

emitter.on('messageLogged',function(){
    console.log('Event called');
})

emitter.on('eventargument',function(args){
    console.log('Event with argument called ',args)
})
/*Arrow function used in ES6 */
emitter.on('eventargumentwithArrow',(args)=>{
    console.log('Event with argument called ',args)
})
//
emitter.emit('messageLogged');

emitter.emit('eventargument',{name : 'Kaustubh', City: 'Chicago'})

emitter.emit('eventargumentwithArrow',{function: 'arrowfunction'})
//Making a noise, produce