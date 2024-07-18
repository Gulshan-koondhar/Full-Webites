var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Data Entry Expert"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const menu = document.querySelector(".menu");
const navList = document.querySelector(".nav-list");

menu.addEventListener("click", () => {
  navList.classList.toggle("active");
});

