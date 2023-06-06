//Event Module

// const EventEmitter = require ( ' events ' ) ;
// import EventEmitter from " events " ;

// on - When a listener is registered using the on ( ) method , that listener is invoked every time the named event is
// emitted.on ( ) method is used to register listeners .
// Syntax : - on ( eventName , callback )

// once - When a listener is registered using the once ( ) method , it is possible to register a listener that is called at
// most once for a particular event . Once the event is emitted , the listener is unregistered and then called .
// Syntax : - once ( eventName , callback )

// emit ( ) - The emit ( ) method allows an arbitrary set of arguments to be passed to the listener functions . emit ( )
// method is used to trigger the event .
// Syntax : - emit ( eventName , args )

import EventEmitter from "events";

//creating class
class MyEmitter extends EventEmitter {}

//creating object
const myEmitter = new MyEmitter();

// //eg 1
// //register event listener

// myEmitter.on("event", () => {
//   console.log("An event occurred !");
// });

// //trigger Event
// myEmitter.emit("event");

// //eg2
// //register event listener
// let m = 0;
// myEmitter.on("event", () => {
//   console.log(++m);
// });

// //trigger Event
// myEmitter.emit("event");
// myEmitter.emit("event");

//eg3
//register event listener
let m = 0;
myEmitter.once("event", () => {
  console.log(++m);
});

//trigger Event
myEmitter.emit("event");
myEmitter.emit("event");
