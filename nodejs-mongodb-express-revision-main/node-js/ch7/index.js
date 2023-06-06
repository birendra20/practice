//URL module

// The url module provides utilities for URL resolution and parsing .
// const url = require ( ' url ' ) ;
// import url from ' url ' ;

// const myUrl = new URL ( ' https://www.example.com:8080/p/a/t/h?query=string#hash ' ) ;

// hash - Gets and sets the fragment portion of the URL .

// host - Gets and sets the host portion of the URL .

// hostname - Gets and sets the host name portion of the URL . The key difference between url.host and
// url.hostname is that url.hostname does not include the port .

// href - Gets and sets the serialized URL .

// pathname - Gets and sets the path portion of the URL .

// port - Gets and sets the port portion of the URL .

// protocol - Gets and sets the protocol portion of the URL .

// search - Gets and sets the serialized query portion of the URL .

// toString ( ) - The toString ( ) method on the URL object returns the serialized URL . The value returned is
// equivalent to that of url.href and url.toJSON ( ) ) .

// toJSON ( ) - The toJSON ( ) method on the URL object returns the serialized URL . The value returned is
// equivalent to that of url.href and url.toString ( ) .

//Url Module

import { URL } from "url";

const myUrl = new URL("https://www.fb.com:8080/p/a/t/h?query=string#hash");

console.log(myUrl.hash);
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.href);
console.log(myUrl.pathname);

console.log(myUrl.port);
console.log(myUrl.protocol);
