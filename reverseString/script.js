function inverter() {
    var input = document.getElementById("stringInput").value;
    var resultado = "";
    for (var i = input.length - 1; i >= 0; i--) {
      resultado += input[i];
    }
    document.getElementById("resultado").innerHTML = resultado;
  }