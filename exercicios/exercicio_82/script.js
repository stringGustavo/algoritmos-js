const div = document.getElementById('resultado');
const btn = document.getElementById('btn');

function imprimir() {
    div.innerHTML = `<p>`;
    
    for(let i = 120; i <= 300; i++) {
        div.innerHTML += `${i} `;
    }
    
    div.innerHTML += `</p>`;
}

btn.addEventListener('click', imprimir);
