// Example of querySelector().
let h1 = document.querySelector("h1");
console.dir(h1);
h1.textContent = "Welcome to Sheryians Coding School";
function applyStyle(){
    let heading = document.getElementById("heading");
    // change text color
    heading.style.color= "White"
    // change the background color
    heading.style.backgroundColor="black";
    // Add padding and color
    heading.style.padding = "10px";
    heading.style.borderRadius= "8px";
}

// Example of querySelector().
let p1 = document.querySelector("p");
console.dir(p1);
p1.textContent = "Hi This is my coding shool.";

// Example of getElementsById().
let p2 = document.getElementById("ij");
p2.textContent= "This is my Second Paragraph"

function changeText(){
    document.getElementById("message").innerText = "Text changed  using DOM";
}
// Example of adding new element.
   function addNote() {
      // 1. Create a new <p> element
      let newPara = document.createElement("p");

      // 2. Add text inside the <p>
      newPara.innerText = "This is a new note added using DOM!";

      // 3. Get the container where we want to add the new <p>
      let container = document.getElementById("notes-container");

      // 4. Append the new <p> to the container
      container.appendChild(newPara);
    }

    // Example of increase font size
    function increaseFont() {
      let text = document.getElementById("myText");
      
      // Change the font size using style
      text.style.fontSize = "24px";  // You can also use "2rem" or "150%"
    }

     function addInput() {
      // 1. Create a new input element
      let newInput = document.createElement("input");

      // 2. Set attributes
      newInput.type = "text";
      newInput.placeholder = "Enter another skill";
      newInput.style.marginTop = "5px";
      newInput.style.display = "block";

      // 3. Add it inside the container
      document.getElementById("input-container").appendChild(newInput);
    }

    function toggleVisibility() {
      let para = document.getElementById("myPara");

      // Check current state
      if (para.style.display === "none") {
        para.style.display = "block";  // Show it
      } else {
        para.style.display = "none";   // Hide it
      }
    }

let btn=document.querySelector("#colorBtn");
let boxes= document.querySelectorAll(".box");

btn.addEventListener("click",function(){
  boxes.forEach(function(box){
    box.style.backgroundColor="orange";
  });
});

let btn2= document.querySelector(".changeText");
let a =document.querySelector("a")

btn2.addEventListener("click",function(){
  a.innerText = "Go to YouTube";
  // Example of setAttribute
  a.setAttribute ("href","https://www.youtube.com/");
});
