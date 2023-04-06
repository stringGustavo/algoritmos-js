let primeiroNumero = document.getElementById('primeiro');
let segundoNumero = document.getElementById('segundo');
let terceiroNumero = document.getElementById('terceiro');
let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcularMaior() {
    div.innerHTML = '';

    calcularPositivosNegativosNulos(primeiroNumero.value);
    calcularPositivosNegativosNulos(segundoNumero.value);
    calcularPositivosNegativosNulos(terceiroNumero.value);

    maior = Math.max(primeiroNumero.value, segundoNumero.value, terceiroNumero.value);

    div.innerHTML += `<p style="color: blue;">O maior número é ${maior}.</p>`;
}

function calcularPositivosNegativosNulos(numero) {
    if(numero < 0) {
        div.innerHTML += `<p style="color: blue;">O número ${numero} é negativo.</p>`;
    } else if (numero > 0) {
        div.innerHTML += `<p style="color: blue;">O número ${numero} é positivo.</p>`;
    } else {
        div.innerHTML += `<p style="color: blue;">O número ${numero} é nulo.</p>`;
    }
}

btn.addEventListener('click', calcularMaior, calcularPositivosNegativosNulos);
