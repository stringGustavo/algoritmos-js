let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = "";
    let numero = document.getElementById('valor').value;

    let limite = 20;

    if(numero < 10) {
        while(numero <= limite) {
            div.innerHTML += `${limite} `;
            limite--;
        }
    } else {
        div.innerHTML = `<p style="color: red;">ERRO - Valor inválido digitado.</p>`;
    }
}

btn.addEventListener('click', calcular);