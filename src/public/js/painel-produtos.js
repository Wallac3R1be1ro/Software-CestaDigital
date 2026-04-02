async function carregarProdutos() {
  try {
    const res = await fetch('http://localhost:3000/produtos');
    const produtos = await res.json();

    const lista = document.getElementById('lista');
    lista.innerHTML = '';

    produtos.forEach(p => {
      const li = document.createElement('li');

        const texto = document.createElement('span');
        texto.textContent = `${p.nome_produto} - R$ ${Number(p.valor_produto).toFixed(2)} (${p.marca_produto})`;

        const btn = document.createElement('button');
        btn.textContent = 'Excluir';
        btn.onclick = () => deletarProduto(p.cod_produto);

        li.appendChild(texto);
        li.appendChild(btn);
        lista.appendChild(li);
    });

  } catch (erro) {
    console.error('Erro ao carregar produtos:', erro);
  }
}
async function criarProduto() {
  const nome = document.getElementById('nome').value;
  const valor = document.getElementById('preco').value;
  const marca = document.getElementById('marca').value;

  if (!nome || !valor || !marca) {
    alert('Preencha todos os campos!');
    return;
  }

  try {
    const res = await fetch('http://localhost:3000/produtos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome_produto: nome,
        valor_produto: valor,
        marca_produto: marca
      })
    });

    if (!res.ok) throw new Error('Erro ao criar produto');

    // limpa inputs
    document.getElementById('nome').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('marca').value = '';

    carregarProdutos();
} catch (erro) {
    console.error(erro);
    alert('Erro ao criar produto!');
  }
}
async function deletarProduto(id) {
  const confirmar = confirm('Deseja realmente excluir este produto?');

  if (!confirmar) return;

  try {
    await fetch(`http://localhost:3000/produtos/${id}`, {
      method: 'DELETE'
    });

    carregarProdutos();

  } catch (erro) {
    console.error('Erro ao deletar:', erro);
  }
}
carregarProdutos();