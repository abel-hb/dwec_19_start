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
function validar() {
	let username = document.getElementById('username').value
	let password = document.getElementById('password').value

	for(let i = 0; i < objPersona.length; i++) {
		// Chequeamos el usuario y la contraseña en el objPersona que es una array
		if(username == objPersona[i].username && password == objPersona[i].password) {
			window.location="index.html";
      alert("Login Correcto")
      return
  		}
  	}
  	alert("Login Incorrecto, Introduce el usuario y contraseña correcta")

}

var Bus = true;
var Uber = true;
var Coche = true;
/*var Lisa = true;
var Maggie= true;*/

function $(selector){
    return document.querySelector(selector);
}

$("#bus").addEventListener("click", function(){
var list=document.getElementById("pB");
if(Bus){
    list.style.display="block";
    Bus=false;
}else{
    list.style.display="none";
    Bus=true;
}
});

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
/*
$("#l").addEventListener("click", function(){
        var list=document.getElementById("parrafoL");
        if(Lisa){
            list.style.display="block";
            Lisa=false;
        }else{
            list.style.display="none";
            Lisa=true;
        }
});

$("#ma").addEventListener("click", function(){
    var list=document.getElementById("parrafoMA");
    if(Maggie){
        list.style.display="block";
        Maggie=false;
    }else{
        list.style.display="none";
        Maggie=true;
    }
	});*/