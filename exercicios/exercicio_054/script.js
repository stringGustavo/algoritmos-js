let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let soma = 0;

    for(let i = 2; i <= 100; i++) {
        if(i % 2 == 0) {
            soma += i;
            div.innerHTML += `${i} `;
        }
    }

    div.innerHTML += `<p>Soma: ${soma}</p>`;
}

btn.addEventListener('click', calcular);
