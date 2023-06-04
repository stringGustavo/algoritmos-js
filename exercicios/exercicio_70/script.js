const div = document.getElementById('resultado');
const btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = '';

    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            div.innerHTML += `*`;
        } else {
            div.innerHTML += `@@`;
        }
        
        if (i % 10 == 0) {
            div.innerHTML += `<br>`;
        }
    }
}

btn.addEventListener('click', calcular);
