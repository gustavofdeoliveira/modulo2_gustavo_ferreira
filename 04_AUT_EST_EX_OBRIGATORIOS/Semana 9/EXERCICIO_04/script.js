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
        var number = Number($("#number").val());
       var numero = 1;
        var penultimo = 1;
        var ultimo = 1;
        var arrayFibonacci = [];
        arrayFibonacci.push(ultimo);
        for (var i = 0; i != (number-1); i++) {
            debugger
            arrayFibonacci.push(numero);
            numero = ultimo + penultimo;
            penultimo = ultimo;
            ultimo = numero;
        }
        var arrayFibonacci = arrayFibonacci.join(',');
        $("#resultado").html(arrayFibonacci);
    });
});