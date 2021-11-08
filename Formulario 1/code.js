document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("caja-registro").addEventListener('submit', validarFormulario); 
  });

  function validarFormulario(evento) {
    evento.preventDefault();
    var nombres = document.getElementById('nombres').value;
    if(nombres.length > 20 || !nombres.trim("")) {
        document.getElementById("n-error").innerHTML = "Nombre no válido";
        return;
    }

    var apellidos = document.getElementById('apellidos').value;
    if (apellidos.length > 20 || !apellidos.trim("")) {
        document.getElementById("a-error").innerHTML = "Apellido no válido";
        return;
    }
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
    var contrasena2 = document.getElementById('contrasena2').value;
    if(contrasena2 != contrasena) {
        document.getElementById("p2-error").innerHTML = "Contraseñas no coinciden";
        return;
    }
    var direccion = document.getElementById('direccion').value;
    if (direccion.length > 20 || !direccion.trim("")) {
        document.getElementById("d-error").innerHTML = "Direccion no válido";
        return;
    }
    var terminos = document.getElementById('terminos');
    if (!terminos.checked){
        document.getElementById("t-error").innerHTML = "Terminos y condiciones no seleccionados";
    }
    this.submit();
  }