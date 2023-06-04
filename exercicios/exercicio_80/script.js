const div = document.getElementById('resultado');
const btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = '';

    for (let i = 1; i <= 600; i++) {
        if (i % 2 == 0) {
            div.innerHTML += `${i} `;
        }
    }
}

btn.addEventListener('click', calcular);
