const navIcon = document.querySelector(".icon_nav");
const navMenu = document.querySelector(".nav_menu");

navIcon.addEventListener("click", () => {
  navMenu.classList.toggle("nav_menu-visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
  navIcon.setAttribute("aria-label", "Cerrar menú");
  } else {
  navIcon.setAttribute("aria-label", "Abrir menú");
  }
});
