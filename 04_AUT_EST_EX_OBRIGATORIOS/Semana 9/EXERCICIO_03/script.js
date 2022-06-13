$(document).ready(function () {
    $("#btn").on("click", function () {
        var names = [];
        var resultado = "";
        names.push($("#name1").val());
        names.push($("#name2").val());
        names.push($("#name3").val());
        names.sort(function (a, b) {
            let x = a.toUpperCase(),
                y = b.toUpperCase();
            return x == y ? 0 : x > y ? 1 : -1;
        });
        var names = names.join(',');
        
        $("#resultado").html(resultado);
    });
});