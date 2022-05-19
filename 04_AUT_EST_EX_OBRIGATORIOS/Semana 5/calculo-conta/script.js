function calculaConta(nome, valor) {
    valor.value = valor.value * 1.15;
    document.getElementById("resultadoNome").innerHTML = "Nome: " + nome.value.toUpperCase() + " BALDO";
    document.getElementById("resultadoConta").innerHTML = "Valor total: " + valor.value;
}