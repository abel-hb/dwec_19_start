var oHomer = true;
var oMarge = true;
var oBart = true;
var oLisa = true;
var oMaggie= true;

function $(selector){
    return document.querySelector(selector);
}

$("#h").addEventListener("click", function(){
var homer=document.getElementById("parrafoH");
if(oHomer){
    homer.style.display="block";
    oHomer=false;
}else{
    homer.style.display="none";
    oHomer=true;
}
});

$("#m").addEventListener("click", function(){
    var homer=document.getElementById("parrafoM");
    if(oHomer){
        homer.style.display="block";
        oHomer=false;
    }else{
        homer.style.display="none";
        oHomer=true;
    }
});

$("#b").addEventListener("click", function(){
    var homer=document.getElementById("parrafoB");
    if(oHomer){
        homer.style.display="block";
        oHomer=false;
    }else{
        homer.style.display="none";
        oHomer=true;
    }
});

$("#l").addEventListener("click", function(){
        var homer=document.getElementById("parrafoL");
        if(oHomer){
            homer.style.display="block";
            oHomer=false;
        }else{
            homer.style.display="none";
            oHomer=true;
        }
});

$("#ma").addEventListener("click", function(){
    var homer=document.getElementById("parrafoMA");
    if(oHomer){
        homer.style.display="block";
        oHomer=false;
    }else{
        homer.style.display="none";
        oHomer=true;
    }
    });