let primeiroNumero = prompt('Digite um número: ');
let segundoNumero = prompt('Digite outro número: ');
let div = document.getElementById('resultado');

primeiroNumero = parseInt(primeiroNumero);
segundoNumero = parseInt(segundoNumero);

div.innerHTML = `<p style="color: blue;">Primeiro Número Digitado: ${primeiroNumero}<br>Primeiro Número Acrescido: ${primeiroNumero + 1}<br><br>Segundo Número Digitado: ${segundoNumero}<br>Segundo Número Decrescido: ${segundoNumero - 1}</p>`

console.log(`Primeiro Número Digitado: ${primeiroNumero}`);
console.log(`Primeiro Número Acrescido: ${primeiroNumero + 1}`);
console.log(`Segundo Número Digitado: ${segundoNumero}`);
console.log(`Segundo Número Decrescido: ${segundoNumero - 1}`);