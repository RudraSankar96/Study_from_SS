// Will use this file later for DOM tasks
console.log("JavaScript Loaded!");
// Step 5: Create and add image using DOM
const heroSection = document.querySelector(".hero");

const img = document.createElement("img");
img.src = "https://plus.unsplash.com/premium_photo-1683984171269-04c84ee23234?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG9ubGluZSUyMHN0b3JlfGVufDB8fDB8fHww";
img.alt = "Demo Image";
img.style.marginTop = "20px";
img.style.borderRadius = "10px";
img.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
img.style.maxWidth = "100%";

heroSection.appendChild(img);
// Step 6: Change the heading text content using DOM
const heading = document.querySelector(".hero h1");
heading.textContent = "DOM Project: Interactive Demo Page";
// Step 7: Change background color on button click
const btn = document.getElementById("changeColorBtn");

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomColor();
});

// Helper function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
