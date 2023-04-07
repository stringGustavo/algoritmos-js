let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    let contador = 1;
    let valor;

    while(contador <= 5) {
        valor = +prompt(`Digite o ${contador}º número.`);
        
        document.getElementById('resultado').style.color = "blue";
       
        div.innerHTML += `${valor} ao quadrado é: ${Math.pow(valor, 2)}.<br>`;
        console.log(`${valor} ao quadrado é: ${Math.pow(valor, 2)}.\n`);
        //document.write(`<p style="color: blue;>${valor} ao quadrado é: ${Math.pow(valor, 2)}</p>`);
        
        contador++;
    }
}

btn.addEventListener('click', calcular);
