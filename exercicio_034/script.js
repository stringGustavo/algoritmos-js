let diagonalMaior = document.getElementById('maior');
let diagonalMenor = document.getElementById('menor');
let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let area = (diagonalMaior.value * diagonalMenor.value) / 2;

    if(diagonalMaior.value > 0 && diagonalMenor.value > 0) {
        div.innerHTML = `<p style="color: blue;">Área do Losango: ${area}.</p>`;
    } else {
        div.innerHTML = `<p style="color: red;">(ERRO 001) Valores inválidos.</p>`;
    }
}


btn.addEventListener('click', calcular);
