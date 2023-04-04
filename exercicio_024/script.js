let quilowatts = document.getElementById('qwatt');
let salario = document.getElementById('salario');
let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let umQuilowatt = salario.value / 7 / 100;
    let valorPago = quilowatts.value * umQuilowatt;
    let desconto = valorPago * 0.10;
    let valorDesconto = valorPago - desconto;

    div.innerHTML = `<p style="color: blue;">O valor do Quilowatt é R$${umQuilowatt.toFixed(2)}.<br>O valor a ser pago é: R$${valorPago.toFixed(2)}.<br>O valor a ser pago com desconto é: R$${valorDesconto.toFixed(2)}.</p>`;
}

btn.addEventListener('click', calcular);
