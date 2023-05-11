let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = "";
    let valor = document.getElementById('valor').value;

    let contador = 0;
    
    if(valor > 0) {
        while(contador <= valor) {
            div.innerHTML += `${contador} `;
            contador++;
        }
    } else {
        div.innerHTML = `<p style="color: red;">ERRO - Valor inválido digitado.</p>`;
    }
}

btn.addEventListener('click', calcular);
