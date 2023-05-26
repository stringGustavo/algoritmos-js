let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function prmpt() {
    let areaBase = prompt("Digite o valor da Área da base do triângulo: ");
    areaBase = parseFloat(areaBase);
    
    let altura = prompt("Digite o valor da Altura do triângulo: ");
    altura = parseFloat(altura);
    
    let volume = areaBase * altura;
    
    if(areaBase > 0 && altura > 0) {
        div.innerHTML = `<p>O volume do triângulo é: ${volume}.</p>`;
        console.log(`O volume do triângulo é: ${volume}.`);
    } else {
        div.innerHTML = `<p style="color: red;">ERRO - Valor inválido digitado.</p>`;
    }
}

btn.addEventListener('click', prmpt);
