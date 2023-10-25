const menuicon = document.querySelector(".menu-icon");
const navBar = document.querySelector(".nav-bar");

menuicon.addEventListener("click", () => {
  menuicon.classList.toggle("active");
  navBar.classList.toggle("active");
})

document.querySelectorAll(".nav-bar li").forEach(n => n.addEventListener("click", () => {
  menuicon.classList.remove("active");
  navBar.classList.remove("active");
}))

const faq = document.querySelectorAll("h4");

faq.forEach((faq) => {
  faq.addEventListener('click', () => {
    const answer = faq.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  })
})