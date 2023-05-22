let resultado = document.getElementById('resultado');
let btn = document.getElementById('btn');

function calcular() {
    resultado.innerHTML = '';
    
    const quantidade = parseInt(document.getElementById('qnt').value);
    
    let c = 1, a = b = contador = copia = 0;
    let vetorBinario = [0];
    while(contador < quantidade) {
        contador++;
        
        resultado.innerHTML += `${contador}º. ${b} -> `;

        copia = b;
        
        while(copia > 0) {
            vetorBinario.push(copia % 2);
            copia = parseInt(copia / 2);
        }
        
        for (let i = vetorBinario.length-1; i >= 0; i--) {
            resultado.innerHTML += `${vetorBinario[i]}`;
        }
        
        resultado.innerHTML += `<span class="base">2</span><br>`;
        
        a = b + c;
        b = c;
        c = a;
        
        vetorBinario = [];
    }
}

btn.addEventListener('click', calcular);