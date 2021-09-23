
// ------------------------------------------MENU NAVEGACION--------------------------------------
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

// ---------------------------------------SLIDER DE IMAGENES----------------------------------------

const slider= document.querySelector("#slider");
let sliderSection= document.querySelectorAll(".slider-section");
let sliderSectionLast= sliderSection[sliderSection.length-1];
const btnLeft= document.querySelector("#btn-left");
const btnRight= document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next(){
  let sliderSectionFirst= document.querySelectorAll(".slider-section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s"
  setTimeout(function(){
    slider.style.transition = "none"
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft="-100%";
  }, 500);
}

btnRight.addEventListener('click', function(){
   next();
})

function prev(){
  let sliderSection= document.querySelectorAll(".slider-section");
  let sliderSectionLast= sliderSection[sliderSection.length-1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s"
  setTimeout(function(){
    slider.style.transition = "none"
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft="-100%";
  }, 500);
}

btnLeft.addEventListener('click', function(){
   prev();
})

setInterval(function(){
  next();
}, 5000);
