//Creation of users
var objPersona = [
    {
        username: "admin",
        password: "1234"
    },
    {
        username: "Abel1",
        password: "1234"
    },
    {
        username: "prada44",
        password: "1234"
    }
]

// To hide the parts of the page so that only the login is there
window.onload = function () {
    this.visibilidadContenido("trayecto");
    this.visibilidadContenido("transporte");
    this.visibilidadContenido("formulario");
    this.visibilidadContenido("imprimir");
}
//To validate the users to enter the page
function validar() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let i
    for (i = 0; i < objPersona.length; i++) {
        // We check the username and password in the objPersona that is an array
        if (username == objPersona[i].username && password == objPersona[i].password) {
            visibilidadContenido("login");
            visibilidadContenido("trayecto");
            alert("Login Correcto");
            break;
        }
    }
    if (i == objPersona.length) {
        alert("Login Incorrecto, Introduce el usuario y contraseña correcta");
    }
}
//Function to show visible parts of the page
function visibilidadContenido(id) {
    if (document.getElementById) {
        var objConten = document.getElementById(id);
        objConten.style.display = (objConten.style.display == "none") ? "block" : "none";
    }
}
function capturarSelect(objeto) {
    // we get the index of the selected option
    var indice = objeto.selectedIndex;
    if (objeto.value > 0) {
        // through its index, we show the text, not the value!
        var resultado = objeto.options[indice].text;
        document.getElementById("resultado").innerHTML = resultado;
        var resultado1 = objeto.options[indice].text;
        document.getElementById("resultado1").innerHTML = resultado1;
        var resultado2 = objeto.options[indice].text;
        document.getElementById("resultado2").innerHTML = resultado2;
    }
}
function capturarSelect1(objeto) {
    //we get the index of the second option selected
    var indice = objeto.selectedIndex;
    if (objeto.value > 0) {
        // through its index, we show the text, not the value!
        var resultado3 = objeto.options[indice].text;
        document.getElementById("resultado3").innerHTML = resultado3;
        var resultado4 = objeto.options[indice].text;
        document.getElementById("resultado4").innerHTML = resultado4;
        var resultado5 = objeto.options[indice].text;
        document.getElementById("resultado5").innerHTML = resultado5;
    }
}

function printarDiv(id) {
    var divText = document.body.innerHTML;
    document.body.innerHTML = document.getElementById(id).innerHTML;
    window.print();
    document.body.innerHTML = divText;
}

function cerrarSesion() {
    //Hide Div
    visibilidadContenido("transporte");
    visibilidadContenido("trayecto");
    visibilidadContenido("formulario");
    visibilidadContenido("imprimir");
    visibilidadContenido("login");
    //Reset the Input
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
}

function mostrarFormulario(){
    visibilidadContenido("transporte");
    visibilidadContenido("trayecto");
    visibilidadContenido("formulario");
}
function volverDivAnterior(){
    visibilidadContenido("formulario");
    visibilidadContenido("transporte");
    visibilidadContenido("trayecto");
}
function guardar() {
    var txt = $("#texto1").val();
    var valores = new Array();
    var sList = "";
    $('input[type=checkbox]').each(function () {
        if (this.checked) {
            valores.push(
                $(this).parent().parent().find(".opcion").text()
            );
        }
    });

    $("#texto2").text(valores);
};

function imprimir() {
    window.print();
}

//Creation of the array for the select
//var opt_1 = new Array("-", "Brenes", "Cazalla", "Castiblanco", "...");
//var opt_2 = new Array("-", "Lepe", "Ayamonte", "Cartalla", "...");
//var opt_3 = new Array("-", "Chiclana", "Puerto Real", "Rota", "...");
//var opt_4 = new Array("-", "Lavapies", "Toledo", "Avila", "...");

//Function that execute the dynamic change
// function mostrar_Opciones() {
//     var ciudades;
//     //Se toma el valor de la ciudades del select"
//     //The value of the cities is taken from the select"
//     ciudades = document.form.ciudades[document.form.ciudades.selectedIndex].value;
//     //se miran las "ciudades" que estan declarada
//     // look at the "cities" that are declared
//     if (ciudades != 0) {
//         //select cities  
//         mOpcion = eval("opt_" + ciudades);
//         // the number of cities is calculated
//         num_Option = mOpcion.length;
//         //marco el numero de opcion en el select
//         document.form.opcion.length = num_Option;
//         //para cada opcion del array, la pongo en el select
//         for (i = 0; i < num_Option; i++) {
//             document.form.opcion.options[i].value = mOpcion[i];
//             document.form.opcion.options[i].text = mOpcion[i];
//         }
//     } else {
//         //si no habia ninguna opcion seleccionada, elimino las ciudades del select
//         document.form.opcion.length = 1;
//         document.form.opcion.options[0].value = "-";
//         document.form.opcion.options[0].text = "-";
//     }
//     //Borrar las opciones
//     document.form.opcion.options[0].selected = true;
// }
/*
function $(selector){
   return document.querySelectorAll(selector);
}
var Bus = true;
var Uber = true;
var Coche = true;
// var Bici = true;
// var Helicoptero= true;

$("#uber").addEventListener("click", function () {
    var list = document.getElementById("pU");
    if (Uber) {
        list.style.display = "block";
        Uber = false;
    } else {
        list.style.display = "none";
        Uber = true;
    }
});

    function mostrarArray(){
    console.log("Pueblos");
    var text, i,sevilla,tlengt;
    sevilla =["Brenes","Los Palacios","Cazalla"];
    tlengt = sevilla.length;

    text = "<select>";
    for (i = 0;i < tlengt;i++){
        text += "<option>" + sevilla[i] + "</option>";
    }
    text += "</select>";
    document.getElementById("dt1").innerHTML = text;
}
*/