let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = '';

    for (let i = 300; i >= 30; i--) {
        if(i % 3 == 0 && i % 5 == 0) {
            div.innerHTML += `${i} `;
        }
    }
}

btn.addEventListener('click', calcular);
