function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

// Creating a closure
const add5 = makeAdder(5);  // x = 5 is remembered

console.log(add5(10)); // Output: 15 → (5 + 10)
console.log(add5(20)); // Output: 25 → (5 + 20)

// You can create other versions too
const add10 = makeAdder(10);
console.log(add10(7)); // Output: 17 → (10 + 7)