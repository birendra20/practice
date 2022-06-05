//The setTimeout() method in Javascript is used to execute a function after waiting for the specified time interval.
//the setTimeout() method executes the function only once.
//we can use clearTimeout() method to stop the timeout or to prevent the execution of the function specified in setTimeout() method
//the value return by the setTimeout() method can be used as the argument of the clearTimeout() method to cancel the timer.

let name = setTimeout(function () {
  console.log("birendra");
}, 1000);
