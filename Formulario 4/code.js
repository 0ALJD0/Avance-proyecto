document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("caja-contacto").addEventListener('submit', validarFormulario); 
  });

  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length < 20) {
        document.getElementById("n-error").innerHTML = "Nombre no válido";
        return;
    }
    var telefono = document.getElementById('telefono').value;
    if (telefono.length > 0 && telefono.length < 10 ) {
        document.getElementById("t-error").innerHTML = "Telefono no válido";
        return;
    }
    var correo = document.getElementById('correo').value;
    if (correo.length < 10) {
        document.getElementById("c-error").innerHTML = "Correo no válido";
        return;
    }
    this.submit();
}