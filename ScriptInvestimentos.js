function CalculaInvestimentos(){
  let valorAplicado = parseFloat(document.querySelector('#ValorInicial').value);
  let tempoInvestido = parseInt(document.querySelector('#tempo').value);
  let rendimento = parseFloat(document.querySelector('#rendimento').value );
  let aporte = parseInt(document.querySelector('#aporte').value);
  let tabela = document.querySelector('#tabela tbody');

  tabela.innerHTML = '';  
  rendimento = rendimento/100;
  let valorFinal = valorAplicado;

  for(let cont = 1; cont<=tempoInvestido; cont++){
      
    valorAplicado = valorAplicado + aporte;  

    valorFinal = valorFinal + valorFinal*rendimento + aporte;

    let template = `
      <td>${cont}º mês  </td>
      <td>${valorAplicado.toFixed(2)}</td>
      <td>${valorFinal.toFixed(2)}</td>
    `;
    let tr = document.createElement('tr');
    tr.innerHTML = template;
    tabela.append(tr);

    console.log(valorFinal.toFixed(2));
    
  }
  document.querySelector('#ValorInicial').value = '';
  document.querySelector('#tempo').value = '';
  document.querySelector('#rendimento').value  = '';
  document.querySelector('#aporte').value = '';
}

//CalculaInvestimentos();

/*
document.querySelector("#ValorInicial").addEventListener('change', CalculaInvestimentos);

document.querySelector("#tempo").addEventListener('change', CalculaInvestimentos);

document.querySelector("#rendimento").addEventListener('change', CalculaInvestimentos);

document.querySelector("#aporte").addEventListener('change', CalculaInvestimentos);
*/