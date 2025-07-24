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