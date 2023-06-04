let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = '';

    let primeiroNumero = parseInt(document.getElementById('numero_1').value);
    let segundoNumero = parseInt(document.getElementById('numero_2').value);

    if(primeiroNumero > segundoNumero) {
        let aux = primeiroNumero;
        primeiroNumero = segundoNumero;
        segundoNumero = aux;
    }

    for (let i = primeiroNumero; i <= segundoNumero; i++) {
        if(i % 2 == 0 && i % 7 == 0) {
            div.innerHTML += `${i} `;
        }
    }
}

btn.addEventListener('click', calcular);
