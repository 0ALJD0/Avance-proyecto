function obtenerListaUsuarios(){
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));

    if (listaUsuarios == null) {
        listaUsuarios =
        [
            ['Kevin', 'Ponce', 'geo@gmail.com','Kevinpm29', 1],
            ['Aldair', 'Lino', 'aldo@gmail.com','Aldolino16', 2]
        ]
    }
    return listaUsuarios;
}

function validarCredenciales(pCorreo,pContrasenna){
    var listaUsuarios = obtenerListaUsuarios();
    var bAcceso = false;
    for (var i = 0; i < listaUsuarios.length; i++){
        if (pCorreo == listaUsuarios[i][2] && pContrasenna == listaUsuarios[i][3]) {
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][0] + ' ' + listaUsuarios[i][1]);
            sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][4]);
        }
    }
    return bAcceso;
}