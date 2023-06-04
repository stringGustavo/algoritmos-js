let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = '';
    
    let valores = document.getElementById('valores').value;
    let numeros = [];

    numeros = valores.split(' ');
    numeros = numeros.map(Number);

    if (numeros.length == 3) {
        for (let i = 0; i < numeros.length; i++) {
            if (isNaN(numeros[i])) {
                div.innerHTML = '<p style="color: red;">ERRO - Valor inválido digitado.</p>';
                return;
            }

            for (let j = 0; j < numeros.length; j++) {
                if (numeros[i] < numeros[j]) {
                    let aux = numeros[i];
                    numeros[i] = numeros[j];
                    numeros[j] = aux;
                }
            }
        }
    
        for (let i = 0; i < numeros.length; i++) {
            div.innerHTML += `${numeros[i]} `;
        }
    } else {
        div.innerHTML = '<p style="color: red;">ERRO - Quantidade inválida.</p>';
    }
}

btn.addEventListener('click', calcular);
