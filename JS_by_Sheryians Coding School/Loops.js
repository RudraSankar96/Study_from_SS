// Repeat karne ko loop kehte hain.
// 1. For loop

// 1. Print numbers frim 1 to 10 using for loop.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("--------------"); // Separator line

// 2. Print numbers from 10 to 1 using while loop.

let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}
console.log("--------------"); // Separator line

// 3. Print even numbers from 1 to 20 using for loop.
for (let n = 1; n <= 20; n++) {
  if (n % 2 === 0) {
    console.log(n);
  }
}
console.log("--------------"); // Separator line

// 4. Print odd numbers from 1 to 15 using while loop.
let m = 1;
while (m <= 15) {
  if (m % 2 === 1) {
    console.log(m);
  }
  m++;
}
console.log("--------------"); // Separator line

// 5. Print the multiplication table of 5 using for loop.
for (let k = 1; k <= 10; k++) {
  console.log(`5 * ${k} = ${5 * k}`);
}
console.log("--------------"); // Separator line

// 6. Find the sum of numbers from 1 to 100 using a for loop.
let sum = 0;
for (let e = 1; e <= 100; e++) {
  sum = sum + e;
}
console.log(sum);
console.log("--------------"); // Separator line

// 7. Print all numbers between 1 to 50 taht are divisible by 3.
for (let p = 1; p <= 50; p++) {
  if (p % 3 === 0) {
    console.log(p);
  }
}
console.log("--------------"); // Separator line

// 8 . Ask the user for a number and  print wheter each number from 1 to that number is even or odd.

// let val= prompt("Enter a numbrer:");
// for ( let l=1; l<= val ; l++){
//     if (l % 2 === 0) {
//         console.log(`${l} is even`);
//     } else {
//         console.log(`${l} is odd`);
//     }
// }
// 9. Count how many numbers between 1 to 100 are divisible by 3 & 5.
for (let q = 1; q <= 100; q++) {
  if (q % 3 === 0 && q % 5 === 0) {
    console.log(`${q} is divisible by both 3 and 5`);
  }
}
console.log("--------------"); // Separator line

// Now Break And Continue.
// 10. stop at first multiple of 7.
for (let r = 1; r <= 100; r++) {
  console.log(r);
  if (r % 7 === 0) {
    break;
  }
}
console.log("--------------"); // Separator line

// 11. Print numbers from 1 to 20 but skip multiples of 4.
for (let s = 1; s <= 20; s++) {
  if (s % 4 === 0) continue;
  console.log(s);
}
console.log("--------------"); // Separator line

// Print the first 5 odd numbers from 1 to 100 using a for loop. Use a break statement to stop the loop after printing 5 odd numbers.
// Expected output:
// 1 3 5 7 9
let count = 0;
for (let t = 1; t <= 100; t++) {
  if (t % 2 != 0) {
    count++;
    console.log(t);
  }
  if (count === 5) {
    break; // Stop after printing 5 odd numbers
  }
}
console.log("--------------"); // Separator line

