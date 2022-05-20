function calculadora(valor1, valor2) {
    debugger
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