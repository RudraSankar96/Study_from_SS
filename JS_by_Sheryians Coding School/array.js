// Hoe to right array in js 
// its reprsent between two [], and arrays have index value .
let marks = [45,55,23,65,89,99,100];
console.log(marks[4]);
console.log("..................");

// modify array:
let arr = [10,20,30,40,50,60,];
arr[3] = 80;
console.log(arr);
console.log("..................");

// Example of push method.
// add a number in the last index of array.
let arr2 = [11,22,33,44,55,66];
arr2.push(88);
console.log(arr2);
console.log("....................");

// Example of pop method.
// delete the last index value.
let num = [ 74,85,96,41,52,63];
num.pop();
console.log(num);
console.log("....................");

// Example of shift method.
// its remove first  item from  array.
let str = [45,55,68,21];
str.shift();
console.log(str);
console.log("....................");

// Example of unshift method.
// It add item at the begining of array.
let name = ["Happy","Rudra", "Sankar"];
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
let a = [4,5,6,7,8,9];
a.reverse();
console.log(a);
console.log("......................");

// Example of sort method.
// it sorts the element.
let arr3 =[60,50,80,90,10,12,15,11];
arr3.sort(function(a,b){
    return a - b;    //a - b works as asending order
});
console.log(arr3);
console.log("......................");

// Example of foreach method
// it goes to each index separately.
let array = [34,43,24,42];
array.forEach(function(val){
    console.log(val);
});
console.log("......................");

// Add 5 in the each index of array.
let arr4 = [98,67,76,54,35];
arr4.forEach(function(val){
    console.log(val + 5);
});
console.log(".......................");