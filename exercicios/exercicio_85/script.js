let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let numero = parseInt(document.getElementById('numero').value);
    let produto = 1;

    div.innerHTML = '<p>';

    for (let i = 1; i <= numero; i++) {
        div.innerHTML += `${i} `;
        
        produto *= i;
    }

    div.innerHTML += '</p>';
    div.innerHTML += `<p>Produto: ${produto}</p>`;
}

btn.addEventListener('click', calcular);
