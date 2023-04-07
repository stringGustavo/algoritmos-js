let valorProduto = document.getElementById('valor');
let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let porcentagem = (valorProduto.value * 9) / 100;
    let novoValorProduto = valorProduto.value - porcentagem;

    if(valorProduto.value > 0) {
        div.innerHTML = `<p style="color: blue;">Valor com desconto: R$${novoValorProduto.toFixed(2)}</p>`
    } else {
        div.innerHTML = `<p style="color: red;">(ERRO 001) Valores Inválidos. Digite um valor positivo!</p>`
    }
}

btn.addEventListener('click', calcular);
