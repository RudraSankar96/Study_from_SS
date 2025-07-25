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
console.log(person.age);

//  Adding/Updating Properties
person.city = "Bhubaneswar";     // Add new
person.age = 26;                 // Update existing
console.log(person.age);
console.log(person.city);
console.log(".....................");

// Another example of Student Object
let student = {
  rollNo: 12,
  name: "Rudra Swain",
  subjects: ["Math", "English", "Science"],
  getSummary: function() {
    return `${this.name} is enrolled in ${this.subjects.length} subjects.`;
  }
};

console.log(student.getSummary());
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

//Example of Object.key
let man ={
  name: "Happy",
  age: 23,
  city: "cuttack",
};
console.log(Object.keys(man));
console.log(Object.entries(man));
console.log(".....................");

// Example of Spread operator. It makes exact copy of orginal obj.
let obj={
  name: "Rahul",
  age: 54,
  city:"BBSR",
};

let obj2={...obj};
console.log(obj2);  //It creates a copy of object.
console.log(".....................");

// Exmple of deep clone.
let car = {
  name: "Ferari",
  Brand: "Ferari",
  addres:{
    city:"French",
  } ,
}
let object1= JSON.parse(JSON.stringify(car));
console.log(object1);
object1.addres.city= "America";
console.log(car);
console.log(object1);
console.log(".....................");