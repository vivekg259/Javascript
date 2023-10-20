console.log("2. Comparison Operator")
console.log()

var x = 11;
var y = 17;
var z = "11";

console.log(x==z) //true - value is same
console.log(x===z) //false - value is same but type is not same
console.log(x!=y) //true - value of x and y is not the same
{
    let y = "11";               //local variable declaration and assignment
    console.log(x!==y) //true - value is same but type is not same, any one of them must be not same to print the true value
}
console.log(x<y) //true - value of x is smaller than value of y
console.log(y>x) //true - value of y is greater than value of x
console.log(x<=y) //true - one condition is true. So the output is true
console.log(x>=y)  //false - both conditions are false. So the output is false