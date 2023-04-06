let diagonalMaior = document.getElementById('maior');
let diagonalMenor = document.getElementById('menor');
let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let lados = Math.sqrt(Math.pow((diagonalMaior.value / 2), 2) + Math.pow((diagonalMenor.value / 2), 2));

    if(diagonalMaior.value >= diagonalMenor.value && diagonalMaior.value > 0 && diagonalMenor.value > 0) {
        div.innerHTML = `<p style="color: blue;">Valor dos Lados: ${lados.toFixed(3)}</p>`;
    } else {
        div.innerHTML = `<p style="color: red;">(ERRO 001) Valores inválidos.</p>`;
    }
}

btn.addEventListener('click', calcular);
