let primeiraNota = prompt('Digite a primeira nota: ');
let segundaNota = prompt('Digite a segunda nota: ');
let terceiraNota = prompt('Digite a terceira nota: ');
let quartaNota = prompt('Digite a quarta nota: ');
let div = document.getElementById('resultado');

mediaPonderada = (parseFloat(primeiraNota) + (parseFloat(segundaNota) * 2) + (parseFloat(terceiraNota) * 3) + (parseFloat(quartaNota) * 4)) / 10;

div.innerHTML = `<p style="color: blue;">A média ponderada é : ${mediaPonderada}.</p>`;

console.log(`A média ponderada é : ${mediaPonderada}.`);