document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("caja-login").addEventListener('submit', validarFormulario); 
  });

  function validarFormulario(evento) {
    evento.preventDefault();
    var correo = document.getElementById('correo').value;
    if(correo.length < 10) {
        document.getElementById("c-error").innerHTML = "Correo no válido";
        return;
    }
    var contrasena = document.getElementById('contrasena').value;
    if (contrasena.length < 8) {
        document.getElementById("p-error").innerHTML = "Contraseña no válido";
        return;
    }
    this.submit();
}