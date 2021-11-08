document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("caja-horario").addEventListener('submit', validarFormulario); 
  });

  function validarFormulario(evento) {
    evento.preventDefault();
    var titulo = document.getElementById('titulo').value;
    if(titulo.length < 30) {
        document.getElementById("t-error").innerHTML = "Titulo no válido";
        return;
    }
    var representante = document.getElementById('partner').value;
    if (representante.length < 50) {
        document.getElementById("r-error").innerHTML = "Representante no válido";
        return;
    }
    this.submit();
}