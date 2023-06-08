let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function imprimir() {
    let numero = parseInt(document.getElementById('numero').value);
    
    div.innerHTML = '<p>';
    
    for (let i = 0; i < numero; i++) {
        if (i % 2 != 0) {
            div.innerHTML += `${i} `;
        }
    }

    div.innerHTML += '</p>';
}

btn.addEventListener('click', imprimir);
