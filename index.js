// NAVIGATION

let navigationHeight = document.querySelector("nav").offsetHeight;

// console.log(navigationHeight);

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);

// HAMBURGER MENU
const hamburgerMenu = document.querySelector(".hamburger");
const displayMenu = document.querySelector(".nav__links");
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  displayMenu.classList.toggle("nav-open");
});
