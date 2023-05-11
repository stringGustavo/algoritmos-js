let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let valorA = document.getElementById('valorA').value;
    let valorB = document.getElementById('valorB').value;
    let valorC = document.getElementById('valorC').value;

    let somaQuadrados = Math.pow(valorA, 2) + Math.pow(valorB, 2) + Math.pow(valorC, 2);

    if (somaQuadrados % 2 == 0) {
        div.innerHTML = `<p>A soma dos quadrados de ${valorA}, ${valorB}, ${valorC} é: ${somaQuadrados}</p>`;
        div.innerHTML += `<p>${somaQuadrados} é Par!</p>`;
    } else {
        div.innerHTML = `<p>A soma dos quadrados de ${valorA}, ${valorB}, ${valorC} é: ${somaQuadrados}</p>`;
        div.innerHTML += `<p>${somaQuadrados} é Ímpar!</p>`;
    }
}

btn.addEventListener('click', calcular);
