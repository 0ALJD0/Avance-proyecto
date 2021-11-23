document.querySelector('#sesionini').addEventListener('click', 
iniciarSesion);

function iniciarSesion(){
    var sCorreo = '';
    var sContrasenna = '';
    var bAcceso = false;
    
    sCorreo = document.querySelector('#correo').value;
    sContrasenna = document.querySelector('#contrasena').value;

    bAcceso = validarCredenciales(sCorreo, sContrasenna);
    if (bAcceso == true) {
        ingresar();
    }

    function ingresar(){
        var rol = sessionStorage.getItem('rolUsuarioActivo');
        switch(rol){
            case '1':
                window.location.href = '../EscogeUsuario/escoge.html';
            break;
            case '2':
                window.location.href = '../Menu/menu.html';
            break;
        }
    }
}