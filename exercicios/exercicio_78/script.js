const div = document.getElementById('resultado');
const btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = '';
    
    let valorA = parseInt(document.getElementById('numero_1').value);
    let valorB = parseInt(document.getElementById('numero_2').value);

    let contadorMultiplos = 0;

    if (valorA > valorB) {
        let aux = valorA;
        valorA = valorB;
        valorB = aux;
    }

    if (valorA != valorB && valorA > 0 && valorB > 0) {
        for (let i = valorA+1; i < valorB; i++) {
            if (i % 3 == 0 && i % 7 == 0) {
                contadorMultiplos++;
                div.innerHTML += `${i} `;
            }
        }

        if (contadorMultiplos == 0) {
            div.innerHTML += `<p>Não existem números múltiplos de 3 e 7.</p>`;
        }
    } else {
        div.innerHTML = '<p style="color: red;">ERRO - Valores inválidos.</p>';
    }
    
}

btn.addEventListener('click', calcular);
