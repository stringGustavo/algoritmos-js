let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let valor = parseInt(document.getElementById('valor').value);

    if (valor % 2 == 0) {
        div.innerHTML = `<p>${valor} + 5 = ${valor += 5}</p>`;
    } else {
        div.innerHTML = `<p>${valor} + 8 = ${valor += 8}</p>`;
    }
}

btn.addEventListener('click', calcular);
