let div = document.getElementById('resultado');
let raio = prompt("Digite o valor do raio da esfera: ");
raio = parseFloat(raio);

let area = 4 * 3.14 * raio * raio;
let volume = 4 / 3.0 * 3.14 * raio * raio * raio;

div.innerHTML = `<p style="color: blue;">A Área da Esfera é: ${area.toFixed(2)}m².<br> O Volume da Esfera é: ${volume.toFixed(2)}cm³.</p>`;
console.log(`A Área da Esfera é: ${area.toFixed(2)}m².\n O Volume da Esfera é: ${volume.toFixed(2)}cm³.`);