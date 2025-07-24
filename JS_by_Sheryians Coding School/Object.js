// WAHT IS OBJECT:
// An object is a collection of related data and functionality — stored as key-value pairs.
// Think of an object like a real-world "thing" — e.g. a person, car, product, etc., that has properties (data) and actions (methods).

// Example:
let person ={
    name: "Rudra",
    age: 25,
    isStudent: true,
    skills: ["JavaScript", "HTML", "CSS"],
  greet: function() {
    console.log("Hello, I am " + this.name);
  }
};
console.log(person.name);
console.log(person.greet());
console.log(".....................");

// For in loop of object.
let per={
    name: "Rudra",
    age: 25,
    city: "Jagatsinghpur"
};
for(let key in per){
    console.log(key + ":", per[key]);
};
console.log(".....................");