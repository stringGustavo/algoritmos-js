let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let valor = document.getElementById('valor').value;

    if(valor > 0) {
        div.innerHTML = `<p>O número digitado foi ${valor}.<br>E sua raiz quadrada é ${Math.sqrt(valor).toFixed(2)}.</p>`;
    } else if(valor == 0){
        div.innerHTML = `<p>O número digitado foi ${valor}.</p>`;
    } else {
        div.innerHTML = `<p>O número digitado foi ${valor}.<br>E seu quadrado é ${Math.pow(valor, 2)}.</p>`;
    }
}

btn.addEventListener('click', calcular);
