comprobar = (campo, expr, iMinimo, iMaximo) => {
    let sSalida = "";
    if (expr != "undefined" && !comprobarExpresion(campo, expr)){
        sSalida += `El campo ${campo.getAttribute('id')}debe tener una longitud de ${iMinimo} a ${iMaximo} caracteres`;
    }

    if (sSalida === ""){
        $(`#error${campo.getAttribute('id')}`).html('');
    }else{
        $(`#error${campo.getAttribute('id')}`).html(sSalida);
    }
}

comprobarExpresion = (campo, expr) => {
    if(expr.test(campo.value)){
        return true;
    }else{
        return false;
    }
}

comprobarLongitud = (campo, iMinimo, iMaximo) => {
    if (campo.value.length < iMinimo || campo.value.length > iMaximo) {
        return false;
    }else{
        return true;
    }
}

validar = () => {
    let salida = '';
    let aInputs = document.getElementsByTagName('input');
    for (var i = 0, length = aInputs.length; i < length; i++){
        if (aInputs[i].type === "text"){
            let sFuncion = aInputs[i].attributes.onkeyup.value;
            let sFuncionAcortada = sFuncion.substr(15,sFuncion.length-16).split(",";
            comprobar(aInputs[i],new RegExp(sFuncionAcortada[0].substr(1,sFuncionAcortada[0].length-2),""),sFuncionAcortada[1],sFuncionAcortada[2]);
        }
    }
    return false;
}