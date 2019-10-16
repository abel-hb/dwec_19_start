//alert("Hello World JS")
//'use strict';
// let text="Hello";
// init();
// function init(){ 
//     if (true){

//     }
//     console.log(text);
// }
//if /else/elseif
// let dni_regex = /^(\d{8})([A-Z])$/;
// let dni = "12345678K";
// if (dni.match(dni_regex)){
//     console.log("Correct DNI")
// }else{
//     console.log("Incorrect DNI");
// }
//COMPARARANDO OPERADORES
// console.log(8==8);
// console.log(8=='8');
// console.log(8===8);
// console.log(8==='8');

// console.log(5>8);
// console.log(5<8);
// console.log(5>=8);
// console.log(5<=8);

// console.log(8!=8);
// console.log(8!='8');
// console.log(8!==8);
// console.log(8=="8");

//BUCLE WHILE
// var i = 1;
// while (i < 10){
//     console.log("The number is: "+ i);
//     i++;
// }

// //BUCLE SWICH
// switch(new Date().getDay()){
//     case 0:
//     console.log("Sunday");
//     break;
//     case 1:
//     console.log("Monday");
//     break;
//     case 2:
//     console.log("Tuesday");
//     break;
//     case 3:
//     console.log("Wednesday");
//     break;
//     case 4:
//     console.log("Trursday");
//     break;
//     case 5:
//     console.log("Friday");
//     break;
//     case 6:
//     console.log("Saturday");
// }
//COMPROBANDO LA FUNCION FECHA
// let today = new Date();
// let frist_octuber = new Date(2019, 09, 1);
// // console.log(today);
// // console.log(frist_octuber);
// // console.log(today.getDay);

// if(today>frist_octuber){
//     console.log("Today is after to first octuber");
// }else{
//     console.log("Today is before to first octuber");
// }

//EVENTOS SOBRE LOS BOTONES
// function myFirstsFunction(){
//     console.log("Thank you for you click");
// }
// function mySecondFunction(){
//     console.log("Thank you for you Interest");
// }
//SELECT DOM
// var div = document.getElementById("my_div");
// div.classList.add("my_class");
// console.log(div);

//SELECT DOM II
// var div = document.getElementsByTagName("div");
// console.log(div);
// var second_div = document.querySelector("#my_second_div");
// console.log(second_div);

//  function $(selector){
//      return document.querySelectorAll(selector);
// }
// console.log($("#my_div"));

//FUNCIONES TYPES
// var numbers = [1,2,3,4];
// var n_elevator_2 = numbers.map(function(n){return n*n;});
// console.log(n_elevator_2);


$("#btn").addEventListener("click",function(){
    var input = document.createElement("input");
    input.setAttribute("type","email");
    input.setAttribute("placeholder","E-mail");
    input.setAttribute("name","emails[]");
    $('#form').appendChild(input);
});
function $(selector){
    
}