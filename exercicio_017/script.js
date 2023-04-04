let div = document.getElementById('resultado');

let areaBase = prompt("Digite o valor da Área da base do triângulo: ");
areaBase = parseFloat(areaBase);

let altura = prompt("Digite o valor da Altura do triângulo: ");
altura = parseFloat(altura);

let volume = areaBase * altura;

div.innerHTML = `<p style="color: blue;">O volume do triângulo é: ${volume}.</p>`;

console.log(`O volume do triângulo é: ${volume}.`);