let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = '<p>';

    for (let i = 25; i <= 200; i++) {
        if (i % 2 == 0) {
            div.innerHTML += `${i} `;
        }
    }

    div.innerHTML += '</p>';
}

btn.addEventListener('click', calcular);
