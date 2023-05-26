let div = document.getElementById('resultado');
let btn = document.getElementById('btn');

function prmpt() {
    let numero = prompt('Digite um número: ');
    
    numero = parseFloat(numero);
    
    div.innerHTML = `<p>O número digitado foi ${numero}, seu valor elevado a 2 é ${Math.pow(numero, 2)}, elevado a 3 é ${Math.pow(numero, 3)}, elevado a 4 é ${Math.pow(numero, 4)}, elevado a 5 é ${Math.pow(numero, 5)}.</p>`;
    console.log(`O número digitado foi ${numero}, seu valor elevado a 2 é ${Math.pow(numero, 2)}, elevado a 3 é ${Math.pow(numero, 3)}, elevado a 4 é ${Math.pow(numero, 4)}, elevado a 5 é ${Math.pow(numero, 5)}.`);
}

btn.addEventListener('click', prmpt);
