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
        var resultado = 0;
        for (var i = 0; i != number.length; i++) {
            numero = parseInt(number[i]);
            resultado += numero;
        }
        $("#resultado").html("A soma de cada número é " + resultado);
    });
});