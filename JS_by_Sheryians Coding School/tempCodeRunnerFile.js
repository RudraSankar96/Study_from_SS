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
console.log(person.city);
console.log(".....................");
