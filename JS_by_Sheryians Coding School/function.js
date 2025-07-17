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
function ijkl(res) {
  res();
}
ijkl(
  function () //we can use finction as variable this is called first-class function
  {
    console.log("objects are first class citizens in JS");
  }
);
console.log(".................");

// Higher-order function
function efgh() {
  return function () {
    console.log("Hello World");
  };
}
efgh()(); // calling the returned function
console.log("..................");

// Creating a calculator using functions
function calculator(i, j, operation) {
  if (operation === "add") return i + j;
  if (operation === "subtract") return i - j;
  if (operation === "multiply") return i * j;
  if (operation === "divide") {
    if (j != 0) return i / j;
    else return "cannot divide by zero";
  }
  return "Invalid operation";
}
console.log(calculator(10, 7, "divide"));
console.log("..................");

// Create a function that returns the square of a number.
// Example: square(5) → 25
function square(num) {
  console.log(num * num);
}
square(9); // Output: 81
console.log("..................");

// Write a function that checks if a number is even or odd.
// Example: isEven(4) → true
function isEven(num) {
  if (num % 2 === 0) return "Even";
  else return "Odd";
}
console.log(isEven(5)); // Output: false
console.log("..................");

// Write a function that takes a number and returns its factorial.
// Example: factorial(5) → 120
function factorial(num1) {
  let fact = 1;
  for (let i = 1; i <= num1; i++) {
    fact *= i;
  }
  console.log(fact);
}
factorial(5); // Output: 120
console.log("..................");

//Create a function that converts Celsius to Fahrenheit.
// Formula: (C × 9/5) + 32
function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  console.log(fahrenheit);
}
celsiusToFahrenheit(25); // Output: 77
console.log("..................");

// Make a function that checks if a string contains the letter "a".
// Example: containsA("apple") → true
function containsA(str){
  return str.includes("a");
}
console.log(containsA("apple"));
console.log(containsA("hello"));
console.log("..................");