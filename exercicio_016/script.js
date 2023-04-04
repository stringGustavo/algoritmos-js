let div = document.getElementById('resultado');

let baseMaior = prompt('Digite o valor da base maior do trapézio: ');
baseMaior = parseFloat(baseMaior);

let baseMenor = prompt('Digite o valor da base menor do trapézio: ');
baseMenor = parseFloat(baseMenor);

let altura = prompt('Digite o valor da altura do trapézio: ');
altura = parseFloat(altura);

let area = (((baseMaior + baseMenor) * altura) / 2);

div.innerHTML = `<p style="color: blue;">A Área do trapézio é: ${area}.</p>`;

console.log(`A Área do trapézio é: ${area}.`);