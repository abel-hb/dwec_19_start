var num =0;
function insertar(){
	if (num ==7){
		$('#resultado tr:even').after(`<td><img src="http://lorempixel.com/200/100/?"></td>`);
		num++;
	}else{
		$('#resultado tr:first').after(`<td><img src="http://lorempixel.com/200/100/?"></td>`);
	}
	//num++;
}

function eliminar(){
  if($('#resultado td').length >=1){
    $('#resultado td:last').remove();
  }else{
	  alert("Ya estan todas las imagenes borradas");
  }
}

/*function $(selector){
    return document.querySelector(selector);
}*/
/*var foto = document.getElementById("insertar");
foto.addEventListener("click", insertar, false);
var remo = document.getElementById("eliminar");
remo.addEventListener("click", eliminar, false);
var table = document.getElementsByTagName("tabla");

function insertar(){
    var tiempo = new Date().getTime();
    for (var i = 0; i < 7; i++){
        var tr = document.createElement("tr");
        $("tabla")=appendChild(tr);
        var td = document.createElement("td");
        td.innerHTML = "<img src='http://lorempixel.com/200/100/?'>";
        document.getElementById("tabla").lastChild.appendChild(td);
        for (var j = 0; j < 7; j++){
            var td = document.createElement("td");
            td.innerHTML = "<img src='http://lorempixel.com/200/100/?'>";
            document.getElementById("tabla").lastChild.appendChild(td);
        }
    }
}

function eliminar(){
    console.log("insertar");
    if($('#resultado tr').length > 1){
        $('#resultado tr:last').remove();
      }
}

function $(selector){
    return document.querySelector(selector);
}*/