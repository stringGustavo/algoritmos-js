let raio = prompt("Digite o valor do Raio do círculo: ");
let div = document.getElementById('resultado');

raio = parseFloat(raio);

let area = (3.14 * (raio * raio));
let perimetro = (2 * 3.14 * raio);

div.innerHTML = `<p style="color: blue;">Área: ${area.toFixed(2)}\nPerímetro: ${perimetro.toFixed(2)}.</p>`;

console.log(`Área: ${area.toFixed(2)}\nPerímetro: ${perimetro.toFixed(2)}.`);