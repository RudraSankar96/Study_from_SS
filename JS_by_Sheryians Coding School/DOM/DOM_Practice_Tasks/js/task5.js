const link = document.querySelector("#myLink");
const btn = document.querySelector("#changeLinkBtn");

btn.addEventListener("click", () => {
  link.setAttribute("href", "https://www.youtube.com");
  link.innerText = "Visit YouTube";
});
