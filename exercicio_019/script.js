let div = document.getElementById('resultado');
let = raio = prompt("Digite o valor do Raio do Cilindro: ");
raio = parseFloat(raio);

let altura = prompt("Digite o valor da Altura do Ciilindro: ");
altura = parseFloat(altura);

let volume = 3.14 * (raio * raio) * altura;

div.innerHTML = `<p style="color: blue;">O volume do Cilindro é: ${volume}.</p>`;

console.log(`O volume do Cilindro é: ${volume}.`);