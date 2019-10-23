
//This function is to check if there are elements.
function revisar(elemento){
    if(elemento.value==''){
        elemento.className='error';
    }else{
        elemento.className='input';
    }
}
//This function is to check if the email is correct and complies with the specifications.
function revisarEmail(elemento){
    if(elemento.value!==''){
        var data = elemento.value;
        var exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!exp.test(data)){
            elemento.className='error';
        }else{
            elemento.className='input';
        }	
    }
}
//This function is for checking if you have entered numbers.
function revisaNumero(elemento){
    if(elemento.value!==''){
        var data = elemento.value;
        if(isNaN(data)){
            elemento.className='error';
        }else{
            elemento.className='input';
        }
    }
}
//This function is to check the correct length of the input.
function revisaLongitud(elemento, min){
    if(elemento.value!==''){ 
        var data = elemento.value;
        if(data.length<min){
            elemento.className='error';
        }else{
            elemento.className='input';
        }
    }
}
//This part what you do is check each field of the form and if it is not correct it shows an error.
function validar() {

    var datosCorrectos = true;
    var error = "";
    if (document.getElementById("nombre").value == "") {
        datosCorrectos = false;
        error = "\n El Nombre Esta Vacio, Introduce solo letras";
    }
    var expr=/^[a-zA-Záéíóú]+(\s[a-zA-Záéíóú]+)+$/;
    if (!expr.test(document.getElementById("apellido").value)) {
        datosCorrectos = false;
        error = "\n El apellido es incorrecto, Solo letras";
    }
    var expr=/\D[A-Za-zÁÉÍÓÚáéíóú]{3}/;
    if (!expr.test(document.getElementById("user").value)) {
        datosCorrectos = false;
        error = "\n EL usuario es incorrecto, Solo letras";
    }
    var expr=/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    if (document.getElementById("pass").value == "") {
        datosCorrectos = false;
        error = "\n La contraseña no es valida.";
    }

    if (document.getElementById("telefono").value == "") {
        datosCorrectos = false;
        error = "\n Debes Poner Un Telefono";
    }

    if (isNaN(document.getElementById("telefono").value)) {
        datosCorrectos = false;
        error = "\n El Telefono Solo Debe Tener Numeros";
    }

    var expr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!expr.test(document.getElementById("email").value)) {
        datosCorrectos = false;
        error = "\n Email Invalido";
    }

    var expr=/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;
    if (!expr.test(document.getElementById("fecha").value)) {
        datosCorrectos = false;
        error = "\n La fecha no es valida (12/05/1996)";
    }

    //This is to see that you have errors in the form.
    if (!datosCorrectos) {
        alert('Hay Errores En El formulario' + error);
    }

    return datosCorrectos;
}