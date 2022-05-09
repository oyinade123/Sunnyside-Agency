const menu = document.querySelector(".menu");
const navMenu = document.querySelector("ul");
const navlinks = document.querySelectorAll("li");


menu.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  head.style.display = "none";
});

navlinks.forEach((n) =>
  n.addEventListener("click", () => {
    
  })
);
