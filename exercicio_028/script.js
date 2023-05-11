let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcularMaior() {
    div.innerHTML = '';

    let primeiroNumero = document.getElementById('primeiro').value;
    let segundoNumero = document.getElementById('segundo').value;
    let terceiroNumero = document.getElementById('terceiro').value;

    calcularPositivosNegativosNulos(primeiroNumero);
    calcularPositivosNegativosNulos(segundoNumero);
    calcularPositivosNegativosNulos(terceiroNumero);

    maior = Math.max(primeiroNumero, segundoNumero, terceiroNumero);

    div.innerHTML += `<p>O maior número é ${maior}.</p>`;
}

function calcularPositivosNegativosNulos(numero) {
    if(numero < 0) {
        div.innerHTML += `<p>O número ${numero} é negativo.</p>`;
    } else if (numero > 0) {
        div.innerHTML += `<p>O número ${numero} é positivo.</p>`;
    } else {
        div.innerHTML += `<p>O número ${numero} é nulo.</p>`;
    }
}

btn.addEventListener('click', calcularMaior, calcularPositivosNegativosNulos);
