let numero = document.getElementById('numero');
let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {

    if(numero.value % 2 == 0) {
        div.innerHTML = `<p style="color: blue;">O número ${numero.value} é PAR.<br>O número ${numero.value} elevado ao quadrado é ${Math.pow(numero.value, 2)}.</p>`;
    } else {
        div.innerHTML = `<p style="color: blue;">O número ${numero.value} é ÍMPAR.<br>O número ${numero.value} elevado ao cubo é: ${Math.pow(numero.value, 3)}.</p>`;
    }
}

btn.addEventListener('click', calcular);