// Global, Local and Function Scope Example

let x = 5; //global scope

function a() {
    var x = 12 //local scope and this is also showing the example of function scope which mean the assigned value to a variable is only work in limit of function
    console.log(x)
}

function b() {
    console.log(x)
}

a()
console.log(x)
b()