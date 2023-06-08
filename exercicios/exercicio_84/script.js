let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function imprimir() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    
    div.innerHTML = `<p>`;
    
    for(let i = 1; i <= quantidade; i++) {
        (i % 2 == 0) ? div.innerHTML += `${i} ` : quantidade++;
    }

    div.innerHTML += `</p>`;
}

btn.addEventListener('click', imprimir);
