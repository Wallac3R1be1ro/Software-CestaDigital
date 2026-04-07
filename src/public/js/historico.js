// Script responsável por exibir cada recibo recente na página "Histórico"
function carregarHistorico() {
  const historico = JSON.parse(localStorage.getItem('historico')) || [];
  const container = document.getElementById('historico');

  container.innerHTML = "";

  historico.reverse().forEach(recibo => {
    const div = document.createElement('div');

    div.innerHTML = `
      <hr>
      <p><strong>CPF:</strong> ${recibo.cpf}</p>
      <p><strong>Data:</strong> ${recibo.data}</p>
      <p><strong>Produtos:</strong></p>
      <ul>
        ${recibo.produtos.map(p => `<li>${p}</li>`).join('')}
      </ul>
      <p><strong>Total:</strong> R$ ${recibo.total}</p>
    `;

    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", carregarHistorico);
function salvarRecibo() {
  const cpf = document.getElementById('addCPF').value.trim();
  const lista = document.querySelectorAll('#listaProdutos li');
  const total = document.getElementById('total').innerText;

  if (!cpf || lista.length === 0) {
    alert("Preencha CPF e adicione produtos!");
    return;
  }

  const produtos = [];

  lista.forEach(item => {
    produtos.push(item.innerText);
  });

  const recibo = {
    cpf,
    produtos,
    total,
    data: new Date().toLocaleString()
  };

  let historico = JSON.parse(localStorage.getItem('historico')) || [];
  historico.push(recibo);

  localStorage.setItem('historico', JSON.stringify(historico));

  console.log("Recibo salvo:", recibo);
}