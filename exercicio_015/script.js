let div = document.getElementById('resultado');

let ladoA = prompt('Digite o valor do Lado A: ');
ladoA = parseFloat(ladoA);

let ladoB = prompt('Digite o valor do Lado B: ');
ladoB = parseFloat(ladoB);

let ladoC = prompt('Digite o valor do Lado C: ');
ladoC = parseFloat(ladoC);

let volume = ladoA * ladoB * ladoC;

div.innerHTML = `<p style="color: blue;">Volume: ${volume}.</p>`;

console.log(`Volume: ${volume}.`);