function verificar() {
  let numero = parseInt(document.getElementById("numero").value);
  let a = 0;
  let b = 1;
  let c;
  
  while (b < numero) {
    c = a + b;
    a = b;
    b = c;
  }
  if (b === numero || numero === 0) {
    document.getElementById("resultado").textContent = numero + " pertence à sequência de Fibonacci.";
  } else {
    document.getElementById("resultado").textContent = numero + " não pertence à sequência de Fibonacci.";
  }
}