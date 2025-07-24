// Hoe to right array in js
// its reprsent between two [], and arrays have index value .
let marks = [45, 55, 23, 65, 89, 99, 100];
console.log(marks[4]);
console.log("..................");

// modify array:
let arr = [10, 20, 30, 40, 50, 60];
arr[3] = 80;
console.log(arr);
console.log("..................");

// Example of push method.
// add a number in the last index of array.
let arr2 = [11, 22, 33, 44, 55, 66];
arr2.push(88);
console.log(arr2);
console.log("....................");

// Example of pop method.
// delete the last index value.
let num = [74, 85, 96, 41, 52, 63];
num.pop();
console.log(num);
console.log("....................");

// Example of shift method.
// its remove first  item from  array.
let str = [45, 55, 68, 21];
str.shift();
console.log(str);
console.log("....................");

// Example of unshift method.
// It add item at the begining of array.
let name = ["Happy", "Rudra", "Sankar"];
name.unshift("Bikun");
console.log(name);
console.log(".....................");

// Example of splice method.
// it add or remove items at specific index
let name2 = ["Happy", "Rudra", "Sankar"];
name2.splice(1, 0, "Bikun"); // Insert at index 1
console.log(name2);
console.log(".....................");

// Example of reverse method.
// It reverse the order no of element.
let a = [4, 5, 6, 7, 8, 9];
a.reverse();
console.log(a);
console.log("......................");

// Example of sort method.
// it sorts the element.
let arr3 = [60, 50, 80, 90, 10, 12, 15, 11];
arr3.sort(function (a, b) {
  return a - b; //a - b works as asending order
});
console.log(arr3);
console.log("......................");

// Example of foreach method
// it goes to each index separately.
let array = [34, 43, 24, 42];
array.forEach(function (val) {
  console.log(val);
});
console.log("......................");

// Add 5 in the each index of array.
let arr4 = [98, 67, 76, 54, 35];
arr4.forEach(function (val) {
  console.log(val + 5);
});
console.log(".......................");

// Doubled each number using map method.
let numbers = [2, 5, 8, 9, 6];
let doubled = numbers.map(function (num) {
  return num * 2;
});
console.log(doubled);
console.log(numbers);
console.log(".........................");

// FILLTER() METHOD:
// Hindi:
// .filter() method ek naya array banata hai un elements ka jo kisi di hui condition ko satisfy karte hain.
// English:
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// Example of fillter() method.
// Print the number which is greater than 12.
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5, 6, 12, 3, 55, 66, , 44, 78];
let newnum = num1.filter(function (val) {
  if (val > 12) return true;
});
newnum.sort(function (a, b) {
  return a - b;
});
console.log(newnum);
console.log("..........................");

// Print the even number using fillter() method. And sort them in asecnding order.
let num2 = [45, 36, 89, 99, 90, 98, 2, 12];
let newarr = num2.filter(function (val) {
  if (val % 2 === 0) return true;
});
newarr.sort(function (a, b) {
  return a - b;
});
console.log(newarr);
console.log(".........................");

// Example of reduce() method.
// .reduce() method array ke sabhi elements ko ek ek karke process karta hai aur ek hi final value return karta hai — yeh value tumhare diye gaye function aur initial value ke basis par banti hai.
// Add the all num in the array.
let array1 = [45, 36, 89, 99, 90, 98, 2, 12];
let sum = array1.reduce(function (accumaltor, val) {
  return accumaltor + val;
}, 0);
console.log(sum);
console.log(".........................");

// Print the name which length is 4.
let names = ["Raj", "Ankit", "Aman", "John"];
let longNames = names.filter(function(name) {
  return name.length > 4;
});

console.log(longNames); // ["Ankit"]
console.log(".........................");

// Convert array of strings to uppercase
let fruits = ["apple", "banana", "cherry"];
let upperFruits = fruits.map(function(fruit) {
  return fruit.toUpperCase();
});

console.log(upperFruits); // ["APPLE", "BANANA", "CHERRY"]
console.log("...........................");

// Find the maximum number
let numbers1 = [15, 45, 7, 89, 32];

let max = numbers1.reduce(function(acc, curr) {
  if (curr > acc) {
    return curr;
  } else {
    return acc;
  }
});

console.log(max); // Output: 89

// FIND() METHOD:
// The find() method returns the first element in an array that satisfies a provided testing function.// If no element satisfies the condition, it returns undefined.
// Example of find method.
// find the posetive element from the array.
let neg = [-45,-56,67,-89,90];
let posetive= neg.find(function(val){
  return val>0;
});
console.log(posetive);
console.log("......................");
