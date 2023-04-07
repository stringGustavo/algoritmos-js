let valor = document.getElementById('valor');
let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let numero = valor.value;

    if(numero > 0) {
        div.innerHTML = `<p style="color: blue;">O número digitado foi ${numero}.<br>E sua raiz quadrada é ${Math.sqrt(numero).toFixed(2)}.</p>`;
    } else {
        div.innerHTML = `<p style="color: blue;">O número digitado foi ${numero}.<br>E seu quadrado é ${Math.pow(numero, 2)}.</p>`;
    }
}

btn.addEventListener('click', calcular);
