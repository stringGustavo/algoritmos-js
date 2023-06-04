const div = document.getElementById('resultado');
const btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = '';
    
    const valores = document.getElementById('numeros').value;

    let numeros = [];

    numeros = valores.split(' ');
    numeros = numeros.map(Number);

    for (let i = 0; i < numeros.length; i++) {
        if (isNaN(numeros[i])) {
            div.innerHTML = '<p style="color: red;">ERRO - Valor inválido digitado.</p>';
            return;
        }

        div.innerHTML += `<p>${i+1}º Número: ${numeros[i]} - Metade: ${numeros[i] / 2}</p>`;
    }
}

btn.addEventListener('click', calcular);
