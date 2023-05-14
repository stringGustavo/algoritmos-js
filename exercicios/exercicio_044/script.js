let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = '';
    let valorA = document.getElementById('valorA').value;
    let valorB = document.getElementById('valorB').value;

    let somaPares = 0;

    if( valorA > valorB) {
        let auxiliar = valorA;
        valorA = valorB;
        valorB = auxiliar;
    }

    while(valorA <= valorB) {
        if(valorA % 2 == 0) {
            div.innerHTML += `[${valorA}] `;
            somaPares += parseInt(valorA);
        } else {
            div.innerHTML += `${valorA} `;
        }

        valorA++;
    }

    div.innerHTML += `<br><br>Soma dos números pares: ${somaPares}.`;
}

btn.addEventListener('click', calcular);

