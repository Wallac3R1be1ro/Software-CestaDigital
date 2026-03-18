function carrinhoCompras (){
    const FormProd = document.querySelector('.FormProd');
    const recibo = document.querySelector('.recibo');
    const cliente = document.querySelector('#cliente');

    const compras = [];

    function DadosForm (evento){
        evento.preventDefault();

        const nomeProd = FormProd.querySelector('#nomeProd');
        const addQtd = FormProd.querySelector('#addQtd');
        const addCPF = FormProd.querySelector('#addCPF');

        compras.push({
            nomeProd: nomeProd.value,
            addQtd: addQtd.value,
            addCPF: addCPF.value
        });

        recibo.innerHTML += `<p>Produto: ${nomeProd.value}` + ` - Quantidade: ${addQtd.value}</p>`;
        cliente.innerHTML = `<p>CPF do Cliente: ${addCPF.value}</p>`;
        
    
  }
  FormProd.addEventListener('submit', DadosForm);
}
carrinhoCompras();

function imprimirRecibo(){
    window.print();
    /*const conteudo = document.querySelector('.recibo').innerHTML;
    const cliente = document.querySelector('#cliente').innerHTML;

    const tela = window.open('', '_blank');

    const html = `
       <html>
            <head>
                <title>Recibo</title>
                <style>
                    body { font-family: Arial; padding: 20px; }
                    h2 { text-align: center; }
                </style> 
            </head>
            <body>
                <h2>Recibo de Compras</h2>
                ${cliente}
                <hr>
                ${conteudo}
            </body>
        </html>
    `;

    tela.document.open();
    tela.document.body.innerHTML = html;
    tela.document.close();

    tela.print();*/
}
document.querySelector('#btnImprimir').addEventListener('click', imprimirRecibo);
