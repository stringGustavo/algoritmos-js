let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function prmpt() {
    let nome = prompt('Digite seu nome: ');
    let idade = prompt('Digite sua idade: ');
    
    console.log(`Nome Digitado: ${nome}.\nIdade Digitada: ${idade}.`);
    
    div.innerHTML = `<p>Nome Digitado: ${nome}.<br>Idade Digitada: ${idade}.</p>`
}

btn.addEventListener('click', prmpt);