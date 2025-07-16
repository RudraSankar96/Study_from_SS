// Simple Function to add two numbers.
// It is also called a function declaration.
function sum(){
console.log(6 + 4);
}
sum();

// Function Expression
let sum2 = function(){
    console.log(23 + 7);
    }
sum2();

// Arrow Function
let sum3 = () => {
    console.log(10 + 5);
};
sum3();

// Function with Parameters
function addition(a, b){
    console.log(a+b);
};
addition(5,15);
// Function with Default Parameters
function sub(a = 4 , b = 3){
    console.log(a -b);
};
sub();

// Function with Rest parameters
function num(...val){
    console.log(...val);
};
num(1,2,3,4,5,6,7,8,9,10);