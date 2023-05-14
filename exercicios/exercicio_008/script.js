let lado = prompt('Digite o valor do Lado do Quadrado: ');
let div = document.getElementById('resultado');

let area = lado * lado;
let perimetro = lado * 4;

div.innerHTML = `<p>Área do Quadrado: ${area}.<br>Perímetro do Quadrado: ${perimetro}.</p>`;

console.log(`Área do Quadrado: ${area}`);
console.log(`Perímetro do Quadrado: ${perimetro}`);