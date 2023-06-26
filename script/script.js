feather.replace();

const navbarNav = document.querySelector(".navbar_nav");
const hamburger = document.getElementById("hamburger_menu");

hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
