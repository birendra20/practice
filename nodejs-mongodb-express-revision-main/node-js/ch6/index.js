/*
//operating system module

// The os module provides operating system - related utility methods and properties .
// const os = require ( ' os ' ) ;
// import * as os from ' os ' ;

// platform ( ) - Returns a string identifying the operating system platform . The value is set at compile time .
// Possible values are ' aix ' , ' darwin ' , ' freebsd ' , ' linux ' , ' openbsd ' , ' sunos ' , and ' win32 ' .

// arch ( ) - Returns the operating system CPU architecture for which the Node.js binary was compiled . Possible
// values are ' arm ' , ' arm64 ' , ' ia32 ' , ' mips ' , ' mipsel ' , ' ppc ' , ' ppc64 ' , ' s390 ' , ' s390x ' , ' x32 ' , and ' x64 ' .

// cpus ( ) - Returns an array of objects containing information about each logical CPU core .
// hostname ( ) - Returns the host name of the operating system as a string .

// homedir ( ) - Returns the string path of the current user's home directory .

// networkInterfaces ( ) - Returns an object containing network interfaces that have been assigned a network
// address .

// freemem ( ) - Returns the amount of free system memory in bytes as an integer .

// totalmem ( ) - Returns the total amount of system memory in bytes as an integer .

///// os module
*/

import os from "os";

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());

// console.log(os.hostname());
// console.log(os.homedir());
// console.log(os.networkInterfaces());
// console.log(os.freemem());
console.log(os.totalmem());
