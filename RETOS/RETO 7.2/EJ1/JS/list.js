$(document) .ready(function(){
    $("div .prueba") .hover(function(){
        //For when you pass the mouse
        $(this) .css("color","#ffffff");
    } , function( ){
         //Stop when the mouse comes out
        $(this) .css("color","#000000");
        //$(this) .css("position","absolute");
        //$(this) .css("transition","opacity 5s");
       // $(this) .css("opacity", "0");
       // $(this) .css("-webkit-transition","opacity 10s");
    });
});