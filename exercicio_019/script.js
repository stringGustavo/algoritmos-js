let div = document.getElementById('resultado');
let = raio = prompt("Digite o valor do Raio do Cilindro: ");
raio = parseFloat(raio);

let altura = prompt("Digite o valor da Altura do Ciilindro: ");
altura = parseFloat(altura);

let volume = 3.14 * (raio * raio) * altura;

if(raio > 0 && altura > 0) {
    div.innerHTML = `<p>O volume do Cilindro é: ${volume.toFixed(3)}.</p>`;
    console.log(`O volume do Cilindro é: ${volume.toFixed(3)}.`);
} else {
    div.innerHTML = `<p style="color: red;">ERRO - Valor inválido digitado.</p>`;
}