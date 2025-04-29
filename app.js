const formulario = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre'); // nombreInput, no nombre
const mensaje = document.getElementById('mensaje');

formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  const nombre = nombreInput.value;
  mensaje.innerText = `Registro exitoso, ${nombre}!`;
  
});