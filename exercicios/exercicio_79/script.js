const div = document.getElementById('resultado');
const btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = '';
    
    for (let i = 1; i <= 20; i++) {
        div.innerHTML += `${Math.pow(i, 2)} `;
    }
}

btn.addEventListener('click', calcular);
