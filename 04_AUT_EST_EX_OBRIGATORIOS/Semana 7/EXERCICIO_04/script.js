$(document).ready(function () {
    $("#btn").on("click", function () {
        var total = 0;
        var quant = parseInt($("#quantidade").val());
        var periodo = $("#periodo").val();
        if (periodo == "Diurno" && quant < 50) {
            total = (quant * 200);
        } else if (periodo == "Diurno" && quant > 50) {
            total = ((quant * 200) * 0.6);
        }
        if (periodo == "Noturno" && quant < 50) {
            total = ((quant * 100));
        } else if (periodo == "Noturno" && quant > 50) {
            total = ((quant * 100) * 0.8);
        }
        $("#resultado").html(total);
    });
});