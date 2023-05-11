let resultado = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    resultado.innerHTML = "";

    let primeiroNumero = parseInt(document.getElementById('primeiroNumero').value);
    let segundoNumero = parseInt(document.getElementById('segundoNumero').value);

    if(primeiroNumero > segundoNumero) {
        let auxiliar = primeiroNumero;
        primeiroNumero = segundoNumero;
        segundoNumero = auxiliar;
    }

    
    for(let i = primeiroNumero; i <= segundoNumero; i++) {
        resultado.innerHTML += `${i} `;
    }

    if(primeiroNumero == segundoNumero) {
        resultado.innerHTML += "<br>Os números são iguais.";
    }
}

btn.addEventListener('click', calcular);
