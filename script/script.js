feather.replace();

const navbarNav = document.querySelector(".navbar_nav");
const hamburger = document.getElementById("hamburger_menu");
const searchForm = document.querySelector(".search_form");
const searchToggle = document.getElementById("search");
const shoppingCartToggle = document.getElementById("shopping_cart_button");
const shoppingCart = document.querySelector(".shopping_cart");

// Toggle untuk nav bar
hamburger.onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle untuk search bar
searchToggle.onclick = (e) => {
  searchForm.classList.toggle("active");
  document.getElementById("searchInput").focus();
  e.preventDefault();
};

// Toggle untuk shopping cart
shoppingCartToggle.onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Ketika tombol selainnya diklik
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchForm.contains(e.target) && !searchToggle.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (
    !shoppingCartToggle.contains(e.target) &&
    !shoppingCart.contains(e.target)
  ) {
    shoppingCart.classList.remove("active");
  }
});

// Tampil Modal
const detailItemButtons = document.querySelectorAll(".detail_item_button");
const modalContainer = document.getElementById("modal_container");

detailItemButtons.forEach((btn) => {
  btn.onclick = (e) => {
    modalContainer.style.display = "flex";
    e.preventDefault();
  };
});

// Close Modal
document.querySelector(".modal_box .close_icon").onclick = (e) => {
  modalContainer.style.display = "none";
  e.preventDefault();
};

window.onclick = (e) => {
  if (e.target == modalContainer) {
    modalContainer.style.display = "none";
  }
};
