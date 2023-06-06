//>>call:
// call method is use to invoke a function directly,
//by passing in the Reference which points to this variable ,
//inside the method.

//>>apply:
//apply is exactly as same as call method, the only difference is it takes the second argument as ,
//array list of the parameter which needs to passed to the function.

let name = {
  firstName: "birendra",
  lastName: "gupta",
};

let name2 = {
  firstName: "rewgt",
  lastName: "gupta",
};

let printFullName = function (state) {
  console.log(this.firstName, this.lastName, "from", state);
};

printFullName.call(name2, "maharashtra");
printFullName.apply(name2, ["goa"]);

let print = printFullName.bind(name, "jharkhand");
print();

//birendra gupta from maharashtra
//birendra gupta from goa
//birendra gupta from jharkhand
