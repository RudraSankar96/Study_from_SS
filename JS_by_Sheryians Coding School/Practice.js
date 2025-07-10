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