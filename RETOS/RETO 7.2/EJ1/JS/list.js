$(document) .ready(function(){
    $("div .prueba") .hover(function(){
        //For when you pass the mouse
        $(this) .css("color","#ffffff");
    } , function( ){
         //Stop when the mouse comes out
        $(this) .css("color","#000000");
    });
});