let valorA = document.getElementById('valorA');
let valorB = document.getElementById('valorB');
let valorC = document.getElementById('valorC');
let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let somaQuadrados = Math.pow(valorA.value, 2) + Math.pow(valorB.value, 2) + Math.pow(valorC.value, 2);

    if (somaQuadrados % 2 == 0) {
        div.innerHTML = `<p style="color: blue;">A soma dos quadrados de ${valorA.value}, ${valorB.value}, ${valorC.value} é: ${somaQuadrados}</p>`;
        div.innerHTML += `<p style="color: green;">${somaQuadrados} é Par!</p>`;
    } else {
        div.innerHTML = `<p style="color: blue;">A soma dos quadrados de ${valorA.value}, ${valorB.value}, ${valorC.value} é: ${somaQuadrados}</p>`;
        div.innerHTML += `<p style="color: red;">${somaQuadrados} é Ímpar!</p>`;
    }
}

btn.addEventListener('click', calcular);
