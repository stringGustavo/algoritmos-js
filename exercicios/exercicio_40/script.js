let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let numero = 0;
    let soma = 0;

    while(numero <= 100) {
        soma += numero;
        numero++;
    }

    div.innerHTML = `<p>Soma dos números de 0 à 100: ${soma}.</p>`;
}

btn.addEventListener('click', calcular);
