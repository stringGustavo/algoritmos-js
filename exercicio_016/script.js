let div = document.getElementById('resultado');

let baseMaior = prompt('Digite o valor da base maior do trapézio: ');
baseMaior = parseFloat(baseMaior);

let baseMenor = prompt('Digite o valor da base menor do trapézio: ');
baseMenor = parseFloat(baseMenor);

let altura = prompt('Digite o valor da altura do trapézio: ');
altura = parseFloat(altura);

if(baseMenor > baseMaior) {
    let auxiliar = baseMenor;
    baseMenor = baseMaior;
    baseMaior = auxiliar;
}

let area = (((baseMaior + baseMenor) * altura) / 2);

if(baseMaior > 0 && baseMenor > 0 && altura > 0) {
    div.innerHTML = `<p>A Área do trapézio é: ${area}.</p>`;
    console.log(`A Área do trapézio é: ${area}.`);
} else {
    div.innerHTML = `<p style="color: red;">ERRO - Valor inválido digitado.</p>`;
}