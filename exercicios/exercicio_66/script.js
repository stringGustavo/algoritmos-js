let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let valorA = parseInt(document.getElementById('valorA').value);
    let valorB = parseInt(document.getElementById('valorB').value);
    
    let valorC = 0;

    if(valorA == valorB) {
        valorC = valorA + valorB;
        div.innerHTML = `<p>A + B = ${valorC}</p>`;
    } else {
        valorC = valorA * valorB;
        div.innerHTML = `<p>A * B = ${valorC}</p>`;
    }
}

btn.addEventListener('click', calcular);
