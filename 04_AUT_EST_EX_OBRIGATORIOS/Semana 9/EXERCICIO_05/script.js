$(document).ready(function () {
    $("#number").keydown(function (event) {
        var charCode = event.charCode ? event.charCode : event.keyCode;
        if (charCode != 8 && charCode != 9) {
            if (charCode <= 45 || charCode > 57 && charCode != 189) {
                return false;
            }
        }
    });

    function primeNumber(num) {
        for (var divisor = 2; divisor < num; divisor++) 
        if (num % divisor == 0) return false;
        return true;
    }
    
    $("#btn").on("click", function () {
        var number1 = Number($("#number1").val());
        var number2 = Number($("#number2").val());
        var arrayPrimos = [];
        for (var i = number1; i != number2; i++) {
            if (primeNumber(i)) {
                arrayPrimos.push(i);
            }
        }
        var arrayPrimos = arrayPrimos.join(',');
        $("#resultado").html(arrayPrimos);
    });
});