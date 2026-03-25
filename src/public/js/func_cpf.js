function carrinhoCompras (){
    const FormProd = document.querySelector('.cpf');
    //const recibo = document.querySelector('.recibo');
    const cliente = document.querySelector('#cliente');

    const compras = [];

    function DadosForm (evento){
        evento.preventDefault();

        //const nomeProd = FormProd.querySelector('#nomeProd');
        //const addQtd = FormProd.querySelector('#addQtd');
        const addCPF = FormProd.querySelector('#addCPF');

        compras.push({
            //nomeProd: nomeProd.value,
            //addQtd: addQtd.value,
            addCPF: addCPF.value
        });

        //recibo.innerHTML += `<p>Produto: ${nomeProd.value}` + ` - Quantidade: ${addQtd.value}</p>`;
        cliente.innerHTML = `<p>CPF do Cliente: ${addCPF.value}</p>`;
        
    
  }
  FormProd.addEventListener('submit', DadosForm);
}
carrinhoCompras();