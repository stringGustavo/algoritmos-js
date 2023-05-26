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

    let lados = Math.sqrt(Math.pow((diagonalMaior / 2), 2) + Math.pow((diagonalMenor / 2), 2));

    if(diagonalMaior >= diagonalMenor && diagonalMaior > 0 && diagonalMenor > 0) {
        div.innerHTML = `<p>Valor dos Lados: ${lados.toFixed(3)}</p>`;
    } else {
        div.innerHTML = `<p style="color: red;">ERRO - Valor inválido digitado.</p>`;
    }
}

btn.addEventListener('click', calcular);
