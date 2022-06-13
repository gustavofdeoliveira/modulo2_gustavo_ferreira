$(document).ready(function () {
    $("#number").keydown(function (event) {
        var charCode = event.charCode ? event.charCode : event.keyCode;
        if (charCode != 8 && charCode != 9) {
            if (charCode <= 45 || charCode > 57 && charCode != 189) {
                return false;
            }
        }
    });
    $("#btn").on("click", function () {
        var number = $("#number").val();
        centena = Number(number[0]);
        if (number >= 100 || number != "") {
            if (centena % 2 == 0) {
                resultado = "A centena é par";
            } else {
                resultado = "A centena é ímpar";
            }
           
        }else{
            resultado = "Digite um número valdio! Ex: 100";

        }
        $("#resultado").html(resultado);
    });
});