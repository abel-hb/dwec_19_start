$(document) .ready(function(){
    $("#prueba") .hover(function(){
        //Para cuando pasa el raton
        $("#prueba") .css("background-color","#fcfcfc");
    } , function( ){
         //Para cuando sale el raton
        $("#prueba") .css("background-color","#000000");
    });
});