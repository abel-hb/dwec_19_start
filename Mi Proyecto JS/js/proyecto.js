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


window.onload = function () {
    this.visibiidadContenido("trayecto");
    this.visibiidadContenido("transporte");
}

function validar() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let i
    for (i = 0; i < objPersona.length; i++) {
        // Chequeamos el usuario y la contraseña en el objPersona que es una array
        if (username == objPersona[i].username && password == objPersona[i].password) {
            visibiidadContenido("login");
            visibiidadContenido("trayecto");
            alert("Login Correcto");
            break;
        }
    }
    if (i == objPersona.length) {
        alert("Login Incorrecto, Introduce el usuario y contraseña correcta");
    }
}

function visibiidadContenido(id) {
    if (document.getElementById) {
        var objConten = document.getElementById(id);
        objConten.style.display = (objConten.style.display == "none") ? "block" : "none";
    }
}
var opt_1 = new Array ("-", "Brenes", "Cazalla", "Castiblanco", "...");
var opt_2 = new Array ("-", "Lepe", "Ayamonte", "Cartalla", "...");
var opt_3 = new Array ("-", "Chiclana", "Puerto Real", "Rota", "...");
var opt_4 = new Array ("-", "Lavapies", "Toledo", "Avila", "...");

//funcion que ejecutar el cambio dinamico
function mostrar_Opciones(){
    var ciudades;
    //Se toma el valor de la ciudades del select"
    ciudades = document.form.ciudades[document.form.ciudades.selectedIndex].value;
    //se miran las "ciudades" que estan declarada
    if(ciudades!=0){
        //selecionamos las ciudades 
        mOpcion=eval("opt_" + ciudades);
        //se calcula el numero de ciudades
        num_Option=mOpcion.length;
        //marco el numero de opcion en el select
        document.form.opcion.length = num_Option;
        //para cada opcion del array, la pongo en el select
        for(i=0; i<num_Option; i++){
            document.form.opcion.options[i].value=mOpcion[i];
            document.form.opcion.options[i].text=mOpcion[i];
        }
        }else{
            //si no habia ninguna opcion seleccionada, elimino las ciudades del select
            document.form.opcion.length = 1;
            document.form.opcion.options[0].value="-";
            document.form.opcion.options[0].text="-";
        }
        //Borrar las opciones
        document.form.opcion.options[0].selected = true;
    }

/*
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



var Bus = true;
var Uber = true;
var Coche = true;
var Bici = true;
var Helicoptero= true;

$("#uber").addEventListener("click", function(){
    var list=document.getElementById("pU");
    if(Uber){
        list.style.display="block";
        Uber=false;
    }else{
        list.style.display="none";
        Uber=true;
    }
});

$("#coche").addEventListener("click", function(){
    var list=document.getElementById("pC");
    if(Coche){
        list.style.display="block";
        Coche=false;
    }else{
        list.style.display="none";
        Coche=true;
    }
});

$("#bici").addEventListener("click", function(){
        var list=document.getElementById("pBi");
        if(Bici){
            list.style.display="block";
            Bici=false;
        }else{
            list.style.display="none";
            Bici=true;
        }
});

$("#heli").addEventListener("click", function(){
    var list=document.getElementById("pH");
    if(Helicop){
        list.style.display="block";
        Helicop=false;
    }else{
        list.style.display="none";
        Helicop=true;
    }
	});*/