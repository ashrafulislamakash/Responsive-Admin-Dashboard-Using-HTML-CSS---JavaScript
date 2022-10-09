const sideMenu = document.querySelector("aside");
const menuBTn = document.querySelector("#menu-btn");
const coloseBtn = document.querySelector("#colse-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBTn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

coloseBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});
