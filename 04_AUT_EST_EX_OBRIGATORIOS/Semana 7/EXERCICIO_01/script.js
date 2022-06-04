//aumenta a quantidade
function aumentarQuant(quant) {
    quant = parseInt(quant) + 1;
    document.getElementById("quantidade").value = quant;
}
//diminui a quantidade
function diminuirQuant(quant) {
    if (quant > 0) {
        quant = parseInt(quant) - 1;
        document.getElementById("quantidade").value = quant;
    }
}

function calcular(valor, quant){
    var total = parseInt(quant) * parseInt(valor);
    document.getElementById("resultado").innerHTML = "O total é de R$ " + total;
}