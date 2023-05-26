let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let primeiraNota = document.getElementById('nota1').value;
    let segundaNota = document.getElementById('nota2').value;
    let terceiraNota = document.getElementById('nota3').value;

    notaFinal = ((parseFloat(primeiraNota) + parseFloat(segundaNota) + parseFloat(terceiraNota)) / 3);

    if(primeiraNota >= 0 && segundaNota >= 0 && terceiraNota >= 0 && primeiraNota <= 10 && segundaNota <= 10 && terceiraNota <= 10) {
        if(notaFinal >= 7.50) {
            div.innerHTML = `<p>Média: ${notaFinal.toFixed(2)}<br>Aprovado!</p>`;
        } else {
            div.innerHTML = `<p>Média: ${notaFinal.toFixed(2)}<br>Reprovado!</p>`;
        }
    } else {
        div.innerHTML = `<p style="color: red;">ERRO - Valor inválido digitado.</p>`;
    }

}

btn.addEventListener('click', calcular);