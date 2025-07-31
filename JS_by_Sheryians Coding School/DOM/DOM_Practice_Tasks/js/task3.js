const btn = document.querySelector("#changeBtn");
const para = document.querySelector("#text");

btn.addEventListener("click", () => {
  para.innerText = "The text has been changed!";
});
