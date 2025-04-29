const boton = document.getElementById('mostrarMensajeBtn');
const mensaje = document.getElementById('mensaje');

boton.addEventListener('click', function() {
  mensaje.innerText = '¡Este es el mensaje en grande!';
  mensaje.style.fontSize = '2em'; // Hace el texto grande
  mensaje.style.fontWeight = 'bold';
});