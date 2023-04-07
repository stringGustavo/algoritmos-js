let valor = document.getElementById('valor');
let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    div.innerHTML = "";
    let contador = 0;
    
    if(valor.value > 0) {
        while(contador <= valor.value) {
            div.innerHTML += `${contador} `;
            contador++;
        }
    } else {
        div.innerHTML = `<p style="color: red;">(ERRO 001) Digite um valor maior que zero!</p>`;
    }
}

btn.addEventListener('click', calcular);
