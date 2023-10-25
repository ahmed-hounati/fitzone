const menuicon = document.querySelector(".menu-icon");
const navBar = document.querySelector(".nav-bar");

menuicon.addEventListener("click", () => {
  menuicon.classList.toggle("active");
  navBar.classList.toggle("active");
});

document.querySelectorAll(".nav-bar li").forEach((item) => {
  item.addEventListener("click", () => {
    menuicon.classList.remove("active");
    navBar.classList.remove("active");
  });
});

