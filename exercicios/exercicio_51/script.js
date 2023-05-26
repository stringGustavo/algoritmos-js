let divNumero = document.getElementById('numeros');
let divMaior = document.getElementById('maior');
let divMenor = document.getElementById('menor');
let btn = document.getElementById('btn');

let numero = [];
let a = 0;
let maior = 0;
let menor = Number.MAX_SAFE_INTEGER;

function calcular() {
    numero.push(parseInt(document.getElementById('numero').value));

    for(let i = 0; i < numero.length; i++) {
        if(numero[i] > maior) {
            maior = numero[i];
        }
        
        if(numero[i] < menor) {
            menor = numero[i];
        }
    }

    divNumero.innerHTML += `<div class="numeros">${numero[a]}</div>`;
    divMaior.innerHTML = `<div class="maior">${maior}</div>`;
    divMenor.innerHTML = `<div class="menor">${menor}</div>`;

    a++;
}

btn.addEventListener('click', calcular);
