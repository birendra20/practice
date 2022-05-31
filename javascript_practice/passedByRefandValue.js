/////////////////////////////////////////////////////////////////////////////////////
//pass by value
// let orig = 0;
// let copy;
// copy = orig;
// copy = 1;
// console.log(orig, copy); //0,1

////////////////////////////////////////////////////////
//pass by reference.
// let obj = { value: 10 };
// let obj1 = obj;
// obj1.value = 20;
// console.log(obj.value); //20

///////////////////////////////////////////////////////////////
//Note: only the data inside the object is non-primitive not the variable.
//it won't work
// let a = { test: 100 };
// let b = a;
// let c = b;
// b = { test: 101 };
// console.log(a, b, c); //{test:100} {test:101} {test:100}

/////////////////////////////////////////////////////////////////////

// So how to prevent from Pass by reference.
// There are few tricks to prevent an object from being pass are reference.
// Object.assign()
// JSON.stringify()
// Spread syntax

//////////////////////////////////////////////////////////////////////////

//1) Object.assign(ES2016);
// let obj = { a: 1, b: 2 };
// let obj1 = Object.assign({}, obj);
// obj1.a = 100;
// console.log(obj, obj1); // {a:1,b:2} {a:100,b:2}

//////////////////////////////////////////////////////////////////////////

// // 2) JSON.stringify;
// let obj = { a: 1, b: 2 };
// let obj1 = JSON.parse(JSON.stringify(obj));
// obj1.a = 100;
// console.log(obj, obj1); // {a:1,b:2} {a:100,b:2}

//////////////////////////////////////////////////////////////////////////////////////////
// 3) Spread syntax (ES2018)
// let obj = { a: 1, b: 2 };
// let obj1 = { ...obj };
// obj1.a = 100;
// console.log(obj, obj1); // {a:1,b:2} {a:100,b:2}
