var _greet = "hello";
let $name = 'dhiraj';
const PI = 3.14;
console.log('hello '+$name);
// single line comment
/*
    multiline comment
*/
const singleQuotes = 'hello';
const doubleQuotes = "hello ";
const backticks = `hello ${$name}!!! ${ 2+2}`;
console.log(backticks);
console.log(typeof backticks);

let n = 2.2;
console.log(typeof (n / 'string'));

//boolean
let state = false;
if(state)
    console.log("true");
else
    console.log("false");

//Null
let age = null;

// undefiner
let x;

// objects
const person = {
    name: "john",
    age: 23,
}
//dot notation
console.log(person.age);

//array
let arr = [1,2,3,4];
console.log(arr);

let date = new Date();
console.log(date);

// comparison operators
let a = 4, b = '4';
console.log(a == b);
console.log(a != b);

// strict equality
console.log(a === b);
console.log(a !== b);

// function declaration
function sum(n){
    return n+n;
    // has access to this keyword
}
// function expression
const name = function(n1){
    return n1+1;
}

// arrow function
const fun = (n2) => {
    return n2+3;
}
// only 1 param and 1 return
const fun1 = n3 => n3 * n3;


console.log(fun1(4));

// document.getElementsByName(h1)



// area of triangle
//document.getElementById("cal").onclick = 

const area = () =>{

let l = Number(document.getElementById("len").value);
let w = Number(document.getElementById("wid").value);
document.getElementById("title").innerHTML = `Area of Rectangle is ${l*w}`;

}
