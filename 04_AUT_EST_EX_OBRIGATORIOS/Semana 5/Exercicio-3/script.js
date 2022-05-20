function formatar(valor) {
    var i;
    var resultado = "";
    var arrayValores = valor.split(", ");
    arrayValores.sort(function(a, b) {
      return a - b;
    });
    for(i=0; i!= arrayValores.length; i++){
        resultado += " "+ arrayValores[i];
    }
    document.getElementById("resultado").innerHTML = resultado;
}