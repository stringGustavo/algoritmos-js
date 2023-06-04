let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = '';
    
    for (let i = 1000; i >= 150; i--) {
        if (i % 2 != 0) {
            div.innerHTML += `${i} `;
        }
    }
}

btn.addEventListener('click', calcular);
