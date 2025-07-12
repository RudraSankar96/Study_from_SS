// Repeat karne ko loop kehte hain.
// 1. For loop

// 1. Print numbers frim 1 to 10 using for loop.

for (let i=1; i<=10; i++){
    console.log(i);
}

// 2. Print numbers from 10 to 1 using while loop.

let j=10;
while (j >= 1){
    console.log(j);
    j--;
}

// 3. Print even numbers from 1 to 20 using for loop.
for ( let n=1; n<=20; n++){
    if (n % 2 === 0){
        console.log(n);
    }
}

// 4. Print odd numbers from 1 to 15 using while loop.
let m=1;
while( m<= 15){
     if (m % 2 === 1){
    console.log(m);}
    m++;
}

// 5. Print the multiplication table of 5 using for loop.
for (let k =1; k<=10; k++){
    console.log(`5 * ${k} = ${ 5 * k}`);
}

// 6. Find the sum of numbers from 1 to 100 using a for loop.
 let sum= 0;
 for (let e=1; e<=100; e++){
    sum=sum+ e;}
    console.log(sum);

// 7. Print all numbers between 1 to 50 taht are divisible by 3.
for (let p=1; p<=50; p++){
    if (p % 3 === 0){
        console.log(p);
    }
}