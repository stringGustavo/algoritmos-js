let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = '';
    let valorA = document.getElementById('valorA').value;
    let valorB = document.getElementById('valorB').value;

    let soma = 0;

    if(valorA > valorB) {
        let auxiliar = valorA;
        valorA = valorB;
        valorB = auxiliar;
    }

    while(valorA <= valorB) {
        div.innerHTML += `${valorA} `;
        soma += parseInt(valorA);
        valorA++;
    }

    div.innerHTML += `<br><br>Soma dos números: ${soma}.`;
}

btn.addEventListener('click', calcular);
