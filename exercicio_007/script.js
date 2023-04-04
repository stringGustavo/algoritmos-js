let numero = prompt('Digite um número: ');
div = document.getElementById('resultado');

numero = parseInt(numero);

div.innerHTML = `<p style="color: blue;">O número digitado foi ${numero}, seu antecessor é ${numero - 1} e seu sucessor é ${numero + 1}.</p>`

console.log(`O número digitado foi ${numero}, seu antecessor é ${numero - 1} e seu sucessor é ${numero + 1}`);