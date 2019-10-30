var Homer = true;
var Marge = true;
var Bart = true;
var Lisa = true;
var Maggie= true;

function $(selector){
    return document.querySelector(selector);
}

$("#h").addEventListener("click", function(){
var list=document.getElementById("parrafoH");
if(Homer){
    list.style.display="block";
    Homer=false;
}else{
    list.style.display="none";
    Homer=true;
}
});

$("#m").addEventListener("click", function(){
    var list=document.getElementById("parrafoM");
    if(Marge){
        list.style.display="block";
        Marge=false;
    }else{
        list.style.display="none";
        Marge=true;
    }
});

$("#b").addEventListener("click", function(){
    var list=document.getElementById("parrafoB");
    if(Bart){
        list.style.display="block";
        Bart=false;
    }else{
        list.style.display="none";
        Bart=true;
    }
});

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
    });