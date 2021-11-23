const formulario = document.getElementById('caja-login');
const inputs = document.querySelectorAll('#caja-login input');

const expresiones = {
	password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, // 8 caracters, una letra mayuscula y minuscula.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "contrasena":
			if(expresiones.password.test(e.target.value)){
                document.getElementById("p-error").innerHTML = "";
            } else{
                document.getElementById("p-error").innerHTML = "La contraseña debe incluir una letra mayúscula, minuscula y un numero";
            }
		break;
		case "correo":
			if(expresiones.correo.test(e.target.value)){
                document.getElementById("c-error").innerHTML = "";
            } else{
                document.getElementById("c-error").innerHTML = "Correo no válido";
            }
		break;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;
    if(!correo.trim("") || !contrasena.trim("")){
        document.getElementById("t-error").innerHTML = "Ingrese correo y contraseña";
    }else{
        document.form2.submit();
    }
});

document.querySelector('#sesionini').addEventListener('click', enviar);