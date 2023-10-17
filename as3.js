//DataTypes in JavaScript -------------------------------------------------------------------
console.log("Datatypes in JavaScript")
console.log("There is two datatypes")
console.log("1. Primitive Data Types")
console.log("2. Non primitive Data Types")
console.log()
console.log("1. Primitive Data Types")
console.log("- String")
console.log("- Number")
console.log("- Boolean")
console.log("- Undefined")
console.log("- Null")
console.log()
console.log("second datatypes in as4.js")
console.log()

var x = "Hello" ; //String datatype variable
var num = 8 ; //Number datatype variable
var yes = true ; //Boolean datatype variable with value true/1
var not = false ; //Boolean datatype variable with value false/0
var y; //Undefined variable
var z = '' ; //Null datatype variable
console.log(x,num,yes,not,y,z)

//------Concepts on Datatype Variables--------------

var a = 100;
var b = " is a Number";
var res1 = a+b;               // addition of first number and then string datatype
console.log(res1)

{
    let b = "Number is ";
    var res2 = b+a;                // addition of first string and then number datatype
    console.log("Result: ",res2)
}

var c = 50;
res3 = a+c+b;             //addition of first two numbers and then string datatype
console.log(res3)

{
    let b = "Number is ";
    res4 = b+c+a;             //addition of first string and then two numbers datatype
    console.log(res4)
}

//concepts on boolean datatypes

var x = 5;
var y = 8;
result = x==y;
console.log(result)
var y = 5;
result = x==y;
console.log(result)

//-----concept on undefined and null datatype----------------------------

var m = undefined;
var n = null;
result1 = m==n;
console.log(result1)
result1 = m===n;
console.log(result1)