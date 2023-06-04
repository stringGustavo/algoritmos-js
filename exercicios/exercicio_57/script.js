let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = '';
    
    let soma = 0;

    for (let i = 1; i <= 100; i++) {
        if(i % 2 == 0 || i % 5 == 0 || i % 7 == 0) {
            div.innerHTML += `${i} `;
            soma += i;
        }
    }

    div.innerHTML += `<p>Soma: ${soma}</p>`;
}

btn.addEventListener('click', calcular);
