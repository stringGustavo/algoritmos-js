let base = prompt('Digite o valor da base do retângulo: ');
let altura = prompt('Digite o valor da altura do retângulo: ');
let div = document.getElementById('resultado');

base = parseInt(base);
altura = parseInt(altura);

let area = base * altura;
let perimetro = base + base + altura + altura;

div.innerHTML = `<p style="color: blue;">Área: ${area}.<br>Perímetro: ${perimetro}.`;

console.log(`Área: ${area}.`);
console.log(`Perímetro: ${perimetro}.`);