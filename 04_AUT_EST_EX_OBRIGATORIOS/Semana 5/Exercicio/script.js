function calculadora() {
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);
    var operacao = document.getElementById("operacao").value;
    if (operacao == "soma") {
        resultdo = valor1 + valor2;
    }
    if (operacao == "subtracao") {
        resultdo = valor1 - valor2;
    }
    if (operacao == "multiplicacao") {
        resultdo = valor1 * valor2;
    }
    if (operacao == "divisao") {
        resultdo = valor1 / valor2;
    }
    if (operacao == "resto") {
        resultdo = valor1 % valor2;
    }
    document.getElementById("resultado").innerHTML = resultdo;
}