/** 
  path module
the path module provides utilites for working with file and directry path.
it can be accessed using
const path=require("path")

basename()-The basename() method returns the last portion of a path, similar to the Unix basename command.
Trailing directory separators are ignored.
Syntax:- basename(path[, ext])
Example:- basename("/test/something.html','html');

dirname ( ) - The dirname ( ) method returns the directory name of a path , similar to the Unix dirname command .
Trailing directory separators are ignored .
Syntax : - dirname ( path )
Example : - dirname ( ' / test / something.html ' ) ;

extname ( ) - The extname ( ) method returns the extension of the path , from the last occurrence of the . ( period )
character to end of string in the last portion of the path . If there is no . in the last portion of the path , or if there
are no . characters other than the first character of the basename of path , an empty string is returned .
Syntax : - extname ( path )
Example : - extname ( ' index.html ' ) ;

join ( ) - The join ( ) method joins all given path segments together using the platform - specific separator as a
delimiter , then normalizes the resulting path .

Zero - length path segments are ignored . If the joined path string is a zero - length string then ' . ' will be returned ,
representing the current working directory .
Syntax : - join ( [ ... paths ] )
Example : - join ( ' / search ' , ' label ' , ' course / python ' , ' oop ' , ' .. ' ) ;

normalize ( ) - The normalize ( ) method normalizes the given path , resolving ' .. ' and ' . ' segments . If the path is
zero - length string , ' . ' is returned , representing the current working directory .
Syntax : - normalize ( path )
Example :
normalize ( ' C : \\ temp \\\\ foo \\ bar \\ .. \\ ' ) ;
win32.normalize ( ' C : //// temp \\\\\\\\\ / foo / bar ' ) ;
Note - win32 property provides access to Windows - specific implementations of the path methods .

parse ( ) - The parse ( ) method returns an object whose properties represent significant elements of the path .
Trailing directory separators are ignored .
Syntax : - parse ( path )
Example : - parse ( C : \\ path \\ dir \\ file.txt ' ) ;

is Absolute ( ) - The path.isAbsolute ( ) method determines if path is an absolute path . If the given path is a zero
length string , false will be returned .
Syntax : - isAbsolute ( path )
Example :
isAbsolute ( ' // server ' ) ;
// true
isAbsolute ( ' \\\\ server ' ) ;
// true
isAbsolute ( ' C : / foo / .. ' ) ; // true
isAbsolute ( ' C : \\ foo \\ .. ' ) ;
// true
isAbsolute ( ' bar \\ baz ' ) ;
// false
isAbsolute ( " bar / baz ' ) ;
// false
isAbsolute ( ' . ' ) ;
// false
 
*/

// const { dirname } = require("path");
const path = require("path");
console.log(__dirname);
// console.log(path.basename(__filename));
// console.log(path.basename(__filename, ".js"));
//console.log(path.dirname(__filename));

//console.log(path.extname(__filename));
