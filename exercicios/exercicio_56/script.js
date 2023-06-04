let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = '';
    
    let soma = 0;
    
    for (let i = 0; i <= 1000; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            div.innerHTML += `${i} `;
            soma += i;
        }
    }

    div.innerHTML += `<p>Soma: ${soma}</p>`;
}

btn.addEventListener('click', calcular);
