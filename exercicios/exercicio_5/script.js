let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function prmpt() {
    let numero_1 = prompt('Digite o primeiro número: ');
    let numero_2 = prompt('Digite o segundo número: ');
    let numero_3 = prompt('Digite o terceiro número: ');
    let numero_4 = prompt('Digite o quarto número: ');
    let numero_5 = prompt('Digite o quinto número: ');
    
    numero_1 = parseInt(numero_1);
    numero_2 = parseInt(numero_2);
    numero_3 = parseInt(numero_3);
    numero_4 = parseInt(numero_4);
    numero_5 = parseInt(numero_5);
    
    let soma = numero_1 + numero_2 + numero_3 + numero_4 + numero_5;
    
    div.innerHTML = `<p>Os números digitados foram ${numero_1}, ${numero_2}, ${numero_3}, ${numero_4}, ${numero_5} e sua soma é ${soma}.</p>`;
    
    console.log(`Os números digitados foram ${numero_1}, ${numero_2}, ${numero_3}, ${numero_4}, ${numero_5} e sua soma é ${soma}.`);
}

btn.addEventListener('click', prmpt);