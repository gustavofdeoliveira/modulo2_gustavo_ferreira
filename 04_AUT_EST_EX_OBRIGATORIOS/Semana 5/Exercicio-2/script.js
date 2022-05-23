
function calcular(entrada) {
    var notas = [1, 2, 5, 10, 20, 50, 100];
    for (var i = 0; i < notas.length; i++) {
        if (entrada >= notas[i]) {
            var notaM = notas[i];
        }
    }
    var numN = entrada / notaM;
    
    document.getElementById("resultado").innerHTML += Math.floor(numN) + " notas de : " + notaM + "<br>";
    resto = parseFloat(entrada % notaM);
    if ((resto != 0) && (resto > 1)) {
        calcular(resto);
    } else if (resto != 0) {
        document.getElementById("resultado").innerHTML += "Sobrou :" + resto;
    }
}

