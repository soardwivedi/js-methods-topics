const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('greet', (name) => {
  console.log(`Hello ${name}!`);
});
myEmitter.emit('greet', 'Atul');
myEmitter.setMaxListeners(2);
myEmitter.emit('greet', 'Rishi');
myEmitter.emit('greet', 'Rakesh');

myEmitter.removeAllListeners('greet');

myEmitter.emit('greet', 'Vivek');
