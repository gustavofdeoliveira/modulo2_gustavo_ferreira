function calcular() {
    var valor = document.getElementById("valor").value;
    var notasDez = 0;
    var notasCinco = 0;
    var notasUm = 0;
    if (valor > 10) {
        while (valor / 10 && valor >= 10) {
            notasDez++;
            valor = valor - 10;
        }
    }
    if (valor > 5) {
        while (valor / 5 && valor >= 5) {
            notasCinco++;
            valor = valor - 5;
        }
    }
    if (valor > 1) {
        while (valor > 0) {
            notasUm++;
            valor = valor - 1;
        }
    }
    if (notasDez != 0) {
        document.getElementById("notasDez").innerHTML = notasDez + " notas(s) de R$10,00";
    }
    if (notasCinco != 0) {
        document.getElementById("notasCinco").innerHTML = notasCinco + " notas(s) de R$5,00";
    }
    if (notasUm != 0) {
        document.getElementById("notasUm").innerHTML = notasUm + " notas(s) de R$1,00";
    }
}