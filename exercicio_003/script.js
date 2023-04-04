let nome = prompt('Digite seu nome: ');
let idade = prompt('Digite sua idade: ');
let div = document.getElementById('resultado')

console.log(`Nome Digitado: ${nome}.\nIdade Digitada: ${idade}.`);

div.innerHTML = `<p>Nome Digitado: ${nome}.<br>Idade Digitada: ${idade}.</p>`