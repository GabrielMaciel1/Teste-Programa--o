
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };
  

  const faturamentoTotal = Object.values(faturamentoPorEstado).reduce(
    (total, faturamento) => total + faturamento
  );
  
 
  const representacaoPorEstado = {};
  for (const estado in faturamentoPorEstado) {
    representacaoPorEstado[estado] =
      (faturamentoPorEstado[estado] / faturamentoTotal) * 100;
  }
  

  const totalFaturamentoElement = document.getElementById("total-faturamento");
  totalFaturamentoElement.textContent = `Faturamento total: R$ ${faturamentoTotal.toFixed(
    2
  )}`;
  
  
  const tabelaEstadosBodyElement = document.getElementById(
    "tabela-estados-body"
  );
  const graficoElement = document.querySelector(".grafico");
  
  for (const estado in representacaoPorEstado) {
    const percentual = representacaoPorEstado[estado];
    const faturamento = faturamentoPorEstado[estado];
  
   
    const row = tabelaEstadosBodyElement.insertRow();
    row.innerHTML = `
      <td>${estado}</td>
      <td>${percentual.toFixed(2)}%</td>
      <td>R$ ${faturamento.toFixed(2)}</td>
    `;
  
   
    const barraElement = document.createElement("div");
    barraElement.classList.add("barra");
    barraElement.style.height = `${percentual}%`;
  
    const estadoElement = document.createElement("div");
    estadoElement.classList.add("estado");
    estadoElement.innerHTML = `
      <div class="nome">${estado}</div>
    `;
    estadoElement.appendChild(barraElement);
    
  }