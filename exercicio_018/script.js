let div = document.getElementById('resultado');
let raioMaior = prompt("Digite o valor do raio maior da coroa: ");
raioMaior = parseFloat(raioMaior);

let raioMenor = prompt("Digite o valor do raio menor da coroa: ");
raioMenor = parseFloat(raioMenor);

let circunferenciaMaior = 3.14 * raioMaior * raioMaior;
let circunferenciaMenor = 3.14 * raioMenor * raioMenor;
let area = circunferenciaMaior - circunferenciaMenor;

div.innerHTML = `<p style="color: blue;">A Área da coroa circular é: ${area.toFixed(2)}.</p>`;

console.log(`A Área da coroa circular é: ${area.toFixed(2)}.`);