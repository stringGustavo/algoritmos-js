let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let diagonalMaior = document.getElementById('maior').value;
    let diagonalMenor = document.getElementById('menor').value;

    if(diagonalMenor > diagonalMaior) {
        let auxiliar = diagonalMenor;
        diagonalMenor = diagonalMaior;
        diagonalMaior = auxiliar;
    }

    let area = (diagonalMaior * diagonalMenor) / 2;

    if(diagonalMaior > 0 && diagonalMenor > 0) {
        div.innerHTML = `<p>Área do Losango: ${area}.</p>`;
    } else {
        div.innerHTML = `<p style="color: red;">ERRO - Valor inválido digitado.</p>`;
    }
}


btn.addEventListener('click', calcular);
