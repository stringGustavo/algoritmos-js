let numero = prompt('Digite um número: ');
let div = document.getElementById('resultado');

numero = parseFloat(numero);

div.innerHTML = `<p>A raiz quadrada de ${numero} é ${Math.sqrt(numero)}.</p>`;

console.log(`A raiz quadrada de ${numero} é ${Math.sqrt(numero)}.`)