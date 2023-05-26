let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function prmpt() {
    let ladoA = prompt('Digite o valor do Lado A: ');
    ladoA = parseFloat(ladoA);
    
    let ladoB = prompt('Digite o valor do Lado B: ');
    ladoB = parseFloat(ladoB);
    
    let ladoC = prompt('Digite o valor do Lado C: ');
    ladoC = parseFloat(ladoC);
    
    let volume = ladoA * ladoB * ladoC;
    
    if(volume > 0) {
        div.innerHTML = `<p>Volume: ${volume}.</p>`;
        console.log(`Volume: ${volume}.`)   
    } else {
        div.innerHTML = `<p style="color: red;">ERRO - Valor Inválido digitado.</p>`;
    }
}

btn.addEventListener('click', prmpt);
