$(document).ready(function () {
    //fução que aceita apenas numeros
    $("#telefone").keydown(function (event) {
        var charCode = event.charCode ? event.charCode : event.keyCode;
        if (charCode != 8 && charCode != 9) {
            if (charCode <= 45 || charCode > 57 && charCode != 189) {
                return false;
            }
        }
    });
    $("#btn").on("click", function () {
        debugger
        var telefone = $("#telefone").val();
        var parte1 = telefone.slice(4, 9);
        var parte2 = telefone.slice(9, 10);
        var parte3 = telefone.slice(10, 16);
        if ((telefone[0] == "(") && (telefone[3] == ")") && (parte2 == "-") && (parte1.length== 5) && (parte3.length == 4)) {
            alert("Formato de telefone correto!")
        } else {
            alert("Formato de telefone incorreto!")
        }
    });
});