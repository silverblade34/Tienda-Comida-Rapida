
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
//------------------------------------------MOSTRAR CONFIRM--------------------------------------
function mostrarConfirm(){
  swal('Agregado','Se agrego correctamente al carrito','success');
}
function mostrarTotal(){
  cant=parseFloat(document.getElementById("cant").value);
  precio=parseFloat(document.getElementById("precio").innerHTML);
  var producto= cant*precio;
  document.getElementById("total").innerHTML="Total:   S/. " +producto;
  cant=document.getElementById('cant').value;
if (cant<=5) {
  swal("El valor de su orden x "+cant+ " porciones seria S/."+producto,'Esto no incluye el delivery');

} else {
  swal("El valor de su orden x "+cant+ " porciones seria S/."+producto,"Se le aplicara un descuento del 15% a su pedido, por su cantidad de porciones :D");
}
}
