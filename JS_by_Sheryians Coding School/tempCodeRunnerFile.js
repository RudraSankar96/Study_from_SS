let obj={
  name: "Rahul",
  age: 54,
  city:"BBSR",
};

let obj2={...obj};
JSON.stringify(obj2);
console.log(obj2);  //It creates a copy of object.
console.log(".....................");
