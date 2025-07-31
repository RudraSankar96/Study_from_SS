const img = document.querySelector("#myImg");
const btn = document.querySelector("#toggleBtn");

btn.addEventListener("click", () => {
  img.setAttribute("src", "images/image2.jpg");
  img.setAttribute("alt", "Image 2");
});
