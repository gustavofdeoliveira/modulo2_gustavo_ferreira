const gravidade = 10
var tempo
var velocidade
function calculaLancamento() {
    velocidade = document.getElementById("velocidade").value;
    tempo = calculaTempo(velocidade);
    alturaMax = calculaAlturaMax(velocidade);
    document.getElementById("resultado").innerHTML = ("Altura máxima: " + alturaMax + "<br>" + "Tempo: " + tempo);
}

function calculaTempo(velocidade) {
    tempo = velocidade / gravidade;
    return tempo;
}

function calculaAlturaMax(velocidade) {
    alturaMax = (velocidade * velocidade) / (2 * gravidade);
    return alturaMax;
}
