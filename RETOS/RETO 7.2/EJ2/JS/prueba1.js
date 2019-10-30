$(document).ready(function(){
       //Function to insert an element from the table
    $("#insert").click(function(){
        //This is used to know how many tr there are
        var filas =$("#tabla tr:first td").length;
        //This is used to know the number of columns
        var celdas =$("#tabla tr").length;
        var nCeldas ="<tr>";
        var contador = 0;
        if (celdas < 7) {
            nCeldas +="<td><img src='http://lorempixel.com/200/100/?'></td>";
        }
        for (var i= 0;i<7;i++){
            //Add the new rows to the table
            nCeldas +="<td><img src='http://lorempixel.com/200/100/?'></td>";
        }
        //
        //
        nCeldas +="</tr>";
        $("#tabla").append(nCeldas);
    });

    //Function to delete an item from the table
    $("#delete") .click(function(){
        if ($('#tabla td').length >= 1){
            $('#tabla td:last').remove();
        }else{
            alert ("Ya estan todas las imagenes borradas");
        }
    });
})