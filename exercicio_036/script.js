let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
let valorProduto = document.getElementById('valor').value;

    let porcentagem = (valorProduto * 9) / 100;
    let novoValorProduto = valorProduto - porcentagem;

    if(valorProduto > 0) {
        div.innerHTML = `<p>Valor com desconto: R$${novoValorProduto.toFixed(2)}</p>`;
    } else {
        div.innerHTML = `<p style="color: red;">ERRO - Valor inválido digitado.</p>`;
    }
}

btn.addEventListener('click', calcular);
