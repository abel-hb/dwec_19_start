var oHomer = true;
var oMarge = true;
var oBart = true;
var oLisa = true;
var oMaggie= true;

function $(selector){
    return document.querySelector(selector);
}

$("#h").addEventListener("click", function(){
var list=document.getElementById("parrafoH");
if(oHomer){
    list.style.display="block";
    oHomer=false;
}else{
    list.style.display="none";
    oHomer=true;
}
});

$("#m").addEventListener("click", function(){
    var list=document.getElementById("parrafoM");
    if(oMarge){
        list.style.display="block";
        oMarge=false;
    }else{
        list.style.display="none";
        oMarge=true;
    }
});

$("#b").addEventListener("click", function(){
    var list=document.getElementById("parrafoB");
    if(oBart){
        list.style.display="block";
        oBart=false;
    }else{
        list.style.display="none";
        oBart=true;
    }
});

$("#l").addEventListener("click", function(){
        var list=document.getElementById("parrafoL");
        if(oLisa){
            list.style.display="block";
            oLisa=false;
        }else{
            list.style.display="none";
            oLisa=true;
        }
});

$("#ma").addEventListener("click", function(){
    var list=document.getElementById("parrafoMA");
    if(oMaggie){
        list.style.display="block";
        oMaggie=false;
    }else{
        list.style.display="none";
        oMaggie=true;
    }
    });