const input = document.querySelector("#nameInput");
const btn = document.querySelector("#togglePlaceholderBtn");

btn.addEventListener("click", () => {
  if (input.hasAttribute("placeholder")) {
    input.removeAttribute("placeholder");
  } else {
    input.setAttribute("placeholder", "Enter your name");
  }
});
