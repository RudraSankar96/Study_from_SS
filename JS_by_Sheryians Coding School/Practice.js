// And operator example(&& )
let x = 10;
let y = 20;

if (x > 5 && y < 25) {
  console.log("A");
} else {
  console.log("B");
}
console.log(".................");

// Or operator example (||)
let isAdmin = true;
let isLoggedIn = false;

if (isAdmin || isLoggedIn) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// Not operator example (!)
let temp = 35;

if (!(temp < 30)) {
  console.log("It's hot outside");
} else {
  console.log("It's cool outside");
}
// Ternary operator example (condition ? expr1 : expr2)
let score = 85;

let grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "Fail";
console.log(score + " is grade " + grade);

// Ternary and And operator example (condition1 && condition2 ? expr1 : expr2)
let loggedIn = true;
let hasToken = false;
let access = loggedIn && hasToken ? "Access granted" : "Access denied";
console.log(access); //output: Access denied

// +operator example (increment)
let a = 49;
a++;
console.log(a); // Output: 50

let m = 5;
let n = m++;
console.log(m, n); // Output: 6 5

let p = 10;
let q = ++p;
console.log(p, q); // Output: 11 11

let r = 34;
console.log(r++); // Output: 34
console.log(r); // Output: 35

let s = 5;
let result = s++ + ++s;
console.log(result);

// functions example
let likes = 100;
function likepost() {
  return ++likes;
}
console.log(likepost()); // Output: 101
console.log(likes); // Output: 101

// Write a function getGrade(score) that:
//  . Takes a student's marks (0 to 100)
//  . Returns the grade based  on this logic:
// 90-100 A+
// 80-89 A
// 70-79 B
// 60-69 C
// 33-59 D
// 0-32 Fail
// Anything else Invalid marks

function getGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A+";
  } else if (score >= 80 && score <= 89) {
    return "A";
  } else if (score >= 70 && score <= 79) {
    return "B";
  } else if (score >= 60 && score <= 69) {
    return "C";
  } else if (score >= 33 && score <= 59) {
    return "D";
  } else if (score >= 0 && score <= 32) {
    return "Fail";
  } else {
    return "Invalid marks";
  }
}
console.log(getGrade(26));

// Early retuen pattern example.

function getMark(score) {
  if (score >= 90 && score <= 100) return "A+";
  if (score >= 80 && score <= 89) return "A";
  if (score >= 70 && score <= 79) return "B";
  if (score >= 60 && score <= 69) return "C";
  if (score >= 33 && score <= 59) return "D";
  if (score >= 0 && score <= 32) return "Fail";
  return "Invalid marks";
}
console.log(getMark(-2)); // Output: Fail

// Rock=paper-scissors logic example
function rps(user, computer) {
  if (user === computer) return "Draw";

  if (user === "rock" && computer === "scissor") return "Useer Win";
  if (user === "paper" && computer === "rock") return "User Win";
  if (user === "scissor" && computer === "paper") return "User Win";
  return "Computer Win";
}
console.log(rps("rock", "paper"));

// check even or odd number example
function isEvenOrOdd(num) {
  if (num % 2 === 0) return "Even Number";
  else return "odd Number";
}
console.log(isEvenOrOdd(25));

// Check if person is eligible to vote or not
let age = 14;
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// Check a year is leap year or not
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "Leap Year";
  } else {
    return "Not a Leap Year";
  }
}
console.log(isLeapYear(2025));
console.log(isLeapYear(2024));

// Create a simple calulator using if else if.

let c = 12;
let b = 89;
let operator = "/";
if (operator === "+") {
  console.log(a + b);
} else if (operator === "-") {
  console.log(a - b);
} else if (operator === "*") {
  console.log(a * b);
} else if (operator === "/") {
  console.log(a / b);
} else {
  console.log("Invalid Operation");
}

// Check if Number is Positive, Negative, or Zero
let num = -5;

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
console.log("...................");

// Check if Number is Multiple of 3 or 5 or Both
let num2 = 15;

if (num2 % 3 === 0 && num2 % 5 === 0) {
  console.log("Multiple of both 3 and 5");
} else if (num2 % 3 === 0) {
  console.log("Multiple of 3");
} else if (num2 % 5 === 0) {
  console.log("Multiple of 5");
} else {
  console.log("Not a multiple of 3 or 5");
}
console.log("...................");

