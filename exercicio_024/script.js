let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let quilowatts = document.getElementById('qwatt').value;
    let salario = document.getElementById('salario').value;

    let umQuilowatt = salario / 7 / 100;
    let valorPago = quilowatts * umQuilowatt;
    let desconto = valorPago * 0.10;
    let valorDesconto = valorPago - desconto;

    if(quilowatts > 0 && salario > 0) {
        div.innerHTML = `<p>O valor do Quilowatt é R$${umQuilowatt.toFixed(2)}.<br>O valor a ser pago é: R$${valorPago.toFixed(2)}.<br>O valor a ser pago com desconto é: R$${valorDesconto.toFixed(2)}.</p>`;
    } else {
        div.innerHTML = `<p style="color: red;">ERRO - Valor inválido digitado.</p>`;
    }
}

btn.addEventListener('click', calcular);
