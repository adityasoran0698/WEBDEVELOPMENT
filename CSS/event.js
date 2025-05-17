const EventEmitter=require('events');
const ev = new EventEmitter();
ev.on('doorbell',()=>{
    console.log("Open the door");
    
});
ev.emit('doorbell');