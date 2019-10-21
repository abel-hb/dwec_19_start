function comprobar(campo,expr){
    if(!expr.test(campo.value))
    alert('El campo ' + campo.getAttribute('id') + ' no se ajusta a ' + expr);
}


function noVacio(campo){
    if(campo.value.length==0)
    alert('El campo ' + campo.getAttribute('id') + ' está vacío');
}

function longitud(campo,n,m){
    if(!(campo.value.length>=n && campo.value.length<=m))
    alert('El campo ' + campo.getAttribute('id') + ' de be contener de ' + n
    + ' a ' + m + ' caracteres');
}

function valida() {
    var salida='';
    var expr=/^[a-zA-Záéíóú]+(\s[a-zA-Záéíóú]+)+$/;
    if (!expr.test(document.getElementById('nombre').value)){
    salida += 'El nombre ha de estar compuesto por al menos dos palabras\n';
    }
    expr=/^\d{9}$/;
    if (!expr.test(document.getElementById('tlf').value)){
    salida += 'El telefono ha de estar compuesto por 9 cifras\n';
    }
    expr=/^[a-zA-Záéíóú]+(\s[a-zA-Záéíóú]+)+$/;
    if (!expr.test(document.getElementById('user').value)){
    salida += 'El nombre ha de estar compuesto por al menos cuatro palabras\n';
    }
    expr=/^ [0-9a-zA-Z] (\.?[0-9a-zA-Z_\-])*@[0-9a- zA-Z](\.?[0-9a-zA-Z_\-])*\.[0-9a-zA-Z]{2,3}$/;
    if (!expr.test(document.getElementById('email').value)){
        salida += 'El correo ha de tener una @ seguido de un servidor de correo. \n'; 
    }
    expr=/^(0?[1-9]|[12]\d|3[01])(\/|\-)(0?[1-9]|1[012])(\/|\-)\d{4}$/;
    if (!expr.test(document.getElementById('fecha').value)){
        salida += 'La fecha es incorrecta, introduce una fecha correcta. \n'; 
    }

    if (salida !== '') {
    alert(salida);
    return false;
    } else {
    return true;
    }
}
