

$(document).ready(function () {
    $("#gerar").on("click", function () {
        debugger
        var quant = parseInt($("#quantidade").val());
        var input = '';
        for (var i = 1; i <= quant; i++) {
            input += '<div class="row"><div class="col-5"><label for="basic-url" class="form-label">Nota da Prova</label><div class="input-group mb-3"><input type="text" class="form-control" id="prova' + i + '" aria-describedby="basic-addon3"></div></div><div class="col-5"><label for="basic-url" class="form-label">Nota do trabalho</label><div class="input-group mb-3"><input type="text" class="form-control" id="trabalho' + i + '" aria-describedby="basic-addon3"></div></div><div class="col-2 mt-2"><div class="btn-group" role="group" aria-label="Basic mixed styles example"><button type="button" id="btn" class="btn btn-success">Calcular</button></div></div></div>';
        }
        localStorage.setItem('quantidade', quant);
        $("#inputs").html(input);
    });
    $("#calcular").on("click", function () {
        debugger
        var quant = localStorage.getItem('quantidade');;
        var quant = parseInt($("#quantidade").val());

        
        $("#inputs").html(input);
    });
});