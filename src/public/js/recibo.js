// Essa função salva cada operação realizada no caixa para consulta na página "Histórico"
// Essa operação é salva quando o usuário clica no botão de imprimir
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