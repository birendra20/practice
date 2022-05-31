//1) . In HTML, the event name usually represents in lowercase as a convention

<button onclick="activateLasers()"></button>;

//Whereas in React it follows camelCase convention,

<button onClick={activateLasers}></button>;
//////////////////////////////////////////////////////////////////////////

//ii). In HTML, you can return false to prevent default behavior.

<a href="#" onclick='console.log("The link was clicked."); return false;' />;

//Whereas in React you must call preventDefault() explicitly:
function handleClick(event) {
  event.preventDefault();
  console.log("The link was clicked.");
}

// 3)In HTML, you need to invoke the function by appending ()
//Whereas in react you should not append () with the function name.
//(refer "activateLasers" function in the first point for example)
