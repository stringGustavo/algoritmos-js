let numero = prompt('Digite um número: ');
let div = document.getElementById('resultado');

numero = parseFloat(numero);

div.innerHTML = `<p style="color: blue;">O número digitado foi: ${numero}\nSua raiz cúbica é ${Math.cbrt(numero).toFixed(2)}\nSua raiz quadrada é ${Math.sqrt(numero).toFixed(2)}.</p>`;

console.log(`O número digitado foi: ${numero}\nSua raiz cúbica é ${Math.cbrt(numero)}\nSua raiz quadrada é ${Math.sqrt(numero)}.`)