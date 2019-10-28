function $(selector){
    return document.querySelector("table");
}
function insertar(){
    $("table").document.createElement("tbody")
    for (var i = 0; i < 7; i++){
        $("tbody").document.createElement("tr");
        for (var j = 0; j < 7; j++){
            var celda = document.createElement("td");
            var textoCelda = document.createElement("Celda en la fila");
            celda.appendChild(textoCelda);
            ultFila.appendChild(celda);
        }
        tblBody.appendChild(ultFila);
    }
    tabla.appendChild(tblBody);
}

function eliminar(){
    console.log("insertar");
}