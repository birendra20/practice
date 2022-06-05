//the setInterval() method in javascript is used to repeat a specified function at every given time-interval.
//it evaluates an expression or calls a function at every given time-interval
//this method continues the calling of function until the window is closed or the clearInterval is called.

function fn() {
  console.log("welcome to javascript");
}

let afterOneSec = setInterval(fn, 1000);

setTimeout(() => {
  clearInterval(afterOneSec);
}, 10000);
