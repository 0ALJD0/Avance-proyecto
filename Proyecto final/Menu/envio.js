document.querySelector('#comienzo').addEventListener('click',
    envio);

function envio() {
    var rol = sessionStorage.getItem('rolUsuarioActivo');
    switch (rol) {
        case '1':
            window.location.href = '../EscogeUsuario/escoge.html';
        break;
        case '2':
            window.location.href = '../horarios/inicio.html';
            break;
        default:
            window.location.href = '../Despues/despues.html';
    }
}
