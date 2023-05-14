let div = document.getElementById('resultado');
let raioMaior = prompt("Digite o valor do raio maior da coroa: ");
raioMaior = parseFloat(raioMaior);

let raioMenor = prompt("Digite o valor do raio menor da coroa: ");
raioMenor = parseFloat(raioMenor);

if(raioMenor > raioMaior) {
    let auxiliar = raioMenor;
    raioMenor = raioMaior;
    raioMaior = auxiliar;
}

let circunferenciaMaior = 3.14 * raioMaior * raioMaior;
let circunferenciaMenor = 3.14 * raioMenor * raioMenor;
let area = circunferenciaMaior - circunferenciaMenor;

if(raioMaior > 0 && raioMenor > 0) {
    div.innerHTML = `<p>A Área da coroa circular é: ${area.toFixed(2)}.</p>`;
    console.log(`A Área da coroa circular é: ${area.toFixed(2)}.`);
} else {
    div.innerHTML = `<p style="color: red;">ERRO - Valor inválido digitado.</p>`;
}