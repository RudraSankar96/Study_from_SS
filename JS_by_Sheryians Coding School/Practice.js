// And operator example(&& )
let x=10;
let y=20;

if(x> 5 && y < 25){
    console.log("A");
}
else{
    console.log("B");
}

// Or operator example (||)
let isAdmin = true;
let isLoggedIn = false;

if(isAdmin || isLoggedIn){
    console.log("Access granted");
}
else{
    console.log("Access denied");
}

// Not operator example (!)
let temp = 35;

if(!(temp < 30)){
    console.log("It's hot outside");
} else {
    console.log("It's cool outside");
}
// Ternary operator example (condition ? expr1 : expr2)
let score = 85;

let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" : "Fail";
console.log(score + " is grade " + grade);

// Ternary and And operator example (condition1 && condition2 ? expr1 : expr2)
let loggedIn = true;
let hasToken = false;
let access = loggedIn && hasToken ? "Access granted" : "Access denied";
console.log(access);  //output: Access denied

// +operator example (increment)
let a =49;
a++;
console.log(a); // Output: 50