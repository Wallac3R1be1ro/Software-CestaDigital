let total = 0;
let lista = [];

async function buscarProduto() {
  const codigo = document.getElementById('codigo').value;

  const response = await fetch(`http://localhost:3000/produto/${codigo}`);
  const data = await response.json();

  if (!data.nome_produto) {
    alert('Produto não encontrado');
    return;
  }

  // adiciona na lista
  lista.push(data);

  // soma o valor (convertendo de centavos para reais)
  total += parseFloat(data.valor_produto);

  atualizarTela();

  // limpa input
  document.getElementById('codigo').value = '';
}

function atualizarTela() {
  const listaHTML = document.getElementById('listaProdutos');
  listaHTML.innerHTML = '';

  lista.forEach(produto => {
    const li = document.createElement('li');
    li.innerText = `${produto.nome_produto} - R$ ${(produto.valor_produto)}`;
    listaHTML.appendChild(li);
  });

  document.getElementById('total').innerText = (total).toFixed(2);
}