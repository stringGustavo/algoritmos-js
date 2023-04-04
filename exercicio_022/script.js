let primeiraNota = document.getElementById('nota1');
let segundaNota = document.getElementById('nota2');
let terceiraNota = document.getElementById('nota3');
let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    
    notaFinal = ((parseFloat(primeiraNota.value) + parseFloat(segundaNota.value) + parseFloat(terceiraNota.value)) / 3);
    
    if(notaFinal >= 7.50) {
        div.innerHTML = `<p style="color: blue;">Média: ${notaFinal.toFixed(2)}<br>Aprovado!</p>`;
    } else {
        div.innerHTML = `<p style="color: blue;">Média: ${notaFinal.toFixed(2)}<br>Reprovado!</p>`;
    }
}

btn.addEventListener('click', calcular);