function revisar(elemento){
    if(elemento.value==''){
        elemento.className='error';
    }else{
        elemento.className='input';
    }
}
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
    var expr=/^[a-zA-Záéíóú]+(\s[a-zA-Záéíóú]+)+$/;
    if (!expr.test(document.getElementById("user").value)) {
        datosCorrectos = false;
        error = "\n EL usuario es incorrecto, Solo letras";
    }
    var expr=/^[a-zA-Záéíóú]+(\s[a-zA-Záéíóú]+)+$/;
    if (!expr.test(document.getElementById("pass").value)) {
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

    var expr=/^(0?[1-9]|[12]\d|3[01])(\/|\-)(0?[1-9]|1[012])(\/|\-)\d{4}$/;
    if (!expr.test(document.getElementById("fecha").value)) {
        datosCorrectos = false;
        error = "\n La fecha no es valida (12/05/1996)";
    }


    if (!datosCorrectos) {
        alert('Hay Errores En El formulario' + error);
    }

    return datosCorrectos;

}