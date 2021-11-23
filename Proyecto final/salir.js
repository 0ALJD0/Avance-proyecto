var nombre = sessionStorage.getItem("usuarioActivo");
console.log(nombre);
if (nombre != null) {
    document.getElementById("inicio").innerHTML = nombre
    document.getElementById('btnSalir').style.display = 'block';
}


document.querySelector('#btnSalir').addEventListener('click', 
Limpiar);
function Limpiar() {
    document.getElementById("inicio").innerHTML = 'Iniciar sesión';
    document.getElementById('btnSalir').style.display = 'none';
    sessionStorage.removeItem("usuarioActivo");
    sessionStorage.removeItem("rolUsuarioActivo");
    var node = document.getElementById('inicio');
    var text  = node.textContent;
    if (text=='Iniciar sesión') {
        var a = document.getElementById('inicio'); 
        a.href = "../Menu/menu.html"
    }
    window.location.href = '../Menu/menu.html';
}

var node = document.getElementById('inicio');
var text  = node.textContent;
if (text=='Iniciar sesión') {
    var a = document.getElementById('inicio'); 
    a.href = "../Menu/menu.html"
}


