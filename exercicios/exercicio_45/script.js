let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = '';
    let contador = 1;
    let valor;

    while(contador <= 5) {
        valor = +prompt(`Digite o ${contador}º número.`);
       
        div.innerHTML += `${valor} ao quadrado é: ${Math.pow(valor, 2)}.<br>`;
        console.log(`${valor} ao quadrado é: ${Math.pow(valor, 2)}.\n`);
        
        contador++;
    }
}

btn.addEventListener('click', calcular);
