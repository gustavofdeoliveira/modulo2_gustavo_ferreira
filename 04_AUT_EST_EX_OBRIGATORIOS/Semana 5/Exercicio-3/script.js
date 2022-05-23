function formatar(numeros, foco) {
  debugger
  var listNumber = numeros.split(',').map(Number);
  Number.foco

  for (var i = 0; i < listNumber.length; i++) {
      for (var j = 0; j < (listNumber.length - i - 1); j++) {
          if (listNumber[j] > listNumber[j + 1]) {
              var temp = listNumber[j];
              listNumber[j] = listNumber[j + 1];
              listNumber[j + 1] = temp;
          };
      };
  };
  var size = listNumber.length;
  esquerda = 1;
  direita = size - 1;
  for (i = 0; i <= size; i++) {
      var meio = Math.floor((esquerda + direita) / 2);
      if (meio == foco) {
          document.getElementById("resultado").innerHTML = i + 1 + "° posição";
      } else if (meio < foco) {
          esquerda = meio + 1;
      } else if (meio > foco) {
          direita = meio - 1;
      } else {
      };
  };








  document.getElementById("show").innerHTML = "A lista ordenada na forma crescente é: " + listNumber + " E o número escolhido está na posição: " + meio;




}