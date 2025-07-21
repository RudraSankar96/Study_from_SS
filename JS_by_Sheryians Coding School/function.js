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
function containsA(str) {
  return str.includes("a");
}
console.log(containsA("apple"));
console.log(containsA("hello"));
console.log("..................");

// Write a function that returns the length of a string.
// Example: stringLength("hello") → 5
function stingLength(str) {
  console.log(str.length);
}
stingLength("Rudra");
console.log("..................");

// IIFE( imidately invoked function  Expression) example.
(function () {
  console.log("Rudra99");
})();
console.log("..................");

// Use rest parameter ti accept any number of scores and return the total.
function getScore(...val) {
  let total = 0;
  val.forEach(function (scores) {
    total = total + scores;
  });
  return total;
}
console.log(getScore(20, 30, 88, 75, 45, 645));
console.log("...................");

// Use early return to print the allowed for vote.
function checkAge(age) {
  if (age < 18) return "Too Young";
  return "Allowed";
}
console.log(checkAge(43));
console.log("...................");

// Pass a function into another function and execute it inside.
function m(val) {
  val();
}
m(function () {
  console.log("Hi Rudra");
});
console.log("....................");

setTimeout(function () {
  console.log("Hello after 2 sec");
}, 2000);

// 1. Create a function that returns the maximum of three numbers.
function findMax(a, b, c) {
  if (a > b && a > c) return "a is greater";
  if (b > a && b > c) return "b is greater";
  else {
    return "c is greater";
  }
}
console.log(findMax(4, 9, 2)); // Output: 9
console.log("....................");

//  Create a closure that adds a given number to any number you pass later.
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

// Creating a closure
const add5 = makeAdder(5); // x = 5 is remembered

console.log(add5(10)); // Output: 15 → (5 + 10)
console.log(add5(20)); // Output: 25 → (5 + 20)

// You can create other versions too
const add10 = makeAdder(10);
console.log(add10(7)); // Output: 17 → (10 + 7)
console.log("..................");

//  Write an arrow function that filters out all even numbers from an array.
const filterEvens = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};

// Example usage
console.log(filterEvens([1, 2, 3, 4, 5, 6, 7, 8])); // Output: [2, 4, 6, 8]
console.log("....................");

//  Create a function that counts how many vowels are in a string.
function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Example usage
console.log(countVowels("Rudra Swain")); // Output: 4
console.log(countVowels("Hello World")); // Output: 3
console.log("....................");

// Write a BMI calculator
function bmi(weight, height){
  return weight/(height*height);
}
console.log(bmi(88, 1.8).toFixed(2));
console.log("....................");

// Create a discounte program using fucntion
function discountCalculator(discount) {
  return function(price){
    return price - price * (discount/ 100);
  };
}
let discounter = discountCalculator(20);
console.log(discounter(300));
console.log(".......................");


// Write a function that checks if a number is prime.
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(17)); // true
console.log(".......................");

// Write a function to calculate factorial using recursion.
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
console.log("......................");

//  Check if a string is a palindrome.
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return str === str.split('').reverse().join('');
}
console.log(isPalindrome("Racecar")); // true
console.log("........................");