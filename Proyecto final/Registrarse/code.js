const formulario = document.getElementById('caja-registro');
const inputs = document.querySelectorAll('#caja-registro input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, // 8 caracters, una letra mayuscula y minuscula.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	direccion: /^[a-zA-ZÀ-ÿ\s]{1,40}$/ // Letras y espacios, pueden llevar acentos.
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "apellidos":
			if(expresiones.apellido.test(e.target.value)){
                document.getElementById("a-error").innerHTML = "";
				document.getElementById("s-error").innerHTML = "";
            } else{
                document.getElementById("a-error").innerHTML = "Apellido no válido";
            }
		break;
		case "nombres":
            
			if(expresiones.nombre.test(e.target.value)){
                document.getElementById("n-error").innerHTML = "";
				document.getElementById("s-error").innerHTML = "";
            } else{
                document.getElementById("n-error").innerHTML = "Nombre no válido";
            }
		break;
		case "contrasena":
			if(expresiones.password.test(e.target.value)){
                document.getElementById("p-error").innerHTML = "";
				document.getElementById("s-error").innerHTML = "";
            } else{
                document.getElementById("p-error").innerHTML = "Contraseña debe incluir una letra mayúscula";
            }
		break;
		case "contrasena2":
			validarPassword2();
		break;
		case "correo":
			if(expresiones.correo.test(e.target.value)){
                document.getElementById("c-error").innerHTML = "";
				document.getElementById("s-error").innerHTML = "";
            } else{
                document.getElementById("c-error").innerHTML = "Correo no válido";
            }
		break;
		case "direccion":
			if(expresiones.direccion.test(e.target.value)){
                document.getElementById("d-error").innerHTML = "";
				document.getElementById("s-error").innerHTML = "";
            } else{
                document.getElementById("d-error").innerHTML = "Direccion no válido";
            }
		break;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('contrasena');
	const inputPassword2 = document.getElementById('contrasena2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById("p2-error").innerHTML = "Contraseñas no coinciden";
	} else {
		document.getElementById("p2-error").innerHTML = "";
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    var nombre = document.getElementById('nombres').value;
	var apellido = document.getElementById('apellidos').value;
	var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;
	var contrasena2 = document.getElementById('contrasena2').value;
	var direccion = document.getElementById('direccion').value;
	var terminos = document.getElementById('terminos');
    if(!(terminos.checked) || !nombre.trim("") || !apellido.trim("") || !correo.trim("")
	|| !contrasena.trim("") || !contrasena2.trim("") || !direccion.trim("")){
        document.getElementById("s-error").innerHTML = "Ingrese todos los campos";
    }else{
        document.form1.submit();
    }
});