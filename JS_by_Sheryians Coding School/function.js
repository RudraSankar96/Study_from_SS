// Simple Function to add two numbers.
// It is also called a function declaration.
function sum() {
  console.log(6 + 4);
}
sum();
console.log("..................");

// Function Expression
let sum2 = function () {
  console.log(23 + 7);
};
sum2();
console.log("................");

// Arrow Function
let sum3 = () => {
  console.log(10 + 5);
};
sum3();
console.log(".................");

// Function with Parameters
function addition(a, b) {
  console.log(a + b);
}
addition(5, 15);
console.log("..................");
// Function with Default Parameters
function sub(a = 4, b = 3) {
  console.log(a - b);
}
sub();
console.log(".................");

// Function with Rest parameters
function num(...val) {
  console.log(...val);
}
num(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(".................");

// Function with Return Statement
function abcd(v) {
  return 25 + v;
}
let result = abcd(45);
console.log(result);
console.log(".................");

// first-class function
function ijkl(res){
     res();
};
ijkl (function()     //we can use finction as variable this is called first-class function
{
    console.log("objects are first class citizens in JS");
});
console.log(".................");