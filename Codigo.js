function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
  section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Variable para realizar un seguimiento de la tipografía actual
let tipografiaActual = 'lancelot';

// Obtener referencia al botón y agregar evento 'click'
const botonCambiarTipografia = document.getElementById('clase');
botonCambiarTipografia.addEventListener('click', cambiarTipografia);

// Función para cambiar la tipografía
function cambiarTipografia() {
  // Cambiar la tipografía en función del estado actual
  if (tipografiaActual === 'lancelot') {
      document.body.style.fontFamily = 'Roboto, sans-serif';
      tipografiaActual = 'estandar';
  } else {
      document.body.style.fontFamily = "'Lancelot', cursive";
      tipografiaActual = 'lancelot';
}
}


var h = document.querySelectorAll('.h');
var boton = document.querySelector('#boton');
var valorCambiado = false;

boton.addEventListener('click', function cambiar() {
  if (!valorCambiado) {
      document.body.style.backgroundColor = "#05536b";
      document.querySelector('#nav').style.backgroundColor = "#05536b";
      h.forEach(function(elemento) {
          elemento.style.color = "#f1f1f1"; 
      });
      valorCambiado = true;
  } else {
      document.body.style.backgroundColor = ""; 
      document.querySelector('#nav').style.backgroundColor = "";
      h.forEach(function(elemento) {
          elemento.style.color = ""; 
      });
      valorCambiado = false;
  }
});

