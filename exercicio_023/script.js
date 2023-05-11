let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let numero = document.getElementById('numero').value;
    
    if(numero % 2 == 0) {
        div.innerHTML = `<p>O número ${numero} é PAR.<br>O número ${numero} elevado ao quadrado é ${Math.pow(numero, 2)}.</p>`;
    } else {
        div.innerHTML = `<p>O número ${numero} é ÍMPAR.<br>O número ${numero} elevado ao cubo é: ${Math.pow(numero, 3)}.</p>`;
    }
}

btn.addEventListener('click', calcular);