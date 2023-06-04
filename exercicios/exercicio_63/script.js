let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = '';

    let limiteSuperior  = parseInt(document.getElementById('limite-sup').value);
    let incremento = parseInt(document.getElementById('incremento').value);

    if (incremento > 0 && limiteSuperior > 0) {
        for (let i = 0; i <= limiteSuperior; i += incremento) {
            div.innerHTML += `${i} `;
        }
    } else {
        div.innerHTML = '<p style="color: red">ERRO - Valores inválidos.</p>';
    }
}

btn.addEventListener('click', calcular);
